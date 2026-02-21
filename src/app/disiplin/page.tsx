"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import StatCard from "@/components/StatCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TrainingBlock({ time, activity, description, index }: { time: string; activity: string; description: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-xl p-6 hover:border-[var(--border-hover)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-sm font-bold text-white"
          style={{
            background: "linear-gradient(135deg, var(--tennis-green) 0%, var(--accent-light) 100%)",
          }}
        >
          {time}
        </div>
        <div>
          <h3 className="font-serif text-lg text-[var(--text-primary)] mb-1">{activity}</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DisiplinPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, var(--glow-bg-green) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--glow-bg-green-alt) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="💪"
        title="Disiplin"
        subtitle="Det som skiller drømmer fra resultater"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center">
          Talent er ikke nok. Det er de daglige valgene, de tidlige morgenene,
          og viljen til å gjøre det som må gjøres – selv når ingen ser på.
        </p>
      </HeroSection>

      {/* Stats Section */}
      <section className="relative z-10 px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl text-center text-[var(--text-primary)] mb-16"
          >
            Disiplin i tall
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <StatCard value="5.0" label="Karaktersnitt" />
            <StatCard value="4-6" label="Timer daglig" suffix="t" />
            <StatCard value="8" label="Anmerkninger" />
            <StatCard value="10" label="År med skole" />
          </div>
          <p className="text-sm text-[var(--text-secondary)] text-center italic">
            Alle 8 anmerkninger er for småforstyrrelser i timen
          </p>
        </div>
      </section>

      {/* Training Routine */}
      <section className="relative z-10 px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-16 text-center">
              En typisk dag
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mb-8">
              Det har aldri vært problematisk for meg å stå opp tidligere enn andre for å trene før skolen.
              Før jeg flyttet til Spania trente jeg ofte både før og etter skolen, med dager som startet kl. 06
              og varte til kl. 21. I Spania stater vi med fysisk trening før solen står opp, og jeg har i tillegg
              også ofte økter med mental trening før oppstart av fysisk trening. Mine dager i Spania er
              krevende, men gir meg det som skal til for å bli stadig bedre. Jeg har svært god disiplin, er
              meget hardt arbeidende og jeg presser mine egne grenser hver eneste dag.
            </p>
          </ContentBlock>

          <div className="space-y-4">
            <TrainingBlock
              time="06:00"
              activity="Jeg står opp"
              description="Stå opp, spise frokost, mentalt forberede meg for dagen"
              index={0}
            />
            <TrainingBlock
              time="08:00"
              activity="Fysisk trening"
              description="Styrke, kondisjon og bevegelighet – grunnlaget for alt annet"
              index={1}
            />
            <TrainingBlock
              time="10:00"
              activity="Tennisøkt 1"
              description="Teknisk trening med fokus på slag og fotarbeid"
              index={2}
            />
            <TrainingBlock
              time="13:00"
              activity="Lunsj og hvile"
              description="Restitusjon er like viktig som trening"
              index={3}
            />
            <TrainingBlock
              time="15:00"
              activity="Tennisøkt 2"
              description="Matchtrening og taktiske øvelser"
              index={4}
            />
            <TrainingBlock
              time="17:30"
              activity="Skole"
              description="Fullfører skolearbeid og oppgaver"
              index={5}
            />
            <TrainingBlock
              time="21:00"
              activity="Kveld"
              description="Middag, stretching og forberedelse til neste dag"
              index={6}
            />
          </div>
        </div>
      </section>

      {/* Discipline Philosophy */}
      <section className="relative z-10 px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-16 text-center">
              Hva disiplin betyr for meg
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mb-6">
              Disiplin handler ikke om å tvinge seg selv til å gjøre noe man hater.
              Det handler om å bygge vaner som bringer deg nærmere målet ditt, dag etter dag.
            </p>
          </ContentBlock>

          <QuoteBlock>
            Jeg kommer før alle andre på trening, og jeg går sist hjem. Ikke fordi jeg må, men fordi jeg vil.
          </QuoteBlock>

          <ContentBlock delay={0.2}>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-loose text-center mb-6">
              Når andre tar snarveier, velger jeg den lange veien. Når andre gir opp etter et tap,
              bruker jeg det som motivasjon til å trene hardere. Dette er ikke noe jeg gjør for å imponere andre –
              det er hvem jeg er.
            </p>
          </ContentBlock>

          <FeatureList
            items={[
              "Aldri hoppet over en eneste planlagt treningsøkt",
              "Følger ernæringsplan og søvnrutiner strengt",
              "Setter mål og følger opp med konkrete handlinger",
              "Lærer av tap i stedet for å bli demotivert",
              "Holder fokus på langsiktige mål, ikke kortsiktig komfort",
            ]}
          />
        </div>
      </section>

      {/* Never Give Up */}
      <section className="relative z-10 px-6" style={{ paddingTop: "10rem", paddingBottom: "10rem" }}>
        <div style={{ maxWidth: "64rem", marginLeft: "auto", marginRight: "auto" }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-2xl p-10 text-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] mb-4 text-center">
              Gi aldri opp
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto text-center">
              Det er lett å være motivert når alt går bra. Den virkelige testen kommer når ting er vanskelig.
              Og det er da disiplinen tar over der motivasjonen svikter.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
