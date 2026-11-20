import {
  contactFormFields,
  validateContactField,
  type ContactFormField,
  type ContactFormValues,
} from "../src/data/contact"

const maxBodyBytes = 32 * 1024
const rateLimitWindowMs = 10 * 60 * 1000
const rateLimitMaxRequests = 5
const rateLimitBuckets = new Map<
  string,
  { count: number; resetAt: number }
>()

function jsonResponse(
  body: unknown,
  status = 200,
  additionalHeaders: Record<string, string> = {},
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      ...additionalHeaders,
    },
  })
}

function hasSameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return false

  try {
    return new URL(origin).origin === new URL(request.url).origin
  } catch {
    return false
  }
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")
  const clientIp =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip")?.trim()

  return clientIp || "unknown"
}

function getRateLimitRetryAfter(clientKey: string) {
  const now = Date.now()
  const bucket = rateLimitBuckets.get(clientKey)

  if (!bucket || bucket.resetAt <= now) {
    rateLimitBuckets.set(clientKey, {
      count: 1,
      resetAt: now + rateLimitWindowMs,
    })
    return 0
  }

  if (bucket.count >= rateLimitMaxRequests) {
    return Math.max(1, Math.ceil((bucket.resetAt - now) / 1000))
  }

  bucket.count += 1
  return 0
}

function pruneRateLimitBuckets() {
  if (rateLimitBuckets.size <= 5000) return

  const now = Date.now()
  for (const [clientKey, bucket] of rateLimitBuckets) {
    if (bucket.resetAt <= now) rateLimitBuckets.delete(clientKey)
  }

  while (rateLimitBuckets.size > 5000) {
    const oldestKey = rateLimitBuckets.keys().next().value
    if (!oldestKey) break
    rateLimitBuckets.delete(oldestKey)
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

export async function POST(request: Request) {
  if (!hasSameOrigin(request)) {
    return jsonResponse(
      { ok: false, message: "La demande n'a pas pu être vérifiée." },
      403,
    )
  }

  if (
    request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !==
    "application/json"
  ) {
    return jsonResponse(
      { ok: false, message: "Le format de la demande est invalide." },
      415,
    )
  }

  const contentLength = Number(request.headers.get("content-length"))
  if (Number.isFinite(contentLength) && contentLength > maxBodyBytes) {
    return jsonResponse(
      { ok: false, message: "La demande est trop volumineuse." },
      413,
    )
  }

  let rawBody: string
  try {
    rawBody = await request.text()
  } catch {
    return jsonResponse(
      { ok: false, message: "La demande n'a pas pu être lue." },
      400,
    )
  }

  if (new TextEncoder().encode(rawBody).byteLength > maxBodyBytes) {
    return jsonResponse(
      { ok: false, message: "La demande est trop volumineuse." },
      413,
    )
  }

  let payload: unknown
  try {
    payload = JSON.parse(rawBody)
  } catch {
    return jsonResponse(
      { ok: false, message: "Le contenu de la demande est invalide." },
      400,
    )
  }

  if (!isRecord(payload)) {
    return jsonResponse(
      { ok: false, message: "Le contenu de la demande est invalide." },
      400,
    )
  }

  if (typeof payload.website === "string" && payload.website.trim()) {
    return jsonResponse({ ok: true, message: "Votre message a bien été envoyé." })
  }

  const clientKey = getClientKey(request)
  const retryAfter = getRateLimitRetryAfter(clientKey)
  pruneRateLimitBuckets()
  if (retryAfter > 0) {
    return jsonResponse(
      {
        ok: false,
        message:
          "Trop de tentatives. Réessayez dans quelques minutes ou contactez-moi directement.",
      },
      429,
      { "Retry-After": String(retryAfter) },
    )
  }

  const values: ContactFormValues = {
    name: typeof payload.name === "string" ? payload.name.trim() : "",
    email: typeof payload.email === "string" ? payload.email.trim() : "",
    subject: typeof payload.subject === "string" ? payload.subject.trim() : "",
    message: typeof payload.message === "string" ? payload.message.trim() : "",
  }

  const errors: Partial<Record<ContactFormField, string>> = {}
  for (const field of contactFormFields) {
    const error = validateContactField(field, values[field])
    if (error) errors[field] = error
  }
  if (Object.keys(errors).length > 0) {
    return jsonResponse(
      {
        ok: false,
        message: "Vérifiez les informations saisies puis réessayez.",
        errors,
      },
      400,
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  const recipient = process.env.CONTACT_TO_EMAIL
  const sender = process.env.RESEND_FROM_EMAIL
  const missingConfiguration = [
    !apiKey && "RESEND_API_KEY",
    !recipient && "CONTACT_TO_EMAIL",
    !sender && "RESEND_FROM_EMAIL",
  ].filter((value): value is string => Boolean(value))

  if (missingConfiguration.length > 0) {
    console.error("Contact form configuration is missing:", missingConfiguration)
    return jsonResponse(
      {
        ok: false,
        message:
          "Le service de contact est temporairement indisponible. Réessayez plus tard.",
      },
      503,
    )
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: values.email,
        subject: `[Portfolio] ${values.subject}`,
        text: [
          "Nouveau message reçu depuis le portfolio.",
          "",
          `Nom : ${values.name}`,
          `E-mail : ${values.email}`,
          `Sujet : ${values.subject}`,
          "",
          "Message :",
          values.message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    })

    if (!resendResponse.ok) {
      console.error("Resend rejected a contact email:", resendResponse.status)
      return jsonResponse(
        {
          ok: false,
          message:
            "L'envoi a échoué. Réessayez ou contactez-moi directement.",
        },
        502,
      )
    }

    return jsonResponse({ ok: true, message: "Votre message a bien été envoyé." })
  } catch (error) {
    console.error(
      "Resend request failed:",
      error instanceof Error ? error.name : "UnknownError",
    )
    return jsonResponse(
      {
        ok: false,
        message: "L'envoi a échoué. Réessayez ou contactez-moi directement.",
      },
      502,
    )
  }
}
