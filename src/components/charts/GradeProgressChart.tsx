"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface GradeData {
  year: string;
  grade: number;
  label: string;
}

const gradeData: GradeData[] = [
  { year: "8. klasse", grade: 4.2, label: "Start" },
  { year: "9. klasse", grade: 4.5, label: "Fremgang" },
  { year: "10. klasse", grade: 5.0, label: "Dysleksi-diagnose" },
];

export default function GradeProgressChart() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState<GradeData | null>(null);

  const maxGrade = 6;
  const minGrade = 3;
  const range = maxGrade - minGrade;

  const getYPosition = (grade: number) => {
    return 100 - ((grade - minGrade) / range) * 100;
  };

  // Create path for the line
  const points = gradeData.map((d, i) => {
    const x = (i / (gradeData.length - 1)) * 100;
    const y = getYPosition(d.grade);
    return { x, y, data: d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="space-y-4"
    >
      <div className="text-center mb-6">
        <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
          Karakterutvikling gjennom ungdomsskolen
        </h4>
        <p className="text-[var(--text-secondary)] text-sm">
          Fra 4.2 til 5.0 i snitt - til tross for dysleksi-diagnose
        </p>
      </div>

      {/* Chart container */}
      <div className="relative h-64 glass rounded-xl p-6">
        {/* Y-axis labels */}
        <div className="absolute left-2 top-6 bottom-6 flex flex-col justify-between text-xs text-[var(--text-secondary)]">
          <span>6.0</span>
          <span>5.0</span>
          <span>4.0</span>
          <span>3.0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0">
            {[3, 4, 5, 6].map(grade => (
              <div
                key={grade}
                className="absolute w-full border-t border-[var(--text-secondary)] opacity-20"
                style={{ top: `${getYPosition(grade)}%` }}
              />
            ))}
          </div>

          {/* SVG for line chart */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {/* Gradient fill under line */}
            <defs>
              <linearGradient id="gradeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Area fill */}
            {isVisible && (
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                d={`${linePath} L 100 100 L 0 100 Z`}
                fill="url(#gradeGradient)"
              />
            )}

            {/* Line */}
            {isVisible && (
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d={linePath}
                fill="none"
                stroke="var(--accent)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            )}

            {/* Data points */}
            {isVisible && points.map((point, index) => (
              <motion.g key={index}>
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                  cx={`${point.x}%`}
                  cy={`${point.y}%`}
                  r="8"
                  fill="var(--bg-primary)"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  className="cursor-pointer"
                  onMouseEnter={() => setHoveredPoint(point.data)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                {/* Glow effect on hover */}
                {hoveredPoint === point.data && (
                  <circle
                    cx={`${point.x}%`}
                    cy={`${point.y}%`}
                    r="12"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    opacity="0.5"
                  />
                )}
              </motion.g>
            ))}
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-[-30px] left-0 right-0 flex justify-between text-xs text-[var(--text-secondary)]">
            {gradeData.map((d, i) => (
              <span key={i} className="text-center">{d.year}</span>
            ))}
          </div>
        </div>

        {/* Tooltip */}
        {hoveredPoint && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-2 right-2 glass-strong rounded-xl px-4 py-2 z-10"
          >
            <div className="text-[var(--accent)] font-bold text-2xl">{hoveredPoint.grade}</div>
            <div className="text-[var(--text-secondary)] text-sm">{hoveredPoint.year}</div>
            <div className="text-[var(--text-primary)] text-xs">{hoveredPoint.label}</div>
          </motion.div>
        )}
      </div>

      {/* Improvement stat */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center gap-8 mt-8"
      >
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--accent)]">+0.8</div>
          <div className="text-sm text-[var(--text-secondary)]">karakterforbedring</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-[var(--accent)]">19%</div>
          <div className="text-sm text-[var(--text-secondary)]">økning i snitt</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
