# User-Visible Differences: Legacy Site vs. Current State

**Document Purpose:** This document identifies what a non-technical visitor would notice when comparing the legacy static site (pre-Feb 2026) to the current dual-site setup (legacy + React demo).

**Comparison Date:** February 7, 2026

---

## Overview: Two Versions of the Site

As of February 2026, there are **two parallel versions** of jamesajacobs.net:

1. **Legacy Static Site** — Original GoDaddy exports at main URLs (e.g., https://jamesajacobs.net/books/)
2. **React Demo Site** — Modern redesign at /demo/ (e.g., https://jamesajacobs.net/demo/#/books)

This creates a **confusing user experience** where the same content appears in two different designs, and neither version links to the other.

---

## Major Visual & Design Differences

### Color Scheme

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Primary color** | Deep burgundy `#5F0B35` | Deep basalt green `#2c3e2d` |
| **Accent color** | Medium gray `#444` | Copper ore `#c17f59` |
| **Background** | Pure white `#fff` | Warm sandstone `#f5f0e8` |
| **Link color** | Primary burgundy | Slate blue `#5a7d8a` |
| **Overall feel** | Academic/traditional | Earthy/geological |

**User Impact:** The two sites look like completely different brands. The React demo has a warmer, more organic feel with earth tones, while the legacy site uses a formal burgundy-and-white academic palette.

### Typography

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Body font** | Lora (serif) | Source Sans 3 (sans-serif) |
| **Heading font** | Lora (serif) | Source Serif 4 (serif) |
| **Accent font** | Yellowtail (cursive) | Source Serif 4 (no cursive) |
| **Data/stats font** | Lora | JetBrains Mono (monospace) |

**User Impact:** The legacy site uses an elegant cursive logo font (Yellowtail) that gives it personality. The React demo is more modern and scientific with a clean sans-serif body and monospace stats.

### Page Layout

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Header style** | Sticky white header | Sticky header with gradient |
| **Hero sections** | Basic title + text | Full-viewport gradient heroes |
| **Content width** | 1200px max | 1280px max |
| **Card style** | Flat white boxes | Rounded cards with shadows |
| **Dividers** | Simple lines | Geological "strata" dividers |
| **Animation** | None (static) | Scroll-reveal animations |
| **Spacing** | Compact | Generous (airy) |

**User Impact:** The React demo feels more modern and dynamic with animations, large hero sections, and generous whitespace. The legacy site is denser and more traditional.

---

## Missing Images & Visual Content

### Profile Photos

| Location | Legacy Site | React Demo Site |
|----------|-------------|-----------------|
| **Homepage hero** | Profile photo visible | ✅ Profile photo visible (in bio section) |
| **About page** | Large profile photo | ✅ Large profile photo |
| **Local image file** | ✅ `about/jamesajacobs_profile.webp` | ✅ `/demo/jamesajacobs_profile.webp` |

**User Impact:** ✅ **Both sites display the profile photo prominently.** This is one of the few visual assets successfully migrated to the demo.

### Project & Research Photos

| Content | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Coyote Creek photos** | ✅ Visible (from GoDaddy CDN) | ❌ No photos |
| **High water photos** | ✅ Visible (from GoDaddy CDN) | ❌ No photos |
| **Field work images** | ✅ Multiple photos | ❌ No photos |
| **Book cover images** | ✅ Likely embedded | ❌ No book covers |
| **Research site photos** | ✅ Multiple images | ❌ No photos |

**User Impact:** The legacy site is visually rich with field photos, while the React demo is text-only. This makes it harder to understand the hands-on nature of the work.

**Technical Note:** Legacy images are hosted on GoDaddy's CDN (`img1.wsimg.com`) or embedded as base64 data URIs in the HTML. These URLs work but are external dependencies. The React demo was designed without images, likely as a content migration placeholder.

### Detailed Missing Images Inventory

Based on the legacy site structure, the following image categories are missing from the React demo:

#### Books Page
- ❌ **5 book cover images:**
  1. Environmental Considerations for Hydraulic Fracturing (Wiley, 2019)
  2. Oil Spills and Gas Leaks (McGraw-Hill, 2014)
  3. Acid Mine Drainage (Wiley, 2014)
  4. Chromium(VI) Handbook (CRC Press, 2004)
  5. MTBE: Effects on Soil and Groundwater (CRC Press, 2001)

**Impact:** Book cards are text-only, reducing visual appeal and professional presentation

#### Sea Level Rise Research Page
- ❌ Field photos from Atchison Village (Richmond, CA)
- ❌ Field photos from Tamalpais Valley (Marin County)
- ❌ Sensor equipment photos (Solinst data loggers, SmartCover manhole sensors)
- ❌ Storm drain and sewer monitoring photos
- ❌ Maps of study areas
- ❌ Data visualization graphs/charts

**Impact:** Cannot visualize the real-time monitoring systems or study locations

#### Sewer Systems Research Pages
- ❌ Sewer inspection photos (camera footage)
- ❌ Vapor intrusion diagrams (3-step pathway illustrations)
- ❌ Building assessment photos
- ❌ Smoke testing photos
- ❌ Case study photos (Denmark, Boston examples)
- ❌ Technical diagrams of sewer-to-indoor-air pathways

**Impact:** Complex technical concepts harder to understand without visual aids

#### Wetlands Research Page
- ❌ Constructed wetland photos
- ❌ Wastewater treatment farm concept diagrams
- ❌ Tidal wetlands sampling photos
- ❌ Treatment process flow diagrams
- ❌ Before/after restoration photos

**Impact:** Cannot see the innovative treatment farm concept or wetland work

#### Safe Water Research Page
- ❌ India field work photos (rural wells)
- ❌ Well rehabilitation equipment photos
- ❌ Community water testing photos
- ❌ Before/after water quality photos
- ❌ Maps of project locations

**Impact:** International humanitarian work less tangible without photos

#### Services Page
- ❌ Sewer air testing equipment photos
- ❌ Video camera inspection equipment
- ❌ Field work photos showing services in action
- ❌ Client site photos (anonymized)
- ❌ Workshop/training session photos

**Impact:** Services feel abstract without visual proof of capabilities

#### Geology & Beer Page
- ❌ Historical illustrations (Roman/Greek water systems)
- ❌ Groundwater chemistry diagrams
- ❌ Burton-upon-Trent geology maps
- ❌ Brewery location maps
- ❌ Water treatment process diagrams

**Impact:** Long-form essay less engaging without supporting visuals

#### Teaching Page
- ❌ Classroom photos (India, Germany, Jamaica, UC Berkeley)
- ❌ Student group photos
- ❌ Workshop session photos
- ❌ University campus photos
- ❌ Certificate/credential photos

**Impact:** Teaching experience less credible without evidence of international work

#### Contact Page
- ❌ Office location map
- ❌ Office building photo
- ❌ QR code for vCard (if present in legacy)

**Impact:** Harder to locate physical office

#### Homepage Hero
- ❌ Field work background photos
- ❌ Laboratory/testing equipment photos
- ❌ Landscape/geological formation photos
- ❌ Environmental site photos

**Impact:** Hero relies on gradients instead of authentic work photos

**Total Estimated Missing Images:** 50-70 individual image assets across all pages

### Icon Usage

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Service icons** | Minimal/none | ✅ Emoji icons (⚖️ 🧪 🗺️) |
| **Research area icons** | Minimal/none | ✅ Emoji icons |
| **Navigation icons** | None | None |

**User Impact:** The React demo uses emoji icons to make services and research areas more scannable, which is a visual improvement over the text-heavy legacy site.

---

## Content Organization Changes

### Page Count & Structure

| Version | Total Pages | Structure |
|---------|-------------|-----------|
| **Legacy** | 13 separate pages | Each topic gets its own page |
| **React Demo** | 12 routes | Some pages merged |

### Merged Pages

1. **Books + Publications** → Single "Books & Publications" page
   - **Legacy:** Two separate pages (`/books/` and `/publications/`)
   - **Demo:** Combined at `/demo/#/books`
   - **User Impact:** More efficient, but users looking for publications specifically might be confused

2. **Sewer Overflows + Sewer Air & VI** → Single "Sewer Systems" page
   - **Legacy:** Two pages (`/sewer-overflows/` and `/sewer-air-%26-vi/`)
   - **Demo:** Merged at `/demo/#/research/sewer-systems`
   - **User Impact:** Simplifies navigation, but loses granularity

### New Pages

| Page | Legacy | React Demo |
|------|--------|------------|
| **Research Hub** | ❌ No hub page | ✅ `/demo/#/research` with bento grid |
| **All research areas** | Separate top-level pages | Nested under /research/ |

**User Impact:** The React demo has a cleaner hierarchy with a research hub that shows all areas at once. The legacy site treats each research area as equal to Books, Services, etc.

### Renamed Pages

| Legacy Name | React Demo Name | Reason |
|-------------|-----------------|--------|
| Workshops / Classes | Teaching | More professional terminology |

---

## Navigation Differences

### Menu Structure

**Legacy Site:**
```
Home
About
Books
Publications
Services
Sea Level Rise
Sewer Overflows
Sewer Air & VI
Wetlands
Safe Water
Geology & Beer
Workshops/Classes
Contact
```
**13 top-level items** — very long menu, some research topics buried

**React Demo Site:**
```
Home
About
Research ▼
  ├─ Sea Level Rise
  ├─ Sewer Systems
  ├─ Wetlands
  └─ Safe Water
Books (merged with Publications)
Teaching (renamed from Workshops/Classes)
Services
Geology & Beer
Contact
```
**9 top-level items** — cleaner, with research grouped under dropdown

**User Impact:** React demo is much easier to scan. Legacy site has an overwhelming menu that doesn't indicate relationships between topics.

### URL Structure

| Type | Legacy | React Demo |
|------|--------|------------|
| **Books** | `/books/` | `/demo/#/books` |
| **Sea Level Rise** | `/sea-level-rise/` | `/demo/#/research/sea-level-rise` |
| **URL encoding** | `sewer-air-%26-vi` (messy) | `sewer-systems` (clean) |
| **Routing** | Server-side directories | Client-side hash routing |

**User Impact:** React demo URLs are cleaner and show content hierarchy (`/research/` prefix). Legacy URLs have encoding artifacts from GoDaddy (% symbols).

---

## Content Presentation Differences

### Homepage

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Hero size** | Small banner | Full-viewport gradient hero |
| **CTA buttons** | Single/minimal | Multiple prominent CTAs |
| **Stats display** | Simple list | Horizontal stat bar with large numbers |
| **Visual hierarchy** | Flat | Layered sections with backgrounds |
| **Featured content** | Text blocks | Audience-based "card grid" |

**User Impact:** The React demo homepage is much more visually striking and action-oriented, guiding users to specific services based on their needs.

### About Page

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Profile photo** | ✅ Prominent | ✅ Prominent |
| **Credentials list** | Paragraph format | Structured badges/cards |
| **Project list** | 19 projects in prose | 12 projects as cards |
| **Education** | Inline text | Timeline format |
| **Public service** | Text paragraphs | Structured sections |

**User Impact:** React demo is more scannable with visual structure, but missing the personal touch of a photo.

### Books Page

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Book covers** | ✅ Likely visible | ❌ No covers |
| **Layout** | List format | Card grid with featured book |
| **Publications** | Separate page | Merged below books |
| **Details shown** | Title, publisher, pages | + descriptions, year, authors |

**User Impact:** React demo is better organized but lacks visual appeal without book covers.

### Research Pages

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Hero image** | ✅ Field photos | ❌ Text-only hero |
| **Methodology** | Numbered lists | Structured sections |
| **Case studies** | Inline text | Pull quotes + cards |
| **Sponsors** | Inline mentions | Dedicated "Sponsors" section |
| **Layout** | Dense text | Generous spacing with dividers |

**User Impact:** Legacy site shows the work visually. React demo is easier to read but less immersive.

### Services Page

| Element | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Service count** | 5 services | 7 services |
| **Expert Witness** | One of many | Featured prominently |
| **Audience sections** | None | 6 audience cards with CTAs |
| **Layout** | Simple list | Featured card + grid |

**User Impact:** React demo is more sales-oriented with clear CTAs for different client types. Legacy site is more informational.

---

## Functional Differences

### Contact Form

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Form location** | `/contact/` page | `/demo/#/contact` page |
| **Form backend** | GoDaddy-hosted | ❌ Placeholder only (non-functional) |
| **Fields** | Name, Email, Phone, Message | Name, Email, Subject, Message |
| **Submission** | ✅ Works | ❌ Demo only, no backend |

**User Impact:** **Critical difference** — legacy contact form actually works, React demo form is non-functional.

### Search & Discovery

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Site search** | None | None |
| **Research hub** | None | ✅ Bento grid overview |
| **Related content links** | Minimal | ✅ Cross-linking between pages |

### Analytics & Tracking

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Analytics** | GoDaddy tracking (tccl.min.js) | None documented |
| **Form tracking** | GoDaddy | None |

---

## Performance & Technical Differences (User-Visible)

### Page Load Speed

| Metric | Legacy Site | React Demo Site |
|--------|-------------|-----------------|
| **Initial HTML** | 248KB – 1.8MB (huge!) | ~310KB JS + 37KB CSS |
| **Total page weight** | Very heavy (base64 images) | Lighter (no images) |
| **First paint** | Slow (large HTML) | Fast (optimized) |
| **Animations** | None | Smooth scroll reveals |

**User Impact:** React demo feels snappier and more polished with smooth animations. Legacy pages can feel sluggish, especially the 1.8MB homepage.

### Mobile Experience

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Mobile menu** | GoDaddy hamburger | Custom hamburger |
| **Touch targets** | Varies by page | Consistent, large |
| **Font scaling** | Inconsistent | Responsive scaling |
| **Card layout** | Varies | Consistent grid system |

**User Impact:** React demo is more mobile-friendly with consistent touch targets and better typography scaling.

### Browser Compatibility

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Old browsers** | GoDaddy React 16+ | Requires modern browser |
| **IE11** | Unclear | No support |
| **CSS features** | Inline styles work everywhere | Uses modern CSS Grid/Flexbox |

**User Impact:** Both sites require relatively modern browsers, but React demo is more aggressive in using new features.

---

## Content Gaps & Missing Features

### Missing in React Demo (vs. Legacy)

1. ❌ **Most photos** — ✅ Profile photo present, but missing field work photos, book covers, research photos, diagrams
2. ❌ **Working contact form** — Form is placeholder only
3. ❌ **Some project details** — React demo has 12 projects vs. 19 in legacy (7 fewer)
4. ❌ **Apple touch icons** — No PWA/mobile app icons
5. ❌ **OpenGraph images** — No social media preview images
6. ❌ **Some sidebar content** — Legacy homepage sidebar with "Featured Focus Areas" (Water Resources, VOCs, Basin Analysis, etc.)
7. ❌ **Inline academic citations** — Legacy pages have more citations and references
8. ❌ **Book cover images** — All 5 books displayed as text-only cards
9. ❌ **Research field photos** — No photos from field work, study sites, sensors, equipment

### Missing in Legacy (vs. React Demo)

1. ❌ **Research hub** — No overview page for all research areas
2. ❌ **Audience segmentation** — No clear pathways for different client types
3. ❌ **Featured services** — Expert Witness not highlighted
4. ❌ **Modern UI patterns** — No card grids, no scroll animations
5. ❌ **Consistent navigation hierarchy** — Research topics not grouped
6. ❌ **Mobile optimization** — Varies by page (About is good, others inconsistent)
7. ❌ **Cross-linking** — Pages don't link to related content

---

## SEO & Discoverability Differences

### Page Titles & Meta Descriptions

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Title tags** | Varies by page (some generic) | Consistent format |
| **Meta descriptions** | Present on all pages | Handled by React Helmet |
| **Heading hierarchy** | Inconsistent | Semantic H1→H2→H3 |
| **URL structure** | Flat directory structure | Hierarchical paths |

### Internal Linking

| Feature | Legacy Site | React Demo Site |
|---------|-------------|-----------------|
| **Research cross-links** | Minimal | ✅ Hub page links to all areas |
| **Service→Research links** | None | ✅ Services link to related research |
| **About→Books links** | Minimal | ✅ About page links to books |
| **Breadcrumbs** | None | ✅ On nested pages |

**User Impact:** React demo is better for exploration and discovering related content.

---

## Known Issues & Broken Features

### Legacy Site Issues (Documented)

As documented in [LEGACY_FEATURES.md](LEGACY_FEATURES.md):

1. **Sea Level Rise page** (`/sea-level-rise/`) — Layout issues
2. **Sewer Overflows page** (`/sewer-overflows/`) — Rendering problems
3. **Sewer Air & VI page** (`/sewer-air-%26-vi/`) — URL encoding + display issues
4. **Wetlands page** (`/wetlands/`) — Needs cleanup

**User Impact:** 4 of 13 pages have known issues that affect readability.

### React Demo Issues (Observed)

1. **No images anywhere** — Site feels incomplete
2. **Non-functional contact form** — Users can't actually contact Dr. Jacobs
3. **Hash URLs** — URLs like `/#/about` are less shareable than `/about/`
4. **No external deployment** — Only accessible at `/demo/` subdirectory
5. **Not discoverable** — Legacy site doesn't link to demo, search engines won't index it

**User Impact:** Demo site is impressive but incomplete — can't replace legacy site yet.

---

## User Experience Scenarios

### Scenario 1: Attorney Looking for Expert Witness

**Legacy Site Experience:**
1. Lands on homepage with burgundy design
2. Sees expertise mentioned but no clear CTA
3. Must navigate menu to find "Services"
4. Expert Witness is one of 5 services in a list
5. No clear "next step" or contact path

**React Demo Experience:**
1. Lands on homepage with earth-tone design
2. Immediately sees "Expert Witness & Litigation" as first audience card
3. Clicks "Discuss Your Case" CTA
4. Services page features Expert Witness prominently
5. Multiple CTAs guide to contact page
6. ❌ **Problem:** Contact form doesn't work

**Winner:** React demo has better UX flow, but fails at conversion due to broken form.

### Scenario 2: Community Member Concerned About Vapor Intrusion

**Legacy Site Experience:**
1. Navigates to "Sewer Air & VI" page
2. ❌ **Problem:** Page has URL encoding issues
3. Content is technical and academic
4. No clear "what should I do?" guidance
5. Contact page has working form

**React Demo Experience:**
1. Goes to Research → Sewer Systems (merged page)
2. Sees clear problem statement and solutions
3. "Community Support Services" clearly listed
4. Plain-language explanations
5. ❌ **Problem:** Contact form doesn't work

**Winner:** React demo has better content structure, but legacy site has working contact form.

### Scenario 3: Graduate Student Researching Sea Level Rise

**Legacy Site Experience:**
1. Finds "/sea-level-rise/" page
2. ❌ **Problem:** Page has layout issues
3. ✅ Sees field photos and sensor images
4. Can view technical methodology
5. Gets visual sense of the work

**React Demo Experience:**
1. Finds Research Hub, clicks "Sea Level Rise"
2. ✅ Clean, readable layout
3. ❌ No photos — hard to visualize the work
4. Well-organized methodology sections
5. Sponsor logos clearly shown

**Winner:** Tie — Legacy has images but broken layout; Demo has good layout but no images.

---

## Accessibility Differences

### Legacy Site

- ✅ Semantic HTML on migrated pages
- ❌ Varies by page (GoDaddy exports less accessible)
- ❌ No skip-to-content links
- ❌ Inconsistent heading hierarchy
- ✅ High contrast colors

### React Demo

- ✅ Semantic HTML throughout
- ✅ Consistent heading hierarchy
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Focus indicators on links/buttons

**Winner:** React demo is more accessible.

---

## Print & Share Experience

### Legacy Site

- ✅ Clean URLs (e.g., `/books/`)
- ✅ OpenGraph meta tags for social sharing
- ❌ Print stylesheets not optimized
- ✅ Bookmarkable URLs work reliably

### React Demo

- ❌ Hash URLs (e.g., `/#/books`) less clean
- ❌ No OpenGraph images
- ❌ Single-page app doesn't print well
- ⚠️ Hash URLs work but look less professional

**Winner:** Legacy site is better for sharing and bookmarking.

---

## Summary: What Would a User Notice?

### If Coming From Legacy → React Demo

**Positive Changes:**
- ✅ Much more modern, professional design
- ✅ Better organized navigation
- ✅ Clearer service offerings
- ✅ Smoother animations and interactions
- ✅ Easier to find relevant content
- ✅ Mobile-friendly throughout

**Negative Changes:**
- ❌ No photos of field work, book covers, or research sites (profile photo is present)
- ❌ Contact form doesn't work
- ❌ Different brand colors/fonts
- ❌ Weird `/demo/` URL
- ❌ Missing 7 projects (12 vs. 19 in legacy)
- ❌ Missing sidebar "Featured Focus Areas"

### If Coming From React Demo → Legacy

**Positive Changes:**
- ✅ Photos of field work, research sites, and equipment (demo only has profile photo)
- ✅ Working contact form
- ✅ More project details (19 vs. 12)
- ✅ Clean URLs without `/demo/`
- ✅ All 13 original sections available
- ✅ Featured focus areas sidebar on homepage

**Negative Changes:**
- ❌ Dated design (especially burgundy)
- ❌ Confusing navigation (13 top-level items)
- ❌ Some pages have layout issues
- ❌ Slower page loads
- ❌ Less mobile-friendly (on GoDaddy pages)
- ❌ No clear service hierarchy

---

## Recommendations to Resolve Differences

### Short-Term (Make React Demo Production-Ready)

1. **Add images (CRITICAL):**
   - ✅ Profile photo (already present)
   - 5 book cover images (Books page)
   - Field work photos (4 research pages)
   - Equipment photos (Services, Research pages)
   - Teaching photos (Teaching page)
   - Diagrams and infographics (Research pages)
   - Hero background images (Homepage)
   **Priority:** Book covers first, then research photos

2. **Connect contact form (CRITICAL):**
   - Integrate with email service (Formspree, Netlify Forms, SendGrid, etc.)
   - Test submission workflow
   - Add confirmation message
   - Add error handling
   **Priority:** HIGH — site cannot function without working contact form

3. **Add social meta tags:**
   - OpenGraph images for each page
   - Twitter cards
   - Proper titles/descriptions
   - Favicon and apple-touch-icons

4. **Fix URL structure:**
   - Switch from HashRouter to BrowserRouter (requires server config)
   - Move from `/demo/` to root
   - Set up 301 redirects for legacy URLs

5. **Preserve SEO:**
   - Add redirects from old URLs to new
   - Maintain URL structure where possible
   - Submit new sitemap to Google
   - Add canonical tags

6. **Add missing content:**
   - 7 missing projects (expand from 12 to 19)
   - Restore sidebar "Featured Focus Areas"
   - Add missing academic citations
   - Include CV PDF for download

7. **Test all functionality:**
   - Test all 12 routes
   - Test mobile menu on all devices
   - Test form validation
   - Test all CTAs and links
   - Verify no broken links

### Long-Term (Unified Site)

1. **Migrate completely to React demo** — Replace legacy site entirely
2. **Archive legacy pages** — Keep at `/legacy/` for reference
3. **Update documentation** — Reflect single unified site
4. **Monitor broken links** — Set up redirects for all old URLs
5. **Add missing content** — Port remaining project details, citations

---

## Conclusion

The current dual-site situation creates **user confusion** and **brand inconsistency**. Both sites have strengths:

- **Legacy:** Working forms, photos, comprehensive content
- **React Demo:** Modern design, better UX, cleaner navigation

The React demo is **80% ready** to replace the legacy site, but needs:
1. Images added
2. Contact form connected
3. URL structure finalized
4. Deployment to root path

Until then, users encounter **two different versions** of the same professional, which undermines credibility.

---

## Quick Reference: By the Numbers

### Content Comparison

| Metric | Legacy Site | React Demo | Difference |
|--------|-------------|------------|------------|
| **Total pages** | 13 | 12 | 1 fewer (merged pages) |
| **Research pages** | 5 separate | 4 + hub | Reorganized under `/research/` |
| **Selected projects** | 19 | 12 | 7 fewer (-37%) |
| **Books listed** | 5 | 5 | Same |
| **Services listed** | 5 | 7 | 2 more (+40%) |
| **Total images** | 50-70 estimated | 1 | 49-69 missing (-98%) |
| **Working forms** | 1 (functional) | 1 (placeholder) | Contact form broken |
| **Homepage file size** | 1.8 MB | ~100 KB | 94% smaller |
| **Navigation items** | 13 top-level | 9 top-level | 4 fewer (better hierarchy) |

### Page Status Summary

| Status | Count | Pages |
|--------|-------|-------|
| ✅ **Redesigned (complete)** | 7 | Home, About, Services, Geology & Beer, Teaching, Books, Research Hub |
| ⚠️ **Redesigned (missing images)** | 4 | Sea Level Rise, Sewer Systems, Wetlands, Safe Water |
| ⚠️ **Partial (merged)** | 2 | Books & Publications, Sewer Systems |
| ❌ **Critical issue** | 1 | Contact (non-functional form) |

### Missing Asset Inventory

| Asset Type | Estimated Count | Priority |
|------------|----------------|----------|
| Book cover images | 5 | **HIGH** |
| Research field photos | 20-30 | **HIGH** |
| Equipment/sensor photos | 10-15 | Medium |
| Teaching/workshop photos | 5-10 | Medium |
| Diagrams/infographics | 10-15 | Medium |
| Maps & charts | 5-10 | Low |
| Logos & badges | 5-10 | Low |
| Hero background images | 2-5 | Low |

### Functionality Status

| Feature | Legacy | Demo | Notes |
|---------|--------|------|-------|
| Contact form | ✅ Works | ❌ Broken | **CRITICAL** |
| Navigation menu | ✅ Works | ✅ Works | Demo is better organized |
| Mobile menu | ⚠️ Varies | ✅ Works | Demo is more consistent |
| Search | ❌ None | ❌ None | Not implemented in either |
| Print/PDF | ✅ Good | ❌ Poor | SPAs don't print well |
| Bookmarking | ✅ Good | ⚠️ Hash URLs | Hash URLs less clean |
| Social sharing | ⚠️ Basic | ❌ Missing | No OG images in demo |

---

**Document Version:** 1.1
**Date:** February 7, 2026
**Corrections:** Fixed profile photo status (present in demo, not missing)
**Next Review:** When React demo replaces legacy site
