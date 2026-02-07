# Tech Stack

## Static Site (Main)

### Core
| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Page structure and content |
| CSS3 (inline) | — | Styling, embedded in `<style>` tags for zero-request rendering |
| Cloudflare Pages | — | Static site hosting with global CDN edge delivery |
| Git / GitHub | — | Version control and CI/CD trigger for deployments |

### Fonts & Typography
| Technology | Purpose |
|---|---|
| Google Fonts (Lora) | Primary body/serif typeface |
| Google Fonts (Yellowtail) | Accent/signature typeface |
| `font-display: optional` | Prevents layout shift — text renders with fallback if font hasn't loaded |

### Design Approach
- **No CSS framework** (no Tailwind, Bootstrap, etc.) — styles are hand-written and inlined per page.
- **CSS Custom Properties** (`--primary-color`, `--text-color`, etc.) for theming consistency.
- **Responsive design** via media queries and viewport-relative units.
- **No JavaScript framework** — no React, Vue, etc. Pages are pure HTML/CSS.

### Build & Tooling
| Tool | Purpose |
|---|---|
| None | There is no build step. Files are served as-is. |
| [monolith](https://github.com/Y2Z/monolith) | Used historically to export/archive pages from GoDaddy |

### Legacy Dependencies (GoDaddy Exports)
The following are bundled in `index_files/` directories on non-migrated pages and are **not actively maintained**:
- GoDaddy UX Framework (`UX.4.37.7.js`) — React-based page rendering
- React (vendored, via GoDaddy's bundle)
- GoDaddy analytics (`tccl.min.js`, `tccl-tti.min.js`)
- Various GoDaddy component modules (`bs-*.js`)

These will be removed as pages are migrated to clean HTML/CSS.

---

## Demo Site (React SPA)

### Core
| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI component framework |
| TypeScript | 5.x | Type-safe JavaScript |
| Vite | 7 | Build tool and dev server |
| Tailwind CSS | 4 | Utility-first CSS framework with custom theme tokens |
| React Router | 7 | Client-side routing (HashRouter for static hosting) |

### Fonts (Google Fonts)
| Font | Weight Range | Role |
|---|---|---|
| Source Serif 4 | 400–700 | Headings — editorial serif, readable at all sizes |
| Source Sans 3 | 300–700 | Body text — natural companion to Source Serif |
| JetBrains Mono | 400–600 | Data, stats, credentials — scientific precision |

### Design System
See `DESIGN_SYSTEM.md` for full details on colors, typography tokens, component library, and animation system.

### Build & Deploy
| Command | Purpose |
|---|---|
| `cd demo-site && npm run dev` | Start Vite dev server (localhost:5173) |
| `cd demo-site && npm run build` | Build to `../demo/` directory |
| `cd demo-site && npx tsc --noEmit` | TypeScript type checking only |
| `git push origin master` | Deploys both static site and demo to Cloudflare Pages |

### Build Output
- Output directory: `demo/` (committed to repo, served at `/demo/`)
- Bundle size: ~310KB JS + ~37KB CSS (gzipped: ~92KB JS + ~7KB CSS)
- 76 modules bundled via Vite/Rollup
- Uses HashRouter — URLs are `https://jamesajacobs.net/demo/#/route`

### Key Dependencies
| Package | Purpose |
|---|---|
| `react` / `react-dom` | UI rendering |
| `react-router-dom` | Client-side routing |
| `tailwindcss` | Utility CSS framework |
| `@tailwindcss/vite` | Tailwind integration with Vite |
| `typescript` | Type checking |
| `@types/react` / `@types/react-dom` | React type definitions |

### Testing
No automated testing infrastructure is currently in place. Manual verification:
- Local static preview: `python3 -m http.server 8000` from project root, visit `http://localhost:8000/demo/`
- Check all 12 routes render correctly
- Test responsive at 375px, 768px, 1024px, 1440px
- Verify no console errors
