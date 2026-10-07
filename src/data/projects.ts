export type ProjectCategory = "Web App" | "Mobile" | "UI/UX" | "Systèmes" | "Data / IA" | "Autres"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  technologies: string[]
  featured: boolean
  href: string
  codeHref?: string
  artwork: string
}

export const projects: Project[] = [
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Web App",
    description:
      "Un tableau de bord d'analytique en temps réel avec des graphiques interactifs, gestion des utilisateurs et génération de rapports.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Chart.js",
      "PostgreSQL",
    ],
    featured: true,
    href: "/projets/analytics-dashboard",
    artwork: "analytics",
  },
  {
    slug: "taskflow-mobile",
    title: "TaskFlow Mobile",
    category: "Mobile",
    description:
      "Application de gestion de tâches multi-plateformes avec collaboration en équipe.",
    technologies: ["React Native", "TypeScript", "Node.js"],
    featured: false,
    href: "/projets/taskflow-mobile",
    artwork: "taskflow",
  },
  {
    slug: "shopvista",
    title: "ShopVista",
    category: "Web App",
    description:
      "Une plateforme e-commerce moderne avec une expérience d'achat fluide et intuitive.",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    featured: false,
    href: "/projets/shopvista",
    artwork: "shop",
  },
  {
    slug: "gestion-stock-erp",
    title: "Gestion de stock (ERP)",
    category: "Systèmes",
    description:
      "Application de gestion d'inventaire pour le suivi du matériel informatique et mobilier.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    featured: false,
    href: "/projets/gestion-stock-erp",
    artwork: "erp",
  },
  {
    slug: "e-clinic",
    title: "E-Clinic",
    category: "Mobile",
    description:
      "Application de gestion de clinique : patients, rendez-vous, consultations et dossiers médicaux.",
    technologies: ["WinDev", "MySQL"],
    featured: false,
    href: "/projets/e-clinic",
    artwork: "clinic",
  },
  {
    slug: "portfolio-personnel",
    title: "Portfolio Personnel",
    category: "Web App",
    description:
      "Mon portfolio développé avec Next.js et Tailwind CSS, avec un design moderne et des animations fluides.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    featured: false,
    href: "/projets/portfolio-personnel",
    artwork: "portfolio",
  },
  {
    slug: "smartcareerpro",
    title: "SmartCareerPro (UI/UX)",
    category: "UI/UX",
    description:
      "Conception d'une interface pour une plateforme d'orientation professionnelle.",
    technologies: ["Figma", "UI/UX", "Prototypage"],
    featured: false,
    href: "/projets/smartcareerpro",
    artwork: "career",
  },
  {
    slug: "hl-impex",
    title: "Site vitrine – HL IMPEX",
    category: "Web App",
    description:
      "Site vitrine réalisé sous WordPress avec Elementor pour une entreprise d'import-export.",
    technologies: ["WordPress", "Elementor", "SEO"],
    featured: false,
    href: "/projets/hl-impex",
    artwork: "impex",
  },
  {
    slug: "analyse-donnees",
    title: "Analyse de données",
    category: "Data / IA",
    description:
      "Analyse et visualisation de données avec Python pour extraire des insights et créer des rapports interactifs.",
    technologies: ["Python", "Pandas", "Power BI"],
    featured: false,
    href: "/projets/analyse-donnees",
    artwork: "data",
  },
  {
    slug: "futurpro-ci",
    title: "FuturPro CI (Hackathon)",
    category: "Autres",
    description:
      "Plateforme d'orientation pour les jeunes en Côte d'Ivoire, réalisée lors d'un hackathon.",
    technologies: ["Next.js", "TypeScript", "UI/UX"],
    featured: false,
    href: "/projets/futurpro-ci",
    artwork: "futurpro",
  },
]

export const projectCategories = [
  "Tous",
  "Web App",
  "Mobile",
  "UI/UX",
  "Systèmes",
  "Data / IA",
  "Autres",
] as const
