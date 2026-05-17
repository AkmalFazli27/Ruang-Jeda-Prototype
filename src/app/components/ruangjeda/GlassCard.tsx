import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
}

export function GlassCard({ children, className = "", borderColor = "#B983FF" }: GlassCardProps) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl rounded-2xl border p-6 ${className}`}
      style={{ borderColor: `${borderColor}20` }}
    >
      {children}
    </div>
  );
}
