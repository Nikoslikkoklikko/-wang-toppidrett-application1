"use client";

import HeroSection from "@/components/HeroSection";
import ContentBlock from "@/components/ContentBlock";
import QuoteBlock from "@/components/QuoteBlock";
import FeatureList from "@/components/FeatureList";
import { motion } from "framer-motion";

export default function FremtidenPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background effects - light theme */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(45, 90, 39, 0.15) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <HeroSection
        icon="🌟"
        title="Fremtiden"
        subtitle="Min visjon"
      >
        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
          Jeg vet hvor jeg skal. Jeg har visjonen, motivasjonen og dedikasjonen til å nå dit.
        </p>
      </HeroSection>

      <section className="relative z-10 py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Vision section */}
          <ContentBlock>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Min visjon
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Min drøm er å bli profesjonell tennisspiller og konkurrere på internasjonalt nivå.
              Men jeg vet også at reisen dit krever mer enn bare talent – det krever utdannelse,
              disiplin, og det rette miljøet.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Jeg søker ett år senere fordi jeg hadde lyst til å bli så god som mulig først.
              Jeg ville være sikker på at jeg var klar – både som spiller og som person.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Jeg ser for meg en fremtid hvor jeg kan balansere høyere utdanning med toppidrett,
              hvor jeg kan utvikle meg både som atlet og som person, og hvor jeg kan inspirere andre
              til å aldri gi opp på sine drømmer.
            </p>
          </ContentBlock>

          {/* Spain insights */}
          <ContentBlock delay={0.2}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Erfaringer fra Spania
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Forskjellen mellom Norge og Spania er enorm. Alle skriker hver gang de vinner ett eneste poeng,
              men man må være forberedt på at de neste 2-3 timene kommer til å suge.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Dette har lært meg å være mentalt forberedt på alt. Ingen kamper er over før de er over,
              og jeg har lært å holde fokus selv når alt virker umulig.
            </p>
          </ContentBlock>

          {/* Technology and learning */}
          <ContentBlock delay={0.3}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Læring utover tennisbanen
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Treneren min gir meg også oppgaver som går utover tennis - blant annet om fremtidsteknologi som AI og
              hvordan jeg kan bruke det som verktøy for læring og utvikling. Jeg tror det er viktig å være nysgjerrig
              og åpen for nye måter å lære på.
            </p>
          </ContentBlock>

          {/* Goals section */}
          <ContentBlock delay={0.4}>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-6">
              Mine mål på Wang Toppidrett
            </h2>
            <FeatureList
              items={[
                "Fortsette å utvikle meg som tennisutøver på høyt nivå",
                "Opprettholde og forbedre mitt akademiske nivå",
                "Være en god medspiller og klassekamerat",
                "Vise at hard jobbing over tid gir resultater",
                "Utvikle meg både som atlet og som person",
              ]}
            />
          </ContentBlock>

          {/* Final appeal section */}
          <QuoteBlock>
            Jeg er klar. Jeg er motivert. Jeg er dedikert.
            Alt jeg trenger er muligheten til å vise dere hva jeg kan.
          </QuoteBlock>

          {/* Contact section */}
          <ContentBlock delay={0.6}>
            <div className="glass-strong rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
                La oss snakkes
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
                Jeg håper dere vil gi meg muligheten til å vise hva jeg kan.
                Ta gjerne kontakt hvis dere har spørsmål eller ønsker å vite mer.
              </p>

              <div className="space-y-4 mb-10">
                <motion.a
                  href="mailto:nikolaitingstad@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 glass rounded-xl hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-[var(--text-secondary)]">nikolaitingstad@gmail.com</span>
                </motion.a>

                <motion.a
                  href="tel:+4746893385"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 glass rounded-xl hover:border-[var(--border-hover)] transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-[var(--text-secondary)]">+47 468 93 385</span>
                </motion.a>
              </div>

              <motion.a
                href="mailto:nikolaitingstad@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 text-white"
                style={{
                  background: "linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)",
                  boxShadow: "0 8px 32px rgba(45, 90, 39, 0.2)",
                }}
              >
                Send meg en e-post
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <p className="text-sm text-[var(--text-secondary)] mt-8">
                Med vennlig hilsen,<br />
                <span className="text-[var(--accent)] font-semibold">Nikolai Tingstad</span>
              </p>
            </div>
          </ContentBlock>
        </div>
      </section>
    </main>
  );
}
