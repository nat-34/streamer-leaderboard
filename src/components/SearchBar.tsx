import { Search } from "lucide-react";

// Composant de recherche simple
interface SearchBarProps {
  valeur: string;
  onChangement: (texte: string) => void;
}

const SearchBar = ({ valeur, onChangement }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
      <input
        type="text"
        placeholder="Rechercher un streamer..."
        value={valeur}
        onChange={(e) => onChangement(e.target.value)}
        className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
      />
    </div>
  );
};

export default SearchBar;
