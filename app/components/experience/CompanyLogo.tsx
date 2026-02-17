import type { ExperienceEntry } from "~/data/experience";

interface CompanyLogoProps {
  entry: ExperienceEntry;
}

export function CompanyLogo({ entry }: CompanyLogoProps) {
  return (
    <div
      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-sm"
      style={{ backgroundColor: entry.color }}
    >
      <span className="text-white font-display font-bold text-lg md:text-xl select-none">
        {getInitials(entry.companyShort)}
      </span>
    </div>
  );
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
