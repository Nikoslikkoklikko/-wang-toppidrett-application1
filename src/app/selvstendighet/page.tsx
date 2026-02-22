"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import IndependenceGrowthChart from "@/components/charts/IndependenceGrowthChart";
import ResponsibilityWheel from "@/components/charts/ResponsibilityWheel";
import SkillsTransferDiagram from "@/components/charts/SkillsTransferDiagram";
import PageNavigation from "@/components/PageNavigation";
import { motion } from "framer-motion";

export default function SelvstendighetPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - dark theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute -top-1/4 -left-1/4 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--glow-bg-accent-medium) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--hero-glow-secondary) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <HeroSection
        icon="✈️"
        title="Selvstendighet og personlig utvikling"
        subtitle="Å bo alene i Spania"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left">
          Å bo alene i Spania som 16-åring har lært meg mye om ansvar og selvstendighet.
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
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[var(--bg-secondary)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-[var(--text-muted)] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <p className="text-[var(--text-muted)] text-lg font-medium">Video kommer snart</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 px-6" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }} className="space-y-24">
          {/* Living alone section */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Selvstendighet og personlig utvikling
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Å bo alene i Spania som 16-åring har lært meg mye om ansvar og selvstendighet. Jeg håndterer alt fra
              hverdagsøkonomi til måltider, treningsplanlegging og skolearbeid på egen hånd. Dette har gjort meg
              betydelig mer moden og selvstendig enn jeg var for ett år siden.
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              <strong>Overførbar læring:</strong>
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-6">
              Det jeg lærer på tennisbanen - å håndtere press, presentasjonsangst, motgang og konkurransesituasjoner -
              kan jeg overføre direkte til skolen og livet ellers. Jeg liker å lære fra andre, og jeg vet at jeg alltid
              kan bli bedre, både som tennisutøver, elev og person.
            </p>
            <FeatureList
              items={[
                "Håndterer hverdagsøkonomi og daglige gjøremål",
                "Planlegger måltider, trening og skolearbeid selvstendig",
                "Tar ansvar for egen utvikling og læring",
                "Utvikler mental styrke og modenhet",
                "Lærer fra både suksesser og tilbakeslag",
              ]}
            />
          </ContentBlock>

          {/* Growth Chart Section */}
          <ContentBlock delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Min vekst i tall
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Sammenligning av mine ferdigheter før og etter ett år med selvstendig liv i Spania.
            </p>
            <IndependenceGrowthChart />
          </ContentBlock>

          {/* Maturity section */}
          <QuoteBlock>
            Selvstendighet er ikke noe man får – det er noe man tar.
            Og jeg har måttet ta det tidligere enn de fleste.
          </QuoteBlock>

          {/* Responsibility Wheel Section */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Mitt ukentlige ansvar
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              En oversikt over alle oppgavene jeg håndterer selv hver uke.
            </p>
            <ResponsibilityWheel />
          </ContentBlock>

          {/* What I've learned section */}
          <ContentBlock delay={0.3}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Hva jeg har lært
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Å bo alene har lært meg verdien av rutiner, planlegging og prioritering.
              Jeg har lært at frihet kommer med ansvar, og at selvstendighet ikke er det samme som
              å være alene – det handler om å kunne stole på seg selv.
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-6">
              Jeg har også lært å være komfortabel med ubehag. Når ting går galt, når jeg føler meg ensom,
              eller når utfordringene virker for store – da må jeg finne løsninger selv.
              Dette har gjort meg mentalt sterkere og mer selvsikker.
            </p>
            <FeatureList
              items={[
                "Viktigheten av rutiner og struktur",
                "Å ta beslutninger selvstendig og leve med konsekvensene",
                "Problemløsning uten å kunne spørre foreldre om hjelp",
                "Å være komfortabel med å være ukomfortabel",
                "Tidsstyring og prioritering av oppgaver",
              ]}
            />
          </ContentBlock>

          {/* Skills Transfer Section */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              Overførbare ferdigheter
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              Alt jeg lærer på tennisbanen kan jeg bruke i resten av livet.
            </p>
            <SkillsTransferDiagram />
          </ContentBlock>

          {/* AI and future skills section */}
          <ContentBlock delay={0.5}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6 text-center">
              AI og fremtidige ferdigheter
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-4">
              I tillegg til tennis og skole, har jeg brukt tid på å lære meg om kunstig intelligens og teknologi.
              Jeg får oppgaver av treneren som handler om AI og selvstendighet – inkludert AGI (Artificial General Intelligence).
            </p>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left mb-6">
              Denne nysgjerrigheten og viljen til å lære nye ting – enten det er AI, språk, eller nye
              tennisteknikker – kommer fra den selvstendigheten jeg har utviklet.
              Jeg vet at jeg må ta ansvar for min egen læring og utvikling.
            </p>
          </ContentBlock>

          {/* Final quote */}
          <QuoteBlock>
            Selvstendighet, disiplin, og evnen til å håndtere press –
            dette er ferdigheter som fungerer overalt, ikke bare på tennisbanen.
          </QuoteBlock>

          {/* Closing section */}
          <ContentBlock delay={0.6}>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed text-left">
              Jeg vet hvordan jeg skal strukturere dagen min, hvordan jeg skal prioritere mellom ulike krav,
              og hvordan jeg skal ta ansvar for mine egne valg. Dette er ferdigheter som vil tjene meg
              godt både i skolen og i livet fremover.
            </p>
          </ContentBlock>
        </div>
      </section>

      <PageNavigation currentPath="/selvstendighet" />
    </main>
  );
}
