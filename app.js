// Données des streamers (chargées depuis data.js)
let streamers = [];

// État de l'application
let recherche = "";
let tri = "abonnes";
let ordreTri = "desc"; // 🔹 asc / desc
let streamerSelectionne = null;

// 🔹 Pagination
let currentPage = 1;
const itemsPerPage = 10;

// 🔹 Graphique Chart.js
let abonnesChart = null;

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

// Fonction de tri avec ordre asc/desc
function trierStreamers(liste) {
  const listeCopie = [...liste];
  const facteur = ordreTri === "asc" ? 1 : -1;

  return listeCopie.sort((a, b) => {
    if (tri === "abonnes") return (a.abonnes - b.abonnes) * facteur;
    if (tri === "viewers") return (a.viewers - b.viewers) * facteur;
    if (tri === "nom") return a.pseudo.localeCompare(b.pseudo) * facteur;
    if (tri === "pays") return a["pays"].localeCompare(b["pays"]) * facteur;
    return 0;
  });
}

// Fonction pour afficher les streamers AVEC pagination
function afficherStreamers() {
  const streamersFiltres = filtrerStreamers(streamers);
  const streamersTries = trierStreamers(streamersFiltres);

  const tbody = document.getElementById("streamer-table-body");
  const noResults = document.getElementById("no-results");
  const resultsCount = document.getElementById("results-count");

  // Aucun résultat
  if (streamersTries.length === 0) {
    tbody.innerHTML = "";
    noResults.style.display = "block";
    resultsCount.textContent = "0 streamer trouvé";
    const pageInfo = document.getElementById("page-info");
    if (pageInfo) pageInfo.textContent = "Page 0 sur 0";
    return;
  }

  noResults.style.display = "none";

  // Pagination
  const totalItems = streamersTries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = streamersTries.slice(start, end);

  // Mettre à jour le compteur global
  resultsCount.textContent = `${totalItems} streamer(s) trouvé(s)`;

  // Vider le tableau puis remplir uniquement avec pageItems
  tbody.innerHTML = "";
  pageItems.forEach((streamer, index) => {
    const tr = document.createElement("tr");
    tr.addEventListener("click", () => ouvrirModal(streamer));

    const rangGlobal = start + index + 1; // rang réel dans le classement

    tr.innerHTML = `
      <td>${getMedaille(rangGlobal)}</td>
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
      <td class="pays-value">${streamer.pays}</td>
    `;

    tbody.appendChild(tr);
  });

  // Mettre à jour "Page X sur Y"
  const pageInfo = document.getElementById("page-info");
  if (pageInfo) {
    pageInfo.textContent = `Page ${currentPage} sur ${totalPages}`;
  }

  // Désactiver les boutons en début/fin
  const prevBtn = document.getElementById("prev-page");
  const nextBtn = document.getElementById("next-page");
  if (prevBtn && nextBtn) {
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }
}

// Fonction pour ouvrir le modal + graphique (version “de base”)
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

  // 🔹 Partie graphique (config de base)
  const canvas = document.getElementById("abonnes-chart");
  console.log("canvas:", canvas);
  console.log("evolutionAbonnes:", streamer.evolutionAbonnes);

  if (canvas && typeof Chart !== "undefined") {
    const ctx = canvas.getContext("2d");

    if (abonnesChart) {
      abonnesChart.destroy();
    }

    const dataAbonnes = streamer.evolutionAbonnes || [];
    const labels = ["-5 mois", "-4 mois", "-3 mois", "-2 mois", "-1 mois", "Ce mois"];

    abonnesChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels.slice(-dataAbonnes.length),
        datasets: [
          {
            label: "Évolution des abonnés",
            data: dataAbonnes,
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79, 70, 229, 0.2)",
            tension: 0.3,
            fill: true,
            pointRadius: 3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              callback: (value) => formaterNombre(value),
            },
          },
        },
        plugins: {
          legend: { display: false },
        },
      },
    });
  }

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
  if (typeof streamersData !== "undefined") {
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
  // Charger les données
  chargerStreamers();

  // Barre de recherche
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    recherche = e.target.value;
    currentPage = 1;
    afficherStreamers();
  });

  // Boutons de tri avec toggle asc/desc + flèche ↑/↓
  const sortButtons = document.querySelectorAll(".sort-btn");
  sortButtons.forEach((btn) => {
    // Sauvegarde du label de base
    btn.dataset.sortLabel = btn.textContent;

    btn.addEventListener("click", () => {
      const nouveauCritere = btn.dataset.sort;

      if (tri === nouveauCritere) {
        // On reclique sur le même critère → on inverse l'ordre
        ordreTri = ordreTri === "asc" ? "desc" : "asc";
      } else {
        // On change de critère → on passe sur ce critère en desc par défaut
        tri = nouveauCritere;
        ordreTri = "desc";
      }

      // Mettre à jour les classes actives ET le texte (flèche)
      sortButtons.forEach((b) => {
        b.classList.remove("active");
        // Rétablir le label de base sans flèche
        const baseLabel = b.dataset.sortLabel;
        if (baseLabel) b.textContent = baseLabel;
      });

      btn.classList.add("active");
      const baseLabel = btn.dataset.sortLabel || btn.textContent;
      btn.textContent = baseLabel + (ordreTri === "asc" ? " ↑" : " ↓");

      currentPage = 1;
      afficherStreamers();
    });
  });

  // Pagination : boutons Précédent / Suivant
  const prevBtn = document.getElementById("prev-page");
  const nextBtn = document.getElementById("next-page");

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        afficherStreamers();
      }
    });

    nextBtn.addEventListener("click", () => {
      const streamersFiltres = filtrerStreamers(streamers);
      const totalPages = Math.ceil(streamersFiltres.length / itemsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        afficherStreamers();
      }
    });
  }

  // Modal
  const modal = document.getElementById("modal");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modalClose = document.getElementById("modal-close");

  modalBackdrop.addEventListener("click", fermerModal);
  modalClose.addEventListener("click", fermerModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && streamerSelectionne) {
      fermerModal();
    }
  });
});
