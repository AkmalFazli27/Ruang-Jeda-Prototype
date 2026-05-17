import { Calendar, Clock, User, CheckCircle, ArrowRight } from "lucide-react";
import { PosterData } from "../../data/posterData";

interface MockupBKMRoutingProps {
  data: PosterData["mockups"]["bkmRouting"];
}

export function MockupBKMRouting({ data }: MockupBKMRoutingProps) {
  const { infoText, processNote, counselorTitle, counselorSubtitle, schedule, duration, buttonText } = data;

  return (
    <div className="bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] rounded-xl p-3 border border-[#ffc4a3]/30 shadow-lg">
      {/* Phone Header */}
      <div className="bg-[#1a1f3a] rounded-t-lg p-2 border-b border-[#ffc4a3]/20">
        <div className="flex items-center justify-between">
          <h6 className="font-bold text-[10px] text-[#ffc4a3]">Rujukan BKM</h6>
          <div className="bg-green-500/20 px-2 py-0.5 rounded-full border border-green-400/30">
            <span className="text-[8px] text-green-400 font-semibold">Tersedia</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#0f1220] p-2 space-y-2">
        {/* Info Card */}
        <div className="bg-gradient-to-br from-[#ffc4a3]/10 to-[#c4b5fd]/10 rounded-md p-2 border border-[#ffc4a3]/30">
          <p className="text-[9px] text-gray-200 mb-1.5 leading-tight">{infoText}</p>
          <div className="flex items-center gap-1 text-[8px] text-[#c4b5fd]">
            <CheckCircle className="w-3 h-3" />
            <span>{processNote}</span>
          </div>
        </div>

        {/* Counselor Info */}
        <div className="bg-[#1a1f3a] rounded-md p-2 border border-[#c4b5fd]/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#c4b5fd] to-[#ffc4a3] rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-[10px] text-white">{counselorTitle}</p>
              <p className="text-[8px] text-gray-400">{counselorSubtitle}</p>
            </div>
          </div>

          <div className="space-y-1 text-[9px]">
            <div className="flex items-center gap-1 text-gray-300">
              <Calendar className="w-3 h-3 text-[#ffc4a3]" />
              <span>{schedule}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-300">
              <Clock className="w-3 h-3 text-[#ffc4a3]" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-[#ffc4a3] to-[#c4b5fd] hover:from-[#ffc4a3]/90 hover:to-[#c4b5fd]/90 text-white font-bold py-1.5 rounded transition-all shadow text-[9px] flex items-center justify-center gap-1 group">
          <span>{buttonText}</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}