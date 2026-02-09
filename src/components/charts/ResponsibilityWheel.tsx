"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Responsibility {
  category: string;
  tasks: string[];
  icon: string;
  color: string;
  hoursPerWeek: number;
}

const responsibilities: Responsibility[] = [
  {
    category: "Måltider",
    tasks: ["Planlegge ukesmeny", "Handle mat", "Lage frokost, lunsj, middag", "Riktig næring for trening"],
    icon: "🍳",
    color: "#f97316",
    hoursPerWeek: 10,
  },
  {
    category: "Økonomi",
    tasks: ["Budsjettere månedlig", "Betale regninger", "Spare til utstyr", "Valutahåndtering NOK/EUR"],
    icon: "💰",
    color: "#fbbf24",
    hoursPerWeek: 2,
  },
  {
    category: "Trening",
    tasks: ["Planlegge treningsøkter", "Restitusjon og søvn", "Utstyrsvedlikehold", "Kommunikasjon med trenere"],
    icon: "🎾",
    color: "#00d4aa",
    hoursPerWeek: 35,
  },
  {
    category: "Skole",
    tasks: ["Følge opp oppgaver", "Planlegge innleveringer", "Ta eksamener selvstendig", "Kommunisere med lærere"],
    icon: "📚",
    color: "#667eea",
    hoursPerWeek: 15,
  },
  {
    category: "Hjem & helse",
    tasks: ["Vaske og rydde", "Vaske klær", "Legge seg tidsnok", "Håndtere sykdom alene"],
    icon: "🏠",
    color: "#a855f7",
    hoursPerWeek: 5,
  },
  {
    category: "Mental helse",
    tasks: ["Håndtere ensomhet", "Motivere meg selv", "Håndtere stress", "Holde kontakt med familie"],
    icon: "🧠",
    color: "#f43f5e",
    hoursPerWeek: 3,
  },
];

const totalHours = responsibilities.reduce((acc, r) => acc + r.hoursPerWeek, 0);

export default function ResponsibilityWheel() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [selectedCategory, setSelectedCategory] = useState<Responsibility | null>(null);

  return (
    <div ref={containerRef} className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-sm text-[var(--text-secondary)] mb-2"
        >
          Ukentlig ansvar som 16-åring i Spania
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-[var(--accent)]"
        >
          {totalHours} timer
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-sm text-[var(--text-secondary)]"
        >
          med selvstendige oppgaver per uke
        </motion.div>
      </div>

      {/* Circular breakdown */}
      <div className="relative flex justify-center py-8">
        <svg width="280" height="280" viewBox="0 0 280 280" className="transform -rotate-90">
          {responsibilities.map((resp, index) => {
            const percentage = (resp.hoursPerWeek / totalHours) * 100;
            const previousPercentages = responsibilities
              .slice(0, index)
              .reduce((acc, r) => acc + (r.hoursPerWeek / totalHours) * 100, 0);

            const circumference = 2 * Math.PI * 100;
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -(previousPercentages / 100) * circumference;
            const isSelected = selectedCategory?.category === resp.category;

            return (
              <motion.circle
                key={resp.category}
                cx="140"
                cy="140"
                r="100"
                fill="none"
                stroke={resp.color}
                strokeWidth={isSelected ? 35 : 28}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ opacity: 0, strokeDasharray: `0 ${circumference}` }}
                animate={isInView ? {
                  opacity: 1,
                  strokeDasharray,
                  strokeWidth: isSelected ? 35 : 28
                } : {}}
                transition={{ duration: 1, delay: 0.1 * index }}
                className="cursor-pointer transition-all duration-300"
                style={{
                  filter: isSelected ? `drop-shadow(0 0 10px ${resp.color})` : "none"
                }}
                onMouseEnter={() => setSelectedCategory(resp)}
                onMouseLeave={() => setSelectedCategory(null)}
              />
            );
          })}
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            {selectedCategory ? (
              <>
                <div className="text-3xl mb-1">{selectedCategory.icon}</div>
                <div className="text-lg font-bold text-[var(--text-primary)]">{selectedCategory.hoursPerWeek}t</div>
                <div className="text-xs text-[var(--text-secondary)]">{selectedCategory.category}</div>
              </>
            ) : (
              <>
                <div className="text-3xl mb-1">⚡</div>
                <div className="text-xs text-[var(--text-secondary)]">Hover for detaljer</div>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {responsibilities.map((resp, index) => {
          const isSelected = selectedCategory?.category === resp.category;
          const percentage = Math.round((resp.hoursPerWeek / totalHours) * 100);

          return (
            <motion.div
              key={resp.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className={`glass rounded-xl p-3 cursor-pointer transition-all duration-300 ${
                isSelected ? "ring-2" : ""
              }`}
              style={{
                borderColor: isSelected ? resp.color : "transparent",
                boxShadow: isSelected ? `0 0 15px ${resp.color}40` : "none"
              }}
              onMouseEnter={() => setSelectedCategory(resp)}
              onMouseLeave={() => setSelectedCategory(null)}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{resp.icon}</span>
                <div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">{resp.category}</div>
                  <div className="text-xs text-[var(--text-secondary)]">{resp.hoursPerWeek}t/uke ({percentage}%)</div>
                </div>
              </div>

              {/* Mini progress bar */}
              <div className="h-1.5 rounded-full bg-[var(--glass-bg)] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${percentage}%` } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: resp.color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expanded task list */}
      {selectedCategory && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="glass rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{selectedCategory.icon}</span>
            <span className="font-medium text-[var(--text-primary)]">{selectedCategory.category} - oppgaver</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {selectedCategory.tasks.map((task, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: selectedCategory.color }}
                />
                {task}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
