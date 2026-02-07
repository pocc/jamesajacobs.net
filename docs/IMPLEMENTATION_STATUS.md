# Implementation Status — React Demo Site

This document tracks the implementation status of features identified in [DIFFERENCES.md](DIFFERENCES.md) and [CANNOT_MIGRATE.md](CANNOT_MIGRATE.md).

**Last Updated:** February 7, 2026

---

## Summary

| Category | Status | Completed | Pending | Cannot Auto-Migrate |
|----------|--------|-----------|---------|---------------------|
| **Core Functionality** | 🟢 Complete | 2/2 | 0/2 | 0/2 |
| **Content** | 🟢 Complete | 2/2 | 0/2 | 0/2 |
| **Images & Media** | 🔴 Blocked | 0/7 | 0/7 | 7/7 |
| **SEO & Meta** | 🟡 Partial | 0/3 | 3/3 | 0/3 |
| **Polish & Extras** | 🟡 Partial | 0/4 | 4/4 | 0/4 |

**Overall Progress:** 4/18 items complete (22%)

---

## ✅ Completed Features

### 1. Working Contact Form
**Status:** ✅ Complete
**File:** `demo-site/src/components/ContactForm.tsx`
**Implementation:**
- Integrated with Formspree (endpoint: `https://formspree.io/f/xdkovedj`)
- Added form validation
- Added loading/submitting states
- Added error handling with fallback to email
- Added success message
- Form fields: name, email, inquiry type, subject, message

**Testing Required:**
- Verify Formspree endpoint is configured for `jjacobs@clearwatergroup.com`
- Test form submission end-to-end
- Test error states (network failure, invalid email)
- Test spam protection

---

### 2. Featured Focus Areas (Homepage)
**Status:** ✅ Complete
**File:** `demo-site/src/pages/Home.tsx` (lines 204-240)
**Implementation:**
- Added section showcasing 7 focus areas from CONTENT.md:
  - Water Resources
  - VOCs in Sewer-Plumbing
  - Resource Evaluations (Water, Oil & Gas, Coal, Renewable Energy)
  - Basin Analysis
  - Water Supply Assessments
  - Stormwater Recovery and Flood Control
  - Wastewater Recycling
- Styled with checkmark icons
- Responsive layout

---

### 3. Selected Projects (About Page)
**Status:** ✅ Complete (20 projects, includes 1 duplicate)
**File:** `demo-site/src/data/projects.ts`
**Implementation:**
- All 19 unique projects from legacy site are present
- Projects include title, summary, and detailed descriptions
- Expandable accordion UI on About page
- One duplicate: "Regulatory Guidelines for Water Treatment — Jamaica" (items 14 and 19)

**Projects Included:**
1. Oil and Gas Field Environmental Projects
2. Site Remediation and Closure
3. Bioremediation of Contaminated Soils
4. Bioremediation of Diesel and Gasoline Contaminated Aquifer
5. In-Situ Chemical Oxidation of Diesel Free-Product
6. Phase II Subsurface Investigations
7. Soil Remediation — San Francisco
8. Underground Storage Tank Removal and Soil Remediation
9. Water Procurement
10. Aquifer Mapping and PRP Study — Federal Superfund Site
11. Pipeline Improvement Projects — Tamalpais CSD
12. In-Situ Chemical Geofixation of Chromium (VI)
13. In-Situ Perchlorate Pilot Study — Hollister, CA
14. Water Treatment Planning & Rate Negotiation
15. Regulatory Guidelines for Water Treatment — Jamaica
16. Wetlands Sampling Project
17. Subsurface Drilling Programs
18. Geological Feasibility Study — King City, CA
19. Environmental Impact Report — San Francisco Bay Area
20. Regulatory Guidelines for Water Treatment — Jamaica (duplicate)

**Action Needed:** Remove duplicate Jamaica project (keep one, delete the other)

---

### 4. Documentation
**Status:** ✅ Complete
**Files Created:**
- `docs/CANNOT_MIGRATE.md` — Comprehensive list of features that cannot be automatically migrated (50-70 images, GoDaddy services, etc.)
- `docs/IMPLEMENTATION_STATUS.md` — This file

---

## 🟡 Pending Implementation

### 5. OpenGraph & Twitter Card Meta Tags
**Status:** 🟡 Not Started
**Priority:** Medium
**Files to Create/Modify:**
- `demo-site/index.html` — Add meta tags
- `demo-site/public/og-image.jpg` — Create social share image (1200×630px)

**Required Meta Tags:**
```html
<!-- OpenGraph -->
<meta property="og:title" content="James A. Jacobs, Ph.D. — Geologist / Environmental Scientist">
<meta property="og:description" content="Expert witness, environmental consulting, and forensic geology. 40+ years experience, 1,000+ projects, 23 court cases.">
<meta property="og:image" content="/demo/og-image.jpg">
<meta property="og:url" content="https://jamesajacobs.net/demo/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="James A. Jacobs, Ph.D.">
<meta name="twitter:description" content="Expert witness, environmental consulting, forensic geology">
<meta name="twitter:image" content="/demo/og-image.jpg">
```

**Effort:** 2-3 hours (design OG image + implement tags)

---

### 6. Apple Touch Icons & Favicon
**Status:** 🟡 Not Started
**Priority:** Low
**Files to Create:**
- `demo-site/public/favicon.ico`
- `demo-site/public/apple-touch-icon.png` (180×180px)
- `demo-site/public/manifest.json` — PWA manifest

**Tool:** https://realfavicongenerator.net/

**Effort:** 1-2 hours

---

### 7. URL Redirects for Merged Pages
**Status:** 🟡 Not Started
**Priority:** High (when deploying to root)
**File to Create:** `demo-site/public/_redirects`

**Required Redirects:**
```
/publications/           /#/books                        301
/sewer-overflows/        /#/research/sewer-systems       301
/sewer-air-%26-vi/       /#/research/sewer-systems       301
/workshops-%2F-classes/  /#/teaching                     301
```

**Note:** These redirects are only needed when demo replaces legacy site at root. Currently, demo is at `/demo/` so legacy URLs still work.

**Effort:** 1 hour (create file, test redirects)

---

### 8. Google Analytics or Cloudflare Analytics
**Status:** 🟡 Not Started
**Priority:** Medium
**Implementation:**

**Option 1: Google Analytics 4**
```html
<!-- Add to demo-site/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Option 2: Cloudflare Web Analytics** (Recommended)
- Enable in Cloudflare Pages dashboard
- Privacy-focused, no cookies
- Lightweight script

**Effort:** 30 minutes

---

## 🔴 Cannot Auto-Migrate (Manual Work Required)

### 9. Book Cover Images (5 images)
**Status:** 🔴 Requires External Assets
**Priority:** HIGH
**Files Needed:**
- `demo-site/public/images/books/hydraulic-fracturing.jpg`
- `demo-site/public/images/books/oil-spills-gas-leaks.jpg`
- `demo-site/public/images/books/acid-mine-drainage.jpg`
- `demo-site/public/images/books/chromium-vi-handbook.jpg`
- `demo-site/public/images/books/mtbe.jpg`

**Source:** Publisher websites or Amazon
- Wiley: Environmental Considerations for Hydraulic Fracturing (2019)
- McGraw-Hill: Oil Spills and Gas Leaks (2014)
- Wiley: Acid Mine Drainage (2014)
- CRC Press: Chromium(VI) Handbook (2004)
- CRC Press: MTBE (2001)

**After obtaining images:**
- Add to `demo-site/public/images/books/`
- Update `demo-site/src/data/books.ts` with `coverImage` property
- Update `demo-site/src/components/BookCard.tsx` to use real images instead of CSS placeholders

**Effort:** 2-4 hours (find images, download, optimize, integrate)

---

### 10. Research Field Work Photos (20-30 images)
**Status:** 🔴 Requires Dr. Jacobs' Photo Archives
**Priority:** HIGH
**Categories Needed:**

#### Sea Level Rise Research
- Atchison Village (Richmond, CA) study site photos
- Tamalpais Valley (Marin County) study site photos
- Solinst data logger equipment photos
- SmartCover manhole sensor photos
- Storm drain monitoring photos
- Study area maps

#### Sewer Systems Research
- Sewer inspection camera footage screenshots
- Vapor intrusion pathway diagrams
- Smoke testing photos
- Denmark/Boston case study photos

#### Wetlands Research
- Constructed wetland photos
- Tidal wetlands sampling photos
- Treatment farm concept diagrams

#### Safe Water Research
- India rural well photos
- Well rehabilitation equipment photos
- Community water testing photos

**Source:** Dr. Jacobs' personal project archives

**Effort:** 6-10 hours (curate photos, edit, optimize, organize by topic, integrate into React components)

---

### 11. Equipment & Services Photos (10-15 images)
**Status:** 🔴 Requires Dr. Jacobs' Photo Archives
**Priority:** Medium
**Categories:**
- Sewer air testing equipment
- Video camera inspection tools
- Laboratory equipment
- Field sampling gear
- Workshop/classroom photos (India, Germany, Jamaica, UC Berkeley)

**Effort:** 3-5 hours

---

### 12. Diagrams & Infographics (10-15 images)
**Status:** 🔴 Requires Creation or Sourcing
**Priority:** Medium
**Categories:**
- Vapor intrusion 3-step pathway diagram
- Wastewater treatment farm concept illustration
- Groundwater chemistry diagrams (Geology & Beer page)
- Historical illustrations (Roman/Greek water systems)
- Maps (Burton-upon-Trent, study areas)
- Data visualization charts

**Source:** Either extract from published papers or create new diagrams

**Effort:** 8-12 hours (graphic design work)

---

### 13. Hero Background Images (2-5 images)
**Status:** 🔴 Requires Dr. Jacobs' Photo Archives
**Priority:** Low
**Description:** High-quality field work photos for homepage hero background (currently uses gradient)

**Options:**
- Geological formations
- Field equipment in use
- Coastal study sites
- Laboratory/testing scenes

**Effort:** 2-3 hours (select photos, optimize for web, integrate as background)

---

### 14. University & Sponsor Logos (5-10 images)
**Status:** 🔴 Requires Logo Files
**Priority:** Low
**Logos Needed:**
- UCSC (UC Santa Cruz)
- NOAA California Sea Grant
- Solinst Canada Ltd.
- SmartCover Systems
- NGWA (National Ground Water Association)
- GSL (Geological Society of London)
- AIPG (American Institute of Professional Geologists)
- University of West Indies
- Technical University of Munich
- SRTM University (India)

**Source:** University/organization websites (usually in media/press kits)

**Effort:** 2-3 hours (download, convert to SVG if needed, optimize)

---

### 15. Contact Page Map
**Status:** 🔴 Optional Enhancement
**Priority:** Low
**Implementation:** Google Maps embed for office location (229 Tewksbury Avenue, Point Richmond, CA 94801)

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>
```

**Effort:** 30 minutes

---

## 📊 Progress by Category

### Core Functionality (2/2 Complete)
- ✅ Contact form with Formspree backend
- ✅ Navigation menu (already working)

### Content (2/2 Complete)
- ✅ Featured Focus Areas on homepage
- ✅ Selected Projects (19 unique projects, 1 duplicate to remove)

### Images & Media (0/7 Complete, all require external assets)
- 🔴 Book cover images (5)
- 🔴 Research field work photos (20-30)
- 🔴 Equipment photos (10-15)
- 🔴 Diagrams & infographics (10-15)
- 🔴 Hero background images (2-5)
- 🔴 University & sponsor logos (5-10)
- 🔴 Contact page map (optional)

**Total Images Needed:** 50-70 individual assets

### SEO & Meta (0/3 Complete)
- 🟡 OpenGraph tags (pending)
- 🟡 Twitter Card tags (pending)
- 🟡 Apple touch icons (pending)

### Polish & Extras (0/4 Complete)
- 🟡 URL redirects (pending, only needed when deploying to root)
- 🟡 Google Analytics (pending)
- 🟡 Remove duplicate Jamaica project (trivial)
- 🟡 Print stylesheet (low priority)

---

## 🎯 Recommended Action Plan

### Phase 1: Make Demo Production-Ready (3-6 hours)
**Goal:** Demo can function as a working website (no images, but all features work)

1. ✅ **DONE:** Contact form integrated with Formspree
2. ✅ **DONE:** Featured Focus Areas added
3. ✅ **DONE:** All 19 projects present
4. 🟡 **TODO:** Remove duplicate Jamaica project (5 minutes)
5. 🟡 **TODO:** Test contact form end-to-end (30 minutes)
6. 🟡 **TODO:** Add OpenGraph meta tags (2 hours, design OG image)
7. 🟡 **TODO:** Set up Google Analytics or Cloudflare Analytics (30 minutes)

**Outcome:** Demo is fully functional for lead capture and SEO, just missing visual assets.

---

### Phase 2: Add Visual Assets (10-20 hours)
**Goal:** Demo has professional visual appearance with photos and diagrams

**Priority 1: Book Covers (2-4 hours)**
- Source 5 book cover images from publishers/Amazon
- Add to `/demo-site/public/images/books/`
- Update BookCard component

**Priority 2: Research Photos (6-10 hours)**
- Obtain 20-30 field work photos from Dr. Jacobs
- Organize by research area (Sea Level Rise, Sewers, Wetlands, Safe Water)
- Add to `/demo-site/public/images/research/`
- Update research page components

**Priority 3: Equipment & Workshop Photos (3-5 hours)**
- Obtain 10-15 service/teaching photos from Dr. Jacobs
- Add to `/demo-site/public/images/services/` and `/teaching/`
- Update Services and Teaching pages

**Outcome:** Demo looks professional with real project evidence.

---

### Phase 3: Polish & Deploy (3-5 hours)
**Goal:** Demo is ready to replace legacy site at root

1. Add Apple touch icons and favicon (1-2 hours)
2. Set up URL redirects (1 hour)
3. Switch from HashRouter to BrowserRouter (1 hour)
4. Test all routes and redirects (30 minutes)
5. Deploy to root, move legacy to `/legacy/` (30 minutes)

**Outcome:** Demo is the primary site, legacy archived.

---

## 🚧 Blockers

### Critical Blocker
❌ **Images not in repository** — Cannot extract from GoDaddy CDN or legacy HTML. Must obtain from:
- Dr. Jacobs' photo archives (field work, teaching, equipment)
- Publisher websites (book covers)
- Created new (diagrams, infographics)

**Estimated time to resolve:** 10-20 hours (mostly photo curation and organization)

### Minor Blockers
- Formspree endpoint needs verification (is it connected to the right email?)
- OpenGraph image needs to be designed (2 hours)
- Google Analytics account needs to be set up (if using GA4)

---

## 📝 Next Steps

**Immediate (can do now):**
1. Remove duplicate Jamaica project from `projects.ts`
2. Build and deploy demo with Formspree form
3. Test contact form submission

**Short-term (this week):**
1. Design and add OpenGraph image
2. Add Apple touch icons
3. Set up Cloudflare Analytics

**Medium-term (requires Dr. Jacobs):**
1. Request photo archives (field work, equipment, teaching)
2. Source book cover images from publishers
3. Integrate photos into demo site

**Long-term (when ready to deploy):**
1. Set up URL redirects
2. Switch to BrowserRouter
3. Deploy demo to root
4. Archive legacy site

---

## 📊 Summary Table

| Feature | Status | Priority | Effort | Blocker |
|---------|--------|----------|--------|---------|
| Contact form | ✅ Done | Critical | — | None |
| Featured Focus Areas | ✅ Done | High | — | None |
| Selected Projects (19) | ✅ Done | High | — | None (1 duplicate to remove) |
| OpenGraph tags | 🟡 TODO | Medium | 2-3h | Design OG image |
| Apple touch icons | 🟡 TODO | Low | 1-2h | None |
| URL redirects | 🟡 TODO | High* | 1h | *Only when deploying to root |
| Analytics | 🟡 TODO | Medium | 30min | None |
| Book covers (5) | 🔴 Blocked | HIGH | 2-4h | Need publisher images |
| Field work photos (20-30) | 🔴 Blocked | HIGH | 6-10h | Need Dr. Jacobs' archives |
| Equipment photos (10-15) | 🔴 Blocked | Medium | 3-5h | Need Dr. Jacobs' archives |
| Diagrams (10-15) | 🔴 Blocked | Medium | 8-12h | Need creation or extraction |
| Hero backgrounds (2-5) | 🔴 Blocked | Low | 2-3h | Need Dr. Jacobs' archives |
| Logos (5-10) | 🔴 Blocked | Low | 2-3h | Need logo files |
| Contact map | 🔴 Optional | Low | 30min | None |

**Total Effort:**
- ✅ Completed: ~0 hours remaining
- 🟡 Pending (can do now): 5-8 hours
- 🔴 Blocked (need assets): 25-40 hours

**Grand Total:** 30-48 hours to full completion

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Next Review:** After Phase 1 completion
