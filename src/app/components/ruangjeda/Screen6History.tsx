import { GlassCard } from "./GlassCard";
import { BookOpen, Clock, TrendingUp, BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export type Tier = "tier1" | "tier2" | "tier3";

export interface JournalEntry {
  id: number;
  text: string;
  tier: Tier;
  timestamp: Date;
}

interface Screen6HistoryProps {
  journalEntries: JournalEntry[];
}

const TIER_CONFIG: Record<Tier, { label: string; emoji: string; color: string; value: number }> = {
  tier1: { label: "Ringan", emoji: "🟢", color: "#22c55e", value: 1 },
  tier2: { label: "Sedang", emoji: "🟡", color: "#eab308", value: 2 },
  tier3: { label: "Tinggi", emoji: "🔴", color: "#ef4444", value: 3 },
};

function formatDateIndonesian(date: Date): string {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
    "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
  ];
  const d = date.getDate();
  const m = months[date.getMonth()];
  const y = date.getFullYear();
  const h = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  return `${d} ${m} ${y}, ${h}:${min}`;
}

function truncateText(text: string, maxLength: number = 50): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

function buildLineData(entries: JournalEntry[]) {
  return entries
    .slice()
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    .map((entry) => ({
      date: formatDateIndonesian(entry.timestamp),
      anxiety: TIER_CONFIG[entry.tier].value,
    }));
}

function buildBarData(entries: JournalEntry[]) {
  const counts: Record<Tier, number> = { tier1: 0, tier2: 0, tier3: 0 };
  entries.forEach((entry) => {
    counts[entry.tier]++;
  });
  return [
    { label: "Ringan", count: counts.tier1, fill: TIER_CONFIG.tier1.color },
    { label: "Sedang", count: counts.tier2, fill: TIER_CONFIG.tier2.color },
    { label: "Tinggi", count: counts.tier3, fill: TIER_CONFIG.tier3.color },
  ];
}

export default function Screen6History({ journalEntries }: Screen6HistoryProps) {
  const lineData = buildLineData(journalEntries);
  const barData = buildBarData(journalEntries);

  return (
    <div className="min-h-screen flex flex-col p-6 pb-24">
      <div className="mb-6 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <BookOpen className="w-6 h-6 text-[#B983FF]" />
          <h1 className="text-2xl font-bold text-white">Riwayat Jurnal</h1>
        </div>
        <p className="text-[#FFD5BA] text-sm">
          Lihat kembali perjalanan emosimu.
        </p>
      </div>

      {journalEntries.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex flex-col items-center justify-center py-16"
        >
          <GlassCard className="text-center max-w-sm">
            <Clock className="w-16 h-16 text-[#B983FF] mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Belum ada jurnal
            </h3>
            <p className="text-gray-400 text-sm">
              Mulai tulis jurnal pertamamu untuk melihat riwayat dan statistik kecemasan.
            </p>
          </GlassCard>
        </motion.div>
      )}

      {journalEntries.length > 0 && (
        <div className="flex flex-col gap-6 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-[#B983FF]" />
                <h2 className="text-lg font-semibold text-white">
                  Statistik Kecemasan
                </h2>
              </div>

              <div className="mb-6">
                <p className="text-xs text-gray-400 mb-2">Tren Kecemasan</p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis
                      dataKey="date"
                      stroke="#9CA3AF"
                      fontSize={10}
                      tick={{ fill: "#9CA3AF" }}
                      interval="preserveStartEnd"
                    />
                    <YAxis
                      stroke="#9CA3AF"
                      fontSize={10}
                      domain={[0, 3]}
                      ticks={[1, 2, 3]}
                      tickFormatter={(v: number) => {
                        if (v === 1) return "Ringan";
                        if (v === 2) return "Sedang";
                        if (v === 3) return "Tinggi";
                        return "";
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A1B41",
                        border: "1px solid rgba(185,131,255,0.2)",
                        borderRadius: "12px",
                        color: "#fff",
                      }}
                      labelStyle={{ color: "#B983FF" }}
                      formatter={(value: number) => {
                        if (value === 1) return ["Ringan", "Tingkat"];
                        if (value === 2) return ["Sedang", "Tingkat"];
                        if (value === 3) return ["Tinggi", "Tingkat"];
                        return [value, "Tingkat"];
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="anxiety"
                      stroke="#B983FF"
                      strokeWidth={2}
                      dot={{ fill: "#B983FF", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">Distribusi Tier</p>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="label" stroke="#9CA3AF" fontSize={10} tick={{ fill: "#9CA3AF" }} />
                    <YAxis stroke="#9CA3AF" fontSize={10} allowDecimals={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1A1B41",
                        border: "1px solid rgba(185,131,255,0.2)",
                        borderRadius: "12px",
                        color: "#fff",
                      }}
                      labelStyle={{ color: "#B983FF" }}
                      formatter={(value: number) => [`${value} jurnal`, "Jumlah"]}
                    />
                    <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                      {barData.map((entry, index) => (
                        <cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-[#B983FF]" />
                <h2 className="text-lg font-semibold text-white">
                  Entri Jurnal
                </h2>
                <span className="ml-auto text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                  {journalEntries.length} entri
                </span>
              </div>

              <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto pr-1">
                {journalEntries
                  .slice()
                  .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
                  .map((entry, index) => {
                    const tier = TIER_CONFIG[entry.tier];
                    return (
                      <motion.div
                        key={entry.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#B983FF]/30 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm leading-relaxed break-words">
                              {truncateText(entry.text)}
                            </p>
                          </div>
                          <span
                            className="shrink-0 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap"
                            style={{
                              backgroundColor: `${tier.color}20`,
                              color: tier.color,
                              border: `1px solid ${tier.color}40`,
                            }}
                          >
                            {tier.emoji} {tier.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{formatDateIndonesian(entry.timestamp)}</span>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      )}
    </div>
  );
}
