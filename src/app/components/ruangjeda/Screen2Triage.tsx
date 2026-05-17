import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { AlertCircle, Heart } from "lucide-react";

interface Screen2TriageProps {
  tier: "tier1" | "tier2" | "tier3";
  onContinue: () => void;
}

export function Screen2Triage({ tier, onContinue }: Screen2TriageProps) {
  const tierConfig = {
    tier1: {
      level: "Ringan",
      color: "#4ade80",
      message: "Kamu sedang dalam kondisi yang cukup baik. Tetap jaga keseimbangan ya!",
      buttonText: "Lanjutkan"
    },
    tier2: {
      level: "Sedang",
      color: "#fbbf24",
      message: "Kami mendeteksi kamu sedang berada di tingkat kecemasan sedang (Tier 2). Tidak apa-apa untuk merasa tidak baik-baik saja.",
      buttonText: "Mari Lakukan Stabilisasi Diri"
    },
    tier3: {
      level: "Tinggi",
      color: "#f87171",
      message: "Sepertinya bebanmu cukup berat malam ini. Kami sangat peduli denganmu.",
      buttonText: "Dapatkan Bantuan Profesional"
    }
  };

  const config = tierConfig[tier];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 pb-24">
      {/* Animated Circle Visualization */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-12"
      >
        {/* Outer glow rings */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full blur-2xl"
          style={{ backgroundColor: config.color }}
        />

        {/* Main circle */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-48 h-48 rounded-full flex items-center justify-center"
          style={{
            background: `radial-gradient(circle, ${config.color}40, ${config.color}10)`,
            border: `2px solid ${config.color}60`
          }}
        >
          <AlertCircle className="w-20 h-20" style={{ color: config.color }} />
        </motion.div>
      </motion.div>

      {/* Message Card */}
      <GlassCard className="mb-8" borderColor={config.color}>
        <div className="flex items-start gap-3 mb-4">
          <Heart className="w-6 h-6 text-[#B983FF] flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Tingkat Kecemasan: <span style={{ color: config.color }}>{config.level}</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {config.message}
            </p>
          </div>
        </div>

        {tier === "tier2" && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-sm text-gray-400">
              💡 <span className="text-[#FFD5BA]">Saran:</span> Mari lakukan stabilisasi diri.
            </p>
          </div>
        )}
      </GlassCard>

      {/* Continue Button */}
      <button
        onClick={onContinue}
        className="w-full bg-gradient-to-r from-[#FFD5BA] to-[#ffc4a3] text-[#1A1B41] font-bold py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
      >
        {config.buttonText}
      </button>
    </div>
  );
}
