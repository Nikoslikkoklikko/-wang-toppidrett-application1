"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import { motion } from "framer-motion";

export default function HvorforWangPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 39, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="🎯"
        title="Hvorfor Wang?"
        subtitle="Min motivasjon"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          Jeg er klar. Jeg er motivert. Jeg er dedikert.
        </p>
      </HeroSection>

      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Why Wang */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Hvorfor Wang Toppidrett?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Wang Toppidrett tilbyr nøyaktig det jeg leter etter: muligheten til å kombinere seriøs satsing på tennis
              med god akademisk utvikling, omgitt av andre som har den samme drivet og ambisjonen som meg.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              <strong>Hva jeg kan bidra med:</strong>
            </p>
            <FeatureList
              items={[
                "Ekstrem arbeidsvilje og disiplin",
                "Positiv innstilling og vilje til å lære",
                "Evne til å håndtere press og motgang",
                "Ansvarsfølelse overfor både skole og idrett",
                "Erfaring med høyt treningsmiljø fra Spania",
              ]}
            />
          </ContentBlock>

          {/* My goals */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Mine mål
            </h2>
            <FeatureList
              items={[
                "Fortsette å utvikle meg som tennisutøver på høyt nivå",
                "Opprettholde og forbedre mitt akademiske nivå",
                "Være en god medspiller og klassekamerat",
                "Vise at hard jobbing over tid gir resultater",
              ]}
            />
            <p className="text-[var(--text-secondary)] leading-relaxed mt-6">
              Jeg søker ett år senere enn planlagt fordi jeg ville bli bedre før jeg søkte på nytt.
              Dette året har bevist for meg at jeg har den disiplinen, modenheten og drivet som kreves for å lykkes på Wang Toppidrett.
            </p>
          </ContentBlock>

          {/* Why Wang specifically */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Hvorfor akkurat Wang Toppidrett?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg søker Wang fordi jeg vil omgi meg med folk som tenker likt – som vil noe,
              og som er villige til å jobbe for det. Jeg trenger et miljø som forstår balansen
              mellom idrett og akademia.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
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

          {/* What I bring */}
          <ContentBlock delay={0.6}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Hva jeg kan bidra med
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Alt jeg lærer på tennisbanen – presentasjonsangst, press og vilje – kan jeg overføre til skolen.
              Jeg tror jeg kan bidra positivt til miljøet deres, både på banen og i klasserommet.
            </p>
            <FeatureList
              items={[
                "Disiplin og arbeidsmoral som inspirerer andre",
                "Erfaring med å balansere idrett og skole på høyt nivå",
                "Kunnskap om mental trening jeg kan dele",
                "Positiv innstilling og godt klassemiljø-bidrag",
                "Selvstendighet og modning fra erfaringer i Spania",
              ]}
            />
          </ContentBlock>

          {/* Final appeal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-10 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-6">
              Avslutning
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto mb-6">
              Jeg er klar til å ta steget opp på et høyere nivå, både sportslig og akademisk. Året i Spania har vist
              meg hva jeg er kapabel til når jeg virkelig satser, og jeg er motivert til å fortsette denne utviklingen
              på Wang Toppidrett.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto mb-6">
              For referanser kan dere gjerne kontakte <span className="text-[var(--accent)] font-semibold">Nordseter skole</span>, som var min ungdomsskole.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[var(--accent)]">
              Jeg håper dere vil gi meg muligheten til å vise hva jeg kan bidra med.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
