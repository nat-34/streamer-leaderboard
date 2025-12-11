import { Streamer } from "@/data/streamers";
import { X, Users, Eye, MapPin, Tag } from "lucide-react";

interface StreamerModalProps {
  streamer: Streamer | null;
  onFermer: () => void;
}

const StreamerModal = ({ streamer, onFermer }: StreamerModalProps) => {
  // Si pas de streamer sélectionné, on n'affiche rien
  if (!streamer) return null;

  return (
    // Fond sombre cliquable pour fermer
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onFermer}
    >
      {/* Carte du streamer */}
      <div 
        className="glass rounded-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()} // Empêche la fermeture si on clique sur la carte
      >
        {/* Bouton fermer */}
        <button 
          onClick={onFermer}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Avatar et nom */}
        <div className="text-center mb-6">
          <span className="text-6xl block mb-4">{streamer.avatar}</span>
          <h2 className="text-2xl font-bold gradient-text">{streamer.pseudo}</h2>
          <p className="text-muted-foreground">{streamer.nom}</p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Users className="w-5 h-5 mx-auto mb-2 text-secondary" />
            <p className="text-2xl font-bold text-secondary">
              {(streamer.abonnes / 1000000).toFixed(1)}M
            </p>
            <p className="text-sm text-muted-foreground">Abonnés</p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <Eye className="w-5 h-5 mx-auto mb-2 text-accent" />
            <p className="text-2xl font-bold text-accent">
              {(streamer.viewers / 1000).toFixed(0)}K
            </p>
            <p className="text-sm text-muted-foreground">Viewers</p>
          </div>
        </div>

        {/* Infos supplémentaires */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span>{streamer.pays}</span>
          </div>
          <div className="flex items-center gap-3">
            <Tag className="w-5 h-5 text-muted-foreground" />
            <span>{streamer.categorie}</span>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6 p-4 bg-muted/30 rounded-xl">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {streamer.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreamerModal;
