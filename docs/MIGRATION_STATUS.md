# Migration Status: Legacy → Demo Site

**Date:** February 7, 2026
**Summary:** Tracking implementation of missing features from legacy site to demo site

---

## ✅ Completed Fixes

### 1. Content Additions

#### Added 7 Missing Projects (12 → 19 projects)
**File:** `demo-site/src/data/projects.ts`

Added projects:
1. **Bioremediation of Diesel and Gasoline Contaminated Aquifer** — San Francisco International Airport
2. **Phase II Subsurface Investigations** — Program director for dozens of investigations
3. **Underground Storage Tank Removal and Soil Remediation** — Two-week project for major bank
4. **Water Procurement** — As elected official, procured irrigation water for parks
5. **Regulatory Guidelines for Water Treatment — Jamaica** — Fulbright teaching in Kingston
6. **Wetlands Sampling Project** — Tidal wetlands core drilling with specialized tooling
7. **Subsurface Drilling Programs** — Limited access drilling for SF Bay Area consultants

**Impact:** Demo site now has complete project portfolio matching legacy site.

#### Added Featured Focus Areas to Homepage
**File:** `demo-site/src/pages/Home.tsx`

Added section after Bio Summary with 7 focus areas:
- Water Resources
- VOCs in Sewer-Plumbing
- Resource Evaluations (Water, Oil & Gas, Coal, Renewable Energy)
- Basin Analysis
- Water Supply Assessments
- Stormwater Recovery and Flood Control
- Wastewater Recycling

**Impact:** Replicates sidebar content from legacy homepage.

### 2. Technical Improvements

#### Switched from HashRouter to BrowserRouter
**Files Changed:**
- `demo-site/src/App.tsx` — Changed `HashRouter` to `BrowserRouter` with `basename="/demo"`
- `demo-site/public/_redirects` — Added Cloudflare Pages redirect rules

**Before:** URLs like `/demo/#/about` (hash routing, bad for SEO)
**After:** URLs like `/demo/about` (clean URLs, SEO-friendly)

**Impact:**
- ✅ Clean URLs without `#` symbols
- ✅ Better SEO (search engines can index individual routes)
- ✅ Better sharing (URLs work on social media)
- ✅ Standard web routing behavior

**Note:** Requires Cloudflare Pages to recognize `_redirects` file for SPA routing.

---

## 🚧 Partially Complete

### Profile Photo Display
**Status:** Image file exists but not consistently displayed

**Current State:**
- ✅ Image file exists: `demo/jamesajacobs_profile.webp` (19KB)
- ✅ Displayed on Homepage bio section
- ✅ Displayed on About page header
- ❌ Not displayed as logo/avatar in header navigation

**Recommendation:** Profile photo is adequately displayed. Header avatar is optional.

---

## ❌ Requires External Resources

### 1. Images (50-70 missing)

#### Book Cover Images (5 critical)
**Source:** GoDaddy CDN at `img1.wsimg.com/isteam/ip/7ef868d5-139d-4988-bf19-a343b0d5b352/`

Legacy URL pattern found in `books/index.html`:
```
//img1.wsimg.com/isteam/ip/7ef868d5-139d-4988-bf19-a343b0d5b352/books%20jj.jpg
```

**Missing books:**
1. Environmental Considerations for Hydraulic Fracturing (Wiley, 2019)
2. Oil Spills and Gas Leaks (McGraw-Hill, 2014)
3. Acid Mine Drainage (Wiley, 2014)
4. Chromium(VI) Handbook (CRC Press, 2004)
5. MTBE: Effects on Soil and Groundwater (CRC Press, 2001)

**Solution Options:**
- **Option A:** Download from GoDaddy CDN if still accessible (check if URLs are still live)
- **Option B:** Request original cover images from publishers (Wiley, McGraw-Hill, CRC Press)
- **Option C:** Scan physical book covers and optimize as WebP
- **Option D:** Use Amazon Book Cover API or Open Library Covers API

**Priority:** HIGH — Book page looks unprofessional without covers

---

#### Field Work & Research Photos (10-20 images)

**Sea Level Rise Research:**
- Atchison Village flooding photos (Richmond, CA)
- Tamalpais Valley Manzanita Interchange flooding
- Solinst data logger equipment photos
- SmartCover manhole sensor photos
- Study area maps (GIS overlays)
- "Lake Curry" flooding at AV street intersection

**Sewer Systems Research:**
- Sewer camera inspection equipment
- Vapor intrusion pathway diagrams (3-step illustration)
- Smoke testing photos
- Denmark/Boston case study photos (if available)

**Wetlands Research:**
- Constructed wetland photos
- Wastewater treatment farm concept diagrams
- Tidal wetlands sampling equipment

**Safe Water Research:**
- Rural India well rehabilitation photos
- Well head protection before/after
- SRTM University classroom/field work
- Kadava River Sub-Basin maps

**Solution Options:**
- **Option A:** Extract from original project files/reports (if Dr. Jacobs has archives)
- **Option B:** Re-create technical diagrams (vapor intrusion pathways, treatment processes)
- **Option C:** Use stock photos with proper licensing for generic equipment shots
- **Option D:** Commission new site photography for active projects

**Priority:** MEDIUM-HIGH — Research pages need visual proof of work

---

#### Teaching Photos (5-10 images)
- Classroom teaching in India, Germany, Jamaica, UC Berkeley
- Workshop sessions
- Student groups
- University campus photos

**Source:** Personal archives or university PR departments

**Priority:** MEDIUM — Teaching page is credible with text, but photos add authenticity

---

#### Services/Equipment Photos (5-10 images)
- Sewer air testing equipment (vapor meters, sorbent tubes)
- Video camera inspection equipment
- Field sampling equipment
- Anonymized client site photos

**Priority:** MEDIUM — Services page functional without photos, but less compelling

---

#### Office/Contact Photos (2-3 images)
- Office building exterior (229 Tewksbury Ave, Point Richmond)
- Office interior
- Google Maps embed or static map showing location

**Priority:** LOW — Address is sufficient for contact page

---

### 2. Contact Form Backend

**Current State:**
- ✅ Form UI exists with fields: Name, Email, Subject, Message
- ❌ Form has no submission handler (no backend)
- ❌ Clicking "Submit" does nothing

**Solution Options:**

#### Option A: Formspree (Recommended — Easiest)
- Service: https://formspree.io
- Cost: Free tier (50 submissions/month) or $10/month (1000 submissions)
- Implementation: Add `action="https://formspree.io/f/{form_id}"` to form
- Pros: No code needed, email notifications, spam protection
- Cons: Requires external service account

#### Option B: Netlify Forms (If migrating to Netlify)
- Service: Built into Netlify hosting
- Cost: Free tier (100 submissions/month)
- Implementation: Add `data-netlify="true"` attribute to form
- Pros: Native integration, no external service
- Cons: Only works on Netlify (not Cloudflare Pages)

#### Option C: Cloudflare Workers (Custom Backend)
- Service: Cloudflare Workers + Email Routing
- Cost: Free tier (100,000 requests/day)
- Implementation: Write Worker function to process form + send email
- Pros: Full control, same hosting provider, serverless
- Cons: Requires JavaScript/TypeScript coding

#### Option D: SendGrid/Mailgun API
- Service: SendGrid or Mailgun email API
- Cost: Free tier available (100 emails/day for SendGrid)
- Implementation: Write API handler (Cloudflare Worker or serverless function)
- Pros: Reliable, professional email delivery
- Cons: Requires API key management

#### Option E: Google Forms Embed
- Service: Google Forms
- Cost: Free
- Implementation: Create Google Form, embed iframe
- Pros: Zero setup, spam protection, response management in Google Sheets
- Cons: Not styled to match site, looks like external service

**Recommendation:** Option A (Formspree) or Option C (Cloudflare Workers)

**Priority:** CRITICAL — Site cannot function without working contact form

---

### 3. SEO Metadata

**Current State:**
- ❌ No page-specific `<title>` tags (all pages show default "Vite + React + TS")
- ❌ No `<meta name="description">` tags
- ❌ No OpenGraph tags for social media sharing
- ❌ No Twitter Card tags
- ❌ No canonical URLs
- ❌ No structured data (schema.org JSON-LD)

**Solution:** Install and configure `react-helmet-async`

**Implementation Steps:**
1. Install: `cd demo-site && npm install react-helmet-async`
2. Wrap app with `<HelmetProvider>` in `main.tsx`
3. Add `<Helmet>` component to each page component with:
   - Page title
   - Meta description
   - OpenGraph tags (og:title, og:description, og:image, og:url)
   - Twitter Card tags
4. Create reusable `<SEO>` component for consistency

**Example for About page:**
```tsx
<Helmet>
    <title>About James A. Jacobs, Ph.D. | Geologist & Environmental Scientist</title>
    <meta name="description" content="PhD in Geology from UC Santa Cruz. 40+ years as Professional Geologist and Certified Hydrogeologist. 4x Fulbright Fellow. Expert witness in 23 cases." />
    <meta property="og:title" content="About James A. Jacobs, Ph.D." />
    <meta property="og:description" content="PhD in Geology from UC Santa Cruz..." />
    <meta property="og:image" content="https://jamesajacobs.net/demo/jamesajacobs_profile.webp" />
    <meta property="og:url" content="https://jamesajacobs.net/demo/about" />
    <meta name="twitter:card" content="summary_large_image" />
</Helmet>
```

**Priority:** HIGH — Critical for SEO and social sharing

---

## 📋 Additional Recommendations

### 1. Build and Deploy
**Action:** Rebuild demo site with latest changes
```bash
cd demo-site
npm run build
```

**Verify:**
- ✅ 19 projects display on About page
- ✅ Featured Focus Areas appear on homepage
- ✅ URLs are clean (no `#` symbols)
- ✅ `_redirects` file is in `/demo/` build output

---

### 2. Legacy Site Redirects (When Ready to Replace)
**Action:** When demo site is production-ready, add these redirects to root `_redirects` file:

```
# Redirect legacy URLs to demo equivalents
/books/                    /demo/books                301
/publications/             /demo/books                301
/sewer-overflows/          /demo/research/sewer-systems    301
/sewer-air-%26-vi/         /demo/research/sewer-systems    301
/sea-level-rise/           /demo/research/sea-level-rise    301
/wetlands/                 /demo/research/wetlands          301
/safe-water/               /demo/research/safe-water        301
/workshops-%2F-classes/    /demo/teaching             301
/about/                    /demo/about                301
/services/                 /demo/services             301
/contact/                  /demo/contact              301
/geology-and-beer/         /demo/geology-and-beer     301
```

---

### 3. Analytics Setup
**Action:** Add Google Analytics 4 or Cloudflare Web Analytics

**Options:**
- **Google Analytics 4:** Most comprehensive, free
- **Cloudflare Web Analytics:** Privacy-focused, no cookies, free
- **Plausible Analytics:** Privacy-focused, paid ($9/month)

**Implementation:** Add tracking script to `index.html` or via React Helmet

---

### 4. Performance Optimization

**Current State:** Demo site is fast (~1MB bundle)

**Future Optimizations (Optional):**
- Add image lazy loading for when photos are added
- Enable Brotli compression on Cloudflare Pages
- Add service worker for offline support (PWA)
- Implement code splitting by route

---

## 🔍 Features That Cannot Be Migrated

### 1. GoDaddy UX Framework Components
**What:** React-based GoDaddy components (carousels, flyout menus, etc.) in legacy HTML

**Why Can't Migrate:** Proprietary GoDaddy code, not open source

**Demo Solution:** Replaced with custom React components (BentoGrid, ScrollReveal, Accordions)

**Impact:** None — Demo components are superior to legacy GoDaddy components

---

### 2. GoDaddy Contact Form Backend
**What:** Legacy form submits to `GoDaddy-hosted` backend at `https://img1.wsimg.com/...`

**Why Can't Migrate:** GoDaddy-specific infrastructure

**Demo Solution:** Need new form backend (Formspree, Cloudflare Workers, etc.) — see "Contact Form Backend" section above

**Impact:** CRITICAL — Must implement alternative before going live

---

### 3. GoDaddy CDN-Hosted Images
**What:** Images at `img1.wsimg.com/isteam/ip/7ef868d5-139d-4988-bf19-a343b0d5b352/...`

**Why Can't Directly Migrate:** External CDN, may expire or change

**Demo Solution:** Download images and re-host on Cloudflare Pages or CloudFlare Images CDN

**Impact:** HIGH — Images are critical for credibility

---

### 4. Legacy URL Structure with URL Encoding
**What:** URLs like `/sewer-air-%26-vi/` (`%26` = `&`)

**Why Can't Migrate:** Poor URL design from GoDaddy

**Demo Solution:** Clean URLs like `/research/sewer-systems` (merged Overflows + Air & VI)

**Impact:** POSITIVE — Demo URLs are cleaner, but need 301 redirects for SEO

---

## 📊 Migration Progress Summary

| Category | Legacy Count | Demo Count | Status |
|----------|-------------|------------|--------|
| **Pages** | 13 | 12 | ✅ Complete (merged some pages) |
| **Projects** | 19 | 19 | ✅ Complete (added 7 missing) |
| **Focus Areas** | 7 | 7 | ✅ Complete (added section) |
| **Images** | ~50-70 | 1 | ❌ Needs sourcing |
| **Contact Form** | Working | UI only | ❌ Needs backend |
| **URL Structure** | Hash-free | Clean | ✅ Complete (switched router) |
| **SEO Metadata** | Basic | None | ❌ Needs implementation |
| **Navigation** | 13 items | 9 items (grouped) | ✅ Complete (improved) |

**Overall Readiness:** 70% complete

---

## 🎯 Priority Actions (Ranked)

### Critical (Must Fix Before Launch)
1. **Implement contact form backend** — Site is useless without working contact
2. **Add 5 book cover images** — Books page looks unprofessional
3. **Add SEO metadata** — Invisible to search engines without proper tags

### High Priority (Should Fix Soon)
4. **Add 10-15 key research photos** — Visual proof of work
5. **Rebuild and test demo site** — Verify all changes work correctly
6. **Add Google Analytics** — Track visitor behavior

### Medium Priority (Nice to Have)
7. **Add teaching photos** — Adds authenticity
8. **Add service equipment photos** — More compelling
9. **Create XML sitemap** — Better SEO indexing

### Low Priority (Optional)
10. **Add office photos** — Minor visual enhancement
11. **Add print stylesheets** — Better PDF exports
12. **Add dark mode** — User preference feature

---

## 📁 File Changes Made

### Modified Files
1. `demo-site/src/data/projects.ts` — Added 7 missing projects
2. `demo-site/src/pages/Home.tsx` — Added Featured Focus Areas section, updated background colors
3. `demo-site/src/App.tsx` — Changed HashRouter → BrowserRouter with basename="/demo"

### New Files
4. `demo-site/public/_redirects` — Cloudflare Pages SPA routing rules
5. `docs/MIGRATION_STATUS.md` — This document

### Files to Create (Next Steps)
6. `demo-site/src/components/SEO.tsx` — Reusable SEO component (recommended)
7. `demo-site/public/sitemap.xml` — XML sitemap for search engines
8. `demo-site/public/robots.txt` — Crawl instructions for bots

---

## 🚀 Next Steps

1. **Test Current Changes**
   ```bash
   cd demo-site
   npm run build
   cd ..
   python3 -m http.server 8000
   # Visit http://localhost:8000/demo/
   ```

2. **Source Book Cover Images**
   - Check if GoDaddy CDN URLs still work (try downloading)
   - If not, contact publishers or use Amazon API
   - Optimize as WebP and place in `demo-site/public/images/books/`

3. **Implement Contact Form**
   - Sign up for Formspree (recommended) or
   - Write Cloudflare Worker handler
   - Update `Contact.tsx` with form action

4. **Add SEO Metadata**
   ```bash
   cd demo-site
   npm install react-helmet-async
   ```
   - Create `src/components/SEO.tsx`
   - Add `<Helmet>` to each page

5. **Deploy and Test**
   - Push changes to GitHub
   - Verify Cloudflare Pages auto-deploys
   - Test all routes work with clean URLs
   - Test contact form submission

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Next Review:** After implementing contact form backend
