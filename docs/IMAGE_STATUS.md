# Image Status Report

**Date:** February 7, 2026
**Purpose:** Document current state of images in demo site vs. legacy site

---

## ✅ Images Successfully Migrated

### 1. Book Cover Images (5/5 complete)

All five book covers are present in `/demo-site/public/images/books/`:

| Book | File | Dimensions | Size | Status |
|------|------|-----------|------|--------|
| **Hydraulic Fracturing** | `hydraulic-fracturing.jpg` | 293×400 | 33 KB | ✅ Present |
| **Oil Spills & Gas Leaks** | `oil-spills-gas-leaks.jpg` | 248×400 | 40 KB | ✅ Present |
| **Acid Mine Drainage** | `acid-mine-drainage.jpg` | 369×500 | 46 KB | ✅ Present |
| **Chromium(VI) Handbook** | `chromium-vi-handbook.jpg` | 353×500 | 23 KB | ✅ Present |
| **MTBE** | `mtbe.jpg` | 295×475 | 21 KB | ✅ Present |

**Integration:** Book cover images are referenced in [demo-site/src/data/books.ts](../demo-site/src/data/books.ts) with `coverImage` property.

**Source:** These were downloaded and added to the repository previously.

### 2. Profile Photo (1/1 complete)

| Image | File | Size | Status |
|-------|------|------|--------|
| **Profile photo** | `jamesajacobs_profile.webp` | ~50 KB | ✅ Present |

**Locations:**
- `/demo-site/public/jamesajacobs_profile.webp` (demo site)
- `/demo/jamesajacobs_profile.webp` (build output)
- `/about/jamesajacobs_profile.webp` (legacy site)

### 3. Hero Background Images (2/2 complete)

| Image | File | Size | Status |
|-------|------|------|--------|
| **Coyote Creek** | `coyote_creek.jpg` | 516 KB | ✅ Present |
| **High Water** | `high_water.jpg` | 682 KB | ✅ Present |

**Location:** `/demo-site/public/images/`
**Usage:** Homepage hero section background in [Home.tsx](../demo-site/src/pages/Home.tsx)

### 4. Favicon & Touch Icons (4/4 complete)

| Icon | File | Size | Status |
|------|------|------|--------|
| **Favicon 16×16** | `favicon-16x16.png` | 25 KB | ✅ Present |
| **Favicon 32×32** | `favicon-32x32.png` | 24 KB | ✅ Present |
| **Apple Touch Icon** | `apple-touch-icon.png` | 30 KB | ✅ Present |
| **Favicon ICO** | `favicon.ico` | (generated) | ✅ Present |

---

## ❌ Images NOT Available / Missing

### 1. Research Field Photos (estimated 30-40 images)

**Issue:** Legacy site used GoDaddy's dynamic image loading system. Images were not embedded in the static HTML exports (monolith v2.7.0), only placeholder data URIs.

**Evidence:**
- `grep -c 'data:image' sea-level-rise/index.html` returns only **1** (likely profile photo)
- `grep -c 'data:image' wetlands/index.html` returns only **2**
- `grep -c 'data:image' safe-water/index.html` returns only **2**

**Missing categories:**

#### Sea Level Rise Research
- Sensor equipment photos (Solinst data loggers, SmartCover manhole sensors)
- Field monitoring site photos (Atchison Village, Tamalpais Valley)
- Storm drain and sewer system photos
- Flood documentation photos
- Data visualization graphs/charts

#### Sewer Systems Research
- Sewer inspection camera footage screenshots
- Vapor intrusion pathway diagrams
- Building assessment photos
- Smoke testing photos
- Technical diagrams

#### Wetlands Research
- Constructed wetland photos
- Wastewater treatment farm concept diagrams
- Tidal wetlands sampling photos
- Treatment process flow diagrams
- Before/after restoration photos

#### Safe Water Research
- India field work photos (rural wells)
- Well rehabilitation equipment photos
- Community water testing photos
- Project location maps

**Why not available:**
1. **Monolith export limitations:** The monolith tool v2.7.0 only captures static HTML snapshots. Dynamic images loaded via JavaScript are not captured.
2. **GoDaddy CDN hosting:** Images were hosted on `img1.wsimg.com` with proprietary IDs and were loaded dynamically.
3. **No direct access:** Without GoDaddy account credentials, we cannot download the original images from their CDN.

**Options to obtain:**
1. ✅ **Recommended:** Contact Dr. Jacobs directly to provide original photos from his archive
2. ⚠️ **Manual extraction:** Log into GoDaddy Website Builder, download images manually
3. ❌ **Automated scraping:** Not feasible (authentication required, rate limiting)

### 2. Teaching/Workshop Photos (estimated 10-15 images)

**Missing categories:**
- Classroom session photos (India, Germany, Jamaica, UC Berkeley)
- Workshop participant photos
- University campus photos
- Student group photos
- Certificate/credential photos

**Same issue:** Not captured in legacy HTML exports.

### 3. Services Page Equipment Photos (estimated 5-10 images)

**Missing:**
- Sewer air testing equipment
- Video camera inspection equipment
- Field work demonstration photos
- Client site photos (anonymized)

### 4. Diagrams & Infographics (estimated 10-15 images)

**Missing:**
- Vapor intrusion pathway diagrams
- Geological cross-sections
- Water treatment process flows
- Groundwater chemistry diagrams
- Burton-upon-Trent geology maps (Geology & Beer page)

---

## 📊 Summary Statistics

| Category | Present | Missing | Total | % Complete |
|----------|---------|---------|-------|------------|
| **Book covers** | 5 | 0 | 5 | 100% |
| **Profile photo** | 1 | 0 | 1 | 100% |
| **Hero backgrounds** | 2 | 0 | 2 | 100% |
| **Favicons** | 4 | 0 | 4 | 100% |
| **Research photos** | 0 | 30-40 | 30-40 | 0% |
| **Teaching photos** | 0 | 10-15 | 10-15 | 0% |
| **Equipment photos** | 0 | 5-10 | 5-10 | 0% |
| **Diagrams** | 0 | 10-15 | 10-15 | 0% |
| **TOTAL** | 12 | 55-80 | 67-92 | **15-18%** |

---

## 🔍 Technical Investigation Results

### Attempted Methods to Extract Images

#### ❌ 1. Amazon Book Cover Scraping
**Attempted:** WebFetch on Amazon product pages
**Result:** Blocked by CAPTCHA
**Error:** `The page appears to be an Amazon CAPTCHA verification page`

**URLs tried:**
- https://www.amazon.com/Oil-Spills-Gas-Leaks-Environmental/dp/0071772898
- https://www.amazon.com/Acid-Mine-Drainage-Sulfate-Soils/dp/0470487860
- https://www.amazon.com/Chromium-VI-Handbook-Jacques-Guertin/dp/1566706084
- https://www.amazon.com/Mtbe-Effects-Soil-Groundwater-Resources/dp/1566705533

**Why it failed:** Amazon has aggressive bot detection that blocks automated access

#### ❌ 2. Base64 Image Extraction from Legacy HTML
**Attempted:** `grep -o 'data:image' sea-level-rise/index.html`
**Result:** Only 1-2 placeholder images per page (1×1 pixel GIFs)
**Finding:** Real images were not embedded in HTML, only loaded dynamically

**Example placeholder found:**
```
src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
```
(This is a 1×1 transparent GIF, not actual content)

#### ❌ 3. GoDaddy CDN Image URLs
**Attempted:** `grep -o 'https://img1.wsimg.com/isteam/ip/[^"]*' books/index.html`
**Result:** Only found profile photo and font URLs, no research photos
**Finding:** Research photos have proprietary IDs that weren't in the exported HTML

#### ✅ 4. Existing Repository Images
**Attempted:** `find . -name "*.jpg" -o -name "*.png" -o -name "*.webp"`
**Result:** Found book covers already present in `/demo-site/public/images/books/`
**Success:** All 5 book covers + 2 hero backgrounds + profile photo confirmed

---

## 🎯 Recommendations

### Short-Term (Demo Site Polish)

1. **Use placeholder images with captions** for missing photos:
   ```jsx
   <div className="bg-gray-200 rounded-lg p-8 text-center">
     <p className="text-gray-600">Photo: Solinst Level Logger installed in storm drain</p>
     <p className="text-sm text-gray-500">(Image available upon request)</p>
   </div>
   ```

2. **Add "Request Photos" CTA** on research pages:
   ```jsx
   <button>📷 Request Field Photos</button>
   ```

3. **Emphasize existing assets:**
   - Book covers are fully present ✅
   - Profile photo is present ✅
   - Hero backgrounds are present ✅

### Long-Term (Production Site)

1. **Contact Dr. Jacobs directly** to provide:
   - Original field work photos (sea level rise, sewer systems, wetlands, safe water)
   - Teaching/workshop photos from international work
   - Equipment photos (sewer testing, monitoring equipment)
   - Diagrams/infographics (vapor intrusion pathways, treatment processes)

2. **Request specific image categories:**
   - **Priority 1:** Research field photos (30-40 images) — highest visual impact
   - **Priority 2:** Teaching photos (10-15 images) — demonstrates international experience
   - **Priority 3:** Equipment photos (5-10 images) — shows professional capabilities
   - **Priority 4:** Diagrams (10-15 images) — enhances technical explanations

3. **Image specifications:**
   - Format: JPEG or WebP (for photos), SVG or PNG (for diagrams)
   - Size: 1200px wide (max) for web optimization
   - Quality: 80-85% JPEG compression
   - Alt text: Descriptive captions for accessibility

---

## 📁 File Structure

### Current Image Organization

```
demo-site/public/
├── images/
│   ├── books/
│   │   ├── hydraulic-fracturing.jpg     (✅ present)
│   │   ├── oil-spills-gas-leaks.jpg     (✅ present)
│   │   ├── acid-mine-drainage.jpg       (✅ present)
│   │   ├── chromium-vi-handbook.jpg     (✅ present)
│   │   └── mtbe.jpg                     (✅ present)
│   ├── coyote_creek.jpg                 (✅ present)
│   ├── high_water.jpg                   (✅ present)
│   ├── research/                        (❌ empty - need 30-40 photos)
│   │   ├── sea-level-rise/
│   │   ├── sewer-systems/
│   │   ├── wetlands/
│   │   └── safe-water/
│   ├── teaching/                        (❌ empty - need 10-15 photos)
│   └── equipment/                       (❌ empty - need 5-10 photos)
├── jamesajacobs_profile.webp            (✅ present)
├── apple-touch-icon.png                 (✅ present)
├── favicon-32x32.png                    (✅ present)
└── favicon-16x16.png                    (✅ present)
```

### Recommended Future Structure

```
demo-site/public/images/
├── books/                (✅ complete - 5/5 images)
├── research/
│   ├── sea-level-rise/   (❌ needs 8-10 photos)
│   ├── sewer-systems/    (❌ needs 10-12 photos)
│   ├── wetlands/         (❌ needs 6-8 photos)
│   └── safe-water/       (❌ needs 6-10 photos)
├── teaching/             (❌ needs 10-15 photos)
├── equipment/            (❌ needs 5-10 photos)
└── diagrams/             (❌ needs 10-15 diagrams)
```

---

## 🚀 Next Steps

### Immediate Actions

1. ✅ **Book covers** — Already integrated, no action needed
2. ✅ **Profile photo** — Already integrated, no action needed
3. ✅ **Hero backgrounds** — Already integrated, no action needed
4. ✅ **Favicons** — Already integrated, no action needed

### Pending Actions (Requires Dr. Jacobs' Input)

1. ⏳ **Contact Dr. Jacobs** to request original research photos
2. ⏳ **Request teaching/workshop photos** from archive
3. ⏳ **Request equipment photos** or arrange photo session
4. ⏳ **Request diagrams** or create new illustrations based on text descriptions

### Alternative: Placeholder Strategy

If original photos are not available, consider:

1. **Stock photos** with captions (e.g., "Representative sewer inspection equipment")
2. **Diagram illustrations** created from text descriptions
3. **"Request Information" CTAs** instead of missing photos
4. **Focus on text-based credibility** (licenses, publications, experience)

---

## 📚 Related Documentation

- [DIFFERENCES.md](DIFFERENCES.md) — Full comparison of legacy vs demo
- [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) — What was implemented
- [NON_MIGRATABLE_FEATURES.md](NON_MIGRATABLE_FEATURES.md) — GoDaddy features that can't migrate
- [CONTENT.md](CONTENT.md) — Source of truth for all site text

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Author:** Claude Sonnet 4.5
**Status:** Complete — awaiting original photos from Dr. Jacobs
