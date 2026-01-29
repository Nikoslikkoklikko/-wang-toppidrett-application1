"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Goal {
  period: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  milestones: string[];
}

const goals: Goal[] = [
  {
    period: "VG1",
    title: "Etablere fundament",
    description: "Tilpasse meg Wang-miljøet og vise at jeg fortjener plassen min",
    icon: "🌱",
    color: "#00d4aa",
    milestones: [
      "Integrere meg i klassen",
      "Vise akademisk innsats",
      "Opprettholde treningsrutiner",
      "Bidra positivt til miljøet",
    ],
  },
  {
    period: "VG2",
    title: "Vokse og utvikle",
    description: "Bygge videre på fundamentet og ta mer ansvar",
    icon: "🌿",
    color: "#667eea",
    milestones: [
      "Forbedre akademiske resultater",
      "Utvikle tennisen videre",
      "Bli en ressurs for medstudenter",
      "Ta lederroller når mulig",
    ],
  },
  {
    period: "VG3",
    title: "Fullføre sterkt",
    description: "Levere på høyeste nivå og forberede neste steg",
    icon: "🌳",
    color: "#a855f7",
    milestones: [
      "Sterk avslutning akademisk",
      "Planlegge videre karriere",
      "Etterlate et positivt inntrykk",
      "Være mentor for yngre elever",
    ],
  },
];

const longTermGoals = [
  { icon: "🎾", text: "Profesjonell tenniskarriere", color: "#00d4aa" },
  { icon: "🎓", text: "Høyere utdanning", color: "#667eea" },
  { icon: "🌍", text: "Representere Norge internasjonalt", color: "#f59e0b" },
  { icon: "💡", text: "Inspirere andre unge utøvere", color: "#f43f5e" },
];

export default function GoalsTimeline() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });
  const [activeGoal, setActiveGoal] = useState<number>(0);

  return (
    <div ref={containerRef} className="space-y-8">
      {/* Period tabs */}
      <div className="flex justify-center gap-2">
        {goals.map((goal, index) => (
          <motion.button
            key={goal.period}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * index }}
            onClick={() => setActiveGoal(index)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 cursor-pointer ${
              activeGoal === index
                ? "text-white"
                : "glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            }`}
            style={{
              background: activeGoal === index ? goal.color : undefined,
              boxShadow: activeGoal === index ? `0 0 20px ${goal.color}50` : undefined,
            }}
          >
            {goal.period}
          </motion.button>
        ))}
      </div>

      {/* Timeline visualization */}
      <div className="relative">
        {/* Progress line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-[var(--glass-bg)] rounded-full">
          <motion.div
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${((activeGoal + 1) / goals.length) * 100}%` } : {}}
            transition={{ duration: 0.5 }}
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${goals[0].color}, ${goals[activeGoal].color})` }}
          />
        </div>

        {/* Timeline nodes */}
        <div className="flex justify-between relative z-10">
          {goals.map((goal, index) => {
            const isActive = index === activeGoal;
            const isPast = index < activeGoal;

            return (
              <motion.div
                key={goal.period}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.15, type: "spring" }}
                onClick={() => setActiveGoal(index)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    boxShadow: isActive ? `0 0 20px ${goal.color}60` : "none",
                  }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive || isPast ? "" : "glass"
                  }`}
                  style={{
                    background: isActive || isPast ? goal.color : undefined,
                  }}
                >
                  <span className="text-2xl">{goal.icon}</span>
                </motion.div>
                <span className={`mt-2 text-sm font-medium transition-colors ${
                  isActive ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                }`}>
                  {goal.period}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Active goal details */}
      <motion.div
        key={activeGoal}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="glass rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{goals[activeGoal].icon}</span>
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] text-lg">
              {goals[activeGoal].title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)]">
              {goals[activeGoal].description}
            </p>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 gap-3">
          {goals[activeGoal].milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i }}
              className="flex items-center gap-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: goals[activeGoal].color }}
              >
                {i + 1}
              </motion.div>
              <span className="text-sm text-[var(--text-secondary)]">{milestone}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Long-term vision */}
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mb-4"
        >
          <span className="text-sm text-[var(--text-secondary)]">Langsiktig visjon</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {longTermGoals.map((goal, index) => (
            <motion.div
              key={goal.text}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="glass rounded-xl p-4 text-center group hover:scale-105 transition-transform cursor-default"
            >
              <motion.span
                className="text-2xl block mb-2"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
              >
                {goal.icon}
              </motion.span>
              <span className="text-xs text-[var(--text-secondary)]">{goal.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Commitment statement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1 }}
        className="glass-strong rounded-xl p-6 text-center"
        style={{
          background: `linear-gradient(135deg, ${goals[0].color}10, ${goals[2].color}10)`,
        }}
      >
        <p className="text-[var(--text-primary)] font-medium">
          Jeg er forpliktet til å gi <span className="text-[var(--accent)]">100%</span> hver dag,
          fra <span className="text-[var(--accent)]">VG1</span> til <span className="text-[var(--accent)]">VG3</span>
        </p>
      </motion.div>
    </div>
  );
}
