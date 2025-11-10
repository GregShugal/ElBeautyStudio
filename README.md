# EL Beauty Studio — Astro MVP

A fast, elegant MVP for **elbsnj.com** using Astro + Tailwind, ready for Cloudflare Pages.

## Quick start
```bash
# 1) Install
npm i

# 2) Run locally
npm run dev

# 3) Build for production
npm run build
npm run preview

# 4) (Optional) Enable Klaviyo email capture
cp .env.example .env
# then add PUBLIC_KLAVIYO_COMPANY_ID + PUBLIC_KLAVIYO_LIST_ID
```

## Where to edit
- **Brand tokens:** `src/styles/tokens.css`, Tailwind config colors
- **Home hero copy:** `src/components/Hero.astro`
- **Services data:** `src/content/services.json` (update `href` to service deep links when ready)
- **Booking page:** `src/pages/book.astro` (uses master Square link for now)
- **Instagram grid:** update `igItems` in `src/pages/index.astro` for v1; upgrade to Graph API later
- **Results imagery:** update `/public/assets/results-before.svg` + `/public/assets/results-after.svg` when you have final photography

## Deploy (Cloudflare Pages)
- Create a new Pages project, connect your repo
- Build command: `npm run build`
- Build output directory: `dist`
- Set `NODE_VERSION` to 20+
