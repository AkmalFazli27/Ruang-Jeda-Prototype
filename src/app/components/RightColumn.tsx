import { Sparkles } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { MockupSafeSpace } from "./MockupSafeSpace";
import { MockupAITriage } from "./MockupAITriage";
import { MockupBKMRouting } from "./MockupBKMRouting";
import { PosterData } from "../../data/posterData";

interface RightColumnProps {
  data: PosterData["rightColumn"];
  mockupData: PosterData["mockups"];
}

export function RightColumn({ data, mockupData }: RightColumnProps) {
  const { title, subtitle, sectionTitle, features } = data;

  const getMockupComponent = (mockupType: string) => {
    switch (mockupType) {
      case "safeSpace":
        return <MockupSafeSpace data={mockupData.safeSpace} />;
      case "aiTriage":
        return <MockupAITriage data={mockupData.aiTriage} />;
      case "bkmRouting":
        return <MockupBKMRouting data={mockupData.bkmRouting} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Section Title */}
      <SectionHeader title={title} subtitle={subtitle} color="#ffc4a3" gradientFrom="from-[#ffc4a3]/20" />

      <div className="bg-gradient-to-br from-[#c4b5fd]/5 to-[#ffc4a3]/5 rounded-xl p-4 border border-[#c4b5fd]/20 flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 mb-4 shrink-0">
          <Sparkles className="w-5 h-5 text-[#c4b5fd]" />
          <h4 className="text-lg font-bold text-[#c4b5fd]">{sectionTitle}</h4>
        </div>

        <div className="flex flex-col gap-2 overflow-hidden flex-1">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex flex-col h-full">
                <div className="flex items-start gap-2 mb-2 shrink-0">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0"
                    style={{
                      backgroundColor: `${feature.color}20`,
                      borderColor: `${feature.color}40`
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-0.5" style={{ color: feature.color }}>
                      {feature.title}
                    </h5>
                    <p className="text-xs text-gray-300 leading-tight">
                      <span className="font-semibold" style={{ color: feature.color }}>
                        {feature.highlightText}
                      </span>{" "}
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="flex-1">{getMockupComponent(feature.mockupType)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}