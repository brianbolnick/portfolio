import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function Headshot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm md:max-w-md lg:max-w-lg"
      style={{ perspective: 1000 }}
    >
      {/* Accent offset shadow */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-accent/20" />

      <motion.div
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10"
      >
        <img
          src="/images/headshot.jpg"
          alt="Brian Bolnick"
          width={800}
          height={534}
          loading="eager"
          className="w-full h-auto block"
        />
      </motion.div>
    </div>
  );
}
