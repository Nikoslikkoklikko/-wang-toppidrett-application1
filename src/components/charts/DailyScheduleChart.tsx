"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

interface ScheduleBlock {
  start: number;
  end: number;
  activity: string;
  color: string;
  icon: string;
  isTraining?: boolean;
}

const norwaySchedule: ScheduleBlock[] = [
  { start: 7, end: 8, activity: "Frokost & reise", color: "linear-gradient(135deg, #636e72 0%, #4a5568 100%)", icon: "🚌" },
  { start: 8, end: 15, activity: "Skole", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", icon: "📚" },
  { start: 15, end: 16, activity: "Reise & mat", color: "linear-gradient(135deg, #636e72 0%, #4a5568 100%)", icon: "🍎" },
  { start: 16, end: 19, activity: "Ettermiddagstrening", color: "linear-gradient(135deg, #00d4aa 0%, #00b894 100%)", icon: "🎾", isTraining: true },
  { start: 19, end: 20, activity: "Reise hjem", color: "linear-gradient(135deg, #636e72 0%, #4a5568 100%)", icon: "🏠" },
  { start: 20, end: 22, activity: "Middag & lekser", color: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)", icon: "✏️" },
  { start: 22, end: 23, activity: "Søvn", color: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)", icon: "😴" },
];

const spainSchedule: ScheduleBlock[] = [
  { start: 7, end: 8, activity: "Frokost & forberedelse", color: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", icon: "🍳" },
  { start: 8, end: 10, activity: "Morgentrening", color: "linear-gradient(135deg, #00d4aa 0%, #00b894 100%)", icon: "🎾", isTraining: true },
  { start: 10, end: 11, activity: "Skole", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", icon: "📚" },
  { start: 11, end: 13, activity: "Lunsj & hvile", color: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)", icon: "🥗" },
  { start: 13, end: 16, activity: "Ettermiddagstrening", color: "linear-gradient(135deg, #00d4aa 0%, #00b894 100%)", icon: "🎾", isTraining: true },
  { start: 16, end: 17, activity: "Fysisk trening", color: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)", icon: "💪", isTraining: true },
  { start: 17, end: 19, activity: "Middag & restitusjon", color: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)", icon: "🍽️" },
  { start: 19, end: 21, activity: "Fritid & læring", color: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)", icon: "🧠" },
  { start: 21, end: 23, activity: "Søvn", color: "linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)", icon: "😴" },
];

interface ScheduleBarProps {
  schedule: ScheduleBlock[];
  label: string;
  flag: string;
  totalHours: number;
  startHour: number;
  hoveredBlock: ScheduleBlock | null;
  setHoveredBlock: (block: ScheduleBlock | null) => void;
  delayOffset: number;
}

function ScheduleBar({
  schedule,
  label,
  flag,
  totalHours,
  startHour,
  hoveredBlock,
  setHoveredBlock,
  delayOffset
}: ScheduleBarProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delayOffset }}
        className="w-32 flex-shrink-0 text-right"
      >
        <span className="text-lg mr-2">{flag}</span>
        <span className="text-sm text-[var(--text-secondary)]">{label}</span>
      </motion.div>

      {/* Schedule bar */}
      <div className="relative h-14 rounded-xl overflow-hidden glass flex-1">
        <div className="absolute inset-0 flex">
          {schedule.map((block, index) => {
            const width = ((block.end - block.start) / totalHours) * 100;
            const left = ((block.start - startHour) / totalHours) * 100;
            const isHovered = hoveredBlock === block;

            return (
              <motion.div
                key={index}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: delayOffset + 0.1 + index * 0.03 }}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  width: `${width}%`,
                  background: block.color,
                  transformOrigin: "left",
                }}
                className={`h-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                  block.isTraining ? "training-glow" : ""
                } ${isHovered ? "brightness-125 z-10" : "hover:brightness-110"}`}
                onMouseEnter={() => setHoveredBlock(block)}
                onMouseLeave={() => setHoveredBlock(null)}
              >
                <span className={`transition-transform duration-200 ${isHovered ? "scale-125" : ""}`}>
                  {width > 5 ? block.icon : ""}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  label: string;
  before: number | string;
  after: number | string;
  unit: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  delay: number;
}

function MetricCard({ label, before, after, unit, change, changeType, delay }: MetricCardProps) {
  const changeColors = {
    positive: "text-green-400",
    negative: "text-red-400",
    neutral: "text-[var(--text-secondary)]",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass rounded-xl p-4 text-center"
    >
      <div className="text-sm text-[var(--text-secondary)] mb-2">{label}</div>
      <div className="flex items-center justify-center gap-2">
        <span className="text-lg text-[var(--text-secondary)]">{before} {unit}</span>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="text-[var(--accent)]"
        >
          →
        </motion.span>
        <span className="text-lg font-bold text-[var(--text-primary)]">{after} {unit}</span>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: delay + 0.4 }}
        className={`text-sm font-medium mt-1 ${changeColors[changeType]}`}
      >
        {change}
      </motion.div>
    </motion.div>
  );
}

export default function DailyScheduleChart() {
  const [hoveredBlock, setHoveredBlock] = useState<ScheduleBlock | null>(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const totalHours = 18; // From 5am to 23pm
  const startHour = 5;

  const getTrainingHours = (sched: ScheduleBlock[]) => {
    return sched
      .filter(b => b.isTraining)
      .reduce((acc, b) => acc + (b.end - b.start), 0);
  };

  const getSchoolHours = (sched: ScheduleBlock[]) => {
    return sched
      .filter(b => b.activity.toLowerCase().includes("skole"))
      .reduce((acc, b) => acc + (b.end - b.start), 0);
  };

  const getTravelHours = (sched: ScheduleBlock[]) => {
    return sched
      .filter(b => b.activity.toLowerCase().includes("reise"))
      .reduce((acc, b) => acc + (b.end - b.start), 0);
  };

  const norwayTraining = getTrainingHours(norwaySchedule);
  const spainTraining = getTrainingHours(spainSchedule);
  const norwaySchool = getSchoolHours(norwaySchedule);
  const spainSchool = getSchoolHours(spainSchedule);
  const norwayTravel = getTravelHours(norwaySchedule);
  const spainTravel = getTravelHours(spainSchedule);

  const trainingIncrease = Math.round(((spainTraining - norwayTraining) / norwayTraining) * 100);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Dual Schedule View */}
      {isInView && (
        <div className="space-y-4">
          {/* Norway Schedule */}
          <ScheduleBar
            schedule={norwaySchedule}
            label="Norge (før)"
            flag="🇳🇴"
            totalHours={totalHours}
            startHour={startHour}
            hoveredBlock={hoveredBlock}
            setHoveredBlock={setHoveredBlock}
            delayOffset={0}
          />

          {/* Spain Schedule */}
          <ScheduleBar
            schedule={spainSchedule}
            label="Spania (nå)"
            flag="🇪🇸"
            totalHours={totalHours}
            startHour={startHour}
            hoveredBlock={hoveredBlock}
            setHoveredBlock={setHoveredBlock}
            delayOffset={0.3}
          />

          {/* Shared Time Axis */}
          <div className="flex items-center gap-4">
            <div className="w-32 flex-shrink-0" />
            <div className="flex-1 flex justify-between text-xs text-[var(--text-secondary)] px-1">
              {[5, 8, 11, 14, 17, 20, 23].map((hour, index) => (
                <motion.span
                  key={hour}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                >
                  {hour.toString().padStart(2, "0")}:00
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hover Tooltip */}
      {hoveredBlock && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong rounded-xl px-4 py-2 text-center mx-auto w-fit"
        >
          <span className="text-2xl mr-2">{hoveredBlock.icon}</span>
          <span className="text-[var(--text-primary)] font-medium">{hoveredBlock.activity}</span>
          <span className="text-[var(--text-secondary)] ml-2">
            ({hoveredBlock.end - hoveredBlock.start} timer)
          </span>
        </motion.div>
      )}

      {/* Comparison Metrics Panel */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-4">
            <span className="text-sm text-[var(--text-secondary)]">Nøkkeltall sammenligning</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <MetricCard
              label="Treningstimer"
              before={norwayTraining}
              after={spainTraining}
              unit="timer"
              change={`+${trainingIncrease}% mer tennis`}
              changeType="positive"
              delay={0.9}
            />
            <MetricCard
              label="Skoletimer"
              before={norwaySchool}
              after={spainSchool}
              unit="timer"
              change="100% tennis-fokus"
              changeType="positive"
              delay={1.0}
            />
            <MetricCard
              label="Reisetid"
              before={norwayTravel}
              after={spainTravel}
              unit="timer"
              change="Ingen pendling"
              changeType="positive"
              delay={1.1}
            />
          </div>
        </motion.div>
      )}

      {/* Tennis Focus Indicator */}
      {isInView && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="glass rounded-xl p-6 text-center"
        >
          <div className="text-sm text-[var(--text-secondary)] mb-3">Tennis-fokus i hverdagen</div>
          <div className="flex justify-center items-center gap-8">
            <div>
              <span className="text-[var(--text-secondary)]">🇳🇴 Norge</span>
              <div className="text-2xl font-bold text-[var(--text-primary)] mt-1">
                50%
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 1.4, type: "spring" }}
              className="text-4xl text-[var(--accent)]"
            >
              →
            </motion.div>
            <div>
              <span className="text-[var(--text-secondary)]">🇪🇸 Spania</span>
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-3xl font-bold text-[var(--accent)] mt-1 glow-text"
              >
                90%
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="flex flex-wrap justify-center gap-3 pt-4"
      >
        {[
          { color: "linear-gradient(135deg, #00d4aa 0%, #00b894 100%)", label: "Tennis-trening", icon: "🎾" },
          { color: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)", label: "Fysisk trening", icon: "💪" },
          { color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", label: "Skole", icon: "📚" },
          { color: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)", label: "Måltider & hvile", icon: "🥗" },
          { color: "linear-gradient(135deg, #636e72 0%, #4a5568 100%)", label: "Transport/annet", icon: "🚌" },
          { color: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)", label: "Læring", icon: "🧠" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div
              className={`w-3 h-3 rounded-full ${item.label === "Tennis-trening" ? "training-glow-mini" : ""}`}
              style={{ background: item.color }}
            />
            <span className="text-[var(--text-secondary)]">{item.icon} {item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Training glow animation styles */}
      <style jsx>{`
        :global(.training-glow) {
          box-shadow: 0 0 20px rgba(0, 212, 170, 0.6), 0 0 40px rgba(0, 184, 148, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.15);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        :global(.training-glow-mini) {
          box-shadow: 0 0 8px rgba(0, 212, 170, 0.8);
        }
        :global(.glow-text) {
          text-shadow: 0 0 20px var(--accent), 0 0 40px rgba(0, 212, 170, 0.5);
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 170, 0.6), 0 0 40px rgba(0, 184, 148, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.15); }
          50% { box-shadow: 0 0 30px rgba(0, 212, 170, 0.8), 0 0 60px rgba(0, 184, 148, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.2); }
        }
      `}</style>
    </div>
  );
}
