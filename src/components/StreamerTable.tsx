import { Streamer } from "@/data/streamers";
import { Trophy, Users, Eye } from "lucide-react";

interface StreamerTableProps {
  streamers: Streamer[];
  onCliquerStreamer: (streamer: Streamer) => void;
}

// Fonction pour formater les grands nombres
const formaterNombre = (nombre: number): string => {
  if (nombre >= 1000000) {
    return (nombre / 1000000).toFixed(1) + "M";
  }
  if (nombre >= 1000) {
    return (nombre / 1000).toFixed(0) + "K";
  }
  return nombre.toString();
};

// Composant pour afficher la médaille du classement
const Medaille = ({ rang }: { rang: number }) => {
  if (rang === 1) return <span className="text-2xl">🥇</span>;
  if (rang === 2) return <span className="text-2xl">🥈</span>;
  if (rang === 3) return <span className="text-2xl">🥉</span>;
  return <span className="text-muted-foreground font-bold">#{rang}</span>;
};

const StreamerTable = ({ streamers, onCliquerStreamer }: StreamerTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        {/* En-tête du tableau */}
        <thead>
          <tr className="border-b border-border">
            <th className="py-4 px-4 text-left text-muted-foreground font-medium">
              <Trophy className="w-4 h-4 inline mr-2" />
              Rang
            </th>
            <th className="py-4 px-4 text-left text-muted-foreground font-medium">
              Streamer
            </th>
            <th className="py-4 px-4 text-left text-muted-foreground font-medium">
              Plateforme
            </th>
            <th className="py-4 px-4 text-left text-muted-foreground font-medium">
              <Users className="w-4 h-4 inline mr-2" />
              Abonnés
            </th>
            <th className="py-4 px-4 text-left text-muted-foreground font-medium">
              <Eye className="w-4 h-4 inline mr-2" />
              Viewers
            </th>
          </tr>
        </thead>

        {/* Corps du tableau */}
        <tbody>
          {streamers.map((streamer, index) => (
            <tr
              key={streamer.id}
              onClick={() => onCliquerStreamer(streamer)}
              className="border-b border-border/50 hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <td className="py-4 px-4">
                <Medaille rang={index + 1} />
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{streamer.avatar}</span>
                  <div>
                    <p className="font-semibold text-foreground">{streamer.pseudo}</p>
                    <p className="text-sm text-muted-foreground">{streamer.categorie}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  streamer.plateforme === "Twitch" 
                    ? "bg-purple-500/20 text-purple-400"
                    : streamer.plateforme === "YouTube"
                    ? "bg-red-500/20 text-red-400"
                    : "bg-green-500/20 text-green-400"
                }`}>
                  {streamer.plateforme}
                </span>
              </td>
              <td className="py-4 px-4 font-semibold text-secondary">
                {formaterNombre(streamer.abonnes)}
              </td>
              <td className="py-4 px-4 font-semibold text-accent">
                {formaterNombre(streamer.viewers)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Message si aucun résultat */}
      {streamers.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Aucun streamer trouvé 😢
        </div>
      )}
    </div>
  );
};

export default StreamerTable;
