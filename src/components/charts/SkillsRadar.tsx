"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { skill: "Mental styrke", value: 95, fullMark: 100 },
  { skill: "Disiplin", value: 98, fullMark: 100 },
  { skill: "Akademisk", value: 88, fullMark: 100 },
  { skill: "Fysisk", value: 85, fullMark: 100 },
  { skill: "Tennis teknikk", value: 75, fullMark: 100 },
  { skill: "Selvstendighet", value: 90, fullMark: 100 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ value: number; payload: { skill: string } }>;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="glass-strong rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-[var(--text-primary)]">
          {payload[0].payload.skill}
        </p>
        <p className="text-[var(--accent)] text-lg font-bold">
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
}

export default function SkillsRadar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="chart-container"
    >
      <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-2">
        Mine styrker
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-6">
        En oversikt over mine ferdigheter og egenskaper
      </p>

      <div className="h-[350px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid stroke="var(--chart-grid)" />
              <PolarAngleAxis
                dataKey="skill"
                tick={{ fill: "var(--text-secondary)", fontSize: 11 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[0, 100]}
                tick={{ fill: "var(--text-secondary)", fontSize: 10 }}
              />
              <Radar
                name="Nikolai"
                dataKey="value"
                stroke="var(--chart-primary)"
                fill="var(--chart-primary)"
                fillOpacity={0.4}
                strokeWidth={2}
                animationDuration={2000}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Legend with skill details */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
        {data.map((item, index) => (
          <motion.div
            key={item.skill}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            className="flex items-center gap-2"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background: `hsl(${120 + index * 10}, 50%, ${40 + index * 5}%)`,
              }}
            />
            <span className="text-xs text-[var(--text-secondary)]">
              {item.skill}: <span className="text-[var(--accent)] font-semibold">{item.value}%</span>
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
