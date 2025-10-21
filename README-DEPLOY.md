# Deploy add-ons for elbsnj.com

## 1) Copy files into your project
- `src/components/SEO.astro`
- `src/components/KlaviyoForm.astro`
- `public/_headers`
- `public/robots.txt`
- (optional) apply `patches/astro-config-sitemap.diff`

## 2) Add @astrojs/sitemap
```bash
npm i -D @astrojs/sitemap
# Then update astro.config.mjs (apply the patch or edit manually)
```

## 3) Use SEO + Klaviyo components
In `src/layouts/BaseLayout.astro`, inside <head>, add:
```astro
---
import "../styles/tailwind.css";
import SEO from "../components/SEO.astro";
const { title = 'EL Beauty Studio', description = 'Bespoke facials & sculpting face massage in East Hanover, NJ.' } = Astro.props;
---
<head>
  <SEO {title} {description} />
  <!-- keep the rest of your head tags -->
</head>
```

Place the Klaviyo form on Home or Footer:
```astro
---
import KlaviyoForm from "../components/KlaviyoForm.astro";
---
<KlaviyoForm />
```

Replace `PUBLIC_API_KEY` and `LIST_ID` in the component with your Klaviyo values.

## 4) Commit & push
```bash
git add .
git commit -m "Add SEO, robots, _headers, Klaviyo, sitemap"
git push -u origin astro-mvp
```

## 5) Cloudflare Pages settings
- Build command: `npm run build`
- Output dir: `dist`
- Env var: `NODE_VERSION=20`
- Custom domain: elbsnj.com

Done!
