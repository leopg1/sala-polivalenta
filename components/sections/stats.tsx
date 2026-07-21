import { CountUp } from "@/components/ui/count-up";
import { Reveal, RevealGroup, RevealChild } from "@/components/ui/reveal";

const stats = [
  { value: 5300, label: "Locuri pentru spectatori", sep: "." },
  { value: 52, label: "Ani de tradiție, din 1974", sep: "" },
  { value: 13, label: "Discipline sportive găzduite", sep: "" },
  { value: 220, suffix: "+", label: "Documente publice online", sep: "" },
];

export function Stats() {
  return (
    <section className="relative z-[1] border-b border-border bg-background py-20 md:py-28">
      <div className="container-x">
        <Reveal className="mb-14 max-w-2xl">
          <p className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground/90 md:text-3xl">
            O arenă construită pentru amploare — și pentru{" "}
            <span className="text-gradient-red">transparență</span>.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {stats.map((s) => (
            <RevealChild key={s.label} className="relative">
              <div className="mb-3 h-px w-10 bg-primary" />
              <div className="font-display text-5xl font-bold tracking-tight text-foreground md:text-6xl">
                <CountUp to={s.value} suffix={s.suffix ?? ""} separator={s.sep} />
              </div>
              <div className="mt-3 text-sm leading-snug text-muted-foreground">{s.label}</div>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
