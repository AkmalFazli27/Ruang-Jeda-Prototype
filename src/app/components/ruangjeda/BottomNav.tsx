import { Home, Clock, User } from "lucide-react";

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "history", icon: Clock, label: "Riwayat" },
    { id: "profile", icon: User, label: "Profil" }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1B41]/80 backdrop-blur-xl border-t border-[#B983FF]/10">
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center gap-1 transition-all ${
                  isActive ? "text-[#B983FF]" : "text-gray-400"
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
