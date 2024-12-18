# Rapport du TP : Manipulation du DOM avec JavaScript

## Introduction
Ce TP avait pour objectif principal de nous familiariser avec la manipulation du DOM en JavaScript, en particulier :
- L'ajout d'événements utilisateur (`click`, `dblclick`).
- La modification dynamique des attributs, des styles CSS et des contenus HTML.
- La gestion de l'état d'éléments dans une page web.

Nous avons travaillé sur trois exercices permettant de mettre en pratique ces notions fondamentales pour le développement web.

---

## Objectifs du TP

1. **Manipuler le DOM** :
   - Modifier les attributs HTML (exemple : `src` et `alt` des images).
   - Modifier les styles CSS d'un élément (exemple : `style.opacity`).
   - Ajouter et gérer des événements via JavaScript.

2. **Comprendre la gestion d'état** :
   - Utiliser des variables globales pour conserver des états (exemple : basculer entre "jour" et "nuit").
   - Mettre à jour dynamiquement des données affichées à l'écran (exemple : mise à jour du résumé des tâches).

3. **Approfondir les notions d'asynchronisme et d'écoute d'événements** :
   - Utiliser `addEventListener` pour attacher des fonctions à des événements.
   - Assurer la compatibilité avec le chargement du DOM (`DOMContentLoaded`).

---

## Description des exercices

### Exercice 1 : Changer d'image et ajuster l'opacité
- **But** :
  - Basculer entre deux images ("jour" et "nuit") via un bouton.
  - Ajuster l'opacité de l'image par paliers (de 100 % à 25 %, puis réinitialisation à 100 %).
- **Problèmes rencontrés** :
  - Mauvaise sélection des boutons avec `nth-of-type`, remplacée par des identifiants uniques.
  - Opacité non réinitialisée correctement au début, corrigée en vérifiant sa valeur minimum.
- **Solutions** :
  - Ajout d'identifiants (`id`) aux boutons pour une sélection précise.
  - Gestion d'une variable globale pour l'état de l'image et l'opacité.

### Exercice 2 : Suivi des tâches
- **But** :
  - Gérer l'état des tâches (en cours/terminées) via des clics.
  - Modifier dynamiquement l'apparence des tâches (couleur, texte barré).
  - Mettre à jour un résumé indiquant le nombre de tâches terminées et en cours.
- **Problèmes rencontrés** :
  - Sélection incorrecte des éléments de tâche (`querySelectorAll` mal utilisé).
  - Mise à jour du résumé pas déclenchée immédiatement.
- **Solutions** :
  - Ajout d'écouteurs sur chaque tâche avec `forEach`.
  - Mise à jour du résumé après chaque interaction grâce à la fonction `mettreAJourResume`.

### Exercice 3 : Recherche d'informations sur un pays
- **But** :
  - Utiliser une API (REST Countries) pour afficher des informations sur un pays.
  - Appliquer des styles dynamiques en fonction de la région.
- **Problèmes rencontrés** :
  - Problèmes de connexion à l'API (gestion des erreurs).
  - Styles incorrects pour certaines régions non prévues.
- **Solutions** :
  - Utilisation de `catch` pour gérer les erreurs de l'API.
  - Ajout de styles spécifiques aux régions manquantes.

---

## Difficultés rencontrées

1. **Sélection d'éléments HTML** :
   - Les sélecteurs CSS tels que `nth-of-type` se sont révélés peu fiables pour les boutons.
   - Solution : Utilisation d'identifiants (`id`) pour une sélection précise.

2. **Gestion d'événements** :
   - Initialement, certains écouteurs d'événements étaient mal attachés car le DOM n'était pas encore chargé.
   - Solution : Utilisation de `DOMContentLoaded` pour s'assurer que les éléments sont disponibles.

3. **Logique d'état** :
   - Difficulté à alterner entre les états "jour" et "nuit" ou "en cours" et "terminée".
   - Solution : Introduction de variables globales (`isJour`, `currentOpacity`) pour suivre l'état.

4. **Données dynamiques** :
   - Gestion des erreurs de l'API et affichage de styles dynamiques en fonction des régions.

---

## Ce que nous avons appris

- **Manipulation du DOM** :
  - Sélectionner, modifier et ajouter des propriétés HTML et CSS.
  - Gérer des événements utilisateur (`click`, `dblclick`) pour rendre une page interactive.

- **Gestion d'état avec JavaScript** :
  - Utilisation de variables globales pour conserver des informations dynamiques.

- **Gestion d'erreurs** :
  - Utilisation de blocs `try/catch` et gestion des réponses API pour éviter des crashs ou des comportements inattendus.

- **Importance de la structure HTML** :
  - Nécessité de fournir des identifiants ou classes aux éléments pour simplifier la sélection.

---

## Résultat final

Le projet est fonctionnel et répond aux objectifs :
- Les images basculent correctement entre "jour" et "nuit".
- L'opacité est ajustée dynamiquement par paliers.
- Les tâches changent d'état, et le résumé est mis à jour en temps réel.
- Les informations sur les pays sont affichées dynamiquement à partir de l'API REST.

Ce TP nous a permis de renforcer nos compétences en manipulation du DOM, en gestion d'événements et en interaction avec des APIs.

---

## Comment exécuter le projet

1. Téléchargez tous les fichiers et placez-les dans un dossier.
2. Assurez-vous que la structure suivante est respectée :


```bash
|
│   exerciceJS_vE.js
│   README.md
│
└───images
        jour.jpg
        nuit.jpg
```

3. Ouvrez `index.html` dans un navigateur.
4. Interagissez avec les boutons et vérifiez le fonctionnement.

---




