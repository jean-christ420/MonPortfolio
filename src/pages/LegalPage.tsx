import { Footer, Header } from "../App"
import { gmailComposeUrl, profile } from "../data/profile"

function ContactEmail() {
  return (
    <a href={gmailComposeUrl} target="_blank" rel="noreferrer">
      {profile.email}
    </a>
  )
}

export default function LegalPage() {
  return (
    <main className="legal-page">
      <Header active="" />
      <div className="legal-content shell">
        <header className="legal-heading">
          <div className="eyebrow">Informations</div>
          <h1>Informations légales et données personnelles</h1>
          <p>
            Cette page présente les éléments actuellement vérifiables. Les
            renseignements qui nécessitent une confirmation sont signalés
            explicitement plutôt que complétés par supposition.
          </p>
        </header>

        <section
          className="legal-section"
          id="mentions"
          aria-labelledby="legal-notice-title"
        >
          <div className="eyebrow">Éditeur et hébergement</div>
          <h2 id="legal-notice-title">Mentions légales</h2>
          <p className="legal-notice">
            Informations provisoires : les détails d’identification qui ne sont
            pas disponibles ne sont pas inventés.
          </p>
          <dl className="legal-details">
            <div>
              <dt>Nom affiché sur le portfolio</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <ContactEmail />
                {" · "}
                <a href={profile.phoneLink}>{profile.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Localisation communiquée</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Plateforme d’hébergement et de déploiement utilisée</dt>
              <dd>Vercel</dd>
            </div>
          </dl>
          <p>
            Le statut juridique et l’adresse postale de l’éditeur, ainsi que les
            coordonnées juridiques de l’hébergeur, restent à confirmer avant de
            compléter les mentions légales.
          </p>
        </section>

        <section
          className="legal-section"
          id="confidentialite"
          aria-labelledby="privacy-title"
        >
          <div className="eyebrow">Formulaire de contact</div>
          <h2 id="privacy-title">Politique de confidentialité</h2>
          <p className="legal-notice">
            Notice provisoire : les durées de conservation et certains détails
            relatifs aux fournisseurs doivent encore être confirmés. Aucune
            durée n’est annoncée ici.
          </p>
          <h3>Données et utilisation vérifiables</h3>
          <ul>
            <li>
              Le formulaire demande le nom, l’adresse e-mail, un sujet et le
              contenu du message afin de recevoir et traiter une demande.
            </li>
            <li>
              Les données du formulaire sont transmises à Resend pour acheminer
              le message vers l’adresse de contact configurée. Le code de
              l’application ne les enregistre pas dans une base de données.
            </li>
            <li>
              L’adresse IP, lue depuis les en-têtes transmis à la fonction de
              contact, sert à appliquer une limitation des envois. Une valeur
              de remplacement est utilisée si aucun en-tête d’adresse IP n’est
              disponible. Les modalités de conservation et de journalisation
              par les plateformes ne sont pas vérifiées ici.
            </li>
            <li>
              Vercel Speed Insights est chargé sur le site en production pour
              les mesures de performance. Les données exactes traitées et leur
              conservation par ce service restent à confirmer.
            </li>
          </ul>
          <h3>Informations à confirmer</h3>
          <p>
            L’identité et le contact du responsable du traitement, les bases
            applicables, les durées de conservation chez les prestataires et
            les modalités complètes d’exercice des droits doivent être
            confirmés pour finaliser cette politique.
          </p>
          <p>
            Pour toute question au sujet des informations affichées ici, vous
            pouvez écrire à <ContactEmail />.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
