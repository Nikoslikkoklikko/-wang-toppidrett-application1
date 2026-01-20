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
              Jeg spiller tennis, og min tenniskarriere har ikke vært den enkleste. Jeg har hatt skade på skade.
              Men jeg har aldri gitt opp, selv om jeg har tenkt på det. Jeg har hatt mål om å bli bedre, og når
              jeg har et mål, må jeg oppnå det.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg har vært ute av tennis i to år, fra jeg var 13 til 15, på grunn av skader. Dette ga motstanderne mine
              en stor fordel. Jeg tapte mot alle de jeg tidligere pleide å slå. For mange ville dette vært nok til å stoppe.
              Men jeg tenkte: folk kan folk, de trening, og jeg blir senere enn alle andre – men fordi jeg har et mål
              de andre ikke har, fortsetter jeg.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Jeg dro fra skolen nesten hver dag kl. 07 for å trene før skolen, og likevel greide jeg å holde gode karakterer.
              Jeg kom hjem kl. 21 hver dag etter trening. Jeg har greid å gå ut av skolen med 5 i snitt og har aldri hatt lavere
              enn 4,2 i snitt. Gjennom hele ungdomsskolen har jeg alltid kommet til timen og aldri glemt noe.
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
              Ikke bare fysikk, men også hodet
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
                Og jeg er sikker på at jeg blir det
              </p>
            </motion.div>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Ikke bare har jeg fokus på å bli bedre i tennis, men jeg jobber like mye med det mentale. Jeg er sikker
              på at jeg blir det. Trener mellom 4 til 6 timer om dagen her i spania. Skadene mine er bra og jeg
              "pusher grensene mine".
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Dette året i Spania har også gitt meg innsikt på det enorme nivå forskjellen på Norge og Spania.
              Så de treningene og kampene har ofte et annet nivå. Man må også være mye mer mentalt sterk for å prestere.
              Alle skriker hver gang de vinner ett eneste poeng. Og man må være forberedt på at de neste 2-3 timene
              kommer til å suge.
            </p>
            <FeatureList
              items={[
                "Mental trening er like viktig som fysisk trening",
                "Håndterer press i tøffe kampsituasjoner",
                "Utviklet mental styrke gjennom erfaringer i Spania",
                "Trener 4-6 timer daglig på høyt internasjonalt nivå",
              ]}
            />
          </ContentBlock>

          {/* Spain experience */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Livet i Spania
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg søker at år senere fordi jeg hadde lyst å bli så god jeg kan. Treneren min mener at jeg har et ekstremt
              nivå jeg kan nå – og vet dere hvorfor?
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Det er fordi jeg har en ekstrem trengedisiplin. Ikke fordi jeg har mye talent (det har jeg heller ikke),
              og ikke fordi jeg har en ekstrem god kropp for ballen. Det handler om en disiplin på et annet nivå.
              Selv om jeg taper en kamp, kommer jeg tilbake. Kommer før treninger, kommer tilbake og jobber enda hardere.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg jobber også hardt med skole. Jeg hadde et av de beste snittene i klassen, samtidig som jeg trener 3 til 4
              timer hver dag. Jeg kommer til å bidra positivt til klassemiljøet fordi jeg alltid følger med eksempel.
              Jeg vet at timeplanen min er tett, så når jeg er på skolen, skal jeg fokusere fullt på skolearbeidet og lede
              med eksempel. Mange vil se på meg som en "teacher's pet", men jeg brydder meg mindre om.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Folk kan ha meninger om meg, men dem bryr jeg meg ikke om. Jeg vet hva jeg vil. Jeg vet at tennis er 50 prosent
              mentalt – og resten er å gjøre banen. I år bor jeg i Spania for å bli så god jeg kan. Treneren min mener at
              jeg har et ekstremt nivå jeg kan nå.
            </p>
            <FeatureList
              items={[
                "Bor alene i Spania og tar fullt ansvar for meg selv",
                "Trener på internasjonalt toppnivå daglig",
                "Balanserer skole og idrett med høy disiplin",
                "Utvikler både mental styrke og selvstendighet",
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
