import { lazy, Suspense, useEffect } from "react"
import type { ComponentType } from "react"
import {
  createBrowserRouter,
  isRouteErrorResponse,
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
  useRouteError,
} from "react-router"
import HomePage from "../App"
import { projects } from "../data/projects"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function lazyRetry<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      return await factory()
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 300))
      try {
        return await factory()
      } catch {
        throw error
      }
    }
  })
}

const ProjectsPage = lazyRetry(() => import("../pages/ProjectsPage"))
const ProjectDetailPage = lazyRetry(() =>
  import("../pages/ProjectsPage").then((module) => ({
    default: module.ProjectDetailPage as ComponentType<{ slug: string }>,
  })),
)
const SkillsPage = lazyRetry(() => import("../pages/SkillsPage"))
const AboutPage = lazyRetry(() => import("../pages/AboutPage"))
const CVPage = lazyRetry(() => import("../pages/CVPage"))
const ContactPage = lazyRetry(() => import("../pages/ContactPage"))
const LegalPage = lazyRetry(() => import("../pages/LegalPage"))

function RouteLoading() {
  return (
    <main
      className="route-message route-loading"
      role="status"
      aria-live="polite"
      aria-label="Chargement de la page"
    >
      <div className="route-loading-scene" aria-hidden="true">
        <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="screenGlow" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#20f3e8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#168eff" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <ellipse cx="160" cy="204" rx="118" ry="10" fill="#041724" />
          <rect x="58" y="150" width="204" height="14" rx="7" fill="#0d3042" />
          <rect x="42" y="160" width="236" height="12" rx="6" fill="#082333" />
          <g className="route-loading-laptop">
            <rect x="78" y="38" width="164" height="104" rx="10" fill="#082333" />
            <rect
              x="86"
              y="46"
              width="148"
              height="88"
              rx="6"
              fill="#031722"
              stroke="url(#screenGlow)"
              strokeOpacity="0.35"
            />
            <rect x="98" y="60" width="74" height="6" rx="3" fill="#20f3e8" className="route-loading-code code-a" />
            <rect x="98" y="74" width="110" height="6" rx="3" fill="#168eff" className="route-loading-code code-b" />
            <rect x="98" y="88" width="88" height="6" rx="3" fill="#708a98" className="route-loading-code code-c" />
            <rect x="98" y="102" width="62" height="6" rx="3" fill="#20f3e8" className="route-loading-code code-d" />
            <rect x="164" y="102" width="10" height="6" rx="2" fill="#00e8df" className="route-loading-cursor" />
            <path d="M150 142h20l10 8h-40z" fill="#0d3042" />
          </g>
          <g className="route-loading-dev">
            <circle cx="160" cy="72" r="18" fill="#1b4154" />
            <path
              d="M132 150c4-24 14-38 28-38s24 14 28 38"
              fill="#0d3042"
            />
            <path d="M148 70c2-6 7-10 12-10s10 4 12 10" fill="#031722" />
          </g>
          <g className="route-loading-hands">
            <path
              className="route-loading-hand hand-left"
              d="M118 150c8-4 15-2 20 4l-10 8c-6-2-10-6-10-12z"
              fill="#2b5f77"
            />
            <path
              className="route-loading-hand hand-right"
              d="M202 150c-8-4-15-2-20 4l10 8c6-2 10-6 10-12z"
              fill="#2b5f77"
            />
          </g>
        </svg>
      </div>
      <h1>Chargement de la page…</h1>
      <p>Un instant, le contenu se prépare.</p>
    </main>
  )
}

function getRouteErrorMessage(error: unknown): {
  title: string
  detail: string
  technical?: string
  chunk: boolean
} {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return {
        title: "Page introuvable",
        detail:
          "L’adresse demandée ne correspond à aucune page disponible. Vérifiez le lien ou revenez à l’accueil.",
        chunk: false,
      }
    }
    return {
      title: "Impossible d’afficher cette page",
      detail:
        "Une erreur est survenue lors du chargement. Vous pouvez réessayer ou revenir à l’accueil.",
      chunk: false,
    }
  }

  const message = error instanceof Error ? error.message : String(error ?? "")
  const chunk = /Failed to fetch dynamically imported module|Importing a module script failed|ChunkLoadError|Loading chunk/i.test(
    message,
  )

  if (chunk) {
    return {
      title: "La page n’a pas pu être chargée",
      detail:
        "Le contenu de cette page est temporairement indisponible, souvent après une mise à jour ou un problème de connexion. Rechargez la page pour réessayer.",
      technical: message || undefined,
      chunk: true,
    }
  }

  return {
    title: "Une erreur est survenue",
    detail:
      "Cette page ne peut pas être affichée pour le moment. Vous pouvez recharger la page ou revenir à l’accueil.",
    technical: message || undefined,
    chunk: false,
  }
}

function RouteError() {
  const error = useRouteError()
  const { title, detail, technical } = getRouteErrorMessage(error)

  return (
    <main className="route-message route-error" role="alert">
      <h1>{title}</h1>
      <p>{detail}</p>
      <div className="route-error-actions">
        <button type="button" onClick={() => window.location.reload()}>
          Recharger la page
        </button>
        <Link to="/">Retour à l’accueil</Link>
      </div>
      {technical && import.meta.env.DEV ? (
        <details className="route-error-details">
          <summary>Détails techniques</summary>
          <pre>{technical}</pre>
        </details>
      ) : null}
    </main>
  )
}

function ProjectsRoute() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <ProjectsPage />
    </Suspense>
  )
}

function SkillsRoute() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <SkillsPage />
    </Suspense>
  )
}

function AboutRoute() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <AboutPage />
    </Suspense>
  )
}

function CVRoute() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <CVPage />
    </Suspense>
  )
}

function ProjectRoute() {
  const { slug = "" } = useParams()
  if (slug === "analytics-dashboard") {
    return <Navigate to="/projets/myshop" replace />
  }
  const exists = projects.some((project) => project.slug === slug)
  if (!exists) {
    return (
      <main className="route-message">
        <h1>Projet introuvable</h1>
        <Link to="/projets">Retour aux projets</Link>
      </main>
    )
  }
  return (
    <Suspense fallback={<RouteLoading />}>
      <ProjectDetailPage slug={slug} />
    </Suspense>
  )
}

function ContactRoute() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <ContactPage />
    </Suspense>
  )
}

function LegalRoute() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <LegalPage />
    </Suspense>
  )
}

function NotFound() {
  return (
    <main className="route-message">
      <h1>Page introuvable</h1>
      <Link to="/">Retour à l’accueil</Link>
    </main>
  )
}

function RouteScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }

    const targetId = location.hash.slice(1)
    let attempts = 0
    let frame = 0

    const scrollToTarget = () => {
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ block: "start" })
      } else if (attempts < 60) {
        attempts += 1
        frame = window.requestAnimationFrame(scrollToTarget)
      }
    }

    frame = window.requestAnimationFrame(scrollToTarget)
    return () => window.cancelAnimationFrame(frame)
  }, [location.key, location.hash])

  return null
}

function RootLayout() {
  return (
    <>
      <RouteScrollManager />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <RouteError />,
    children: [
      { index: true, Component: HomePage },
      { path: "projets", Component: ProjectsRoute },
      { path: "projets/:slug", Component: ProjectRoute },
      { path: "competences", Component: SkillsRoute },
      { path: "a-propos", Component: AboutRoute },
      { path: "cv", Component: CVRoute },
      { path: "contact", Component: ContactRoute },
      { path: "informations-legales", Component: LegalRoute },
      { path: "*", Component: NotFound },
    ],
  },
])
