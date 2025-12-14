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
- **Cherchez d'abord par vous-même** avant de consulter les références dans `REFERENCES.md` ou les indices dans `INDICES.md`
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


### Bug JS #002 - Simple

**Priorité:** Haute
**Type:** JS
**Difficulté:** ⭐ Simple

**Description:**
La liste des streamers est vide, l'application n'affiche rien.

**Symptômes:**
- Le tableau est vide
- un erreur est visible dans la console

### Bug DATA #003 - Simple

**Priorité:** Normale
**Type:** DATA
**Difficulté:** ⭐ Simple

**Description:**
Le nom du streamer `Seb` est incorrect, il s'appelle `Seb la frite`

**Symptômes:**
- Le nom du streamer est incorrect


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


### Bug CSS #005 - Simple

**Priorité:** Haute
**Type:** CSS
**Difficulté:** ⭐ Simple

**Description:** Le colonne des viewer n'est pas visible dans le tableau. il faut scroller horizontallement pour l'afficher.

**Symptômes:**
- il manque des colonne dans le tableau qui s'affiche

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


### Bug JavaScript #007 - Moyen

**Priorité:** Moyenne
**Type:** JavaScript
**Difficulté:** ⭐⭐ Moyen

**Description:**
Le tri par nom (ordre alphabétique) fonctionne à l'envers. Les streamers sont triés de Z à A au lieu de A à Z.
  
**Symptômes:**
- Quand on clique sur "Trier par: Nom", les streamers sont triés dans le mauvais sens
- Le tri par abonnés et viewers fonctionne correctement
