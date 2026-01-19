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
          {/* Previous attempt section */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Jeg ga aldri opp
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg hadde planlagt å begynne på ungdomsskolen deres tidligere. Jeg brukte mye tid på
              forberedelser og testing. Da jeg ikke kom inn den gangen, ga jeg ikke opp.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I stedet brukte jeg tiden til å bli bedre. Jeg flyttet til Spania for å trene på høyeste
              nivå. Jeg jobbet med skolen. Jeg utviklet meg som person.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              <span className="text-[var(--accent)] font-semibold">Nå er jeg klar til å bevise at jeg har det som trengs.</span>
            </p>
          </ContentBlock>

          {/* Why I apply one year later */}
          <QuoteBlock>
            Jeg søker ett år senere fordi jeg hadde lyst til å bli så god som mulig først.
            Jeg ville være sikker på at jeg var klar.
          </QuoteBlock>

          {/* School track record section */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              10 år med skole
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Gjennom hele skoleløpet mitt har jeg alltid tatt ansvar. Jeg leverer alltid leksene
              mine i tide. Aldri én eneste dårlig foreldresamtale gjennom 10 år med skole.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Nordseter skole kan bekrefte dette. Mange vil se på meg som en "teacher's pet",
              men det bryr jeg meg ikke om. Jeg vet at innsats og respekt for skolearbeidet
              er viktig for å lykkes.
            </p>
            <FeatureList
              items={[
                "Karaktersnitt på 5.0 (opp fra 4.2 tidligere)",
                "Leverer alltid leksene i tide",
                "Aldri én dårlig foreldresamtale på 10 år",
                "Bidrar positivt til klassemiljøet",
                "Balanserer 4-6 timer daglig trening med skolearbeid",
              ]}
            />
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
              La meg bevise det
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto mb-6">
              Jeg er klar. Jeg er motivert. Jeg er dedikert.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-[var(--accent)]">
              La meg bevise at jeg hører hjemme på Wang Toppidrett.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
