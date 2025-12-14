# 🚀 Évolutions de l'Application Top Streamers  

Ce document contient la liste des évolutions à développer pour améliorer l'application. Chaque évolution est classée par type (CSS, HTML, JavaScript) et par difficulté (Simple, Moyenne, Complexe).

## 🎯 Instructions pour l'étudiant

1. **Lisez attentivement** chaque ticket d'évolution
2. **Analysez les besoins** et les objectifs de chaque fonctionnalité
3. **Réalisez une analyse comparative** si plusieurs solutions sont possibles
4. **Rédigez une spécification technique** détaillée avant de coder
5. **Estimez le temps de développement** (chiffrage)
6. **Développez la fonctionnalité** en suivant les bonnes pratiques
7. **Testez votre implémentation** pour vous assurer que tout fonctionne correctement
8. **Documentez votre solution** (commentaires dans le code, README si nécessaire)
9. **Versionnez votre travail sur git** chaque évolution dans un commit "#008 :sparkles: évolution ...."

### Outils recommandés :
- **Éditeur de code** (VS Code, etc.) avec extensions utiles
- **DevTools du navigateur** (F12) pour tester et déboguer
- **Documentation en ligne** des bibliothèques utilisées
- **Git** pour versionner votre travail

### Conseils :
- Commencez par les évolutions simples pour prendre confiance
- Planifiez avant de coder (spécification, architecture)
- Testez régulièrement pendant le développement
- Respectez le design existant de l'application
- Gérez les cas limites (données manquantes, erreurs, etc.)
- Documentez votre code et vos choix techniques

**Bon développement ! 🚀** 

--------------------

### Evolution JS #008 - Simple

**Priorité:** Normale
**Type:** JavaScript / HTML
**Difficulté:** ⭐ Simple

**Description:**
Ajouter une colonne "Pays" dans le tableau des streamers pour afficher le pays d'origine de chaque streamer. La colonne peut afficher soit le nom du pays, soit le drapeau correspondant (ou les deux).

**Fonctionnalités:**
- Ajouter une nouvelle colonne "Pays" dans le tableau
- Afficher le nom du pays ou le drapeau (emoji) pour chaque streamer
- Positionner la colonne de manière logique dans le tableau (par exemple après "Plateforme")
- Adapter le style CSS pour que la colonne s'intègre bien au design existant
- Gérer l'affichage responsive (mobile/tablette/desktop)

**Objectifs:**
- Améliorer l'information affichée sur chaque streamer
- Apprendre à ajouter une colonne dans un tableau HTML
- Manipuler les données existantes (le champ `pays` est déjà présent dans les données)

**Mise en œuvre:**
1. **Analyse** : Identifier où ajouter la colonne dans le tableau HTML
2. **HTML** : Ajouter l'en-tête de colonne dans le `<thead>`
3. **JavaScript** : Modifier la fonction `afficherStreamers()` pour inclure la colonne pays
4. **CSS** : Styliser la nouvelle colonne pour qu'elle soit cohérente avec le reste
5. **Optionnel** : Ajouter des emojis de drapeaux pour chaque pays

**Livrables attendus:**
- Code HTML mis à jour avec la nouvelle colonne
- Code JavaScript modifié pour afficher les pays
- Styles CSS adaptés
- Code testé et fonctionnel

---

### Evolution JS #009 - Moyenne

**Priorité:** Normale
**Type:** JavaScript
**Difficulté:** ⭐⭐ Moyenne

**Description:**
Ajouter la possibilité de trier les streamers en ordre croissant (ASC) ou décroissant (DESC) directement en cliquant sur les en-têtes de colonnes du tableau. Actuellement, le tri se fait uniquement via les boutons en haut de la page.

**Fonctionnalités:**
- Clic sur l'en-tête "Rang" : le tri est exclu pour cette colonne
- Clic sur l'en-tête "Streamer" : tri alphabétique (A-Z ou Z-A)
- Clic sur l'en-tête "Plateforme" : tri par plateforme (alphabétique)
- Clic sur l'en-tête "Abonnés" : tri par nombre d'abonnés (croissant ou décroissant)
- Clic sur l'en-tête "Viewers" : tri par nombre de viewers (croissant ou décroissant)
- Indicateur visuel (flèche ↑ ou ↓) pour montrer le sens du tri actif
- Alternance entre ASC et DESC à chaque clic sur la même colonne

**Objectifs:**
- Améliorer l'expérience utilisateur avec un tri plus intuitif
- Permettre un tri rapide directement depuis le tableau
- Rendre l'interface plus interactive

**Mise en œuvre:**
1. **Spécification** : Définir le comportement de chaque colonne (triable ou non)
2. **Design** : Ajouter des indicateurs visuels (icônes de flèches) pour le sens du tri
3. **Implémentation** : Ajouter les event listeners sur les en-têtes de colonnes
4. **Gestion d'état** : Gérer l'alternance ASC/DESC et l'état visuel

**Livrables attendus:**
- Spécification technique simple
- Code implémenté avec gestion du tri sur toutes les colonnes
- Indicateurs visuels fonctionnels
- Tests de validation

---

### Evolution JS #010 - Moyenne

**Priorité:** Moyenne
**Type:** JavaScript
**Difficulté:** ⭐⭐ Moyenne

**Description:**
Ajouter une pagination ou un scroll infini sur l'affichage du tableau des streamers. Actuellement, tous les streamers sont affichés en une seule fois, ce qui peut être problématique avec + de 100 streamers.

**Objectifs:**
- Améliorer les performances de l'application
- Améliorer l'expérience utilisateur
- Réduire le temps de chargement initial

**Mise en œuvre:**
1. **Analyse comparative** : Faire une analyse des avantages et inconvénients de chaque solution (pagination vs scroll infini)
2. **Chiffrage** : Proposer une estimation du temps de développement pour chaque solution
3. **Spécification** : Rédiger une spécification technique détaillée de la solution choisie
4. **Implémentation** : Mettre en place l'évolution choisie

**Livrables attendus:**
- Document d'analyse comparatif (pagination vs scroll infini)
- Estimation de charge (temps de développement)
- Spécification technique
- Code implémenté et testé

---

### Evolution JS #011 - Complexe

**Priorité:** Moyenne
**Type:** JavaScript
**Difficulté:** ⭐⭐⭐ Complexe

**Description:**
Ajouter un graphique dans la modal (popin) pour afficher l'évolution des statistiques du streamer sur les 6 derniers mois. Le graphique doit afficher l'évolution du nombre d'abonnés et de viewers dans le temps.

**Fonctionnalités:**
- Affichage d'un graphique linéaire ou en barres
- Données sur 6 mois (évolution mensuelle)
- Gestion du cas où aucune donnée n'est disponible (affichage par défaut avec message)
- Design cohérent avec l'interface existante

**Mise en œuvre:**
1. **Spécification** : Rédiger une spécification détaillée de la fonctionnalité
2. **Chiffrage** : Proposer une estimation du temps de développement
3. **Choix de la bibliothèque** : Sélectionner une bibliothèque de graphiques (Chart.js, D3.js, etc.)
4. **Implémentation** : Mettre en place l'évolution avec gestion des cas limites

**Livrables attendus:**
- Spécification technique détaillée
- Estimation de charge (temps de développement)
- Bibliothèque de graphiques sélectionnée et justifiée
- Code implémenté avec gestion des données manquantes
- Tests de validation
