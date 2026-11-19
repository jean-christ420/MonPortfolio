import myshopStorefront from "../imports/myshop/01-boutique.png"
import myshopCatalog from "../imports/myshop/02-catalogue.png"
import myshopProduct from "../imports/myshop/03-produit.png"
import myshopCart from "../imports/myshop/04-panier.png"
import myshopAdministration from "../imports/myshop/05-administration.png"
import myshopProducts from "../imports/myshop/06-gestion-produits.png"
import myshopStock from "../imports/myshop/07-gestion-stocks.png"

export type ProjectCategory =
  | "Application e-commerce"
  | "Web App"
  | "Mobile"
  | "UI/UX"
  | "Systèmes"
  | "Autres"

export type ProjectScreenshot = {
  src: string
  title: string
  description: string
}

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  status: "Terminé" | "Prototype" | "En cours"
  description: string
  role?: string
  features?: string[]
  technologies: string[]
  screenshots?: ProjectScreenshot[]
  featured: boolean
  href: string
  codeHref?: string
  artwork:
    | "myshop"
    | "erp"
    | "taskflow"
    | "procurement"
    | "futurpro"
    | "email"
    | "architecture"
}

export const myshopScreenshots: ProjectScreenshot[] = [
  {
    src: myshopStorefront,
    title: "Boutique",
    description: "Page d’accueil et sélection de mobilier et décoration.",
  },
  {
    src: myshopCatalog,
    title: "Catalogue",
    description: "Catalogue des produits avec catégories et prix.",
  },
  {
    src: myshopProduct,
    title: "Fiche produit",
    description: "Fiche détaillée avec variante, stock et ajout au panier.",
  },
  {
    src: myshopCart,
    title: "Panier",
    description: "Panier latéral avec gestion des quantités et commande.",
  },
  {
    src: myshopAdministration,
    title: "Administration",
    description: "Tableau de bord des ventes et indicateurs de la boutique.",
  },
  {
    src: myshopProducts,
    title: "Gestion des produits",
    description: "Administration du catalogue, des tarifs et des variantes.",
  },
  {
    src: myshopStock,
    title: "Gestion des stocks",
    description: "Suivi de l’inventaire et des quantités disponibles.",
  },
]

export const projects: Project[] = [
  {
    slug: "myshop",
    title: "MyShop",
    category: "Application e-commerce",
    status: "Terminé",
    description:
      "Plateforme e-commerce dédiée à la vente de meubles et d’articles de décoration. Elle associe une boutique en ligne à un espace d’administration pour gérer les produits, les variantes, les stocks et les commandes.",
    role: "Développeur Full-Stack",
    features: [
      "Catalogue de produits et fiches détaillées.",
      "Panier et gestion des comptes clients.",
      "Tableau de bord d’administration.",
      "Gestion des produits, variantes et stocks.",
      "Suivi des commandes et des opérations commerciales.",
    ],
    technologies: [
      "Laravel 12",
      "React 19",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
    ],
    screenshots: myshopScreenshots,
    featured: true,
    href: "/projets/myshop",
    artwork: "myshop",
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
      "Prototype de plateforme de gestion des achats, pensé pour visualiser les étapes clés d'un processus d'approvisionnement.",
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
      "Contribution à la modernisation du site Smart_Courriel au sein de CIS Info.",
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
  "Application e-commerce",
  "Web App",
  "Mobile",
  "UI/UX",
  "Systèmes",
  "Autres",
] as const
