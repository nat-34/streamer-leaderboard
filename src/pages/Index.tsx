import { useState } from "react";
import { streamers, Streamer } from "@/data/streamers";
import SearchBar from "@/components/SearchBar";
import SortButtons, { TriType } from "@/components/SortButtons";
import StreamerTable from "@/components/StreamerTable";
import StreamerModal from "@/components/StreamerModal";
import { Trophy } from "lucide-react";

const Index = () => {
  // États (state) - les données qui peuvent changer
  const [recherche, setRecherche] = useState("");
  const [tri, setTri] = useState<TriType>("abonnes");
  const [streamerSelectionne, setStreamerSelectionne] = useState<Streamer | null>(null);

  // Fonction de filtrage - cherche dans le pseudo et la catégorie
  const filtrerStreamers = (liste: Streamer[]): Streamer[] => {
    const rechercheLower = recherche.toLowerCase();
    return liste.filter(
      (s) =>
        s.pseudo.toLowerCase().includes(rechercheLower) ||
        s.categorie.toLowerCase().includes(rechercheLower) ||
        s.pays.toLowerCase().includes(rechercheLower)
    );
  };

  // Fonction de tri - compare deux streamers selon le critère choisi
  const trierStreamers = (liste: Streamer[]): Streamer[] => {
    return [...liste].sort((a, b) => {
      if (tri === "abonnes") return b.abonnes - a.abonnes;
      if (tri === "viewers") return b.viewers - a.viewers;
      if (tri === "nom") return a.pseudo.localeCompare(b.pseudo);
      return 0;
    });
  };

  // On applique le filtre puis le tri
  const streamersAffiches = trierStreamers(filtrerStreamers(streamers));

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      {/* Conteneur principal */}
      <div className="max-w-5xl mx-auto">
        {/* En-tête */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Trophy className="w-10 h-10 text-accent" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              Top Streamers
            </h1>
          </div>
          <p className="text-muted-foreground">
            Classement des meilleurs streamers du moment
          </p>
        </header>

        {/* Barre de recherche et tri */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <SearchBar valeur={recherche} onChangement={setRecherche} />
          </div>
          <SortButtons triActuel={tri} onChangerTri={setTri} />
        </div>

        {/* Tableau des streamers */}
        <div className="glass rounded-2xl overflow-hidden">
          <StreamerTable
            streamers={streamersAffiches}
            onCliquerStreamer={setStreamerSelectionne}
          />
        </div>

        {/* Compteur de résultats */}
        <p className="text-center text-muted-foreground mt-4">
          {streamersAffiches.length} streamer(s) trouvé(s)
        </p>
      </div>

      {/* Modal de détail (s'affiche quand on clique sur un streamer) */}
      <StreamerModal
        streamer={streamerSelectionne}
        onFermer={() => setStreamerSelectionne(null)}
      />
    </div>
  );
};

export default Index;
