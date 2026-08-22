# PlusThreeEightZero

Static agency website built with Astro + Tailwind CSS v4. Bilingual: English + Ukrainian.

## URLs

- **English** (default): https://vadimcoolin.github.io/plusthreeeightzero/
- **Ukrainian**: https://vadimcoolin.github.io/plusthreeeightzero/uk/

## Development

```bash
npm install
npm run dev
```

Open http://localhost:4321

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
│   ├── logo_main.svg
│   ├── plus.svg
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── index.astro     ← English (root)
│   │   └── uk/             ← Ukrainian
│   ├── components/
│   │   └── Header.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── styles/
│       └── global.css
├── .github/workflows/
│   └── deploy.yml          ← GitHub Actions auto-deploy
├── astro.config.mjs
└── package.json
```
