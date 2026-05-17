import { Activity } from "lucide-react";
import { PosterData } from "../../data/posterData";

interface MockupAITriageProps {
  data: PosterData["mockups"]["aiTriage"];
}

export function MockupAITriage({ data }: MockupAITriageProps) {
  const { tier, percentage, recommendations } = data;

  return (
    <div className="bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] rounded-xl p-3 border border-[#c4b5fd]/30 shadow-lg">
      {/* Phone Header */}
      <div className="bg-[#1a1f3a] rounded-t-lg p-2 border-b border-[#c4b5fd]/20">
        <div className="flex items-center justify-between">
          <h6 className="font-bold text-[10px] text-[#c4b5fd]">Analisis AI</h6>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[8px] text-gray-400">Aktif</span>
          </div>
        </div>
      </div>

      {/* Analysis Result */}
      <div className="bg-[#0f1220] p-2 space-y-2">
        {/* Sentiment Badge */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-md p-2 border border-yellow-500/30">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-yellow-400" />
            <div>
              <p className="text-[8px] text-yellow-300 font-semibold">Tier Krisis Terdeteksi</p>
              <p className="text-xs font-bold text-yellow-400">{tier}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <div className="flex-1 bg-[#1a1f3a] rounded-full h-1">
              <div
                className="bg-gradient-to-r from-yellow-400 to-orange-400 h-1 rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <span className="text-[8px] text-gray-400">{percentage}%</span>
          </div>
        </div>

        {/* Recommendations */}
        <div className="space-y-1.5">
          <p className="text-[9px] font-semibold text-[#c4b5fd]">Rekomendasi Intervensi:</p>

          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div
                key={index}
                className="rounded-md p-2 border"
                style={{
                  backgroundColor: `${rec.color}10`,
                  borderColor: `${rec.color}30`
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-3 h-3" style={{ color: rec.color }} />
                  <p className="font-semibold text-[9px]" style={{ color: rec.color }}>
                    {rec.title}
                  </p>
                </div>
                {rec.buttonText ? (
                  <button
                    className="mt-1 ml-5 hover:opacity-90 px-2 py-1 rounded text-[8px] font-semibold border transition-colors"
                    style={{
                      backgroundColor: `${rec.color}20`,
                      color: rec.color,
                      borderColor: `${rec.color}40`
                    }}
                  >
                    {rec.buttonText}
                  </button>
                ) : (
                  <div className="flex gap-1 mt-1 ml-5">
                    <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: rec.color }}></div>
                    <div className="w-3 h-0.5 rounded-full" style={{ backgroundColor: `${rec.color}80` }}></div>
                    <div className="w-2 h-0.5 rounded-full" style={{ backgroundColor: `${rec.color}50` }}></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}