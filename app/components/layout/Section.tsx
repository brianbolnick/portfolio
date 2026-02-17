import { motion } from "framer-motion";
import { cn } from "~/lib/cn";

interface SectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, label, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 px-6", className)}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-accent" />
          <span className="font-mono text-accent text-xs tracking-[0.2em] uppercase">
            {label}
          </span>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
