import { useMemo, useState } from "react"
import { Button, Footer, Header, Icon, Wave } from "../App"
import TechBadge from "../components/TechBadge"
import {
  projectCategories,
  projects,
  type Project,
} from "../data/projects"
import "../projects.css"

const ctaPhoto =
  "https://images.unsplash.com/photo-1671417722838-3fbaa7f66203?crop=entropy&fit=crop&fm=jpg&q=84&w=1500&h=600"

function DashboardScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dashboard-ui ${compact ? "dashboard-ui-compact" : ""}`}>
      <div className="dashboard-side">
        <b>A</b>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <small>Total revenue</small>
            <b>€84,254</b>
          </div>
          <div>
            <small>Conversion</small>
            <b>+23.5%</b>
          </div>
          <span className="dashboard-donut" />
        </div>
        <div className="dashboard-chart">
          <svg
            viewBox="0 0 300 90"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chartArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#02e7df" stopOpacity=".32" />
                <stop offset="1" stopColor="#02e7df" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="chart-area"
              d="M0 78 32 66 55 70 88 40 116 55 146 25 178 42 211 17 240 32 272 12 300 22V90H0Z"
            />
            <path
              className="chart-line"
              d="M0 78 32 66 55 70 88 40 116 55 146 25 178 42 211 17 240 32 272 12 300 22"
            />
          </svg>
        </div>
        <div className="dashboard-bars">
          {[42, 70, 56, 88, 64, 79, 48, 93, 68, 82].map((height, index) => (
            <i style={{ height: `${height}%` }} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductArtwork({
  type,
  large = false,
}: {
  type: string
  large?: boolean
}) {
  if (type === "analytics" || type === "data") {
    return (
      <div className={`product-art art-${type} ${large ? "art-large" : ""}`}>
        <DashboardScreen compact={!large} />
        {type === "data" && <div className="world-map">•• ••• • ••</div>}
      </div>
    )
  }

  if (type === "taskflow") {
    return (
      <div className="product-art art-taskflow">
        <div className="task-panel">
          <b>TaskFlow</b>
          <small>Votre espace de travail</small>
          <i />
          <i />
          <i />
        </div>
        <div className="task-phone">
          <span />
          <b>My tasks</b>
          <i />
          <i />
          <i />
        </div>
      </div>
    )
  }

  if (type === "shop") {
    return (
      <div className="product-art art-shop">
        <div className="store-nav">
          <b>forma.</b>
          <span>Collection &nbsp; Journal &nbsp; À propos</span>
        </div>
        <div className="store-copy">
          <small>NOUVELLE COLLECTION</small>
          <b>
            Des intérieurs
            <br />
            qui vous ressemblent.
          </b>
          <i />
        </div>
        <div className="store-sofa">
          <i />
          <i />
          <i />
        </div>
      </div>
    )
  }

  if (type === "erp") {
    return (
      <div className="product-art art-erp">
        <div className="erp-side">
          <b>ERP</b>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="erp-content">
          <b>Inventaire du matériel</b>
          <div className="erp-stats">
            <i />
            <i />
            <i />
          </div>
          <div className="erp-table">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    )
  }

  if (type === "clinic") {
    return (
      <div className="product-art art-clinic">
        <div className="clinic-side">
          <b>+</b>
          <i />
          <i />
          <i />
        </div>
        <div className="clinic-content">
          <b>Bienvenue, Dr. Martin</b>
          <div>
            <span className="clinic-chart" />
            <i />
            <i />
          </div>
        </div>
      </div>
    )
  }

  if (type === "portfolio") {
    return (
      <div className="product-art art-portfolio">
        <div>
          <small>FULL-STACK DEVELOPER</small>
          <b>
            Transforming
            <br />
            Ideas into
            <br />
            <em>Digital Solutions.</em>
          </b>
          <i />
        </div>
        <span className="portfolio-person">AR</span>
      </div>
    )
  }

  if (type === "career" || type === "futurpro") {
    return (
      <div className={`product-art art-illustration art-${type}`}>
        <div>
          <small>
            {type === "career"
              ? "VOTRE AVENIR COMMENCE ICI"
              : "ENSEMBLE POUR L'AVENIR"}
          </small>
          <b>
            {type === "career"
              ? "Trouvez votre voie professionnelle"
              : "Construisons ensemble ton avenir"}
          </b>
          <i />
        </div>
        <span className="illustration-person">
          <i />
          <i />
          <b />
        </span>
      </div>
    )
  }

  return (
    <div className="product-art art-impex">
      <div className="cargo-lines" />
      <div>
        <small>HL IMPEX</small>
        <b>
          Votre partenaire
          <br />
          en import-export
        </b>
        <i />
      </div>
    </div>
  )
}

function ProjectLaptop() {
  return (
    <div
      className="project-laptop"
      aria-label="Interface du tableau de bord Analytics Dashboard"
    >
      <div className="laptop-screen">
        <DashboardScreen />
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
              <b>10+</b>
              <small>Projets réalisés</small>
            </div>
            <div>
              <span>◇</span>
              <b>5</b>
              <small>Domaines d'expertise</small>
            </div>
            <div>
              <span>✓</span>
              <b>100%</b>
              <small>Passion &amp; Engagement</small>
            </div>
            <div>
              <span>★</span>
              <b>4.9/5</b>
              <small>Satisfaction clients</small>
            </div>
          </div>
        </div>
        <div className="projects-hero-visual">
          <ProjectLaptop />
          <span className="hero-note">
            Turning
            <br />
            Ideas into
            <br />
            <b>Real Solutions</b>
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
        <ProductArtwork type={project.artwork} large />
        <div className="growth-pill">
          <span>⌁</span>
          <b>+23.5%</b>
          <small>Croissance</small>
        </div>
        <div className="featured-thumbs">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="featured-copy">
        <div className="featured-label">★ Projet en vedette</div>
        <h2>{project.title}</h2>
        <p>
          {project.description} Conçu pour aider les entreprises à prendre des
          décisions basées sur les données.
        </p>
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
        aria-label={`Voir ${project.title}`}
      >
        <ProductArtwork type={project.artwork} />
      </a>
      <div className="projects-card-body">
        <span
          className={`category-badge badge-${project.category
            .toLowerCase()
            .replace(/[^a-z]+/g, "-")}`}
        >
          {project.category}
        </span>
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
          <span>
            Details &nbsp; <Icon name="github" size={15} />
          </span>
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
      <img src={ctaPhoto} alt="" loading="lazy" />
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
            Je suis toujours ouvert à discuter de nouvelles opportunités, que ce
            soit pour un projet, une collaboration ou simplement échanger des
            idées.
          </p>
          <div className="hero-actions">
            <Button href="/contact">
              Me contacter <Icon name="arrow" />
            </Button>
            <Button href="/#accueil" secondary>
              Voir mon CV <Icon name="download" />
            </Button>
          </div>
        </div>
        <div className="projects-cta-list">
          {[
            "Projets freelance",
            "Collaborations",
            "Opportunités professionnelles",
            "Conseils et échanges",
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
        <p>{project.description}</p>
        <ProductArtwork type={project.artwork} large />
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
