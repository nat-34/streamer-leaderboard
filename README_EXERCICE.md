# 🎓 Exercice de Débogage - Application Top Streamers

## 📖 Contexte

Cette application contient **plusieurs bugs intentionnels** répartis dans les fichiers HTML, CSS et JavaScript. Votre mission est de les identifier et de les corriger.

## 🎯 Objectifs pédagogiques

- Apprendre à identifier et corriger des bugs dans du code existant
- Utiliser les outils de développement du navigateur (DevTools)
- Comprendre les erreurs courantes en HTML, CSS et JavaScript
- Développer des compétences en débogage

## 📁 Structure du projet

```
streamer-leaderboard/
├── index.html      # Structure HTML (contient 3 bugs)
├── styles.css      # Styles CSS (contient 3 bugs)
├── app.js          # Logique JavaScript (contient 3 bugs)
├── data.js         # Données des streamers (100 streamers)
├── BUGS.md         # Liste détaillée de tous les bugs
└── README_EXERCICE.md  # Ce fichier
```

## 🚀 Comment démarrer

1. Ouvrez `index.html` dans votre navigateur
2. Testez toutes les fonctionnalités de l'application :
   - Recherche de streamers
   - Tri par abonnés, viewers, nom
   - Affichage du modal au clic sur un streamer
   - Fermeture du modal
3. Ouvrez les DevTools (F12) pour inspecter les erreurs
4. Consultez le fichier `BUGS.md` pour la liste complète des bugs

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

## 📝 Consignes

1. **Lisez d'abord** le fichier `BUGS.md` qui contient tous les détails
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

- [ ] Le sous-titre de l'en-tête est visible
- [ ] Le focus du champ de recherche fonctionne
- [ ] Les contrôles s'affichent en ligne sur grand écran
- [ ] Le compteur de résultats se met à jour
- [ ] Le bouton de fermeture du modal a le bon attribut
- [ ] La structure HTML du modal est correcte
- [ ] Le tri par nom fonctionne correctement (A-Z)
- [ ] Le modal se ferme correctement au clic sur le backdrop
- [ ] Aucune erreur dans la console du navigateur

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
1. Relisez attentivement la description dans `BUGS.md`
2. Utilisez les indices fournis
3. Inspectez le code avec les DevTools
4. Consultez la documentation en ligne

**Bon courage ! 🚀**



