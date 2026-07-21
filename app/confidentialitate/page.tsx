import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
export const metadata: Metadata = { title: "Politica de Confidențialitate" };
export default function Page() {
  return <LegalPage slug="confidentialitate" eyebrow="Legal" title="Politica de Confidențialitate" intro="Cum colectăm, folosim și protejăm datele tale personale." />;
}
