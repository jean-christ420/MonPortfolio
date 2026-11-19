import { useEffect, useMemo, useRef, useState } from "react"
import { Button, Footer, Header, Icon, Wave } from "../App"
import { DashboardScreen, ProductArtwork } from "../components/ProjectArtwork"
import TechBadge from "../components/TechBadge"
import {
  projectCategories,
  projects,
  type Project,
  type ProjectScreenshot,
} from "../data/projects"
import "../projects.css"

function ProjectLaptop() {
  return (
    <div
      className="project-laptop"
      role="img"
      aria-label="Aperçu visuel d'une interface de développement web"
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
          aria-label={`Aperçu visuel de ${project.title}`}
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
        aria-label={`Voir le projet ${project.title}`}
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

function ScreenshotSlideshow({
  projectTitle,
  screenshots,
  isPreviewOpen,
  onPreview,
}: {
  projectTitle: string
  screenshots: ProjectScreenshot[]
  isPreviewOpen: boolean
  onPreview: (index: number) => void
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slideCount = screenshots.length
  const activeScreenshot = screenshots[activeIndex]

  useEffect(() => {
    if (
      isPaused ||
      isPreviewOpen ||
      slideCount < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slideCount)
    }, 5000)
    return () => window.clearInterval(intervalId)
  }, [isPaused, isPreviewOpen, slideCount])

  return (
    <figure
      className="myshop-detail-visual project-screenshot-slideshow"
      role="group"
      aria-label={`Captures du projet ${projectTitle}`}
      aria-roledescription="diaporama"
    >
      <div className="project-slideshow-viewport">
        {screenshots.map((screenshot, index) => (
          <button
            className={`project-slide${
              index === activeIndex ? " project-slide-active" : ""
            }`}
            type="button"
            aria-label={`Agrandir « ${screenshot.title} »`}
            aria-hidden={index !== activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => onPreview(index)}
            key={screenshot.title}
          >
            <img
              src={screenshot.src}
              alt={`${projectTitle} — ${screenshot.title}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </button>
        ))}
        <div className="project-slideshow-controls">
          <button
            type="button"
            aria-label="Capture précédente"
            onClick={() =>
              setActiveIndex((index) => (index - 1 + slideCount) % slideCount)
            }
          >
            ‹
          </button>
          {screenshots.map((screenshot, index) => (
            <button
              type="button"
              className="project-slideshow-dot"
              aria-label={`Afficher la capture « ${screenshot.title} »`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              key={screenshot.title}
            />
          ))}
          <button
            type="button"
            aria-label="Capture suivante"
            onClick={() => setActiveIndex((index) => (index + 1) % slideCount)}
          >
            ›
          </button>
          <button
            type="button"
            aria-label={
              isPaused ? "Reprendre le diaporama" : "Mettre le diaporama en pause"
            }
            aria-pressed={isPaused}
            onClick={() => setIsPaused((paused) => !paused)}
          >
            {isPaused ? "▶" : "Ⅱ"}
          </button>
        </div>
      </div>
      <figcaption>
        <b>{activeScreenshot.title}</b>
        <span>{activeScreenshot.description}</span>
      </figcaption>
    </figure>
  )
}

function ProjectImagePreview({
  projectTitle,
  screenshots,
  activeIndex,
  onSelect,
  onClose,
}: {
  projectTitle: string
  screenshots: ProjectScreenshot[]
  activeIndex: number | null
  onSelect: (index: number) => void
  onClose: () => void
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const screenshot =
    activeIndex === null ? null : screenshots[activeIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (activeIndex !== null && !dialog.open) {
      dialog.showModal()
    } else if (activeIndex === null && dialog.open) {
      dialog.close()
    }
  }, [activeIndex])

  const screenshotCount = screenshots.length

  return (
    <dialog
      className="project-image-preview"
      ref={dialogRef}
      aria-labelledby="project-image-preview-title"
      onCancel={onClose}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      {screenshot && activeIndex !== null && (
        <div className="project-image-preview-content">
          <header className="project-image-preview-header">
            <div>
              <h2 id="project-image-preview-title">{projectTitle}</h2>
              <p>{screenshot.title}</p>
            </div>
            <button
              type="button"
              aria-label="Fermer l'aperçu"
              onClick={onClose}
            >
              ×
            </button>
          </header>
          <div className="project-image-preview-stage">
            <button
              type="button"
              aria-label="Capture précédente"
              onClick={() =>
                onSelect((activeIndex - 1 + screenshotCount) % screenshotCount)
              }
            >
              ‹
            </button>
            <img
              src={screenshot.src}
              alt={`${projectTitle} — ${screenshot.title}`}
            />
            <button
              type="button"
              aria-label="Capture suivante"
              onClick={() => onSelect((activeIndex + 1) % screenshotCount)}
            >
              ›
            </button>
          </div>
          <footer className="project-image-preview-footer">
            <p>{screenshot.description}</p>
            <span>
              {activeIndex + 1} / {screenshotCount}
            </span>
          </footer>
        </div>
      )}
    </dialog>
  )
}

function ScreenshotProjectDetail({ project }: { project: Project }) {
  const screenshots = project.screenshots ?? []
  const galleryScreenshots = screenshots.slice(1)
  const [previewIndex, setPreviewIndex] = useState<number | null>(null)

  useEffect(() => {
    if (previewIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewIndex(null)
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        setPreviewIndex(
          (index) =>
            index === null
              ? index
              : (index - 1 + screenshots.length) % screenshots.length,
        )
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        setPreviewIndex(
          (index) =>
            index === null
              ? index
              : (index + 1) % screenshots.length,
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [previewIndex, screenshots.length])

  return (
    <main className="projects-page myshop-project-page">
      <Header active="Projets" />
      <section className="myshop-detail shell">
        <a className="myshop-back-link" href="/projets">
          ← Tous les projets
        </a>
        <div className="myshop-detail-hero">
          <div className="myshop-detail-intro">
            <div className="eyebrow">{project.category}</div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="myshop-project-meta">
              <div>
                <span>Rôle</span>
                <b>{project.role}</b>
              </div>
              <div>
                <span>État</span>
                <b>{project.status}</b>
              </div>
            </div>
            <div className="tech-list">
              {project.technologies.map((technology) => (
                <TechBadge key={technology}>{technology}</TechBadge>
              ))}
            </div>
          </div>
          {screenshots.length > 0 ? (
            <ScreenshotSlideshow
              projectTitle={project.title}
              screenshots={screenshots}
              isPreviewOpen={previewIndex !== null}
              onPreview={setPreviewIndex}
            />
          ) : null}
        </div>

        <section
          className="myshop-features"
          aria-labelledby="myshop-features-title"
        >
          <div className="eyebrow">Une expérience complète</div>
          <h2 id="myshop-features-title">
            {project.slug === "myshop"
              ? "Boutique et administration"
              : "Fonctionnalités principales"}
          </h2>
          <ul>
            {project.features?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section
          className="myshop-gallery"
          aria-labelledby="myshop-gallery-title"
        >
          <div className="myshop-gallery-heading">
            <div>
              <div className="eyebrow">En images</div>
              <h2 id="myshop-gallery-title">Aperçu du projet</h2>
            </div>
            <p>
              {project.slug === "myshop"
                ? "Découvrez les principaux écrans de la boutique et de son espace d’administration."
                : "Découvrez les principaux écrans de l’application de gestion."}
            </p>
          </div>
          <div className="myshop-gallery-grid">
            {galleryScreenshots.map((screenshot, index) => (
              <figure
                className={`myshop-gallery-item${
                  project.slug === "myshop" && index === 0
                    ? " myshop-gallery-cover"
                    : ""
                }`}
                key={screenshot.title}
              >
                <button
                  className="project-image-preview-trigger"
                  type="button"
                  aria-label={`Agrandir « ${screenshot.title} »`}
                  onClick={() => setPreviewIndex(index + 1)}
                >
                  <img
                    src={screenshot.src}
                    alt={`${project.title} — ${screenshot.title}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </button>
                <figcaption>
                  <b>{screenshot.title}</b>
                  <span>{screenshot.description}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <Button href="/projets" secondary>
          Retour aux projets
        </Button>
      </section>
      <ProjectImagePreview
        projectTitle={project.title}
        screenshots={screenshots}
        activeIndex={previewIndex}
        onSelect={setPreviewIndex}
        onClose={() => setPreviewIndex(null)}
      />
      <Footer />
    </main>
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
        ) : showFeatured ? null : (
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
  if (project.screenshots) return <ScreenshotProjectDetail project={project} />
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
          aria-label={`Aperçu graphique du projet ${project.title}`}
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
