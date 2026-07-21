import Image from "next/image";
import Link from "next/link";
import { Trophy, LayoutGrid, Music, Mic2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealChild } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  desc: string;
  icon: typeof Trophy;
  href: string;
  image?: string;
  objectPos?: string;
  tone?: "red" | "blue";
  className: string;
};

const cards: Card[] = [
  {
    title: "Competiții sportive",
    desc: "Handbal, volei, judo, gimnastică, arte marțiale — meciuri naționale și internaționale în fața a mii de spectatori.",
    icon: Trophy,
    href: "/program",
    image: "/images/venue/interior-1.jpg",
    objectPos: "object-[center_30%]",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Expoziții & târguri",
    desc: "Standuri modulare cu racordare electrică, în sală și pe laterale.",
    icon: LayoutGrid,
    href: "/contact",
    image: "/images/venue/hall-1.jpg",
    objectPos: "object-center",
    className: "md:col-span-2",
  },
  {
    title: "Concerte & spectacole",
    desc: "Scenă amplă și acustică pentru evenimente de mare anvergură.",
    icon: Music,
    href: "/contact",
    tone: "red",
    className: "md:col-span-1",
  },
  {
    title: "Conferințe & gale",
    desc: "Congrese, gale și evenimente corporate.",
    icon: Mic2,
    href: "/contact",
    tone: "blue",
    className: "md:col-span-1",
  },
];

export function Hosting() {
  return (
    <section className="relative z-[1] border-y border-border bg-background-soft py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ce găzduim"
          title={
            <>
              Un singur spațiu, <span className="text-gradient-red">infinite scenarii</span>
            </>
          }
          intro="De la finale de campionat la târguri și concerte — sala se transformă după fiecare eveniment."
          className="mb-14 max-w-2xl"
        />

        <RevealGroup className="grid auto-rows-[minmax(180px,1fr)] grid-cols-1 gap-4 md:grid-cols-4">
          {cards.map((card) => (
            <RevealChild key={card.title} className={cn(card.className, "h-full")}>
              <Link
                href={card.href}
                className={cn(
                  "group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border border-border p-6 transition-all duration-500 hover:-translate-y-1",
                  !card.image && "card-glow"
                )}
              >
                {/* image bg */}
                {card.image && (
                  <>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={cn(
                        "object-cover transition-transform duration-700 group-hover:scale-105",
                        card.objectPos
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </>
                )}
                {/* gradient tone bg */}
                {!card.image && card.tone && (
                  <div
                    className={cn(
                      "absolute inset-0 opacity-90",
                      card.tone === "red"
                        ? "bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,46,67,0.28),transparent_60%)]"
                        : "bg-[radial-gradient(120%_120%_at_100%_0%,rgba(46,107,255,0.28),transparent_60%)]"
                    )}
                  />
                )}

                <div className="relative z-10">
                  <span
                    className={cn(
                      "mb-4 grid size-11 place-items-center rounded-xl border border-white/10 backdrop-blur",
                      card.tone === "blue" ? "bg-secondary/20 text-blue-300" : "bg-primary/20 text-red-300"
                    )}
                  >
                    <card.icon className="size-5" />
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    {card.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                    Detalii
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
