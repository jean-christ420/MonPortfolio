# Audit final du portfolio — audit avant corrections

**Date :** 2026-11-20  
**Projet :** MonPortfolio (React, TypeScript, Vite)  
**Production :** https://mon-portfolio-ljac-drab.vercel.app/  
**Dépôt :** https://github.com/jean-christ420/MonPortfolio  
**Périmètre :** audit de finalisation (fiabilité, cohérence, accessibilité, responsive, stabilité) sans refonte graphique, sans nouvelle fonctionnalité et sans modification du contenu du CV finalisé. **Aucune correction de code n’a été appliquée pendant cette phase d’audit.**

## 1. État général

Le portfolio est **globalement présentable** sur le plan du contenu, de la structure et de la cohérence technique vérifiée en local (build/lint OK, routes et données cohérentes, 4 projets conservés, positionnement orienté développement web, applications métier et digitalisation).

Il subsiste toutefois des **réserves** :
- modifications locales non commitées/non validées en déploiement,
- envoi réel du formulaire de contact non vérifié (configuration Resend/Vercel indiquée, expéditeur actuel non validé pour un usage public),
- contenu interne du PDF de CV non audité visuellement,
- quelques points secondaires (ancres légales inexistantes, vérification navigateur/responsive/console partielle).

**Conclusion intermédiaire :** présentable avec réserves, sous réserve de validation des points externes et d’une vérification finale en conditions réelles.

## 2. Pages contrôlées

| Page | Statut | Constats principaux |
| --- | --- | --- |
| Accueil ([src/App.tsx](src/App.tsx), [src/data/projects.ts](src/data/projects.ts), [src/data/profile.ts](src/data/profile.ts)) | **Validée** | Titre/présentation cohérents avec le positionnement (« Développeur web — Applications métier & digitalisation »). CTA vers projets (`/projets#project-list`), parcours/CV (`/cv#cv-experiences`) et contact/Gmail fonctionnels au niveau des liens. 3 projets mis en avant pertinents (MyShop, ERP institutionnel, Archi_Smart). Sections et enchaînement cohérents en revue de code et lecture de rendu accessible. |
| Projets (liste) ([src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx), [src/data/projects.ts](src/data/projects.ts), [src/projects.css](src/projects.css)) | **Validée avec réserves** | Les 4 projets sont conservés : MyShop, ERP institutionnel, Archi_Smart, ProcureFlow. Chaque carte/projet dispose de titre, description, statut et lien de détail cohérents. Catégories/filtres (`Tous`, `Application e-commerce`, `Web App`) correspondent à des projets existants et sont fonctionnels en code ; avec 4 projets, leur utilité reste limitée mais ils ne sont pas trompeurs. |
| Détail MyShop ([src/data/projects.ts](src/data/projects.ts), [src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx)) | **Validée** | Statut **Fonctionnel**. Description e-commerce meubles/décoration cohérente. Stack : Laravel 12, React 19, TypeScript, Inertia.js, Tailwind CSS. Fonctionnalités boutique/panier/espace client/admin/produits/variantes/prix/stocks et points techniques présentés. Note explicite : paiement en ligne « prévu prochainement » (non présenté comme opérationnel). Tableau de bord présenté comme données de démonstration. *Correspondance au code applicatif MyShop non vérifiable depuis ce dépôt (portfolio uniquement).* |
| Détail ERP institutionnel ([src/data/projects.ts](src/data/projects.ts), [src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx), imports ERP) | **Validée** | Statut **Prototype**. Description de centralisation achats/ressources cohérente. Stack : React, TypeScript, Vite, Tailwind CSS. 8 captures/galerie cohérentes avec les modules décrits. Note explicite : prototype, modules non présentés comme tous opérationnels en production ; pas de revendication de déploiement ni de connexion à des systèmes institutionnels réels. |
| Détail Archi_Smart ([src/data/projects.ts](src/data/projects.ts), [src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx), imports Archi_Smart) | **Validée** | Statut **En cours**. Projet présenté comme collaboratif ; rôle **Développeur Frontend** au sein d’une équipe (pas de développement solo revendiqué). Stack : Nuxt 4, Vue 3, TypeScript, Pinia, NestJS, TypeORM, PostgreSQL. Modules listés avec note de disponibilité/connexion Backend variable selon l’avancement (pas présentés comme entièrement opérationnels). |
| Détail ProcureFlow ([src/data/projects.ts](src/data/projects.ts), [src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx)) | **Validée** | Statut **Prototype**, présentation courte et cohérente, sans promesses non vérifiées ni complétion artificielle. Page de détail minimale (sans captures/technologies détaillées) gérée correctement par le rendu. Projet conservé sans ajout de développement. |
| Compétences ([src/pages/SkillsPage.tsx](src/pages/SkillsPage.tsx), [src/data/skills.ts](src/data/skills.ts)) | **Validée** | Technologies/catégories cohérentes avec les projets et expériences présentés (React, TypeScript, Tailwind CSS, Laravel, Vue/Nuxt, NestJS, SQL/MySQL/PostgreSQL, Inertia.js, Vite, Git/GitHub, WordPress, Figma, etc.). Organisation par domaines (Frontend, Backend, Bases de données, Outils, Conception) et filtres lisibles. Aucune compétence manifestement injustifiée ajoutée pour « allonger » la liste. |
| À propos ([src/pages/AboutPage.tsx](src/pages/AboutPage.tsx), [src/data/about.ts](src/data/about.ts)) | **Validée** | Présentation personnelle cohérente avec le positionnement et le CV (applications métier, digitalisation, développement/maintenance/support). Expériences mises en valeur (HL IMPEX, Assemblée nationale, freelance, CIS Info en cours) sans modification des formations/dates/parcours existants (CIS Info reste « Stage en cours »). Image principale présente (`development-infrastructure.jpg`) et pertinente au thème technique ; pas de réécriture globale. |
| CV ([src/pages/CVPage.tsx](src/pages/CVPage.tsx), [src/data/cv.ts](src/data/cv.ts), [src/data/profile.ts](src/data/profile.ts), [src/public/fichiers/CV_Jean_Christ_OUALI_Developpeur_Web.pdf](src/public/fichiers/CV_Jean_Christ_OUALI_Developpeur_Web.pdf)) | **Validée avec réserves** | Bon fichier PDF référencé dans le code et présent dans le dépôt (116 519 octets). Deux boutons « Télécharger mon CV » pointent vers `profile.cvFile` avec attribut de téléchargement (`download`) ; ouverture/téléchargement câblés correctement. Aucune autre version PDF détectée dans `src`. *Contenu visuel/interne du PDF non relu dans cet audit et correspondance exacte avec la page CV non attestée ; téléchargement réel sur ordinateur/mobile non testé en navigateur.* |
| Contact ([src/pages/ContactPage.tsx](src/pages/ContactPage.tsx), [src/data/contact.ts](src/data/contact.ts), [api/contact.ts](api/contact.ts)) | **Validée avec réserves** | Coordonnées/liens cohérents (e-mail via Gmail compose, téléphone `tel:`, LinkedIn, GitHub, localisation/maps). Formulaire avec validation des champs, états `sending`/`success`/`error`, messages utilisateur explicites, fallback de contact direct en cas d’échec, honeypot, limites/rate limiting et contrôles côté API (Resend). Variables d’environnement attendues documentées ([.env.example](.env.example)) ; configuration Vercel/Resend non modifiée. *Envoi réel non validé et expéditeur `onboarding@resend.dev` non vérifié pour un usage public — non présenté comme fonctionnel publiquement.* |

## 3. Anomalies détectées

| Priorité | Anomalie | Impact | Remarque |
| --- | --- | --- | --- |
| **Important (externe/processus)** | Arbre de travail modifié et non commité (14 fichiers suivis modifiés, ~474 insertions / ~83 suppressions selon `git diff --stat`), incluant changements fonctionnels récents (navigation/ancres, liens Gmail, route error/loading, contenus projets/CV/compétences/à propos). `dist/` a été régénéré localement. | Le code présenté/audité n’est pas figé dans un commit ni confirmé en production Vercel ; risque d’écart entre local, dépôt distant et site déployé. | À relire/valider avant commit, push ou déploiement (aucun commit/push effectué). |
| **Important (externe)** | Envoi réel du formulaire de contact non vérifié ; expéditeur actuel signalé comme `onboarding@resend.dev`. | L’acheminement effectif des messages en conditions réelles ne peut pas être garanti. | Variables indiquées configurées sur Vercel, mais test d’envoi bout en bout non réalisé. |
| **Moyen** | Liens de pied de page « Mentions légales » / « Politique de confidentialité » pointent vers `#mentions` et `#confidentialite` ([src/App.tsx](src/App.tsx)) sans ancres/sections/pages cibles correspondantes dans le code. | Cibles internes inexistantes ; clic sans contenu dédié (attente utilisateur non satisfaite). | Aucun changement effectué (audit). |
| **Moyen** | Contenu interne du PDF de CV non vérifié visuellement dans cet audit ; une incohérence possible avec le site avait été signalée précédemment. | Impossible d’attester à 100 % que le PDF reflète exactement l’état final attendu sans relecture du document. | Fichier référencé correct et présent ; contenu non modifié (CV finalisé). |
| **Faible** | Vérification responsive/console navigateur limitée : automatisation Playwright sur la page partagée n’a pas renvoyé les résultats de script attendus (retours de snapshot uniquement) ; contrôle visuel complet multi-viewport non exécuté sur toutes les pages. | Risque résiduel non observé d’anomalie d’affichage ponctuelle sur certains appareils. | Aucun débordement/erreur constaté dans les éléments audités statiquement et dans le snapshot accessible (page À propos). |
| **Faible** | Gestionnaire de paquets ambigu : `packageManager` pointe vers pnpm, mais `package-lock.json` et `pnpm-lock.yaml` coexistent. Scripts npm (`npm run lint/build`) exécutés avec succès. | Risque d’incohérence d’installation selon l’outil utilisé en CI/déploiement. | Aucun changement de dépendances/configuration effectué. |

## 4. Corrections effectuées

**Aucune.** Audit réalisé avant corrections, sans modification de fichiers, de configuration ou de dépendances.

## 5. Vérifications techniques

| Vérification | Résultat | Statut |
| --- | --- | --- |
| `npm run lint` (ESLint) | Succès, sans erreur. | **Réalisée** |
| `npm run build` (`tsc --noEmit && vite build`) | Succès, build Vite terminé (69 modules transformés). | **Réalisée** |
| TypeScript | Vérifié via le script de build (`tsc --noEmit`) : aucune erreur bloquante. | **Réalisée** |
| Revue code/structure (routes, imports, liens, composants clés, API contact, données pages/projets/CV) | Cohérente ; aucun import inutilisé ou erreur bloquante détecté par les outils exécutés. Texte générique « Déployer / Mise en production et suivi » ([src/pages/ProjectsPage.tsx](src/pages/ProjectsPage.tsx), méthode projet) interprété comme étape méthodologique, non comme revendication de déploiement d’un projet client. Référence localhost en source limitée à une garde de fonctionnalité ([src/main.tsx](src/main.tsx)). | **Réalisée (statique)** |
| Images/ressources CV et captures projets | PDF présent (`src/public/fichiers/CV_Jean_Christ_OUALI_Developpeur_Web.pdf`) et référencé ; captures importées depuis `src/imports/...` et build réussi. Chargement effectif en navigateur non exhaustif. | **Partiellement réalisée** |
| Responsive (bureau/tablette/mobile) | Audit statique des mises en page/composants + lecture de page À propos sur instance locale partagée ; pas de débordement horizontal constaté sur les éléments observés. Vérification visuelle complète multi-viewport sur toutes les pages non réalisée. | **Partiellement réalisée** |
| Console/navigateur et routes en exécution | Page À propos rendue sans écran d’erreur applicatif ; navigation/erreurs console sur l’ensemble des routes non capturées automatiquement (limitation d’outillage). | **Partiellement réalisée** |
| Tests automatisés | Aucun script `test` configuré dans [package.json](package.json). | **Non réalisable (non configuré)** |
| Déploiement Vercel / production en ligne | Configuration SPA rewrites présente ([vercel.json](vercel.json)) ; cohérence locale/repo distant et fonctionnement du site déployé (`https://mon-portfolio-ljac-drab.vercel.app/`) non vérifiés. | **Non réalisée** |
| Envoi réel du formulaire (Resend, `onboarding@resend.dev`) | Logique et états vérifiés en code ; envoi bout en bout non testé. | **Non réalisée** |

## 6. Points restant à traiter

- **Valider l’état du dépôt et le déploiement** (décision/intervention requise) : relire les modifications locales, décider du périmètre à conserver (y compris `dist/`), puis commit/push et vérifier le rendu en production sur Vercel si souhaité.
- **Vérifier l’envoi réel des messages** (externe) : test bout en bout avec la configuration Resend/Vercel actuelle et confirmation d’un expéditeur adapté à un usage public (sans modification inutile des clés/configurations de sécurité dans ce cadre d’audit).
- **Relire le PDF de CV** (confirmation requise) : vérifier que le document correspond exactement au contenu attendu (CV finalisé, non modifié ici).
- **Décider du traitement des ancres légales** `#mentions` / `#confidentialite` (arbitrage requis) : ajouter un contenu/une page/une section dédiée ou retirer/adapter les liens.
- **Clarifier le gestionnaire de paquets/lockfiles** si pertinent pour la CI et Vercel (`pnpm-lock.yaml` vs `package-lock.json`, `packageManager`).
- **Compléter un contrôle visuel** responsive et console sur toutes les pages/viewports (et appareils réels) avant diffusion finale.

## 7. Verdict

**PRÊT AVEC RÉSERVES**

Le portfolio est cohérent et techniquement sain sur les contrôles effectués (lint/build OK, pages et 4 projets conformes aux consignes principales, aucune fonctionnalité présentée indûment comme opérationnelle). Des réserves subsistent avant une diffusion pleinement clôturée : changements non commitées/non vérifiés en production, envoi réel du contact non validé, contenu du PDF non confirmé visuellement, et points secondaires/contrôles partiels (ancres légales, couverture responsive/console exhaustive, lockfiles).
