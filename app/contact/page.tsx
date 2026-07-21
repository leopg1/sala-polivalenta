import type { Metadata } from "next";
import { MapPin, Mail, Phone, Printer, ShoppingCart, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează Complexul Sportiv Național Sala Polivalentă București — Calea Piscului 10, Sector 4. Email, telefon și formular de contact.",
};

const details = [
  { icon: MapPin, label: "Adresă", value: site.contact.address, href: site.contact.maps },
  { icon: Mail, label: "Email secretariat", value: site.contact.email, href: `mailto:${site.contact.email}` },
  { icon: ShoppingCart, label: "Email achiziții", value: site.contact.emailAchizitii, href: `mailto:${site.contact.emailAchizitii}` },
  { icon: Phone, label: "Telefon", value: site.contact.phone, href: `tel:${site.contact.phoneRaw}` },
  { icon: Printer, label: "Fax", value: site.contact.fax },
  { icon: Clock, label: "Program secretariat", value: "Luni – Vineri · 08:00 – 16:00" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Hai să <span className="text-gradient">vorbim</span>
          </>
        }
        intro="Pentru închirierea sălii, informații de interes public sau orice altă solicitare — suntem la un mesaj distanță."
      />

      <section className="py-14 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* details + map */}
          <div className="flex flex-col gap-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {details.map((d, i) => {
                const inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card/40 p-5 transition-colors hover:border-white/15">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <d.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{d.label}</div>
                      <div className="mt-1 text-sm font-medium text-foreground break-words">{d.value}</div>
                    </div>
                  </div>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.05}>
                    {d.href ? (
                      <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block h-full">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal>
              <div className="overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Harta — Sala Polivalentă București"
                  src="https://maps.google.com/maps?q=Calea%20Piscului%2010%20Bucuresti&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="h-[320px] w-full grayscale-[0.3] contrast-[1.1]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* form */}
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
