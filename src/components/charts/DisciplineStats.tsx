"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  icon: string;
  description: string;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 8,
    label: "Anmerkninger",
    suffix: " totalt",
    icon: "📝",
    description: "Gjennom hele ungdomsskolen",
    color: "#22c55e",
  },
  {
    value: 0,
    label: "Forsentkomminger",
    icon: "⏰",
    description: "Aldri kommet for sent",
    color: "#22c55e",
  },
  {
    value: 0,
    label: "Skulk",
    icon: "🚫",
    description: "Aldri skulket en time",
    color: "#22c55e",
  },
  {
    value: 10,
    label: "År med tennis",
    suffix: "+",
    icon: "🎾",
    description: "Spilt siden 6-årsalderen",
    color: "var(--accent)",
  },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, rounded, value]);

  return (
    <span>
      {displayValue}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onViewportEnter={() => setIsVisible(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0,
        }}
        className="glass rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-[var(--accent)] h-full"
        style={{
          boxShadow: isHovered ? `0 0 30px ${stat.color}30` : "none",
        }}
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-3"
        >
          {stat.icon}
        </motion.div>

        {/* Value */}
        <div
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{ color: stat.color }}
        >
          {isVisible ? (
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          ) : (
            "0"
          )}
        </div>

        {/* Label */}
        <div className="text-[var(--text-primary)] font-medium mb-1">
          {stat.label}
        </div>

        {/* Description */}
        <div className="text-[var(--text-secondary)] text-sm">
          {stat.description}
        </div>

        {/* Animated ring for zero values (perfect score) */}
        {stat.value === 0 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="absolute -top-2 -right-2 bg-[#22c55e] text-white text-xs px-2 py-1 rounded-full font-bold"
          >
            ✓ Perfekt
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function DisciplineStats() {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
          Disiplin i tall
        </h4>
        <p className="text-[var(--text-secondary)] text-sm">
          Resultater fra ungdomsskolen som viser min dedikasjon
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} index={index} />
        ))}
      </div>

      {/* Additional achievement banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-strong rounded-2xl p-6 text-center mt-8"
      >
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <span className="text-3xl">🏆</span>
          <div>
            <span className="text-[var(--text-primary)] font-medium">
              Aldri hatt en negativ foreldresamtale
            </span>
            <span className="text-[var(--text-secondary)]"> gjennom 10 år med skole</span>
          </div>
          <span className="text-3xl">🏆</span>
        </div>
      </motion.div>
    </div>
  );
}
