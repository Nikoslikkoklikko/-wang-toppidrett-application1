"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import WangMatchDiagram from "@/components/charts/WangMatchDiagram";
import ContributionShowcase from "@/components/charts/ContributionShowcase";
import GoalsTimeline from "@/components/charts/GoalsTimeline";
import PageNavigation from "@/components/PageNavigation";
import { motion } from "framer-motion";

export default function HvorforWangPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - dark theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--glow-bg-accent-soft) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--glow-bg-tertiary) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <HeroSection
        icon="🎯"
        title="Hvorfor Wang?"
        subtitle="Min motivasjon"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left">
          Jeg er klar. Jeg er motivert. Jeg er dedikert.
        </p>
      </HeroSection>

      {/* Video Section */}
      <section className="relative z-10 px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/kIeWYcLJKWY"
                title="Video om hvorfor Wang"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }} className="space-y-24">
          {/* Why Wang */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Hvorfor Wang Toppidrett?
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-6">
              Wang Toppidrett tilbyr nøyaktig det jeg leter etter: muligheten til å kombinere seriøs satsing på tennis
              med god akademisk utvikling, omgitt av andre som har den samme drivet og ambisjonen som meg.
            </p>
          </ContentBlock>

          {/* Match Diagram */}
          <ContentBlock delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Perfekt match
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Se hvordan mine kvaliteter matcher med det Wang tilbyr.
            </p>
            <WangMatchDiagram />
          </ContentBlock>

          {/* Quote */}
          <QuoteBlock>
            Jeg har brukt det siste året på å bli bedre, og nå er jeg klar.
            Dette året har bevist at jeg har disiplinen, modenheten og drivet som kreves.
          </QuoteBlock>

          {/* Goals Timeline */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Mine mål på Wang
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              En tydelig plan for hvert år på videregående.
            </p>
            <GoalsTimeline />
          </ContentBlock>

          {/* Contribution Showcase */}
          <ContentBlock delay={0.3}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Hva jeg kan bidra med
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Alt jeg lærer på tennisbanen – presentasjonsangst, press og vilje – kan jeg overføre til skolen.
            </p>
            <ContributionShowcase />
          </ContentBlock>

          {/* Why Wang specifically */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Hvorfor akkurat Wang Toppidrett?
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Jeg søker Wang fordi jeg vil omgi meg med folk som tenker likt – som vil noe,
              og som er villige til å jobbe for det. Jeg trenger et miljø som forstår balansen
              mellom idrett og akademia.
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-6">
              Wang Toppidrett representerer alt jeg søker: et sterkt akademisk miljø kombinert med
              forståelse for kravene til toppidrett. Her kan jeg utvikle meg både som student og som atlet.
            </p>
            <FeatureList
              items={[
                "Akademisk utdannelse på høyt nivå",
                "Forståelse for kravene til toppidrett",
                "Miljø med likesinnede, ambisiøse elever",
                "Fleksibilitet for treningsopplegg",
                "Mulighet for å utvikle meg både mentalt og fysisk",
              ]}
            />
          </ContentBlock>

          {/* Final appeal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-10 text-center flex flex-col items-center justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6 text-center">
              Avslutning
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl text-center mb-6">
              Jeg er klar til å ta steget opp på et høyere nivå, både sportslig og akademisk. Året i Spania har vist
              meg hva jeg er kapabel til når jeg virkelig satser, og jeg er motivert til å fortsette denne utviklingen
              på Wang Toppidrett.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl text-center mb-6">
              For referanser kan dere gjerne kontakte <span className="text-[var(--accent)] font-semibold">Nordseter skole</span>, som var min ungdomsskole.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[var(--accent)] text-center">
              Jeg håper dere vil gi meg muligheten til å vise hva jeg kan bidra med.
            </p>
          </motion.div>
        </div>
      </section>

      <PageNavigation currentPath="/hvorfor-wang" />
    </main>
  );
}
