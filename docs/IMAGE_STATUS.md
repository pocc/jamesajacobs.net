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

### 5. OpenGraph Social Image (1/1 complete)

| Image | File | Size | Status |
|-------|------|------|--------|
| **OG Image** | `og-image.jpg` | ~50 KB | ✅ Present |

**Location:** `/demo-site/public/og-image.jpg`
**Usage:** Social media sharing preview

### 6. Research Field Photos (16/16 present)

**CORRECTION:** Research photos ARE available! Found in `/demo-site/public/images/research/`

#### Sea Level Rise Research (10/10 complete)

| Image | File | Size | Description |
|-------|------|------|-------------|
| **Diagram 1** | `sea-level-rise-21.jpg` | 38 KB | Environmental justice diagram (vulnerable populations) |
| **Field Photo 1** | `sea-level-rise-22.jpg` | 111 KB | Field monitoring site |
| **Field Photo 2** | `sea-level-rise-24.jpg` | 103 KB | Monitoring equipment |
| **Field Photo 3** | `sea-level-rise-25.jpg` | 160 KB | Sensor installation |
| **Historical Photo** | `sea-level-rise-26.jpg` | 173 KB | Richmond Atchison Village flood (Dec 1960) |
| **Field Photo 4** | `sea-level-rise-27.jpg` | 121 KB | Flood documentation |
| **Field Photo 5** | `sea-level-rise-28.jpg` | 111 KB | Storm drain monitoring |
| **Field Photo 6** | `sea-level-rise-45.jpg` | 116 KB | Field work |
| **Field Photo 7** | `sea-level-rise-63.jpg` | 89 KB | Equipment setup |
| **Field Photo 8** | `sea-level-rise-67.jpg` | 113 KB | Monitoring site |

**Status:** ✅ **Complete** — All sea level rise research photos present

#### Wetlands Research (6/6 complete)

| Image | File | Size | Description |
|-------|------|------|-------------|
| **Intro Slide** | `wetlands-01-front-slide.jpg` | 140 KB | Constructed wetlands benefits diagram |
| **Field Photo 1** | `wetlands-02.jpg` | 88 KB | Wetlands site photo |
| **Field Photo 2** | `wetlands-03.jpg` | 85 KB | Treatment system |
| **Field Photo 3** | `wetlands-04.jpg` | 81 KB | Vegetation |
| **Field Photo 4** | `wetlands-05.jpg` | 105 KB | Water treatment |
| **Field Photo 5** | `wetlands-06.jpg` | 72 KB | Field work |

**Status:** ✅ **Complete** — All wetlands research photos present

## ❌ Images Still Missing

### 1. Sewer Systems Research Photos (estimated 10-15 images)

**Missing categories:**
- Sewer inspection camera footage screenshots
- Vapor intrusion pathway diagrams
- Building assessment photos
- Smoke testing photos
- Technical diagrams

**Status:** ❌ Not yet sourced

### 2. Safe Water Research Photos (estimated 8-10 images)

**Missing categories:**
- India field work photos (rural wells)
- Well rehabilitation equipment photos
- Community water testing photos
- Project location maps

**Status:** ❌ Not yet sourced

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
| **Favicons** | 3 | 0 | 3 | 100% |
| **OG image** | 1 | 0 | 1 | 100% |
| **Sea Level Rise photos** | 10 | 0 | 10 | 100% |
| **Wetlands photos** | 6 | 0 | 6 | 100% |
| **Sewer Systems photos** | 0 | 10-15 | 10-15 | 0% |
| **Safe Water photos** | 0 | 8-10 | 8-10 | 0% |
| **Teaching photos** | 0 | 10-15 | 10-15 | 0% |
| **Equipment photos** | 0 | 5-10 | 5-10 | 0% |
| **Additional diagrams** | 0 | 5-10 | 5-10 | 0% |
| **TOTAL** | 28 | 38-65 | 66-93 | **42-43%** |

**Key Finding:** Demo site has significantly more images than initially documented!
- ✅ 28 images present (including 16 research photos)
- ❌ 38-65 images still needed for complete coverage
- 📈 **42-43% complete** (was thought to be ~15%)

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
│   │   ├── hydraulic-fracturing.jpg        (✅ 33 KB)
│   │   ├── oil-spills-gas-leaks.jpg        (✅ 40 KB)
│   │   ├── acid-mine-drainage.jpg          (✅ 46 KB)
│   │   ├── chromium-vi-handbook.jpg        (✅ 23 KB)
│   │   ├── mtbe.jpg                        (✅ 21 KB)
│   │   ├── book-covers-all.jpg             (✅ 66 KB)
│   │   └── book-covers-all.webp            (✅ 45 KB)
│   ├── research/
│   │   ├── sea-level-rise-21.jpg           (✅ 38 KB - diagram)
│   │   ├── sea-level-rise-22.jpg           (✅ 111 KB)
│   │   ├── sea-level-rise-24.jpg           (✅ 103 KB)
│   │   ├── sea-level-rise-25.jpg           (✅ 160 KB)
│   │   ├── sea-level-rise-26.jpg           (✅ 173 KB - historical)
│   │   ├── sea-level-rise-27.jpg           (✅ 121 KB)
│   │   ├── sea-level-rise-28.jpg           (✅ 111 KB)
│   │   ├── sea-level-rise-45.jpg           (✅ 116 KB)
│   │   ├── sea-level-rise-63.jpg           (✅ 89 KB)
│   │   ├── sea-level-rise-67.jpg           (✅ 113 KB)
│   │   ├── wetlands-01-front-slide.jpg     (✅ 140 KB)
│   │   ├── wetlands-02.jpg                 (✅ 88 KB)
│   │   ├── wetlands-03.jpg                 (✅ 85 KB)
│   │   ├── wetlands-04.jpg                 (✅ 81 KB)
│   │   ├── wetlands-05.jpg                 (✅ 105 KB)
│   │   └── wetlands-06.jpg                 (✅ 72 KB)
│   ├── coyote_creek.jpg                    (✅ 516 KB)
│   └── high_water.jpg                      (✅ 682 KB)
├── og-image.jpg                            (✅ ~50 KB)
├── jamesajacobs_profile.webp               (✅ ~50 KB)
├── apple-touch-icon.png                    (✅ 30 KB)
├── favicon-32x32.png                       (✅ 24 KB)
└── favicon-16x16.png                       (✅ 25 KB)
```

**Total:** 28 images, ~2.8 MB

### Recommended Future Structure

```
demo-site/public/images/
├── books/                (✅ complete - 7/7 images including composites)
├── research/
│   ├── sea-level-rise-*.jpg   (✅ complete - 10/10 photos)
│   ├── wetlands-*.jpg         (✅ complete - 6/6 photos)
│   ├── sewer-systems/         (❌ needs 10-15 photos)
│   └── safe-water/            (❌ needs 8-10 photos)
├── teaching/             (❌ needs 10-15 photos)
├── equipment/            (❌ needs 5-10 photos)
└── diagrams/             (⚠️ have 2, need 5-10 more)
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
