import Link from "next/link";
import { MapPin, Mail, Phone, Printer, ArrowUpRight } from "lucide-react";
import { nav, legalNav, site } from "@/lib/site";
import { Logo } from "./logo";

export function Footer() {
  const year = 2026;
  return (
    <footer className="relative z-[1] overflow-hidden border-t border-border bg-background-soft">
      <div className="spotlight pointer-events-none absolute inset-x-0 top-0 h-64 opacity-60" />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand + contact */}
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Complexul Sportiv Național „Sala Polivalentă” — cea mai importantă arenă
              acoperită a Capitalei, din 1974. Instituție publică în subordinea{" "}
              {site.parent}.
            </p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={site.contact.maps} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                  {site.contact.address}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <Mail className="size-4 shrink-0 text-primary" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneRaw}`} className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground">
                  <Phone className="size-4 shrink-0 text-primary" />
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Printer className="size-4 shrink-0 text-primary" />
                Fax: {site.contact.fax}
              </li>
            </ul>
          </div>

          {/* nav */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Navigare
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group inline-flex items-center gap-1.5 text-foreground/80 transition-colors hover:text-foreground">
                    {item.label}
                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* legal */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-foreground/80 transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* giant wordmark */}
        <div className="pointer-events-none mt-14 select-none overflow-hidden">
          <div className="font-display text-[13vw] font-bold leading-none tracking-tighter text-white/[0.04]">
            SALA POLIVALENTĂ
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {site.shortName}. Toate drepturile rezervate.</p>
          <p>
            Instituție publică · {site.parent} · Realizat de{" "}
            <a href="https://orevo.ro" target="_blank" rel="noopener noreferrer" className="text-foreground/70 transition-colors hover:text-primary">
              Orevo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
