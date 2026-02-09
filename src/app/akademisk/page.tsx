"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import StatCard from "@/components/StatCard";
import ProgressChart from "@/components/charts/ProgressChart";
import SkillsRadar from "@/components/charts/SkillsRadar";
import { motion } from "framer-motion";

export default function AkademiskPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-1/3 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 39, 0.15) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="📚"
        title="Skole og faglig utvikling"
        subtitle="Balanse og fokus"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          Skole er viktig for meg. Jeg hadde et av de beste snittene i klassen samtidig som jeg trente 3-4 timer hver dag.
        </p>
      </HeroSection>

      <section className="relative z-10 px-6" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }} className="space-y-12">
          {/* Interactive Charts Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            <ProgressChart />
            <SkillsRadar />
          </motion.div>

          {/* Stats overview */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Mine styrker som elev
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <StatCard value="5.0" label="Karaktersnitt" />
              <StatCard value="8" label="Anmerkninger" />
              <StatCard value="0" label="Skulking" />
            </div>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Dette har lært meg viktigheten av å prioritere og fokusere når jeg er på skolen.
            </p>
            <FeatureList
              items={[
                "Leverer alltid lekser i tide",
                "Følger aktivt med i timene",
                "Bidrar positivt til klassemiljøet",
                "Aldri hatt en dårlig foreldresamtale gjennom 10 år med skole",
                "Aldri kommet for sent til timen",
              ]}
            />
            <p className="text-[var(--text-secondary)] leading-relaxed mt-6">
              Jeg vet at timeplanen på Wang Toppidrett er krevende, men det har jeg erfaring med. Når jeg er på skolen,
              fokuserer jeg 100% på skolearbeidet. Jeg tar ansvar for min egen læring og ber om hjelp når jeg trenger det.
            </p>
          </ContentBlock>

          {/* Overcoming dyslexia */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Utfordringer overvunnet
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Da jeg fikk diagnosen dysleksi i tiende klasse, forklarte det mange av utfordringene jeg hadde hatt
              med lesing og skriving. Men i stedet for å se det som en hindring, brukte jeg det som motivasjon
              til å jobbe enda hardere.
            </p>
            <QuoteBlock>
              Utfordringer er ikke årsaker til å gi opp – de er muligheter til å vise hva man er laget av.
            </QuoteBlock>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-6">
              Jeg lærte å tilpasse studieteknikker, bruke verktøy som hjalp meg, og sette av ekstra tid når det trengtes.
              Det samme mindsetet jeg bruker på tennisbanen – aldri gi opp, tilpass deg, og fortsett fremover.
            </p>
          </ContentBlock>

          {/* School engagement */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Engasjement og oppmøte
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Når timeplanen er tett med både skole og trening, vet jeg at jeg må være hundre prosent
              til stede når jeg først er i klasserommet – og det er jeg. Jeg bidrar positivt til klassemiljøet.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Mange vil se på meg som en "teacher's pet", men det bryr jeg meg ikke om.
              Jeg vet at innsats og respekt for skolearbeidet er viktig for å lykkes.
            </p>
            <FeatureList
              items={[
                "Karaktersnitt på 5.0 fra ungdomsskolen (opp fra 4.2)",
                "Aldri skulket eller kommet for sent",
                "Kun 8 anmerkninger gjennom hele ungdomsskolen",
                "Aldri hatt en negativ foreldresamtale på 10 år",
                "Prestert godt til tross for uoppdaget dysleksi",
                "Balanserer 4-6 timer daglig trening med skolearbeid",
              ]}
            />
            <p className="text-[var(--text-secondary)] leading-relaxed mt-6">
              Nordseter skole kan bekrefte dette. Jeg tar skolearbeidet mitt på alvor, og jeg forstår at
              utdannelse er like viktig som idrett for min fremtid.
            </p>
          </ContentBlock>

          {/* Learning mindset */}
          <ContentBlock delay={0.6}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Læringsinnstilling
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              På samme måte som jeg alltid søker å bli bedre på tennisbanen, søker jeg også vekst i klasserommet.
              Jeg stiller spørsmål, søker hjelp når jeg trenger det, og jobber systematisk med stoffet.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Det jeg lærer på tennisbanen tar jeg med meg inn i skolen: å håndtere press,
              å forberede meg grundig, å stå i det når det butter imot.
              Jeg liker å lære av andre, og jeg vet at jeg alltid kan bli bedre.
            </p>
          </ContentBlock>
        </div>
      </section>
    </main>
  );
}
