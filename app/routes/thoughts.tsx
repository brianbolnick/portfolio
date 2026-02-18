import { Header } from "~/components/layout/Header";
import { Footer } from "~/components/layout/Footer";
import { motion } from "framer-motion";

export default function Thoughts() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-accent" />
              <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
                Brain Thoughts
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary mb-6">
              Brain Thoughts
            </h1>

            <p className="text-xl text-text-secondary max-w-2xl mb-16">
              Notes on building products, leading teams, startup life, and
              whatever else is on my mind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-border rounded-xl p-12 text-center"
          >
            <p className="text-text-tertiary text-lg font-mono">
              Coming soon.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
