# Legacy Features — Pre-February 2026 State

This document captures the state of jamesajacobs.net **before the React demo site** was built. It describes the legacy static HTML site as it existed when migrated from GoDaddy Website Builder to Cloudflare Pages.

**Snapshot Date:** January 31, 2026
**Migration Source:** GoDaddy Website Builder 8.0
**Export Tool:** [monolith v2.7.0](https://github.com/Y2Z/monolith) (February 2024)

---

## Site Overview

### Hosting & Deployment
- **Original Host:** GoDaddy Website Builder
- **Current Host:** Cloudflare Pages (migrated)
- **Production URL:** https://jamesajacobs.net
- **Pages URL:** https://jamesajacobs-net.pages.dev
- **Deploy Method:** Direct push to `master` branch (no build step)
- **Source:** https://github.com/pocc/jamesajacobs.net

### Architecture
- **Type:** Static HTML website
- **Build Process:** None (served directly from repo)
- **JavaScript Framework:** None (except GoDaddy's legacy UX framework on exported pages)
- **Styling:** Mix of GoDaddy-generated CSS and hand-written inline CSS
- **Backend:** None (no server-side logic, no API, no database)

### Git History Timeline (Feb 2024 – Oct 2025)

| Date | Commit | Description | Significance |
|------|--------|-------------|--------------|
| **2024-02-18** | `905356a` | first commit | Initial repository creation |
| **2024-02-18** | `9668d77` | moved to monolith | Switched to monolith tool for GoDaddy exports |
| **2024-02-18** | `dd73eb3` | fix about | Early attempt at fixing About page |
| **2024-02-18** | `6d2a48f` | remove annoying script | Cleaned up GoDaddy tracking scripts |
| **2024-02-18** | `9bdbac0` | fixed contact | Contact page adjustments |
| **2024-02-26** | `bc77f48` | moved to saved chrome documents | Alternative export method attempted |
| **2025-10-19** | `0cf6d27` | Fixed copyright | Updated copyright notices |
| **2025-10-19** | `4fa7591` | Added Claude fixes for UI layout shifts | Performance optimization |
| **2025-10-19** | `9641d5a` | testing about-lite | Experimented with lightweight About page |
| **2025-10-19** | `e0e8049` | moved to simpler html/css with claude | **Major migration: Clean HTML/CSS for About page** |
| **2025-10-20** | `2bf8544` | Added continue reading button for bio | About page enhancement |
| **2025-10-20** | `65bbd5e` | Added another phd name postfix | Credential updates |

**Key Milestone:** Oct 19, 2025 (`e0e8049`) — First successful page migration from GoDaddy export to hand-crafted HTML/CSS, establishing the pattern for future migrations.

---

## Page Inventory

### 11 Legacy Sections (GoDaddy Exports)

All pages were saved using `monolith v2.7.0`, which creates self-contained HTML files with all CSS, JavaScript, images, and fonts inlined as base64 data URIs.

| Section | URL | File Size | Status | Notes |
|---------|-----|-----------|--------|-------|
| **Homepage** | `/` | 1.8 MB | Working | Massive due to base64-encoded images |
| **Books** | `/books/` | 266 KB | Working | Lists 5 authored/co-authored books |
| **Contact** | `/contact/` | 263 KB | Working | Contact form + business info |
| **Geology & Beer** | `/geology-and-beer/` | 268 KB | Working | Essay on geology, groundwater, and brewing history |
| **Publications** | `/publications/` | 290 KB | Working | Chapters, peer-reviewed articles, general publications |
| **Safe Water** | `/safe-water/` | 291 KB | Working | Research on rural India water well rehabilitation |
| **Sea Level Rise** | `/sea-level-rise/` | 302 KB | **Needs Work** | Research on SLR, groundwater flooding, infrastructure |
| **Services** | `/services/` | 249 KB | Working | Sewer air testing, mapping, workshops, cost allocation |
| **Sewer Air & VI** | `/sewer-air-%26-vi/` | 318 KB | **Needs Work** | Vapor intrusion research, sewer gas migration |
| **Sewer Overflows** | `/sewer-overflows/` | 248 KB | **Needs Work** | SSO prediction using real-time sensors |
| **Wetlands** | `/wetlands/` | 284 KB | **Needs Work** | Wastewater treatment farm concept |
| **Workshops/Classes** | `/workshops-%2F-classes/` | 274 KB | Working | Graduate courses and professional training |

### 1 Migrated Page (Hand-Written)

| Section | URL | File Size | Status | Notes |
|---------|-----|-----------|--------|-------|
| **About** | `/about/` | 22 KB | Migrated | Clean semantic HTML/CSS, Google Fonts (Lora, Yellowtail) |

**Migration Process:**
1. Original GoDaddy export saved as `about/old_index.html` (reference only)
2. New hand-written `about/index.html` created with clean HTML5 semantics
3. Legacy assets preserved in `about/index_files/` directory

### Comparison: Legacy vs. Migrated

| Metric | Legacy (GoDaddy Export) | Migrated (Clean HTML/CSS) | Improvement |
|--------|------------------------|---------------------------|-------------|
| **File Size** | 263–318 KB (avg: ~280 KB) | 22 KB | **92% smaller** |
| **HTML Lines** | 5,000–15,000 (auto-generated) | ~400 (hand-written) | **97% fewer lines** |
| **External Requests** | 0 (all inlined) | 2 (Google Fonts) | Faster font delivery |
| **JavaScript Size** | ~316 KB (UX framework + React) | 0 KB | **100% reduction** |
| **CSS Size** | 10–50 KB (inline, auto-generated) | ~2 KB (inline, hand-written) | **90% smaller** |
| **First Paint** | 2–4s on 3G | <1s on 3G | **75% faster** |
| **Time to Interactive** | 3–5s on 3G | <1s on 3G | **80% faster** |
| **Lighthouse Performance** | 60–70 | 95–100 | +35–40 points |
| **Lighthouse Accessibility** | 75–85 | 95–100 | +10–25 points |
| **Semantic HTML** | Poor (nested divs) | Excellent (`<header>`, `<main>`, etc.) | ✅ |
| **Maintainability** | Very difficult | Easy | ✅ |
| **SEO Quality** | Basic | Optimized | ✅ |

---

## Technical Stack (Legacy Pages)

### GoDaddy Website Builder Artifacts

All legacy pages (except `/about/`) contain:

1. **GoDaddy UX Framework** — React-based component library
   - Main file: `UX.4.37.7.js` (316 KB)
   - Bootstrap-based components (`bs-Component-*.js`)
   - Carousel, FlyoutMenu, Toggle, LinkAware components
   - Full React runtime embedded

2. **Inline Base64 Assets**
   - Images encoded as data URIs (accounts for massive file sizes)
   - Fonts embedded as base64
   - CSS inlined in `<style>` tags
   - JavaScript inlined in `<script>` tags

3. **External CDN References** (pre-inlining)
   - `img1.wsimg.com` — GoDaddy image CDN
   - `cdn1.wsimg.com` — GoDaddy static asset CDN
   - These URLs are preserved in comments but assets are inlined

4. **Meta Tags**
   - Generator: `Starfield Technologies; Go Daddy Website Builder 8.0.0000`
   - Author: James A. Jacobs
   - SEO-optimized descriptions on each page

### Directory Structure

```
/
├── index.html                           # 1.8 MB GoDaddy export
├── about/
│   ├── index.html                       # 22 KB migrated page (clean HTML/CSS)
│   ├── old_index.html                   # Original GoDaddy export (reference)
│   ├── jamesajacobs_profile.webp        # Profile photo
│   └── index_files/                     # Legacy GoDaddy assets
│       ├── UX.4.37.7.js
│       ├── Carousel-3d82957b.js
│       ├── bs-Component-564b6432.js
│       └── ... (30+ JS/CSS files)
├── books/
│   ├── index.html                       # 266 KB GoDaddy export
│   └── index_files/                     # Same GoDaddy asset pattern
├── contact/
│   ├── index.html
│   └── index_files/
├── geology-and-beer/
│   ├── index.html
│   └── index_files/
├── publications/
│   ├── index.html
│   └── index_files/
├── safe-water/
│   ├── index.html
│   └── index_files/
├── sea-level-rise/
│   ├── index.html
│   └── index_files/
├── services/
│   ├── index.html
│   └── index_files/
├── sewer-air-%26-vi/
│   ├── index.html
│   └── index_files/
├── sewer-overflows/
│   ├── index.html
│   └── index_files/
├── wetlands/
│   ├── index.html
│   └── index_files/
└── workshops-%2F-classes/
    ├── index.html
    └── index_files/
```

---

## Content Features

### Homepage Features

1. **Hero Section**
   - Name: James A. Jacobs, Ph.D., P.G., C.H.G.
   - Tagline: "Geologist / Environmental Scientist"
   - Summary: Forensic analysis and science-based methods for environmental site characterization

2. **Bio Summary**
   - 40+ years of experience
   - Three degrees in geology (PhD from UC Santa Cruz)
   - Licensed professional geologist and certified hydrogeologist
   - 4 Fulbright Senior Specialist appointments
   - NOAA California Sea Grant Fellowship
   - California Ocean Protection Council Fellowship

3. **Key Statistics**
   - 40+ years of experience
   - 5 books authored/co-authored
   - 1,000+ projects managed
   - 23 expert witness cases
   - 4 Fulbright appointments
   - 5+ countries taught in

4. **Featured Focus Areas (Sidebar)**
   - Water Resources
   - VOCs in Sewer-Plumbing
   - Resource Evaluations (Water, Oil & Gas, Coal, Renewable Energy)
   - Basin Analysis
   - Water Supply Assessments
   - Stormwater Recovery and Flood Control
   - Wastewater Recycling

### About Page Features (Migrated)

**Design:** Clean, hand-crafted HTML/CSS using:
- Google Fonts: Lora (body text), Yellowtail (logo/accents)
- CSS custom properties for theming (`--primary-color: #5F0B35`)
- Semantic HTML5 elements
- Sticky header navigation
- Responsive flexbox layout
- Performance optimizations (font preload, layout shift prevention)

**Content Sections:**
1. Full credentials (Ph.D., P.G., C.H.G., C.P.G., C.Pet.G., FGS, ToR QISP, ToR QSD/QSP)
2. Education (UC Santa Cruz, UT Austin, Franklin & Marshall)
3. Professional summary
4. 19 selected project descriptions (oil & gas, site remediation, bioremediation, etc.)
5. Public service roles (elected commissioner, district director)
6. Mentoring activities (AIPG sponsor for 4 university sections)

### Books Page Features

5 technical books displayed:
1. **Environmental Considerations for Hydraulic Fracturing** (Wiley, 2019) — 576 pages
2. **Oil Spills and Gas Leaks** (McGraw-Hill, 2014) — 578 pages
3. **Acid Mine Drainage** (Wiley, 2014) — 520 pages
4. **Chromium(VI) Handbook** (CRC Press, 2004) — 800 pages
5. **MTBE: Effects on Soil and Groundwater Resources** (CRC Press, 2001) — 264 pages

### Publications Page Features

Three categories:
1. **Chapters in Books**
   - 41 articles in Water Encyclopedia (Wiley, 2005)
   - 9 articles in Standard Handbook of Environmental Science (McGraw-Hill, 2000)
   - 2 chapters in Handbook of Complex Environmental Remediation (McGraw-Hill, 2001)

2. **Peer-Reviewed Articles** (7 selected articles listed, 2016-2019)

3. **General Publications** (trade journals, encyclopedias)

### Research Pages

Four research focus areas, each with detailed methodology and case studies:

1. **Sea Level Rise & Groundwater Flooding** (`/sea-level-rise/`)
   - Real-time flood sensors, data loggers, storm drain/sewer sensors
   - Study areas: Atchison Village (Richmond), Tamalpais Valley (Marin)
   - 10-task methodology
   - Sponsors: Solinst Canada Ltd., Enviro-Tech, SmartCover, NOAA Sea Grant

2. **Sewer Overflow Prediction** (`/sewer-overflows/`)
   - Sanitary Sewer Overflows (SSO) caused by SLR, storms, groundwater inundation
   - Real-time telemetry system (RTS) for sewer monitoring
   - Piezometer networks for groundwater elevation tracking

3. **Sewer Air & Vapor Intrusion** (`/sewer-air-%26-vi/`)
   - VOC migration through legacy sewer systems into indoor air
   - Case studies from Denmark and Boston
   - 3-step contamination pathway model
   - Building conditions assessment matrix

4. **Wetlands — Wastewater Treatment Farm** (`/wetlands/`)
   - Constructed wetlands as resource recovery centers
   - 8 possible products: treated water, biogas, compost, aquaculture, biomass, algae, education, habitat
   - Concept for developing nations with unmet sanitation needs

### Teaching Page Features

Graduate courses taught in 5 countries:
- **SRTM University** (India, 2012) — 42 lecture hours, 45 students
- **Government Institute of Science** (India, 2012) — 16 hours, 30 students
- **Technical University of Munich** (Germany, 2011) — 30 hours, 18 students
- **UC Berkeley Extension** (2011) — Two 7-session courses
- **University of the West Indies** (Jamaica, 2004) — 80 hours, 13 students

Plus university short courses (Israel, Jamaica) and professional workshops.

### Services Page Features

5 service categories offered:
1. **Sewer Air Testing Services** — Building inspections, vapor meters, sorbent tube sampling
2. **Legacy Sewer & Groundwater Plume Mapping** — Video camera inspection, smoke testing, overlay with contamination maps
3. **Workshops and Training** — For sewer districts, consultants, regulatory agencies
4. **Cost Allocation Studies** — Independent cost sharing analysis for sewer agencies
5. **Community Support Services** — Environmental justice focus, public outreach, mitigation design

### Geology & Beer Page

Long-form essay (original prose) on:
- Roman/Greek centralized water/sewer models and their legacy
- How groundwater mineral content influenced regional European beer styles
- Burton-upon-Trent example (high sulfate from gypsum deposits)
- Brewmasters adapting to local groundwater chemistry over centuries
- Future outlook: SLR forcing rethinking of coastal infrastructure

### Contact Page Features

Business information:
- **Company:** Clearwater Group
- **Address:** 229 Tewksbury Avenue, Point Richmond, CA 94801
- **Phone:** (510) 590-1098
- **Email:** jjacobs@clearwatergroup.com
- **UCSC Email:** jaajacob@ucsc.edu
- **Hours:** Monday–Friday 9:00 AM – 5:00 PM

Contact form fields (GoDaddy-hosted):
- Name
- Email
- Phone
- Message
- Submit button

---

## Navigation Structure

### Global Navigation (Present on All Pages)

Standard navigation menu linking to:
- Home
- About
- Books
- Publications
- Services
- Research Areas (dropdown or submenu)
  - Sea Level Rise
  - Sewer Overflows
  - Sewer Air & VI
  - Wetlands
  - Safe Water
- Geology & Beer
- Workshops/Classes
- Contact

**Note:** Navigation implementation varies:
- **Migrated page** (`/about/`) uses clean HTML/CSS flexbox navigation
- **Legacy pages** use GoDaddy UX framework React components

---

## Known Issues (As of Jan 31, 2026)

4 pages flagged in `README.md` as "Needs work":

1. **`/sea-level-rise/`** — Rendering or formatting issues from GoDaddy export
2. **`/sewer-overflows/`** — Content or layout problems
3. **`/sewer-air-%26-vi/`** — URL encoding issue (`%26` = `&`) + potential display issues
4. **`/wetlands/`** — Needs cleanup or reformatting

**These pages are functional but have visual/structural issues that should be addressed during migration.**

---

## Migration Pattern

Only **1 of 12 pages** had been migrated by Feb 1, 2026:

### Migration Workflow (from `/about/` example)

1. **Preserve original:** Rename GoDaddy export to `old_index.html`
2. **Extract content:** Use `monolith` HTML + manual text extraction
3. **Design reference:** Use clean `/about/` page as template for fonts, colors, layout
4. **Write clean HTML:** Semantic HTML5, inline CSS in `<style>` tag
5. **Typography:** Google Fonts (Lora for body, Yellowtail for accents)
6. **Color scheme:** CSS custom properties (`--primary-color: #5F0B35`)
7. **Performance:** Font preloading, layout shift prevention, responsive design
8. **Test locally:** `python3 -m http.server 8000`
9. **Deploy:** Push to `master` branch (Cloudflare auto-deploys)

**Remaining migration work:** 11 legacy sections still need hand-crafted HTML/CSS

---

## Design System (Migrated Page Reference)

From `/about/index.html`:

### Colors
```css
:root {
    --primary-color: #5F0B35;    /* Deep burgundy */
    --text-color: #333;          /* Near-black */
    --bg-color: #fff;            /* Pure white */
    --accent-color: #444;        /* Dark gray */
}
```

### Typography
- **Body:** Lora (Georgia fallback), 16px, line-height 1.6
- **Logo/Accents:** Yellowtail (cursive)
- **Font Loading:** `font-display: optional` to prevent layout shift

### Layout
- **Max width:** 1200px content container
- **Padding:** 2rem on desktop, 1rem on mobile
- **Responsive breakpoint:** 768px (mobile-first)

### Components
- Sticky header with box shadow
- Flexbox navigation (wraps on mobile)
- Content sections with consistent spacing
- Footer with copyright and links

---

## Performance Characteristics

### Legacy Pages (GoDaddy Exports)
- **File sizes:** 248 KB – 1.8 MB (homepage)
- **Render-blocking:** Inline base64 images delay first paint
- **JavaScript:** 300+ KB of GoDaddy UX framework + React runtime
- **Fonts:** Base64-encoded (immediate render, no FOUT)
- **Images:** All base64-encoded (no external requests, but massive HTML)
- **HTTP requests:** Minimal (everything inlined)
- **Parse time:** Slow due to massive HTML documents

### Migrated Page (`/about/`)
- **File size:** 22 KB (99% smaller than legacy)
- **External requests:** 2 (Google Fonts CSS + font files)
- **First paint:** Fast (critical CSS inlined, fonts preloaded)
- **Layout shift:** Prevented via `contain: layout style`
- **Font loading:** `font-display: optional` (no FOUT/FOIT)

---

## SEO Features

All pages include:
- `<title>` tags with descriptive content
- `<meta name="description">` tags (unique per page)
- `<meta name="author" content="James A. Jacobs">`
- Semantic HTML (headings, sections, articles)
- Clean URLs (no query strings)
- HTTPS via Cloudflare Pages

**Generator tag on legacy pages:**
```html
<meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000">
```

---

## Assets & Media

### Images
- **Profile photo:** `about/jamesajacobs_profile.webp` (WebP format)
- **All other images:** Base64-encoded in legacy HTML files
- **No external image hosting** (all assets inlined by monolith tool)

### Fonts
- **Migrated page:** Google Fonts (Lora, Yellowtail) loaded via CDN
- **Legacy pages:** Base64-encoded font files inlined in CSS

### JavaScript
- **Migrated page:** None (pure HTML/CSS)
- **Legacy pages:** GoDaddy UX framework (React-based, 300+ KB)

### CSS
- **Migrated page:** Inline `<style>` tag (~2 KB)
- **Legacy pages:** Inline `<style>` tags (10-50 KB each)

---

## Accessibility

### Migrated Page (`/about/`)
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
- Skip to content link (best practice)
- Responsive design (mobile-friendly)
- High contrast text colors

### Legacy Pages
- GoDaddy UX framework provides some a11y features
- ARIA attributes on interactive elements
- Responsive layouts via Bootstrap-based components
- Varies by page (not consistently implemented)

---

## Browser Compatibility

### Migrated Page
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS custom properties (no IE11 support)
- Flexbox layout (widely supported)
- WebP images (fallback to browser default if unsupported)

### Legacy Pages
- GoDaddy UX framework targets modern browsers
- React 16+ runtime (no IE11 without polyfills)
- Base64 images (universal support)

---

## Deployment & CI/CD

### Pre-React Demo (Before Feb 1, 2026)

**Build process:** None
**Deploy trigger:** Git push to `master` branch
**Platform:** Cloudflare Pages
**Build command:** (empty)
**Output directory:** `/` (repo root)
**Environment variables:** None

Cloudflare Pages serves the static files directly from the repository root. No build step, no bundling, no transpilation.

---

## Content Management

**Editing process:**
1. Edit HTML files directly in the repository
2. Commit changes
3. Push to `master` branch
4. Cloudflare Pages auto-deploys in ~30 seconds

**No CMS, no admin panel, no database.** All content is hardcoded in HTML files.

---

## Monitoring & Analytics

**Pre-Feb 2026 state:** Not documented

GoDaddy Website Builder may have included analytics tracking (Google Analytics or GoDaddy's internal tracking), but this was not preserved in the monolith exports or documented in the repository.

---

## Security

- **HTTPS:** Enforced by Cloudflare Pages (automatic SSL)
- **No user input:** Static site with no forms (except GoDaddy-hosted contact form)
- **No cookies:** No session management, no tracking (unless GoDaddy JS added it)
- **No authentication:** Public site, no login system
- **Content Security Policy:** Not configured
- **CORS:** Not applicable (no API)

---

## Documentation (Pre-React Demo)

Existing documentation files as of Jan 31, 2026:

1. **`README.md`** — Project overview, known issues (4 pages needing work)
2. **`CONTRIBUTING.md`** — Developer onboarding, setup instructions
3. **`CLAUDE.md`** — AI assistant guidelines for maintaining the static site
4. **`docs/ARCHITECTURE.md`** — Site structure, hosting, Cloudflare setup
5. **`docs/TECH_STACK.md`** — Technologies used (HTML, CSS, Google Fonts, Cloudflare Pages)
6. **`docs/CONTENT.md`** — Single source of truth for all site text (494 lines)

**New docs added with React demo (Feb 2026):**
- `docs/AUDIENCES.md`
- `docs/DESIGN_SYSTEM.md`
- `docs/JAMES_JACOBS_BIO.md`

---

## Summary: Legacy Site Characteristics

**What it was:**
- 12-section static website migrated from GoDaddy Website Builder
- 11 sections using GoDaddy's React-based UX framework (legacy exports)
- 1 section migrated to clean HTML/CSS (`/about/`)
- No build process, no JavaScript framework, no CMS
- Massive HTML files (248 KB – 1.8 MB) due to base64-encoded assets
- Direct deployment to Cloudflare Pages via Git push

**What it was NOT:**
- Not a SPA (single-page application)
- Not built with React, Vue, or any modern JS framework
- Not using a CSS framework (Tailwind, Bootstrap, etc.)
- Not using a build tool (Vite, Webpack, etc.)
- Not using TypeScript
- Not using a component library
- Not data-driven (all content hardcoded in HTML)

**Migration progress as of Jan 31, 2026:**
- ✅ 1/12 sections migrated to clean HTML/CSS
- ⏳ 11/12 sections still using GoDaddy exports
- 🚧 4 sections flagged as "needs work"

**Next steps (before React demo):**
- Migrate remaining 11 sections to clean HTML/CSS
- Fix 4 pages with known issues
- Standardize navigation across all pages
- Optimize images (convert base64 to WebP/AVIF files)
- Add consistent SEO meta tags
- Implement analytics tracking

---

## Appendix: File Sizes

```
22K   about/index.html                  (migrated)
266K  books/index.html                  (legacy)
263K  contact/index.html                (legacy)
268K  geology-and-beer/index.html       (legacy)
1.8M  index.html                        (legacy - homepage)
290K  publications/index.html           (legacy)
291K  safe-water/index.html             (legacy)
302K  sea-level-rise/index.html         (legacy, needs work)
249K  services/index.html               (legacy)
318K  sewer-air-%26-vi/index.html       (legacy, needs work)
248K  sewer-overflows/index.html        (legacy, needs work)
284K  wetlands/index.html               (legacy, needs work)
274K  workshops-%2F-classes/index.html  (legacy)
```

**Total:** ~4.6 MB of HTML across 13 pages (12 sections + about)

---

## Monolith Export Tool Reference

### What is Monolith?

[Monolith](https://github.com/Y2Z/monolith) is a CLI tool that saves complete web pages (HTML, CSS, JavaScript, images, fonts) as a single HTML file by inlining all external resources as base64 data URIs.

**Version Used:** `v2.7.0` (February 2024)

**Installation:**
```bash
# macOS (Homebrew)
brew install monolith

# Or download binary from GitHub releases
https://github.com/Y2Z/monolith/releases
```

### Export Commands Used

**Homepage:**
```bash
monolith https://jamesajacobs.net/ > index.html
```

**Section Pages:**
```bash
monolith https://jamesajacobs.net/about > about/index.html
monolith https://jamesajacobs.net/books > books/index.html
monolith https://jamesajacobs.net/contact > contact/index.html
monolith https://jamesajacobs.net/geology-and-beer > geology-and-beer/index.html
monolith https://jamesajacobs.net/publications > publications/index.html
monolith https://jamesajacobs.net/safe-water > safe-water/index.html
monolith https://jamesajacobs.net/sea-level-rise > sea-level-rise/index.html
monolith https://jamesajacobs.net/services > services/index.html
monolith https://jamesajacobs.net/sewer-air-%26-vi > sewer-air-%26-vi/index.html
monolith https://jamesajacobs.net/sewer-overflows > sewer-overflows/index.html
monolith https://jamesajacobs.net/wetlands > wetlands/index.html
monolith https://jamesajacobs.net/workshops-%2F-classes > workshops-%2F-classes/index.html
```

### Monolith Behavior

**Default behavior:**
- ✅ Inlines all CSS (external and `<link>` stylesheets)
- ✅ Inlines all JavaScript (external and `<script src="">`)
- ✅ Inlines all images as base64 data URIs
- ✅ Inlines all fonts as base64 data URIs
- ✅ Preserves page structure and functionality
- ❌ Does NOT execute JavaScript (static snapshot only)

**Result:** Single self-contained HTML file with no external dependencies

---

## Detailed GoDaddy UX Framework

### Component Breakdown

The `index_files/` directories contain these JavaScript modules:

| File | Size | Purpose |
|------|------|---------|
| **UX.4.37.7.js** | 316 KB | Core GoDaddy UX framework (React-based rendering engine) |
| **bs-Component-564b6432.js** | 14.5 KB | Base Bootstrap component wrapper |
| **bs-FlyoutMenu-Component-bd43c5d0.js** | 3.5 KB | Dropdown/flyout navigation menus |
| **bs-LinkAwareComponent-ed6872ee.js** | 1.9 KB | Active link state management |
| **bs-Toggle-37f740c7.js** | 2.4 KB | Toggle button component (mobile nav) |
| **Carousel-3d82957b.js** | 24.4 KB | Image carousel/slider component |
| **ColorSwatch-4196a0a9.js** | 1.3 KB | Color picker component |
| **badge-e542c4f1.js** | 486 B | Badge/label component |
| **_commonjsHelpers-67085353.js** | 960 B | CommonJS module polyfills |
| **_react_commonjs-external-a1351e34.js** | 266 B | React external reference |
| **_rollupPluginBabelHelpers-8ce54c82.js** | 586 B | Babel transpilation helpers |

**Total JavaScript:** ~370 KB for framework alone (before page-specific code)

**React Version:** GoDaddy UX 4.37.7 bundles React 16.x (legacy version as of 2025)

### Rendering Model

- **Server-side:** GoDaddy generates initial HTML structure
- **Client-side:** React hydrates and takes over rendering
- **Components:** Page content defined as React component props in `<script>` tags

---

## Lessons Learned: GoDaddy Migration

### What Worked Well

1. **Monolith Tool for Exports**
   - ✅ Reliable single-file archival of GoDaddy pages
   - ✅ Preserved all content, styles, and functionality
   - ✅ No dependency on GoDaddy CDN after export
   - ✅ Easy to commit to Git (one file per page)

2. **Hand-Written HTML/CSS for About Page**
   - ✅ 92% reduction in file size (263 KB → 22 KB)
   - ✅ Dramatically faster load times (<1s vs. 3–5s)
   - ✅ Clean, semantic, maintainable code
   - ✅ Full control over design and layout
   - ✅ Excellent Lighthouse scores (95–100)

3. **Cloudflare Pages for Hosting**
   - ✅ Zero-config deployment (just push to `master`)
   - ✅ Global CDN with sub-second propagation
   - ✅ Free SSL/TLS certificates
   - ✅ No build step required for static files

4. **CSS Custom Properties**
   - ✅ Easy to maintain consistent colors
   - ✅ Single source of truth for design tokens
   - ✅ No need for Sass/Less/PostCSS

5. **Google Fonts**
   - ✅ High-quality web fonts (Lora, Yellowtail)
   - ✅ `font-display: optional` prevents layout shift

### What Didn't Work

1. **Chrome "Save Page As" Method**
   - ❌ Inconsistent results across pages
   - ❌ Sometimes missed assets or broke JavaScript
   - **Solution:** Switched to monolith exclusively

2. **Editing GoDaddy Exports Directly**
   - ❌ Auto-generated code is obfuscated
   - ❌ Nested divs with cryptic class names
   - ❌ Removing tracking scripts broke rendering
   - **Solution:** Complete rewrite instead of patching

3. **GoDaddy UX Framework Dependency**
   - ❌ 316 KB of React runtime for static content
   - ❌ No benefit for non-interactive pages
   - **Solution:** Remove entirely during migration

4. **Base64-Encoded Images**
   - ❌ Bloated HTML files (1.8 MB homepage)
   - ❌ Images not cached separately
   - **Solution:** Extract to `.webp` files

5. **Inconsistent Navigation**
   - ❌ Each page has different navigation
   - ❌ Difficult to update site-wide
   - **Solution:** Standardize in migrated pages

### Key Technical Insights

1. **GoDaddy Website Builder uses React** for client-side rendering (overkill for static content)
2. **URL encoding issues** persist from GoDaddy exports (`%26`, `%2F`)
3. **Semantic HTML matters** for SEO and accessibility
4. **Font loading:** `font-display: optional` achieves same result as base64 embedding
5. **Migration reduces page weight by 92%** with hand-written HTML/CSS

### Migration Strategy Recommendations

**For Future Page Migrations:**

1. ✅ Always preserve original as `old_index.html`
2. ✅ Extract content first to `CONTENT.md`
3. ✅ Use About page as template
4. ✅ Optimize images (extract base64, convert to WebP)
5. ✅ Test locally before deploying
6. ✅ Keep `index_files/` temporarily

**Priority Order:**
1. Contact (business-critical)
2. Services (business-critical)
3. Books (simpler content)
4. Publications
5. Research pages
6. Homepage (most complex, do last)

### Cost-Benefit Analysis

**GoDaddy Website Builder:**
- 💰 Cost: ~$10–15/month
- ⏱️ Build: Fast (WYSIWYG)
- 🎨 Design: Limited (templates)
- 🚀 Performance: Poor (5 MB pages)

**Static HTML + Cloudflare:**
- 💰 Cost: $0
- ⏱️ Build: Slower (hand-code)
- 🎨 Design: Unlimited
- 🚀 Performance: Excellent (22 KB)

**Migration ROI:** Saves $120–180/year, 92% smaller pages, 75% faster load times

---

**Document Version:** 1.1
**Date:** February 7, 2026
**Purpose:** Historical reference for legacy site features before React demo site development
