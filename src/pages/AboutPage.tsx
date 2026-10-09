import { Button, Footer, Header, Icon, Wave } from "../App"
import { aboutStats, interests, timeline, values } from "../data/about"
import { profile } from "../data/profile"
import "../about.css"

function AboutIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    book: (
      <>
        <path d="M4 5c5-1 8 1 8 4v12c0-3-3-5-8-4ZM20 5c-5-1-8 1-8 4v12c0-3 3-5 8-4Z" />
      </>
    ),
    study: (
      <>
        <path d="m3 9 9-5 9 5-9 5Z" />
        <path d="M7 12v4c3 3 7 3 10 0v-4M21 9v7" />
      </>
    ),
    code: <path d="m8 8-5 4 5 4m8-8 5 4-5 4m-2-12-4 16" />,
    chart: <path d="M5 20V10m5 10V4m5 16v-7m5 7V7" />,
    bulb: (
      <>
        <path d="M8 14a7 7 0 1 1 8 0c-1 .7-1.5 1.5-1.6 3H9.6C9.5 15.5 9 14.7 8 14Z" />
        <path d="M10 21h4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="m14 10 6-6m-1 0h-3m3 0v3" />
      </>
    ),
    team: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M2 20c0-4 2-6 6-6s6 2 6 6m0-4c4-1 7 1 7 4" />
      </>
    ),
    rocket: (
      <>
        <path d="M14 4c3-2 5-1 6 0 1 4-1 8-6 11l-5-5c1-2 3-4 5-6Z" />
        <path d="m9 10-4 1-2 3 6 1m5 0-1 5-3 2-1-7" />
        <circle cx="15" cy="8" r="1.5" />
      </>
    ),
    music: (
      <path d="M9 18V6l10-2v12M9 18c0 2-2 3-4 3s-3-1-3-2 1-3 4-3c1 0 2 0 3 1m10-1c0 2-2 3-4 3s-3-1-3-2 1-3 4-3c1 0 2 0 3 1" />
    ),
    sports: (
      <>
        <circle cx="12" cy="5" r="2" />
        <path d="m10 9 3 2 3-1m-5-1-3 4 3 2-1 5m4-8 3 3-1 5M5 10l3-2m9 1 3 2" />
      </>
    ),
    film: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M7 6 5 2m7 4-2-4m7 4-2-4M3 11h18" />
      </>
    ),
    tech: (
      <>
        <rect x="4" y="5" width="16" height="12" rx="2" />
        <path d="M9 21h6m-3-4v4M8 9h8m-8 4h5" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      >
        {paths[name]}
      </g>
    </svg>
  )
}

function AboutHero() {
  return (
    <section className="about-hero">
      <Header active="À propos" />
      <div className="about-hero-shade" />
      <div className="shell about-hero-grid">
        <div className="about-hero-copy">
          <div className="eyebrow">À PROPOS</div>
          <h1>
            Développer des outils
            <br />
            adaptés aux besoins
            <br />
            des <em>utilisateurs</em>
          </h1>
          <p>
            Je travaille sur le développement web, les applications métier et
            l'évolution d'outils numériques. Mon parcours comprend des
            expériences en entreprise, dans le support aux utilisateurs et des
            projets réalisés avec Laravel, Vue.js et Nuxt.
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
        <div className="about-hero-note">
          Transformer
          <br />
          des idées
          <br />
          en solutions
          <br />
          utiles.
          <span>↙</span>
        </div>
        <div className="about-identity-card">
          <span>
            ⌖ <b>{profile.location}</b>
          </span>
          <span>
            ▣ <b>{profile.title}</b>
          </span>
          <span>
            ● <b>Stage chez CIS Info · début à confirmer</b>
          </span>
        </div>
      </div>
      <Wave />
    </section>
  )
}

function AboutStats() {
  return (
    <section className="about-stats shell">
      {aboutStats.map((stat) => (
        <div key={stat.label}>
          <span>{stat.icon}</span>
          <b>{stat.value}</b>
          <small>{stat.label}</small>
        </div>
      ))}
    </section>
  )
}

function TimelineIcon({ name }: { name: string }) {
  return (
    <div className="timeline-icon">
      <AboutIcon name={name} />
    </div>
  )
}

function AboutTimeline() {
  return (
    <section className="about-timeline">
      <div className="timeline-shade" />
      <div className="shell timeline-inner">
        <div className="about-section-heading">
          <div>
            <span>MON HISTOIRE</span>
            <h2>
              Un parcours en
              <br />
              évolution constante
            </h2>
          </div>
          <p>
            Mon parcours s'est construit autour du développement web, des
            applications métier et de l'accompagnement des utilisateurs.
            Chaque expérience m'a permis de contribuer à des outils numériques
            dans des contextes variés.
          </p>
        </div>
        <div className="timeline-scene">
          <svg
            className="timeline-path"
            viewBox="0 0 380 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="timelineGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8353ec" />
                <stop offset=".48" stopColor="#c68aff" />
                <stop offset="1" stopColor="#00e8df" />
              </linearGradient>
            </defs>
            <path d="M210 5C40 80 347 124 177 204S322 329 177 410 275 514 167 598" />
          </svg>
          {timeline.map((event, index) => (
            <article
              className={`timeline-event event-${index + 1}`}
              key={event.period}
            >
              <TimelineIcon name={event.icon} />
              <span>{event.period}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </article>
          ))}
        </div>
      </div>
      <Wave />
    </section>
  )
}

function ValuesSection() {
  return (
    <section className="values-section">
      <div className="shell">
        <div className="about-section-heading">
          <div>
            <span>CE QUI ME GUIDE</span>
            <h2>Mes valeurs</h2>
          </div>
          <p>
            Ces principes m'accompagnent dans chaque projet, chaque
            collaboration et chaque décision.
          </p>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article
              className={`value-card value-${value.color}`}
              key={value.title}
            >
              <div>
                <AboutIcon name={value.icon} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function InterestsSection() {
  return (
    <section className="interests-section">
      <div className="shell">
        <div className="about-section-heading">
          <div>
            <span>MES CENTRES D'INTÉRÊT</span>
            <h2>Mes domaines d'intérêt</h2>
          </div>
          <p>
            En dehors du développement, je m'intéresse au sport, à la musique,
            à la lecture, aux films et aux anime.
          </p>
        </div>
        <div className="interests-row">
          {interests.map((interest, index) => (
            <article
              className={`interest-card interest-${index + 1}`}
              key={interest.title}
            >
              <div className={`interest-art interest-art-${index + 1}`} aria-hidden="true">
                <span className="interest-art-label">Illustration conceptuelle</span>
                <AboutIcon name={interest.icon} />
                <i />
                <i />
                <i />
              </div>
              <div className="interest-copy">
                <span>
                  <AboutIcon name={interest.icon} />
                </span>
                <b>{interest.title}</b>
                <small>{interest.description}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutQuote() {
  return (
    <section className="about-quote">
      <div className="quote-shade" />
      <div className="shell">
        <span>◇</span>
        <p className="about-quote-statement">
          Concevoir des outils numériques utiles commence par comprendre les
          besoins des personnes qui les utilisent.
        </p>
      </div>
      <Wave />
    </section>
  )
}

function AboutCta() {
  return (
    <section className="about-cta">
      <div className="about-cta-shade" />
      <div className="shell about-cta-grid">
        <div>
          <div className="eyebrow">DISCUTONS</div>
          <h2>
            Une idée, un projet ou
            <br />
            une collaboration ?
          </h2>
          <p>
            Écrivez-moi pour présenter votre projet ou poser une question.
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
        <div className="about-cta-list">
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

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <AboutStats />
      <AboutTimeline />
      <ValuesSection />
      <InterestsSection />
      <AboutQuote />
      <AboutCta />
      <Footer />
    </main>
  )
}
