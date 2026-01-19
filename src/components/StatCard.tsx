"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = numericValue * easeOut;

        if (value.includes(".")) {
          setDisplayValue(current.toFixed(1));
        } else {
          setDisplayValue(Math.floor(current).toString());
        }

        if (currentStep >= steps) {
          clearInterval(timer);
          setDisplayValue(value.replace(/[^0-9.-]/g, ""));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}{suffix}
    </span>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export default function StatCard({ value, label, suffix = "" }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05 }}
      className="glass rounded-2xl p-6 md:p-8 text-center hover:border-[var(--border-hover)] transition-all duration-300"
    >
      <div className="font-serif text-4xl md:text-5xl text-[var(--accent)] mb-2">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)]">
        {label}
      </div>
    </motion.div>
  );
}
