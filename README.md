# 🎓 Exercice de Débogage et Développement - Application Top Streamers

## 📖 Contexte

Cet exercice se compose de **deux parties** :

1. **Partie 1 - Débogage** : Cette application contient **plusieurs bugs intentionnels** répartis dans les fichiers HTML, CSS et JavaScript. Votre mission est de les identifier et de les corriger.

2. **Partie 2 - Évolutions** : Une fois les bugs corrigés, vous devrez développer de **nouvelles fonctionnalités** pour améliorer l'application.

## 🎯 Objectifs pédagogiques

### Partie 1 - Débogage
- Apprendre à identifier et corriger des bugs dans du code existant
- Utiliser les outils de développement du navigateur (DevTools)
- Comprendre les erreurs courantes en HTML, CSS et JavaScript
- Développer des compétences en débogage

### Partie 2 - Évolutions
- Planifier et spécifier une fonctionnalité
- Estimer le temps de développement
- Intégrer des bibliothèques externes
- Développer de nouvelles fonctionnalités

## 📁 Structure du projet

```
streamer-leaderboard/
├── index.html      # Structure HTML (contient 3 bugs)
├── styles.css      # Styles CSS (contient 3 bugs)
├── app.js          # Logique JavaScript (contient 3 bugs)
└── data.js         # Données des streamers (100 streamers)
```

## 🚀 Comment démarrer

1. Ouvrez `index.html` dans votre navigateur
2. Testez toutes les fonctionnalités de l'application :
   - Recherche de streamers
   - Tri par abonnés, viewers, nom
   - Affichage du modal au clic sur un streamer
   - Fermeture du modal
3. Ouvrez les DevTools (F12) pour inspecter les erreurs
4. Consultez le fichier `1_BUGS.md` pour la liste complète des bugs

## 🐛 Types de bugs

### Bugs CSS 
- **Simple** : Propriété CSS manquante
- **Moyen** : Propriété CSS invalide
- **Complexe** : Problème de cascade et media queries

### Bugs HTML
- **Simple** : Erreur d'ID (typo)
- **Moyen** : Attribut manquant (bonne pratique)
- **Complexe** : Balise HTML non fermée

### Bugs JavaScript
- **Simple** : Erreur d'ID (typo)
- **Moyen** : Logique de tri inversée
- **Complexe** : Event listeners dupliqués

## 📝 Consignes - Partie 1 : Débogage

1. **Lisez d'abord** le fichier `1_BUGS.md` qui contient tous les détails
2. **Reproduisez chaque bug** en testant l'application
3. **Utilisez les DevTools** pour identifier les problèmes :
   - Console pour les erreurs JavaScript
   - Inspecteur pour la structure HTML
   - Onglet Styles pour le CSS
4. **Corrigez les bugs** un par un
5. **Testez après chaque correction**
6. **Documentez le ficheir `BUG.md`** avant vos remarques et compréhension du l'anomalie et du bugfix

## 🛠️ Outils recommandés

- **Navigateur** : Chrome, Firefox
- **Éditeur de code** : VS Code, Sublime Text, ou autre
- **Extensions utiles** :
  - Live Preview (si vous utilisez VS Code)

## 💡 Conseils

- Commencez par les bugs **simples** pour prendre confiance
- Utilisez `console.log()` pour déboguer le JavaScript
- Vérifiez la console du navigateur régulièrement
- Testez sur différentes tailles d'écran pour les bugs CSS
- N'hésitez pas à commenter votre code après correction

## ✅ Checklist de validation

Après avoir corrigé tous les bugs, vérifiez que :

- [ ] #001 - Le sous-titre ne contient plus de faute de frappe ("meilleurss" → "meilleurs")
- [ ] #002 La liste des streamers s'affiche correctement dans le tableau
- [ ] #003 Le nom du streamer "Seb" est corrigé en "Seb la frite"
- [ ] #004 La modal box est visible et apparaît au-dessus du contenu 
- [ ] #005 La colonne des viewers est visible dans le tableau sans avoir à scroller horizontalement
- [ ] #005 Toutes les colonnes du tableau sont visibles
- [ ] #006 Sur tablette/desktop, les contrôles (recherche et tri) s'affichent en ligne horizontalement
- [ ] #006 Sur mobile, les contrôles restent empilés verticalement
- [ ] #007 Le tri par nom fonctionne correctement (ordre alphabétique A-Z)
- [ ] #007 Les autres tris (abonnés, viewers) fonctionnent toujours correctement
- [ ] Aucune erreur dans la console du navigateur
- [ ] L'application fonctionne correctement sur mobile, tablette et desktop

## 📚 Ressources

- [MDN Web Docs](https://developer.mozilla.org/) - Documentation HTML/CSS/JS
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Guide des outils de développement
- [JavaScript.info](https://javascript.info/) - Tutoriel JavaScript moderne

## 🎓 Niveau de difficulté

Cet exercice est conçu pour des éléves de **3ème** avec des connaissances de base en :
- HTML5
- CSS3 (sélecteurs, propriétés, media queries)
- JavaScript (DOM, événements, fonctions)

## 📞 Support

Si vous êtes bloqué sur un bug :
1. Relisez attentivement la description dans `1_BUGS.md`
2. Inspectez le code avec les DevTools
3. Consultez la documentation en ligne

Pour vous aider, vous pouvez consulter les fichiers d'aide dans `docs/indices/` :
4. `INDICES.md` donne des pistes de résolution
5. `REFERENCES.md` précise les fichiers et lignes concernés par le bug

---

## 🚀 Partie 2 : Évolutions de l'application

Une fois tous les bugs corrigés, vous pouvez passer aux **évolutions** de l'application.

### 📋 Évolutions disponibles

Consultez le fichier `2_EVOLS.md` pour la liste complète des évolutions à développer :

- **Évolution #008 - Moyenne** : Ajouter une pagination ou un scroll infini sur le tableau des streamers
- **Évolution #009 - Complexe** : Ajouter un graphique dans la modal pour afficher l'évolution des statistiques sur 6 mois

### 🎯 Objectifs des évolutions

- Développer de nouvelles fonctionnalités
- Améliorer les performances et l'expérience utilisateur
- Apprendre à planifier, spécifier et estimer un développement
- Intégrer des bibliothèques externes (graphiques, etc.)

### 📝 Consignes pour les évolutions

1. **Analysez** les besoins et objectifs de chaque évolution
2. **Réalisez une analyse comparative** si plusieurs solutions sont possibles
3. **Rédigez une spécification technique** avant de coder
4. **Estimez le temps de développement** (chiffrage)
5. **Développez** la fonctionnalité en suivant les bonnes pratiques
6. **Testez** votre implémentation
7. **Documentez** votre solution

**Bon courage ! 🚀**



