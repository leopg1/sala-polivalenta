import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
export const metadata: Metadata = { title: "GDPR — Protecția Datelor" };
export default function Page() {
  return <LegalPage slug="gdpr" eyebrow="Legal" title={<>GDPR — Protecția Datelor</>} intro="Informații privind protecția datelor cu caracter personal." />;
}
