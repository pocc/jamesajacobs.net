# Tech Stack

## Core
| Technology | Version | Purpose |
|---|---|---|
| HTML5 | — | Page structure and content |
| CSS3 (inline) | — | Styling, embedded in `<style>` tags for zero-request rendering |
| Cloudflare Pages | — | Static site hosting with global CDN edge delivery |
| Git / GitHub | — | Version control and CI/CD trigger for deployments |

## Fonts & Typography
| Technology | Purpose |
|---|---|
| Google Fonts (Lora) | Primary body/serif typeface |
| Google Fonts (Yellowtail) | Accent/signature typeface |
| `font-display: optional` | Prevents layout shift — text renders with fallback if font hasn't loaded |

## Design Approach
- **No CSS framework** (no Tailwind, Bootstrap, etc.) — styles are hand-written and inlined per page.
- **CSS Custom Properties** (`--primary-color`, `--text-color`, etc.) for theming consistency.
- **Responsive design** via media queries and viewport-relative units.
- **No JavaScript framework** — no React, Vue, etc. Pages are pure HTML/CSS.

## Build & Tooling
| Tool | Purpose |
|---|---|
| None | There is no build step. Files are served as-is. |
| [monolith](https://github.com/Y2Z/monolith) | Used historically to export/archive pages from GoDaddy |

## Testing
<!-- TODO: No testing infrastructure is currently in place. -->

## Legacy Dependencies (GoDaddy Exports)
The following are bundled in `index_files/` directories on non-migrated pages and are **not actively maintained**:
- GoDaddy UX Framework (`UX.4.37.7.js`) — React-based page rendering
- React (vendored, via GoDaddy's bundle)
- GoDaddy analytics (`tccl.min.js`, `tccl-tti.min.js`)
- Various GoDaddy component modules (`bs-*.js`)

These will be removed as pages are migrated to clean HTML/CSS.
