import { FormEvent, useState } from "react"
import { Button, Footer, Header, Icon, Wave } from "../App"
import {
  collaborationModes,
  contactInfo,
  contactSubjects,
  faqItems,
} from "../data/contact"
import { profile } from "../data/profile"
import "../contact.css"

type FormValues = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

function ContactIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    phone: <path d="M7 3 4 5c-1 8 7 16 15 15l2-3-5-4-2 3c-3-1-6-4-7-7l3-2Z" />,
    pin: (
      <>
        <path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13Z" />
        <circle cx="12" cy="9" r="2" />
      </>
    ),
    github: (
      <path d="M15 21v-4c.1-1-.4-1.8-1-2.3 3.3-.4 6.8-1.6 6.8-7.3 0-1.6-.6-2.9-1.6-3.9.2-.4.7-1.9-.2-3.8-2-.2-3.5.7-4.4 1.5a15 15 0 0 0-8 0C5.7.4 4.2-.5 2.2-.3c-.9 1.9-.4 3.4-.2 3.8A5.6 5.6 0 0 0 .4 7.4c0 5.7 3.5 6.9 6.8 7.3-.5.4-.9 1.1-1 2.1V21" />
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4m8-4v4M3 10h18m-13 4h2m4 0h2m-8 4h2" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21c0-5 3-8 8-8s8 3 8 8" />
      </>
    ),
    pencil: <path d="m4 20 4-1 11-11-3-3L5 16Zm10-13 3 3M4 20l1-4" />,
    person: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2" />
        <path d="M3 20c0-4 2-6 6-6s6 2 6 6m0-4c4-1 6 1 6 4" />
      </>
    ),
    screen: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8m-4-4v4" />
      </>
    ),
    link: (
      <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2m3 6a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2" />
    ),
    building: (
      <path d="M4 21V5l8-3v19m0-13h8v13M8 7v2m0 3v2m0 3v2m8-7v2m0 3v2M2 21h20" />
    ),
  }
  if (name === "in") return <span className="linkedin-mark">in</span>
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function ContactHero() {
  return (
    <section className="contact-page-hero">
      <Header active="Contact" />
      <div className="contact-hero-shade" />
      <div className="shell contact-hero-grid">
        <div className="contact-hero-copy">
          <div className="eyebrow">CONTACT</div>
          <h1>
            Discutons de vos idées
            <br />
            et construisons ensemble
            <br />
            des <em>solutions impactantes</em>
          </h1>
          <p>
            Vous pouvez me contacter pour présenter un projet ou poser une
            question. Mon stage chez CIS Info est actuellement en cours.
          </p>
          <div className="contact-hero-benefits">
            <div>
              <span>ϟ</span>
              <b>Me joindre</b>
              <small>Par e-mail ou téléphone</small>
            </div>
            <div>
              <span>
                <ContactIcon name="person" />
              </span>
              <b>Échange ouvert</b>
              <small>Questions, projets, échanges</small>
            </div>
            <div>
              <span>◇</span>
              <b>Collaboration</b>
              <small>Freelance, entreprise, association</small>
            </div>
          </div>
        </div>
        <div className="contact-hand-note">
          Une discussion
          <br />
          aujourd'hui
          <br />
          peut devenir
          <br />
          un grand projet
          <br />
          demain
          <span>↙</span>
        </div>
        <div className="contact-laptop-message">
          <b>{profile.initials}</b>
          <span>
            Des idées en
            <br />
            solutions
          </span>
        </div>
      </div>
      <Wave />
    </section>
  )
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }
  return (
    <button
      className="contact-copy"
      onClick={copy}
      type="button"
      aria-label={`Copier ${value}`}
      title={copied ? "Copié" : "Copier"}
    >
      {copied ? "✓" : "▣"}
    </button>
  )
}

function ContactInformation() {
  return (
    <section className="contact-info-card">
      <div className="contact-card-label">MES COORDONNÉES</div>
      <h2>Restons en contact</h2>
      <p>Choisissez le moyen qui vous convient.</p>
      <div className="contact-info-list">
        {contactInfo.map((item) => (
          <article key={item.type}>
            <div className={`contact-info-icon info-${item.color}`}>
              <ContactIcon name={item.icon} />
            </div>
            <div>
              <b>{item.label}</b>
              {item.href ? (
                <a href={item.href}>{item.value}</a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
            {item.type === "availability" ? (
              <i className="availability-dot" />
            ) : (
              <CopyButton value={item.value} />
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function validateField(name: keyof FormValues, value: string) {
  if (!value.trim()) {
    const labels: Record<keyof FormValues, string> = {
      name: "Le nom est obligatoire.",
      email: "L'adresse e-mail est obligatoire.",
      subject: "Choisissez un sujet.",
      message: "Le message est obligatoire.",
    }
    return labels[name]
  }
  if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "Saisissez une adresse e-mail valide."
  }
  return ""
}

function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle")

  const update = (name: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: validateField(name, value),
      }))
    }
    if (status === "error") setStatus("idle")
  }

  const blur = (name: keyof FormValues) => {
    setErrors((current) => ({
      ...current,
      [name]: validateField(name, values[name]),
    }))
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = Object.fromEntries(
      (Object.keys(values) as (keyof FormValues)[])
        .map((name) => [name, validateField(name, values[name])] as const)
        .filter(([, error]) => Boolean(error)),
    ) as FormErrors
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus("sending")
    window.setTimeout(() => setStatus("error"), 700)
  }

  return (
    <section className="contact-form-card">
      <div className="contact-card-label">ENVOYEZ-MOI UN MESSAGE</div>
      <h2>Parlons de votre projet</h2>
      <p>
        Remplissez le formulaire ci-dessous et je vous répondrai dans les plus
        brefs délais.
      </p>
      <form onSubmit={submit} noValidate>
        <div className="contact-form-row">
          <label>
            <span>
              Nom complet <i>*</i>
            </span>
            <div className={errors.name ? "field-error" : ""}>
              <ContactIcon name="user" />
              <input
                name="name"
                value={values.name}
                onChange={(event) => update("name", event.target.value)}
                onBlur={() => blur("name")}
                placeholder="Votre nom"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby="name-error"
              />
            </div>
            <small id="name-error">{errors.name}</small>
          </label>
          <label>
            <span>
              Adresse e-mail <i>*</i>
            </span>
            <div className={errors.email ? "field-error" : ""}>
              <ContactIcon name="mail" />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(event) => update("email", event.target.value)}
                onBlur={() => blur("email")}
                placeholder="votre@email.com"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby="email-error"
              />
            </div>
            <small id="email-error">{errors.email}</small>
          </label>
        </div>
        <label>
          <span>
            Sujet <i>*</i>
          </span>
          <div className={errors.subject ? "field-error" : ""}>
            <select
              name="subject"
              value={values.subject}
              onChange={(event) => update("subject", event.target.value)}
              onBlur={() => blur("subject")}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby="subject-error"
            >
              <option value="">Choisissez un sujet</option>
              {contactSubjects.map((subject) => (
                <option value={subject} key={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <small id="subject-error">{errors.subject}</small>
        </label>
        <label>
          <span>
            Message <i>*</i>
          </span>
          <div
            className={`message-field ${errors.message ? "field-error" : ""}`}
          >
            <ContactIcon name="pencil" />
            <textarea
              name="message"
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              onBlur={() => blur("message")}
              placeholder="Décrivez votre projet, vos besoins ou toute autre question..."
              rows={5}
              aria-invalid={Boolean(errors.message)}
              aria-describedby="message-error"
            />
          </div>
          <small id="message-error">{errors.message}</small>
        </label>
        <button
          className="contact-submit"
          type="submit"
          disabled={status === "sending"}
        >
          <span>
            {status === "sending" ? "Envoi..." : "➤  Envoyer le message"}
          </span>
          <Icon name="arrow" />
        </button>
        {status === "error" && (
          <div className="contact-submit-status" role="alert">
            Le service d'envoi n'est pas encore connecté. Écrivez directement à{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </div>
        )}
        <div className="contact-security">
          ▣ Le formulaire n'envoie pas encore les informations saisies.
        </div>
      </form>
    </section>
  )
}

function ContactMain() {
  return (
    <section className="contact-main">
      <div className="shell contact-main-grid">
        <ContactInformation />
        <ContactForm />
      </div>
    </section>
  )
}

function WorldMap() {
  return (
    <div className="world-map-card">
      <svg
        viewBox="0 0 900 440"
        role="img"
        aria-label="Carte mondiale centrée sur Abidjan"
      >
        <defs>
          <pattern
            id="mapGrid"
            width="38"
            height="38"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M38 0H0V38"
              fill="none"
              stroke="#1d4264"
              strokeOpacity=".22"
            />
          </pattern>
          <radialGradient id="pinGlow">
            <stop offset="0" stopColor="#00e8df" stopOpacity=".7" />
            <stop offset="1" stopColor="#00e8df" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="900" height="440" fill="url(#mapGrid)" />
        <g className="continents">
          <path d="M53 98 112 54l93 8 56 44-23 48-58 19-35 61-43-25-14-58-47-16Z" />
          <path d="m218 213 38 31 34 80-18 86-43-39-13-73-29-34Z" />
          <path d="m399 96 67-43 111 7 46 37 91 4 93 43-31 49-94 5-64 33-76-8-28-55-58 6-49-32Z" />
          <path d="m479 202 65 18 32 65-25 114-48-32-22-83-33-47Z" />
          <path d="m732 322 64-9 47 31-27 45-67-9Z" />
        </g>
        <g className="map-routes">
          <path d="M455 270Q275 95 143 118" />
          <path d="M455 270Q370 110 494 92" />
          <path d="M455 270Q610 80 772 107" />
          <path d="M455 270Q663 221 838 233" />
          <path d="M455 270Q620 399 768 360" />
          <path d="M455 270Q244 359 115 340" />
        </g>
        <g className="map-points">
          {[
            [143, 118],
            [494, 92],
            [772, 107],
            [838, 233],
            [768, 360],
            [115, 340],
          ].map(([x, y]) => (
            <circle cx={x} cy={y} r="7" key={`${x}-${y}`} />
          ))}
        </g>
        <circle className="abidjan-glow" cx="455" cy="270" r="43" />
        <circle className="abidjan-point" cx="455" cy="270" r="11" />
      </svg>
      <div className="map-location-card">
        <span>
          <ContactIcon name="pin" />
        </span>
        <div>
          <b>Abidjan, Côte d'Ivoire</b>
          <small>GMT (UTC+0)</small>
          <p>Échanges autour de projets locaux et internationaux.</p>
        </div>
      </div>
    </div>
  )
}

function LocationSection() {
  return (
    <section className="contact-location">
      <div className="shell">
        <div className="contact-section-heading">
          <div>
            <span>LOCALISATION</span>
            <h2>Basé à Abidjan, ouvert au monde</h2>
          </div>
          <p>
            Je suis actuellement basé à Abidjan, mais je suis ouvert à des
            collaborations locales et internationales, en présentiel ou à
            distance.
          </p>
        </div>
        <div className="location-grid">
          <WorldMap />
          <aside className="collaboration-card">
            <h3>Modes de collaboration</h3>
            {collaborationModes.map((mode) => (
              <div key={mode.title}>
                <span className={`mode-icon mode-${mode.color}`}>
                  <ContactIcon name={mode.icon} />
                </span>
                <div>
                  <b>{mode.title}</b>
                  <small>{mode.detail}</small>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
      <Wave />
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="faq-block">
      <div className="contact-card-label">FAQ</div>
      <h2>Questions fréquentes</h2>
      <div className="faq-list">
        {faqItems.map((item, index) => {
          const expanded = open === index
          return (
            <article className={expanded ? "open" : ""} key={item.question}>
              <button
                type="button"
                onClick={() => setOpen(expanded ? null : index)}
                aria-expanded={expanded}
              >
                {item.question}
                <span>{expanded ? "−" : "+"}</span>
              </button>
              {expanded && <p>{item.answer}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function ContactCTA() {
  return (
    <section className="contact-page-cta">
      <div className="contact-cta-shade" />
      <div>
        <h2>
          Une idée en tête ?
          <br />
          <em>Discutons-en !</em>
        </h2>
        <p>
          Contactez-moi pour présenter votre projet ou poser une question.
        </p>
        <Button href={`mailto:${profile.email}`}>
          Me contacter <Icon name="arrow" />
        </Button>
      </div>
      <aside>
        {[
          "Présenter un projet",
          "Poser une question",
          "Échange professionnel",
          "Parler d'une collaboration",
        ].map((item) => (
          <span key={item}>✓ {item}</span>
        ))}
      </aside>
    </section>
  )
}

function ContactBottom() {
  return (
    <section className="contact-bottom shell">
      <FAQ />
      <ContactCTA />
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="contact-page">
      <ContactHero />
      <ContactMain />
      <LocationSection />
      <ContactBottom />
      <Footer />
    </main>
  )
}
