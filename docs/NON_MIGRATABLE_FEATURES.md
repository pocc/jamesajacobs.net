# Non-Migratable Features from Legacy Site

**Document Purpose:** Identifies features from the legacy GoDaddy-exported site that cannot be directly migrated to the React demo site, along with explanations and recommended alternatives.

**Date:** February 7, 2026

---

## Overview

While most content and functionality from the legacy site has been successfully migrated to the React demo, certain features are tied to GoDaddy's proprietary infrastructure or embedded services and cannot be directly ported. This document catalogs those features and provides guidance on alternatives.

---

## 1. GoDaddy Contact Form Backend

### Legacy Implementation
- **Technology:** GoDaddy Website Builder's built-in contact form service
- **Location:** `/contact/` page
- **Features:**
  - Form submission to GoDaddy's servers
  - Email delivery to `jjacobs@clearwatergroup.com`
  - Spam filtering via GoDaddy's infrastructure
  - Form data stored in GoDaddy's dashboard (unknown retention period)

### Why It Cannot Be Migrated
- The form submission endpoint is hosted on GoDaddy's servers (`*.godaddy.com` or `*.wsimg.com`)
- Form processing logic is proprietary and not exposed via API
- No way to export form submission history
- Requires GoDaddy account authentication to access submissions

### React Demo Alternative: ✅ **IMPLEMENTED**
- **Solution:** Formspree (https://formspree.io)
- **Implementation:** [ContactForm.tsx](../demo-site/src/components/ContactForm.tsx)
- **Endpoint:** `https://formspree.io/f/xdkovedj` (demo endpoint - needs to be configured)
- **Configuration Required:**
  1. Create Formspree account (free tier: 50 submissions/month)
  2. Set up form with `jjacobs@clearwatergroup.com` as recipient
  3. Replace demo endpoint in ContactForm.tsx with production endpoint
  4. Enable reCAPTCHA for spam protection (recommended)

### Alternative Options
1. **Netlify Forms** — Built into Netlify hosting (if migrating from Cloudflare Pages)
2. **EmailJS** — Client-side email service (no backend required)
3. **Custom API** — Cloudflare Workers + EmailOctopus/SendGrid for full control
4. **Direct mailto: link** — Fallback option (less user-friendly, no spam protection)

---

## 2. GoDaddy Analytics & Tracking

### Legacy Implementation
- **Technology:** GoDaddy's proprietary analytics system
- **Files:** `tccl.min.js`, `tccl-tti.min.js` (bundled in legacy pages)
- **Data Collected:**
  - Page views, visitor counts, referrers
  - Time on page, bounce rate
  - Geographic location (country/region)
  - Device type (desktop/mobile/tablet)

### Why It Cannot Be Migrated
- Analytics data is stored in GoDaddy's dashboard (not exportable)
- Tracking scripts are tied to GoDaddy account authentication
- Historical data will be lost when site migrates away from GoDaddy

### React Demo Alternative: ⚠️ **NOT YET IMPLEMENTED**
Recommended solutions:
1. **Google Analytics 4** — Industry standard, free, comprehensive
2. **Plausible Analytics** — Privacy-focused, GDPR-compliant, paid ($9/mo)
3. **Cloudflare Web Analytics** — Free, privacy-first, no cookie tracking
4. **Umami** — Open-source, self-hosted option

**Action Required:** Add analytics tracking to React demo before production deployment.

---

## 3. Base64-Encoded Images (GoDaddy CDN)

### Legacy Implementation
- **Image Hosting:** All images hosted on GoDaddy's CDN (`img1.wsimg.com`)
- **Access Method:** Images referenced via URLs or embedded as base64 data URIs
- **Image Types:**
  - Homepage hero photos (Coyote Creek, High Water flooding)
  - Research page field photos (sensors, monitoring equipment, study sites)
  - Profile photos at multiple sizes (57×57 to 180×180 for touch icons)
  - Book cover images (if present)

### Why It's Problematic
- External dependency on GoDaddy's CDN (may be removed if account is closed)
- No local copies of most images (except profile photo)
- Base64 encoding makes HTML files massive (1.8MB homepage)
- Cannot optimize image formats (WebP, AVIF) or responsive sizing

### React Demo Status: ⚠️ **PARTIALLY IMPLEMENTED**
- ✅ Profile photo: Downloaded and hosted locally (`jamesajacobs_profile.webp`)
- ✅ Hero images: Downloaded (`coyote_creek.jpg`, `high_water.jpg`)
- ❌ **Missing:** Book cover images (5 books)
- ❌ **Missing:** Research page photos (field work, equipment, study sites)
- ❌ **Missing:** Teaching page photos (classroom, workshops, international work)

### Action Required
1. Download all images from GoDaddy CDN before account closure
2. Store images locally in `/demo-site/public/images/`
3. Optimize images (convert to WebP, generate responsive sizes)
4. Update React components to reference local image paths

**Estimated Missing Images:** 50-70 individual photos across all research/teaching/services pages

---

## 4. GoDaddy UX Framework (React Components)

### Legacy Implementation
- **File:** `UX.4.37.7.js` (316KB JavaScript bundle)
- **Technology:** GoDaddy's proprietary React-based component library
- **Components Used:**
  - `Carousel` — Image/content sliders
  - `FlyoutMenu` — Dropdown navigation menus
  - `Toggle` — Accordion/collapse elements
  - `ColorSwatch` — Color picker widgets
  - Bootstrap-style layout components (`bs-Component-*.js`)

### Why It Cannot Be Migrated
- Proprietary code owned by GoDaddy (not open-source)
- Tightly coupled to GoDaddy's build system and routing
- Dependent on GoDaddy's CSS framework
- No documentation for standalone use

### React Demo Alternative: ✅ **REPLACED**
- Custom React components built from scratch
- Uses modern React 19 patterns (hooks, functional components)
- Styled with Tailwind CSS v4 (utility-first framework)
- No external component library dependencies

---

## 5. GoDaddy Website Builder Live Editing

### Legacy Feature
- **Tool:** GoDaddy Website Builder 8.0 (WYSIWYG editor)
- **Features:**
  - Drag-and-drop page building
  - Live preview during editing
  - Template selection
  - Image upload/management
  - SEO settings wizard
  - Mobile responsive preview

### Why It Cannot Be Migrated
- The "live editing" experience is the GoDaddy product itself
- React demo requires code changes via IDE (VSCode, etc.)
- Content updates require rebuilding the site

### React Demo Alternative: ⚠️ **No Direct Replacement**
Options for non-technical content updates:
1. **Headless CMS** — Contentful, Sanity, Strapi (overkill for this site)
2. **Git-based CMS** — Decap CMS, TinaCMS (edit content via web UI, commits to GitHub)
3. **Direct editing** — Update TypeScript data files in `/demo-site/src/data/`
4. **Static regeneration** — Keep content in markdown files, rebuild on push

**Recommendation:** For this site, direct editing of data files is simplest (all content already in TypeScript modules).

---

## 6. GoDaddy SEO Wizard & Metadata Generator

### Legacy Feature
- **Tool:** GoDaddy's built-in SEO assistant
- **Auto-generated Tags:**
  - `<meta name="generator" content="Starfield Technologies; Go Daddy Website Builder 8.0.0000">`
  - OpenGraph images (auto-cropped from uploaded photos)
  - Twitter Card tags
  - Apple touch icons at all required sizes

### Why It's Partially Non-Migratable
- Auto-generation convenience is lost
- Must manually create/maintain meta tags
- Must manually generate favicon sizes

### React Demo Alternative: ✅ **MANUALLY IMPLEMENTED**
- All meta tags added to `/demo-site/index.html`
- OpenGraph and Twitter Card tags configured
- Favicons generated and referenced
- **Remaining Work:** Create custom OpenGraph image (og-image.png) for social shares

---

## 7. Embedded Third-Party Widgets

### Legacy Widgets (If Present)
These common GoDaddy integrations are **not confirmed** on the legacy site but are documented here for completeness:

1. **Google Maps Embed** — If used for office location
   - ✅ Can be migrated (use Google Maps Embed API)

2. **Social Media Feed Widgets** — Twitter/LinkedIn/Instagram feeds
   - ⚠️ Requires API keys and rebuild

3. **Appointment Scheduling** — Calendly, Acuity, etc.
   - ✅ Can be migrated (embed via iframe)

4. **Live Chat** — Zendesk, Intercom, etc.
   - ✅ Can be migrated (add chat script)

**Status:** No third-party widgets identified on legacy site.

---

## 8. GoDaddy SSL Certificate Auto-Renewal

### Legacy Feature
- **Service:** Automatic SSL/TLS certificate provisioning and renewal
- **Provider:** GoDaddy (certificates bundled with Website Builder)
- **Domain:** `jamesajacobs.net` (HTTPS enforced)

### Why It Cannot Be Migrated
- Certificate is tied to GoDaddy hosting account
- Certificate will expire when GoDaddy account is closed

### React Demo Alternative: ✅ **HANDLED BY CLOUDFLARE**
- Cloudflare Pages provides automatic SSL certificates
- Uses Let's Encrypt (free, auto-renewing)
- No configuration required
- HTTPS enforced by default

---

## 9. Legacy URL Structure & Redirects

### Legacy URLs with Issues
1. **URL-encoded characters:**
   - `/sewer-air-%26-vi/` (should be `/sewer-air-and-vi/`)
   - `/workshops-%2F-classes/` (should be `/workshops-classes/`)

2. **Flat structure:**
   - Research pages at root level (e.g., `/sea-level-rise/`)
   - React demo uses hierarchical structure (`/research/sea-level-rise`)

### Migration Challenge
- Changing URLs breaks existing:
  - Google search results (SEO impact)
  - Inbound links from other websites (backlinks)
  - Bookmarks users have saved
  - Printed materials (business cards, papers)

### React Demo Alternative: ⚠️ **REQUIRES 301 REDIRECTS**
**Action Required:**
1. Set up 301 redirects in Cloudflare Pages `_redirects` file
2. Map all old URLs to new URLs
3. Preserve SEO value and prevent 404 errors

**Example redirects:**
```
/books/                    /demo/#/books                    301
/sea-level-rise/           /demo/#/research/sea-level-rise  301
/sewer-air-%26-vi/         /demo/#/research/sewer-systems   301
/sewer-overflows/          /demo/#/research/sewer-systems   301
/workshops-%2F-classes/    /demo/#/teaching                 301
```

**Note:** Hash routing (`#/`) complicates server-side redirects. Recommend switching to BrowserRouter for production.

---

## 10. GoDaddy Email Forwarding

### Legacy Feature (If Configured)
- **Service:** Email forwarding from `contact@jamesajacobs.net` to `jjacobs@clearwatergroup.com`
- **Provider:** GoDaddy (domain email forwarding)

### Why It May Not Migrate
- Email forwarding is tied to domain registrar (may be with GoDaddy)
- If domain is transferred, email forwarding must be reconfigured

### Alternative: ✅ **CLOUDFLARE EMAIL ROUTING**
- Cloudflare offers free email forwarding for domains
- Set up forwarding for `contact@jamesajacobs.net` → `jjacobs@clearwatergroup.com`
- No configuration needed in React app (email routing is DNS-level)

---

## Summary: Migration Checklist

| Feature | Legacy | React Demo Status | Action Required |
|---------|--------|-------------------|-----------------|
| Contact Form | GoDaddy backend | ✅ Formspree (needs config) | Configure production endpoint |
| Analytics | GoDaddy tracking | ❌ Not implemented | Add Google Analytics / Cloudflare Analytics |
| Images | GoDaddy CDN | ⚠️ Partial (profile + hero) | Download & host remaining 50-70 images |
| UX Framework | GoDaddy proprietary | ✅ Custom React components | None |
| SEO Tags | Auto-generated | ✅ Manual (complete) | Create custom OpenGraph image |
| SSL Certificate | GoDaddy | ✅ Cloudflare (auto) | None |
| URL Redirects | N/A | ❌ Not configured | Set up 301 redirects in `_redirects` file |
| Email Forwarding | GoDaddy (maybe) | ⚠️ Check configuration | Verify Cloudflare Email Routing |

---

## Conclusion

**Most legacy features can be replaced with modern alternatives**, but several require manual configuration:

### Critical Before Production Launch:
1. ✅ **Contact form backend** — Configured with Formspree (needs production endpoint)
2. ❌ **Download all images** — 50-70 photos still on GoDaddy CDN
3. ❌ **Set up 301 redirects** — Prevent broken links and SEO loss
4. ❌ **Add analytics** — No visitor tracking currently enabled

### Recommended But Optional:
5. Create custom OpenGraph image for social sharing
6. Verify email forwarding configuration
7. Test contact form spam protection
8. Set up site monitoring (Uptime Robot, etc.)

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Next Review:** Before production deployment of React demo site
