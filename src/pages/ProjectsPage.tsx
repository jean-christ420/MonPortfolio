import { useMemo, useState } from "react"
import { Button, Footer, Header, Icon, Wave } from "../App"
import { DashboardScreen, ProductArtwork } from "../components/ProjectArtwork"
import TechBadge from "../components/TechBadge"
import {
  projectCategories,
  projects,
  type Project,
} from "../data/projects"
import "../projects.css"

function ProjectLaptop() {
  return (
    <div
      className="project-laptop"
      role="img"
      aria-label="Illustration conceptuelle de développement web, pas une capture d'écran d'un projet"
    >
      <div className="laptop-screen">
        <DashboardScreen />
        <span className="concept-art-label">Illustration conceptuelle</span>
      </div>
      <div className="laptop-base">
        <i />
      </div>
    </div>
  )
}

function ProjectHero() {
  return (
    <section className="projects-hero">
      <Header active="Projets" />
      <div className="projects-hero-orb orb-a" />
      <div className="projects-hero-orb orb-b" />
      <div className="shell projects-hero-grid">
        <div className="projects-hero-copy">
          <div className="eyebrow">Mes Projets</div>
          <h1>
            Des projets réels
            <br />
            pour un <em>impact concret</em>
          </h1>
          <p>
            Chaque projet est une opportunité d'apprendre, de résoudre des
            problèmes réels et de créer des solutions utiles et durables.
          </p>
          <div className="projects-stats">
            <div>
              <span>✦</span>
              <b>{projects.length}</b>
              <small>Projets présentés</small>
            </div>
            <div>
              <span>◇</span>
              <b>{projects.filter((project) => project.status === "Terminé").length}</b>
              <small>Projets terminés</small>
            </div>
            <div>
              <span>✓</span>
              <b>{projects.filter((project) => project.status === "Prototype").length}</b>
              <small>Prototypes</small>
            </div>
            <div>
              <span>★</span>
              <b>{projects.filter((project) => project.status === "En cours").length}</b>
              <small>Projets en cours</small>
            </div>
          </div>
        </div>
        <div className="projects-hero-visual">
          <ProjectLaptop />
          <span className="hero-note">
            Des idées
            <br />
            aux projets
            <br />
            <b>utiles</b>
          </span>
        </div>
      </div>
      <Wave />
    </section>
  )
}

function ProjectFilters({
  active,
  query,
  onCategory,
  onQuery,
}: {
  active: string
  query: string
  onCategory: (category: string) => void
  onQuery: (query: string) => void
}) {
  return (
    <section className="project-controls" aria-label="Filtrer les projets">
      <div className="shell project-controls-inner">
        <div className="filter-list" role="group" aria-label="Catégories">
          {projectCategories.map((category) => (
            <button
              className={active === category ? "active" : ""}
              key={category}
              onClick={() => onCategory(category)}
              type="button"
            >
              <span>{category === "Tous" ? "✓" : "◇"}</span>
              {category}
            </button>
          ))}
        </div>
        <label className="project-search">
          <span className="sr-only">Rechercher un projet</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            type="search"
            placeholder="Rechercher un projet..."
            value={query}
            onChange={(event) => onQuery(event.target.value)}
          />
        </label>
      </div>
    </section>
  )
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="featured-project shell">
      <div className="featured-visual">
        <div
          className="concept-art-frame"
          role="img"
          aria-label={`Illustration conceptuelle de ${project.title}, pas une capture d'écran du projet`}
        >
          <ProductArtwork type={project.artwork} large />
        </div>
        <div className="growth-pill">{project.status}</div>
      </div>
      <div className="featured-copy">
        <div className="featured-label">★ Projet en vedette</div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
        <div className="featured-actions">
          <Button href={project.href}>
            Voir le projet <Icon name="arrow" />
          </Button>
          {project.codeHref ? (
            <a className="code-button" href={project.codeHref}>
              Voir le code <Icon name="github" />
            </a>
          ) : (
            <span
              className="code-button code-button-disabled"
              aria-disabled="true"
            >
              Voir le code <Icon name="github" />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="projects-page-card">
      <a
        className="card-art-link"
        href={project.href}
        aria-label={`Voir ${project.title} — illustration conceptuelle, pas une capture d'écran`}
      >
        <div className="concept-art-frame">
          <ProductArtwork type={project.artwork} />
        </div>
      </a>
      <div className="projects-card-body">
        <span
          className={`category-badge badge-${project.category
            .toLowerCase()
            .replace(/[^a-z]+/g, "-")}`}
        >
          {project.category}
        </span>
        <span className="project-status">{project.status}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
        <div className="projects-card-actions">
          <a href={project.href}>
            Voir le projet <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}

const approachSteps = [
  ["⌕", "Comprendre", "Analyse du besoin et définition des objectifs."],
  ["✎", "Concevoir", "Architecture, design et planification."],
  ["</>", "Développer", "Code propre, tests et validation."],
  ["➤", "Déployer", "Mise en production et suivi."],
]

function ProjectApproach() {
  return (
    <section className="project-approach shell">
      <div className="approach-heading">
        <h2>Mon approche sur chaque projet</h2>
        <p>
          Une méthode simple et efficace pour transformer
          <br />
          les idées en solutions concrètes.
        </p>
      </div>
      <div className="approach-steps">
        {approachSteps.map(([icon, title, description], index) => (
          <div className="approach-step" key={title}>
            <div className="approach-icon">{icon}</div>
            <div>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{title}</b>
              <p>{description}</p>
            </div>
            {index < approachSteps.length - 1 && (
              <i className="approach-connector" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectsCta() {
  return (
    <section className="projects-cta">
      <div className="projects-cta-shade" />
      <div className="shell projects-cta-inner">
        <div className="projects-cta-copy">
          <div className="eyebrow">Vous avez un projet ?</div>
          <h2>
            Transformons vos idées
            <br />
            en solutions <em>concrètes</em>
          </h2>
          <p>
            Vous avez un projet ou une question ? Écrivez-moi pour en discuter.
          </p>
          <div className="hero-actions">
            <Button href="/contact">
              Me contacter <Icon name="arrow" />
            </Button>
            <Button href="/cv" secondary>
              Voir mon parcours <Icon name="arrow" />
            </Button>
          </div>
        </div>
        <div className="projects-cta-list">
          {[
            "Présenter un projet",
            "Poser une question",
            "Échange professionnel",
            "Parler d'une collaboration",
          ].map((item) => (
            <span key={item}>✓ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  const [category, setCategory] = useState<string>("Tous")
  const [query, setQuery] = useState("")
  const featured = projects.find((project) => project.featured)!

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr")

    return projects.filter((project) => {
      if (project.featured) return false

      const matchesCategory =
        category === "Tous" || project.category === category
      const haystack = [
        project.title,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLocaleLowerCase("fr")

      return (
        matchesCategory && (!normalizedQuery || haystack.includes(normalizedQuery))
      )
    })
  }, [category, query])

  const showFeatured = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr")
    const haystack = [
      featured.title,
      featured.description,
      featured.category,
      ...featured.technologies,
    ]
      .join(" ")
      .toLocaleLowerCase("fr")

    return (
      (category === "Tous" || featured.category === category) &&
      (!normalizedQuery || haystack.includes(normalizedQuery))
    )
  }, [category, featured, query])

  return (
    <main className="projects-page">
      <ProjectHero />
      <ProjectFilters
        active={category}
        query={query}
        onCategory={setCategory}
        onQuery={setQuery}
      />
      {showFeatured && <FeaturedProject project={featured} />}
      <section className="all-projects shell">
        <div className="all-projects-heading">
          <div>
            <div className="eyebrow">Mes réalisations</div>
            <h2>Tous les projets</h2>
          </div>
          <p>
            Découvrez l'ensemble de mes projets, classés par catégorie.
            <br />
            Chaque projet raconte une histoire et illustre une compétence.
          </p>
        </div>
        {visibleProjects.length ? (
          <div className="projects-page-grid">
            {visibleProjects.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
        ) : (
          <div className="empty-projects">
            Aucun projet ne correspond à votre recherche.
          </div>
        )}
      </section>
      <ProjectApproach />
      <ProjectsCta />
      <Footer />
    </main>
  )
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug)
  if (!project) return null
  return (
    <main className="projects-page">
      <Header active="Projets" />
      <section className="project-detail shell">
        <div className="eyebrow">{project.category}</div>
        <h1>{project.title}</h1>
        <p className="project-status">{project.status}</p>
        <p>{project.description}</p>
        <div
          className="concept-art-frame"
          role="img"
          aria-label={`Illustration conceptuelle de ${project.title}, pas une capture d'écran du projet`}
        >
          <ProductArtwork type={project.artwork} large />
        </div>
        <div className="tech-list">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
        <Button href="/projets">Retour aux projets</Button>
      </section>
      <Footer />
    </main>
  )
}
