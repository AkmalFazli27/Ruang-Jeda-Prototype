export interface Playlist {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Lo-fi untuk Coding",
    subtitle: "Beats santai untuk fokus",
    duration: "2 jam 15 menit",
    icon: "💻"
  },
  {
    id: "2",
    title: "Suara Hujan Tengah Malam",
    subtitle: "Ambient alami yang menenangkan",
    duration: "1 jam 30 menit",
    icon: "🌧️"
  },
  {
    id: "3",
    title: "Ambient Perpustakaan",
    subtitle: "Suara lembut ruang belajar",
    duration: "1 jam 45 menit",
    icon: "📚"
  },
  {
    id: "4",
    title: "Piano Klasik Malam",
    subtitle: "Melodi yang menenangkan jiwa",
    duration: "2 jam",
    icon: "🎹"
  }
];

export const breathingSteps = [
  { phase: "Tarik Napas", duration: 4, instruction: "Hirup udara perlahan melalui hidung" },
  { phase: "Tahan", duration: 7, instruction: "Tahan napas dengan lembut" },
  { phase: "Buang Napas", duration: 8, instruction: "Hembuskan perlahan melalui mulut" }
];

export const tierMessages = {
  tier1: {
    level: "Ringan",
    color: "#4ade80",
    message: "Kamu sedang dalam kondisi yang cukup baik. Tetap jaga keseimbangan ya!",
    action: "relax"
  },
  tier2: {
    level: "Sedang",
    color: "#fbbf24",
    message: "Kami mendeteksi kamu sedang berada di tingkat kecemasan sedang (Tier 2). Tidak apa-apa untuk merasa tidak baik-baik saja.",
    action: "breathing"
  },
  tier3: {
    level: "Tinggi",
    color: "#f87171",
    message: "Sepertinya bebanmu cukup berat malam ini. Tim BKM Undip siap mendengarkan ceritamu besok pagi.",
    action: "counseling"
  }
};
