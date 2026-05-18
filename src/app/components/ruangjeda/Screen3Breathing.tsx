import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wind } from "lucide-react";

interface Screen3BreathingProps {
  onComplete: () => void;
}

export function Screen3Breathing({ onComplete }: Screen3BreathingProps) {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [timeLeft, setTimeLeft] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const phases = [
    { name: "Tarik Napas", duration: 4, instruction: "Hirup udara perlahan melalui hidung", scale: 1.8 },
    { name: "Tahan", duration: 7, instruction: "Tahan napas dengan lembut", scale: 1.8 },
    { name: "Buang Napas", duration: 8, instruction: "Hembuskan perlahan melalui mulut", scale: 0.8 }
  ];

  const currentPhaseData = phases[currentPhase];

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Move to next phase
      if (currentPhase < phases.length - 1) {
        setCurrentPhase(currentPhase + 1);
        setTimeLeft(phases[currentPhase + 1].duration);
      } else {
        // Complete cycle
        const newCycleCount = cycleCount + 1;
        setCycleCount(newCycleCount);

        if (newCycleCount >= 3) {
          // After 3 cycles, stop
          setIsActive(false);
        } else {
          // Start new cycle
          setCurrentPhase(0);
          setTimeLeft(phases[0].duration);
        }
      }
    }
  }, [timeLeft, isActive, currentPhase, cycleCount]);

  const startBreathing = () => {
    setIsActive(true);
    setCurrentPhase(0);
    setTimeLeft(phases[0].duration);
    setCycleCount(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 pb-24 bg-gradient-to-b from-[#1A1B41] via-[#0f1028] to-[#1A1B41]">
      {/* Header */}
      <div className="absolute top-8 left-0 right-0 px-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Wind className="w-6 h-6 text-[#B983FF]" />
          <h2 className="text-xl font-bold text-white">Latihan Pernapasan 4-7-8</h2>
        </div>
        <p className="text-center text-gray-400 text-sm">
          {isActive ? `Siklus ${cycleCount + 1} dari 3` : "Teknik pernapasan untuk menenangkan diri"}
        </p>
      </div>

      {/* Breathing Circle Animation */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ scale: 1, opacity: 0 }}
            animate={{
              scale: isActive ? currentPhaseData.scale : 1,
              opacity: 1
            }}
            transition={{
              scale: {
                duration: currentPhaseData.duration,
                ease: "easeInOut"
              },
              opacity: { duration: 0.3 }
            }}
            className="w-64 h-64 rounded-full flex items-center justify-center relative"
            style={{
              background: "radial-gradient(circle, #B983FF40, #B983FF10)",
              border: "2px solid #B983FF60",
              boxShadow: "0 0 60px #B983FF30"
            }}
          >
            {/* Inner glow */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, #FFD5BA40, transparent)",
                filter: "blur(20px)"
              }}
            />

            {/* Timer */}
            <div className="relative z-10 text-center">
              <motion.div
                key={timeLeft}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl font-bold text-white mb-2"
              >
                {isActive ? timeLeft : ""}
              </motion.div>
              {!isActive && (
                <div className="text-4xl">🫁</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Instruction Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-[#FFD5BA] mb-2">
            {isActive ? currentPhaseData.name : "Siap Memulai?"}
          </h3>
          <p className="text-gray-300">
            {isActive ? currentPhaseData.instruction : "Temukan posisi nyaman dan ikuti ritme pernapasan"}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Action Buttons */}
      <div className="absolute bottom-24 left-6 right-6 space-y-3">
        {!isActive && cycleCount === 0 && (
          <button
            onClick={startBreathing}
            className="w-full bg-gradient-to-r from-[#B983FF] to-[#9b6ddb] text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Mulai Latihan
          </button>
        )}

        {!isActive && cycleCount > 0 && (
          <>
            <button
              onClick={startBreathing}
              className="w-full bg-gradient-to-r from-[#B983FF] to-[#9b6ddb] text-white font-bold py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Ulangi Latihan
            </button>
            <button
              onClick={onComplete}
              className="w-full bg-gradient-to-r from-[#FFD5BA] to-[#ffc4a3] text-[#1A1B41] font-bold py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              Saya Sudah Merasa Lebih Tenang
            </button>
          </>
        )}
      </div>
    </div>
  );
}
