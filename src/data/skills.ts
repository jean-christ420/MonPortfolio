export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Bases de données"
  | "Outils"
  | "Conception"

export type Skill = {
  name: string
  mark: string
  category: SkillCategory
  description: string
  color: string
}

export const skills: Skill[] = [
  {
    name: "HTML5",
    mark: "5",
    category: "Frontend",
    description: "Structure de pages et d'interfaces web.",
    color: "orange",
  },
  {
    name: "CSS3",
    mark: "#",
    category: "Frontend",
    description: "Mise en forme et adaptation responsive des interfaces.",
    color: "blue",
  },
  {
    name: "JavaScript",
    mark: "JS",
    category: "Frontend",
    description: "Développement de comportements interactifs côté web.",
    color: "yellow",
  },
  {
    name: "Vue.js",
    mark: "vue",
    category: "Frontend",
    description: "Développement d'interfaces web, notamment pour Post It.",
    color: "green",
  },
  {
    name: "Nuxt",
    mark: "N",
    category: "Frontend",
    description: "Frontend utilisé dans la contribution à Archi_Smart.",
    color: "lime",
  },
  {
    name: "PHP",
    mark: "PHP",
    category: "Backend",
    description: "Développement web côté serveur.",
    color: "violet",
  },
  {
    name: "Laravel",
    mark: "laravel",
    category: "Backend",
    description: "Développement d'applications web et de fonctionnalités métier.",
    color: "red",
  },
  {
    name: "NestJS",
    mark: "N",
    category: "Backend",
    description: "API backend consommée par le frontend d'Archi_Smart.",
    color: "red",
  },
  {
    name: "REST API",
    mark: "API",
    category: "Backend",
    description: "Intégration d'API dans des applications web.",
    color: "cyan",
  },
  {
    name: "SQL",
    mark: "SQL",
    category: "Bases de données",
    description: "Requêtes et manipulation de données relationnelles.",
    color: "blue",
  },
  {
    name: "MySQL",
    mark: "mysql",
    category: "Bases de données",
    description: "Base de données utilisée notamment dans MyShop.",
    color: "blue",
  },
  {
    name: "WordPress",
    mark: "W",
    category: "Outils",
    description: "Création et administration de sites et de contenus.",
    color: "blue",
  },
  {
    name: "Git",
    mark: "git",
    category: "Outils",
    description: "Versionnement du code.",
    color: "red",
  },
  {
    name: "GitHub",
    mark: "github",
    category: "Outils",
    description: "Hébergement et suivi de dépôts de code.",
    color: "white",
  },
  {
    name: "Figma",
    mark: "figma",
    category: "Conception",
    description: "Prototypage d'interfaces avant leur implémentation.",
    color: "pink",
  },
]

export const expertise = [
  {
    title: "Développement web",
    icon: "</>",
    description:
      "Développement front-end et back-end de solutions web adaptées aux besoins.",
    color: "blue",
  },
  {
    title: "Applications métier",
    icon: "◉",
    description:
      "Fonctionnalités de gestion, organisation des données et suivi d'activité.",
    color: "violet",
  },
  {
    title: "Intégration d'API",
    icon: "database",
    description:
      "Connexion d'interfaces web aux services et données d'une API.",
    color: "cyan",
  },
  {
    title: "Outils de développement",
    icon: "cube",
    description:
      "Versionnement, gestion de contenu, hébergement et assistants de développement.",
    color: "orange",
  },
  {
    title: "Prototypage & collaboration",
    icon: "team",
    description:
      "Prototypage d'interfaces et échanges avec les utilisateurs et les équipes.",
    color: "cyan",
  },
]

export const mastery = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "Laravel",
  "Vue.js",
  "Nuxt",
  "NestJS",
  "MySQL",
  "SQL",
  "REST API",
  "Git & GitHub",
] as const

export const tools = [
  ["VS Code", "⌁"],
  ["GitHub", "github"],
  ["Composer", "C"],
  ["cPanel", "CP"],
  ["Obambu", "O"],
  ["Figma", "figma"],
  ["GitHub Copilot", "GH"],
  ["Claude", "C"],
  ["Cursor", "Cu"],
] as const

export const certifications: {
  issuer: string
  title: string
  detail: string
  year: string
  mark: string
}[] = []
