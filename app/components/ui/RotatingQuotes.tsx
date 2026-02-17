import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { quotes } from "~/data/quotes";

export function RotatingQuotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[index];

  return (
    <div className="h-16 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4 }}
          className="text-center font-mono text-sm text-text-tertiary italic"
        >
          &ldquo;{quote.text}&rdquo;
          <span className="block mt-1 not-italic text-accent text-xs">
            &mdash; {quote.author}
          </span>
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
