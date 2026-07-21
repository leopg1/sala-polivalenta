import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealChild } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { latestEvents, dayNum, monthShort, weekday, toneFor } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ProgramPreview() {
  const items = latestEvents(6);

  return (
    <section className="relative z-[1] py-24 md:py-32">
      <div className="container-x">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Program"
            title={
              <>
                Ce se întâmplă <span className="text-gradient">în arenă</span>
              </>
            }
            className="max-w-xl"
          />
          <Reveal delay={0.1}>
            <ButtonLink href="/program" variant="outline" arrow className="shrink-0">
              Calendar complet
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="grid gap-3">
          {items.map((e, i) => (
            <RevealChild key={`${e.date}-${i}`}>
              <Link
                href="/program"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-2xl border border-border bg-card/40 p-4 transition-all duration-300 hover:border-white/15 hover:bg-card md:gap-8 md:p-5"
              >
                {/* date block */}
                <div className="flex w-16 flex-col items-center rounded-xl border border-border bg-background/60 py-2.5 md:w-20">
                  <span className="font-display text-2xl font-bold leading-none text-foreground md:text-3xl">
                    {dayNum(e.date)}
                  </span>
                  <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-widest text-primary">
                    {monthShort(e.date)}
                  </span>
                </div>

                {/* title */}
                <div className="min-w-0">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className={cn("rounded-full border px-2.5 py-0.5 text-[0.7rem] font-medium", toneFor(e.sport))}>
                      {e.sport}
                    </span>
                    <span className="hidden text-xs text-muted-foreground sm:inline">{weekday(e.date)}</span>
                  </div>
                  <h3 className="truncate font-display text-base font-semibold text-foreground md:text-lg">
                    {e.title}
                  </h3>
                  {e.org && e.org !== e.title && (
                    <p className="truncate text-sm text-muted-foreground">{e.org}</p>
                  )}
                </div>

                {/* time + arrow */}
                <div className="flex items-center gap-4">
                  {e.time && (
                    <span className="hidden items-center gap-1.5 text-sm text-muted-foreground sm:flex">
                      <Clock className="size-3.5" /> {e.time}
                    </span>
                  )}
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
              </Link>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
