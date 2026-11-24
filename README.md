# Narada Kasun — Portfolio

Personal portfolio built with [Astro](https://astro.build). Design direction: **Light through the gap**. It's near-monochrome, built from my own photography, with one source of light.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/my-portfolio/

## Edit content

| What | Where |
|---|---|
| Name, bio, links, tools, career, FAQ | `src/data/site.ts` |
| Case studies | `src/content/work/*.md` (one file per project) |
| Photos | `src/assets/photos/` (Astro outputs AVIF/WebP automatically) |
| Colours, fonts, global styles | `src/styles/global.css` |

To add a project, copy a file in `src/content/work/`, change the front matter and text, and push.

## Deploy

Every push to `master` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`.
One-time setup: **Settings → Pages → Source: GitHub Actions**.

**Custom domain:** set `SITE_URL=https://yourdomain.com` and `BASE_PATH=/` in the workflow's build step, then add the domain under Settings → Pages.

## Built in

- **SEO:** canonical URLs, Open Graph/Twitter cards, `sitemap-index.xml`, `robots.txt`
- **AEO:** JSON-LD (`Person`, `ProfilePage`, `WebSite`, `FAQPage`, `SoftwareSourceCode`, `BreadcrumbList`), `/llms.txt`, short question-and-answer content
- **Accessibility:** semantic landmarks, skip link, visible focus, alt text, WCAG AA contrast, `prefers-reduced-motion` support
- **Performance:** no framework JavaScript (one small effects script), responsive AVIF/WebP images, self-hosted fonts
- **Effects:** cursor "hold the light" reveal, breathing light, drawn power lines, iris reveal, scroll-driven reveals, 3D card tilt, photo-masked text, 3D orbit. All are CSS-first and turn off when the visitor prefers reduced motion.
