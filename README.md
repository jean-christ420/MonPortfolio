# Jean Christ Ouali — Portfolio professionnel

Portfolio professionnel construit avec React + TypeScript + Vite, pensé pour rester simple à maintenir et prêt au déploiement sur Vercel.

## Stack

- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS 4
- React Router
- ESLint
- Vercel Speed Insights

## Thèmes

Le portfolio propose deux thèmes accessibles depuis le Header :

- **Ocean / Electric** — fond navy, cyan, bleu électrique et violet.
- **Arctic / Violet** — surfaces claires nuancées de glace et de lavande, accents violets et ombres douces.

Le thème choisi est mémorisé dans le navigateur et conservé lors de la navigation.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Vérification

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Déploiement Vercel

1. Connecter le dépôt GitHub à Vercel.
2. Sélectionner le framework "Vite".
3. Déployer avec les valeurs par défaut.
4. La configuration de rewrite est fournie dans `vercel.json` pour permettre le routage SPA.

## Contact form (Vercel Functions + Resend)

The form submits to the server-side `POST /api/contact` Vercel Function. The
Resend API key is only read by that function and must never use a `VITE_` prefix.

1. Create a Resend account, add your sending domain, and publish the DNS records
   Resend provides. Wait until the domain is verified.
2. Create a Resend API key with permission to send email.
3. In Vercel, open **Project Settings → Environment Variables** and add these
   variables for each environment that should send mail:
   - `RESEND_API_KEY`: the private Resend API key.
   - `CONTACT_TO_EMAIL`: the inbox that should receive messages.
   - `RESEND_FROM_EMAIL`: a sender address on the verified domain, such as
     `Jean Christ Ouali <contact@your-domain.com>`.
4. Redeploy after adding or changing the variables.

For local development, copy `.env.example` to `.env.local`, fill in the same
values, then run `npx vercel dev` so the Vercel Function is available alongside
the Vite app. Do not commit `.env.local`.

The endpoint validates all fields, checks the same-origin request, uses a
honeypot, and applies a best-effort limit of five submissions per IP per
10-minute window on each warm function instance. Vercel Functions do not share
in-memory state across instances; use a shared rate-limit store if a global
cross-instance quota is required.

## Structure

- `src/App.tsx` — page d'accueil et composants globaux
- `src/app/` — bootstrap de l'application et routes
- `src/components/` — composants réutilisables
- `src/data/` — contenu et données structurées
- `src/pages/` — pages de l'application
- `src/index.css` — styles globaux et thématiques
