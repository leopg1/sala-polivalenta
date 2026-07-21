import type { Metadata } from "next";
import Image from "next/image";
import { Users, Maximize, MapPin, Zap, Building2, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealChild } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Despre & Istoric",
  description:
    "Povestea Complexului Sportiv Național Sala Polivalentă București — din 1974, 5.300 de locuri, cea mai importantă bază sportivă acoperită a Capitalei.",
};

const timeline = [
  {
    year: "1974",
    title: "Inaugurarea",
    text: "Pe 10 august se deschide Palatul Sporturilor și Culturii — o arenă modernă pentru marile competiții ale Capitalei.",
  },
  {
    year: "1974 – azi",
    title: "Decenii de mari evenimente",
    text: "Handbal, volei, judo, gimnastică, arte marțiale, concerte și expoziții — sala devine un reper al sportului românesc.",
  },
  {
    year: "Prezent",
    title: "Complex Sportiv Național",
    text: "Instituție publică în subordinea Ministerului Sportului, cu 5.300 de locuri și spații modulare pentru orice tip de eveniment.",
  },
  {
    year: "În derulare",
    title: "Reabilitare energetică PNRR",
    text: "Sala trece printr-un amplu proces de modernizare energetică, finanțat prin Planul Național de Redresare și Reziliență.",
  },
];

const facts = [
  { icon: Users, label: "Locuri pentru spectatori", value: 5300, sep: "." },
  { icon: CalendarClock, label: "Ani de activitate", value: 52, sep: "" },
];

const features = [
  { icon: Maximize, title: "Spațiu modular", text: "Suprafață mare, reconfigurabilă pentru competiții, expoziții, concerte sau conferințe." },
  { icon: MapPin, title: "Poziție centrală", text: "Calea Piscului 10, Sector 4 — acces facil în București și parcare proprie." },
  { icon: Zap, title: "Infrastructură completă", text: "Standuri expoziționale cu racordare la energie electrică și iluminat pe toate spațiile." },
  { icon: Building2, title: "Capacitate de anvergură", text: "5.300 de locuri pentru cele mai mari evenimente sportive și culturale." },
];

export default function DesprePage() {
  return (
    <>
      <PageHero
        eyebrow="Despre"
        title={
          <>
            O arenă cu <span className="text-gradient">o jumătate de secol</span> de istorie
          </>
        }
        intro="Din 1974, Sala Polivalentă este scena marilor competiții și evenimente ale Bucureștiului — o instituție care îmbină tradiția sportivă cu deschiderea către public."
      />

      {/* story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl card-glow">
              <Image src="/images/venue/exterior-2.jpg" alt="Sala Polivalentă București" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </Reveal>
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Povestea"
              title="Un reper al sportului românesc"
            />
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Inaugurat la 10 august 1974 ca Palatul Sporturilor și Culturii, actualul Complex
                Sportiv Național „Sala Polivalentă” reprezintă, prin poziție, dotare și prin cele
                5.300 de locuri, cea mai importantă bază sportivă acoperită a Capitalei.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                De-a lungul timpului, sala a găzduit nenumărate evenimente sportive, culturale,
                concerte, expoziții și conferințe — devenind un spațiu emblematic pentru București.
              </p>
            </Reveal>
            <RevealGroup className="mt-2 grid grid-cols-2 gap-6">
              {facts.map((f) => (
                <RevealChild key={f.label}>
                  <div className="mb-2 h-px w-10 bg-primary" />
                  <div className="font-display text-4xl font-bold text-foreground md:text-5xl">
                    <CountUp to={f.value} separator={f.sep} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{f.label}</div>
                </RevealChild>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="border-y border-border bg-background-soft py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Istoric" title="Repere în timp" className="mb-14 max-w-2xl" />
          <RevealGroup className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t) => (
              <RevealChild key={t.title}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6">
                  <span className="font-display text-lg font-bold text-gradient-red">{t.year}</span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </RevealChild>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* features */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Dotări" title="Ce oferă arena" className="mb-14 max-w-2xl" />
          <RevealGroup className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <RevealChild key={f.title}>
                <div className="flex gap-5 rounded-2xl border border-border bg-card/40 p-6">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                    <f.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                  </div>
                </div>
              </RevealChild>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* archive images */}
      <section className="border-t border-border bg-background-soft py-20 md:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Din arhivă" title="Imagini din istoria sălii" className="mb-14 max-w-2xl" />
          <RevealGroup className="grid gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <RevealChild key={n}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <Image
                    src={`/images/istoric/853_IMAG000${n}.jpg`}
                    alt={`Sala Polivalentă — imagine de arhivă ${n}`}
                    fill
                    sizes="(max-width:640px) 100vw, 33vw"
                    className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                </div>
              </RevealChild>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTA />
    </>
  );
}
