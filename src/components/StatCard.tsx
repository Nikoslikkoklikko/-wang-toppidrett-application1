"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const finalValue = value.replace(/[^0-9.-]/g, "");
  const [displayValue, setDisplayValue] = useState(finalValue);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    setDisplayValue("0");

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
        setDisplayValue(finalValue);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, finalValue]);

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
  const isInView = useInView(ref, { once: true });

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
