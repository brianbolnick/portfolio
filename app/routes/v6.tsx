import { motion } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { CompanyLogo } from "~/components/experience/CompanyLogo";
import { experience } from "~/data/experience";
import { getDateRange, formatDate } from "~/data/experience";

/**
 * V6: "Cinematic Horizontal" — Immersive, scroll-driven
 * - Full-bleed hero with massive name stacked vertically, no headshot
 * - Horizontal-scrolling experience cards on desktop
 * - Each card is large with logo as full background + role info overlay
 * - Completely different spatial feel from the vertical layouts
 */

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 pb-24 pt-16 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-accent text-sm tracking-wider mb-6"
        >
          Co-Founder & CPO at Veras
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-[4rem] md:text-[7rem] lg:text-[10rem] font-black text-text-primary leading-[0.85] tracking-tighter"
        >
          BRIAN
          <br />
          BOLNICK
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-8 max-w-lg"
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            New York to Colorado to Utah. Product and experience obsessed with a
            passion for building things that make people happy and their lives
            easier. Engineer at heart, entrepreneur by nature. Big hockey guy,
            avid foodie, and forever chasing the next great taco.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 w-24 h-px bg-accent origin-left"
        />

        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="inline-flex items-center gap-2 mt-6 font-mono text-sm text-text-tertiary hover:text-accent transition-colors"
        >
          Scroll to explore
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </motion.a>
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
  const hasPromotion = entry.roles.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="snap-center shrink-0 w-[85vw] md:w-[520px] lg:w-[600px]"
    >
      <div className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
        {/* Logo background */}
        <div
          className="aspect-[3/2] flex items-center justify-center relative"
          style={{ backgroundColor: entry.color }}
        >
          {entry.logoType === "image" && entry.logo ? (
            <img
              src={entry.logo}
              alt={entry.companyShort}
              className="w-full h-full object-cover"
            />
          ) : entry.logo ? (
            <img
              src={entry.logo}
              alt={entry.companyShort}
              className="w-1/2 max-h-[40%] object-contain transition-transform duration-500 group-hover:scale-110"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          ) : (
            <span className="text-white text-6xl font-display font-bold select-none">
              {entry.companyShort
                .split(" ")
                .map((w) => w[0])
                .join("")
                .toUpperCase()
                .slice(0, 2)}
            </span>
          )}

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Info overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-8">
            <p className="font-mono text-xs text-white/60 tracking-wider mb-2">
              {getDateRange(entry)}
            </p>
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl md:text-3xl font-bold text-white hover:text-accent transition-colors"
            >
              {entry.company}
            </a>
          </div>
        </div>

        {/* Roles section */}
        <div className="bg-card p-6 md:p-8 space-y-3">
          {entry.roles.map((role, i) => (
            <div key={role.title}>
              {i > 0 && hasPromotion && (
                <div className="inline-flex items-center gap-1.5 bg-accent-muted text-accent text-xs font-mono px-3 py-1 rounded-full mb-2">
                  <svg
                    width="12"
                    height="12"
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
                    ? "text-lg font-semibold text-text-primary"
                    : "text-base text-text-secondary"
                }
              >
                {role.title}
              </p>
              {entry.roles.length > 1 && (
                <p className="font-mono text-xs text-text-tertiary mt-0.5">
                  {formatDate(role.startDate)} — {formatDate(role.endDate)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-text-primary"
        >
          Where I&apos;ve been
        </motion.h2>
      </div>

      {/* Horizontal scroll container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 pb-8 snap-x snap-mandatory md:pl-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {experience.map((entry, index) => (
            <ExperienceCard key={entry.slug} entry={entry} index={index} />
          ))}
          {/* Spacer at end */}
          <div className="shrink-0 w-6 md:w-12" />
        </div>
      </div>
    </section>
  );
}

export default function V6() {
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
