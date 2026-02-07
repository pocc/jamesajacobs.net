# Contributing

## Overview
This is a static HTML website for James A. Jacobs, deployed to Cloudflare Pages. There is no build step — you edit HTML/CSS files directly.

## Prerequisites
- **Git** — for version control
- A **text editor** or IDE
- A **web browser** — for local preview
- (Optional) A local HTTP server for testing (e.g., `python3 -m http.server` or VS Code Live Server)

## Setup

```bash
git clone https://github.com/pocc/jamesajacobs.net.git
cd jamesajacobs.net
```

No `npm install` or other dependency installation is needed.

## Local Development

Open any `index.html` file directly in a browser, or start a local server:

```bash
# Python
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Project Structure

Each section of the site lives in its own directory with an `index.html`:

```
about/index.html
books/index.html
contact/index.html
geology-and-beer/index.html
publications/index.html
safe-water/index.html
sea-level-rise/index.html
services/index.html
sewer-air-%26-vi/index.html
sewer-overflows/index.html
wetlands/index.html
workshops-%2F-classes/index.html
```

## Conventions

### Branching
- **Trunk-based development** — work directly on `master` or use short-lived feature branches.
- Pushing to `master` triggers an automatic Cloudflare Pages deployment.

### Page Migration
The site is being migrated from GoDaddy exports to clean HTML/CSS. When migrating a page:

1. Rename the original GoDaddy export to `old_index.html` for reference.
2. Create a new `index.html` in the section directory with clean, semantic HTML.
3. Use inline `<style>` tags (no external CSS files) for simplicity and performance.
4. Follow the design patterns established in `about/index.html`:
   - Use CSS custom properties for colors (`--primary-color`, `--text-color`, etc.)
   - Use Google Fonts: **Lora** (body) and **Yellowtail** (accent)
   - Ensure responsive design with media queries
5. Keep the old `index_files/` directory until the migration is verified in production.

### Code Style
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Consistent indentation (4 spaces)
- Descriptive `<meta>` tags for SEO (`description`, `author`, `title`)
- Image optimization: prefer `.webp` format

### Pages Needing Work
See `README.md` for a list of pages that still need migration or fixes.

## Deployment
Deployment is automatic via Cloudflare Pages. Push to `master` and the site updates within minutes.
