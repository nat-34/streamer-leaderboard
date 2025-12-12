# 🐛 Tickets de Bugs - Application Top Streamers  

Ce document contient la liste des bugs à corriger dans l'application. Chaque bug est classé par type (CSS, HTML, JavaScript) et par difficulté (Simple, Moyen, Complexe).

## 🎯 Instructions pour l'étudiant

1. **Lisez attentivement** chaque ticket de bug
2. **Reproduisez le bug** en testant l'application
3. **Identifiez la cause** en utilisant les outils de développement du navigateur (F12)
4. **Corrigez le bug** dans le fichier concerné
5. **Testez votre correction** pour vous assurer que le bug est bien résolu
6. **Documentez votre solution** (commentaire dans la note associée au ticket)
7. **Versionner la correction sur git** chaque correction dans un commit "#001 :bug: correction ...."

### Outils recommandés :
- **DevTools du navigateur** (F12) pour inspecter le HTML/CSS
- **Console JavaScript** pour voir les erreurs
- **Inspecteur d'éléments** pour vérifier la structure HTML  

### Conseils :
- Commencez par les bugs simples
- Testez après chaque correction
- Utilisez les indices fournis si vous êtes bloqué
- N'hésitez pas à utiliser `console.log()` pour déboguer 

**Bonne chance ! 🚀** 

--------------------
### Bug HTML #001 - Simple

**Priorité:** Normale
**Type:** HTML
**Difficulté:** ⭐ Simple

**Description:**
Le sous titre du site contient une faute de frappe
`Classement des meilleurss streamers du moment`

**Symptômes:**
- Le sous titre contient une faute d'orthographe

**Fichier concerné:** `index.html`
**Ligne approximative:** ~20
**Indice:** Vérifiez le texte.


### Bug JS #002 - Simple

**Priorité:** Haute
**Type:** JS
**Difficulté:** ⭐ Simple

**Description:**
La liste des streamers est vide, l'application n'affiche rien.

**Symptômes:**
- Le tableau est vide
- un erreur est visible dans la console

**Fichier concerné:** `app.js`
**Ligne approximative:** ~65
**Indice:** Vérifiez la valeurs des éléments récupéré par `getElementById()`  avec `console.log()`

### Bug DATA #003 - Simple

**Priorité:** Normale
**Type:** DATA
**Difficulté:** ⭐ Simple

**Description:**
Le nom du streamer `Seb` est incorrect, il s'appelle `Seb la frite`

**Symptômes:**
- Le nom du streamer est incorrect

**Fichier concerné:** `data.js`
**Ligne approximative:** ~700
**Indice:** Vérifiez le texte.


### Bug CSS #004 - Simple

**Priorité:** Haute
**Type:** CSS
**Difficulté:** ⭐ Simple

**Description:**
La modal box des streamer n'est pas visible, elle apparaît en dessous du tableau. 

**Symptômes:**
- Quand je clique sur un streamer une modal box apparaît.
- La modal box apparaît sous le contenu du tableau et n'est pas lisible.
- On ne pas refermer la modal box.


**Fichier concerné:** `styles.css`
**Ligne approximative:** ~330
**Indice:**  Activer et désactiver chaque éléments css dans la console du navigateur


### Bug CSS #005 - Simple

**Priorité:** Haute
**Type:** CSS
**Difficulté:** ⭐ Simple

**Description:** Le colonne des viewer n'est pas visible dans le tableau. il faut scroller horizontallement pour l'afficher.

**Symptômes:**
- il manque des colonne dans le tableau qui s'affiche

**Fichier concerné:** `styles.css`
**Ligne approximative:** ~200
**Indice:**  Vérifier l'impact de chaque  attributs css sur l'affichage

### Bug CSS #006 - Complexe

**Priorité:** Haute
**Type:** CSS
**Difficulté:** ⭐⭐ Moyenne

**Description:**

Sur les écrans de taille moyenne et grande (tablettes et desktop), les contrôles (barre de recherche et boutons de tri) ne s'affichent pas en ligne comme prévu. Ils restent empilés verticalement même sur grand écran.

**Resultat existant**
[ zone de recherche ] 
[ zone de tri ]

**Resultat attendu**
[ zone de recherche ] [ zone de tri ]

**Symptômes:**
- Sur mobile : affichage correct (vertical)
- Sur tablette/desktop : devrait être horizontal mais reste vertical
- La media query semble ne pas fonctionner  

**Fichier concerné:** `styles.css`
**Ligne approximative:** ~90
**Indice:** Il y a un problème avec l'ordre des règles CSS et une duplication de la règle.


### Bug JavaScript #007 - Moyen

**Priorité:** Moyenne
**Type:** JavaScript
**Difficulté:** ⭐⭐ Moyen

**Description:**
Le tri par nom (ordre alphabétique) fonctionne à l'envers. Les streamers sont triés de Z à A au lieu de A à Z.
  
**Symptômes:**
- Quand on clique sur "Trier par: Nom", les streamers sont triés dans le mauvais sens
- Le tri par abonnés et viewers fonctionne correctement

**Fichier concerné:** `app.js`
**Ligne approximative:** ~40
**Indice:** Dans la fonction `trierStreamers`, la comparaison pour le tri par nom utilise `localeCompare` mais dans le mauvais sens. Comparez avec les autres tris (abonnés, viewers).

### Evolution JS #007 - Moyenne

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

### Evolution JS #008 - Complexe

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
