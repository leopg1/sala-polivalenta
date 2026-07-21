import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Stats } from "@/components/sections/stats";
import { AboutIntro } from "@/components/sections/about-intro";
import { Hosting } from "@/components/sections/hosting";
import { ProgramPreview } from "@/components/sections/program-preview";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { InformarePreview } from "@/components/sections/informare-preview";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <AboutIntro />
      <Hosting />
      <ProgramPreview />
      <GalleryPreview />
      <InformarePreview />
      <CTA />
    </>
  );
}
