import { motion } from "framer-motion";
import { GlowCard } from "~/components/ui/GlowCard";
import { CompanyLogo } from "./CompanyLogo";
import type { ExperienceEntry } from "~/data/experience";
import { formatDate, getDateRange } from "~/data/experience";

interface TimelineEntryProps {
  entry: ExperienceEntry;
  index: number;
  total: number;
}

export function TimelineEntry({ entry, index, total }: TimelineEntryProps) {
  const isLeft = index % 2 === 0;
  const hasPromotion = entry.roles.length > 1;

  return (
    <div className="relative grid grid-cols-[40px_1fr] md:grid-cols-[1fr_40px_1fr] gap-0 md:gap-8">
      {/* Left card (desktop only) */}
      <div className="hidden md:flex justify-end">
        {isLeft && (
          <CardContent
            entry={entry}
            hasPromotion={hasPromotion}
            slideFrom="left"
          />
        )}
      </div>

      {/* Center line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-4 h-4 rounded-full bg-accent border-4 border-surface z-10 shrink-0"
          style={{ borderColor: "var(--surface)" }}
        />
        {index < total - 1 && (
          <div className="w-px flex-1 bg-border" />
        )}
      </div>

      {/* Right card (desktop) / main card (mobile) */}
      <div className="pb-12 md:pb-16">
        {/* Mobile: always show card here */}
        <div className="md:hidden">
          <CardContent
            entry={entry}
            hasPromotion={hasPromotion}
            slideFrom="right"
          />
        </div>

        {/* Desktop: show card here only if it's a right-side card */}
        <div className="hidden md:block">
          {!isLeft ? (
            <CardContent
              entry={entry}
              hasPromotion={hasPromotion}
              slideFrom="right"
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

function CardContent({
  entry,
  hasPromotion,
  slideFrom,
}: {
  entry: ExperienceEntry;
  hasPromotion: boolean;
  slideFrom: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: slideFrom === "left" ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <GlowCard>
        <div className="flex items-start gap-4">
          <CompanyLogo entry={entry} />
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs text-text-tertiary tracking-wider mb-1">
              {getDateRange(entry)}
            </p>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {entry.company}
            </a>

            <div className="mt-3 space-y-2">
              {entry.roles.map((role, i) => (
                <div key={role.title}>
                  {i > 0 && hasPromotion && (
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.3 }}
                      className="inline-flex items-center gap-1 bg-accent-muted text-accent text-xs font-mono px-2 py-0.5 rounded-full mb-2"
                    >
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
                    </motion.div>
                  )}
                  <p
                    className={
                      i === 0
                        ? "font-display text-lg font-semibold text-text-primary"
                        : "font-display text-base text-text-secondary"
                    }
                  >
                    {role.title}
                  </p>
                  {entry.roles.length > 1 && (
                    <p className="font-mono text-xs text-text-tertiary">
                      {formatDate(role.startDate)} —{" "}
                      {formatDate(role.endDate)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}
