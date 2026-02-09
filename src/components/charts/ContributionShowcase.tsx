"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Contribution {
  title: string;
  description: string;
  icon: string;
  impact: "høy" | "veldig høy" | "ekstrem";
  color: string;
  examples: string[];
}

const contributions: Contribution[] = [
  {
    title: "Disiplin & arbeidsmoral",
    description: "Bevist gjennom ett år med selvstendig liv og trening i Spania",
    icon: "⚡",
    impact: "ekstrem",
    color: "#00d4aa",
    examples: ["9 timer trening daglig", "Ingen fraværsdager", "Alltid forberedt"],
  },
  {
    title: "Internasjonal erfaring",
    description: "Perspektiver fra treningsleir med spillere fra hele verden",
    icon: "🌍",
    impact: "veldig høy",
    color: "#667eea",
    examples: ["Kulturell forståelse", "Nettverk i tennis-verden", "Språkferdigheter"],
  },
  {
    title: "Mental styrke",
    description: "Utviklet gjennom å håndtere press, ensomhet og motgang",
    icon: "🧠",
    impact: "ekstrem",
    color: "#f43f5e",
    examples: ["Presterer under press", "Takler tilbakeslag", "Positiv innstilling"],
  },
  {
    title: "Positivt klassemiljø",
    description: "Bidrar med energi, støtte og godt humør",
    icon: "☀️",
    impact: "høy",
    color: "#f59e0b",
    examples: ["Inkluderende holdning", "Støtter medstudenter", "God lagånd"],
  },
  {
    title: "Kunnskap om toppidrett",
    description: "Erfaring med profesjonelt treningsopplegg og restitusjon",
    icon: "🎯",
    impact: "veldig høy",
    color: "#a855f7",
    examples: ["Treningsplanlegging", "Ernæring", "Mental forberedelse"],
  },
];

const impactColors = {
  "høy": "#f59e0b",
  "veldig høy": "#667eea",
  "ekstrem": "#00d4aa",
};

const impactValues = {
  "høy": 75,
  "veldig høy": 90,
  "ekstrem": 100,
};

export default function ContributionShowcase() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [selectedContribution, setSelectedContribution] = useState<Contribution | null>(null);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-3"
        >
          <span className="text-lg">🎁</span>
          <span className="text-sm text-[var(--text-secondary)]">Hva jeg bringer til Wang</span>
        </motion.div>
      </div>

      {/* Contribution hexagon grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {contributions.map((contrib, index) => {
          const isSelected = selectedContribution?.title === contrib.title;

          return (
            <motion.div
              key={contrib.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedContribution(isSelected ? null : contrib)}
              className={`glass rounded-2xl p-4 cursor-pointer transition-all duration-300 ${
                index === 4 ? "md:col-start-2" : ""
              } ${isSelected ? "ring-2" : ""}`}
              style={{
                borderColor: isSelected ? contrib.color : "transparent",
                boxShadow: isSelected ? `0 0 20px ${contrib.color}30` : "none",
              }}
            >
              {/* Icon */}
              <motion.div
                animate={isSelected ? { rotate: [0, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl mb-3"
              >
                {contrib.icon}
              </motion.div>

              {/* Title */}
              <h4 className="font-medium text-[var(--text-primary)] text-sm mb-2">
                {contrib.title}
              </h4>

              {/* Impact badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${impactColors[contrib.impact]}20`,
                  color: impactColors[contrib.impact],
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: impactColors[contrib.impact] }} />
                {contrib.impact} impact
              </motion.div>

              {/* Impact bar */}
              <div className="mt-3 h-1 rounded-full bg-[var(--glass-bg)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${impactValues[contrib.impact]}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: contrib.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded details */}
      {selectedContribution && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass-strong rounded-2xl p-6"
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl">{selectedContribution.icon}</span>
            <div className="flex-1">
              <h4 className="font-semibold text-[var(--text-primary)] text-lg mb-2">
                {selectedContribution.title}
              </h4>
              <p className="text-[var(--text-secondary)] text-sm mb-4">
                {selectedContribution.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedContribution.examples.map((example, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${selectedContribution.color}15`,
                      color: selectedContribution.color,
                    }}
                  >
                    {example}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Total contribution score */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="glass rounded-xl p-6 text-center"
      >
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <div>
            <div className="text-4xl font-bold text-[var(--accent)]">5</div>
            <div className="text-xs text-[var(--text-secondary)]">nøkkelbidrag</div>
          </div>
          <div className="text-2xl text-[var(--text-secondary)]">×</div>
          <div>
            <div className="text-4xl font-bold text-[var(--text-primary)]">3 år</div>
            <div className="text-xs text-[var(--text-secondary)]">på Wang</div>
          </div>
          <div className="text-2xl text-[var(--text-secondary)]">=</div>
          <div>
            <motion.div
              initial={{ scale: 1 }}
              animate={isInView ? { scale: [1, 1.1, 1] } : {}}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-4xl font-bold text-[var(--accent)]"
            >
              ∞
            </motion.div>
            <div className="text-xs text-[var(--text-secondary)]">verdi</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
