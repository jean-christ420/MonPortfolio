import { gmailComposeUrl, profile } from "./profile"

export const cvStats: string[][] = []

export const cvContact = [
  ["⌖", profile.location, null],
  ["✉", profile.email, gmailComposeUrl],
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
    period: "Stage en cours",
    role: "Développeur web (stage)",
    organization: "CIS Info",
    technology: "Nuxt · NestJS · Figma",
    tasks: [
      "Contribuer au développement frontend d'Archi_Smart, dont le frontend Nuxt consomme une API backend NestJS.",
      "Participer à la modernisation du site existant Smart_Courriel.",
      "Utiliser Figma pour le prototypage et les échanges autour des interfaces.",
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
      "Versionner le code avec Git et GitHub.",
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
      "Administrer le site WordPress et ses contenus.",
      "Contribuer à la maintenance informatique et au support technique.",
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

export const cvDomains = [
  "Développement Frontend",
  "Développement Backend",
  "Développement Fullstack",
  "Conception d'API REST",
  "Gestion de bases de données",
  "Administration de CMS",
  "Gestion de versions",
  "Conception UI/UX",
]

export const cvTechnologies = [
  ["HTML5", "5"],
  ["CSS3", "#"],
  ["JavaScript", "JS"],
  ["React", "R"],
  ["TypeScript", "TS"],
  ["Tailwind CSS", "TW"],
  ["PHP", "PHP"],
  ["Laravel", "◇"],
  ["Inertia.js", "I"],
  ["Vue.js", "V"],
  ["Nuxt", "N"],
  ["MySQL", "my"],
  ["PostgreSQL", "PG"],
  ["NestJS", "N"],
  ["Vite", "V"],
  ["Git", "◆"],
  ["GitHub", "GH"],
  ["WordPress", "W"],
  ["Figma", "F"],
  ["Composer", "C"],
  ["cPanel", "cP"],
] as const

export const cvCertifications: string[][] = []

export const languages: readonly [string, string?][] = [
  ["Français"],
  ["Anglais"],
]

export const softSkills = [
  ["◎", "Résolution d'incidents"],
  ["▧", "Accompagnement des utilisateurs"],
  ["♙", "Collaboration avec les utilisateurs"],
]
