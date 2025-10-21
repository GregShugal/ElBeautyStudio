import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';     // ensure this exists
import sitemap from '@astrojs/sitemap';  // add this

export default defineConfig({
  site: 'https://elbsnj.com',
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    react(),      // needed for SkinQuizIsland.jsx
    sitemap(),    // new
  ],
});

