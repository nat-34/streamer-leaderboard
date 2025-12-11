// Données des streamers - facile à modifier !
export interface Streamer {
  id: number;
  nom: string;
  pseudo: string;
  plateforme: "Twitch" | "YouTube" | "Kick";
  abonnes: number;
  viewers: number;
  categorie: string;
  pays: string;
  description: string;
  avatar: string;
}

export const streamers: Streamer[] = [
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
