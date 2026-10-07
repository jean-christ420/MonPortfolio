export const contactInfo = [
  {
    type: "email",
    label: "Email",
    value: "alex.rivera@example.com",
    href: "mailto:alex.rivera@example.com",
    icon: "mail",
    color: "pink",
  },
  {
    type: "phone",
    label: "Téléphone",
    value: "+225 07 58 12 34 56",
    href: "tel:+2250758123456",
    icon: "phone",
    color: "blue",
  },
  {
    type: "location",
    label: "Localisation",
    value: "Abidjan, Côte d'Ivoire",
    href: "https://www.google.com/maps/search/?api=1&query=Abidjan%2C+C%C3%B4te+d%27Ivoire",
    icon: "pin",
    color: "cyan",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/alexrivera",
    href: "https://www.linkedin.com/in/alexrivera",
    icon: "in",
    color: "blue",
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/alexrivera",
    href: "https://github.com/alexrivera",
    icon: "github",
    color: "black",
  },
  {
    type: "availability",
    label: "Disponibilité",
    value: "Ouvert à de nouvelles opportunités",
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
    detail: "Projets courts ou longs termes",
    color: "blue",
  },
  {
    icon: "building",
    title: "En entreprise",
    detail: "CDD, mission, partenariat",
    color: "teal",
  },
]

export const faqItems = [
  {
    question: "Quel est votre délai de réponse ?",
    answer:
      "Je réponds généralement sous 24 heures ouvrées, selon la nature et le niveau de détail de la demande.",
  },
  {
    question: "Êtes-vous disponible pour des projets freelance ?",
    answer:
      "Oui, je suis ouvert aux missions freelance, collaborations ponctuelles et projets à moyen terme.",
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
]
