import myshopStorefront from "../imports/myshop/01-boutique.png"
import myshopCatalog from "../imports/myshop/02-catalogue.png"
import myshopProduct from "../imports/myshop/03-produit.png"
import myshopCart from "../imports/myshop/04-panier.png"
import myshopAdministration from "../imports/myshop/05-administration.png"
import myshopProducts from "../imports/myshop/06-gestion-produits.png"
import myshopStock from "../imports/myshop/07-gestion-stocks.png"
import erpDashboard from "../imports/erp-institutionnel/01-tableau-de-bord.png"
import erpRequests from "../imports/erp-institutionnel/02-besoins-demandes.png"
import erpAuthorizations from "../imports/erp-institutionnel/03-autorisations-achat.png"
import erpConsultations from "../imports/erp-institutionnel/04-consultations-offres.png"
import erpOrders from "../imports/erp-institutionnel/05-bons-commande.png"
import erpDocumentTypes from "../imports/erp-institutionnel/06-selection-type-document.png"
import erpInvoices from "../imports/erp-institutionnel/07-factures-reglements.png"
import erpAllocations from "../imports/erp-institutionnel/08-dotations-affectations.png"
import archiDashboard from "../imports/archi-smart/01-tableau-de-bord.png"
import archiCabinetSettings from "../imports/archi-smart/02-parametres-cabinet.png"
import archiUsers from "../imports/archi-smart/03-administration-utilisateurs.png"
import archiThresholds from "../imports/archi-smart/04-seuils-alertes.png"
import archiWorkflows from "../imports/archi-smart/05-workflows-validation.png"

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

export const erpScreenshots: ProjectScreenshot[] = [
  {
    src: erpDashboard,
    title: "Tableau de bord",
    description:
      "Vue d’ensemble des demandes, commandes, livraisons et du budget.",
  },
  {
    src: erpRequests,
    title: "Besoins et demandes d'achat",
    description: "Suivi des expressions de besoins et des demandes d'achat.",
  },
  {
    src: erpAuthorizations,
    title: "Autorisations d'achat",
    description:
      "Suivi des demandes d'autorisation et des pièces justificatives.",
  },
  {
    src: erpConsultations,
    title: "Consultations et offres",
    description: "Comparaison des offres fournisseurs et suivi des consultations.",
  },
  {
    src: erpOrders,
    title: "Bons de commande",
    description: "Préparation, émission et suivi des commandes fournisseurs.",
  },
  {
    src: erpDocumentTypes,
    title: "Sélection du type de document",
    description: "Choix du document à enregistrer depuis une demande.",
  },
  {
    src: erpInvoices,
    title: "Factures et règlements",
    description: "Contrôle des factures et suivi des demandes de règlement.",
  },
  {
    src: erpAllocations,
    title: "Dotations et affectations",
    description: "Préparation des dotations et suivi des affectations.",
  },
]

export const archiSmartScreenshots: ProjectScreenshot[] = [
  {
    src: archiDashboard,
    title: "Tableau de bord",
    description:
      "Vue d’ensemble des projets, tâches, budgets et alertes du cabinet.",
  },
  {
    src: archiCabinetSettings,
    title: "Paramètres du cabinet",
    description:
      "Configuration des informations générales et des paramètres du cabinet.",
  },
  {
    src: archiUsers,
    title: "Administration des utilisateurs",
    description:
      "Gestion des comptes collaborateurs, des rôles et des statuts d’accès.",
  },
  {
    src: archiThresholds,
    title: "Seuils et alertes",
    description:
      "Configuration des seuils et suivi des alertes du cabinet.",
  },
  {
    src: archiWorkflows,
    title: "Workflows de validation",
    description:
      "Configuration et suivi des circuits de validation des documents.",
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
    slug: "erp-institutionnel",
    title: "ERP institutionnel — Gestion des achats et des ressources",
    category: "Web App",
    status: "Prototype",
    description:
      "ERP institutionnel est une application de gestion destinée à centraliser et optimiser les processus administratifs, financiers et logistiques d'une institution. Elle propose une interface unifiée pour le suivi du cycle des achats, depuis l'expression des besoins jusqu'au règlement des factures, ainsi que la gestion des dotations et des ressources.",
    role: "Conception et développement Frontend",
    features: [
      "Gestion des besoins et demandes d'achat.",
      "Autorisations et consultations fournisseurs.",
      "Suivi des bons de commande.",
      "Gestion des factures et règlements.",
      "Dotations et affectations des équipements.",
      "Tableaux de bord et suivi budgétaire.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    screenshots: erpScreenshots,
    featured: false,
    href: "/projets/erp-institutionnel",
    artwork: "erp",
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
    slug: "archi-smart",
    title: "Archi_Smart — Plateforme de gestion pour cabinets d'architecture",
    category: "Web App",
    status: "En cours",
    description:
      "Archi_Smart est une plateforme de gestion destinée aux cabinets d'architecture. Elle centralise leurs activités administratives et métier à travers différents modules dédiés à la gestion des clients, des collaborateurs, des documents et des processus de validation. Je participe à son développement en collaboration avec d'autres développeurs, au sein de l'équipe Frontend, notamment sur la conception des interfaces utilisateur et leur intégration avec les services Backend.",
    role: "Développeur Frontend au sein d'une équipe de développement",
    features: [
      "Tableau de bord et suivi des activités.",
      "Gestion des clients et collaborateurs.",
      "Administration des utilisateurs et permissions.",
      "Paramétrage du cabinet.",
      "Gestion documentaire.",
      "Workflows de validation.",
      "Seuils, alertes et notifications.",
    ],
    technologies: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Pinia",
      "NestJS",
      "TypeORM",
      "PostgreSQL",
    ],
    screenshots: archiSmartScreenshots,
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
