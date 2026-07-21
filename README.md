# Sala Polivalentă București — website

Redesign 2026 al site-ului **Complexului Sportiv Național „Sala Polivalentă"** din București (instituție publică, arenă de 5.300 de locuri). Design dark cinematic, animat, mobile-first.

![Made with Next.js](https://img.shields.io/badge/Next.js-16-black) ![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![status](https://img.shields.io/badge/status-prototype-orange)

## ✨ Ce include

- **Homepage** animată — hero cinematic cu parallax, ticker, statistici count-up, bento „ce găzduim", program live, galerie, hub de transparență, CTA
- **Program** — calendar filtrabil pe **545 de evenimente** reale, 13 discipline
- **Informare Publică** — hub cu **căutare + filtre** peste **218 documente** publice (concursuri, declarații de avere, buget, transparență salarială, organigramă, regulamente)
- **Galerie** cu lightbox, **Despre/Istoric**, **Contact** (formular + hartă)
- Pagini legale: Termeni, Confidențialitate, Cookies, GDPR
- **SEO**: JSON-LD (`SportsActivityLocation` + `GovernmentOrganization`), sitemap, robots, OG dinamic, redirects 301

## 🛠️ Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion · Lenis (smooth scroll) · GSAP · lucide-react · react-markdown

## 🚀 Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
```

## 📁 Structură

```
app/           rute (App Router) + sitemap/robots/icon/og
components/    sections/ · layout/ · ui/ · program/ · informare/ · galerie/ · contact/
lib/           site.ts · format.ts · motion.ts · data/ (program, documents, gallery)
content/legal/ texte legale (markdown)
public/images/ venue · galerie · istoric · logo
```

## 📌 De finalizat înainte de lansare

- Migrare documente în storage (Supabase) + panou admin editabil pentru secretariat
- Confirmare denumire minister și program secretariat
- Redirects 301 din URL-urile vechi de documente
- Logo vectorial oficial

---

Realizat de [Orevo](https://orevo.ro). Detalii tehnice în [`CLAUDE.md`](CLAUDE.md).
