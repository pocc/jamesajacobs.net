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
