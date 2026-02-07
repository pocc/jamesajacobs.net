# Architecture Overview

## System Type
This is a **static HTML website** with no build step, no server-side logic, and no JavaScript framework. It is deployed to **Cloudflare Pages** as a collection of static files.

## Hosting & Deployment
- **Platform:** Cloudflare Pages
- **Production URL:** https://jamesajacobs.net
- **Pages URL:** https://jamesajacobs-net.pages.dev
- **Source:** https://github.com/pocc/jamesajacobs.net
- **Deploy method:** Git integration — pushing to `master` triggers a Cloudflare Pages deployment.
- **Build step:** None. Cloudflare Pages serves the static files directly from the repository root.

## Cloudflare Resources
- **Pages project:** `jamesajacobs-net`
- **Workers / KV / D1 / R2 / Queues:** None. This project uses no Cloudflare backend services.
- **DNS:** Custom domain `jamesajacobs.net` pointed to the Pages deployment.

## Site Structure
```
/
├── index.html                  # Homepage (exported from GoDaddy Website Builder via monolith)
├── about/
│   ├── index.html              # Rewritten to clean, hand-crafted HTML/CSS
│   ├── jamesajacobs_profile.webp
│   ├── old_index.html          # Original GoDaddy export (kept for reference)
│   └── index_files/            # Legacy JS/CSS assets from original export
├── books/
│   ├── index.html              # Original GoDaddy export
│   └── index_files/
├── contact/                    # Same pattern as above
├── geology-and-beer/
├── publications/
├── safe-water/
├── sea-level-rise/             # Needs work (see README)
├── services/
├── sewer-air-%26-vi/
├── sewer-overflows/            # Needs work (see README)
├── wetlands/                   # Needs work (see README)
├── workshops-%2F-classes/
├── docs/                       # Project documentation (this folder)
├── CLAUDE.md                   # AI assistant guidelines
├── CONTRIBUTING.md             # Developer onboarding
└── README.md                   # Project overview and known issues
```

## Page Types

### Migrated Pages
These have been rewritten to clean, semantic HTML with inline CSS:
- `about/index.html` — Custom HTML/CSS with Google Fonts (Lora, Yellowtail)

### Legacy Pages (GoDaddy Exports)
All other pages were exported from GoDaddy Website Builder 8.0 using [monolith](https://github.com/Y2Z/monolith). They contain:
- Bundled JS/CSS in `index_files/` directories
- References to `wsimg.com` (GoDaddy's image CDN)
- GoDaddy's React-based UX framework (`UX.4.37.7.js`)

## Data Flow
There is no client-server data flow. All content is static HTML served directly by Cloudflare's CDN edge nodes. The contact page may contain a third-party form integration.

## Migration Status
The project is in the process of migrating from GoDaddy-exported pages to clean, hand-written HTML/CSS. See `README.md` for pages that still need work.

---

## Demo Site (React SPA)

A modern React-based redesign lives in `/demo-site/` and is served at `/demo/`.

### Tech Stack
- **Framework:** React 19 + TypeScript
- **Build:** Vite 7
- **Styling:** Tailwind CSS v4 (utility classes + custom theme tokens)
- **Routing:** React Router 7 with `HashRouter` (for static hosting compatibility)
- **Fonts:** Google Fonts — Source Serif 4 (headings), Source Sans 3 (body), JetBrains Mono (data/stats)

### Design System — "Strata"
Geological stratification theme with earth tones:
- **Primary:** Deep Basalt `#2c3e2d` (dark green-brown)
- **Accent:** Copper Ore `#c17f59` (warm oxidized copper)
- **Links:** Slate Blue `#5a7d8a`
- **Surface:** Sandstone `#f5f0e8` (warm parchment background)
- **Text:** Warm near-black `#2d2a26`

### Structure
```
demo-site/
├── index.html              # Entry HTML (Google Fonts, #root mount)
├── package.json            # Dependencies (React 19, Vite 7, Tailwind 4)
├── vite.config.ts          # Base path /demo/, output to ../demo
├── src/
│   ├── main.tsx            # React root render
│   ├── App.tsx             # HashRouter + route definitions
│   ├── index.css           # Tailwind import + theme tokens
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces for all data
│   ├── data/               # Content extracted from components
│   │   ├── siteConfig.ts   # Site-wide config, nav, colors
│   │   ├── books.ts        # Book catalog
│   │   ├── publications.ts # Publications by category
│   │   ├── research.ts     # Research area definitions
│   │   ├── credentials.ts  # Credentials & education
│   │   ├── projects.ts     # Selected project descriptions
│   │   ├── teaching.ts     # Teaching history & workshops
│   │   ├── services.ts     # Service offerings
│   │   └── sponsors.ts     # Sponsors, grants, donors
│   ├── components/         # Shared UI components
│   │   ├── Layout.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroPage.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SectionDivider.tsx
│   │   ├── StatBar.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── BookCard.tsx
│   │   ├── ResearchCard.tsx
│   │   ├── TimelineVertical.tsx
│   │   ├── Tag.tsx
│   │   ├── PullQuote.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── ContactForm.tsx
│   └── pages/              # Route-level page components
│       ├── Home.tsx
│       ├── About.tsx
│       ├── Research.tsx        # Hub page for all research areas
│       ├── SeaLevelRise.tsx
│       ├── SewerSystems.tsx    # Merged Overflows + Air & VI
│       ├── Wetlands.tsx
│       ├── SafeWater.tsx
│       ├── BooksAndPublications.tsx  # Merged Books + Publications
│       ├── Teaching.tsx        # Renamed from WorkshopsClasses
│       ├── Services.tsx
│       ├── GeologyAndBeer.tsx
│       └── Contact.tsx
└── ...config files (tsconfig, eslint, etc.)
```

### Route Map
```
/                              → Home
/about                         → About (expanded CV)
/research                      → Research Hub (bento grid)
/research/sea-level-rise       → Sea Level Rise
/research/sewer-systems        → Sewer Systems (merged)
/research/wetlands             → Wetlands
/research/safe-water           → Safe Water
/books                         → Books & Publications (merged)
/teaching                      → Teaching (renamed)
/services                      → Services
/geology-and-beer              → Geology & Beer
/contact                       → Contact
```

### Build & Deploy
```bash
cd demo-site
npm run dev      # Local dev server
npm run build    # Build to ../demo/
```
The `/demo/` directory is committed to the repo and served at `https://jamesajacobs.net/demo/`.
