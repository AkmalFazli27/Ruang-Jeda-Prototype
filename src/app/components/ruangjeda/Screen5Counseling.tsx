import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Heart, Shield, Calendar, Clock, Phone } from "lucide-react";

interface Screen5CounselingProps {
  onConnect: () => void;
  onBackHome: () => void;
}

export function Screen5Counseling({ onConnect, onBackHome }: Screen5CounselingProps) {
  return (
    <div className="min-h-screen flex flex-col p-6 pb-24">
      {/* Header */}
      <div className="mb-8 mt-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#FFD5BA]/30 to-[#B983FF]/30 rounded-full flex items-center justify-center"
        >
          <Heart className="w-10 h-10 text-[#FFD5BA]" />
        </motion.div>

        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Kamu Tidak Sendirian
        </h2>
        <p className="text-gray-400 text-center">
          Tim BKM Undip siap mendengarkan ceritamu
        </p>
      </div>

      {/* Empathy Card */}
      <GlassCard className="mb-6" borderColor="#FFD5BA">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-12 h-12 bg-[#FFD5BA]/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-[#FFD5BA]" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              Sepertinya bebanmu cukup berat malam ini
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Kami memahami betapa beratnya menjalani hari dengan berbagai tekanan akademik.
              Tim konselor profesional BKM Undip siap mendengarkan dan membantumu melewati masa sulit ini.
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Counselor Availability */}
      <GlassCard className="mb-6" borderColor="#B983FF">
        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-[#B983FF]" />
          Konselor Tersedia
        </h4>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#B983FF] to-[#FFD5BA] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">DR</span>
            </div>
            <div className="flex-1">
              <h5 className="text-white font-semibold">Dr. Sarah Widiastuti, M.Psi</h5>
              <p className="text-gray-400 text-sm mb-2">Psikolog Klinis BKM</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-[#FFD5BA]" />
                  <span>Besok, 10:00 - 11:00 WIB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-[#FFD5BA]" />
                  <span>Sesi Online/Offline</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/10">
          <p className="text-xs text-gray-400 flex items-start gap-2">
            <Shield className="w-4 h-4 text-[#B983FF] flex-shrink-0 mt-0.5" />
            <span>
              <span className="text-[#B983FF] font-semibold">Jaminan Privasi:</span> Data identitasmu hanya akan dibuka untuk konselor BKM setelah kamu menekan tombol "Hubungi BKM". Semua percakapan bersifat rahasia dan dijaga kerahasiaannya.
            </span>
          </p>
        </div>
      </GlassCard>

      {/* What to Expect */}
      <GlassCard className="mb-6">
        <h4 className="text-white font-bold mb-3">Yang Akan Kamu Dapatkan:</h4>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[#B983FF]">✓</span>
            <span>Konsultasi privat dengan psikolog profesional</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B983FF]">✓</span>
            <span>Ruang aman untuk berbagi cerita tanpa judgement</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B983FF]">✓</span>
            <span>Strategi coping yang disesuaikan dengan kondisimu</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B983FF]">✓</span>
            <span>Follow-up berkelanjutan jika diperlukan</span>
          </li>
        </ul>
      </GlassCard>

      {/* Action Buttons */}
      <div className="space-y-3 mt-auto">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={onConnect}
          className="w-full bg-gradient-to-r from-[#FFD5BA] to-[#ffc4a3] text-[#1A1B41] font-bold py-4 rounded-2xl shadow-lg transition-all hover:shadow-xl flex items-center justify-center gap-2"
        >
          <Phone className="w-5 h-5" />
          Hubungi BKM (Satu Klik)
        </motion.button>

        <button
          onClick={onBackHome}
          className="w-full bg-white/5 backdrop-blur-xl text-white font-semibold py-3 rounded-2xl border border-white/10 transition-all hover:bg-white/10"
        >
          Kembali ke Beranda
        </button>
      </div>

      {/* Emergency Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-center"
      >
        <p className="text-xs text-gray-500 mb-2">Dalam kondisi darurat?</p>
        <a
          href="tel:119"
          className="text-[#f87171] font-semibold text-sm underline"
        >
          Hubungi Hotline Krisis 119
        </a>
      </motion.div>
    </div>
  );
}
