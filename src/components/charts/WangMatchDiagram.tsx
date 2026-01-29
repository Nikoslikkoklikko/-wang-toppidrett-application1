"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface MatchItem {
  myQuality: string;
  myIcon: string;
  wangOffers: string;
  wangIcon: string;
  matchScore: number;
  color: string;
}

const matchItems: MatchItem[] = [
  {
    myQuality: "Ekstrem disiplin",
    myIcon: "💪",
    wangOffers: "Krevende miljø",
    wangIcon: "🏆",
    matchScore: 98,
    color: "#00d4aa",
  },
  {
    myQuality: "Akademisk fokus",
    myIcon: "📚",
    wangOffers: "Sterk akademisk tradisjon",
    wangIcon: "🎓",
    matchScore: 95,
    color: "#667eea",
  },
  {
    myQuality: "Toppidrett-erfaring",
    myIcon: "🎾",
    wangOffers: "Toppidrett-forståelse",
    wangIcon: "⚡",
    matchScore: 100,
    color: "#f59e0b",
  },
  {
    myQuality: "Selvstendighet",
    myIcon: "🏠",
    wangOffers: "Fleksibilitet",
    wangIcon: "🔄",
    matchScore: 92,
    color: "#a855f7",
  },
  {
    myQuality: "Ambisjon",
    myIcon: "🚀",
    wangOffers: "Likesinnede elever",
    wangIcon: "👥",
    matchScore: 97,
    color: "#f43f5e",
  },
];

const averageMatch = Math.round(matchItems.reduce((acc, item) => acc + item.matchScore, 0) / matchItems.length);

export default function WangMatchDiagram() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Header with match percentage */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ type: "spring", duration: 0.8 }}
          className="inline-flex items-center justify-center w-32 h-32 rounded-full glass-strong relative"
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="var(--glass-border)"
              strokeWidth="8"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="url(#matchGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 56}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
              animate={isInView ? { strokeDashoffset: 2 * Math.PI * 56 * (1 - averageMatch / 100) } : {}}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
            <defs>
              <linearGradient id="matchGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00d4aa" />
                <stop offset="100%" stopColor="#667eea" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="text-3xl font-bold text-[var(--accent)]"
            >
              {averageMatch}%
            </motion.div>
            <div className="text-xs text-[var(--text-secondary)]">match</div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-sm text-[var(--text-secondary)] mt-4"
        >
          Kompatibilitet mellom meg og Wang Toppidrett
        </motion.p>
      </div>

      {/* Match items */}
      <div className="space-y-4">
        {matchItems.map((item, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`glass rounded-xl p-4 cursor-pointer transition-all duration-300 ${
                isHovered ? "scale-[1.02]" : ""
              }`}
              style={{
                boxShadow: isHovered ? `0 0 25px ${item.color}30` : "none"
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-4">
                {/* My quality */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.myIcon}</span>
                    <span className="text-sm font-medium text-[var(--text-primary)]">{item.myQuality}</span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Meg</div>
                </div>

                {/* Match indicator */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="w-12 h-12 rounded-full flex items-center justify-center relative"
                    style={{ background: `${item.color}20` }}
                  >
                    <motion.div
                      animate={isHovered ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ repeat: isHovered ? Infinity : 0, duration: 1 }}
                      className="text-lg font-bold"
                      style={{ color: item.color }}
                    >
                      {item.matchScore}
                    </motion.div>
                  </motion.div>
                  <div className="text-[10px] text-[var(--text-secondary)] mt-1">%</div>
                </div>

                {/* Wang offers */}
                <div className="flex-1 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-sm font-medium text-[var(--text-primary)]">{item.wangOffers}</span>
                    <span className="text-xl">{item.wangIcon}</span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] mt-1">Wang</div>
                </div>
              </div>

              {/* Match bar */}
              <div className="mt-3 h-1.5 rounded-full bg-[var(--glass-bg)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.matchScore}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}aa)` }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="glass rounded-xl p-4 text-center"
      >
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="text-[var(--accent)] font-bold">5 av 5</span> nøkkelkvaliteter matcher
          {" "}med Wang Toppidrett sine verdier
        </p>
      </motion.div>
    </div>
  );
}
