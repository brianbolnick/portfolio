import { motion } from "framer-motion";
import { GlowCard } from "~/components/ui/GlowCard";
import { CompanyLogo } from "./CompanyLogo";
import type { ExperienceEntry } from "~/data/experience";
import { formatDate, getDateRange } from "~/data/experience";

interface TimelineLargeEntryProps {
  entry: ExperienceEntry;
  index: number;
}

export function TimelineLargeEntry({ entry, index }: TimelineLargeEntryProps) {
  const isEven = index % 2 === 0;
  const hasPromotion = entry.roles.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center mb-24 last:mb-0`}
    >
      {/* Large company logo */}
      <div className="w-full md:w-1/2 flex justify-center">
        <CompanyLogo entry={entry} size="lg" />
      </div>

      {/* Role details */}
      <div className="w-full md:w-1/2">
        <GlowCard>
          <p className="font-mono text-sm text-text-tertiary tracking-wider mb-2">
            {getDateRange(entry)}
          </p>
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-2xl font-bold text-text-primary hover:text-accent transition-colors"
          >
            {entry.company}
          </a>

          <div className="mt-4 space-y-3">
            {entry.roles.map((role, i) => (
              <div key={role.title}>
                {i > 0 && hasPromotion && (
                  <div className="inline-flex items-center gap-1 bg-accent-muted text-accent text-xs font-mono px-2 py-0.5 rounded-full mb-2">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    Promoted
                  </div>
                )}
                <p
                  className={
                    i === 0
                      ? "text-xl font-semibold text-text-primary"
                      : "text-lg text-text-secondary"
                  }
                >
                  {role.title}
                </p>
                {entry.roles.length > 1 && (
                  <p className="font-mono text-xs text-text-tertiary mt-1">
                    {formatDate(role.startDate)} — {formatDate(role.endDate)}
                  </p>
                )}
              </div>
            ))}
          </div>
        </GlowCard>
      </div>
    </motion.div>
  );
}
