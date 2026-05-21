import { useState, useRef, useEffect } from "react";
import { NoiseTexture } from "./components/ruangjeda/NoiseTexture";
import { BottomNav } from "./components/ruangjeda/BottomNav";
import { Screen1Home } from "./components/ruangjeda/Screen1Home";
import { Screen2Triage } from "./components/ruangjeda/Screen2Triage";
import { Screen3Breathing } from "./components/ruangjeda/Screen3Breathing";
import { Screen4Music } from "./components/ruangjeda/Screen4Music";
import { Screen5Counseling } from "./components/ruangjeda/Screen5Counseling";
import Screen6History, { type JournalEntry } from "./components/ruangjeda/Screen6History";
import { Screen7Profile } from "./components/ruangjeda/Screen7Profile";
import { Screen8Relax } from "./components/ruangjeda/Screen8Relax";
import { motion, AnimatePresence } from "motion/react";

type Screen = "home" | "triage" | "breathing" | "music" | "counseling" | "history" | "profile" | "relax";
type Tier = "tier1" | "tier2" | "tier3";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [detectedTier, setDetectedTier] = useState<Tier>("tier2");
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [breathingSessions, setBreathingSessions] = useState(0);
  const [musicSessions, setMusicSessions] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleJournalSubmit = (text: string) => {
    setJournalEntry(text);
    const lowerText = text.toLowerCase();

    const tier3Keywords = [
      "krisis", "bunuh diri", "menyerah", "gak kuat", "tidak kuat",
      "putus asa", "hampa", "kosong", "gak berguna", "tidak berguna",
      "beban saja", "gak pantas hidup", "mau mengakhiri", "tidak ada harapan",
      "lelah hidup", "gak ada gunanya", "sendirian", "tidak ada yang peduli",
      "ingin menghilang", "gak mau hidup", "mati saja"
    ];

    const tier2Keywords = [
      "cemas", "stress", "capek", "khawatir", "takut", "gelisah",
      "panik", "tegang", "lelah", "burnout", "overthinking",
      "gak bisa tidur", "susah tidur", "jantung berdebar", "sesak",
      "pusing", "gak fokus", "down", "sedih", "kesepian",
      "frustasi", "marah", "emosi", "gak semangat", "kehilangan motivasi",
      "gak percaya diri", "insecure", "anxious", "overwhelmed", "tertekan",
      "stres", "depresi", "galau", "bimbang", "bingung",
      "gampang marah", "susah konsentrasi", "mual", "gemetar"
    ];

    const tier1Keywords = [
      "baik", "senang", "happy", "semangat", "tenang",
      "damai", "bersyukur", "puas", "rileks", "nyaman",
      "excited", "motivasi", "percaya diri", "enjoy", "fun",
      "seru", "alhamdulillah", "oke", "normal", "santai",
      "bahagia", "lega", "positif", "optimis", "bersemangat"
    ];

    const hasTier3 = tier3Keywords.some(kw => lowerText.includes(kw));
    const hasTier2 = tier2Keywords.some(kw => lowerText.includes(kw));
    const hasTier1 = tier1Keywords.some(kw => lowerText.includes(kw));

    let newTier: Tier;
    if (hasTier3) {
      newTier = "tier3";
    } else if (hasTier2) {
      newTier = "tier2";
    } else if (hasTier1) {
      newTier = "tier1";
    } else {
      newTier = "tier2";
    }
    setDetectedTier(newTier);
    setJournalEntries(prev => [{
      id: Date.now(),
      text,
      tier: newTier,
      timestamp: new Date()
    }, ...prev]);
    setCurrentScreen("triage");
  };

  const handleTriageContinue = () => {
    if (detectedTier === "tier3") {
      setCurrentScreen("counseling");
    } else if (detectedTier === "tier2") {
      setCurrentScreen("breathing");
    } else {
      setCurrentScreen("music");
    }
  };

  const handleBreathingComplete = () => {
    setBreathingSessions(prev => prev + 1);
    setCurrentScreen("music");
  };

  const handleMusicContinue = () => {
    setMusicSessions(prev => prev + 1);
    setCurrentScreen("home");
  };

  const handleCounselingConnect = () => {
    alert("Permintaan koneksi ke BKM berhasil dikirim! Tim konselor akan menghubungi Anda via email dalam 1x24 jam.");
    setCurrentScreen("home");
  };

  const handleNavigation = (screen: string) => {
    if (screen === "home" || screen === "history" || screen === "profile" || screen === "relax" || screen === "counseling") {
      setCurrentScreen(screen as Screen);
    }
  };

  useEffect(() => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Screen1Home onSubmit={handleJournalSubmit} />;
      case "triage":
        return <Screen2Triage tier={detectedTier} onContinue={handleTriageContinue} />;
      case "breathing":
        return <Screen3Breathing onComplete={handleBreathingComplete} onBack={() => setCurrentScreen("relax")} />;
      case "music":
        return <Screen4Music onContinue={handleMusicContinue} onBack={() => setCurrentScreen("relax")} />;
      case "relax":
        return (
          <Screen8Relax
            onStartBreathing={() => setCurrentScreen("breathing")}
            onStartMusic={() => setCurrentScreen("music")}
          />
        );
      case "counseling":
        return <Screen5Counseling onConnect={handleCounselingConnect} onBackHome={() => setCurrentScreen("home")} />;
      case "history":
        return <Screen6History journalEntries={journalEntries} />;
      case "profile":
        return (
          <Screen7Profile
            journalEntries={journalEntries}
            breathingSessions={breathingSessions}
            musicSessions={musicSessions}
          />
        );
      default:
        return <Screen1Home onSubmit={handleJournalSubmit} />;
    }
  };

  return (
    <div className="min-h-[100svh] bg-[#1A1B41] text-white relative">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#1A1B41] via-[#1A1B41] to-[#0f1028] pointer-events-none" />

      {/* Subtle line pattern */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)",
          backgroundSize: "50px 50px"
        }}
      />

      {/* Noise texture */}
      <NoiseTexture />

      {/* Main content with page transitions */}
      <div className="relative z-10 w-full max-w-md mx-auto min-h-[100svh]">
        <div ref={scrollContainerRef} className="h-full overflow-y-auto pb-[calc(6rem+env(safe-area-inset-bottom))] hide-scrollbar [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowAnchor: 'none' }}>
          <div className="w-full mx-auto pt-6 sm:pt-10 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                className="relative w-full min-h-full"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation */}
        {(currentScreen === "home" || currentScreen === "history" || currentScreen === "profile" || currentScreen === "relax" || currentScreen === "counseling") && (
          <BottomNav activeScreen={currentScreen} onNavigate={handleNavigation} />
        )}
      </div>
    </div>
  );
}