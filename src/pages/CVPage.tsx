import { Button, Footer, Header, Icon, Wave } from "../App"
import {
  cvCertifications,
  cvContact,
  cvExpertise,
  cvSkills,
  cvStats,
  cvTechnologies,
  education,
  experiences,
  languages,
  softSkills,
} from "../data/cv"
import "../cv.css"

const portrait =
  "https://images.unsplash.com/photo-1771443208338-26a0ad4cf43c?crop=faces&fit=crop&fm=jpg&q=88&w=700&h=900"
const laptopPhoto =
  "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&fit=crop&fm=jpg&q=86&w=1500&h=760"

function CVDownloadButton({ secondary = false }: { secondary?: boolean }) {
  const printCv = () => window.print()
  return (
    <button
      className={`button cv-download-button ${
        secondary ? "button-secondary" : ""
      }`}
      onClick={printCv}
      type="button"
    >
      Télécharger mon CV <Icon name="download" />
    </button>
  )
}

function CVSectionTitle({
  number,
  children,
}: {
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="cv-section-title">
      <span>{number}</span>
      <i />
      <h2>{children}</h2>
    </div>
  )
}

function CVHeroVisual() {
  return (
    <div className="cv-hero-visual">
      <img src={laptopPhoto} alt="" fetchPriority="high" />
      <div className="cv-laptop-resume">
        <div className="resume-side">
          <span>AR</span>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="resume-page">
          <div className="resume-head">
            <img src={portrait} alt="" />
            <div>
              <b>Alex Rivera</b>
              <span>Full-Stack Developer &amp; UI Designer</span>
            </div>
          </div>
          <div className="resume-columns">
            <div>
              <b />
              <i />
              <i />
              <i />
              <b />
              <i />
              <i />
            </div>
            <div>
              <b />
              <i />
              <i />
              <b />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <div className="cv-hand-note">
        Mon parcours
        <br />
        en un coup
        <br />
        d'œil
        <span>↘</span>
      </div>
    </div>
  )
}

function CVHero() {
  return (
    <section className="cv-hero">
      <Header active="CV" />
      <div className="shell cv-hero-grid">
        <div className="cv-hero-copy">
          <div className="eyebrow">MON CV</div>
          <h1>
            Un parcours tourné vers
            <br />
            la création de <em>solutions</em>
            <br />
            <em>digitales à impact</em>
          </h1>
          <p>
            Vous trouverez ici un résumé de mon parcours, mes expériences, mes
            compétences et mon CV complet à télécharger.
          </p>
          <div className="hero-actions">
            <CVDownloadButton />
            <Button href="/contact" secondary>
              Me contacter <Icon name="arrow" />
            </Button>
          </div>
        </div>
        <CVHeroVisual />
      </div>
      <Wave />
    </section>
  )
}

function CVStats() {
  return (
    <section className="cv-stats shell">
      {cvStats.map(([icon, value, label]) => (
        <div key={label}>
          <span>{icon}</span>
          <b>{value}</b>
          <small>{label}</small>
        </div>
      ))}
    </section>
  )
}

function ProfileCard() {
  return (
    <aside className="cv-profile-card">
      <div className="cv-profile-photo">
        <img
          src={portrait}
          alt="Alex Rivera, développeur Full-Stack et UI Designer"
        />
        <div>
          <h2>Alex Rivera</h2>
          <p>
            Développeur Full-Stack
            <br />
            &amp; UI Designer
          </p>
        </div>
      </div>
      <blockquote>
        « Transformer des idées en solutions digitales utiles, performantes et
        accessibles. »
      </blockquote>
      <div className="cv-contact-list">
        {cvContact.map(([icon, label, href]) =>
          href ? (
            <a href={href} key={label}>
              <span>{icon}</span>
              {label}
            </a>
          ) : (
            <div key={label}>
              <span>{icon}</span>
              {label}
            </div>
          ),
        )}
      </div>
      <Button href="/contact">
        Me contacter <Icon name="arrow" />
      </Button>
    </aside>
  )
}

function ProfileSummary() {
  return (
    <section className="cv-summary">
      <div className="cv-summary-heading">
        <CVSectionTitle number="01">Mon profil</CVSectionTitle>
        <p>
          Développeur passionné par la technologie, l'analyse de problèmes et la
          création de solutions digitales qui ont un vrai impact sur les
          utilisateurs.
        </p>
      </div>
      <div className="cv-expertise-grid">
        {cvExpertise.map(([icon, title, detail]) => (
          <article key={title}>
            <span>{icon}</span>
            <b>{title}</b>
            <small>{detail}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="cv-experiences">
      <CVSectionTitle number="02">Expériences professionnelles</CVSectionTitle>
      <div className="experience-timeline">
        {experiences.map((experience) => (
          <article key={experience.period}>
            <i />
            <div className="experience-period">{experience.period}</div>
            <div className="experience-content">
              <div>
                <h3>{experience.role}</h3>
                <span>{experience.organization}</span>
              </div>
              <em>{experience.technology}</em>
              <ul>
                {experience.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function MainCVContent() {
  return (
    <section className="cv-main shell">
      <ProfileCard />
      <div className="cv-main-content">
        <ProfileSummary />
        <ExperienceSection />
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="cv-education shell">
      <CVSectionTitle number="03">Formation académique</CVSectionTitle>
      <div className="education-grid">
        {education.map((item) => (
          <article key={`${item.period}-${item.title}`}>
            <div className="education-icon">
              {item.icon === "book" ? "▣" : "◇"}
            </div>
            <div>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <small>{item.place}</small>
              {item.level && <em>{item.level}</em>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="cv-skills shell">
      <CVSectionTitle number="04">Compétences clés</CVSectionTitle>
      <div className="cv-skills-grid">
        <div className="cv-skill-bars">
          {cvSkills.map(([name, value]) => (
            <div key={name}>
              <span>{name}</span>
              <i>
                <b style={{ width: `${value}%` }} />
              </i>
              <strong>{value}%</strong>
            </div>
          ))}
        </div>
        <div className="cv-technologies-card">
          <h3>
            <span>⌁</span>
            Technologies principales
          </h3>
          <div>
            {cvTechnologies.map(([name, mark]) => (
              <article key={name}>
                <b>{mark}</b>
                <small>{name}</small>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="cv-certifications shell">
      <CVSectionTitle number="05">
        Certifications &amp; formations
      </CVSectionTitle>
      <div>
        {cvCertifications.map(([mark, title, detail, year]) => (
          <article key={title}>
            <span>{mark}</span>
            <div>
              <b>{title}</b>
              <small>
                {detail}
                <br />
                {year}
              </small>
            </div>
            <em>{year}</em>
          </article>
        ))}
      </div>
    </section>
  )
}

function LanguagesAndSoftSkills() {
  return (
    <section className="cv-bottom-skills shell">
      <div className="cv-languages">
        <CVSectionTitle number="06">Langues</CVSectionTitle>
        <div>
          {languages.map(([language, level, value]) => (
            <article key={language}>
              <div
                className="language-ring"
                style={
                  {
                    "--language-value": `${value * 3.6}deg`,
                  } as React.CSSProperties
                }
              >
                <span>{value}%</span>
              </div>
              <b>{language}</b>
              <small>{level}</small>
            </article>
          ))}
        </div>
      </div>
      <div className="cv-soft-skills">
        <CVSectionTitle number="07">Soft skills</CVSectionTitle>
        <div>
          {softSkills.map(([mark, skill]) => (
            <article key={skill}>
              <span>{mark}</span>
              <b>{skill}</b>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CVDownloadSection() {
  return (
    <section className="cv-download shell">
      <img src={laptopPhoto} alt="" loading="lazy" />
      <div className="cv-download-shade" />
      <div className="cv-download-grid">
        <div>
          <h2>Mon CV complet</h2>
          <p>
            Téléchargez mon CV au format PDF pour découvrir tous les détails de
            mon parcours, mes compétences et mes réalisations.
          </p>
          <div className="hero-actions">
            <CVDownloadButton />
            <Button href="/contact" secondary>
              Me contacter <Icon name="arrow" />
            </Button>
          </div>
        </div>
        <div className="cv-download-list">
          {[
            "Version PDF optimisée",
            "Mise à jour régulièrement",
            "Parcours détaillé",
            "Projets et compétences",
            "Disponible sur demande",
          ].map((item) => (
            <span key={item}>✓ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CVPage() {
  return (
    <main className="cv-page">
      <CVHero />
      <CVStats />
      <MainCVContent />
      <EducationSection />
      <SkillsSection />
      <CertificationsSection />
      <LanguagesAndSoftSkills />
      <CVDownloadSection />
      <Footer />
    </main>
  )
}
