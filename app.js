// Données des streamers
const streamers = [
  {
    id: 1,
    nom: "Ninja",
    pseudo: "Ninja",
    plateforme: "Twitch",
    abonnes: 18500000,
    viewers: 45000,
    categorie: "Gaming",
    pays: "États-Unis",
    description: "Joueur professionnel de Fortnite, connu pour ses streams énergiques.",
    avatar: "🥷"
  },
  {
    id: 2,
    nom: "Squeezie",
    pseudo: "Squeezie",
    plateforme: "Twitch",
    abonnes: 8200000,
    viewers: 120000,
    categorie: "Variété",
    pays: "France",
    description: "YouTubeur et streamer français, créateur du GP Explorer.",
    avatar: "🎮"
  },
  {
    id: 3,
    nom: "Pokimane",
    pseudo: "Pokimane",
    plateforme: "Twitch",
    abonnes: 9300000,
    viewers: 25000,
    categorie: "Just Chatting",
    pays: "Canada",
    description: "Streameuse populaire connue pour ses streams de discussion.",
    avatar: "💜"
  },
  {
    id: 4,
    nom: "Gotaga",
    pseudo: "Gotaga",
    plateforme: "Twitch",
    abonnes: 4500000,
    viewers: 35000,
    categorie: "FPS",
    pays: "France",
    description: "Champion du monde Call of Duty, streamer gaming.",
    avatar: "🎯"
  },
  {
    id: 5,
    nom: "xQc",
    pseudo: "xQcOW",
    plateforme: "Kick",
    abonnes: 12000000,
    viewers: 80000,
    categorie: "Variété",
    pays: "Canada",
    description: "Ex-joueur pro Overwatch, connu pour ses réactions.",
    avatar: "⚡"
  },
  {
    id: 6,
    nom: "Sardoche",
    pseudo: "Sardoche",
    plateforme: "Twitch",
    abonnes: 1800000,
    viewers: 15000,
    categorie: "League of Legends",
    pays: "France",
    description: "Streamer français spécialisé League of Legends.",
    avatar: "🦁"
  },
  {
    id: 7,
    nom: "Amouranth",
    pseudo: "Amouranth",
    plateforme: "Twitch",
    abonnes: 6200000,
    viewers: 12000,
    categorie: "Just Chatting",
    pays: "États-Unis",
    description: "Streameuse et entrepreneuse américaine.",
    avatar: "🌸"
  },
  {
    id: 8,
    nom: "Kamet0",
    pseudo: "Kamet0",
    plateforme: "Twitch",
    abonnes: 2100000,
    viewers: 18000,
    categorie: "League of Legends",
    pays: "France",
    description: "Streamer français, duo légendaire avec Sardoche.",
    avatar: "🐉"
  }
];

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
    if (tri === "nom") return a.pseudo.localeCompare(b.pseudo);
    return 0;
  });
}

// Fonction pour afficher les streamers
function afficherStreamers() {
  const streamersFiltres = filtrerStreamers(streamers);
  const streamersTries = trierStreamers(streamersFiltres);
  const tbody = document.getElementById("streamer-table-body");
  const noResults = document.getElementById("no-results");
  const resultsCount = document.getElementById("results-count");

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

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
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

  // Afficher les streamers au chargement
  afficherStreamers();
});

