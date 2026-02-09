"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface GrowthMetric {
  label: string;
  before: number;
  after: number;
  icon: string;
  color: string;
}

const growthMetrics: GrowthMetric[] = [
  { label: "Selvstendighet", before: 35, after: 92, icon: "🏠", color: "#00d4aa" },
  { label: "Tidsstyring", before: 45, after: 88, icon: "⏰", color: "#667eea" },
  { label: "Økonomistyring", before: 20, after: 85, icon: "💰", color: "#f59e0b" },
  { label: "Problemløsning", before: 50, after: 90, icon: "🧩", color: "#f43f5e" },
  { label: "Mental styrke", before: 55, after: 95, icon: "🧠", color: "#a855f7" },
  { label: "Planlegging", before: 40, after: 87, icon: "📋", color: "#06b6d4" },
];

export default function IndependenceGrowthChart() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const averageBefore = Math.round(growthMetrics.reduce((acc, m) => acc + m.before, 0) / growthMetrics.length);
  const averageAfter = Math.round(growthMetrics.reduce((acc, m) => acc + m.after, 0) / growthMetrics.length);
  const totalGrowth = Math.round(((averageAfter - averageBefore) / averageBefore) * 100);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Header stats */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0 }}
          className="glass rounded-xl p-4 text-center"
        >
          <div className="text-sm text-[var(--text-secondary)] mb-1">Norge (før)</div>
          <div className="text-2xl font-bold text-[var(--text-secondary)]">{averageBefore}%</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl p-4 text-center border-2 border-[var(--accent)]"
        >
          <div className="text-sm text-[var(--text-secondary)] mb-1">Vekst</div>
          <motion.div
            initial={{ scale: 1 }}
            animate={isInView ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl font-bold text-[var(--accent)]"
          >
            +{totalGrowth}%
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-xl p-4 text-center"
        >
          <div className="text-sm text-[var(--text-secondary)] mb-1">Spania (nå)</div>
          <div className="text-2xl font-bold text-[var(--text-primary)]">{averageAfter}%</div>
        </motion.div>
      </div>

      {/* Growth bars */}
      <div className="space-y-4">
        {growthMetrics.map((metric, index) => {
          const growth = metric.after - metric.before;
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Label row */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{metric.icon}</span>
                  <span className="text-sm font-medium text-[var(--text-primary)]">{metric.label}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[var(--text-secondary)]">{metric.before}%</span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-[var(--accent)]"
                  >
                    →
                  </motion.span>
                  <span className="font-bold text-[var(--text-primary)]">{metric.after}%</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: `${metric.color}30`, color: metric.color }}
                  >
                    +{growth}
                  </motion.span>
                </div>
              </div>

              {/* Progress bar container */}
              <div className="relative h-6 rounded-full overflow-hidden glass">
                {/* Before bar (faded) */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${metric.before}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="absolute inset-y-0 left-0 rounded-full opacity-30"
                  style={{ background: metric.color }}
                />

                {/* After bar (main) */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${metric.after}%` } : {}}
                  transition={{ duration: 1.2, delay: 0.4 + index * 0.1 }}
                  className={`absolute inset-y-0 left-0 rounded-full transition-all duration-300 ${isHovered ? "shadow-lg" : ""}`}
                  style={{
                    background: `linear-gradient(135deg, ${metric.color} 0%, ${metric.color}dd 100%)`,
                    boxShadow: isHovered ? `0 0 20px ${metric.color}60` : "none"
                  }}
                />

                {/* Animated glow line at edge */}
                <motion.div
                  initial={{ left: "0%", opacity: 0 }}
                  animate={isInView ? { left: `${metric.after - 1}%`, opacity: [0, 1, 0] } : {}}
                  transition={{ duration: 1.2, delay: 0.4 + index * 0.1 }}
                  className="absolute inset-y-0 w-2 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, white, transparent)` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary insight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 1 }}
        className="glass rounded-xl p-4 text-center"
      >
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="text-[var(--accent)] font-bold">12 måneder</span> med selvstendig liv i Spania har resultert i
          <span className="text-[var(--text-primary)] font-bold"> {totalGrowth}% gjennomsnittlig vekst</span> i livsferdigheter
        </p>
      </motion.div>
    </div>
  );
}
