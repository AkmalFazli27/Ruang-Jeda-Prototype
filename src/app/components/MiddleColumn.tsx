import { Layers, ArrowRight } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { InfoCard } from "./ui/InfoCard";
import { PosterData } from "../../data/posterData";

interface MiddleColumnProps {
  data: PosterData["middleColumn"];
}

export function MiddleColumn({ data }: MiddleColumnProps) {
  const { title, subtitle, designPerspective, hcdSteps, colorPalette } = data;

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Section Title */}
      <SectionHeader title={title} subtitle={subtitle} color="#c4b5fd" gradientFrom="from-[#c4b5fd]/20" />

      {/* Design Perspective */}
      <div className="bg-gradient-to-br from-[#ffc4a3]/10 via-[#c4b5fd]/10 to-transparent rounded-xl p-4 border border-[#ffc4a3]/20">
        <div className="flex items-center gap-2 mb-2">
          <Layers className="w-5 h-5 text-[#ffc4a3]" />
          <h4 className="font-bold text-base">Perspektif Desain</h4>
        </div>
        <div className="bg-[#1a1f3a] rounded-lg p-3 border-l-4 border-[#c4b5fd]">
          <p className="text-sm text-center">
            Dari <span className="text-red-400 line-through">{designPerspective.from}</span>
            {" "}menjadi{" "}
            <span className="text-[#c4b5fd] font-bold">{designPerspective.to}</span>
          </p>
        </div>
      </div>

      {/* HCD Process */}
      <InfoCard borderColor="rgba(196, 181, 253, 0.2)">
        <h4 className="font-bold text-base text-[#c4b5fd] mb-1">Pendekatan</h4>
        <p className="text-xs text-gray-400 mb-4">Human-Centered Design (HCD)</p>

        <div className="space-y-2">
          {hcdSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index}>
                <div className="bg-[#1a1f3a] rounded-lg p-3 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${step.color}20`, borderColor: `${step.color}40`, borderWidth: 1 }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: `${step.color}30`, color: step.color }}
                        >
                          {index + 1}
                        </div>
                        <h5 className="font-bold text-sm" style={{ color: step.color }}>{step.title}</h5>
                      </div>
                      <p className="text-xs text-gray-300 leading-tight">{step.description}</p>
                    </div>
                  </div>
                </div>

                {index < hcdSteps.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ArrowRight className="w-4 h-4 text-gray-600 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </InfoCard>

      {/* Color Palette */}
      <InfoCard borderColor="rgba(255, 196, 163, 0.2)">
        <h4 className="font-bold text-base text-[#ffc4a3] mb-2">Palet "Twilight Horizon"</h4>
        <p className="text-xs text-gray-400 mb-3 italic">Kesan: Empatik, pelukan hangat setelah hari panjang</p>

        <div className="space-y-2">
          {colorPalette.map((palette, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg border border-white/20"
                style={{ backgroundColor: palette.color }}
              ></div>
              <div>
                <p className="font-semibold text-xs">{palette.name}</p>
                <p className="text-[10px] text-gray-400">{palette.description}</p>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>
    </div>
  );
}