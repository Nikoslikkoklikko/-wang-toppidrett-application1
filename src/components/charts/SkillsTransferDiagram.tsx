"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface SkillTransfer {
  tennisSkill: string;
  tennisIcon: string;
  lifeSkill: string;
  lifeIcon: string;
  description: string;
  color: string;
}

const skillTransfers: SkillTransfer[] = [
  {
    tennisSkill: "Håndtere press i kamper",
    tennisIcon: "🎾",
    lifeSkill: "Prestere under eksamen",
    lifeIcon: "📝",
    description: "Evnen til å levere når det gjelder, uansett situasjon",
    color: "#00d4aa",
  },
  {
    tennisSkill: "Komme tilbake etter tap",
    tennisIcon: "💪",
    lifeSkill: "Håndtere tilbakeslag i livet",
    lifeIcon: "🔄",
    description: "Resiliens og evne til å reise seg etter motgang",
    color: "#667eea",
  },
  {
    tennisSkill: "Analysere motstandere",
    tennisIcon: "🔍",
    lifeSkill: "Kritisk tenkning og problemløsning",
    lifeIcon: "🧩",
    description: "Forstå situasjoner og finne beste løsning",
    color: "#f59e0b",
  },
  {
    tennisSkill: "Tålmodighet i lange kamper",
    tennisIcon: "⏳",
    lifeSkill: "Langsiktig planlegging",
    lifeIcon: "📊",
    description: "Fokusere på mål selv når resultater tar tid",
    color: "#a855f7",
  },
  {
    tennisSkill: "Selvstendig trening",
    tennisIcon: "🏋️",
    lifeSkill: "Selvdisiplin og motivasjon",
    lifeIcon: "🎯",
    description: "Gjøre det som trengs uten at noen passer på",
    color: "#f43f5e",
  },
  {
    tennisSkill: "Turneringsforberedelse",
    tennisIcon: "📋",
    lifeSkill: "Prosjektplanlegging",
    lifeIcon: "✅",
    description: "Strukturere komplekse oppgaver og deadlines",
    color: "#06b6d4",
  },
];

export default function SkillsTransferDiagram() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="inline-flex items-center gap-3 glass rounded-full px-6 py-3"
        >
          <span className="text-2xl">🎾</span>
          <motion.span
            initial={{ width: 0 }}
            animate={isInView ? { width: "auto" } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="overflow-hidden"
          >
            <span className="text-[var(--accent)] font-medium">→</span>
          </motion.span>
          <span className="text-2xl">🎓</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-sm text-[var(--text-secondary)] mt-3"
        >
          Ferdigheter fra tennis som jeg bruker i hverdagen
        </motion.p>
      </div>

      {/* Transfer cards */}
      <div className="space-y-4">
        {skillTransfers.map((transfer, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`glass rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                isHovered ? "scale-[1.02]" : ""
              }`}
              style={{
                boxShadow: isHovered ? `0 0 25px ${transfer.color}30` : "none",
                borderLeft: `3px solid ${transfer.color}`
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-4">
                {/* Tennis skill */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{transfer.tennisIcon}</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {transfer.tennisSkill}
                    </span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">Tennis</div>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${transfer.color}20` }}
                >
                  <motion.span
                    animate={isHovered ? { x: [0, 5, 0] } : {}}
                    transition={{ repeat: isHovered ? Infinity : 0, duration: 0.8 }}
                    style={{ color: transfer.color }}
                    className="text-lg font-bold"
                  >
                    →
                  </motion.span>
                </motion.div>

                {/* Life skill */}
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-2 mb-1">
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {transfer.lifeSkill}
                    </span>
                    <span className="text-xl">{transfer.lifeIcon}</span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)]">Livet</div>
                </div>
              </div>

              {/* Description on hover */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isHovered ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pt-3 mt-3 border-t border-[var(--glass-border)]">
                  <p className="text-sm text-[var(--text-secondary)] text-center italic">
                    &ldquo;{transfer.description}&rdquo;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary stat */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="glass rounded-xl p-6 text-center"
      >
        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">6+</div>
            <div className="text-xs text-[var(--text-secondary)]">overførbare ferdigheter</div>
          </div>
          <div className="text-3xl text-[var(--text-secondary)]">=</div>
          <div>
            <div className="text-3xl font-bold text-[var(--text-primary)]">∞</div>
            <div className="text-xs text-[var(--text-secondary)]">muligheter i livet</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
