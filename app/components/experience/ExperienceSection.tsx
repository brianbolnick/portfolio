import { motion } from "framer-motion";
import { Section } from "~/components/layout/Section";
import { TimelineEntry } from "./TimelineEntry";
import { experience } from "~/data/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-16"
      >
        The journey so far
      </motion.h2>

      <div className="relative">
        {experience.map((entry, index) => (
          <TimelineEntry
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
