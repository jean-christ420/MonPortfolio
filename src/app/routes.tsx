import { lazy, Suspense } from "react"
import { createBrowserRouter, useParams } from "react-router"
import HomePage from "../App"
import { projects } from "../data/projects"

const ProjectsPage = lazy(() => import("../pages/ProjectsPage"))
const ProjectDetailPage = lazy(() =>
  import("../pages/ProjectsPage").then((module) => ({
    default: module.ProjectDetailPage,
  })),
)
const AnalyticsCaseStudy = lazy(() => import("../pages/AnalyticsCaseStudy"))
const SkillsPage = lazy(() => import("../pages/SkillsPage"))
const AboutPage = lazy(() => import("../pages/AboutPage"))
const CVPage = lazy(() => import("../pages/CVPage"))
const ContactPage = lazy(() => import("../pages/ContactPage"))

function RouteLoading() {
  return <main className="route-message">Chargement…</main>
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
  const exists = projects.some((project) => project.slug === slug)
  if (!exists) {
    return (
      <main className="route-message">
        <h1>Projet introuvable</h1>
        <a href="/projets">Retour aux projets</a>
      </main>
    )
  }
  if (slug === "analytics-dashboard") {
    return (
      <Suspense fallback={<RouteLoading />}>
        <AnalyticsCaseStudy />
      </Suspense>
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

function NotFound() {
  return (
    <main className="route-message">
      <h1>Page introuvable</h1>
      <a href="/">Retour à l'accueil</a>
    </main>
  )
}

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/projets", Component: ProjectsRoute },
  { path: "/projets/:slug", Component: ProjectRoute },
  { path: "/competences", Component: SkillsRoute },
  { path: "/a-propos", Component: AboutRoute },
  { path: "/cv", Component: CVRoute },
  { path: "/contact", Component: ContactRoute },
  { path: "*", Component: NotFound },
])
