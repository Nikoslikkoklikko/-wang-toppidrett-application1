"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import VideoPlayer from "@/components/VideoPlayer";
import { motion } from "framer-motion";

export default function TennisPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 39, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="🎾"
        title="Tennis"
        subtitle="Mer enn bare en sport"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          Min reise har vært full av utfordringer, men hver gang har jeg valgt å stå opp igjen.
        </p>
      </HeroSection>

      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Journey section */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Min reise
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg startet med tennis som 13-åring og fortsatte til jeg var 15. Fra jeg var 13 til 15 år var jeg
              ut og inn av tennis på grunn av skade etter skade. Jeg tapte mot spillere jeg tidligere hadde slått.
              For mange ville dette vært nok til å gi opp – og ja, tanken har vært der.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Skadene mine lærte meg at veien til toppen sjelden er rett. Den er full av omveier, tilbakeslag
              og dager der man lurer på om det er verdt det. Men det er nettopp disse dagene som former en.
              Hver gang jeg falt, reiste jeg meg opp igjen – sterkere og mer bestemt enn før.
            </p>
          </ContentBlock>

          {/* Quote - dedication */}
          <QuoteBlock>
            Jeg tok meg alltid først på trening og var sist til å dra. Tapte mot alle på trening,
            men det bare økte min motivasjon.
          </QuoteBlock>

          {/* Mental strength section - with prominent 50% quote */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Mental styrke
            </h2>

            {/* Prominent mental quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 text-center mb-8"
            >
              <p className="font-serif text-3xl md:text-4xl text-[var(--accent)] mb-2">
                Tennis er 50% mentalt
              </p>
              <p className="text-[var(--text-secondary)]">
                Og det er her jeg har jobbet hardest
              </p>
            </motion.div>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Tennis er like mye mental styrke som det er teknikk og fysikk. Jeg vant nesten ingen kamper før jeg var elleve,
              selv om jeg ofte var teknisk bedre enn motstanderne mine. Det tvang meg til å jobbe systematisk med hodet.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              I dag er mental trening en viktig del av spillet mitt. Jeg har utviklet teknikker for å holde
              fokus under press, håndtere motgang, og holde meg rolig når alt står på spill.
              Treneren min mener jeg har et ekstremt høyt nivå jeg kan nå.
            </p>
            <FeatureList
              items={[
                "Systematisk arbeid med fokus og konsentrasjon",
                "Teknikker for å håndtere press i avgjørende øyeblikk",
                "Evne til å reise seg etter tap og motgang",
                "Positiv selvsnakk og mental forberedelse",
              ]}
            />
          </ContentBlock>

          {/* Spain experience */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Spania
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I dag bor jeg i Spania for å trene på høyest mulig nivå. Jeg trener mellom{" "}
              <span className="text-[var(--accent)] font-semibold">fire og seks timer daglig</span>, og jeg bor alene.
              Dette har lært meg mye om selvstendighet, rutiner og det å ta ansvar for meg selv.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Forskjellen mellom Norge og Spania er enorm. Alle skriker hver gang de vinner ett eneste poeng,
              men man må være forberedt på at de neste 2-3 timene kommer til å suge.
              Dette krever mental styrke å prestere her.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Nivåforskjellen mellom Norge og Spania er enorm, og det krever mental styrke å prestere her.
              Dette har gjort meg sterkere, både som spiller og som person.
            </p>
            <FeatureList
              items={[
                "Bor alene og tar fullt ansvar for meg selv",
                "Trener på internasjonalt nivå daglig",
                "Lærer å håndtere press i tøffe kampsituasjoner",
                "Utvikler selvstendighet og livserfaring",
              ]}
            />
          </ContentBlock>

          {/* Video section */}
          <ContentBlock delay={0.6}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Se meg spille
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Her kan dere se meg i aksjon på tennisbanen. Videoene viser min spillestil, teknikk og kampmentalitet.
            </p>
            <VideoPlayer src="/tennis-video-1.mp4" caption="Trening i Spania 2026" />
            <p className="text-sm italic text-[var(--text-secondary)] mt-6 text-center">
              Flere videoer kommer snart...
            </p>
          </ContentBlock>
        </div>
      </section>
    </main>
  );
}
