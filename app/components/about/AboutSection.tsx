import { motion } from "framer-motion";
import { Section } from "~/components/layout/Section";

const interests = [
  "Hockey",
  "Foodie",
  "Builder",
  "Elixir",
  "Utah Utes",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AboutSection() {
  return (
    <Section id="about" label="About">
      <div className="max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-8"
        >
          Not your typical engineer.
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-6 text-text-secondary text-lg leading-relaxed font-light"
        >
          <motion.p variants={childVariants}>
            I started my career managing Canvas implementations at Instructure —
            herding cats, wrangling spreadsheets, and slowly realizing I&apos;d
            rather be building the tools than implementing them. So I taught
            myself to code, made the leap to engineering, and never looked back.
          </motion.p>

          <motion.p variants={childVariants}>
            Since then, I&apos;ve built payments systems at Emotive, shipped
            features at Podium, and now I&apos;m building{" "}
            <a
              href="https://verasai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-deep transition-colors"
            >
              Veras
            </a>{" "}
            — an AI platform that helps senior care facilities actually staff
            their buildings properly. Turns out &ldquo;making people&apos;s lives
            better&rdquo; is a pretty solid career thesis.
          </motion.p>

          <motion.p variants={childVariants}>
            When I&apos;m not staring at a screen, you&apos;ll find me on the
            ice playing hockey (poorly), hunting for the best tacos in the Salt Lake
            valley, or convincing myself that this is the year my fantasy hockey
            team doesn&apos;t tank.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3 mt-10"
        >
          {interests.map((interest) => (
            <motion.span
              key={interest}
              whileHover={{ y: -2 }}
              className="bg-accent-muted text-accent text-sm px-4 py-1.5 rounded-full font-mono cursor-default"
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
