import { Target, AlertTriangle, X } from "lucide-react";
import { SectionHeader } from "./ui/SectionHeader";
import { StatCard } from "./ui/StatCard";
import { InfoCard } from "./ui/InfoCard";
import { PosterData } from "../../data/posterData";

interface LeftColumnProps {
  data: PosterData["leftColumn"];
}

export function LeftColumn({ data }: LeftColumnProps) {
  const { title, subtitle, sdg, statistics, problems, userEnvironment } = data;

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Section Title */}
      <SectionHeader title={title} subtitle={subtitle} color="#ffc4a3" gradientFrom="from-[#ffc4a3]/20" />

      {/* SDG Theme */}
      <InfoCard borderColor="rgba(196, 181, 253, 0.2)">
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#c4b5fd] to-[#ffc4a3] rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-base text-[#c4b5fd] mb-1.5">{sdg.title}</h4>
            <div className="inline-block bg-[#c4b5fd]/20 px-3 py-1 rounded-lg border border-[#c4b5fd]/40">
              <p className="text-sm font-semibold text-[#c4b5fd]">{sdg.badge}</p>
            </div>
            <p className="text-xs text-gray-300 mt-2">{sdg.target}</p>
          </div>
        </div>
      </InfoCard>

      {/* Problem Statistics */}
      <InfoCard borderColor="rgba(255, 196, 163, 0.2)">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-5 h-5 text-[#ffc4a3]" />
          <h4 className="font-bold text-base text-[#ffc4a3]">Permasalahan</h4>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {statistics.map((stat, index) => (
            <StatCard key={index} value={stat.value} description={stat.description} />
          ))}
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-xs text-gray-400 mb-1">Titik Frustrasi Utama:</p>
          {problems.map((problem, i) => (
            <div key={i} className="flex items-center gap-2 bg-[#1a1f3a] p-2.5 rounded-lg">
              <X className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span className="text-xs text-gray-300">{problem.text}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      {/* Users & Environment */}
      <InfoCard borderColor="rgba(196, 181, 253, 0.2)">
        <h4 className="font-bold text-base text-[#c4b5fd] mb-3">Pengguna & Lingkungan</h4>

        <div className="space-y-3">
          {userEnvironment.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-2">
                <Icon className="w-4 h-4 text-[#ffc4a3] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-xs text-[#ffc4a3]">{item.label}</p>
                  <p className="text-xs text-gray-300 mt-0.5 leading-tight">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </InfoCard>
    </div>
  );
}