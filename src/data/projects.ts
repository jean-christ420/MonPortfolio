export type ProjectCategory = "Web App" | "Mobile" | "UI/UX" | "Systèmes" | "Autres"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  status: "Terminé" | "Prototype" | "En cours"
  description: string
  technologies: string[]
  featured: boolean
  href: string
  codeHref?: string
  artwork: "erp" | "taskflow" | "procurement" | "futurpro" | "email" | "architecture"
}

export const projects: Project[] = [
  {
    slug: "myshop",
    title: "MyShop",
    category: "Web App",
    status: "Terminé",
    description:
      "Application de gestion de boutique : administration des accès, des produits, des catégories et suivi du stock.",
    technologies: ["Laravel", "MySQL"],
    featured: true,
    href: "/projets/myshop",
    artwork: "erp",
  },
  {
    slug: "post-it",
    title: "Post It",
    category: "Web App",
    status: "Terminé",
    description:
      "Application web de prise de notes inspirée des Post-it, développée avec Vue.js.",
    technologies: ["Vue.js"],
    featured: false,
    href: "/projets/post-it",
    artwork: "taskflow",
  },
  {
    slug: "procureflow",
    title: "ProcureFlow",
    category: "Web App",
    status: "Prototype",
    description:
      "Prototype de plateforme de gestion des achats. Les choix techniques et les fonctionnalités restent à confirmer avant publication de détails supplémentaires.",
    technologies: [],
    featured: false,
    href: "/projets/procureflow",
    artwork: "procurement",
  },
  {
    slug: "futurpro-ci",
    title: "FuturPro CI",
    category: "Web App",
    status: "Prototype",
    description:
      "Prototype de plateforme d'orientation scolaire et professionnelle conçu dans le cadre du hackathon WeCodeS.",
    technologies: [],
    featured: false,
    href: "/projets/futurpro-ci",
    artwork: "futurpro",
  },
  {
    slug: "smart-courriel",
    title: "Smart_Courriel",
    category: "Web App",
    status: "En cours",
    description:
      "Contribution en cours à la modernisation d'un site existant chez CIS Info. Présentation générale, sans capture ni détail interne.",
    technologies: [],
    featured: false,
    href: "/projets/smart-courriel",
    artwork: "email",
  },
  {
    slug: "archi-smart",
    title: "Archi_Smart",
    category: "Web App",
    status: "En cours",
    description:
      "Contribution frontend en cours à une plateforme pour cabinets d'architecture, avec un frontend Nuxt connecté à une API NestJS.",
    technologies: ["Nuxt", "NestJS", "Figma"],
    featured: false,
    href: "/projets/archi-smart",
    artwork: "architecture",
  },
]

export const projectCategories = [
  "Tous",
  "Web App",
  "Mobile",
  "UI/UX",
  "Systèmes",
  "Autres",
] as const
