# Image Acquisition Guide for Demo Site

This guide provides step-by-step instructions for obtaining all missing images for the demo site.

**Status:** 0/70 images acquired (0%)
**Last Updated:** February 7, 2026

---

## Quick Links

| Category | Count | Priority | Estimated Time |
|----------|-------|----------|----------------|
| [Book Covers](#book-covers) | 5 | **HIGH** | 1-2 hours |
| [Organization Logos](#organization-logos) | 5-10 | Medium | 2-3 hours |
| [Research Photos](#research-field-work-photos) | 20-30 | **HIGH** | 6-10 hours |
| [Equipment Photos](#equipment-photos) | 10-15 | Medium | 3-5 hours |
| [Diagrams](#diagrams-and-infographics) | 10-15 | Medium | 8-12 hours |
| [Hero Backgrounds](#hero-background-images) | 2-5 | Low | 2-3 hours |

**Total Estimated Effort:** 22-45 hours

---

## Book Covers (Priority: HIGH)

### 1. Oil Spills and Gas Leaks (2014)
- **Publisher:** McGraw-Hill Education
- **ISBN:** 9780071772891
- **Authors:** Stephen M. Testa, James A. Jacobs

**Acquisition Steps:**
1. Visit: https://www.mheducation.com/highered/product/oil-spills-gas-leaks-environmental-response-prevention-cost-recovery-testa-jacobs/9780071772891.html
2. Right-click the book cover image
3. Save as: `demo-site/public/images/books/oil-spills-gas-leaks.jpg`
4. Optimize: Resize to 400x600px, compress to ~50KB

**Alternative Sources:**
- Amazon: https://www.amazon.com/Oil-Spills-Gas-Leaks-Environmental/dp/0071772898
- Google Books: Search "Oil Spills and Gas Leaks Testa Jacobs"

**Legal Note:** Book cover images used for author's professional website fall under fair use.

---

### 2. Environmental Considerations for Hydraulic Fracturing (2019)
- **Publisher:** Wiley
- **ISBN:** 9781119336099 (1st edition) / 9781119364337 (2nd edition)
- **Authors:** James A. Jacobs, Stephen M. Testa

**Acquisition Steps:**
1. Visit: https://www.wiley.com/en-us/Fracking:+Further+Investigations+into+the+Environmental+Considerations+and+Operations+of+Hydraulic+Fracturing,+2nd+Edition-p-9781119364337
2. Right-click the book cover image
3. Save as: `demo-site/public/images/books/hydraulic-fracturing.jpg`
4. Optimize: Resize to 400x600px

**Alternative Sources:**
- Wiley Online Library: https://onlinelibrary.wiley.com/doi/book/10.1002/9781119336129
- Amazon: Search "Environmental Considerations Hydraulic Fracturing Jacobs Testa"

---

### 3. Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils (2014)
- **Publisher:** Wiley
- **ISBN:** 9780470487860 (hardcover) / 9781118749241 (paperback)
- **Authors:** James A. Jacobs, Jay H. Lehr, Stephen M. Testa

**Acquisition Steps:**
1. Visit: https://www.wiley.com/en-us/Acid+Mine+Drainage%2C+Rock+Drainage%2C+and+Acid+Sulfate+Soils%3A+Causes%2C+Assessment%2C+Prediction%2C+Prevention%2C+and+Remediation-p-9781118749241
2. Right-click the book cover image
3. Save as: `demo-site/public/images/books/acid-mine-drainage.jpg`
4. Optimize: Resize to 400x600px

**Alternative Sources:**
- Amazon: https://www.amazon.com/Acid-Mine-Drainage-Sulfate-Soils/dp/0470487860
- Wiley Online Books: https://onlinelibrary.wiley.com/doi/book/10.1002/9781118749197

---

### 4. Chromium(VI) Handbook (2004)
- **Publisher:** CRC Press / Routledge / Taylor & Francis
- **ISBN:** 9781566706087
- **Editors:** Jacques Guertin, James A. Jacobs, Cynthia P. Avakian

**Acquisition Steps:**
1. Visit: https://www.routledge.com/ChromiumVI-Handbook/Guertin-Jacobs-Avakian/p/book/9781566706087
2. Right-click the book cover image
3. Save as: `demo-site/public/images/books/chromium-vi-handbook.jpg`
4. Optimize: Resize to 400x600px

**Alternative Sources:**
- Amazon: https://www.amazon.com/Chromium-VI-Handbook-Jacques-Guertin/dp/1566706084
- Taylor & Francis: https://www.taylorfrancis.com/books/mono/10.1201/9780203487969/chromium-vi-handbook-jacques-guertin-james-jacobs-cynthia-avakian

---

### 5. MTBE: Effects on Soil and Groundwater Resources (2001)
- **Publisher:** CRC Press / Routledge
- **ISBN:** 9781566705530
- **Editors:** Jacques Guertin, Christy Herron, James A. Jacobs

**Acquisition Steps:**
1. Visit: https://www.routledge.com/Mtbe-Effects-on-Soil-and-Groundwater-Resources/Guertin-Herron-Jacobs/p/book/9780429137846
2. Right-click the book cover image
3. Save as: `demo-site/public/images/books/mtbe.jpg`
4. Optimize: Resize to 400x600px

**Alternative Sources:**
- Amazon: https://www.amazon.com/Mtbe-Effects-Soil-Groundwater-Resources/dp/1566705533
- Taylor & Francis: https://www.taylorfrancis.com/books/mono/10.1201/9781420032475/mtbe-christy-herron-james-jacobs-jacques-guertin

---

## After Acquiring Book Covers

Once you have all 5 book cover images:

### 1. Add images to project
```bash
cd demo-site/public/images
mkdir -p books
# Place the 5 JPG files in this directory
```

### 2. Update books data file
Edit `demo-site/src/data/books.ts` and add `coverImage` property to each book:

```typescript
{
    title: 'Environmental Considerations for Hydraulic Fracturing',
    coverImage: '/images/books/hydraulic-fracturing.jpg',  // ADD THIS LINE
    // ... rest of book data
}
```

### 3. Update BookCard component
Edit `demo-site/src/components/BookCard.tsx` to use real images:

```typescript
{book.coverImage ? (
    <img
        src={book.coverImage}
        alt={`${book.title} cover`}
        className="w-full h-full object-cover"
    />
) : (
    // Fallback gradient placeholder
)}
```

### 4. Test locally
```bash
cd demo-site
npm run dev
# Visit http://localhost:5173/#/books
```

---

## Organization Logos

### UC Santa Cruz (UCSC)
- **Official Brand Guide:** https://communications.ucsc.edu/brand-overview/logos-imagery/
- **Logo Usage Rules:** Must use Santa Cruz blue, black, or white (reversed) only
- **Download Format:** SVG preferred (scalable), PNG acceptable
- **Save As:** `demo-site/public/images/logos/ucsc.svg` or `.png`
- **License:** Free for referencing the university (not for commercial endorsement)

**Acquisition Steps:**
1. Visit https://communications.ucsc.edu/brand-overview/logos-imagery/
2. Download the official UCSC logo (primary version)
3. Use the slug logo or seal logo depending on context
4. Follow brand guidelines (no modifications)

**Alternative Source:**
- Wikipedia Commons: https://commons.wikimedia.org/wiki/File:UC_Santa_Cruz_logo.svg (public domain)

---

### NOAA California Sea Grant
- **Official Site:** https://caseagrant.ucsd.edu/
- **Parent Organization:** https://seagrant.noaa.gov/
- **Logo Requirements:** NOAA emblem + Sea Grant logo required on funded project deliverables
- **Save As:** `demo-site/public/images/logos/noaa-sea-grant.png`
- **License:** Requires approval for use (contact NOAA Research Public Affairs)

**Acquisition Steps:**
1. Contact California Sea Grant: https://caseagrant.ucsd.edu/
2. Request logo files for use on Dr. Jacobs' professional website
3. Mention funded research projects (sea level rise studies)
4. Get written permission for logo use

**Note:** Logo use may be restricted to funded projects only. Verify permission before using.

---

### Solinst Canada Ltd.
- **Official Site:** https://www.solinst.com/
- **Product:** Levelogger data loggers (used in sea level rise research)
- **Save As:** `demo-site/public/images/logos/solinst.png`
- **License:** Likely free for referencing products used in research

**Acquisition Steps:**
1. Visit https://www.solinst.com/
2. Right-click logo in header or footer
3. Save image
4. Or email: instruments@solinst.com requesting logo for research citation purposes

---

### SmartCover Systems (Badger Meter)
- **Official Site:** https://smartcoversystems.com/ (acquired by Badger Meter)
- **New Parent Site:** https://www.badgermeter.com/products/analytics-software/smartcover/
- **Product:** Manhole monitoring sensors (used in sea level rise research)
- **Save As:** `demo-site/public/images/logos/smartcover.png`
- **License:** Likely free for referencing products used in research

**Acquisition Steps:**
1. Visit https://smartcoversystems.com/ or https://www.badgermeter.com/
2. Right-click logo
3. Save image
4. Or contact Badger Meter for logo files

---

### National Ground Water Association (NGWA)
- **Official Site:** https://www.ngwa.org/
- **Member Logos Page:** https://www.ngwa.org/members/member-benefits/Resources-for-members/ngwa-member-logos
- **Save As:** `demo-site/public/images/logos/ngwa.png`
- **License:** Free for NGWA members (Dr. Jacobs is likely a member)

**Acquisition Steps:**
1. Visit https://www.ngwa.org/members/member-benefits/Resources-for-members/ngwa-member-logos
2. Login with NGWA member credentials (or request logo from membership desk)
3. Download appropriate logo version
4. Follow usage guidelines (no alterations, no rotation)

**Usage Rules:** Must not be altered, redesigned, modified, or distorted (proportional sizing only)

---

### Additional Logos to Consider

#### Geological Society of London (GSL)
- **Site:** https://www.geolsoc.org.uk/
- **Save As:** `demo-site/public/images/logos/gsl.png`

#### American Institute of Professional Geologists (AIPG)
- **Site:** https://www.aipg.org/
- **Save As:** `demo-site/public/images/logos/aipg.png`

#### University of the West Indies (UWI)
- **Site:** https://www.uwi.edu/
- **Context:** Fulbright teaching location (Jamaica)
- **Save As:** `demo-site/public/images/logos/uwi.png`

#### Technical University of Munich (TUM)
- **Site:** https://www.tum.de/en/
- **Context:** Fulbright teaching location (Germany)
- **Save As:** `demo-site/public/images/logos/tum.png`

#### SRTM University (India)
- **Site:** Search for official site
- **Context:** Fulbright teaching location
- **Save As:** `demo-site/public/images/logos/srtm.png`

---

## Research Field Work Photos

**Source:** Dr. Jacobs' personal project archives
**Priority:** HIGH
**Estimated Count:** 20-30 photos

These photos **cannot be found online** and must be obtained directly from Dr. Jacobs.

### Sea Level Rise Research (8-10 photos needed)

**Study Sites:**
- Atchison Village (Richmond, CA) - residential area prone to sewer backups
- Tamalpais Valley (Marin County) - low-lying area near tidal waters

**Equipment in Use:**
- Solinst Levelogger Edge data loggers (real-time water level monitoring)
- SmartCover manhole sensors (detecting high water events)
- Storm drain monitoring setups

**Ideal Photos:**
1. Researcher installing Levelogger in monitoring well
2. SmartCover sensor mounted in manhole
3. Close-up of data logger equipment
4. Study area overview (residential streets, storm drains)
5. Laptop showing real-time monitoring data
6. High water event photo (flooded street/sewer)
7. Team meeting with residents or city officials
8. Maps of study areas with sensor locations

**File Naming Convention:**
```
sea-level-rise-atchison-village-01.jpg
sea-level-rise-tamalpais-valley-02.jpg
sea-level-rise-levelogger-equipment-03.jpg
sea-level-rise-smartcover-sensor-04.jpg
```

---

### Sewer Systems Research (6-8 photos needed)

**Topics:**
- VOC vapor intrusion pathways (sewer-to-indoor-air)
- Sewer inspection and assessment
- International case studies (Denmark, Boston)

**Ideal Photos:**
1. Sewer inspection camera in use
2. Camera footage screenshot (pipe interior)
3. Smoke testing equipment/process
4. Diagram: 3-step vapor intrusion pathway
5. Building assessment (sampling ports, equipment)
6. Laboratory analysis setup (VOC testing)
7. International collaboration photos (if available)
8. Technical diagram: sewer gas pathway cross-section

**File Naming Convention:**
```
sewer-systems-inspection-camera-01.jpg
sewer-systems-vapor-pathway-diagram-02.jpg
sewer-systems-smoke-testing-03.jpg
```

---

### Wetlands Research (4-6 photos needed)

**Topics:**
- Constructed wetlands for wastewater treatment
- Tidal wetlands sampling
- Treatment farm concept

**Ideal Photos:**
1. Constructed wetland aerial or wide shot
2. Wetland vegetation close-up
3. Water quality sampling in wetlands
4. Treatment system flow diagram
5. Before/after restoration photos
6. Tidal wetland field work

**File Naming Convention:**
```
wetlands-constructed-wetland-aerial-01.jpg
wetlands-sampling-equipment-02.jpg
wetlands-treatment-diagram-03.jpg
```

---

### Safe Water Research - India (4-6 photos needed)

**Topics:**
- Rural well rehabilitation
- Community water testing
- Well maintenance training

**Ideal Photos:**
1. Rural well rehabilitation in progress
2. Community members at well site
3. Water quality testing equipment
4. Training workshop with villagers
5. Before/after well condition
6. Map of project locations in India

**File Naming Convention:**
```
safe-water-india-well-rehabilitation-01.jpg
safe-water-india-community-testing-02.jpg
safe-water-india-training-workshop-03.jpg
```

---

## Equipment Photos

**Source:** Dr. Jacobs' archives
**Priority:** Medium
**Count:** 10-15 photos

### Sewer Air Testing Equipment (3-5 photos)
- Air sampling pumps
- VOC detection equipment
- Sample collection containers
- Field sampling setup

**Save As:** `demo-site/public/images/services/sewer-air-testing-*.jpg`

### Video Camera Inspection (2-3 photos)
- Push camera system
- Monitor showing pipe interior
- Camera head close-up

**Save As:** `demo-site/public/images/services/video-inspection-*.jpg`

### Laboratory Equipment (2-3 photos)
- GC/MS equipment
- Sample preparation
- Data analysis station

**Save As:** `demo-site/public/images/services/laboratory-*.jpg`

### Field Sampling Gear (2-3 photos)
- Drilling rig
- Geoprobe equipment
- Monitoring well installation

**Save As:** `demo-site/public/images/services/field-sampling-*.jpg`

---

## Diagrams and Infographics

**Source:** Create new or extract from published papers
**Priority:** Medium
**Count:** 10-15 images
**Skills Required:** Graphic design, Adobe Illustrator/Inkscape

### High Priority Diagrams

#### 1. Vapor Intrusion 3-Step Pathway
**Description:** Cross-section diagram showing:
1. VOC source in sewer line
2. Migration through cracks/defects
3. Entry into indoor air

**Tool:** Create in Adobe Illustrator or PowerPoint
**Dimensions:** 1200x800px
**Save As:** `demo-site/public/images/diagrams/vapor-intrusion-pathway.svg`

**Source Material:** Likely exists in published papers - check PubMed, ResearchGate for Dr. Jacobs' papers on sewer vapor intrusion

---

#### 2. Wastewater Treatment Farm Concept
**Description:** Schematic showing:
- Wastewater input
- Wetland treatment cells
- Nutrient removal stages
- Effluent discharge

**Tool:** Create in Illustrator
**Dimensions:** 1400x1000px
**Save As:** `demo-site/public/images/diagrams/treatment-farm-concept.svg`

---

#### 3. Groundwater Chemistry Diagram (Geology & Beer)
**Description:** Illustrating how geology affects water chemistry:
- Rock layers (sandstone, limestone, gypsum)
- Water composition changes
- Ion contributions
- Final water quality for brewing

**Tool:** Create in Illustrator
**Dimensions:** 1200x800px
**Save As:** `demo-site/public/images/diagrams/groundwater-chemistry.svg`

---

### Other Diagrams to Consider

4. **Burton-upon-Trent Geology Map** (for Geology & Beer page)
5. **Historical Roman/Greek Water Systems** (public domain images may exist)
6. **Sea Level Rise Monitoring Network Map** (create from study area data)
7. **Sewer System Cross-Section** (showing construction, defects, vapor pathways)
8. **Bioremediation Process Flow** (for projects page)
9. **Phase II Subsurface Investigation Diagram** (drilling, sampling, analysis)
10. **Aquifer Mapping Example** (groundwater flow, contamination plumes)

---

## Hero Background Images

**Source:** Dr. Jacobs' archives
**Priority:** Low (site works without them)
**Count:** 2-5 high-quality photos
**Specs:** Minimum 1920x1080px, landscape orientation

### Ideal Subjects:
1. **Geological formation** - Rock layers, outcrop, sedimentary structures
2. **Field equipment in use** - Drilling rig, sampling equipment, wide landscape shot
3. **Coastal study site** - Tidal area, wetlands, storm drain outfall
4. **Laboratory scene** - Equipment, analysis in progress (softly blurred background)
5. **Monitoring equipment** - Sensors, data loggers, environmental station

**Processing:**
- Resize to 1920x1080px
- Apply subtle darkening overlay (30-40% opacity) for text readability
- Compress to <300KB for fast loading
- WebP format preferred

**Save As:** `demo-site/public/images/hero/hero-bg-*.webp`

**Update:** Edit `demo-site/src/pages/Home.tsx` to use image instead of gradient:
```typescript
style={{
    backgroundImage: 'url(/images/hero/hero-bg-01.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
}}
```

---

## Contact Page Map (Optional)

**Priority:** Low
**Tool:** Google Maps Embed

### Office Location:
**Address:** 229 Tewksbury Avenue, Point Richmond, CA 94801

### Embed Code:
1. Visit https://www.google.com/maps
2. Search: "229 Tewksbury Avenue, Point Richmond, CA 94801"
3. Click "Share" → "Embed a map"
4. Copy iframe code
5. Add to `demo-site/src/pages/Contact.tsx`

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="450"
  style="border:0;"
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>
```

---

## Image Optimization Guidelines

Before adding images to the demo site, optimize them:

### Tools
- **ImageOptim** (macOS) - drag and drop compression
- **TinyPNG** (web) - https://tinypng.com/
- **Squoosh** (web) - https://squoosh.app/
- **cwebp** (command line) - convert to WebP format

### Optimization Targets

| Image Type | Format | Max Dimensions | Target Size |
|------------|--------|----------------|-------------|
| Book covers | JPG | 400x600px | 30-50 KB |
| Logos | PNG/SVG | 300x100px | 10-20 KB (PNG), <10KB (SVG) |
| Field photos | WebP/JPG | 1200x800px | 100-200 KB |
| Equipment photos | WebP/JPG | 1000x667px | 80-150 KB |
| Diagrams | SVG/PNG | 1200x800px | <50 KB |
| Hero backgrounds | WebP | 1920x1080px | 200-300 KB |

### WebP Conversion (Command Line)
```bash
# Install cwebp (macOS)
brew install webp

# Convert single image
cwebp -q 80 input.jpg -o output.webp

# Batch convert all JPGs in directory
for file in *.jpg; do cwebp -q 80 "$file" -o "${file%.jpg}.webp"; done
```

### Image Naming Conventions
- Use lowercase
- Use hyphens (not underscores or spaces)
- Be descriptive
- Include context

**Examples:**
```
✅ sea-level-rise-atchison-village-flooding-2023.jpg
✅ sewer-inspection-camera-interior-view.jpg
✅ vapor-intrusion-pathway-diagram.svg

❌ IMG_1234.jpg
❌ photo.jpg
❌ Sewer_Picture.JPG
```

---

## Integration Checklist

After acquiring images:

### 1. Add to Repository
```bash
cd demo-site/public/images
mkdir -p books logos research services diagrams hero
# Place images in appropriate directories
```

### 2. Update Data Files

**Books:** `demo-site/src/data/books.ts`
```typescript
coverImage: '/images/books/oil-spills-gas-leaks.jpg'
```

**Research Pages:** Hardcode in page components or create image data files

### 3. Update Components

**BookCard:** `demo-site/src/components/BookCard.tsx`
- Replace CSS gradient with `<img>` tag

**Research Pages:** Add `<img>` elements where appropriate

**Homepage Hero:** Replace gradient with background image

### 4. Test Locally
```bash
cd demo-site
npm run dev
```

### 5. Build and Deploy
```bash
npm run build
cd ..
git add demo/
git commit -m "Add book covers, logos, and research photos"
git push origin master
```

### 6. Verify in Production
- Visit https://jamesajacobs.net/demo/
- Check all images load correctly
- Verify mobile responsiveness
- Test image loading performance

---

## Progress Tracking

Mark items as complete in `docs/IMPLEMENTATION_STATUS.md`:

```markdown
### Book Covers (5 images)
- [x] Oil Spills and Gas Leaks
- [x] Hydraulic Fracturing
- [x] Acid Mine Drainage
- [x] Chromium(VI) Handbook
- [x] MTBE

### Organization Logos (5-10 images)
- [ ] UC Santa Cruz
- [ ] NOAA California Sea Grant
- [ ] Solinst Canada
- [ ] SmartCover Systems
- [ ] NGWA
```

---

## Legal & Copyright Notes

### Fair Use for Book Covers
✅ **Permitted:** Using book cover images on author's professional website
- Promotional/informational purpose
- No commercial use
- Author is credited on the books
- Links to publisher pages

❌ **Not Permitted:** Selling, altering, or implying endorsement

### Logo Usage
✅ **Permitted:** Referencing organizations where:
- Dr. Jacobs is/was a member (NGWA, AIPG, GSL)
- Funded research (NOAA Sea Grant)
- Products used in research (Solinst, SmartCover)
- Teaching affiliations (universities)

❌ **Not Permitted:** Implying endorsement or official partnership without permission

### Photography Rights
✅ **Permitted:** Photos taken by Dr. Jacobs or project team
- Original photography
- Photos from funded research (check grant terms)
- Photos with permission from subjects

❌ **Not Permitted:** Third-party photos without license

---

## Support & Questions

If you encounter issues obtaining images:

1. **Book Covers:** Contact publisher permissions departments
2. **Logos:** Contact organization marketing/communications teams
3. **Photos:** Request from Dr. Jacobs' project archives
4. **Diagrams:** Consider hiring graphic designer if technical drawing skills lacking

**Estimated Total Cost:**
- Book covers: Free (fair use)
- Logos: Free (with permission)
- Photos: Free (already own)
- Diagrams: $200-500 if outsourced (5-10 hours @ $40-50/hr)

---

**Document Version:** 1.0
**Last Updated:** February 7, 2026
**Next Update:** After first batch of images acquired
