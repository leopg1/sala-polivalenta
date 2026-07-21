const items = [
  "Handbal",
  "Volei",
  "Judo",
  "Gimnastică Ritmică",
  "Arte Marțiale",
  "Tenis de Masă",
  "Concerte",
  "Expoziții",
  "Conferințe",
  "Gale",
  "Târguri",
];

export function Marquee() {
  return (
    <div className="relative z-[1] flex overflow-hidden border-y border-border bg-background-soft py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background-soft to-transparent" />
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground/80 md:text-2xl">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8" aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-xl font-semibold tracking-tight text-foreground/80 md:text-2xl">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
