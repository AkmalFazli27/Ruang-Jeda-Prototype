import { useState } from "react";
import { GlassCard } from "./GlassCard";
import { Sparkles, FileText } from "lucide-react";
import { motion } from "motion/react";

interface Screen1HomeProps {
  onSubmit: (text: string) => void;
}

export function Screen1Home({ onSubmit }: Screen1HomeProps) {
  const [journalText, setJournalText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalText(e.target.value);
  };

  const handleSubmit = () => {
    const plainText = journalText.trim();
    if (plainText) {
      onSubmit(plainText);
    }
  };

  const wordCount = journalText.trim() ? journalText.trim().split(/\s+/).length : 0;
  const hasContent = journalText.trim().length > 0;

  return (
    <div className="min-h-full flex flex-col p-6 pb-24">
      {/* Header */}
      <div className="mb-6 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-[#B983FF]" />
          <h1 className="text-2xl font-bold text-white">Ruang Jeda</h1>
        </div>
        <p className="text-[#FFD5BA] text-lg leading-relaxed">
          Selamat malam, Raka.<br />
          Apa yang sedang mengganggu pikiranmu?
        </p>
      </div>

      {/* Plain Textarea Card */}
      <GlassCard className="flex-1 flex flex-col min-h-0">
        <textarea
          value={journalText}
          onChange={handleTextChange}
          placeholder="Ketikkan apa pun di sini, kami mendengarkan..."
          className="flex-1 w-full bg-transparent outline-none resize-none text-base leading-relaxed text-white placeholder:text-gray-400 overflow-y-auto"
          style={{ scrollbarWidth: 'none' }}
        />

        {/* Word Counter */}
        {hasContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 mt-3 pt-3 border-t border-white/10 text-xs text-gray-400"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{wordCount} kata</span>
          </motion.div>
        )}
      </GlassCard>

      {/* Quick Tips */}
      {!hasContent && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 grid grid-cols-2 gap-3"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-3 border border-[#B983FF]/10">
            <p className="text-xs text-[#B983FF] font-semibold mb-1">💡 Tips</p>
            <p className="text-xs text-gray-400">Tulis apa saja yang kamu rasakan, tanpa filter</p>
          </div>
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-3 border border-[#FFD5BA]/10">
            <p className="text-xs text-[#FFD5BA] font-semibold mb-1">🌙 Suasana</p>
            <p className="text-xs text-gray-400">Nikmati ketenangan malam ini</p>
          </div>
        </motion.div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={!hasContent}
        className="mt-6 w-full bg-gradient-to-r from-[#FFD5BA] to-[#ffc4a3] text-[#1A1B41] font-bold py-4 rounded-2xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
      >
        Jeda Sejenak
      </button>

      {/* Privacy note */}
      <p className="text-center text-gray-500 text-xs mt-4">
        🔒 Curhatanmu 100% dianonimkan oleh AI dan tidak akan dikirim ke BKM tanpa persetujuanmu.
      </p>
    </div>
  );
}
