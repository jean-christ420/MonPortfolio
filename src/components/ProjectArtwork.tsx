import type { Project } from "../data/projects"
import "../projects.css"

export function DashboardScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`dashboard-ui ${compact ? "dashboard-ui-compact" : ""}`}>
      <div className="dashboard-side">
        <b>JC</b>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="dashboard-main">
        <div className="dashboard-top">
          <div />
          <div />
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

export function ProductArtwork({
  type,
  large = false,
}: {
  type: Project["artwork"]
  large?: boolean
}) {
  if (type === "taskflow") {
    return (
      <div className="product-art art-taskflow">
        <div className="task-panel">
          <b>Illustration conceptuelle</b>
          <small>Notes organisées</small>
          <i />
          <i />
          <i />
        </div>
        <div className="task-phone">
          <span />
          <b>Notes</b>
          <i />
          <i />
          <i />
        </div>
      </div>
    )
  }

  if (type === "procurement") {
    return (
      <div className="product-art art-procurement">
        <div className="procurement-window">
          <small>PROCUREFLOW · PROTOTYPE</small>
          <b>Gestion des achats</b>
          <div className="procurement-flow">
            <span>Demande</span>
            <i aria-hidden="true">→</i>
            <span>Validation</span>
            <i aria-hidden="true">→</i>
            <span>Commande</span>
          </div>
          <div className="procurement-rows" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    )
  }

  if (type === "erp") {
    return (
      <div className="product-art art-erp">
        <div className="erp-side">
          <b>MyShop</b>
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="erp-content">
          <b>Catalogue et stock</b>
          <div className="erp-stats">
            <div><b>Accès</b><i /></div>
            <div><b>Produits</b><i /></div>
            <div><b>Stock</b><i /></div>
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

  if (type === "email") {
    return (
      <div className="product-art art-email">
        <div className="email-browser">
          <div className="email-browser-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="email-site">
            <div className="email-site-nav">
              <b>Smart_Courriel</b>
              <i aria-hidden="true" />
            </div>
            <div className="email-site-copy">
              <small>ILLUSTRATION CONCEPTUELLE · REFONTE</small>
              <b>Un site repensé, simplement.</b>
              <i aria-hidden="true" />
              <span>Découvrir le site</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "architecture") {
    return (
      <div className="product-art art-architecture">
        <div className="architecture-window">
          <div className="architecture-side">
            <b>Archi_Smart</b>
            <i />
            <i />
            <i />
          </div>
          <div className="architecture-content">
            <small>ILLUSTRATION CONCEPTUELLE</small>
            <b>Espace de travail</b>
            <div className="architecture-cards">
              <div><i /><span>Projet</span></div>
              <div><i /><span>Plan</span></div>
              <div><i /><span>Dossier</span></div>
            </div>
            <div className="architecture-plan" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (type === "futurpro") {
    return (
      <div className="product-art art-illustration art-futurpro">
        <div>
          <small>PROTOTYPE — FUTURPRO CI</small>
          <b>Orientation scolaire et professionnelle</b>
          <i />
        </div>
        <span className="illustration-person" aria-hidden="true">
          <i />
          <i />
          <b />
        </span>
      </div>
    )
  }

  return (
    <div className={`product-art art-${type} ${large ? "art-large" : ""}`}>
      <DashboardScreen compact={!large} />
    </div>
  )
}
