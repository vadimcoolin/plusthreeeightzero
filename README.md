# PlusThreeEightZero

Static agency website built with Astro + Tailwind CSS v4. Bilingual: English + Ukrainian.

## URLs

- **English** (default): https://coolin.cc/plusthreeeightzero/en/
- **Ukrainian**: https://coolin.cc/plusthreeeightzero/ua/
- Root `/` redirects based on browser language

## Development

```bash
npm install
astro dev --background
```

Manage server: `astro dev stop`, `astro dev status`, `astro dev logs`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Automatic deployment via GitHub Actions on push to `main`.

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first CSS
- [Inter](https://fonts.google.com/specimen/Inter) — font (via Google Fonts)
- [GitHub Actions](https://docs.github.com/en/actions) — auto-deploy to GitHub Pages

## Project Structure

```
├── public/                  ← static assets (images, SVGs)
│   ├── logo_main.svg        ← logo fallback
│   ├── plus.svg
│   ├── burger.svg
│   ├── x.svg
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── index.astro     ← Root redirect (browser lang)
│   │   ├── en/index.astro  ← English
│   │   └── ua/index.astro  ← Ukrainian
│   ├── components/
│   │   ├── Header.astro    ← nav, burger menu, theme toggle
│   │   └── Logo.astro      ← inline SVG logo (currentColor)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── styles/
│       └── global.css
├── .github/workflows/
│   └── deploy.yml
├── astro.config.mjs
└── package.json
```

## Theme System

6-theme cycle via + button: white → black → color1 → white → black → color2.

Default based on `prefers-color-scheme`. Persisted in `localStorage`. FOUC prevention in `BaseLayout.astro`.

| Theme   | Primary (bg) | Secondary BG | Secondary (text) | Muted   |
|---------|--------------|--------------|-------------------|---------|
| White   | #EBEAE5      | #FFFFFF      | #28282A           | #81807F |
| Black   | #28282A      | #0F0F11      | #EBEAE5           | #81807F |
| Color 1 | #E2E417      | #FEFFA8      | #ED008C           | #F39393 |
| Color 2 | #FFDED2      | #FEE9E8      | #1D2795           | #696DB9 |
