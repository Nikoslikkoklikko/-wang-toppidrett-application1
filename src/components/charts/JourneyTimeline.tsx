"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Milestone {
  year: number;
  age: number;
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
}

const milestones: Milestone[] = [
  {
    year: 2014,
    age: 6,
    title: "Startet med tennis",
    description: "Begynte min tennisreise som 6-åring. Tok meg alltid først til trening og dro sist.",
    icon: "🎾",
  },
  {
    year: 2020,
    age: 12,
    title: "Skade og tilbakeslag",
    description: "Fikk en skade som satte meg tilbake. Etter skaden tapte jeg mot alle på trening, men jeg ga aldri opp. Brukte det som motivasjon til å jobbe enda hardere.",
    icon: "💪",
  },
  {
    year: 2023,
    age: 15,
    title: "Første Wang-søknad",
    description: "Søkte til Wang Toppidrett for første gang, men kom ikke inn. I stedet for å gi opp, brukte jeg avslaget som motivasjon til å bli bedre.",
    icon: "📝",
  },
  {
    year: 2024,
    age: 15,
    title: "Dysleksi & 5.0 snitt",
    description: "Fikk diagnosen dysleksi i 10. klasse, men lot det ikke stoppe meg. Gikk ut med 5.0 i snitt - en forbedring fra 4.2 i 8. klasse.",
    icon: "📚",
    highlight: true,
  },
  {
    year: 2025,
    age: 16,
    title: "Flyttet til Spania",
    description: "Tok det store steget og flyttet alene til Spania for å satse på tennis på heltid. Trener nå 4-6 timer daglig på internasjonalt nivå.",
    icon: "🇪🇸",
    highlight: true,
  },
  {
    year: 2026,
    age: 16,
    title: "Ny Wang-søknad",
    description: "Søker på nytt til Wang Toppidrett - denne gangen med mer erfaring, bedre ferdigheter, og bevist disiplin og mental styrke.",
    icon: "🎯",
    highlight: true,
  },
];

export default function JourneyTimeline() {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-12"
    >
      <h3 className="font-serif text-3xl text-[var(--text-primary)] text-center mb-4">
        Min reise
      </h3>
      <p className="text-[var(--text-secondary)] text-center mb-12 max-w-xl mx-auto">
        Klikk på milepælene for å lære mer om min utvikling
      </p>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)] transform -translate-x-1/2" />

        {/* Milestones */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                <motion.button
                  onClick={() => setSelectedMilestone(selectedMilestone?.year === milestone.year ? null : milestone)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full p-4 rounded-xl glass text-left cursor-pointer
                    transition-all duration-300
                    ${milestone.highlight ? "border-[var(--accent)] glow-sm" : ""}
                    ${selectedMilestone?.year === milestone.year ? "border-[var(--accent)] glow-md" : ""}
                    hover:border-[var(--accent)]
                  `}
                >
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <span className="text-2xl">{milestone.icon}</span>
                    <span className="text-[var(--accent)] font-bold">{milestone.year}</span>
                    <span className="text-[var(--text-secondary)] text-sm">({milestone.age} år)</span>
                  </div>
                  <h4 className="font-semibold text-[var(--text-primary)]">{milestone.title}</h4>
                </motion.button>
              </div>

              {/* Center dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 z-10"
                whileHover={{ scale: 1.5 }}
              >
                <div
                  className={`
                    w-4 h-4 rounded-full bg-[var(--accent)]
                    ${milestone.highlight ? "glow-md" : "glow-sm"}
                  `}
                />
              </motion.div>

              {/* Empty space for the other side */}
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded detail modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="max-w-2xl mx-auto mt-8 px-4"
          >
            <div className="glass-strong rounded-2xl p-6 glow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{selectedMilestone.icon}</span>
                <div>
                  <h4 className="font-serif text-2xl text-[var(--text-primary)]">
                    {selectedMilestone.title}
                  </h4>
                  <p className="text-[var(--accent)]">
                    {selectedMilestone.year} - {selectedMilestone.age} år gammel
                  </p>
                </div>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {selectedMilestone.description}
              </p>
              <button
                onClick={() => setSelectedMilestone(null)}
                className="mt-4 text-sm text-[var(--accent)] hover:underline cursor-pointer"
              >
                Lukk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
