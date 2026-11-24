# Narada Kasun — Portfolio

Personal portfolio built with [Astro](https://astro.build). Design direction: **Light through the gap**. It's near-monochrome, built from my own photography, with one source of light.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321/my-portfolio/

## Edit content (no coding needed)

**Easiest: Pages CMS.** Go to https://app.pagescms.org, sign in with GitHub, and open `NaradaJ/my-portfolio`. You get forms for:

- **Journal:** write entries in a rich-text editor. Tick "Draft" to hide one.
- **Photos:** upload a JPG, add a title and a one-line description, and tick "Show on home page" for up to three.
- **Projects:** case studies.
- **Profile & home page text:** headline, intro, about, stats, career journey, FAQ and links.

Each save is a commit, and the site redeploys automatically in about two minutes. It also works from your phone's browser.

**Alternative:** edit files directly on GitHub (press `.` in the repo for a web editor):

| What | Where |
|---|---|
| Profile and home page text | `src/data/profile.json` |
| Journal entries | `src/content/journal/*.md` |
| Photos | `src/content/photos/*.md` + image in `src/assets/photos/` |
| Case studies | `src/content/work/*.md` |
| Colours, fonts | `src/styles/global.css` |

**Photo privacy:** the deploy workflow strips EXIF metadata (including GPS location) from every photo and commits the cleaned files. The original upload still stays in git history, so turning off location tagging in your phone's camera is the safest option. Use JPG; iPhone HEIC files aren't supported.

## Deploy

Every push to `master` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`.
One-time setup: **Settings → Pages → Source: GitHub Actions**.

**Custom domain:** set `SITE_URL=https://yourdomain.com` and `BASE_PATH=/` in the workflow's build step, then add the domain under Settings → Pages.

## Built in

- **SEO:** canonical URLs, Open Graph/Twitter cards, `sitemap-index.xml`, `robots.txt`, RSS feed for the journal
- **AEO:** JSON-LD (`Person`, `ProfilePage`, `WebSite`, `FAQPage`, `SoftwareSourceCode`, `BlogPosting`, `CollectionPage`, `BreadcrumbList`), `/llms.txt`, short question-and-answer content
- **Accessibility:** semantic landmarks, skip link, visible focus, alt text, WCAG AA contrast, `prefers-reduced-motion` support
- **Performance:** no framework JavaScript (one small effects script), responsive AVIF/WebP images, self-hosted fonts
- **Effects:** cursor "hold the light" reveal, breathing light, drawn power lines, iris reveal, scroll-driven reveals, 3D card tilt, photo-masked text, 3D orbit. All are CSS-first and turn off when the visitor prefers reduced motion.
