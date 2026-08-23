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
│   ├── logo_main.svg
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
│   │   └── Header.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── styles/
│       └── global.css
├── .github/workflows/
│   └── deploy.yml
├── astro.config.mjs
└── package.json
```
