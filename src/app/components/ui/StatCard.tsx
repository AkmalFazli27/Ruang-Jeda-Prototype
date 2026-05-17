interface StatCardProps {
  value: string;
  description: string;
  color?: string;
}

export function StatCard({ value, description, color = "#ffc4a3" }: StatCardProps) {
  return (
    <div
      className="bg-gradient-to-br to-transparent p-3 rounded-lg border"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${color}10, transparent)`,
        borderColor: `${color}30`
      }}
    >
      <div className="text-3xl font-bold mb-1" style={{ color }}>
        {value}
      </div>
      <div className="text-xs text-gray-300 leading-tight">{description}</div>
    </div>
  );
}
