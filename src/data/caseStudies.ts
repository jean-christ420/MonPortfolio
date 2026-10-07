interface LabelValue {
  label: string
  value: string
}

interface GalleryItem {
  title: string
  variant: string
}

interface ProcessItem {
  title: string
  description: string
}

export type CaseStudy = {
  slug: string
  title: string
  category: string
  subtitle: string
  heroMeta: LabelValue[]
  quickFacts: LabelValue[]
  context: string[]
  problems: string[]
  objectives: string[]
  responsibilities: string[]
  solutionFeatures: string[]
  gallery: GalleryItem[]
  technologies: string[]
  process: ProcessItem[]
  results: string[]
  learnings: string[]
}

export const analyticsCaseStudy: CaseStudy = {
  slug: "analytics-dashboard",
  title: "Analytics Dashboard",
  category: "Web Application",
  subtitle:
    "Une plateforme d'analyse permettant de transformer des données complexes en décisions claires.",
  heroMeta: [
    { label: "Type", value: "Web Application" },
    { label: "Rôle", value: "Full-Stack Developer & UI Designer" },
    { label: "Durée", value: "Projet fictif / à remplacer ultérieurement" },
    { label: "Stack", value: "Next.js · TypeScript · Tailwind · PostgreSQL" },
  ],
  quickFacts: [
    { label: "Client", value: "Projet conceptuel" },
    { label: "Catégorie", value: "Web Application" },
    { label: "Année", value: "2026" },
    { label: "Statut", value: "Prototype fonctionnel" },
  ],
  context: [
    "Les entreprises manipulent chaque jour un grand volume de données issues de sources différentes. Ces informations ont de la valeur, mais restent difficiles à exploiter lorsqu'elles sont dispersées.",
    "Analytics Dashboard a été imaginé pour centraliser ces données, suivre les performances en temps réel et générer des rapports clairs dans une interface unique.",
  ],
  problems: [
    "Informations dispersées entre plusieurs outils.",
    "Visualisations peu intuitives et difficiles à parcourir.",
    "Manque de hiérarchie entre données essentielles et secondaires.",
    "Tendances difficiles à identifier rapidement.",
    "Besoin d'une interface claire sur tous les écrans.",
  ],
  objectives: [
    "Centraliser les données",
    "Simplifier leur lecture",
    "Identifier rapidement les tendances",
    "Faciliter la prise de décision",
  ],
  responsibilities: [
    "UI Design",
    "Front-End",
    "Back-End",
    "Architecture",
    "Intégration",
    "Tests",
  ],
  solutionFeatures: [
    "Dashboard principal hiérarchisé",
    "Navigation claire et constante",
    "Cartes KPI immédiatement lisibles",
    "Graphiques et comparaisons",
    "Tableaux de données filtrables",
    "Expérience responsive",
  ],
  gallery: [
    { title: "Dashboard principal", variant: "main" },
    { title: "Vue analytique", variant: "analytics" },
    { title: "Détails", variant: "details" },
    { title: "Tableau de données", variant: "table" },
    { title: "Vue responsive", variant: "mobile" },
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "Chart.js",
    "Git",
    "Figma",
  ],
  process: [
    { title: "Recherche", description: "Comprendre les besoins." },
    { title: "UX / Architecture", description: "Structurer l'information." },
    { title: "UI Design", description: "Créer l'interface." },
    { title: "Développement", description: "Construire le produit." },
    { title: "Tests", description: "Corriger et améliorer." },
    { title: "Finalisation", description: "Préparer la version finale." },
  ],
  results: [
    "Interface centralisée",
    "Lecture simplifiée des données",
    "Navigation plus intuitive",
    "Dashboard responsive",
  ],
  learnings: [
    "Importance de la hiérarchie visuelle",
    "Visualisation claire des données",
    "Équilibre entre information et simplicité",
    "Conception responsive",
    "Architecture d'une application analytique",
  ],
}
