import { useEffect, useState } from "react"
import { Button, Footer, Header, Icon, Wave } from "../App"
import TechBadge from "../components/TechBadge"
import { analyticsCaseStudy as project } from "../data/caseStudies"
import "../case-study.css"

function SectionLabel({ number }: { number: string }) {
  return (
    <div className="cs-label">
      <span>{number}</span>
      <i />
    </div>
  )
}

function AnalyticsScreen({
  variant = "main",
  label,
}: {
  variant?: string
  label?: string
}) {
  const bars = [45, 69, 54, 84, 62, 93, 74, 87, 58, 77]
  return (
    <div
      className={`cs-screen cs-screen-${variant}`}
      role="img"
      aria-label={label ?? "Interface Analytics Dashboard"}
    >
      <div className="cs-screen-sidebar">
        <b>&lt;AR&gt;</b>
        {["Dashboard", "Analytics", "Users", "Reports", "Settings"].map(
          (item, index) => (
            <span className={index === 0 ? "active" : ""} key={item}>
              <i />
              {item}
            </span>
          ),
        )}
      </div>
      <div className="cs-screen-main">
        <div className="cs-screen-header">
          <div>
            <small>Overview</small>
            <b>Dashboard</b>
          </div>
          <span />
        </div>
        {variant === "table" ? (
          <div className="cs-data-table">
            <div className="cs-table-toolbar">
              <b>Utilisateurs</b>
              <i />
            </div>
            {[1, 2, 3, 4, 5].map((row) => (
              <div className="cs-table-row" key={row}>
                <i />
                <span />
                <span />
                <span />
                <b />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="cs-kpis">
              {["12,458", "8,532", "2,164", "+23.5%"].map((value, index) => (
                <div key={value}>
                  <small>
                    {["Revenue", "Visiteurs", "Clients", "Croissance"][index]}
                  </small>
                  <b>{value}</b>
                  <i />
                </div>
              ))}
            </div>
            <div className="cs-screen-widgets">
              <div className="cs-line-widget">
                <span>Évolution des ventes</span>
                <svg
                  viewBox="0 0 400 130"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id={`csArea-${variant}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0" stopColor="#00e8df" stopOpacity=".35" />
                      <stop offset="1" stopColor="#00e8df" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    className="area"
                    fill={`url(#csArea-${variant})`}
                    d="M0 110 38 93 70 101 113 61 150 76 191 37 228 58 274 23 315 50 358 15 400 30V130H0Z"
                  />
                  <path
                    className="line"
                    d="M0 110 38 93 70 101 113 61 150 76 191 37 228 58 274 23 315 50 358 15 400 30"
                  />
                </svg>
              </div>
              <div className="cs-bar-widget">
                <span>Performance</span>
                <div>
                  {bars.map((height, index) => (
                    <i style={{ height: `${height}%` }} key={index} />
                  ))}
                </div>
              </div>
              <div className="cs-donut-widget">
                <i />
                <b>78%</b>
                <small>Objectif atteint</small>
              </div>
              <div className="cs-list-widget">
                {[1, 2, 3].map((item) => (
                  <span key={item}>
                    <i />
                    <b />
                    <em />
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function CaseStudyHero() {
  return (
    <section className="cs-hero">
      <Header active="Projets" />
      <div className="shell cs-breadcrumbs">
        <a href="/">⌂</a>
        <span>›</span>
        <a href="/projets">Projets</a>
        <span>›</span>
        <b>Analytics Dashboard</b>
      </div>
      <div className="shell cs-hero-grid">
        <div className="cs-hero-copy">
          <div className="cs-kicker">Web App</div>
          <h1>
            Analytics <em>Dashboard</em>
          </h1>
          <p>
            Un tableau de bord d'analytique moderne et intuitif pour aider les
            entreprises à prendre des décisions basées sur des données réelles.
          </p>
          <div className="tech-list cs-hero-tech">
            {[
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Chart.js",
              "PostgreSQL",
            ].map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
          <div className="hero-actions cs-hero-actions">
            <Button href="#apercu">
              Voir le projet <Icon name="arrow" />
            </Button>
            <span
              className="code-button code-button-disabled"
              aria-disabled="true"
            >
              Voir le code <Icon name="github" />
            </span>
          </div>
        </div>
        <div className="cs-hero-screen">
          <AnalyticsScreen label="Vue principale du tableau de bord analytique" />
        </div>
      </div>
      <Wave />
    </section>
  )
}

function ProjectMeta() {
  const highlights = [
    ["⌁", "+23.5%", "Croissance des ventes"],
    ["◷", "-40%", "Temps de traitement"],
    ["◎", "+1200", "Utilisateurs actifs"],
    ["☆", "98%", "Satisfaction utilisateur"],
  ]
  return (
    <section
      className="cs-quick-meta shell"
      aria-label="Résultats clés du projet"
    >
      {highlights.map(([icon, value, label]) => (
        <div key={label}>
          <span>{icon}</span>
          <b>{value}</b>
          <small>{label}</small>
        </div>
      ))}
    </section>
  )
}

function ContextSection() {
  return (
    <section className="cs-reference-row cs-context">
      <div className="shell cs-reference-grid">
        <div className="cs-context-copy">
          <SectionLabel number="01" />
          <h2>Contexte &amp; objectifs</h2>
          <p>
            Les entreprises avaient besoin d'un outil simple et efficace pour
            centraliser leurs données, suivre leurs performances en temps réel
            et générer des rapports clairs.
          </p>
          <div className="cs-objective-panel">
            <b>Objectifs du projet</b>
            {project.objectives.map((objective) => (
              <span key={objective}>
                <i>✓</i>
                {objective}
              </span>
            ))}
          </div>
        </div>
        <div className="cs-context-visual">
          <div className="cs-monitor">
            <AnalyticsScreen
              variant="analytics"
              label="Dashboard affiché sur un poste de travail"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CodePanel() {
  return (
    <div className="cs-code-panel" aria-label="Architecture du code du projet">
      <div className="cs-code-tree">
        {[
          "app",
          "components",
          "lib",
          "pages",
          "public",
          "types",
          "next.config.js",
        ].map((item, index) => (
          <span key={item}>
            <i>{index < 6 ? "▣" : "◇"}</i>
            {item}
          </span>
        ))}
      </div>
      <div className="cs-code-lines">
        {Array.from({ length: 13 }, (_, index) => (
          <i key={index}>
            <span />
            <b />
            <em />
          </i>
        ))}
      </div>
    </div>
  )
}

function RoleSection() {
  return (
    <section className="cs-reference-row cs-contribution">
      <div className="shell cs-reference-grid reverse">
        <div className="cs-contribution-visual">
          <CodePanel />
        </div>
        <div className="cs-role-copy">
          <SectionLabel number="02" />
          <h2>Ma contribution</h2>
          <p>
            J'ai travaillé sur l'ensemble du développement de l'application, de
            la conception de l'interface à l'intégration des données, en passant
            par la mise en place des visualisations et du système
            d'authentification.
          </p>
          <div className="cs-role-card">
            {[
              ["⌁", "Mon rôle", "Développeur Full-Stack & UI Designer"],
              ["♙", "Équipe", "Projet personnel"],
              ["◷", "Durée", "3 mois"],
              ["◇", "Méthodologie", "Agile, itérations courtes"],
            ].map(([icon, label, value]) => (
              <span key={label}>
                <i>{icon}</i>
                <b>{label}</b>
                <small>{value}</small>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionSection() {
  return (
    <section className="cs-reference-row cs-solution">
      <div className="shell cs-reference-grid">
        <div className="cs-solution-copy">
          <SectionLabel number="03" />
          <h2>Solution proposée</h2>
          <p>
            Une application web moderne avec une interface intuitive, des
            graphiques interactifs et un système de gestion des utilisateurs.
            L'architecture a été pensée pour être scalable et facilement
            maintenable.
          </p>
          <div className="cs-feature-grid">
            {project.solutionFeatures.map((feature, index) => (
              <span key={feature}>
                <i>{["⌁", "◇", "▥", "⌕", "▤", "↔"][index]}</i>
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="cs-solution-screen">
          <AnalyticsScreen
            variant="details"
            label="Interface détaillée de la solution"
          />
        </div>
      </div>
    </section>
  )
}

function ProjectGallery() {
  const [active, setActive] = useState<number | null>(null)
  const gallery = project.gallery.slice(0, 4)

  useEffect(() => {
    if (active === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null)
      if (event.key === "ArrowRight") setActive((active + 1) % gallery.length)
      if (event.key === "ArrowLeft")
        setActive((active - 1 + gallery.length) % gallery.length)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active, gallery.length])

  const move = (direction: number) => {
    if (active === null) return
    setActive((active + direction + gallery.length) % gallery.length)
  }

  return (
    <section className="cs-gallery shell" id="apercu">
      <div className="cs-gallery-heading">
        <div>
          <SectionLabel number="04" />
          <h2>Aperçu de l'application</h2>
          <p>
            Quelques captures d'écran de l'interface et des principales
            fonctionnalités.
          </p>
        </div>
        <div className="cs-gallery-arrows">
          <button
            type="button"
            onClick={() => setActive(3)}
            aria-label="Vue précédente"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => setActive(0)}
            aria-label="Vue suivante"
          >
            →
          </button>
        </div>
      </div>
      <div className="cs-gallery-strip">
        {gallery.map((image, index) => (
          <button
            key={image.title}
            onClick={() => setActive(index)}
            type="button"
          >
            <AnalyticsScreen variant={image.variant} label={image.title} />
            <span>{image.title}</span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div
          className="cs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Aperçu : ${gallery[active].title}`}
        >
          <button
            className="cs-lightbox-close"
            onClick={() => setActive(null)}
            aria-label="Fermer l'aperçu"
          >
            ×
          </button>
          <button
            className="cs-lightbox-arrow prev"
            onClick={() => move(-1)}
            aria-label="Vue précédente"
          >
            ←
          </button>
          <div className="cs-lightbox-content">
            <AnalyticsScreen
              variant={gallery[active].variant}
              label={gallery[active].title}
            />
            <span>{gallery[active].title}</span>
          </div>
          <button
            className="cs-lightbox-arrow next"
            onClick={() => move(1)}
            aria-label="Vue suivante"
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}

function TechStack() {
  return (
    <section className="cs-tech shell">
      <div className="cs-tech-copy">
        <SectionLabel number="05" />
        <h2>Technologies utilisées</h2>
        <p>
          Un stack moderne et performant pour garantir une application rapide,
          sécurisée et évolutive.
        </p>
        <div className="cs-tech-grid">
          {project.technologies.slice(0, 8).map((technology, index) => (
            <div key={technology}>
              <span>{["N", "TS", "⚛", "≈", "JS", "◉", "▥", "◆"][index]}</span>
              <TechBadge>{technology}</TechBadge>
            </div>
          ))}
        </div>
      </div>
      <div className="cs-diagram">
        <div>
          <span>Frontend</span>
          <b>Next.js + Tailwind</b>
        </div>
        <i>↔</i>
        <div>
          <span>API</span>
          <b>Next.js API Routes</b>
        </div>
        <div>
          <span>Base de données</span>
          <b>PostgreSQL</b>
        </div>
        <i>↔</i>
        <div>
          <span>Authentification</span>
          <b>NextAuth.js</b>
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  const results = [
    ["⌁", "+23.5%", "Croissance des ventes"],
    ["◷", "-40%", "Temps de traitement"],
    ["★", "98%", "Satisfaction utilisateur"],
  ]
  return (
    <section className="cs-results shell">
      <div className="cs-results-copy">
        <SectionLabel number="06" />
        <h2>Résultats &amp; impact</h2>
        <p>
          Le projet a permis d'améliorer significativement la prise de décision
          grâce à des données claires et accessibles.
        </p>
        <div className="cs-results-grid">
          {results.map(([icon, value, label]) => (
            <span key={label}>
              <i>{icon}</i>
              <b>{value}</b>
              <small>{label}</small>
            </span>
          ))}
        </div>
      </div>
      <div className="cs-results-visual">
        <div className="cs-results-growth">
          +23.5%<small>Croissance</small>
        </div>
        <div className="cs-results-bars">
          {[35, 57, 45, 78, 66, 92, 74].map((height, index) => (
            <i style={{ height: `${height}%` }} key={index} />
          ))}
        </div>
        <svg
          viewBox="0 0 350 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 138 50 115 92 126 145 78 198 96 250 41 298 62 350 20" />
        </svg>
      </div>
    </section>
  )
}

function LearningBlock() {
  const portrait =
    "https://images.unsplash.com/photo-1610289307640-e5d7c5e8d9f5?crop=faces&fit=crop&fm=jpg&q=85&w=360&h=440"
  return (
    <section className="cs-learnings shell">
      <div className="cs-learning-copy">
        <SectionLabel number="07" />
        <h2>Ce que j'ai appris</h2>
        <p>
          Ce projet m'a permis de renforcer mes compétences en visualisation de
          données, en optimisation des performances et en conception
          d'interfaces utilisateur complexes.
        </p>
        <div className="cs-learning-list">
          {project.learnings.slice(0, 4).map((learning) => (
            <span key={learning}>
              <i>✓</i>
              {learning}
            </span>
          ))}
        </div>
      </div>
      <div className="cs-learning-quote">
        <span>“</span>
        <p>
          Ce projet a été une excellente opportunité d'approfondir mes
          compétences techniques tout en créant une solution utile et concrète.
        </p>
        <div>
          <b>Alex Rivera</b>
          <small>Développeur Full-Stack &amp; UI Designer</small>
        </div>
        <img src={portrait} alt="Alex Rivera" loading="lazy" />
      </div>
    </section>
  )
}

function ProjectNavigation() {
  return (
    <nav
      className="cs-project-nav shell"
      aria-label="Navigation entre les projets"
    >
      <a href="/projets/taskflow-mobile">
        <span>← Projet précédent</span>
        <b>TaskFlow Mobile</b>
      </a>
      <a className="all" href="/projets">
        Tous les projets
      </a>
      <a href="/projets/shopvista">
        <span>Projet suivant →</span>
        <b>ShopVista</b>
      </a>
    </nav>
  )
}

export default function AnalyticsCaseStudy() {
  return (
    <main className="case-study">
      <CaseStudyHero />
      <ProjectMeta />
      <ContextSection />
      <RoleSection />
      <SolutionSection />
      <ProjectGallery />
      <TechStack />
      <ResultsSection />
      <LearningBlock />
      <ProjectNavigation />
      <Footer />
    </main>
  )
}
