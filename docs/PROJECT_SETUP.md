# Project Setup & Architecture

## Overview

The Union of Relative Strangers is a family archive website for descendants of John Taylor Johnston (1820-1893), first President of the Metropolitan Museum of Art.

**Created**: February 2025  
**Repository**: https://github.com/pocc/jtj  
**Live Site**: https://relatives.ross.gg/  
**API**: https://jtj.pocc.workers.dev (Worker endpoint)

---

## Tech Stack

### Frontend (React SPA)
- **React 19** - Latest React with improved concurrent features
- **TypeScript** - Full type safety
- **Vite 7** - Ultra-fast dev server and build tool
- **Tailwind CSS v4** - Utility-first CSS with `@theme` blocks
- **React Router v7** - Client-side routing

### Testing
- **Vitest 3** - Fast test runner with native ESM support
- **React Testing Library** - User-centric component testing
- **@testing-library/jest-dom** - Custom matchers
- **MSW 2** - Mock Service Worker for API mocking
- **Coverage**: V8 provider with HTML reports

### Backend (Future)
- **Cloudflare Workers** - Serverless API endpoints
- **Cloudflare D1** - SQLite database for metadata
- **Cloudflare R2** - Object storage for photos/documents
- **Clerk** - Authentication and user management

### Deployment
- **Frontend**: Cloudflare Pages (automatic from GitHub)
- **Worker**: Cloudflare Workers (manual via `npm run worker:deploy`)
- **Domain**: https://relatives.ross.gg/

---

## Project Structure

```
jtj/
├── docs/                          # Documentation
│   ├── PROJECT_SETUP.md          # This file
│   ├── FAMILY_TREE.md            # Complete genealogy
│   ├── TESTING_GUIDE.md          # Testing documentation
│   └── DEPLOYMENT.md             # Deployment guide
├── src/
│   ├── components/               # React components
│   │   ├── Layout.tsx           # Header, nav, footer
│   │   ├── Button.tsx           # Reusable button component
│   │   └── *.test.tsx           # Component tests
│   ├── pages/                   # Page components
│   │   ├── Home.tsx
│   │   ├── Photos.tsx
│   │   ├── Stories.tsx
│   │   ├── Timeline.tsx
│   │   ├── Branches.tsx
│   │   └── About.tsx
│   ├── data/                    # Data files
│   │   ├── events.ts            # Family gathering timeline
│   │   ├── branches.ts          # Family branch definitions
│   │   └── familyTree.json      # Complete family tree
│   ├── lib/                     # Utilities
│   │   └── config.ts            # Site configuration
│   ├── types/                   # TypeScript types
│   │   └── index.ts             # Shared interfaces
│   ├── test/                    # Test infrastructure
│   │   ├── setupTests.ts        # Global test setup
│   │   ├── utils.tsx            # Test helpers
│   │   └── mocks/               # MSW handlers
│   ├── workers/                 # Cloudflare Workers
│   │   └── index.ts             # API worker (stub)
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles (Tailwind)
├── public/                       # Static assets
├── dist/                         # Build output (not in git)
├── package.json                  # Dependencies
├── vite.config.ts               # Vite configuration
├── vitest.config.ts             # Vitest configuration
├── tsconfig.json                # TypeScript configuration
├── wrangler.toml                # Cloudflare Workers config
└── README.md                     # Project README

```

---

## Installation

```bash
# Clone repository
git clone https://github.com/pocc/jtj.git
cd jtj

# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:5173

# Run tests
npm test

# Build for production
npm run build
```

---

## Key Features Implemented

### ✅ Phase 1: Foundation (Complete)

**Pages:**
- Home - Welcome page with mission statement
- Photos - Placeholder for future gallery
- Stories - Placeholder for future stories
- Timeline - Event history (5 gatherings documented)
- Branches - Family branch information
- About - Project information and team

**Infrastructure:**
- Responsive layout with Tailwind CSS
- React Router navigation
- TypeScript type safety
- Comprehensive test suite (62 tests passing)
- Family branch organization system
- Event timeline data

**Data:**
- Complete family tree (300+ descendants)
- 6 primary branches
- 5 historical events
- Branch colors and descriptions

**Testing:**
- Component tests (Button, Layout)
- Page tests (Timeline)
- MSW API mocking setup
- Tailwind class verification
- Accessibility testing
- Snapshot testing

---

## Family Branches

The site organizes family members into 5 branches:

1. **John Taylor Johnston** (Purple `#8B3F8B`)
   - Direct line - Met founder

2. **Harriet Johnston Bowdoin** (Gold `#D4AF37`)
   - Descendants through Robert Bowdoin

3. **Emily Johnston de Forest** (Navy `#1B365D`)
   - 150+ descendants
   - Includes Whitman, Pierson, Stewart families
   - **Ross Bingham Jacobs** (Developer) is in this branch

4. **John Herbert Johnston** (Burgundy `#800020`)
   - Descendants through Emily Noel Johnston

5. **Other Branches** (Gray `#6B7280`)
   - Mali families (Eva → Henry Julian, Frances → Pierre)
   - Coe family (Colles → Eva Johnston)
   - **Taylor Mali** (Organizer) and **Sarah Elder** (UX) are here

---

## Design System

### Colors (Heritage Theme)

```css
--color-heritage-purple: #8B3F8B;   /* Primary brand */
--color-heritage-gold: #D4AF37;     /* Accents */
--color-heritage-navy: #1B365D;     /* Text/headers */
--color-heritage-cream: #F5F5DC;    /* Background */
--color-heritage-burgundy: #800020; /* Secondary */
```

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Fallbacks**: System fonts

### Components

All components use Tailwind CSS v4 with:
- Responsive breakpoints (sm, md, lg)
- Consistent spacing scale
- Accessible focus states
- Mobile-first approach

---

## Project Team

- **Ross Bingham Jacobs** (1989) - Lead Developer
- **Taylor McDowell Mali** - Project Organizer, Podcast Host
- **Sarah Elder** (1947) - UX Advisor (Senior User Advocate)
- **Mike Cohn** (1985) - Security & Protocol Consultant

---

## Historical Context

### John Taylor Johnston (1820-1893)

- First President of the Metropolitan Museum of Art (1870-1889)
- President of the Central Railroad of New Jersey
- Renowned art collector and philanthropist
- Married Frances Colles
- Six children established prominent family lines

### Family Gatherings

1. **June 14, 2022** - First Zoom gathering (7 PM ET)
2. **April 27, 2023** - Union of Relative Strangers (online)
3. **June 28, 2024** - The Marble House Meeting at The Met
4. **October 21, 2024** - Mausoleum Whiskey Tasting
5. **October 22, 2024** - Cracking the Trunk

---

## External Resources

- **Podcast**: "Relative Strangers" by Taylor Mali
  - Episode 14: "The Aftermath" (June 2024 meeting)
- **Family Chart**: https://taylormali.com/product/family-chart-paper/
  - Password: `FlagDay`
- **Photo Upload**: https://www.dropbox.com/request/78sdo6al1phwgLH9dVbK
- **Contact**: Taylor Mali (tmali@me.com, 917-743-6911)

---

## Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Testing
npm test                # Run tests (watch mode)
npm run test:run        # Run tests once
npm run test:ui         # Open Vitest UI
npm run test:coverage   # Generate coverage report

# Workers (Future API)
npm run worker:dev      # Run worker locally
npm run worker:deploy   # Deploy worker to Cloudflare
```

---

## Environment Setup

### Required Tools
- Node.js 18+
- npm 10+
- Git

### Optional Tools
- VS Code (recommended)
- Vitest extension for VS Code
- Tailwind CSS IntelliSense extension

### Environment Variables

For future Clerk authentication:

```env
# .env (not committed)
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

For Workers:

```env
# .dev.vars (not committed)
CLERK_SECRET_KEY=sk_test_...
```

---

## Next Steps

See [NEXT_STEPS.md](../NEXT_STEPS.md) for detailed implementation roadmap:

- **Phase 2**: Clerk authentication
- **Phase 3**: Photo gallery with R2 storage
- **Phase 4**: Stories and rich text editor
- **Phase 5**: Enhanced features (tree visualization, admin panel)

---

**Last Updated**: February 2025
