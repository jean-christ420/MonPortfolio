export type SkillCategory = "Frontend" | "Backend" | "Mobile" | "Data / IA" | "Outils" | "Design" | "DevOps"

export type Skill = {
  name: string
  mark: string
  category: SkillCategory
  description: string
  color: string
}

export const skills: Skill[] = [
  {
    name: "React",
    mark: "react",
    category: "Frontend",
    description: "Interfaces web composables et interactives.",
    color: "cyan",
  },
  {
    name: "Next.js",
    mark: "N",
    category: "Frontend",
    description: "Applications React performantes côté client et serveur.",
    color: "white",
  },
  {
    name: "Vue.js",
    mark: "vue",
    category: "Frontend",
    description: "Interfaces progressives et réactives.",
    color: "green",
  },
  {
    name: "TypeScript",
    mark: "TS",
    category: "Frontend",
    description: "JavaScript typé pour des applications robustes.",
    color: "blue",
  },
  {
    name: "JavaScript",
    mark: "JS",
    category: "Frontend",
    description: "Fondation du développement web interactif.",
    color: "yellow",
  },
  {
    name: "Node.js",
    mark: "node",
    category: "Backend",
    description: "Services et API JavaScript côté serveur.",
    color: "lime",
  },
  {
    name: "Laravel",
    mark: "laravel",
    category: "Backend",
    description: "Applications métier et API PHP structurées.",
    color: "red",
  },
  {
    name: "PHP",
    mark: "PHP",
    category: "Backend",
    description: "Développement web côté serveur.",
    color: "violet",
  },
  {
    name: "Tailwind CSS",
    mark: "tailwind",
    category: "Frontend",
    description: "Systèmes d'interfaces cohérents et rapides.",
    color: "cyan",
  },
  {
    name: "Sass",
    mark: "Sass",
    category: "Frontend",
    description: "Styles modulaires et maintenables.",
    color: "pink",
  },
  {
    name: "MySQL",
    mark: "mysql",
    category: "Data / IA",
    description: "Bases de données relationnelles.",
    color: "blue",
  },
  {
    name: "PostgreSQL",
    mark: "PG",
    category: "Data / IA",
    description: "Stockage relationnel robuste et avancé.",
    color: "blue",
  },
  {
    name: "MongoDB",
    mark: "mongo",
    category: "Data / IA",
    description: "Données documentaires flexibles.",
    color: "green",
  },
  {
    name: "Docker",
    mark: "docker",
    category: "DevOps",
    description: "Environnements reproductibles et déploiements.",
    color: "blue",
  },
  {
    name: "Git",
    mark: "git",
    category: "Outils",
    description: "Versionnement et collaboration.",
    color: "red",
  },
  {
    name: "Figma",
    mark: "figma",
    category: "Design",
    description: "Conception d'interfaces et prototypage.",
    color: "pink",
  },
]

export const expertise = [
  {
    title: "Développement",
    icon: "</>",
    description:
      "Applications web et mobiles modernes, performantes et évolutives.",
    color: "blue",
  },
  {
    title: "Design UI/UX",
    icon: "◉",
    description: "Interfaces intuitives et expériences utilisateur mémorables.",
    color: "violet",
  },
  {
    title: "Data & IA",
    icon: "database",
    description:
      "Analyse de données, intégration d'outils d'IA et visualisation d'insights.",
    color: "cyan",
  },
  {
    title: "Systèmes & Outils",
    icon: "cube",
    description:
      "Automatisation, déploiement et gestion d'infrastructures modernes.",
    color: "orange",
  },
  {
    title: "Gestion de projet",
    icon: "team",
    description:
      "Organisation, collaboration et livraison de solutions de qualité.",
    color: "cyan",
  },
]

export const mastery = [
  ["React / Next.js", 90],
  ["TypeScript", 85],
  ["Node.js", 80],
  ["Laravel", 80],
  ["Bases de données", 85],
  ["UI/UX (Figma)", 75],
  ["Docker & DevOps", 70],
  ["Data & IA", 65],
] as const

export const tools = [
  ["VS Code", "⌁"],
  ["GitHub", "github"],
  ["Postman", "◒"],
  ["Notion", "N"],
  ["Trello", "▦"],
  ["Discord", "◉"],
  ["Figma", "figma"],
  ["Slack", "✣"],
  ["Docker", "docker"],
  ["Ubuntu", "◉"],
] as const

export const certifications = [
  {
    issuer: "Meta",
    title: "Meta Front-End Developer",
    detail: "Certification (en cours)",
    year: "2024",
    mark: "∞",
  },
  {
    issuer: "Google",
    title: "Google UX Design",
    detail: "Certification (en cours)",
    year: "2023",
    mark: "G",
  },
  {
    issuer: "AWS",
    title: "AWS Cloud Practitioner",
    detail: "Autoformation (en cours)",
    year: "2023",
    mark: "aws",
  },
]
