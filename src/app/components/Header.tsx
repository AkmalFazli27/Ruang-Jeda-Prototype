import { IconBox } from "./ui/IconBox";
import { HeaderData } from "../../data/posterData";

interface HeaderProps {
  data: HeaderData;
}

export function Header({ data }: HeaderProps) {
  const { logos, teamInfo, title, subtitle, tagline } = data;

  return (
    <header className="bg-gradient-to-r from-[#2a2f4a] to-[#1a1f3a] rounded-2xl p-6 border border-[#ffc4a3]/20 flex-shrink-0">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-4">
          {logos.map((logo, index) => (
            <IconBox
              key={index}
              icon={logo.icon}
              color={logo.color}
              bgColor={logo.bgColor}
              borderColor={logo.borderColor}
              size="lg"
            />
          ))}
        </div>
        <div className="text-right text-sm text-gray-300">
          <p className="text-[#ffc4a3] font-semibold text-lg">{teamInfo.teamName}</p>
          <p>{teamInfo.members.join(" | ")}</p>
          <p>Dosen Pembimbing: {teamInfo.advisor}</p>
          <p className="text-[#c4b5fd] font-medium">{teamInfo.institution}</p>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#ffc4a3] via-[#c4b5fd] to-[#ffc4a3] bg-clip-text text-transparent leading-tight tracking-wide">
          {title}
        </h1>
        <h2 className="text-2xl font-semibold text-[#c4b5fd]">
          {subtitle}
        </h2>
        <p className="text-lg text-[#ffc4a3]/80 font-medium">
          {tagline}
        </p>
      </div>
    </header>
  );
}