# Features That Cannot Be Migrated Automatically

This document identifies legacy site features that **cannot be automatically migrated** from the monolith exports to the React demo site, and what alternatives exist.

**Document Date:** February 7, 2026

---

## 1. Images & Visual Media

### Problem
All images in the legacy static site are either:
1. **Hosted on GoDaddy's CDN** (`img1.wsimg.com`) — external URLs that require network access
2. **Base64-encoded** in the HTML (mostly 1×1 transparent GIF placeholders)
3. **Not present in the git repository** (except profile photo)

### What's Missing

#### Book Cover Images (5 books)
- Environmental Considerations for Hydraulic Fracturing (Wiley, 2019)
- Oil Spills and Gas Leaks (McGraw-Hill, 2014)
- Acid Mine Drainage (Wiley, 2014)
- Chromium(VI) Handbook (CRC Press, 2004)
- MTBE: Effects on Soil and Groundwater (CRC Press, 2001)

**Source:** These are copyrighted publisher images. Must obtain from:
- Publisher websites (Wiley, McGraw-Hill, CRC Press)
- Amazon book preview images
- Personal copies photographed

#### Field Work & Research Photos (estimated 40-60 images)
- Sensor equipment (Solinst data loggers, SmartCover sensors)
- Study sites (Atchison Village, Tamalpais Valley, Coyote Creek)
- Sewer inspection photos
- Wetland restoration photos
- India safe water project photos
- Teaching/workshop photos (classrooms, students)
- Equipment photos (vapor meters, sampling equipment)

**Source:** These are Dr. Jacobs' personal photos. Must obtain from:
- Personal photo archives
- Project documentation
- Research partners (Solinst, NOAA, etc.)

#### Diagrams & Technical Illustrations
- Vapor intrusion pathway diagrams
- Wastewater treatment farm concept illustrations
- Geological maps (Burton-upon-Trent, study areas)
- Water chemistry diagrams
- Before/after comparison photos

**Source:** Must be created or obtained from:
- Original research reports
- Published papers
- Custom graphic design

### Why Automated Migration Fails
- GoDaddy CDN URLs are external and may expire or change
- No local copies of images in git repository
- Base64 images in HTML are placeholders (1×1 transparent GIFs)
- Copyright restrictions on book covers
- Personal photos not in public domain

### Manual Solution Required
1. **Contact Dr. Jacobs** for personal photo archives
2. **Download book covers** from publisher/Amazon sites (fair use for promotional purposes)
3. **Create new diagrams** from research paper descriptions
4. **Organize in `/demo-site/public/images/` directory**
5. **Update React components** to reference local image paths

**Estimated effort:** 8-16 hours (photo curation, image editing, optimization)

---

## 2. GoDaddy Contact Form Backend

### Problem
Legacy site uses GoDaddy's proprietary form handling service that:
- Submits to GoDaddy's servers
- Sends email notifications via GoDaddy's SMTP
- Tracks submissions in GoDaddy dashboard
- Uses GoDaddy's spam protection

### What's Missing
- Form submission endpoint (GoDaddy-specific URL)
- Email delivery infrastructure
- Spam protection (reCAPTCHA or GoDaddy's system)
- Form submission tracking/logging

### Why Automated Migration Fails
- GoDaddy form endpoint is not portable
- No access to GoDaddy's form configuration
- Email SMTP credentials not in repository
- Backend logic is closed-source SaaS

### Manual Solution Required
**Option 1: Formspree (Recommended)**
```tsx
<form action="https://formspree.io/f/{form-id}" method="POST">
  {/* existing fields */}
</form>
```
- Free tier: 50 submissions/month
- Sends to jjacobs@clearwatergroup.com
- Spam filtering included
- No coding required

**Option 2: Netlify Forms**
```html
<form netlify>
  {/* existing fields */}
</form>
```
- Free tier: 100 submissions/month
- Built into Cloudflare Pages deployment
- Spam filtering included

**Option 3: Custom Cloudflare Worker**
- Write serverless function to send email
- Use SendGrid or Mailgun API
- Requires coding and API keys
- Full control over logic

**Estimated effort:** 1-2 hours (Formspree setup) or 4-6 hours (custom Worker)

---

## 3. GoDaddy Analytics & Tracking

### Problem
Legacy site includes GoDaddy's analytics scripts:
- `tccl.min.js` (GoDaddy Traffic & Conversion Tracking Library)
- `tccl-tti.min.js` (Time to Interactive tracking)
- Proprietary dashboard not accessible outside GoDaddy

### What's Missing
- Visitor traffic data
- Form submission tracking
- Page view analytics
- User behavior heatmaps

### Why Automated Migration Fails
- GoDaddy analytics is closed-source SaaS
- Data not exportable from GoDaddy dashboard
- Tracking codes only work on GoDaddy-hosted sites

### Manual Solution Required
**Recommended: Google Analytics 4**
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

**Alternative: Cloudflare Web Analytics** (privacy-focused, no cookies)
- Built into Cloudflare Pages
- Enable in Cloudflare dashboard
- Lightweight, GDPR-compliant

**Estimated effort:** 30 minutes (setup GA4 or Cloudflare Analytics)

---

## 4. GoDaddy UX Framework & React Components

### Problem
Legacy site uses GoDaddy's proprietary React-based UX framework:
- `UX.4.37.7.js` (316 KB minified bundle)
- Bootstrap-based components (Carousel, FlyoutMenu, Toggle)
- Tightly coupled to GoDaddy's infrastructure

### What's Missing
- Carousel component (for image galleries)
- FlyoutMenu component (dropdown navigation)
- ColorSwatch component
- Badge component

### Why Automated Migration Fails
- GoDaddy UX framework is closed-source, minified code
- Components depend on GoDaddy backend APIs
- Not designed for use outside GoDaddy platform

### Manual Solution
**Already solved:** React demo uses custom components instead:
- ✅ Custom Header with dropdown (replaces FlyoutMenu)
- ✅ Custom Tag component (replaces Badge)
- ✅ ScrollReveal animations (replaces Carousel effects)
- ✅ Pure CSS styling (replaces Bootstrap)

**No action needed** — React demo has better, custom-built equivalents.

---

## 5. Legacy URL Redirects

### Problem
When React demo replaces legacy site at root, old URLs will break:
- `/publications/` (merged into `/books`)
- `/sewer-overflows/` (merged into `/research/sewer-systems`)
- `/sewer-air-%26-vi/` (merged into `/research/sewer-systems`)
- `/workshops-%2F-classes/` (renamed to `/teaching`)

### What's Missing
- Server-side redirect rules
- 301 permanent redirects for SEO
- Preserve external backlinks from other sites

### Why Automated Migration Cannot Solve
- Redirects require server configuration
- Cloudflare Pages needs `_redirects` file
- React HashRouter makes redirects complex

### Manual Solution Required
Create `/demo-site/public/_redirects` file:
```
/publications/           /#/books                 301
/sewer-overflows/        /#/research/sewer-systems 301
/sewer-air-%26-vi/       /#/research/sewer-systems 301
/workshops-%2F-classes/  /#/teaching              301
```

**Better solution:** Switch from HashRouter to BrowserRouter
- Requires Cloudflare Pages fallback rule: `/* /index.html 200`
- Enables clean URLs (`/books` instead of `/#/books`)
- Allows standard 301 redirects

**Estimated effort:** 2-4 hours (configure redirects, test)

---

## 6. Some Legacy Content Details

### Problem
The React demo simplified some content to improve scannability:
- **19 projects** (legacy) → **12 projects** (demo)
- **Full academic citations** (legacy) → **Summarized publications** (demo)
- **Detailed methodology steps** (legacy) → **Condensed methodology** (demo)

### What's Missing
7 project descriptions from About page legacy version (can be extracted from CONTENT.md or old_index.html)

### Why Partially Missing
- Intentional simplification for UX (expandable accordions vs. wall of text)
- Some detail hidden in collapsed sections
- Some removed to reduce cognitive load

### Manual Solution
**For missing projects:** Extract from `docs/CONTENT.md` and add to `demo-site/src/data/projects.ts`

**For academic citations:** Already present but collapsed in accordion — no issue

**Estimated effort:** 1-2 hours (extract and format 7 additional projects)

---

## 7. Apple Touch Icons & PWA Manifest

### Problem
Legacy site includes extensive Apple touch icons for iOS home screen:
```html
<link rel="apple-touch-icon" sizes="57x57" href="...">
<link rel="apple-touch-icon" sizes="60x60" href="...">
<!-- ... 8 more sizes ... -->
```

Also includes PWA manifest:
```html
<link rel="manifest" href="/manifest.webmanifest">
```

### What's Missing
- 10 sizes of apple-touch-icon (57×57 to 180×180)
- PWA manifest file
- Favicon in multiple formats

### Why Automated Migration Fails
- Icons are hosted on GoDaddy CDN
- Manifest file not in repository
- Would need to regenerate from source image

### Manual Solution Required
1. **Generate icons** from profile photo or logo using:
   - https://realfavicongenerator.net/
   - https://www.favicon-generator.org/
2. **Add to `/demo-site/public/`**
3. **Add `<link>` tags** to `demo-site/index.html`
4. **Create `manifest.json`** for PWA

**Estimated effort:** 1-2 hours (generate icons, create manifest)

---

## 8. OpenGraph & Twitter Card Images

### Problem
Legacy site includes OpenGraph tags for social sharing:
```html
<meta property="og:image" content="https://img1.wsimg.com/...">
<meta name="twitter:image" content="...">
```

Images are hosted on GoDaddy CDN.

### What's Missing
- OpenGraph image (1200×630px recommended)
- Twitter Card image (same or 1200×600px)
- Per-page OG images for each section

### Why Automated Migration Fails
- Images are external (GoDaddy CDN)
- Need to create custom OG images for demo site brand

### Manual Solution Required
1. **Create OG image** (1200×630px) with:
   - Profile photo
   - Name + credentials
   - "James A. Jacobs, Ph.D. — Geologist / Environmental Scientist"
   - Earth-tone Strata design theme
2. **Add to `/demo-site/public/og-image.jpg`**
3. **Add meta tags** to each page (React Helmet)

**Estimated effort:** 2-3 hours (design OG image, implement meta tags)

---

## Summary: What Requires Manual Work

| Feature | Can Auto-Migrate? | Estimated Effort | Priority |
|---------|-------------------|------------------|----------|
| **Images (books, field, equipment)** | ❌ No | 8-16 hours | HIGH |
| **Contact form backend** | ❌ No | 1-2 hours | CRITICAL |
| **Analytics tracking** | ❌ No | 30 minutes | Medium |
| **GoDaddy UX framework** | ✅ Already replaced | N/A | N/A |
| **URL redirects** | ❌ No | 2-4 hours | HIGH |
| **7 missing projects** | ✅ Can extract | 1-2 hours | Low |
| **Apple touch icons** | ❌ No | 1-2 hours | Low |
| **OpenGraph images** | ❌ No | 2-3 hours | Medium |

**Total estimated effort:** 17-32 hours of manual work

---

## Recommended Next Steps

### Phase 1: Critical (Make Demo Functional)
1. ✅ **Set up Formspree contact form** (1-2 hours)
2. ✅ **Add 7 missing projects** from CONTENT.md (1-2 hours)
3. ✅ **Add Featured Focus Areas** to homepage (30 minutes)

### Phase 2: High Priority (Visual Completeness)
4. **Obtain book cover images** from publishers (2-4 hours)
5. **Obtain field work photos** from Dr. Jacobs (4-8 hours)
6. **Configure URL redirects** for merged pages (2-4 hours)

### Phase 3: Medium Priority (Polish & SEO)
7. **Create OpenGraph images** (2-3 hours)
8. **Set up Google Analytics** (30 minutes)
9. **Generate Apple touch icons** (1-2 hours)

### Phase 4: Low Priority (Nice-to-Have)
10. Optimize all images for web (WebP conversion)
11. Add alt text to all images
12. Create print stylesheet

---

**Key Takeaway:** The React demo can be made **production-ready in 3-6 hours** (Phase 1). Full visual parity with legacy site requires obtaining photos from Dr. Jacobs (Phase 2), which is the main blocker for a complete migration.
