import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { gallery } from "@/lib/data/gallery";

function Row({ images, reverse = false }: { images: typeof gallery; reverse?: boolean }) {
  const doubled = [...images, ...images];
  return (
    <div className="flex w-max gap-4" style={{ animation: `marquee 48s linear infinite${reverse ? " reverse" : ""}` }}>
      {doubled.map((img, i) => (
        <div
          key={i}
          className="group relative h-52 w-80 shrink-0 overflow-hidden rounded-xl border border-border md:h-64 md:w-96"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="384px"
            className="object-cover object-center grayscale-[0.35] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          <div className="absolute inset-0 bg-secondary/10 mix-blend-color transition-opacity duration-500 group-hover:opacity-0" />
        </div>
      ))}
    </div>
  );
}

export function GalleryPreview() {
  const half = Math.ceil(gallery.length / 2);
  return (
    <section className="relative z-[1] overflow-hidden border-y border-border bg-background-soft py-24 md:py-32">
      <div className="container-x mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Galerie"
          title={
            <>
              Momente din <span className="text-gradient">Sala Polivalentă</span>
            </>
          }
          className="max-w-xl"
        />
        <Reveal delay={0.1}>
          <ButtonLink href="/galerie" variant="outline" arrow className="shrink-0">
            Toată galeria
          </ButtonLink>
        </Reveal>
      </div>

      <div className="relative flex flex-col gap-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background-soft to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background-soft to-transparent md:w-32" />
        <Row images={gallery.slice(0, half)} />
        <Row images={gallery.slice(half)} reverse />
      </div>
    </section>
  );
}
