import { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  size?: "sm" | "md" | "lg";
}

export function IconBox({ icon: Icon, color, bgColor, borderColor, size = "md" }: IconBoxProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  return (
    <div
      className={`${sizeClasses[size]} ${bgColor || 'bg-gray-500/10'} rounded-lg flex items-center justify-center border ${borderColor || 'border-gray-500/30'}`}
    >
      <Icon className={`${iconSizeClasses[size]}`} style={{ color: color || '#fff' }} />
    </div>
  );
}
