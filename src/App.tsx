import { useState } from "react"
import { Link, NavLink } from "react-router"
import ThemeToggle from "./components/ThemeToggle"
import { ProductArtwork } from "./components/ProjectArtwork"
import { profile } from "./data/profile"
import { projects as portfolioProjects } from "./data/projects"
import { skills as portfolioSkills } from "./data/skills"

interface IconProps {
  name: string
  size?: number
}

const featuredProjectSlugs = ["myshop", "post-it", "archi-smart"]
const projects = featuredProjectSlugs.map((slug) => {
  const project = portfolioProjects.find((item) => item.slug === slug)
  if (!project) throw new Error(`Projet vedette introuvable : ${slug}`)
  return project
})

const featuredSkillNames = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "Laravel",
  "Vue.js",
  "Nuxt",
  "MySQL",
  "Git",
  "Figma",
]
const skills = featuredSkillNames.flatMap((name) => {
  const skill = portfolioSkills.find((item) => item.name === name)
  return skill ? [skill] : []
})

export function Icon({ name, size = 18 }: IconProps) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    download: <path d="M12 3v12m-4-4 4 4 4-4M5 21h14" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
    palette: (
      <>
        <path d="M12 3a9 9 0 1 0 0 18c1.5 0 2-1 1.4-2-.7-1.2.2-2.7 1.6-2.7h2a4 4 0 0 0 4-4.2A9 9 0 0 0 12 3Z" />
        <path d="M7.5 10h.01M10 6.5h.01M15 7h.01M17 11h.01" />
      </>
    ),
    bulb: (
      <>
        <path d="M9 18h6M10 22h4M8.3 14.7a7 7 0 1 1 7.4 0c-.8.5-1.2 1.2-1.4 2.3H9.7c-.2-1.1-.6-1.8-1.4-2.3Z" />
      </>
    ),
    mouse: (
      <>
        <rect x="8" y="3" width="8" height="14" rx="4" />
        <path d="M12 6v3M12 19v3m-3-2 3 2 3-2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    linkedin: (
      <>
        <path d="M7 9v8M7 6.5v.01M11 17v-4.5a3 3 0 0 1 6 0V17M11 9v8" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4c.1-1-.4-1.8-1-2.3 3.3-.4 6.8-1.6 6.8-7.3 0-1.6-.6-2.9-1.6-3.9.2-.4.7-1.9-.2-3.8 0 0-1.3-.4-4.4 1.5a15 15 0 0 0-8 0C3.5.3 2.2.7 2.2.7c-.9 1.9-.4 3.4-.2 3.8a5.6 5.6 0 0 0-1.6 3.9c0 5.7 3.5 6.9 6.8 7.3-.5.4-.9 1.1-1 2.1V22" />
      </>
    ),
  }
  return (
    <svg
      aria-hidden="true"
      className="icon"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      >
        {paths[name] ?? paths.arrow}
      </g>
    </svg>
  )
}

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label="Retour à l'accueil">
      <span>&lt;</span>JCO<span>&gt;</span>
    </Link>
  )
}

export function Button({
  children,
  href,
  secondary = false,
}: {
  children: React.ReactNode
  href: string
  secondary?: boolean
}) {
  const isInternalLink = href.startsWith("/") || href.startsWith("#")

  if (isInternalLink) {
    return (
      <Link
        className={`button ${secondary ? "button-secondary" : ""}`}
        to={href}
      >
        {children}
      </Link>
    )
  }

  return (
    <a className={`button ${secondary ? "button-secondary" : ""}`} href={href}>
      {children}
    </a>
  )
}

export function Header({ active = "Accueil" }: { active?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="header shell">
      <Logo />
      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={open ? "Fermer la navigation" : "Ouvrir la navigation"}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        className={`nav ${open ? "nav-open" : ""}`}
        aria-label="Navigation principale"
      >
        {[
          ["Accueil", "/"],
          ["Projets", "/projets"],
          ["Compétences", "/competences"],
          ["À propos", "/a-propos"],
          ["CV", "/cv"],
          ["Contact", "/contact"],
        ].map(([label, href]) => (
          <NavLink
            className={({ isActive }) =>
              isActive || active === label ? "active" : ""
            }
            to={href}
            key={label}
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions-global">
        <ThemeToggle />
        <Link className="header-contact" to="/contact">
          <Icon name="mail" size={15} />
          Me contacter
        </Link>
      </div>
    </header>
  )
}

export function Wave({
  position = "bottom",
  subtle = false,
}: {
  position?: "top" | "bottom"
  subtle?: boolean
}) {
  return (
    <svg
      className={`wave wave-${position} ${subtle ? "wave-subtle" : ""}`}
      preserveAspectRatio="none"
      viewBox="0 0 1440 230"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`waveGradient-${position}-${subtle}`} x1="0" x2="1">
          <stop offset="0" stopColor="#00f5d4" stopOpacity=".05" />
          <stop offset=".48" stopColor="#00e6ef" stopOpacity=".7" />
          <stop offset="1" stopColor="#305cff" stopOpacity=".08" />
        </linearGradient>
      </defs>
      <path
        className="wave-fill"
        d="M0 126C190 232 310 12 545 115s350 114 895-45v160H0Z"
        fill={`url(#waveGradient-${position}-${subtle})`}
      />
      <path d="M0 118C190 224 310 4 545 107s350 114 895-45" />
      <path
        className="wave-echo"
        d="M0 145C210 245 329 34 555 132s348 107 885-40"
      />
      <path
        className="wave-blue"
        d="M0 133C175 207 320 31 536 121c250 105 398 91 904-34"
      />
      <path
        className="wave-violet"
        d="M0 151C222 224 351 59 578 143c252 94 429 73 862-22"
      />
    </svg>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow">{children}</div>
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <Header />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="hero-grid shell">
        <div className="hero-copy">
          <Eyebrow>
            Bonjour, je suis <i />
          </Eyebrow>
          <h1>{profile.name}</h1>
          <div className="hero-role">
            {profile.title}
          </div>
          <p>
            Je participe à la conception et au développement d'applications
            métier et de solutions numériques adaptées aux besoins des
            organisations.
          </p>
          <div className="hero-actions">
            <Button href="/projets">
              Voir mes projets <Icon name="arrow" />
            </Button>
            <Button href="/cv" secondary>
              Voir mon parcours <Icon name="arrow" />
            </Button>
          </div>
          <div className="socials">
            <a href={profile.github} aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="E-mail">
              <Icon name="mail" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-halo" />
          <div
            className="hero-portfolio-window"
            role="img"
            aria-label="Illustration conceptuelle d'une interface numérique"
          >
            <div className="hero-window-top">
              <span />
              <span />
              <span />
              <b>JCO · Développement web</b>
            </div>
            <div className="hero-window-content">
              <span>APPLICATIONS MÉTIER</span>
              <b>Des outils adaptés aux besoins</b>
              <div>
                <i>Interfaces web</i>
                <i>API REST</i>
                <i>Gestion de données</i>
              </div>
            </div>
          </div>
          <div className="availability">
            <i />
            <span>
              <b>Stage en cours</b>
              CIS Info · {profile.location}
            </span>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <Icon name="mouse" size={21} />
        <span>Découvrir</span>
      </div>
      <Wave />
    </section>
  )
}

const services = [
  {
    icon: "code",
    title: "Développement",
    text: "Applications web & mobiles modernes et performantes.",
  },
  {
    icon: "palette",
    title: "Design UI/UX",
    text: "Interfaces intuitives et centrées utilisateur.",
  },
  {
    icon: "bulb",
    title: "Solutions concrètes",
    text: "Des projets qui répondent à des besoins réels.",
  },
]

function About() {
  return (
    <section className="about section shell" id="apropos">
      <div className="about-copy">
        <Eyebrow>À propos de moi</Eyebrow>
        <h2>Des applications métier au service des organisations</h2>
        <p>
          Je m'appelle {profile.name} et je contribue au développement de
          solutions numériques, de la compréhension du besoin à la réalisation
          d'interfaces et de fonctionnalités utiles.
        </p>
        <Button href="/a-propos" secondary>
          En savoir plus sur moi <Icon name="arrow" />
        </Button>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">
              <Icon name={service.icon} size={31} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="projects-section section" id="projets">
      <Wave position="top" subtle />
      <div className="shell">
        <div className="section-heading">
          <div>
            <h2>Projets en vedette</h2>
            <p>
              Quelques projets récents qui illustrent mes compétences et ma
              façon de travailler.
            </p>
          </div>
          <Link className="text-link" to="/projets">
            Voir tous les projets <Icon name="arrow" />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-mock project-home-preview" aria-hidden="true">
                <ProductArtwork type={project.artwork} />
                <span className="home-preview-caption">
                  Illustration conceptuelle · {project.status}
                </span>
              </div>
              <div className="project-content">
                <span className="badge">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tags">
                    {project.technologies.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    to={project.href}
                    aria-label={`Voir le projet ${project.title}`}
                  >
                    <Icon name="arrow" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="skills-section section" id="competences">
      <Wave position="top" subtle />
      <div className="shell">
        <div className="section-heading">
          <div>
            <h2>Mes compétences</h2>
            <p>
              Un ensemble de technologies et d'outils que j'utilise pour
              concevoir,
              <br />
              développer et déployer des solutions complètes.
            </p>
          </div>
          <Link className="text-link" to="/competences">
            Voir toutes les compétences <Icon name="arrow" />
          </Link>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <div className={`skill-icon skill-${skill.color}`}>
                <Icon
                  name={skill.category === "Conception" ? "palette" : "code"}
                  size={27}
                />
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  ["Comprendre le besoin", "Écoute, analyse et définition des objectifs."],
  ["Concevoir la solution", "Architecture, design et planification."],
  ["Développer et tester", "Code propre, tests et validation."],
  ["Déployer et améliorer", "Mise en production et suivi continu."],
]

function Process() {
  return (
    <section className="process-section" id="methode">
      <div className="process-image" aria-hidden="true">
        <div className="process-workspace">
          <span>ÉTAPES DU PROJET</span>
          <b>Comprendre</b>
          <i />
          <b>Concevoir</b>
          <i />
          <b>Développer</b>
          <i />
          <b>Améliorer</b>
        </div>
        <div className="process-code-card">
          <span>&lt;/&gt;</span>
          <b>Une solution adaptée</b>
        </div>
      </div>
      <div className="process-content">
        <Eyebrow>Ma démarche</Eyebrow>
        <h2>
          De l'idée au produit,
          <br />
          avec méthode
        </h2>
        <p>
          J'adopte une approche structurée pour transformer chaque idée en une
          solution digitale de qualité, en mettant l'accent sur la compréhension
          du besoin, la conception, le développement et l'amélioration continue.
        </p>
        <div className="steps">
          {steps.map(([title, text], index) => (
            <div className="step" key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <b>{title}</b>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Wave />
    </section>
  )
}

const testimonialExamples = [
  {
    quote:
      "Exemple de retour : une interface claire aide à comprendre rapidement les étapes d'un projet.",
    initials: "D1",
  },
  {
    quote:
      "Exemple de retour : des échanges réguliers facilitent le suivi et les ajustements d'une solution.",
    initials: "D2",
  },
  {
    quote:
      "Exemple de retour : une présentation structurée rend les fonctionnalités plus faciles à parcourir.",
    initials: "D3",
  },
]

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const changeTestimonial = (offset: number) => {
    setActiveTestimonial(
      (current) =>
        (current + offset + testimonialExamples.length) %
        testimonialExamples.length,
    )
  }

  return (
    <section className="testimonials section shell" id="temoignages">
      <div className="section-heading">
        <div>
          <Eyebrow>Témoignages</Eyebrow>
          <h2>Retours d'expérience</h2>
        </div>
        <div className="carousel-buttons" aria-label="Navigation des témoignages">
          <button
            aria-label="Exemple précédent"
            onClick={() => changeTestimonial(-1)}
            type="button"
          >
            <Icon name="arrow" />
          </button>
          <button
            aria-label="Exemple suivant"
            onClick={() => changeTestimonial(1)}
            type="button"
          >
            <Icon name="arrow" />
          </button>
        </div>
      </div>
      <p className="testimonial-demo-note">
        Exemples fictifs de mise en page, sans lien avec des clients ou
        collaborateurs réels.
      </p>
      <div className="testimonial-grid" aria-live="polite">
        <article
          aria-label={`Témoignage fictif de démonstration ${activeTestimonial + 1}`}
          className="testimonial-card active"
          key={testimonialExamples[activeTestimonial].initials}
        >
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <p>{testimonialExamples[activeTestimonial].quote}</p>
          <div className="person">
            <span className="avatar" aria-hidden="true">
              {testimonialExamples[activeTestimonial].initials}
            </span>
            <div>
              <b>
                Persona de démonstration{" "}
                {String(activeTestimonial + 1).padStart(2, "0")}
              </b>
              <span>Profil fictif</span>
            </div>
          </div>
        </article>
      </div>
      <div className="dots" aria-label="Sélectionner un exemple">
        {testimonialExamples.map((example, index) => (
          <button
            aria-label={`Afficher l'exemple ${index + 1}`}
            aria-pressed={activeTestimonial === index}
            className={activeTestimonial === index ? "active" : ""}
            key={example.initials}
            onClick={() => setActiveTestimonial(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-overlay" />
      <div className="shell contact-content">
        <Eyebrow>Un projet en tête ?</Eyebrow>
        <h2>Travaillons ensemble</h2>
        <p>
          Vous avez une idée ou un projet ?<br />
          Écrivez-moi pour en discuter.
        </p>
        <div className="hero-actions">
          <Button href={`mailto:${profile.email}`}>
            Me contacter <Icon name="arrow" />
          </Button>
          <Button href="/cv" secondary>
            Voir mon parcours <Icon name="arrow" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-main">
        <Logo />
        <p>
          {profile.title}
          <br />
          <span>
            {profile.location} · {profile.phone}
          </span>
        </p>
        <nav>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/projets">Projets</NavLink>
          <NavLink to="/competences">Compétences</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
          <NavLink to="/cv">CV</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="footer-socials">
          <a href={profile.github} aria-label="GitHub">
            <Icon name="github" />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="E-mail">
            <Icon name="mail" />
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
        </span>
        <div>
          <a href="#mentions">Mentions légales</a>
          <a href="#confidentialite">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
