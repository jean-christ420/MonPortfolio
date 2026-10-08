SORTIE DÉFINITIVE DE FIGMA MAKE + VRAI PROJET REACT/VITE + DOUBLE THÈME
CONTEXTE
Le projet actuel est un portfolio développé initialement avec Figma Make.
Je veux maintenant le transformer en un véritable projet React autonome, indépendant de Figma Make, maintenable, propre, compilable et prêt pour GitHub et Vercel.
Stack définitive
React
TypeScript
Vite
Tailwind CSS
React Router
ESLint
Vercel

NE PAS utiliser Next.js.
NE PAS utiliser Nuxt.
NE PAS changer de framework.
Le projet reste un React + Vite SPA.
⚠️ RÈGLE ABSOLUE
Cette opération comporte deux objectifs :
OBJECTIF 1
Sortir complètement le projet de Figma Make.
OBJECTIF 2
Mettre en place proprement les deux thèmes visuels définitifs du portfolio.
Ne refais PAS les pages.
Ne change PAS leur structure.
Ne supprime PAS le contenu actuel.
Ne transforme PAS le portfolio en nouveau design.
Le design actuel est validé.
PARTIE 1 — SORTIR COMPLÈTEMENT DE FIGMA MAKE
1. AUDIT COMPLET
Avant de modifier le projet, inspecte :
package.json
vite.config.*
index.html
tsconfig.*
src/
public/
.figma/
AGENTS.md
CLAUDE.md
README*
.gitignore

Effectue également une recherche globale dans le projet pour :
Figma Make
FigmaMake
figma-make
figma make
.fig­ma
FIGMA_
figmaSiteConfiguration
figmaErrorOverlayReplay
figmaReactRefreshBoundaryFallback
figmaMakeKitPlugin
figma-bypass-link
figma:title
figma:lang
figma:head-start
figma:head-end
figma:body-start
figma:body-end

2. SUPPRIMER .figma
Supprimer complètement :
.figma/

Le projet ne doit plus dépendre d'aucun fichier situé dans .figma.
3. NETTOYER vite.config.ts
Le projet contient actuellement une configuration Vite spécifique à Figma Make.
Réécrire vite.config.ts en configuration Vite React standard.
Supprimer notamment toute référence à :
siteConfiguration
figmaSiteConfiguration
figmaErrorOverlayReplay
figmaReactRefreshBoundaryFallback
figmaMakeKitPlugin
FIGMA_PUBLIC_URL
FIGMA_DEV_SERVER_HOST

La configuration finale doit être indépendante.
Conserver uniquement les plugins réellement nécessaires à :
React
Tailwind CSS

et les alias réellement utilisés.
4. NETTOYER package.json
Renommer le projet.
Ne plus utiliser :
"name": "figma-make-app"

Utiliser un nom professionnel, par exemple :
"name": "portfolio"

ou un nom cohérent avec le projet.
Supprimer les dépendances uniquement utilisées par Figma Make.
Conserver les dépendances réellement utilisées.
5. SCRIPTS NPM
Le projet doit disposer au minimum de :
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  }
}

Adapter si la configuration TypeScript actuelle nécessite une légère différence.
Tous ces scripts doivent fonctionner réellement.
6. NETTOYER index.html
Transformer index.html en véritable document HTML Vite indépendant.
Il ne doit contenir aucune balise ou variable Figma Make.
Supprimer notamment :
figma:title
figma:lang
figma:head-start
figma:head-end
figma:body-start
figma:body-end

Utiliser :
<html lang="fr">

Ajouter une vraie configuration :
charset
viewport
title
description
theme-color
favicon

Préparer également les métadonnées Open Graph si les assets nécessaires existent.
7. DOCUMENTATION FIGMA MAKE
Inspecter :
AGENTS.md
CLAUDE.md

Si ces fichiers ne servent qu'à Figma Make, les supprimer.
Créer un README.md professionnel expliquant :
Nom du portfolio
Description
Stack
Installation
Développement
Build
Preview
Structure
Déploiement Vercel

PARTIE 2 — ARCHITECTURE REACT
8. ORGANISER LE PROJET
Conserver l'architecture existante lorsqu'elle est correcte.
La structure cible doit tendre vers :
src/
├── assets/
├── components/
│   ├── common/
│   ├── layout/
│   ├── ui/
│   ├── animations/
│   ├── projects/
│   └── sections/
│
├── data/
├── hooks/
├── lib/
├── pages/
├── routes/
├── styles/
├── types/
│
├── App.tsx
├── main.tsx
└── index.css

Ne déplace pas massivement les fichiers uniquement pour respecter cette structure.
Priorité :
fonctionnement
>
indépendance Figma
>
maintenabilité
>
organisation

9. ROUTING
Utiliser React Router proprement.
Conserver :
/
 /projets
 /projets/:slug
 /competences
 /a-propos
 /cv
 /contact

Utiliser :
<Link />
<NavLink />

pour les navigations internes.
10. VERCEL + SPA
Le projet sera déployé sur Vercel.
Prévoir une configuration SPA si nécessaire afin que :
/projets
/competences
/a-propos
/cv
/contact
/projets/analytics-dashboard

fonctionnent directement après actualisation du navigateur.
Créer vercel.json uniquement si nécessaire.
PARTIE 3 — DEUX THÈMES DÉFINITIFS
Le portfolio doit maintenant avoir deux identités visuelles officielles.
THÈME 1 — OCEAN / ELECTRIC
C'est le thème sombre actuellement utilisé.
Conserver son identité générale :
Navy profond
Cyan
Bleu électrique
Violet
Glow froid

Ambiance :
tech
premium
immersive
moderne

Ne pas le transformer.
THÈME 2 — ARCTIC / VIOLET
Le deuxième thème doit être inspiré très précisément de la référence visuelle fournie par l'utilisateur.
Cette référence correspond à :
fond blanc cassé / très légèrement bleuté
+
lavande très claire
+
bleu froid
+
violet électrique
+
dégradés doux
+
ombres légères
+
glows violets
+
vagues translucides

IMPORTANT
Il ne s'agit PAS d'un fond blanc pur.
Éviter :
#FFFFFF partout

Le fond doit avoir de la profondeur.
Utiliser plusieurs nuances proches :
off-white
ice
lavender mist
soft blue

avec des transitions douces.
11. PALETTE ARCTIC / VIOLET
Créer une palette cohérente et centralisée.
La palette peut être proche de :
Background:
#F5F7FF
#EEF1FF
#E8ECFA

Surface:
#FFFFFF
#F7F8FF

Primary:
#5546E8
#6254F5

Secondary:
#7B6FF0

Blue:
#8FA8FF

Text:
#11152B

Muted:
#66708F

Border:
rgba(86, 74, 220, 0.14)

Glow:
rgba(98, 84, 245, 0.20)

Tu peux ajuster légèrement ces valeurs si cela améliore le rendu, mais garde la direction :
blanc cassé + glace/lavande + violet électrique.

12. UTILISER DES VARIABLES CSS
Créer un système centralisé.
Exemple :
:root {
  --color-background: ...;
  --color-surface: ...;
  --color-primary: ...;
  --color-secondary: ...;
  --color-text: ...;
  --color-muted: ...;
  --color-border: ...;
  --color-glow: ...;
}

Puis :
[data-theme="ocean"] {
  ...
}

[data-theme="arctic"] {
  ...
}

Ne pas dupliquer les composants.
13. THÈME GLOBAL
Créer ou améliorer :
ThemeProvider

avec :
type Theme = "ocean" | "arctic"

Le thème doit :
- changer immédiatement ;
- être disponible sur toutes les pages ;
- être conservé après navigation ;
- être mémorisé avec localStorage ;
- être restauré au prochain chargement.
14. THEME TOGGLE
Le Header doit contenir un contrôle discret permettant :
Ocean
↕
Arctic

Le contrôle doit être :
- élégant ;
- compact ;
- accessible ;
- cohérent avec le Header ;
- visible sans être dominant.
Ne pas ajouter un énorme sélecteur.
15. TRANSITION ENTRE THÈMES
Le changement doit être animé.
Faire évoluer progressivement :
background
surface
text
buttons
waves
glows
borders
icons

Éviter un changement brutal.
16. LE THÈME ARCTIC DOIT ÊTRE UNE VRAIE VARIANTE
Ne fais PAS :
Ocean
↓
remplacer cyan par violet

Le résultat doit être une vraie ambiance claire.
Dans Arctic :
les cartes deviennent claires
les ombres remplacent certains glows
les vagues deviennent translucides
les surfaces gagnent de la profondeur
le violet devient la couleur principale

17. VAGUES DANS LE THÈME ARCTIC
Les vagues existantes doivent être adaptées.
Elles doivent devenir :
- plus légères ;
- translucides ;
- bleu/lavande ;
- légèrement violettes ;
- intégrées au background.
Éviter des vagues trop saturées.
18. CARTES ARCTIC
Les cartes du thème clair doivent utiliser :
fond blanc légèrement translucide
+
bordure très légère
+
ombre douce
+
légère teinte lavande

Pas de gros contour violet.
19. BOUTONS ARCTIC
Les boutons principaux peuvent utiliser :
violet électrique

avec :
- ombre douce ;
- légère lumière ;
- hover ;
- translation subtile.
Les boutons secondaires peuvent être :
fond blanc / transparent
+
bordure lavande
+
texte sombre

20. TEXTES ARCTIC
Conserver une excellente lisibilité.
Titres :
dark navy / presque noir

Accent :
violet électrique

Paragraphes :
gris bleu

Ne pas utiliser du violet pour tout le texte.
PARTIE 4 — PRÉSERVER LE DESIGN ACTUEL
21. NE PAS REFAIRE LES PAGES
Conserver :
Hero
À propos
Projets
Compétences
Ma démarche
Témoignages
CTA
Footer

et toutes les autres pages.
22. NE PAS SUPPRIMER LES EFFETS
Conserver :
- vagues ;
- parallax ;
- reveal ;
- tilt ;
- microinteractions ;
- animations ;
- effets 3D ;
- hover.
Mais s'assurer qu'ils restent robustes.
23. CORRECTION IMPORTANTE DU BUG DE REVEAL
Le contenu ne doit jamais devenir invisible parce qu'une animation ne fonctionne pas.
Une section doit être visible par défaut.
L'animation doit être une amélioration progressive.
Si IntersectionObserver échoue :
contenu visible

et non :
opacity: 0

Vérifier particulièrement la Home.
PARTIE 5 — QUALITÉ REACT
24. TYPESCRIPT
Corriger toutes les erreurs TypeScript.
Éviter any.
Créer des types réutilisables.
25. COMPOSANTS
Identifier les composants répétitifs :
Button
ProjectCard
SkillCard
SectionHeading
AnimatedSection
GlowCard
ThemeToggle

et les rendre réutilisables lorsque cela apporte une vraie valeur.
26. HOOKS
Si nécessaire, centraliser :
useTheme
useTilt
useParallax
useScrollReveal

Ne pas dupliquer la logique d'interaction dans chaque composant.
27. ACCESSIBILITÉ
Vérifier :
- alt ;
- labels ;
- boutons ;
- clavier ;
- focus ;
- contraste ;
- headings ;
- aria-label.
Respecter :
@media (prefers-reduced-motion: reduce)

PARTIE 6 — NETTOYAGE
28. DONNÉES
Pour l'instant, ne remplace pas encore Alex Rivera ni les contenus fictifs.
Centralise-les proprement dans :
src/data/

Nous ferons leur remplacement dans une phase ultérieure.
29. ASSETS
Vérifier qu'aucun asset ne dépend d'un chemin Figma Make.
Les images doivent être accessibles directement depuis le projet.
30. GIT
Vérifier .gitignore.
Inclure notamment :
node_modules/
dist/
.env
.env.local
*.log

Préparer le projet pour GitHub.
PARTIE 7 — TESTS
À la fin, exécuter :
npm install
npm run typecheck
npm run lint
npm run build
npm run preview

Tout doit fonctionner.
Tester :
Home
Projets
Case Study
Compétences
À propos
CV
Contact
404

Tester également :
Ocean
↓
Arctic
↓
Ocean

sur plusieurs pages.
Le thème doit rester cohérent après navigation.
PARTIE 8 — TEST ANTI-FIGMA MAKE
Faire une recherche globale finale.
Il doit rester :
0

référence à :
Figma Make
FigmaMake
figma-make
figma make
.figma
figmaSiteConfiguration
figmaErrorOverlayReplay
figmaReactRefreshBoundaryFallback
figmaMakeKitPlugin
FIGMA_PUBLIC_URL
FIGMA_DEV_SERVER_HOST

Le projet doit pouvoir être copié sur une autre machine et fonctionner avec :
npm install
npm run dev

sans Figma Make.
PARTIE 9 — RAPPORT FINAL
À la fin, donne un rapport clair :
Migration
- fichiers Figma Make supprimés ;
- dépendances supprimées ;
- configuration Vite nettoyée ;
- index.html nettoyé.
React
- architecture ;
- routing ;
- composants ;
- hooks ;
- TypeScript.
Thèmes
Ocean / Electric
Arctic / Violet

Tests
TypeScript : OK
ESLint : OK
Build : OK
Preview : OK
Routing : OK
Themes : OK
Figma Make references : 0

Problèmes restants
Lister uniquement les vrais problèmes restant à résoudre.
CONSIGNE FINALE
Le résultat doit être :
un vrai projet React + Vite autonome, propre, professionnel, indépendant de Figma Make, prêt pour GitHub et Vercel, avec deux thèmes visuels cohérents : Ocean / Electric et Arctic / Violet.

Ne migre pas vers Next.js.
Ne migre pas vers Nuxt.
Ne refais pas le design.
Ne supprime pas les sections existantes.
Ne remplace pas encore les données fictives.
Ne transforme pas le projet en autre chose.
La mission est :
FIGMA MAKE
     ↓
React + Vite autonome
     ↓
architecture propre
     ↓
Ocean / Electric
+
Arctic / Violet
     ↓
GitHub
     ↓
Vercel

Prends le temps de vérifier le projet avant de modifier les fichiers. Ne considère pas la tâche terminée tant que le projet fonctionne réellement en dehors de Figma Make.