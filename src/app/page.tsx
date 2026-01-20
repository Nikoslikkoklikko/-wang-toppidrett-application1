"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";

// Tennis ball component
function TennisBall() {
  return (
    <motion.div
      className="relative w-20 h-20 mx-auto mb-8"
      animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="w-full h-full rounded-full relative"
        style={{
          background: "linear-gradient(135deg, #c5e84d 0%, #9fc439 50%, #7ea32d 100%)",
          boxShadow: `
            inset -8px -8px 20px rgba(0,0,0,0.2),
            inset 4px 4px 10px rgba(255,255,255,0.4),
            0 10px 40px rgba(45, 90, 39, 0.2),
            0 0 60px rgba(45, 90, 39, 0.1)
          `,
        }}
      >
        {/* Tennis ball curve lines */}
        <div
          className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2"
          style={{
            background: "rgba(255,255,255,0.7)",
            transform: "translateY(-50%) rotate(-20deg) scaleX(1.2)",
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2"
          style={{
            background: "rgba(255,255,255,0.5)",
            transform: "translateX(-50%) rotate(20deg) scaleY(1.1)",
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
        />
      </div>
      {/* Glow effect - subtle for light theme */}
      <div
        className="absolute inset-0 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(45, 90, 39, 0.15) 0%, transparent 70%)",
          transform: "scale(1.5)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient orbs - subtle for light theme */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 39, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(74, 143, 65, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <TennisBall />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-gradient-static"
          >
            Nikolai Tingstad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-12"
          >
            Søknad til Wang Toppidrett
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed mb-6">
              Jeg har et stort ønske om å starte på Wang Toppidrett. Jeg hadde tenkt å begynne på ungdomsskolen deres,
              og jeg brukte mye tid på å forberede meg og teste. I ettertid har jeg sett at det ikke var riktig timing –
              men nå er jeg klar til å bevise at jeg{" "}
              <span className="text-[var(--accent)] font-semibold">har det som trengs</span>.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Tennis er min lidenskap. Det har aldri vært den enkleste veien, men jeg har valgt å fortsette –
              ikke bare fordi jeg er god, men fordi jeg har bestemt meg for hvor jeg skal.
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex justify-center pt-2"
            >
              <motion.div
                animate={{ opacity: [1, 0, 1], y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-[var(--accent)] rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-center mb-12 text-[var(--text-primary)]"
          >
            I tall
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard value="5.0" label="Karaktersnitt" />
            <StatCard value="4-6" label="Timer daglig" suffix="t" />
            <StatCard value="0" label="Anmerkninger" />
            <StatCard value="10" label="År med skole" />
          </div>
        </div>
      </section>

      {/* Navigation hint */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gradient-static">
              Utforsk min historie
            </h2>
            <p className="text-[var(--text-secondary)] text-lg mb-10 max-w-xl mx-auto">
              Bruk menyen i øvre høyre hjørne for å navigere gjennom min reise, fra tennis til akademiske prestasjoner.
            </p>
            <div className="flex items-center justify-center gap-2 text-[var(--text-secondary)]">
              <span>Klikk på</span>
              <div className="w-8 h-8 flex items-center justify-center rounded-full glass">
                <div className="w-4 h-3 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-[var(--text-primary)] rounded-full" />
                  <span className="w-full h-0.5 bg-[var(--text-primary)] rounded-full" />
                  <span className="w-full h-0.5 bg-[var(--text-primary)] rounded-full" />
                </div>
              </div>
              <span>for å åpne menyen</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
