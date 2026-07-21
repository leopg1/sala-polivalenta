import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { site } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sala Polivalentă București — Arenă Națională · 5.300 locuri",
    template: "%s · Sala Polivalentă București",
  },
  description:
    "Complexul Sportiv Național „Sala Polivalentă” București — cea mai importantă arenă acoperită a Capitalei, 5.300 de locuri. Competiții, evenimente, expoziții, program și informare publică.",
  keywords: [
    "Sala Polivalentă",
    "arenă București",
    "sală sport București",
    "evenimente București",
    "competiții sportive",
    "închiriere sală",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: site.url,
    siteName: site.shortName,
    title: "Sala Polivalentă București — Arenă Națională",
    description: "5.300 de locuri în inima Bucureștiului. Competiții, evenimente, expoziții.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
      <body className="grain min-h-dvh">
        <JsonLd />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-[1]">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
