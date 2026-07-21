import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ProgramExplorer } from "@/components/program/program-explorer";
import { events } from "@/lib/data/program";

export const metadata: Metadata = {
  title: "Program & Calendar Evenimente",
  description:
    "Calendarul competițiilor și evenimentelor din Sala Polivalentă București — handbal, volei, judo, gimnastică, expoziții și concerte. Filtrează după disciplină.",
};

export default function ProgramPage() {
  const sportsCount = new Set(events.map((e) => e.sport)).size;
  return (
    <>
      <PageHero
        eyebrow="Program"
        title={
          <>
            Calendarul <span className="text-gradient">arenei</span>
          </>
        }
        intro="Competiții naționale și internaționale, expoziții, concerte și evenimente — tot ce se întâmplă în Sala Polivalentă, într-un singur loc. Filtrează după disciplină."
      >
        <div className="flex flex-wrap gap-6 text-sm">
          <div>
            <span className="font-display text-2xl font-bold text-foreground">{events.length}</span>
            <span className="ml-2 text-muted-foreground">evenimente în calendar</span>
          </div>
          <div className="hidden h-6 w-px self-center bg-border sm:block" />
          <div>
            <span className="font-display text-2xl font-bold text-foreground">{sportsCount}</span>
            <span className="ml-2 text-muted-foreground">discipline & tipuri de evenimente</span>
          </div>
        </div>
      </PageHero>
      <ProgramExplorer />
    </>
  );
}
