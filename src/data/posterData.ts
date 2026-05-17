import {
  Award, GraduationCap, Heart, Target, AlertTriangle, X, Clock,
  FileText, Smartphone, Lightbulb, Pencil, Layers, TestTube,
  BookOpen, Brain, Send, Sparkles, Wind, Music
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface LogoItem {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface TeamInfo {
  teamName: string;
  members: string[];
  advisor: string;
  institution: string;
}

export interface HeaderData {
  logos: LogoItem[];
  teamInfo: TeamInfo;
  title: string;
  subtitle: string;
  tagline: string;
}

export interface StatisticItem {
  value: string;
  description: string;
}

export interface ProblemItem {
  text: string;
}

export interface UserEnvironmentItem {
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface HCDStep {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export interface ColorPaletteItem {
  color: string;
  name: string;
  description: string;
}

export interface FeatureData {
  icon: LucideIcon;
  title: string;
  description: string;
  highlightText: string;
  color: string;
  mockupType: "safeSpace" | "aiTriage" | "bkmRouting";
}

export interface MockupMessage {
  text: string;
  isAI?: boolean;
}

export interface MockupRecommendation {
  icon: LucideIcon;
  title: string;
  buttonText?: string;
  color: string;
}

export interface PosterData {
  header: HeaderData;
  leftColumn: {
    title: string;
    subtitle: string;
    sdg: {
      title: string;
      badge: string;
      target: string;
    };
    statistics: StatisticItem[];
    problems: ProblemItem[];
    userEnvironment: UserEnvironmentItem[];
  };
  middleColumn: {
    title: string;
    subtitle: string;
    designPerspective: {
      from: string;
      to: string;
    };
    hcdSteps: HCDStep[];
    colorPalette: ColorPaletteItem[];
  };
  rightColumn: {
    title: string;
    subtitle: string;
    sectionTitle: string;
    features: FeatureData[];
  };
  mockups: {
    safeSpace: {
      messages: MockupMessage[];
      inputPlaceholder: string;
    };
    aiTriage: {
      tier: string;
      percentage: number;
      recommendations: MockupRecommendation[];
    };
    bkmRouting: {
      infoText: string;
      processNote: string;
      counselorTitle: string;
      counselorSubtitle: string;
      schedule: string;
      duration: string;
      buttonText: string;
    };
  };
}

export const posterData: PosterData = {
  header: {
    logos: [
      {
        icon: Award,
        color: "#ffc4a3",
        bgColor: "bg-[#ffc4a3]/10",
        borderColor: "border-[#ffc4a3]/30"
      },
      {
        icon: GraduationCap,
        color: "#c4b5fd",
        bgColor: "bg-[#c4b5fd]/10",
        borderColor: "border-[#c4b5fd]/30"
      },
      {
        icon: Heart,
        color: "#ffc4a3",
        bgColor: "bg-[#ffc4a3]/10",
        borderColor: "border-[#ffc4a3]/30"
      }
    ],
    teamInfo: {
      teamName: "Tim [Nama Tim Anda]",
      members: ["Muhammad Akmal Fazli Riyadi (Ketua)", "[Nama Anggota 2]", "[Nama Anggota 3]"],
      advisor: "[Nama Dosen]",
      institution: "Informatika Universitas Diponegoro"
    },
    title: "RUANG JEDA",
    subtitle: "Pertolongan Pertama Psikologis & Triage Mental Mahasiswa Berbasis AI",
    tagline: "Merespons Stres Akademik Tanpa Birokrasi Rumit"
  },
  leftColumn: {
    title: "The Why & The Who",
    subtitle: "Masalah & Pengguna",
    sdg: {
      title: "Tema & SDG",
      badge: "SDG 3: Good Health & Well-being",
      target: "Target 3.4: Mendorong kesehatan & kesejahteraan mental mahasiswa di lingkungan akademik"
    },
    statistics: [
      {
        value: "80%",
        description: "Mahasiswa rentan stres krusial"
      },
      {
        value: "70%",
        description: "Menunda mencari bantuan konselor"
      }
    ],
    problems: [
      { text: 'Merasa "belum cukup parah"' },
      { text: "Birokrasi pendaftaran BKM yang rumit" },
      { text: "Terjebak doomscrolling saat burnout" }
    ],
    userEnvironment: [
      {
        icon: Smartphone,
        label: "Pengguna",
        description: "Mahasiswa dengan peran ganda (Asisten Praktikum/Aktivis Himpunan) yang sangat sibuk"
      },
      {
        icon: Clock,
        label: "Lingkungan",
        description: "Kampus & kamar kos pada malam hari (fase overwhelmed)"
      },
      {
        icon: FileText,
        label: "Stakeholder",
        description: "Badan Konsultasi Mahasiswa (BKM) Undip"
      }
    ]
  },
  middleColumn: {
    title: "The How",
    subtitle: "Metode & Proses Desain",
    designPerspective: {
      from: "Reactive Healing",
      to: "Proactive Triage"
    },
    hcdSteps: [
      {
        icon: Heart,
        title: "Empathize",
        description: "Wawancara 3 Persona (Si Anti-Birokrasi, Si Perfeksionis, Si Aktivis)",
        color: "#ffc4a3"
      },
      {
        icon: Pencil,
        title: "Define",
        description: "Pemetaan masalah (Tingginya cognitive load)",
        color: "#c4b5fd"
      },
      {
        icon: Lightbulb,
        title: "Ideate",
        description: "Integrasi AI (IndoBERT) untuk analisis sentimen & routing BKM",
        color: "#ffc4a3"
      },
      {
        icon: TestTube,
        title: "Prototype & Test",
        description: "Purwarupa High-Fidelity & Pengujian SUS",
        color: "#c4b5fd"
      }
    ],
    colorPalette: [
      {
        color: "#1a1f3a",
        name: "Deep Indigo/Navy",
        description: "Latar belakang utama"
      },
      {
        color: "#ffc4a3",
        name: "Muted Peach",
        description: "Aksen kehangatan"
      },
      {
        color: "#c4b5fd",
        name: "Soft Lilac",
        description: "Aksen empati"
      }
    ]
  },
  rightColumn: {
    title: "The Solution",
    subtitle: "Konsep & UI Mockup",
    sectionTitle: "Fitur Utama Ruang Jeda",
    features: [
      {
        icon: BookOpen,
        title: "Safe Space Notes",
        description: "Tempat curhat privat tanpa judgement, potong jalur birokrasi.",
        highlightText: "Micro-Journaling.",
        color: "#ffc4a3",
        mockupType: "safeSpace"
      },
      {
        icon: Brain,
        title: "AI Sentiment Triage",
        description: "Beri grounding pernapasan & musik.",
        highlightText: "Otomatis mendeteksi Tier krisis.",
        color: "#c4b5fd",
        mockupType: "aiTriage"
      },
      {
        icon: Send,
        title: "One-Tap BKM Routing",
        description: "ke dashboard kampus tanpa form manual.",
        highlightText: "Sinkronisasi persetujuan",
        color: "#ffc4a3",
        mockupType: "bkmRouting"
      }
    ]
  },
  mockups: {
    safeSpace: {
      messages: [
        {
          text: "Capek banget hari ini... deadline tugas akhir, praktikum, terus masih harus rapat himpunan 😔",
          isAI: false
        },
        {
          text: "Saya dengar kamu. Mari ambil jeda sejenak. Coba pernapasan 4-7-8?",
          isAI: true
        }
      ],
      inputPlaceholder: "Tulis apa yang kamu rasakan..."
    },
    aiTriage: {
      tier: "Kelelahan Moderat",
      percentage: 65,
      recommendations: [
        {
          icon: Wind,
          title: "Grounding Pernapasan",
          buttonText: "Mulai Sekarang",
          color: "#c4b5fd"
        },
        {
          icon: Music,
          title: "Playlist Fokus Tenang",
          color: "#ffc4a3"
        }
      ]
    },
    bkmRouting: {
      infoText: "Berdasarkan analisis, kami merekomendasikan Anda untuk berbicara dengan konselor BKM.",
      processNote: "Proses tanpa formulir manual",
      counselorTitle: "Psikolog BKM",
      counselorSubtitle: "Konselor Tersedia",
      schedule: "Besok, 10:00 - 11:00",
      duration: "Durasi: 50 menit",
      buttonText: "Setuju & Kirim"
    }
  }
};
