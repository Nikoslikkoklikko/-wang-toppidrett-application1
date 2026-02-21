"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import VideoPlayer from "@/components/VideoPlayer";
import JourneyTimeline from "@/components/charts/JourneyTimeline";
import DailyScheduleChart from "@/components/charts/DailyScheduleChart";
import DisciplineStats from "@/components/charts/DisciplineStats";
import { motion } from "framer-motion";

export default function TennisPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, var(--glow-bg-green) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="🎾"
        title="Min tennisreise"
        subtitle="Fra utfordringer til utvikling"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center">
          Tennisreisen min har ikke vært enkel, men den har gjort meg til spilleren jeg er i dag.
        </p>
      </HeroSection>

      {/* Coach Recommendation Section */}
      <section className="relative z-10 px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
            style={{ borderLeft: "4px solid var(--accent)" }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-32 text-center">
              Anbefaling fra Tomo - Nordstrand Tennisklubb (NTK)
            </h2>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Nikolai har vært en del av Nordstrand Tennisklubb siden sommeren 2020, og i løpet av disse årene
                har jeg hatt gleden av å følge hans utvikling både som spiller og som person. Han startet i
                klubben som en ivrig og nysgjerrig gutt med mye energi, og har siden den gang vokst til å bli
                en dedikert og reflektert ung mann.
              </p>

              <p>
                Vinteren 2023 ble en tøff periode for Nikolai da han pådro seg en skade i nedre rygg. Denne
                utfordringen testet ikke bare hans fysiske kapasitet, men også hans mentale styrke. Det som
                imponerte meg mest, var måten han håndterte situasjonen på. I stedet for å miste motivasjonen,
                viste han en modenhet og tålmodighet som går langt utover hans alder. Han fulgte
                rehabiliteringsplanen nøye og kom tilbake på banen sterkere enn noen gang.
              </p>

              <p>
                Tennismessig har Nikolai utviklet seg betydelig. Han har en sterk og presis serve, en aggressiv
                og pålitelig forehand, og han har jobbet hardt med å forbedre sin evne til å dominere
                grunnlinjespillet. Han har også vist stor fremgang i fysisk kapasitet, som er helt avgjørende
                for å lykkes på høyt nivå i tennis.
              </p>

              <p>
                Utenfor banen er Nikolai en hyggelig og respektfull person som alltid bidrar til et positivt
                treningsmiljø. Han er en god lagspiller som støtter sine medspillere, og han har vist at han kan
                ta ansvar og lære av sine feil.
              </p>

              <p>
                Da Nikolai tok valget om å reise til Soto Tennis Academy i Spania for å trene på fulltid, var det
                en beslutning jeg støttet fullt ut. Jeg mener dette var et viktig skritt for å ta utviklingen hans
                til neste nivå, og jeg er trygg på at han har det som skal til for å lykkes der.
              </p>

              <p>
                Jeg anbefaler Nikolai på det sterkeste og er overbevist om at han vil fortsette å imponere både
                som utøver og som menneske i årene som kommer.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--text-secondary)]/20">
              <p className="font-semibold text-[var(--text-primary)]">Tomislav Draganja</p>
              <p className="text-[var(--text-secondary)] text-sm">
                Ansvarlig trener for Konkurranse- og Toppidrettsgruppen
              </p>
              <p className="text-[var(--text-secondary)] text-sm">Nordstrand Tennisklubb</p>
              <p className="text-[var(--text-secondary)] text-sm mt-2">29.01.2026</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6" style={{ paddingTop: "16rem", paddingBottom: "16rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }} className="space-y-40">
          {/* Interactive Journey Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 mb-12"
          >
            <JourneyTimeline />
          </motion.div>

          {/* Journey section */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-32 text-center">
              Bakgrunn
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center">
              Min tennisreise har på mange måter vært utfordrende. Etter skaden i ryggen tapte jeg mange
              kamper både i turneringer og på trening. Men i stedet for å gi opp valgte jeg å bruke
              opptreningen som drivkraft. Jeg krummet nakken og bestemte meg for å klare å komme
              tilbake 100%. Jeg kom alltid først på trening og dro sist. For mange ville et tilsvarende
              tilbakeslag medføre motløshet, men for meg har det gitt enda bedre disiplin og mental styrke.
              I etterkant ser jeg at utfordringene har gjort meg til en sterkere spiller og person.
            </p>
          </ContentBlock>

          {/* Quote - dedication */}
          <QuoteBlock>
            Jeg kom alltid først på trening og dro sist. For mange ville et tilsvarende tilbakeslag medføre
            motløshet, men for meg har det gitt enda bedre disiplin og mental styrke.
          </QuoteBlock>

          {/* Spain year section */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-32 text-center">
              Året på Soto Tennisakademi
            </h2>

            {/* Prominent mental quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-strong rounded-2xl p-8 text-center mb-8"
            >
              <p className="font-serif text-3xl md:text-4xl text-[var(--accent)] mb-2">
                Tennis er like mye en mental som en fysisk idrett
              </p>
              <p className="text-[var(--text-secondary)]">
                Det mentale spillet er min største styrke
              </p>
            </motion.div>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mb-8 text-center">
              Året på Soto Tennisakademi har vært avgjørende for min utvikling. Opplegget er fullstendig
              og omfatter teknisk trening, fysisk trening, konkurransetrening og mental trening. Opplegget
              er omfattende hva angår treningsmengde og intensitet. Jeg må disponerer mine dager godt,
              og sørge for nok næring og hvile. Jeg organiserer dagene selv og må forvalte døgnet på en
              så optimal måte som mulig. Det er i tillegg mye reising i forbindelse med turneringer, der vi er
              på nye steder, og må dele rom og leiligheter, sørge for mat og logistikk.
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mb-10 text-center">
              Min hovedtrener i Soto mener jeg har et ekstremt høyt potensiale, noe jeg etter tiden i Soto
              ser at er riktig. Tennis er like mye en mental som en fysisk idrett, der det mentale nok er en
              styrke hos meg.
            </p>
            <FeatureList
              items={[
                "Jeg trener 4-6 timer daglig",
                "Høyt nivå og hard konkurranse i Spania",
                "Jeg er sterk mentalt",
                "Jeg ser tydelig progresjon og utvikling",
              ]}
            />
          </ContentBlock>

          {/* Work capacity and discipline */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-32 text-center">
              Arbeidskapasitet og disiplin
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mb-16">
              Suksess kommer ikke av talent alene. Jeg kompenserer for det jeg mangler i naturlig talent med
              ekstrem arbeidsvilje og disiplin. Selv når jeg taper - én kamp eller hundre - går jeg tilbake
              til grunnarbeidet og fortsetter å jobbe.
            </p>

            {/* Interactive Daily Schedule */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "6rem" }}
            >
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] mb-8 text-center">
                Min hverdag - sammenlign Norge vs Spania
              </h3>
              <DailyScheduleChart />
            </motion.div>

            {/* Spacer between sections */}
            <div style={{ height: "4rem" }} />

            {/* Discipline Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: "6rem" }}
            >
              <DisciplineStats />
            </motion.div>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mt-16">
              Jeg søker ett år senere fordi jeg lyttet til rådet om å bli bedre først. Jeg har brukt dette året
              på å utvikle meg, få bedre kontroll på skadene mine, og bevise at jeg har den disiplinen som kreves.
            </p>
          </ContentBlock>

        </div>
      </section>
    </main>
  );
}
