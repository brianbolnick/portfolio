import { useRef } from "react";
import { cn } from "~/lib/cn";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.removeProperty("--glow-x");
    card.style.removeProperty("--glow-y");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative bg-card rounded-xl border border-border p-6 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 50%), var(--accent-muted), transparent 40%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
