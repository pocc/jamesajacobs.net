# Claude Code Project Guidelines

## Role & Persona
- **Role:** Web developer maintaining a static HTML/CSS personal website.
- **Tone:** Technical, concise, and pragmatic.
- **Priorities:** Clean semantic HTML, fast page loads, accessibility, and faithful migration from legacy GoDaddy exports.

## Project Context & Knowledge Base
> Check these files before answering complex queries.
- **Architecture:** `docs/ARCHITECTURE.md` (Site structure, hosting, migration status).
- **Tech Stack:** `docs/TECH_STACK.md` (Technologies and design decisions).
- **Onboarding:** `CONTRIBUTING.md` (Setup and conventions).
- **Known Issues:** `README.md` (Pages that still need work).

## Tech Stack
- **Type:** Static HTML/CSS website. **No build step, no JavaScript framework, no bundler.**
- **Hosting:** Cloudflare Pages (automatic deploy on push to `master`).
- **Fonts:** Google Fonts — Lora (body), Yellowtail (accent).
- **Styling:** Inline `<style>` tags with CSS custom properties. No CSS framework.
- **Source:** https://github.com/pocc/jamesajacobs.net

## Project Structure
Each section is a directory with an `index.html`:
```
/index.html              # Homepage (legacy GoDaddy export)
/about/index.html        # Migrated to clean HTML/CSS
/books/index.html        # Legacy export
/contact/index.html      # Legacy export
/services/index.html     # Legacy export
/publications/index.html # Legacy export
...
```

## Commands
- **Local dev:** `python3 -m http.server 8000` (or any static file server)
- **Deploy:** `git push origin master` (Cloudflare Pages auto-deploys)
- **No npm, no build, no test commands** — this is a pure static site.

## Coding Standards & Style

### HTML
- Use semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`).
- Include `<meta>` tags for SEO: `description`, `author`, `title`.
- Use `lang="en"` on `<html>`.
- Indent with 4 spaces.

### CSS
- Inline styles in `<style>` tags within each page's `<head>`.
- Use CSS custom properties for theming:
  ```css
  :root {
      --primary-color: #5F0B35;
      --text-color: #333;
      --bg-color: #fff;
      --accent-color: #444;
  }
  ```
- Responsive design via media queries.
- Use `font-display: optional` to prevent layout shift from web fonts.

### Images
- Prefer `.webp` format for photographs.
- Use descriptive `alt` attributes.

### What NOT to do
- Do NOT add JavaScript frameworks (React, Vue, etc.).
- Do NOT add CSS frameworks (Tailwind, Bootstrap, etc.).
- Do NOT add a build step (Vite, Webpack, etc.).
- Do NOT add `package.json` or `node_modules`.
- Do NOT reference `process.env` or Node.js APIs — there is no server-side code.

## Workflow Rules
1. **Reference page:** When migrating a legacy page, use `about/index.html` as the design reference for fonts, colors, and layout patterns.
2. **Preserve originals:** Rename the old GoDaddy export to `old_index.html` before replacing with clean HTML.
3. **Keep `index_files/`:** Don't delete legacy asset directories until migration is verified in production.
4. **Test locally:** Preview changes in a browser before pushing.
5. **Docs update:** If site structure changes, update `docs/ARCHITECTURE.md`.

- Do not include 'Co-Authored-By' trailers or any AI attribution in git commit messages.
