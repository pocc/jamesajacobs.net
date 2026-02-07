# Design System — "Strata"

The demo site uses a design system inspired by geological stratification — layered earth tones, textured sections, and a sense of depth and accumulated expertise.

---

## Color Palette

### Primary — Deep Basalt
Dark green-brown tones evoking basalt rock formations.

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#2c3e2d` | Header, footer, dark sections |
| `--color-primary-light` | `#3d5340` | Hover states on primary |
| `--color-primary-dark` | `#1a2a1c` | Deepest backgrounds |

### Accent — Copper Ore
Warm oxidized copper tones for interactive elements and highlights.

| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#c17f59` | Buttons, CTA, highlights, borders |
| `--color-accent-light` | `#d4996f` | Hover states on accent |
| `--color-accent-dark` | `#a86840` | Active/pressed states |

### Slate Blue
Cool geological slate for links and secondary interactive elements.

| Token | Hex | Usage |
|---|---|---|
| `--color-slate` | `#4a6d7a` | Links, secondary buttons (darkened for WCAG contrast) |
| `--color-slate-light` | `#7a9daa` | Link hover states |

### Surface — Sandstone
Warm parchment tones for page backgrounds and cards.

| Token | Hex | Usage |
|---|---|---|
| `--color-surface` | `#f5f0e8` | Main page background |
| `--color-surface-mid` | `#e8dfd2` | Card backgrounds, alternating sections |
| `--color-surface-dark` | `#d4c8b5` | Borders, dividers |

### Text
| Token | Hex | Usage |
|---|---|---|
| `--color-text` | `#2d2a26` | Primary body text (warm near-black) |
| `--color-text-secondary` | `#6b6560` | Muted/secondary text |

---

## Typography

### Font Stack
| Role | Font Family | CSS Token | Fallback |
|---|---|---|---|
| Headings | Source Serif 4 | `--font-serif` | Georgia, serif |
| Body | Source Sans 3 | `--font-sans` | system-ui, sans-serif |
| Data/Stats | JetBrains Mono | `--font-mono` | monospace |

### Usage Guidelines
- **Headings (h1–h3):** Source Serif 4, `font-serif` class. Bold weight for page titles, semibold for section heads.
- **Body text:** Source Sans 3, `font-sans` class (Tailwind default). Regular weight for paragraphs, medium for emphasis.
- **Statistics and credentials:** JetBrains Mono, `font-mono` class. Used in StatBar, credential badges, and numeric data to convey scientific precision.

### Google Fonts Load
Fonts are loaded via `<link>` in `demo-site/index.html` with `display=swap`:
```
Source Serif 4: opsz 8-60, wght 400-700
Source Sans 3: wght 300-700
JetBrains Mono: wght 400-600
```

---

## Component Library

### Layout Components
| Component | File | Purpose |
|---|---|---|
| Layout | `Layout.tsx` | Outlet wrapper with Header + Footer + `pt-16` for fixed header |
| Header | `Header.tsx` | Fixed top nav, transparent-on-scroll (homepage), dropdown research menu, mobile overlay |
| Footer | `Footer.tsx` | 4-column layout: bio+photo, page links, research links, contact info |

### Hero Components
| Component | File | Purpose |
|---|---|---|
| HeroPage | `HeroPage.tsx` | Standard page hero with gradient background, optional breadcrumbs |

### Content Components
| Component | File | Purpose |
|---|---|---|
| ScrollReveal | `ScrollReveal.tsx` | IntersectionObserver wrapper for fade-up entrance animations. Supports `stagger` mode for grid children. |
| StatBar | `StatBar.tsx` | Horizontal strip of key numbers. Dark/light modes. Uses JetBrains Mono for numbers. |
| BentoGrid | `BentoGrid.tsx` | Asymmetric CSS Grid for research areas. Featured item spans 2 columns. |
| BookCard | `BookCard.tsx` | Book display with CSS-rendered mock cover. Supports `featured` variant. |
| ResearchCard | `ResearchCard.tsx` | Card with icon, status indicator, hover scale effect. |
| TimelineVertical | `TimelineVertical.tsx` | Stratigraphy-inspired timeline with gradient line for education/career. |
| SectionDivider | `SectionDivider.tsx` | Geological strata-inspired decorative divider (3 dots). |
| Tag | `Tag.tsx` | Badge component with `default`, `accent`, and `slate` variants. |
| PullQuote | `PullQuote.tsx` | Styled blockquote with accent left border and optional attribution. |
| Breadcrumb | `Breadcrumb.tsx` | Path navigation for nested research pages. |
| ContactForm | `ContactForm.tsx` | Name/email/subject/message form with submission state. |

---

## Animation System

### Scroll Reveal
- **Mechanism:** IntersectionObserver with `threshold: 0.1`
- **Animation:** `fadeUp` — translate from 16px below + fade in, 500ms ease-out
- **Stagger mode:** When `stagger` prop is set, child elements animate with 80ms delay between each (CSS `nth-child` selectors, up to 12 children)
- **Reduced motion:** All animations disabled when `prefers-reduced-motion: reduce` is set

### CSS Keyframes (defined in index.css)
```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes countUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Hover Effects
- **Research cards:** `scale(1.02)` + shadow deepen on hover
- **Navigation links:** Underline animation from left
- **Buttons:** Background color transition (300ms)

### Accessibility
All animations respect the user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Page Templates

### Standard Page
Most pages follow this structure:
1. `HeroPage` — gradient hero with title, subtitle, optional breadcrumbs
2. Content sections wrapped in `ScrollReveal`
3. Alternating `bg-surface` / `bg-white` section backgrounds
4. `SectionDivider` between major content blocks (optional)

### Research Pages
Research sub-pages (`/research/*`) add:
- `Breadcrumb` navigation (Research > Page Name)
- Sponsor logos section
- "Related Research" links at bottom

### Homepage
Unique layout with:
1. Full-viewport hero with impact statement and CTA buttons
2. `StatBar` (dark mode) with key numbers
3. Bio section (2-column: photo + text)
4. `BentoGrid` of research areas
5. Featured `BookCard`
6. Credibility badges (NOAA, UCSC, Fulbright, FGS)
7. Call-to-action section

---

## Responsive Breakpoints

Tailwind CSS v4 default breakpoints:
| Breakpoint | Width | Usage |
|---|---|---|
| `sm` | 640px | Stack to side-by-side for small elements |
| `md` | 768px | Primary layout shift (1-col → 2-col) |
| `lg` | 1024px | Desktop layout (wider grids, larger text) |
| `xl` | 1280px | Max content width containers |

### Key Responsive Patterns
- **Header:** Hamburger menu below `md`, full nav bar at `md+`
- **Hero:** Reduced padding and font sizes on mobile
- **BentoGrid:** 1 column on mobile, asymmetric grid on `md+`
- **Footer:** Stacked on mobile, 4-column grid on `md+`
- **StatBar:** Wrapping flex on mobile, single row on `md+`
- **Content grids:** `grid-cols-1` → `grid-cols-2` or `grid-cols-3` at `md`

---

## Data Architecture

All content is extracted from components into typed data files:

```
src/types/index.ts      — TypeScript interfaces (Book, Publication, ResearchArea, etc.)
src/data/siteConfig.ts  — Site metadata, nav items (with nested children), contact info, 5 hero stats
src/data/books.ts       — 5 books with full metadata
src/data/publications.ts — 3 publication groups (chapters, peer-reviewed, general)
src/data/research.ts    — 4 research areas + geologyAndBeer standalone entry
src/data/credentials.ts — Credentials, education, honors arrays
src/data/projects.ts    — 12 real projects with expandable details
src/data/teaching.ts    — 3 teaching sections (graduate, short courses, workshops) with real course data
src/data/services.ts    — 7 service categories + 11 industries served
src/data/sponsors.ts    — Corporate sponsors, grants, donors, credibility badges
```

This separation means page components are purely presentational — content updates only require editing data files.
