import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface InfoCardProps {
  icon?: LucideIcon;
  title?: string;
  children: ReactNode;
  borderColor?: string;
  bgColor?: string;
}

export function InfoCard({ icon: Icon, title, children, borderColor, bgColor }: InfoCardProps) {
  return (
    <div
      className={`${bgColor || 'bg-[#2a2f4a]'} rounded-xl p-4 border`}
      style={{ borderColor: borderColor || 'rgba(196, 181, 253, 0.2)' }}
    >
      {(Icon || title) && (
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon className="w-5 h-5" style={{ color: borderColor }} />}
          {title && <h4 className="font-bold text-base" style={{ color: borderColor }}>{title}</h4>}
        </div>
      )}
      {children}
    </div>
  );
}
