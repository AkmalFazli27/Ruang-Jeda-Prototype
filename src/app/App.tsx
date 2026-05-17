import { useState } from "react";
import { NoiseTexture } from "./components/ruangjeda/NoiseTexture";
import { BottomNav } from "./components/ruangjeda/BottomNav";
import { Screen1Home } from "./components/ruangjeda/Screen1Home";
import { Screen2Triage } from "./components/ruangjeda/Screen2Triage";
import { Screen3Breathing } from "./components/ruangjeda/Screen3Breathing";
import { Screen4Music } from "./components/ruangjeda/Screen4Music";
import { Screen5Counseling } from "./components/ruangjeda/Screen5Counseling";
import { motion, AnimatePresence } from "motion/react";

type Screen = "home" | "triage" | "breathing" | "music" | "counseling" | "history" | "profile";
type Tier = "tier1" | "tier2" | "tier3";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");
  const [detectedTier, setDetectedTier] = useState<Tier>("tier2");
  const [journalEntry, setJournalEntry] = useState("");

  const handleJournalSubmit = (text: string) => {
    setJournalEntry(text);
    // Simulate AI analysis - in real app, this would call the AI API
    // For demo, we'll detect tier based on text length/keywords
    const lowerText = text.toLowerCase();
    if (lowerText.includes("krisis") || lowerText.includes("bunuh diri") || lowerText.includes("menyerah")) {
      setDetectedTier("tier3");
    } else if (lowerText.includes("cemas") || lowerText.includes("stress") || lowerText.includes("capek")) {
      setDetectedTier("tier2");
    } else {
      setDetectedTier("tier1");
    }
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
        return (
          <div className="min-h-screen flex items-center justify-center p-6 pb-24">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Riwayat Jurnal</h2>
              <p className="text-gray-400">Fitur riwayat akan segera hadir</p>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="min-h-screen flex items-center justify-center p-6 pb-24">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Profil</h2>
              <p className="text-gray-400">Fitur profil akan segera hadir</p>
            </div>
          </div>
        );
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
      <div className="relative z-10 max-w-md mx-auto">
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