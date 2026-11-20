import cvFile from "../public/fichiers/CV_Jean_Christ_OUALI_Developpeur_Web.pdf"

export const profile = {
  name: "Jean Christ Ouali",
  initials: "JCO",
  title: "Développeur web — Applications métier & digitalisation",
  location: "Abidjan, Côte d'Ivoire",
  email: "oualijeanchrist@gmail.com",
  phone: "+225 05 05 96 95 39",
  phoneLink: "tel:+2250505969539",
  linkedin: "https://www.linkedin.com/in/jean-christ-ouali-5037aa254",
  github: "https://github.com/jean-christ420",
  cvFile,
} as const

export const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`
