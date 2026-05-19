import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "./GlassCard";
import { Music, Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { playlists } from "../../../data/ruangJedaData";

interface Screen4MusicProps {
  onContinue: () => void;
}

export function Screen4Music({ onContinue }: Screen4MusicProps) {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentPlaylist = playlists.find(p => p.id === selectedPlaylist);

  return (
    <div className="min-h-full flex flex-col p-6 pb-32">
      {/* Header */}
      <div className="mb-6 mt-4">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-6 h-6 text-[#B983FF]" />
          <h2 className="text-2xl font-bold text-white">Musik untuk Fokus & Ketenangan</h2>
        </div>
        <p className="text-gray-400">
          Pilih playlist yang sesuai dengan suasana hatimu
        </p>
      </div>

      {/* Playlist Cards */}
      <div className="flex-1 space-y-4 mb-6">
        {playlists.map((playlist) => (
          <motion.div
            key={playlist.id}
            whileTap={{ scale: 0.98 }}
          >
            <GlassCard
              className={`cursor-pointer transition-all ${
                selectedPlaylist === playlist.id
                  ? "border-[#B983FF] bg-white/10"
                  : "hover:bg-white/8"
              }`}
              borderColor={selectedPlaylist === playlist.id ? "#B983FF" : "#B983FF"}
            >
              <div
                className="flex items-center gap-4"
                onClick={() => {
                  setSelectedPlaylist(playlist.id);
                  setIsPlaying(true);
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#B983FF]/30 to-[#FFD5BA]/30 rounded-xl flex items-center justify-center text-3xl">
                  {playlist.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">{playlist.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{playlist.subtitle}</p>
                  <p className="text-[#B983FF] text-xs">{playlist.duration}</p>
                </div>
                {selectedPlaylist === playlist.id && isPlaying && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex gap-0.5"
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: ["8px", "24px", "8px"]
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                        className="w-1 bg-[#B983FF] rounded-full"
                      />
                    ))}
                  </motion.div>
                )}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Mini Player */}
      {selectedPlaylist && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-20 left-6 right-6"
        >
          <GlassCard borderColor="#B983FF" className="bg-[#1A1B41]/90 backdrop-blur-2xl">
            {/* Waveform visualization */}
            <div className="flex items-center justify-center gap-1 mb-4 h-12">
              {Array.from({ length: 40 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying
                      ? [`${Math.random() * 20 + 10}px`, `${Math.random() * 40 + 10}px`, `${Math.random() * 20 + 10}px`]
                      : "8px"
                  }}
                  transition={{
                    duration: 0.5 + Math.random() * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 bg-gradient-to-t from-[#B983FF] to-[#FFD5BA] rounded-full"
                />
              ))}
            </div>

            {/* Now Playing Info */}
            <div className="text-center mb-4">
              <h4 className="text-white font-semibold text-sm mb-1">
                {currentPlaylist?.title}
              </h4>
              <p className="text-gray-400 text-xs">{currentPlaylist?.subtitle}</p>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipBack className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 bg-gradient-to-r from-[#B983FF] to-[#9b6ddb] rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 active:scale-95"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
              </button>

              <button className="text-gray-400 hover:text-white transition-colors">
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-3 mt-4">
              <Volume2 className="w-4 h-4 text-gray-400" />
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-[#B983FF] to-[#FFD5BA]" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      )}

      {/* Continue Button (only show when music is playing) */}
      {selectedPlaylist && (
        <button
          onClick={onContinue}
          className="fixed bottom-[340px] left-6 right-6 bg-gradient-to-r from-[#FFD5BA] to-[#ffc4a3] text-[#1A1B41] font-bold py-3 rounded-2xl shadow-lg transition-all hover:shadow-xl"
        >
          Lanjutkan
        </button>
      )}
    </div>
  );
}
