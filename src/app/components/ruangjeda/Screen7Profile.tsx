import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Switch } from "../ui/switch";
import { motion } from "motion/react";
import {
  User,
  Mail,
  BookOpen,
  Wind,
  Music,
  Bell,
  Moon,
  Volume2,
} from "lucide-react";

interface JournalEntry {
  id: number;
  text: string;
  tier: string;
  timestamp: Date;
}

interface Screen7ProfileProps {
  journalEntries: JournalEntry[];
}

export function Screen7Profile({ journalEntries }: Screen7ProfileProps) {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [ambientSound, setAmbientSound] = useState(false);

  const totalJournalEntries = journalEntries.length;
  const breathingSessions = 5;
  const musicSessions = 12;

  return (
    <div className="min-h-screen flex flex-col p-6 pb-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6 mt-4"
      >
        <h1 className="text-2xl font-bold text-white">Profil</h1>
        <p className="text-[#FFD5BA] text-sm mt-1">
          Informasi akun dan pengaturan
        </p>
      </motion.div>

      {/* Section 1 - User Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GlassCard className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-[#B983FF]" />
            Profil Pengguna
          </h2>

          <div className="flex flex-col items-center">
            {/* Avatar Circle */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B983FF] to-[#FFD5BA] flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-[#1A1B41]" />
            </div>

            {/* Name */}
            <h3 className="text-xl font-bold text-white mb-1">Raka</h3>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>raka@student.undip.ac.id</span>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Section 2 - Usage Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GlassCard className="mb-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#B983FF]" />
            Statistik Penggunaan
          </h2>

          <div className="grid grid-cols-3 gap-4">
            {/* Journal Entries */}
            <div className="flex flex-col items-center bg-white/5 rounded-xl p-4 border border-white/10">
              <BookOpen className="w-6 h-6 text-[#B983FF] mb-2" />
              <span className="text-2xl font-bold text-white">
                {totalJournalEntries}
              </span>
              <span className="text-xs text-gray-400 text-center mt-1">
                Jurnal
              </span>
            </div>

            {/* Breathing Sessions */}
            <div className="flex flex-col items-center bg-white/5 rounded-xl p-4 border border-white/10">
              <Wind className="w-6 h-6 text-[#FFD5BA] mb-2" />
              <span className="text-2xl font-bold text-white">
                {breathingSessions}
              </span>
              <span className="text-xs text-gray-400 text-center mt-1">
                Nafas
              </span>
            </div>

            {/* Music Sessions */}
            <div className="flex flex-col items-center bg-white/5 rounded-xl p-4 border border-white/10">
              <Music className="w-6 h-6 text-[#B983FF] mb-2" />
              <span className="text-2xl font-bold text-white">
                {musicSessions}
              </span>
              <span className="text-xs text-gray-400 text-center mt-1">
                Musik
              </span>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Section 3 - Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <GlassCard>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Moon className="w-5 h-5 text-[#B983FF]" />
            Pengaturan Aplikasi
          </h2>

          <div className="flex flex-col gap-4">
            {/* Notification Toggle */}
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Bell className="w-4 h-4 text-[#FFD5BA]" />
                </div>
                <span className="text-white text-sm">
                  Notifikasi Pengingat
                </span>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Moon className="w-4 h-4 text-[#B983FF]" />
                </div>
                <span className="text-white text-sm">Mode Gelap</span>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>

            {/* Ambient Sound Toggle */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Volume2 className="w-4 h-4 text-[#FFD5BA]" />
                </div>
                <span className="text-white text-sm">Suara Ambient</span>
              </div>
              <Switch
                checked={ambientSound}
                onCheckedChange={setAmbientSound}
              />
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}

export default Screen7Profile;
