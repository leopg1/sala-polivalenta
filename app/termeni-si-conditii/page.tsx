import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
export const metadata: Metadata = { title: "Termeni și Condiții" };
export default function Page() {
  return <LegalPage slug="termeni-si-conditii" eyebrow="Legal" title="Termeni și Condiții" intro="Condițiile de utilizare a site-ului salapolivalenta.ro." />;
}
