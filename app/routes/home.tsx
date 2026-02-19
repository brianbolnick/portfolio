import type { Route } from "./+types/home";
import { motion } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { Headshot } from "~/components/hero/Headshot";
import { Section } from "~/components/layout/Section";
import { TimelineConnectedEntry } from "~/components/experience/TimelineConnected";
import { experience } from "~/data/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio | Bolnick" },
    {
      name: "description",
      content:
        "Brian Bolnick — Co-Founder & CPO at Veras. Builder, tinkerer, and engineer turned product leader.",
    },
  ];
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-[1.4] space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="font-hero text-6xl md:text-7xl lg:text-[7rem] font-extrabold text-text-primary leading-[0.92] tracking-tight"
          >
            hey, i&apos;m <span className="text-accent">brian.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl text-text-secondary">
            Currently: building product at{" "}
            <a
              href="https://veras.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-semibold hover:text-accent-deep transition-colors"
            >
              Veras
            </a>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-lg text-text-secondary max-w-xl leading-relaxed"
          >
            Product and experience obsessed builder with a passion for making
            things that make people happy and their lives easier. Big hockey
            guy, avid foodie. New York &rarr; Colorado &rarr; Utah (since '07).
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="#experience"
            className="inline-flex items-center gap-2 mt-2 text-accent font-mono text-sm hover:text-accent-deep transition-colors group"
          >
            scroll for the story
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
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

      <div className="relative">
        {/* Center line (desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-border to-transparent hidden md:block" />

        {experience.map((entry, index) => (
          <TimelineConnectedEntry
            key={entry.slug}
            entry={entry}
            index={index}
            total={experience.length}
          />
        ))}
      </div>
    </Section>
  );
}

export default function Home() {
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
