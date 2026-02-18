import { motion } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { Section } from "~/components/layout/Section";
import { TimelineLargeEntry } from "~/components/experience/TimelineLarge";
import { experience } from "~/data/experience";

/**
 * V2: "Oversized Mono"
 * - Giant name fills the viewport, no headshot on hero
 * - Monospace-forward, developer aesthetic
 * - Bio reads like a README
 * - Same large alternating timeline
 */

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-accent text-base tracking-wider mb-6"
        >
          // brian bolnick
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-7xl md:text-8xl lg:text-[9rem] font-extrabold text-text-primary leading-[0.9] tracking-tight"
        >
          Product.
          <br />
          <span className="text-accent">Builder.</span>
          <br />
          Founder.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 max-w-2xl"
        >
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Currently Chief Product Officer &amp; Co-Founder at{" "}
            <a
              href="https://verasai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:text-accent-deep transition-colors"
            >
              Veras
            </a>
            . New York to Colorado to Utah. Product and experience obsessed
            — I build things that make people happy and their lives easier.
            Engineer at heart, entrepreneur by nature. Big hockey guy, avid
            foodie, and forever chasing the next great taco.
          </p>
        </motion.div>

        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="inline-flex items-center gap-2 mt-10 text-accent font-mono text-sm hover:text-accent-deep transition-colors"
        >
          scroll for the story
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <Section id="experience" label="Experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl md:text-5xl font-bold text-text-primary mb-20"
      >
        The journey so far
      </motion.h2>

      {experience.map((entry, index) => (
        <TimelineLargeEntry key={entry.slug} entry={entry} index={index} />
      ))}
    </Section>
  );
}

export default function V2() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceTimeline />
      </main>
      <Footer />
    </>
  );
}
