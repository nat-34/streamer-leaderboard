// Données des streamers (chargées depuis data.js)
let streamers = [];

// État de l'application
let recherche = "";
let tri = "abonnes";
let streamerSelectionne = null;

// Fonction pour formater les grands nombres
function formaterNombre(nombre) {
  if (nombre >= 1000000) {
    return (nombre / 1000000).toFixed(1) + "M";
  }
  if (nombre >= 1000) {
    return (nombre / 1000).toFixed(0) + "K";
  }
  return nombre.toString();
}

// Fonction pour obtenir la classe CSS de la plateforme
function getPlateformeClass(plateforme) {
  if (plateforme === "Twitch") return "plateforme-twitch";
  if (plateforme === "YouTube") return "plateforme-youtube";
  return "plateforme-kick";
}

// Fonction pour obtenir le HTML de la médaille
function getMedaille(rang) {
  if (rang === 1) return '<span class="medal">🥇</span>';
  if (rang === 2) return '<span class="medal">🥈</span>';
  if (rang === 3) return '<span class="medal">🥉</span>';
  return `<span class="medal-number">#${rang}</span>`;
}

// Fonction de filtrage
function filtrerStreamers(liste) {
  const rechercheLower = recherche.toLowerCase();
  return liste.filter(
    (s) =>
      s.pseudo.toLowerCase().includes(rechercheLower) ||
      s.categorie.toLowerCase().includes(rechercheLower) ||
      s.pays.toLowerCase().includes(rechercheLower)
  );
}

// Fonction de tri
function trierStreamers(liste) {
  const listeCopie = [...liste];
  return listeCopie.sort((a, b) => {
    if (tri === "abonnes") return b.abonnes - a.abonnes;
    if (tri === "viewers") return b.viewers - a.viewers;
    if (tri === "nom") return b.pseudo.localeCompare(a.pseudo);
    return 0;
  });
}

// Fonction pour afficher les streamers
function afficherStreamers() {
  const streamersFiltres = filtrerStreamers(streamers);
  const streamersTries = trierStreamers(streamersFiltres);
  const tbody = document.getElementById("streamer-table-body");
  const noResults = document.getElementById("no-results");
  const resultsCount = document.getElementById("result-count");


  // Mettre à jour le compteur
  resultsCount.textContent = `${streamersTries.length} streamer(s) trouvé(s)`;

  // Vider le tableau
  tbody.innerHTML = "";

  // Afficher le message si aucun résultat
  if (streamersTries.length === 0) {
    noResults.style.display = "block";
    return;
  }

  noResults.style.display = "none";

  // Créer les lignes du tableau
  streamersTries.forEach((streamer, index) => {
    const tr = document.createElement("tr");
    tr.addEventListener("click", () => ouvrirModal(streamer));

    tr.innerHTML = `
      <td>${getMedaille(index + 1)}</td>
      <td>
        <div class="streamer-row">
          <span class="streamer-avatar">${streamer.avatar}</span>
          <div class="streamer-info">
            <p class="streamer-pseudo">${streamer.pseudo}</p>
            <p class="streamer-categorie">${streamer.categorie}</p>
          </div>
        </div>
      </td>
      <td>
        <span class="plateforme-badge ${getPlateformeClass(streamer.plateforme)}">
          ${streamer.plateforme}
        </span>
      </td>
      <td class="abonnes-value">${formaterNombre(streamer.abonnes)}</td>
      <td class="viewers-value">${formaterNombre(streamer.viewers)}</td>
    `;

    tbody.appendChild(tr);
  });
}

// Fonction pour ouvrir le modal
function ouvrirModal(streamer) {
  streamerSelectionne = streamer;
  const modal = document.getElementById("modal");
  const modalAvatar = document.getElementById("modal-avatar");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalAbonnes = document.getElementById("modal-abonnes");
  const modalViewers = document.getElementById("modal-viewers");
  const modalPays = document.getElementById("modal-pays");
  const modalCategorie = document.getElementById("modal-categorie");
  const modalDescription = document.getElementById("modal-description");

  modalAvatar.textContent = streamer.avatar;
  modalTitle.textContent = streamer.pseudo;
  modalSubtitle.textContent = streamer.nom;
  modalAbonnes.textContent = (streamer.abonnes / 1000000).toFixed(1) + "M";
  modalAbonnes.className = "stat-value abonnes";
  modalViewers.textContent = (streamer.viewers / 1000).toFixed(0) + "K";
  modalViewers.className = "stat-value viewers";
  modalPays.textContent = streamer.pays;
  modalCategorie.textContent = streamer.categorie;
  modalDescription.textContent = streamer.description;

  modal.style.display = "flex";
}

// Fonction pour fermer le modal
function fermerModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  streamerSelectionne = null;
}

// Fonction pour charger les données depuis data.js
function chargerStreamers() {
  if (typeof streamersData !== 'undefined') {
    streamers = streamersData;
    afficherStreamers();
  } else {
    console.error("Erreur: Les données des streamers n'ont pas pu être chargées");
    const tbody = document.getElementById("streamer-table-body");
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 2rem; color: var(--muted-foreground);">
          Erreur lors du chargement des données. Veuillez vérifier que le fichier data.js est inclus.
        </td>
      </tr>
    `;
  }
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  // Charger les données depuis data.json
  chargerStreamers();

  // Barre de recherche
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    recherche = e.target.value;
    afficherStreamers();
  });

  // Boutons de tri
  const sortButtons = document.querySelectorAll(".sort-btn");
  sortButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Retirer la classe active de tous les boutons
      sortButtons.forEach((b) => b.classList.remove("active"));
      // Ajouter la classe active au bouton cliqué
      btn.classList.add("active");
      // Mettre à jour le tri
      tri = btn.dataset.sort;
      afficherStreamers();
    });
  });

  // Modal
  const modal = document.getElementById("modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");

  modalBackdrop.addEventListener("click", fermerModal);
  modalClose.addEventListener("click", fermerModal);

  // Fermer avec Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && streamerSelectionne) {
      fermerModal();
    }
  });
});

