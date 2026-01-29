"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataPoint {
  name: string;
  karaktersnitt: number;
  treningstimer: number;
}

const data: DataPoint[] = [
  { name: "8. klasse", karaktersnitt: 4.2, treningstimer: 2 },
  { name: "9. klasse", karaktersnitt: 4.6, treningstimer: 3 },
  { name: "10. klasse", karaktersnitt: 5.0, treningstimer: 4 },
  { name: "Spania", karaktersnitt: 5.0, treningstimer: 5 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="glass-strong rounded-lg p-4 shadow-lg">
        <p className="font-semibold text-[var(--text-primary)] mb-2">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name === "karaktersnitt" ? "Karaktersnitt" : "Treningstimer"}: {entry.value}
            {entry.name === "treningstimer" ? "t/dag" : ""}
          </p>
        ))}
      </div>
    );
  }
  return null;
}

export default function ProgressChart() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="chart-container"
    >
      <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-2">
        Min utvikling
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-6">
        Karaktersnitt og treningstimer over tid
      </p>

      <div className="h-[300px] w-full">
        {isVisible && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorKarakter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-primary)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--chart-primary)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorTrening" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-secondary)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--chart-secondary)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--chart-grid)" />
              <XAxis
                dataKey="name"
                stroke="var(--text-secondary)"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="var(--text-secondary)"
                fontSize={12}
                tickLine={false}
                domain={[0, 6]}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="karaktersnitt"
                stroke="var(--chart-primary)"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorKarakter)"
                animationDuration={2000}
              />
              <Area
                type="monotone"
                dataKey="treningstimer"
                stroke="var(--chart-secondary)"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorTrening)"
                animationDuration={2000}
                animationBegin={500}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>

      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--chart-primary)]" />
          <span className="text-sm text-[var(--text-secondary)]">Karaktersnitt</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[var(--chart-secondary)]" />
          <span className="text-sm text-[var(--text-secondary)]">Treningstimer/dag</span>
        </div>
      </div>
    </motion.div>
  );
}
