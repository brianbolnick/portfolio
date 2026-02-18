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
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export function Footer() {
  return (
    <footer className="bg-surface-secondary py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          variants={socialVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-4"
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
              className="w-12 h-12 rounded-full bg-accent-muted text-text-secondary hover:bg-accent hover:text-stone-900 flex items-center justify-center transition-colors duration-200"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <div className="mt-12">
          <RotatingQuotes />
        </div>

        <p className="mt-8 text-xs text-text-tertiary font-mono">
          &copy; {new Date().getFullYear()} Brian Bolnick
        </p>
      </div>
    </footer>
  );
}
