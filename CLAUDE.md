# Sala Polivalentă — site (Next.js)

Redesign 2026 al site-ului salapolivalenta.ro (CSN Sala Polivalentă București, instituție publică sport). Conținutul real e extras în folderul părinte (`../pagini`, `../imagini`, `../documente`).

## Stack
- **Next.js 16** (App Router) + React 19 + TypeScript
- **Tailwind v4** (tokens în `app/globals.css` via `@theme`, nu `tailwind.config`)
- **Motion** (`motion/react`) — animații & reveal; **Lenis** — smooth scroll; **GSAP** disponibil
- `lucide-react` (iconițe), `clsx` + `tailwind-merge` (`cn()`), `react-markdown` (pagini legale)
- Fonturi: **Space Grotesk** (display) + **Inter** (body) via `next/font`

## Brand (dark cinematic)
- Bază: near-black navy `--background #060912`; text `--foreground #eef2fb`
- **Roșu** `--primary #ff2e43` (energie, din arena logo) + **Albastru** `--secondary #2e6bff` (instituțional)
- Accent semnătură: gradient roșu→alb→albastru (`.text-gradient`)
- Ton: instituțional dar modern, energic, credibil. Copy în română, pentru public larg.

## Convenții
- **Zero hex în componente** — doar tokens semantice (`bg-primary`, `text-foreground`, `border-border`…). Scări `red-*` / `blue-*` expuse în `@theme`.
- `next/image` peste tot, cu `sizes`. `alt` descriptiv (SEO).
- Secțiuni în `components/sections/`, layout în `components/layout/`, primitive în `components/ui/`.
- Easing din `lib/motion.ts` (`EASE`) — tipat ca tuplu, altfel Motion dă eroare TS.
- Date structurate în `lib/data/` (auto-generate din `../_extractie/gen_data.py`) — nu edita manual.
- Fișiere protejate: `app/globals.css` (tokens), `app/layout.tsx` (fonturi + providers).

## Structură pagini
`/` home · `/despre` (despre+istoric) · `/program` (calendar filtrabil) · `/galerie` (lightbox) · `/informare-publica` (hub 218 doc, search+filtre) · `/contact` (form+hartă) · legal: `/termeni-si-conditii` `/confidentialitate` `/cookies` `/gdpr`

## Date & conținut
- `lib/data/program.ts` — 545 evenimente (din program-ul vechi)
- `lib/data/documents.ts` — 218 documente pe 6 categorii (linkate momentan la URL-urile vechi salapolivalenta.ro — de migrat în storage la lansare)
- `lib/data/gallery.ts` — 36 imagini
- `content/legal/*.md` — texte legale extrase

## Definition of done
- `npm run build` curat (TS + lint) · toate paginile prerender static
- Meta unic pe fiecare pagină · JSON-LD (`components/seo/json-ld.tsx`) · sitemap + robots
- Responsive (mobil→desktop) · animații cu `prefers-reduced-motion` respectat
- Lighthouse verde (imagini optimizate `next/image`, fonturi `next/font`)

## TODO la lansare (vezi ../02-BRIEF-REDESIGN.md)
- Migrare documente (326 MB) în Supabase Storage + admin editabil pentru secretariat
- Confirmare denumire minister (footer folosea denumirea veche) + program secretariat
- Redirects 301 din URL-urile vechi de documente
- Logo vectorial oficial (acum e wordmark custom + PNG mic)
