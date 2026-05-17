import { Lock, Send } from "lucide-react";
import { PosterData } from "../../data/posterData";

interface MockupSafeSpaceProps {
  data: PosterData["mockups"]["safeSpace"];
}

export function MockupSafeSpace({ data }: MockupSafeSpaceProps) {
  const { messages, inputPlaceholder } = data;

  return (
    <div className="bg-gradient-to-br from-[#2a2f4a] to-[#1a1f3a] rounded-xl p-3 border border-[#ffc4a3]/30 shadow-lg">
      {/* Phone Header */}
      <div className="bg-[#1a1f3a] rounded-t-lg p-2 border-b border-[#ffc4a3]/20">
        <div className="flex items-center justify-between">
          <h6 className="font-bold text-[10px] text-[#ffc4a3]">Safe Space</h6>
          <div className="flex items-center gap-1 text-[8px] text-gray-400">
            <Lock className="w-3 h-3" />
            <span>Privat</span>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="bg-[#0f1220] p-2 space-y-2 min-h-[100px]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`rounded-md p-2 border max-w-[85%] ${
              message.isAI
                ? "bg-gradient-to-r from-[#c4b5fd]/20 to-[#ffc4a3]/20 border-[#c4b5fd]/30 ml-auto"
                : "bg-[#ffc4a3]/10 border-[#ffc4a3]/20"
            }`}
          >
            {message.isAI && (
              <p className="text-[9px] text-[#c4b5fd] font-semibold mb-0.5">✨ Ruang Jeda AI</p>
            )}
            <p className="text-[10px] text-gray-200 leading-tight">{message.text}</p>
          </div>
        ))}
      </div>

      {/* Input Field */}
      <div className="bg-[#1a1f3a] rounded-b-lg p-2 border-t border-[#ffc4a3]/20">
        <div className="flex items-center gap-2 bg-[#0f1220] rounded-md p-1.5 border border-[#ffc4a3]/20">
          <input
            type="text"
            placeholder={inputPlaceholder}
            className="flex-1 bg-transparent text-[9px] text-gray-300 outline-none placeholder-gray-500"
            disabled
          />
          <Send className="w-3 h-3 text-[#ffc4a3]" />
        </div>
      </div>
    </div>
  );
}