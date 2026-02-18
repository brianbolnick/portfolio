import { motion } from "framer-motion";
import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { Section } from "~/components/layout/Section";
import { TimelineLargeEntry } from "~/components/experience/TimelineLarge";
import { experience } from "~/data/experience";

/**
 * V3: "Split Screen"
 * - Left side: sticky name/title + bio + headshot
 * - Right side: scrollable timeline
 * - More app-like, less traditional portfolio
 */

function Hero() {
  return (
    <section className="min-h-screen px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-20 py-16 md:py-24">
        {/* Left: sticky intro */}
        <div className="lg:w-2/5 lg:sticky lg:top-24 lg:self-start space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 mb-8">
              <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl bg-accent/20 -z-10" />
              <img
                src="/images/headshot.jpg"
                alt="Brian Bolnick"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-display text-5xl md:text-6xl font-extrabold text-text-primary leading-[0.95]"
          >
            Brian
            <br />
            Bolnick
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl text-text-secondary"
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
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-text-secondary leading-relaxed"
          >
            NY &rarr; Colorado &rarr; Utah. Product and experience obsessed with
            a passion for building things that make people happy and their lives
            easier. Engineer at heart, entrepreneur by nature. Big hockey guy,
            avid foodie, always chasing the next great taco.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-2"
          >
            {["#TusksUp", "#GoUtes", "#BroncosCountry", "foodie in a hoodie"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-accent-muted text-accent text-sm px-3 py-1 rounded-full font-mono"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>

        {/* Right: timeline */}
        <div className="lg:w-3/5">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
              Experience
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-16">
            The journey so far
          </h2>

          {experience.map((entry, index) => (
            <TimelineLargeEntry key={entry.slug} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function V3() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
