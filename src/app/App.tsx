import { useState } from "react";
import { NoiseTexture } from "./components/ruangjeda/NoiseTexture";
import { BottomNav } from "./components/ruangjeda/BottomNav";
import { Screen1Home } from "./components/ruangjeda/Screen1Home";
import { Screen2Triage } from "./components/ruangjeda/Screen2Triage";
import { Screen3Breathing } from "./components/ruangjeda/Screen3Breathing";
import { Screen4Music } from "./components/ruangjeda/Screen4Music";
import { Screen5Counseling } from "./components/ruangjeda/Screen5Counseling";
import Screen6History, { type JournalEntry } from "./components/ruangjeda/Screen6History";
import { Screen7Profile } from "./components/ruangjeda/Screen7Profile";
import { motion, AnimatePresence } from "motion/react";

type Screen = "home" | "triage" | "breathing" | "music" | "counseling" | "history" | "profile";
type Tier = "tier1" | "tier2" | "tier3";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [detectedTier, setDetectedTier] = useState<Tier>("tier2");
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  const handleJournalSubmit = (text: string) => {
    setJournalEntry(text);
    // Simulate AI analysis - in real app, this would call the AI API
    // For demo, we'll detect tier based on text length/keywords
    const lowerText = text.toLowerCase();
    let newTier: Tier;
    if (lowerText.includes("krisis") || lowerText.includes("bunuh diri") || lowerText.includes("menyerah")) {
      newTier = "tier3";
    } else if (lowerText.includes("cemas") || lowerText.includes("stress") || lowerText.includes("capek")) {
      newTier = "tier2";
    } else {
      newTier = "tier1";
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
    setCurrentScreen("music");
  };

  const handleMusicContinue = () => {
    setCurrentScreen("home");
  };

  const handleCounselingConnect = () => {
    alert("Permintaan koneksi ke BKM berhasil dikirim! Tim konselor akan menghubungi Anda via email dalam 1x24 jam.");
    setCurrentScreen("home");
  };

  const handleNavigation = (screen: string) => {
    if (screen === "home" || screen === "history" || screen === "profile") {
      setCurrentScreen(screen as Screen);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Screen1Home onSubmit={handleJournalSubmit} />;
      case "triage":
        return <Screen2Triage tier={detectedTier} onContinue={handleTriageContinue} />;
      case "breathing":
        return <Screen3Breathing onComplete={handleBreathingComplete} />;
      case "music":
        return <Screen4Music onContinue={handleMusicContinue} />;
      case "counseling":
        return <Screen5Counseling onConnect={handleCounselingConnect} onBackHome={() => setCurrentScreen("home")} />;
      case "history":
        return <Screen6History journalEntries={journalEntries} />;
      case "profile":
        return <Screen7Profile journalEntries={journalEntries} />;
      default:
        return <Screen1Home onSubmit={handleJournalSubmit} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1B41] text-white overflow-hidden relative">
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
      <div className="relative z-10 max-w-md mx-auto pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      {(currentScreen === "home" || currentScreen === "history" || currentScreen === "profile") && (
        <BottomNav activeScreen={currentScreen} onNavigate={handleNavigation} />
      )}
    </div>
  );
}