import { gmailComposeUrl, profile } from "./profile"

export const contactInfo = [
  {
    type: "email",
    label: "Email",
    value: profile.email,
    href: gmailComposeUrl,
    icon: "mail",
    color: "pink",
  },
  {
    type: "phone",
    label: "Téléphone",
    value: profile.phone,
    href: profile.phoneLink,
    icon: "phone",
    color: "blue",
  },
  {
    type: "location",
    label: "Localisation",
    value: profile.location,
    href: "https://www.google.com/maps/search/?api=1&query=Abidjan%2C+C%C3%B4te+d%27Ivoire",
    icon: "pin",
    color: "cyan",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/jean-christ-ouali-5037aa254",
    href: profile.linkedin,
    icon: "in",
    color: "blue",
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/jean-christ420",
    href: profile.github,
    icon: "github",
    color: "black",
  },
  {
    type: "availability",
    label: "Statut actuel",
    value: "Stage en cours chez CIS Info",
    href: null,
    icon: "calendar",
    color: "violet",
  },
] as const

export const collaborationModes = [
  {
    icon: "person",
    title: "Présentiel",
    detail: "Abidjan et environs",
    color: "cyan",
  },
  {
    icon: "screen",
    title: "À distance",
    detail: "Côte d'Ivoire, Afrique, International",
    color: "violet",
  },
  {
    icon: "link",
    title: "Freelance",
    detail: "Conception et développement de solutions web",
    color: "blue",
  },
  {
    icon: "building",
    title: "En entreprise",
    detail: "Projets numériques et applications métier",
    color: "teal",
  },
]

export const faqItems = [
  {
    question: "Comment vous contacter ?",
    answer:
      "Pour me joindre, écrivez-moi à l'adresse indiquée ou contactez-moi par téléphone.",
  },
  {
    question: "Réalisez-vous des missions freelance ?",
    answer:
      "J'exerce une activité freelance depuis septembre 2025 et effectue actuellement un stage chez CIS Info. Contactez-moi pour échanger sur votre besoin.",
  },
  {
    question: "Travaillez-vous uniquement à distance ?",
    answer:
      "Non. Je peux travailler à distance, en présentiel à Abidjan ou dans un format hybride selon le projet.",
  },
]

export const contactSubjects = [
  "Projet web ou mobile",
  "Mission freelance",
  "Collaboration",
  "Opportunité professionnelle",
  "Conseil ou échange",
] as const

export const contactFormFields = [
  "name",
  "email",
  "subject",
  "message",
] as const

export type ContactFormField = (typeof contactFormFields)[number]
export type ContactFormValues = Record<ContactFormField, string>

export const contactFormLimits = {
  name: 100,
  email: 254,
  message: 5000,
} as const

export function validateContactField(
  field: ContactFormField,
  value: string,
): string {
  const trimmedValue = value.trim()

  if (!trimmedValue) {
    const requiredMessages: Record<ContactFormField, string> = {
      name: "Le nom est obligatoire.",
      email: "L'adresse e-mail est obligatoire.",
      subject: "Choisissez un sujet.",
      message: "Le message est obligatoire.",
    }
    return requiredMessages[field]
  }

  if (field === "name" && trimmedValue.length < 2) {
    return "Le nom doit contenir au moins 2 caractères."
  }
  if (field === "name" && value.length > contactFormLimits.name) {
    return `Le nom ne peut pas dépasser ${contactFormLimits.name} caractères.`
  }
  if (
    field === "email" &&
    (value.length > contactFormLimits.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue))
  ) {
    return "Saisissez une adresse e-mail valide."
  }
  if (
    field === "subject" &&
    !contactSubjects.some((subject) => subject === trimmedValue)
  ) {
    return "Choisissez un sujet proposé dans la liste."
  }
  if (field === "message" && trimmedValue.length < 10) {
    return "Le message doit contenir au moins 10 caractères."
  }
  if (field === "message" && value.length > contactFormLimits.message) {
    return `Le message ne peut pas dépasser ${contactFormLimits.message} caractères.`
  }

  return ""
}
