import { Home, Clock, User, Sparkles, Phone } from "lucide-react";

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "relax", icon: Sparkles, label: "Relaksasi" },
    { id: "counseling", icon: Phone, label: "Konseling" },
    { id: "history", icon: Clock, label: "Riwayat" },
    { id: "profile", icon: User, label: "Profil" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1B41]/80 backdrop-blur-xl border-t border-[#B983FF]/10">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="grid grid-cols-5 gap-2 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center gap-1 rounded-2xl px-2 py-2 transition-all ${
                  isActive
                    ? "text-[#B983FF] bg-white/5 shadow-[0_0_0_1px_rgba(185,131,255,0.18)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "scale-110" : ""}`} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
