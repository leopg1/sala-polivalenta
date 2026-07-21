import Link from "next/link";
import { Briefcase, ScrollText, Wallet, Coins, Network, Gavel, ArrowUpRight, Search } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealChild } from "@/components/ui/reveal";
import { docCategories, totalDocuments } from "@/lib/data/documents";

const icons: Record<string, typeof Briefcase> = {
  concursuri: Briefcase,
  declaratii: ScrollText,
  buget: Wallet,
  salarizare: Coins,
  organizare: Network,
  regulamente: Gavel,
};

export function InformarePreview() {
  return (
    <section className="relative z-[1] py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Informare Publică"
            title={
              <>
                Transparență, la un <span className="text-gradient-red">click distanță</span>
              </>
            }
            intro={`Peste ${totalDocuments} de documente publice — concursuri, bugete, declarații și regulamente — organizate pe categorii și ușor de căutat.`}
            className="max-w-2xl"
          />
        </div>

        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docCategories.map((cat) => {
            const Icon = icons[cat.slug] ?? ScrollText;
            return (
              <RevealChild key={cat.slug}>
                <Link
                  href={`/informare-publica#${cat.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-card"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-3xl font-bold text-foreground/25 transition-colors group-hover:text-foreground/60">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{cat.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary">
                    Deschide
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealChild>
            );
          })}
        </RevealGroup>

        <Reveal delay={0.1}>
          <Link
            href="/informare-publica"
            className="group mt-4 flex items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card/20 p-5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
          >
            <Search className="size-4" />
            Caută în toate documentele publice
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
