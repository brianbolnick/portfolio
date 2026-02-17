import { motion } from "framer-motion";
import { Headshot } from "./Headshot";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
        {/* Text content */}
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
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight"
          >
            Brian Bolnick
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-text-secondary font-light"
          >
            Co-Founder & CPO at{" "}
            <a
              href="https://verasai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-deep transition-colors"
            >
              Veras
            </a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg text-text-tertiary max-w-lg leading-relaxed"
          >
            Builder, tinkerer, recovering project manager. I make software for
            people who take care of people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-6 pt-4"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 bg-accent text-stone-900 px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              See my journey
              <svg
                width="16"
                height="16"
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
            </a>
            <a
              href="#contact"
              className="text-sm text-text-secondary hover:text-accent transition-colors underline underline-offset-4 decoration-border hover:decoration-accent"
            >
              or say hello
            </a>
          </motion.div>
        </div>

        {/* Headshot */}
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
