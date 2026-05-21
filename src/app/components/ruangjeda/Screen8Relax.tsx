import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Wind, Music, Sparkles } from "lucide-react";

interface Screen8RelaxProps {
  onStartBreathing: () => void;
  onStartMusic: () => void;
}

export function Screen8Relax({ onStartBreathing, onStartMusic }: Screen8RelaxProps) {
  return (
    <div className="min-h-full flex flex-col p-6 pb-24">
      <div className="mb-6 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-[#B983FF]" />
          <h1 className="text-2xl font-bold text-white">Relaksasi</h1>
        </div>
        <p className="text-[#FFD5BA] text-sm">
          Akses cepat ke napas dan musik tanpa perlu menulis jurnal.
        </p>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <motion.div whileTap={{ scale: 0.98 }}>
          <GlassCard className="cursor-pointer" borderColor="#FFD5BA">
            <button onClick={onStartBreathing} className="w-full text-left flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFD5BA]/15 flex items-center justify-center shrink-0">
                <Wind className="w-7 h-7 text-[#FFD5BA]" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white mb-1">Napas 4-7-8</h2>
                <p className="text-sm text-gray-400">
                  Mulai sesi napas untuk menenangkan diri.
                </p>
              </div>
            </button>
          </GlassCard>
        </motion.div>

        <motion.div whileTap={{ scale: 0.98 }}>
          <GlassCard className="cursor-pointer" borderColor="#B983FF">
            <button onClick={onStartMusic} className="w-full text-left flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#B983FF]/15 flex items-center justify-center shrink-0">
                <Music className="w-7 h-7 text-[#B983FF]" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-white mb-1">Musik</h2>
                <p className="text-sm text-gray-400">
                  Pilih playlist relaksasi yang paling cocok untuk suasana hatimu.
                </p>
              </div>
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}

export default Screen8Relax;