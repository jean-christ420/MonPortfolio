import { profile } from "./profile"

export const cvStats: string[][] = []

export const cvContact = [
  ["⌖", profile.location, null],
  ["✉", profile.email, `mailto:${profile.email}`],
  ["☎", profile.phone, profile.phoneLink],
  ["in", "LinkedIn", profile.linkedin],
  ["gh", "GitHub", profile.github],
] as const

export const cvExpertise = [
  ["▧", "Développement web", "Front-end & back-end"],
  ["◇", "Applications métier", "Conception & évolution"],
  ["◎", "Support technique", "Analyse & résolution d'incidents"],
  ["⌁", "Outils de travail", "Git, hébergement & prototypage"],
]

export const experiences = [
  {
    period: "En cours · début à confirmer",
    role: "Développeur web (stage)",
    organization: "CIS Info",
    technology: "Nuxt · NestJS · Figma",
    tasks: [
      "Contribuer au développement frontend d'Archi_Smart, dont le frontend Nuxt consomme une API backend NestJS.",
      "Participer à la modernisation du site existant Smart_Courriel.",
      "Utiliser Figma pour le prototypage et Claude et Cursor comme assistants de développement.",
    ],
  },
  {
    period: "Septembre 2025 – Aujourd'hui",
    role: "Développeur web freelance",
    organization: "Activité indépendante",
    technology: "PHP · Laravel · JavaScript · MySQL · Git",
    tasks: [
      "Concevoir et développer des solutions web selon les besoins des projets.",
      "Développer des fonctionnalités front-end et back-end avec PHP, Laravel, JavaScript et MySQL.",
      "Versionner le code avec Git et GitHub et utiliser des assistants IA pour la recherche, la compréhension et le débogage.",
    ],
  },
  {
    period: "Juin – décembre 2024",
    role: "Développeur logiciel et technicien support (stage)",
    organization: "Assemblée nationale de Côte d'Ivoire",
    technology: "Développement d'applications internes · Support",
    tasks: [
      "Développer et maintenir des fonctionnalités d'applications internes.",
      "Participer à l'amélioration des outils numériques des services administratifs.",
      "Analyser et résoudre des incidents techniques, puis accompagner les utilisateurs.",
      "Collaborer avec les utilisateurs pour comprendre leurs besoins techniques.",
    ],
  },
  {
    period: "Novembre 2023 – février 2024",
    role: "Développeur web (stage)",
    organization: "HL IMPEX",
    technology: "Laravel · WordPress · cPanel",
    tasks: [
      "Développer des fonctionnalités d'applications web avec Laravel.",
      "Créer et administrer le site WordPress, son contenu et ses pages.",
      "Administrer les utilisateurs et les services d'hébergement via cPanel, et contribuer à la maintenance et au support.",
    ],
  },
]

export const education = [
  {
    period: "2022 – 2023",
    title: "BTS Développeur d'Applications",
    detail: "Développeur d'Applications",
    place: "Groupe CSI Pôle Polytechnique",
    level: "",
    icon: "study",
  },
  {
    period: "Juin – décembre 2025",
    title: "Formation Développement Web Full Stack",
    detail: "Développement Web Full Stack",
    place: "Coding Academy by Epitech, Abidjan",
    level: "",
    icon: "diploma",
  },
]

export const cvSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "PHP",
  "SQL",
  "Laravel",
  "Vue.js",
  "Nuxt",
  "NestJS",
  "MySQL",
  "REST API",
  "MVC",
  "WordPress",
  "Git",
  "GitHub",
  "Composer",
  "cPanel",
  "Figma",
]

export const cvTechnologies = [
  ["HTML5", "5"],
  ["CSS3", "#"],
  ["JavaScript", "JS"],
  ["PHP", "PHP"],
  ["Laravel", "◇"],
  ["Vue.js", "V"],
  ["Nuxt", "N"],
  ["MySQL", "my"],
  ["NestJS", "N"],
  ["Git", "◆"],
  ["GitHub", "GH"],
  ["WordPress", "W"],
  ["Figma", "F"],
  ["Composer", "C"],
  ["cPanel", "cP"],
] as const

export const cvCertifications: string[][] = []

export const languages = [["Français", "Langue utilisée sur ce portfolio"]] as const

export const softSkills = [
  ["◎", "Résolution d'incidents"],
  ["▧", "Accompagnement des utilisateurs"],
  ["♙", "Collaboration avec les utilisateurs"],
]
