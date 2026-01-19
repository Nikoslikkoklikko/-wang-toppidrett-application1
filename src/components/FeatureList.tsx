"use client";

import { motion } from "framer-motion";

interface FeatureListProps {
  items: string[];
}

export default function FeatureList({ items }: FeatureListProps) {
  return (
    <ul className="space-y-4 my-6">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-start gap-4 text-[var(--text-secondary)] py-3 border-b border-[var(--border)] last:border-0"
        >
          <span className="text-[var(--accent)] font-bold text-lg mt-0.5">→</span>
          <span className="leading-relaxed">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
