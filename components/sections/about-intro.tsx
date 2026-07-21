import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";

const points = [
  "5.300 de locuri și suprafață modulară pentru orice tip de eveniment",
  "Poziție centrală în București, acces facil și parcare proprie",
  "Sistem de standuri expoziționale cu racordare electrică completă",
];

export function AboutIntro() {
  return (
    <section className="relative z-[1] overflow-hidden py-24 md:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* image */}
        <Reveal direction="right" className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl card-glow">
              <Image
                src="/images/venue/hall-1.jpg"
                alt="Interiorul Sălii Polivalente amenajat pentru expoziție"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 mix-blend-color bg-gradient-to-tr from-primary/25 via-transparent to-secondary/25" />
            </div>
            {/* floating stat */}
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card/90 p-5 backdrop-blur-md sm:-left-8">
              <div className="font-display text-4xl font-bold text-gradient-red">1974</div>
              <div className="mt-1 max-w-[9rem] text-xs leading-snug text-muted-foreground">
                Anul inaugurării Palatului Sporturilor și Culturii
              </div>
            </div>
          </div>
        </Reveal>

        {/* text */}
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Reveal>
            <Eyebrow>Despre arenă</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-balance sm:text-4xl md:text-[2.75rem]">
              Cea mai importantă bază sportivă{" "}
              <span className="text-gradient">acoperită</span> a Capitalei
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Prin poziție, dotare și prin cele 5.300 de locuri, Complexul Sportiv Național
              „Sala Polivalentă” găzduiește de peste cinci decenii marile competiții,
              concerte, expoziții și conferințe ale Bucureștiului.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="flex flex-col gap-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.95rem] text-foreground/85">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-2 flex flex-wrap gap-3">
              <ButtonLink href="/despre" variant="outline" arrow>
                Povestea completă
              </ButtonLink>
              <ButtonLink href="/galerie" variant="ghost" arrow>
                Vezi galeria
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
