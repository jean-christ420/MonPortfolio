import { Button, Footer, Header, Icon, Wave } from "../App"
import {
  cvContact,
  cvExpertise,
  cvSkills,
  cvTechnologies,
  education,
  experiences,
  languages,
  softSkills,
} from "../data/cv"
import { profile } from "../data/profile"
import "../cv.css"

function CVDownloadButton({ secondary = false }: { secondary?: boolean }) {
  return (
    <Button href="/contact" secondary={secondary}>
      Demander mon CV <Icon name="mail" />
    </Button>
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
      <div className="cv-laptop-resume">
        <div className="resume-side">
          <span>JCO</span>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="resume-page">
          <div className="resume-head">
            <span className="resume-initials">{profile.initials}</span>
            <div>
              <b>{profile.name}</b>
              <span>{profile.title}</span>
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
            compétences, avec une chronologie mise à jour et des coordonnées
            vérifiées.
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
      {cvExpertise.map(([icon, title, detail]) => (
        <div key={title}>
          <span>{icon}</span>
          <b>{title}</b>
          <small>{detail}</small>
        </div>
      ))}
    </section>
  )
}

function ProfileCard() {
  return (
    <aside className="cv-profile-card">
      <div className="cv-profile-photo">
        <span className="cv-profile-initials">{profile.initials}</span>
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.title}</p>
        </div>
      </div>
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
          Développeur web basé à {profile.location}, avec un parcours en
          applications métier, développement web et accompagnement des
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
          {cvSkills.map((skill) => (
            <span key={skill}>{skill}</span>
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

function LanguagesAndSoftSkills() {
  return (
    <section className="cv-bottom-skills shell">
      <div className="cv-languages">
        <CVSectionTitle number="05">Langues</CVSectionTitle>
        <div>
          {languages.map(([language, level]) => (
            <article key={language}>
              <div className="language-ring">
                <span>{language.slice(0, 2).toUpperCase()}</span>
              </div>
              <b>{language}</b>
              <small>{level}</small>
            </article>
          ))}
        </div>
      </div>
      <div className="cv-soft-skills">
        <CVSectionTitle number="06">Soft skills</CVSectionTitle>
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

function CVRequestSection() {
  return (
    <section className="cv-download shell">
      <div className="cv-download-shade" />
      <div className="cv-download-grid">
        <div>
          <h2>Mon parcours</h2>
          <p>
            Cette page présente mes expériences, ma formation et mes
            compétences. Pour obtenir un document récapitulatif, contactez-moi.
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
            "Expériences professionnelles",
            "Parcours académique",
            "Compétences et outils",
            "Coordonnées de contact",
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
      <LanguagesAndSoftSkills />
      <CVRequestSection />
      <Footer />
    </main>
  )
}
