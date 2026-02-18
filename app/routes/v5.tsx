import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { CompanyLogo } from "~/components/experience/CompanyLogo";
import { experience } from "~/data/experience";
import { formatDate, getDateRange } from "~/data/experience";

/**
 * V5: "Minimal Stacked" — Clean, centered, card-based
 * - Centered hero with circular headshot and accent underline
 * - Experience as expandable accordion cards
 * - Everything centered, very clean and tight
 * - Completely different from V1/V2's side-by-side editorial layout
 */

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-16">
      <div className="max-w-2xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-32 h-32 rounded-full overflow-hidden shadow-xl shadow-accent/10 ring-4 ring-accent/20"
        >
          <img
            src="/images/headshot.jpg"
            alt="Brian Bolnick"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl font-extrabold text-text-primary"
          >
            Brian Bolnick
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mx-auto mt-3 w-16 h-1 bg-accent rounded-full origin-left"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-text-secondary"
        >
          Co-Founder & CPO at{" "}
          <a
            href="https://verasai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold hover:text-accent-deep transition-colors"
          >
            Veras
          </a>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-text-secondary leading-relaxed max-w-lg mx-auto"
        >
          New York to Colorado to Utah. Product and experience obsessed with a
          passion for building things that make people happy. Engineer at heart,
          entrepreneur by nature. Big hockey guy, avid foodie, and forever
          chasing the next great taco.
        </motion.p>
      </div>
    </section>
  );
}

function ExperienceCard({
  entry,
  index,
}: {
  entry: (typeof experience)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasPromotion = entry.roles.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.995 }}
        className="w-full text-left bg-card border border-border rounded-2xl p-6 md:p-8 transition-colors hover:border-accent/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div className="flex items-center gap-5">
          <CompanyLogo entry={entry} size="sm" />
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary truncate">
              {entry.company}
            </h3>
            <p className="font-mono text-sm text-text-tertiary mt-1">
              {getDateRange(entry)}
            </p>
          </div>
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-tertiary shrink-0"
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-5 mt-5 border-t border-border space-y-3">
                {entry.roles.map((role, i) => (
                  <div key={role.title} className="flex items-start gap-3">
                    {i > 0 && hasPromotion && (
                      <span className="inline-flex items-center gap-1 bg-accent-muted text-accent text-xs font-mono px-2 py-0.5 rounded-full shrink-0 mt-0.5">
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
                      </span>
                    )}
                    <div>
                      <p
                        className={
                          i === 0
                            ? "text-lg font-semibold text-text-primary"
                            : "text-base text-text-secondary"
                        }
                      >
                        {role.title}
                      </p>
                      {entry.roles.length > 1 && (
                        <p className="font-mono text-xs text-text-tertiary mt-0.5">
                          {formatDate(role.startDate)} —{" "}
                          {formatDate(role.endDate)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            Experience
          </span>
        </motion.div>

        <div className="space-y-4">
          {experience.map((entry, index) => (
            <ExperienceCard key={entry.slug} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function V5() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
