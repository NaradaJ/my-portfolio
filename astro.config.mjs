// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Defaults target GitHub Pages (https://naradaj.github.io/my-portfolio/).
// For a custom domain, set SITE_URL=https://yourdomain.com and BASE_PATH=/
const site = process.env.SITE_URL ?? 'https://naradaj.github.io';
const base = process.env.BASE_PATH ?? '/my-portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
