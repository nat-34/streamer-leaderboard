import { ArrowUpDown } from "lucide-react";

// Types de tri possibles
export type TriType = "abonnes" | "viewers" | "nom";

interface SortButtonsProps {
  triActuel: TriType;
  onChangerTri: (tri: TriType) => void;
}

const SortButtons = ({ triActuel, onChangerTri }: SortButtonsProps) => {
  // Liste des boutons de tri
  const boutons: { type: TriType; label: string }[] = [
    { type: "abonnes", label: "Abonnés" },
    { type: "viewers", label: "Viewers" },
    { type: "nom", label: "Nom" },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      <span className="text-muted-foreground flex items-center gap-2">
        <ArrowUpDown className="w-4 h-4" />
        Trier par:
      </span>
      {boutons.map((bouton) => (
        <button
          key={bouton.type}
          onClick={() => onChangerTri(bouton.type)}
          className={`px-4 py-2 rounded-lg transition-all font-medium ${
            triActuel === bouton.type
              ? "bg-primary text-primary-foreground glow-primary"
              : "bg-card hover:bg-muted text-foreground border border-border"
          }`}
        >
          {bouton.label}
        </button>
      ))}
    </div>
  );
};

export default SortButtons;
