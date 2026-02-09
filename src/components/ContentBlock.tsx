"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ContentBlockProps {
  children: ReactNode;
  delay?: number;
}

export default function ContentBlock({ children, delay = 0 }: ContentBlockProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="prose prose-slate max-w-none mb-6"
    >
      {children}
    </motion.div>
  );
}
