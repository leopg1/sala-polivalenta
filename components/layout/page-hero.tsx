import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-[7.5rem] pb-16 md:pt-36 md:pb-20">
      <div className="spotlight pointer-events-none absolute inset-x-0 top-0 h-[420px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      <div className="container-x relative">
        <Reveal>
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-foreground">
              Acasă
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground/70">{eyebrow}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.05}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.2}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
