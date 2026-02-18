import { motion } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { Headshot } from "~/components/hero/Headshot";
import { Section } from "~/components/layout/Section";
import { TimelineLargeEntry } from "~/components/experience/TimelineLarge";
import { experience } from "~/data/experience";

/**
 * V1: "Editorial Bold"
 * - Oversized name, clean subtitle
 * - Two-column hero with headshot
 * - Large alternating logo/card timeline
 * - Brief personal paragraph
 */

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="flex-[1.3] space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-accent text-sm tracking-wider uppercase"
          >
            hey, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-extrabold text-text-primary leading-[0.95]"
          >
            Brian
            <br />
            Bolnick
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-text-secondary"
          >
            Currently Chief Product Officer &amp; Co-Founder at{" "}
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
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-text-secondary max-w-xl leading-relaxed"
          >
            New York to Colorado to Utah. Product and experience obsessed with
            a passion for building things that make people happy and their lives
            easier. Engineer at heart, entrepreneur by nature. Big hockey guy,
            avid foodie, and forever chasing the next great taco.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-6 pt-2"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-accent text-stone-900 px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              See my journey
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14" /><path d="m19 12-7 7-7-7" />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Headshot />
        </motion.div>
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

export default function V1() {
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
