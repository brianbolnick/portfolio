import type { ExperienceEntry } from "~/data/experience";
import { cn } from "~/lib/cn";

interface CompanyLogoProps {
  entry: ExperienceEntry;
  size?: "sm" | "lg";
}

export function CompanyLogo({ entry, size = "sm" }: CompanyLogoProps) {
  const isLg = size === "lg";

  // Church logo is a full image with its own background
  if (entry.logoType === "image" && entry.logo) {
    return (
      <div
        className={cn(
          "rounded-2xl overflow-hidden shadow-lg",
          isLg
            ? "w-full aspect-[4/3] max-w-[400px]"
            : "w-16 h-16 md:w-20 md:h-20 shrink-0"
        )}
      >
        <img
          src={entry.logo}
          alt={entry.companyShort}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // SVG logo on colored background
  if (entry.logo) {
    return (
      <div
        className={cn(
          "rounded-2xl flex items-center justify-center overflow-hidden shadow-lg",
          isLg
            ? "w-full aspect-[4/3] max-w-[400px]"
            : "w-16 h-16 md:w-20 md:h-20 shrink-0"
        )}
        style={{ backgroundColor: entry.color }}
      >
        <img
          src={entry.logo}
          alt={entry.companyShort}
          className={cn(
            "object-contain",
            isLg ? "w-2/3 max-h-[55%]" : "w-3/5 max-h-[60%]"
          )}
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>
    );
  }

  // Fallback: initials on colored background
  return (
    <div
      className={cn(
        "rounded-2xl flex items-center justify-center overflow-hidden shadow-lg",
        isLg
          ? "w-full aspect-[4/3] max-w-[400px]"
          : "w-16 h-16 md:w-20 md:h-20 shrink-0"
      )}
      style={{ backgroundColor: entry.color }}
    >
      <span
        className={cn(
          "text-white font-display font-bold select-none",
          isLg ? "text-5xl" : "text-lg md:text-xl"
        )}
      >
        {entry.companyShort
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)}
      </span>
    </div>
  );
}
