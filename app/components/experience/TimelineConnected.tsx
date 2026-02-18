import { motion } from "framer-motion";
import { GlowCard } from "~/components/ui/GlowCard";
import { CompanyLogo } from "./CompanyLogo";
import type { ExperienceEntry } from "~/data/experience";
import { formatDate, getDateRange } from "~/data/experience";

interface Props {
  entry: ExperienceEntry;
  index: number;
  total: number;
}

export function TimelineConnectedEntry({ entry, index, total }: Props) {
  const isEven = index % 2 === 0;
  const hasPromotion = entry.roles.length > 1;
  const isLast = index === total - 1;

  return (
    <div className="relative">
      {/* Vertical connecting line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="absolute left-1/2 -translate-x-1/2 top-full w-px h-20 bg-gradient-to-b from-accent/40 to-border origin-top hidden md:block"
        />
      )}

      {/* Dot on timeline */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.1 }}
        className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-surface border-[3px] border-accent z-20 hidden md:block"
      >
        <div className="absolute inset-1 rounded-full bg-accent" />
      </motion.div>

      {/* Content row */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-center pt-8 pb-20`}
      >
        {/* Logo block */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: isEven ? 1 : -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <CompanyLogo entry={entry} size="lg" />
        </motion.div>

        {/* Card */}
        <div className="w-full md:w-1/2">
          <GlowCard>
            <p className="font-mono text-sm text-text-tertiary tracking-wider mb-3">
              {getDateRange(entry)}
            </p>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl md:text-3xl font-bold text-text-primary hover:text-accent transition-colors"
            >
              {entry.company}
            </a>

            <p className="text-sm text-text-tertiary mt-2 leading-relaxed">
              {entry.description}
            </p>

            <div className="mt-5 space-y-3">
              {entry.roles.map((role, i) => (
                <div key={role.title}>
                  {i > 0 && hasPromotion && (
                    <motion.div
                      initial={{ scale: 0, x: -10 }}
                      whileInView={{ scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", delay: 0.4 }}
                      className="inline-flex items-center gap-1.5 bg-accent-muted text-accent text-xs font-mono px-3 py-1 rounded-full mb-3"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                      Promoted
                    </motion.div>
                  )}
                  <p className={i === 0 ? "text-xl font-semibold text-text-primary" : "text-lg text-text-secondary"}>
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
    </div>
  );
}
