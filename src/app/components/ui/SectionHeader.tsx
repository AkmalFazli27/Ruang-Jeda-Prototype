interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  color: string;
  gradientFrom?: string;
}

export function SectionHeader({ title, subtitle, color, gradientFrom }: SectionHeaderProps) {
  return (
    <div className={`bg-gradient-to-br ${gradientFrom || 'from-[#ffc4a3]/20'} to-transparent p-1 rounded-xl`}>
      <div className="bg-[#2a2f4a] rounded-lg p-3">
        <h3 className="text-xl font-bold" style={{ color }}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
