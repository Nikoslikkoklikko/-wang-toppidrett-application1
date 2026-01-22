"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";

export default function SelvstendighetPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 39, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="🇪🇸"
        title="Selvstendighet og personlig utvikling"
        subtitle="Å bo alene i Spania"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          Å bo alene i Spania som 16-åring har lært meg mye om ansvar og selvstendighet.
        </p>
      </HeroSection>

      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Living alone section */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Selvstendighet og personlig utvikling
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Å bo alene i Spania som 16-åring har lært meg mye om ansvar og selvstendighet. Jeg håndterer alt fra
              hverdagsøkonomi til måltider, treningsplanlegging og skolearbeid på egen hånd. Dette har gjort meg
              betydelig mer moden og selvstendig enn jeg var for ett år siden.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              <strong>Overførbar læring:</strong>
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
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

          {/* Maturity section */}
          <QuoteBlock>
            Selvstendighet er ikke noe man får – det er noe man tar.
            Og jeg har måttet ta det tidligere enn de fleste.
          </QuoteBlock>

          {/* What I've learned section */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Hva jeg har lært
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Å bo alene har lært meg verdien av rutiner, planlegging og prioritering.
              Jeg har lært at frihet kommer med ansvar, og at selvstendighet ikke er det samme som
              å være alene – det handler om å kunne stole på seg selv.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
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

          {/* AI and future skills section */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              AI og fremtidige ferdigheter
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              I tillegg til tennis og skole, har jeg brukt tid på å lære meg om kunstig intelligens og teknologi.
              Jeg får oppgaver av treneren som handler om AI og selvstendighet – inkludert AGI (Artificial General Intelligence).
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Denne nysgjerrigheten og viljen til å lære nye ting – enten det er AI, språk, eller nye
              tennisteknikker – kommer fra den selvstendigheten jeg har utviklet.
              Jeg vet at jeg må ta ansvar for min egen læring og utvikling.
            </p>
          </ContentBlock>

          {/* Transferable skills section */}
          <ContentBlock delay={0.6}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Overførbare ferdigheter
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Alt jeg har lært gjennom å bo alene og trene på høyt nivå kan jeg ta med meg inn i
              skolehverdagen på Wang Toppidrett. Alt jeg lærer på tennisbanen – presentasjonsangst,
              press og vilje – kan jeg overføre til skolen.
            </p>
            <QuoteBlock>
              Selvstendighet, disiplin, og evnen til å håndtere press –
              dette er ferdigheter som fungerer overalt, ikke bare på tennisbanen.
            </QuoteBlock>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-6">
              Jeg vet hvordan jeg skal strukturere dagen min, hvordan jeg skal prioritere mellom ulike krav,
              og hvordan jeg skal ta ansvar for mine egne valg. Dette er ferdigheter som vil tjene meg
              godt både i skolen og i livet fremover.
            </p>
          </ContentBlock>
        </div>
      </section>
    </main>
  );
}
