import { motion } from "framer-motion";
import { RotatingQuotes } from "~/components/ui/RotatingQuotes";
import { SocialIcon } from "~/components/ui/SocialIcon";
import { socialLinks } from "~/data/social";

const socialVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const socialItemVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

export function Footer() {
  return (
    <footer id="contact" className="bg-surface-secondary py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary"
        >
          Let&apos;s build something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-text-tertiary text-lg mt-3"
        >
          Or just talk about hockey. Either works.
        </motion.p>

        <motion.a
          href="mailto:brian@veras.com"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block mt-8 text-xl md:text-2xl font-display font-semibold text-accent hover:text-accent-deep transition-colors underline underline-offset-8 decoration-accent/30 hover:decoration-accent"
        >
          brian@veras.com
        </motion.a>

        <motion.div
          variants={socialVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4 mt-12"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={socialItemVariants}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full bg-accent-muted text-text-secondary hover:bg-accent hover:text-stone-900 flex items-center justify-center transition-colors duration-200"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-16">
          <RotatingQuotes />
        </div>

        <p className="mt-8 text-xs text-text-tertiary font-mono">
          Built by Brian Bolnick &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
