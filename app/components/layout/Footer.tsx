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
    <footer className="bg-surface-secondary pt-20 px-6 pb-0 overflow-hidden">
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

      {/* Giant oversized name */}
      <div className="mt-16 select-none" aria-hidden="true">
        <div className="flex justify-center translate-y-[35%]">
          {"BOLNICK".split("").map((letter, i) => (
            <motion.span
              key={i}
              className="font-hero text-[18vw] font-black leading-none text-text-tertiary/20 cursor-default inline-block"
              whileHover={{
                y: -10,
                scale: 1.05,
                color: "var(--accent)",
                transition: { type: "spring", stiffness: 400, damping: 15 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </footer>
  );
}
