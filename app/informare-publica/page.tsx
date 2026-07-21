import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { DocumentsExplorer } from "@/components/informare/documents-explorer";
import { totalDocuments } from "@/lib/data/documents";

export const metadata: Metadata = {
  title: "Informare Publică",
  description:
    "Documente de interes public ale CSN Sala Polivalentă București — concursuri de angajare, declarații de avere, bugete, transparență salarială, organigramă și regulamente.",
};

export default function InformarePublicaPage() {
  return (
    <>
      <PageHero
        eyebrow="Informare Publică"
        title={
          <>
            Informații de <span className="text-gradient-red">interes public</span>
          </>
        }
        intro={`Toate documentele publice ale instituției, într-un singur loc — ${totalDocuments} de fișiere organizate pe categorii și ani. Caută rapid ce te interesează.`}
      />
      <DocumentsExplorer />
    </>
  );
}
