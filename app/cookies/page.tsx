import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";
export const metadata: Metadata = { title: "Politica Cookies" };
export default function Page() {
  return <LegalPage slug="cookies" eyebrow="Legal" title="Politica Cookies" intro="Ce sunt cookie-urile și cum le folosim pe acest site." />;
}
