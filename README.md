# Alex Rivera — Portfolio professionnel

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

## Structure

- `src/App.tsx` — page d'accueil et composants globaux
- `src/app/` — bootstrap de l'application et routes
- `src/components/` — composants réutilisables
- `src/data/` — contenu et données structurées
- `src/pages/` — pages de l'application
- `src/index.css` — styles globaux et thématiques
