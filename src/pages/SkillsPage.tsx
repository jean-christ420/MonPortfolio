import { useMemo, useState } from "react"
import { Link } from "react-router"
import { Button, Footer, Header, Icon, Wave } from "../App"
import {
  expertise,
  mastery,
  skills,
  tools,
  type Skill,
  type SkillCategory,
} from "../data/skills"
import { projects } from "../data/projects"
import { ProductArtwork } from "../components/ProjectArtwork"
import "../skills.css"

function SectionIntro({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="skills-section-intro">
      <div>
        <span>{label}</span>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}

function SkillLogo({ mark }: { mark: string }) {
  if (mark === "react") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="3.6" />
        <ellipse cx="24" cy="24" rx="20" ry="8" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="20" ry="8" transform="rotate(120 24 24)" />
      </svg>
    )
  }
  if (mark === "database") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <ellipse cx="24" cy="10" rx="15" ry="6" />
        <path d="M9 10v11c0 3.5 6.7 6 15 6s15-2.5 15-6V10M9 21v11c0 3.5 6.7 6 15 6s15-2.5 15-6V21" />
      </svg>
    )
  }
  if (mark === "figma") {
    return (
      <svg viewBox="0 0 32 48" aria-hidden="true" className="figma-logo">
        <circle cx="10" cy="8" r="8" />
        <circle cx="22" cy="8" r="8" />
        <circle cx="10" cy="24" r="8" />
        <circle cx="22" cy="24" r="8" />
        <circle cx="10" cy="40" r="8" />
      </svg>
    )
  }
  if (mark === "vue") {
    return (
      <svg viewBox="0 0 48 42" aria-hidden="true">
        <path d="M3 4h10l11 18L35 4h10L24 39Z" />
        <path d="M13 4h7l4 7 4-7h7L24 22Z" />
      </svg>
    )
  }
  if (mark === "tailwind") {
    return (
      <svg viewBox="0 0 48 32" aria-hidden="true">
        <path d="M4 13c6-9 13-9 20 0 4 5 8 5 12 0 2-3 5-4 8-4-6 9-13 9-20 0-4-5-8-5-12 0-2 3-5 4-8 4Zm0 10c6-9 13-9 20 0 4 5 8 5 12 0 2-3 5-4 8-4-6 9-13 9-20 0-4-5-8-5-12 0-2 3-5 4-8 4Z" />
      </svg>
    )
  }
  if (mark === "node") {
    return <span className="node-mark">JS</span>
  }
  if (mark === "laravel") {
    return <span className="cube-mark">◇</span>
  }
  if (mark === "mongo") {
    return <span className="leaf-mark">◆</span>
  }
  if (mark === "docker") {
    return <span className="docker-mark">▦</span>
  }
  if (mark === "git") {
    return <span className="git-mark">◆</span>
  }
  if (mark === "mysql") {
    return <span className="mysql-mark">my</span>
  }
  if (mark === "github") {
    return <Icon name="github" size={28} />
  }
  return <span>{mark}</span>
}

const heroNodes = [
  ["react", "hero-node-react", "React"],
  ["JS", "hero-node-js", "JavaScript"],
  ["database", "hero-node-db", "Databases"],
  ["figma", "hero-node-figma", "Figma"],
  ["N", "hero-node-next", "Next.js"],
  ["laravel", "hero-node-laravel", "Laravel"],
]

function SkillsGlobe() {
  return (
    <div
      className="skills-globe-scene"
      aria-label="Constellation de technologies"
    >
      <div className="skills-globe">
        <div className="globe-grid latitude one" />
        <div className="globe-grid latitude two" />
        <div className="globe-grid longitude one" />
        <div className="globe-grid longitude two" />
        <i className="continent continent-a" />
        <i className="continent continent-b" />
        <i className="continent continent-c" />
      </div>
      <div className="globe-orbit orbit-one" />
      <div className="globe-orbit orbit-two" />
      <div className="globe-orbit orbit-three" />
      {heroNodes.map(([mark, className, label]) => (
        <div className={`globe-skill-node ${className}`} key={label}>
          <SkillLogo mark={mark} />
        </div>
      ))}
      <div className="globe-note">
        Des outils,
        <br />
        des compétences,
        <br />
        des possibilités
        <br />
        infinies.
      </div>
      {[1, 2, 3, 4, 5, 6].map((particle) => (
        <i className={`globe-particle particle-${particle}`} key={particle} />
      ))}
    </div>
  )
}

function SkillsHero() {
  const stats = [
    ["▧", String(expertise.length), "Domaines présentés"],
    ["⌁", String(skills.length), "Compétences présentées"],
    ["◇", String(tools.length), "Outils listés"],
  ]
  return (
    <section className="skills-hero">
      <Header active="Compétences" />
      <div className="shell skills-hero-grid">
        <div className="skills-hero-copy">
          <div className="eyebrow">COMPÉTENCES</div>
          <h1>
            Des compétences
            <br />
            pour transformer
            <br />
            des idées en <em>solutions</em>
          </h1>
          <p>
            Les technologies et outils présentés reflètent mon expérience en
            développement web, applications métier et intégration de services.
          </p>
          <div className="hero-actions">
            <Button href="/projets">
              Voir mes projets <Icon name="arrow" />
            </Button>
            <Button href="/cv" secondary>
              Voir mon parcours <Icon name="arrow" />
            </Button>
          </div>
        </div>
        <SkillsGlobe />
      </div>
      <div className="shell skills-hero-stats">
        {stats.map(([icon, value, label]) => (
          <div key={label}>
            <span>{icon}</span>
            <b>{value}</b>
            <small>{label}</small>
          </div>
        ))}
      </div>
      <Wave />
    </section>
  )
}

function ExpertiseIcon({ icon }: { icon: string }) {
  if (icon === "database") return <SkillLogo mark="database" />
  if (icon === "cube") return <SkillLogo mark="laravel" />
  return <span>{icon}</span>
}

function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <div className="shell">
        <SectionIntro
          label="EXPERTISE"
          title="Mon univers de compétences"
          description="J'interviens à différentes étapes d'un projet digital, en combinant développement, design, analyse et gestion de solutions adaptées aux besoins réels."
        />
        <div className="expertise-scene">
          <svg
            className="expertise-connectors"
            viewBox="0 0 1200 540"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="connectorGradient">
                <stop offset="0" stopColor="#00e8df" stopOpacity=".12" />
                <stop offset=".5" stopColor="#318dff" stopOpacity=".65" />
                <stop offset="1" stopColor="#8154ed" stopOpacity=".12" />
              </linearGradient>
            </defs>
            <path d="M600 275 305 125M600 275 895 125M600 275 215 335M600 275 985 335M600 275 600 455" />
          </svg>
          <div className="expertise-core">
            <div className="core-ring outer" />
            <div className="core-ring middle" />
            <div className="core-surface">
              <b>&lt;AR&gt;</b>
              <span>
                Compétences
                <br />
                en synergie
              </span>
            </div>
          </div>
          {expertise.map((item, index) => (
            <article
              className={`expertise-card expertise-card-${index + 1} expertise-${item.color}`}
              key={item.title}
            >
              <div className="expertise-card-icon">
                <ExpertiseIcon icon={item.icon} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link to="#technologies" aria-label={`Voir ${item.title}`}>
                  <Icon name="arrow" size={14} />
                </Link>
              </div>
            </article>
          ))}
          <div className="expertise-beam beam-left" />
          <div className="expertise-beam beam-right" />
        </div>
      </div>
    </section>
  )
}

const categories: ("Tous" | SkillCategory)[] = [
  "Tous",
  ...new Set(skills.map((skill) => skill.category)),
]

function SkillCard({
  skill,
  active,
  onSelect,
}: {
  skill: Skill
  active: boolean
  onSelect: () => void
}) {
  return (
    <button
      className={`skill-matrix-card skill-color-${skill.color} ${
        active ? "active" : ""
      }`}
      onClick={onSelect}
      type="button"
    >
      <div>
        <SkillLogo mark={skill.mark} />
      </div>
      <span>{skill.name}</span>
    </button>
  )
}

function TechnologySection() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Tous")
  const [selected, setSelected] = useState(skills[0])
  const visible = useMemo(() => {
    if (category === "Tous") return skills
    return skills.filter((skill) => skill.category === category)
  }, [category])
  return (
    <section className="technology-section" id="technologies">
      <div className="shell">
        <SectionIntro
          label="STACK"
          title="Technologies & outils"
          description="Les technologies que j'utilise régulièrement pour concevoir, développer et déployer des solutions."
        />
        <div className="technology-filters">
          {categories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              key={item}
              onClick={() => setCategory(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="technology-orbit">
          <div className="technology-matrix">
            {visible.map((skill) => (
              <SkillCard
                skill={skill}
                active={selected.name === skill.name}
                onSelect={() => setSelected(skill)}
                key={skill.name}
              />
            ))}
          </div>
        </div>
        <p className="technology-detail" aria-live="polite">
          <b>{selected.name}</b> — {selected.description}
        </p>
      </div>
    </section>
  )
}

function MasterySection() {
  return (
    <section className="mastery-section">
      <div className="shell">
        <SectionIntro
          label="COMPÉTENCES TECHNIQUES"
          title="Technologies utilisées"
        />
        <div className="mastery-grid">
          <div className="mastery-list">
            {mastery.map((name) => (
              <div className="mastery-row" key={name}>
                <span className="mastery-mark">
                  {skills.find((skill) => skill.name === name)?.mark ?? "◇"}
                </span>
                <b>{name}</b>
                <span>Utilisée dans mon travail</span>
              </div>
            ))}
          </div>
          <div className="evolution-card">
            <div className="evolution-title">
              <span>▥</span>
              <div>
                <b>Mon évolution</b>
                <small>
                  Un parcours construit entre formation, développement et
                  accompagnement des utilisateurs.
                </small>
              </div>
            </div>
            <div className="evolution-chart evolution-history">
              <p><b>2022–2023</b><span>BTS Développeur d'Applications</span></p>
              <p><b>2023–2024</b><span>Stages en développement web et support</span></p>
              <p><b>Depuis 2025</b><span>Formation Full Stack, freelance et stage chez CIS Info</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PracticeSection() {
  return (
    <section className="practice-section">
      <div className="shell">
        <SectionIntro
          label="COMPÉTENCES EN ACTION"
          title="Mise en pratique"
          description="Des compétences mises en œuvre à travers des projets concrets et variés."
        />
        <div className="practice-grid">
          {projects.map((project) => (
            <Link
              to={project.href}
              className="practice-card"
              key={project.slug}
            >
              <div
                className="skill-project-visual"
                role="img"
                aria-label={`Illustration conceptuelle de ${project.title}`}
              >
                <ProductArtwork type={project.artwork} />
                <span className="skill-art-label">Illustration conceptuelle</span>
              </div>
              <div>
                <b>{project.title}</b>
                <span>
                  {project.technologies.join(" · ") || project.status}
                </span>
                <i>
                  <Icon name="arrow" size={14} />
                </i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolsSection() {
  return (
    <section className="tools-section">
      <div className="shell">
        <SectionIntro
          label="PRODUCTIVITÉ"
          title="Outils du quotidien"
          description="Des outils qui m'aident à mieux organiser mon travail, collaborer et livrer des projets de qualité."
        />
        <div className="tools-row">
          {tools.map(([name, mark]) => (
            <div className="tool-item" key={name}>
              <div>
                <SkillLogo mark={mark} />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsCta() {
  return (
    <section className="skills-cta">
      <div className="skills-cta-shade" />
      <div className="shell skills-cta-grid">
        <div>
          <div className="eyebrow">UN PROJET EN TÊTE ?</div>
          <h2>
            Mettons nos compétences
            <br />
            en <em>commun</em>
          </h2>
          <p>
            Vous avez une question sur mes compétences ou un projet ? Écrivez-moi.
          </p>
          <div className="hero-actions">
            <Button href="/contact">
              Me contacter <Icon name="arrow" />
            </Button>
            <Button href="/projets" secondary>
              Voir mes projets
            </Button>
          </div>
        </div>
        <div className="skills-cta-list">
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

export default function SkillsPage() {
  return (
    <main className="skills-page">
      <SkillsHero />
      <ExpertiseSection />
      <TechnologySection />
      <MasterySection />
      <PracticeSection />
      <ToolsSection />
      <SkillsCta />
      <Footer />
    </main>
  )
}
