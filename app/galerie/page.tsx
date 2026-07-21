import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { GalleryGrid } from "@/components/galerie/gallery-grid";

export const metadata: Metadata = {
  title: "Galerie Foto",
  description:
    "Galerie foto din Complexul Sportiv Național Sala Polivalentă București — competiții, evenimente, expoziții și interioarele arenei.",
};

export default function GaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Galerie"
        title={
          <>
            Sala Polivalentă, <span className="text-gradient">în imagini</span>
          </>
        }
        intro="Competiții, evenimente, expoziții și spații ale arenei. Apasă pe orice imagine pentru a o vedea mărită."
      />
      <GalleryGrid />
    </>
  );
}
