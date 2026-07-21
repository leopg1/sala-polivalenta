import Image from "next/image";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative z-[1] py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/venue/exterior-2.jpg"
              alt="Sala Polivalentă București"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-background/80" />
            <div className="spotlight absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />

            <div className="relative z-10 flex flex-col items-center px-6 py-20 text-center md:py-28">
              <Reveal>
                <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
                  Ai un eveniment pe măsura <span className="text-gradient">acestei arene</span>?
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                  Competiție, expoziție, concert sau conferință — echipa noastră îți pregătește
                  spațiul. Scrie-ne sau sună pentru disponibilitate și tarife.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <ButtonLink href={`mailto:${site.contact.email}`} size="lg">
                    <Mail className="size-4" /> Scrie-ne
                  </ButtonLink>
                  <ButtonLink href={`tel:${site.contact.phoneRaw}`} size="lg" variant="outline">
                    <Phone className="size-4" /> {site.contact.phone}
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Vezi toate datele de contact
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
