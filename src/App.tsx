import { useState } from "react"
import { Link, NavLink } from "react-router"
import ThemeToggle from "./components/ThemeToggle"

interface IconProps {
  name: string
  size?: number
}

const photos = {
  portrait:
    "https://images.unsplash.com/photo-1610289307640-e5d7c5e8d9f5?crop=faces&fit=crop&fm=jpg&q=90&w=900&h=1100",
  workspace:
    "https://images.unsplash.com/photo-1520583457224-aee11bad5112?crop=entropy&fit=crop&fm=jpg&q=88&w=1200&h=900",
  landscape:
    "https://images.unsplash.com/photo-1778401207104-3dabce1c314a?crop=entropy&fit=crop&fm=jpg&q=88&w=1800&h=700",
}

const projects = [
  {
    title: "Analytics Dashboard",
    type: "Web App",
    description:
      "Un tableau de bord d'analytique en temps réel avec des graphiques interactifs et des rapports détaillés.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    visual: "analytics",
  },
  {
    title: "TaskFlow Mobile",
    type: "Mobile",
    description:
      "Une application de gestion de tâches multi-plateformes avec collaboration en équipe.",
    tags: ["React Native", "TypeScript", "Node.js"],
    visual: "mobile",
  },
  {
    title: "ShopVista",
    type: "Web App",
    description:
      "Une plateforme e-commerce moderne avec une expérience d'achat fluide et intuitive.",
    tags: ["Next.js", "TypeScript", "Stripe"],
    visual: "shop",
  },
]

const skills = [
  ["⚛", "React", "cyan"],
  ["TS", "TypeScript", "blue"],
  ["JS", "Node.js", "yellow"],
  ["N", "Next.js", "white"],
  ["≈", "Tailwind CSS", "cyan"],
  ["●", "MongoDB", "green"],
  ["my", "MySQL", "blue"],
  ["S", "Stripe", "violet"],
  ["F", "Figma", "pink"],
  ["◆", "Git", "orange"],
]

const testimonials = [
  {
    quote:
      "Un travail de qualité, une excellente communication et un réel sens du détail. Je recommande sans hésitation !",
    name: "Sophie Martin",
    role: "CEO, TechStart",
    initials: "SM",
  },
  {
    quote:
      "Très professionnel et à l'écoute. Le projet a été livré dans les délais avec une qualité remarquable.",
    name: "Thomas Dubois",
    role: "Product Manager, InnovLab",
    initials: "TD",
  },
  {
    quote:
      "Une collaboration fluide et agréable. Alex a su comprendre nos besoins et proposer des solutions efficaces.",
    name: "Marie Lambert",
    role: "Founder, ShopVista",
    initials: "ML",
  },
]

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
      <span>&lt;</span>AR<span>&gt;</span>
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
        aria-label="Ouvrir la navigation"
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
          <h1>Alex Rivera</h1>
          <div className="hero-role">
            Développeur Full-Stack &amp; UI Designer
          </div>
          <p>
            Je conçois et développe des applications web performantes et des
            expériences numériques intuitives, en alliant code propre, design
            centré utilisateur et solutions concrètes aux problèmes réels.
          </p>
          <div className="hero-actions">
            <Button href="/projets">
              Voir mes projets <Icon name="arrow" />
            </Button>
            <Button href="/cv" secondary>
              Télécharger mon CV <Icon name="download" />
            </Button>
          </div>
          <div className="socials">
            <a href="#github" aria-label="GitHub">
              <Icon name="github" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <Icon name="linkedin" />
            </a>
            <a href="#dribbble" aria-label="Dribbble">
              ◎
            </a>
            <a href="mailto:hello@alexrivera.dev" aria-label="E-mail">
              <Icon name="mail" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-halo" />
          <img
            src={photos.portrait}
            alt="Alex Rivera, développeur et designer"
          />
          <div className="availability">
            <i />
            <span>
              <b>Disponible</b>Pour de nouveaux projets
            </span>
          </div>
          <div className="stats-card">
            <div>
              <b>2+</b>
              <span>
                Années
                <br />
                d'expérience
              </span>
            </div>
            <div>
              <b>10+</b>
              <span>
                Projets
                <br />
                réalisés
              </span>
            </div>
            <div>
              <b>100%</b>
              <span>
                Passion
                <br />
                &amp; Engagement
              </span>
            </div>
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
        <h2>
          Transformer des idées
          <br />
          en solutions digitales
        </h2>
        <p>
          Je suis un développeur passionné par la création d'applications web et
          mobiles qui ont un impact réel. J'aime travailler sur des projets
          variés, de la conception à la mise en production, en mettant l'accent
          sur la qualité du code, l'expérience utilisateur et la résolution de
          vrais problèmes.
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

function ProjectVisual({ type }: { type: string }) {
  if (type === "shop") {
    return (
      <div className="project-mock shop-mock">
        <div className="shop-nav">
          <b>forma.</b>
          <i />
          <i />
          <i />
        </div>
        <div className="shop-layout">
          <div className="sofa">
            <i className="sofa-back" />
            <i className="sofa-seat" />
            <i className="sofa-arm sofa-arm-left" />
            <i className="sofa-arm sofa-arm-right" />
            <i className="sofa-leg sofa-leg-left" />
            <i className="sofa-leg sofa-leg-right" />
          </div>
          <div className="shop-copy">
            <small>Nouvelle collection</small>
            <b>Élevez votre intérieur avec style</b>
            <p>Des pièces pensées pour durer.</p>
            <span>Découvrir</span>
          </div>
        </div>
      </div>
    )
  }
  if (type === "mobile") {
    return (
      <div className="project-mock mobile-mock">
        <div className="phone">
          <span className="phone-notch" />
          <b>TaskFlow</b>
          <small>Aujourd'hui</small>
          <i>
            <em />
          </i>
          <i>
            <em />
          </i>
          <i>
            <em />
          </i>
        </div>
        <div className="phone second">
          <span className="phone-notch" />
          <b>My tasks</b>
          <small>8 tâches</small>
          <i>
            <em />
          </i>
          <i>
            <em />
          </i>
          <i>
            <em />
          </i>
        </div>
        <div className="mobile-glow" />
      </div>
    )
  }
  return (
    <div className="project-mock analytics-mock">
      <div className="mock-toolbar">
        <i />
        <i />
        <i />
      </div>
      <div className="side-lines">
        <b>A</b>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="analytics-body">
        <div className="analytics-summary">
          <span>
            <b>24.8K</b>
            <small>Visiteurs</small>
          </span>
          <span>
            <b>+18%</b>
            <small>Conversion</small>
          </span>
          <span className="donut" />
        </div>
        <div className="mini-bars">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <svg viewBox="0 0 160 55">
          <path d="M0 45 25 38 45 42 70 18 88 31 113 7 135 20 160 5" />
        </svg>
      </div>
    </div>
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
              <ProjectVisual type={project.visual} />
              <div className="project-content">
                <span className="badge">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link to="/#contact" aria-label={`Voir ${project.title}`}>
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
          {skills.map(([mark, name, color]) => (
            <div className="skill" key={name}>
              <div className={`skill-icon skill-${color}`}>{mark}</div>
              <span>{name}</span>
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
      <div className="process-image">
        <img
          src={photos.workspace}
          alt="Un ordinateur affichant du code dans un espace de travail"
        />
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

function Testimonials() {
  const [active, setActive] = useState(1)
  const move = (direction: number) =>
    setActive((active + direction + testimonials.length) % testimonials.length)
  return (
    <section className="testimonials section shell" id="temoignages">
      <div className="section-heading">
        <div>
          <Eyebrow>Témoignages</Eyebrow>
          <h2>Ils m'ont fait confiance</h2>
        </div>
        <div className="carousel-buttons">
          <button onClick={() => move(-1)} aria-label="Témoignage précédent">
            ←
          </button>
          <button onClick={() => move(1)} aria-label="Témoignage suivant">
            →
          </button>
        </div>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <article
            className={`testimonial-card ${active === index ? "active" : ""}`}
            key={testimonial.name}
          >
            <span className="quote-mark">“</span>
            <p>{testimonial.quote}</p>
            <div className="person">
              <div className="avatar">{testimonial.initials}</div>
              <div>
                <b>{testimonial.name}</b>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="dots">
        {testimonials.map((item, index) => (
          <button
            className={active === index ? "active" : ""}
            aria-label={`Afficher le témoignage ${index + 1}`}
            key={item.name}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <img
        src={photos.landscape}
        alt="Route sinueuse dans un paysage montagneux nocturne"
      />
      <div className="contact-overlay" />
      <div className="shell contact-content">
        <Eyebrow>Un projet en tête ?</Eyebrow>
        <h2>Travaillons ensemble</h2>
        <p>
          Vous avez une idée, un projet ou une opportunité ?<br />
          Je suis toujours ouvert à discuter de nouvelles collaborations.
        </p>
        <div className="hero-actions">
          <Button href="mailto:hello@alexrivera.dev">
            Me contacter <Icon name="arrow" />
          </Button>
          <Button href="/cv" secondary>
            Voir mon CV <Icon name="download" />
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
          Développeur Full-Stack &amp; UI Designer
          <br />
          <span>
            Passionné par la création de solutions digitales impactantes.
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
          <a href="#github" aria-label="GitHub">
            <Icon name="github" />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href="#dribbble" aria-label="Dribbble">
            ◎
          </a>
          <a href="mailto:hello@alexrivera.dev" aria-label="E-mail">
            <Icon name="mail" />
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Alex Rivera. Tous droits réservés.</span>
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
