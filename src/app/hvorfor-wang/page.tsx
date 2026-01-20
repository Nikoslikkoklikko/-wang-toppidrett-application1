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
              Hvorfor søker jeg Wang Toppidrett?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg søker Wang fordi jeg vil omgi meg med folk som tenker likt – som vil noe, og som er villige til å
              jobbe for det. På Wang jobber så meg med den mentale siden av idrett. Jeg trenger et miljø som forstår
              balansen mellom idrett og akademia.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Ikke bare har jeg fokus på å bli bedre på wang jobber så med mye av det mentale, jeg er sikker på at jeg blir det.
              Alt jeg lærer på tennisbanen kan jeg overføre til skolen deres. Presentasjonsangst, press og vilje – dette
              tror jeg at jeg kan bidra positivt til miljøet deres.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              <span className="text-[var(--accent)] font-semibold">Jeg er klar. Jeg er motivert. Jeg er dedikert.</span>
            </p>
          </ContentBlock>

          {/* Why I apply one year later */}
          <QuoteBlock>
            Jeg søker ett år senere fordi jeg hadde lyst å bli så god jeg kan.
            Treneren min mener at jeg har et ekstremt nivå jeg kan nå.
          </QuoteBlock>

          {/* School track record section */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Akademisk og disiplin
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg jobber også hardt med skole. Jeg hadde et av de beste snittene i klassen, samtidig som jeg trener 3 til 4
              timer hver dag. Jeg kommer til å bidra positivt til klassemiljøet fordi jeg alltid leder med eksempel.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Jeg vet at timeplanen min er tett, så når jeg er på skolen, skal jeg fokusere fullt på skolearbeidet.
              Nordseter skole, heter den Nordsetor skole. Jeg leverer alltid leksene mine i tide. Aldri én eneste
              dårlige foreldresamtale gjennom 10 år med skole. Hvis dere ønsker å kontakte skolen, heter den Nordsetor skole.
            </p>
            <FeatureList
              items={[
                "Karaktersnitt på 5,0 (opp fra 4,2 tidligere)",
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
              Derfor skal jeg gjøre alt jeg kan for å komme inn på skolen deres
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto mb-6">
              Alt det jeg lærer på tennisbanen kan jeg overføre til skolen deres. Presentasjonsangst, press og vilje,
              dette er bare noen av dem. Jeg liker også å lære fra andre og jeg vet at jeg alltid kan bli bedre,
              både på tennisbanen og i klasserommet.
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
