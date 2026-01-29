"use client";

import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import FloatingParticles from "@/components/effects/FloatingParticles";
import SkillsRadar from "@/components/charts/SkillsRadar";
import ProgressChart from "@/components/charts/ProgressChart";
import GlassCard from "@/components/GlassCard";

// Tennis ball component - updated for dark theme
function TennisBall() {
  return (
    <motion.div
      className="relative w-24 h-24 mx-auto mb-8"
      animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="w-full h-full rounded-full relative"
        style={{
          background: "linear-gradient(135deg, #d4ff00 0%, #c6f135 50%, #9bc22a 100%)",
          boxShadow: `
            inset -8px -8px 20px rgba(0,0,0,0.3),
            inset 4px 4px 10px rgba(255,255,255,0.5),
            0 0 60px rgba(198, 241, 53, 0.5),
            0 0 120px rgba(198, 241, 53, 0.3)
          `,
        }}
      >
        {/* Tennis ball curve lines */}
        <div
          className="absolute top-1/2 left-0 right-0 h-1"
          style={{
            background: "rgba(255,255,255,0.8)",
            transform: "translateY(-50%) rotate(-20deg) scaleX(1.2)",
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
        />
        <div
          className="absolute top-0 bottom-0 left-1/2 w-1"
          style={{
            background: "rgba(255,255,255,0.6)",
            transform: "translateX(-50%) rotate(20deg) scaleY(1.1)",
            borderRadius: "50%",
            filter: "blur(0.5px)",
          }}
        />
      </div>
      {/* Neon glow effect */}
      <div
        className="absolute inset-0 rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, rgba(198, 241, 53, 0.4) 0%, transparent 60%)",
          transform: "scale(2)",
          animation: "pulse-glow 3s ease-in-out infinite",
        }}
      />
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Floating tennis ball particles */}
      <FloatingParticles />

      {/* Background effects - bold dark theme */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary accent glow - top left */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(198, 241, 53, 0.15) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        {/* Secondary accent glow - bottom right */}
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        {/* Tertiary accent - center */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255, 51, 102, 0.05) 0%, transparent 50%)",
            filter: "blur(100px)",
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <TennisBall />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-gradient"
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
              Mitt navn er Nikolai Tingstad, og jeg søker opptak til Wang Toppidrett. Tennis er min lidenskap,
              og jeg ønsker å kombinere seriøs satsing på tennis med god akademisk utvikling.
            </p>
            <p className="text-base text-[var(--text-secondary)] leading-relaxed">
              Jeg søkte til Wang Toppidrett for ett år siden, men kom ikke inn. I stedet for å gi opp brukte jeg det siste
              året til å bli bedre. Jeg reiste til Spania for å trene tennis på heltid, og jeg har utviklet meg enormt
              både som spiller og person. <span className="text-[var(--accent)] font-semibold text-glow">Nå er jeg klar til å vise at jeg har det som trengs</span>.
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
              className="w-6 h-10 rounded-full border-2 border-[var(--accent)] flex justify-center pt-2"
              style={{ boxShadow: "0 0 15px rgba(198, 241, 53, 0.3)" }}
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
            <StatCard value="8" label="Anmerkninger" />
            <StatCard value="10" label="År med skole" />
          </div>
        </div>
      </section>

      {/* Charts Section - Spectacular data visualization */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
              Min utvikling i tall
            </h2>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Fra 4.2 til 5.0 i snitt, fra 2 til 5 timer daglig trening. Se min progresjon visualisert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <ProgressChart />
            <SkillsRadar />
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <GlassCard glow className="p-4 text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-2xl font-bold text-[var(--accent)]">95%</div>
              <div className="text-xs text-[var(--text-secondary)]">Mental styrke</div>
            </GlassCard>
            <GlassCard glow className="p-4 text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-bold text-[var(--accent)]">98%</div>
              <div className="text-xs text-[var(--text-secondary)]">Disiplin</div>
            </GlassCard>
            <GlassCard glow className="p-4 text-center">
              <div className="text-3xl mb-2">📚</div>
              <div className="text-2xl font-bold text-[var(--accent)]">5.0</div>
              <div className="text-xs text-[var(--text-secondary)]">Karaktersnitt</div>
            </GlassCard>
            <GlassCard glow className="p-4 text-center">
              <div className="text-3xl mb-2">🇪🇸</div>
              <div className="text-2xl font-bold text-[var(--accent)]">5t</div>
              <div className="text-xs text-[var(--text-secondary)]">Daglig trening</div>
            </GlassCard>
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
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-gradient">
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
