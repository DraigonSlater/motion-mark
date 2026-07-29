# Your Company — Website

Built with [Astro](https://astro.build). Static site, no backend needed —
this deploys straight to Cloudflare Pages.

## What's inside

```
src/
  layouts/Layout.astro     ← shared <head>, fonts, global CSS import
  components/
    Hero.astro              ← logo, slogan, nav, background photo, driving truck
    AnimatedTruck.astro     ← the SVG truck animation (wheels spin, truck drives across)
    About.astro             ← "About Us" text + photo gallery
    Contact.astro           ← contact details, socials, footer
  pages/index.astro          ← assembles everything into the one-page site
  styles/global.css          ← colors, fonts, spacing — edit this to reskin the whole site
public/
  images/                    ← put your logo + photos here (see public/images/README.md)
  favicon.svg
```

This is a single-page site (like stardustmedia.co.za) with anchored
sections: Home → #about → #contact.

## 1. First-time setup

You'll need [Node.js](https://nodejs.org) installed (v18 or later).

```bash
cd truck-site
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:4321`). The page
live-reloads as you edit files.

## 2. Add your content

1. **Logo & photos** — drop files into `public/images/` using the
   filenames listed in `public/images/README.md` (logo.png,
   truck-hero.jpg, about-1.jpg, about-2.jpg, about-3.jpg).
2. **Company name & slogan** — edit the two constants at the top of
   `src/pages/index.astro`.
3. **About text** — edit the paragraphs in `src/components/About.astro`.
4. **Contact details & socials** — edit the props passed to
   `<Contact />` in `src/pages/index.astro`, or edit the defaults
   directly inside `src/components/Contact.astro`.
5. **Colors** — edit the CSS variables at the top of
   `src/styles/global.css` (`--color-primary`, `--color-accent`, etc.)
   to match your brand.

## 3. Build for production

```bash
npm run build
```

This outputs a static site into `dist/`. You can preview the built
version with `npm run preview`.

## 4. Deploy to Cloudflare Pages

**Easiest: connect a GitHub repo (auto-deploys on every push)**

1. Push this project to a GitHub repository.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create →
   Pages → Connect to Git**, and select your repo.
3. Use these build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Cloudflare will build and give you a
   `*.pages.dev` URL. Add a custom domain afterwards under
   **Custom domains** in the Pages project settings.

**Alternative: deploy straight from your machine with Wrangler**

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist
```

Follow the prompts to log in and create/select a Pages project.

Note: Anthropic's product docs (docs.claude.com) don't cover
Cloudflare's own product, so for anything Cloudflare-specific that
changes over time (pricing, dashboard layout), check
https://developers.cloudflare.com/pages/ directly.

## Notes on the animated truck

`AnimatedTruck.astro` is a hand-drawn SVG truck with:
- wheels that spin continuously
- a subtle bounce as it "drives"
- exhaust puffs
- a logo panel on the trailer that shows your `logo.png` once you add
  it (falls back to "YOUR LOGO" text until then)

It respects `prefers-reduced-motion` for accessibility (the animation
turns off for users who've asked their OS to reduce motion).

If you'd rather use a real photo of your truck instead of the SVG
illustration, that's easy too — just say the word and I'll swap the
hero section to a photo-based layout instead.
