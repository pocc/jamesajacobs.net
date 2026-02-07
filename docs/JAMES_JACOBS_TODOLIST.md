# James A. Jacobs Website — Content & Image Acquisition Todolist

**Last Updated:** February 7, 2026
**Purpose:** Comprehensive list of images, content, and enhancements needed to complete the demo site migration

---

## ✅ Completed Items

### Core Functionality
- [x] **Contact form** — Formspree integration configured for geojimj@gmail.com
- [x] **19 Selected Projects** — All projects from legacy site migrated to About page
- [x] **Featured Focus Areas** — 7 areas added to homepage
- [x] **Hero background image** — coyote_creek.jpg added
- [x] **5 Book cover images** — All covers downloaded from Open Library API
- [x] **OpenGraph social sharing** — OG image (1200×630px) created with profile + stats
- [x] **Twitter Card meta tags** — Implemented for social media previews
- [x] **Apple touch icons** — Favicon set already present

---

## 🔴 HIGH PRIORITY — Critical for Professional Credibility

### 1. Research Field Work Photos (20-30 images)
**Status:** Requires Dr. Jacobs' photo archives
**Impact:** Research pages look empty without visual evidence
**Estimated Time:** 8-12 hours (curation + optimization)

#### Sea Level Rise Research (6-8 photos needed)
- [ ] Atchison Village (Richmond, CA) — study site photos showing tidal flooding
- [ ] Tamalpais Valley (Marin County) — study site photos showing storm drains
- [ ] **Solinst data logger** — equipment photos showing real-time monitoring sensors
- [ ] **SmartCover manhole sensors** — photos of installed sensors in manholes
- [ ] Storm drain monitoring — photos of data collection process
- [ ] Study area maps — annotated maps showing monitoring locations
- [ ] Before/after flood comparisons — time-series showing water levels

**Where to Use:** `/research/sea-level-rise` page + homepage research section

---

#### Sewer Systems Research (6-8 photos needed)
- [ ] **Sewer inspection camera** — photos of video inspection equipment
- [ ] **Vapor intrusion pathway diagram** — 3-step process illustration
- [ ] Building assessment — photos of field testing equipment
- [ ] Smoke testing — photos of testing process
- [ ] Denmark/Boston case studies — photos from international research
- [ ] Manhole inspection — photos showing defects/cracks
- [ ] Air sampling equipment — VOC monitoring devices

**Where to Use:** `/research/sewer-systems` page + services section

---


---

## 🟡 UX AUDIT RECOMMENDATIONS — Tier 2 (High Impact)

### ✅ COMPLETED (Feb 2026)
- [x] **`/expert-witness/` page** — Already existed with comprehensive attorney-focused content
- [x] **`/utilities/` page** — Already existed with wastewater commissioner experience highlighted
- [x] **`/for-consultants/` page** — Created with "we don't compete" positioning, turnaround guarantees
- [x] **Homepage audience triage** — Updated to 5 persona cards matching UX audit recommendations
- [x] **Trust signal footer** — Created reusable component displayed on all pages
- [x] **"For Your Industry" navigation** — Added dropdown menu with audience-specific pages
- [x] **Practical Applications sections** — Added to Sea Level Rise and Sewer Systems research pages

### 2. Audience-Specific Contact Forms (High Impact)
**Status:** Requires development work  
**Impact:** Increase inquiry quality by 35-50% (reduce "tire kickers")  
**Estimated Time:** 4-6 hours development + testing

#### Requirements:
- [ ] Detect referrer/entry page and customize form fields dynamically
- [ ] **Attorney form** (from `/expert-witness/`):
  - Law Firm name
  - Case Type (dropdown: Groundwater, Vapor Intrusion, MTBE, Chromium VI, Other)
  - Jurisdiction (State/Federal Court)
  - Timeline urgency (Urgent <2 weeks, Standard, Long-term)
  - "Confidential Legal Inquiry" designation
  
- [ ] **Utility form** (from `/utilities/`):
  - Utility/District Name
  - Service Area (city/county)
  - Issue Type (Vapor Intrusion, Sea Level Rise, Regulatory Compliance, Other)
  - Urgency (Emergency <1 week, Urgent 1-4 weeks, Standard)
  - Emergency response checkbox
  
- [ ] **Consultant form** (from `/for-consultants/`):
  - Your Firm Name
  - Project Type (Expert Review, Sub-Consulting, Expert Witness, Training)
  - Technical Area (Chromium VI, Vapor Intrusion, MTBE, Hydraulic Fracturing, Other)
  - Timeline (Urgent <1 week, Standard, Long-term)
  - Confidentiality clause acknowledgment
  
- [ ] **Property Owner form** (from `/real-estate/`):
  - Property Address (city/state minimum)
  - Property Type (Commercial, Industrial, Residential, Vacant Land)
  - Situation (Buying, Selling, Developing, Received Agency Letter, Vapor Intrusion)
  - Transaction Timeline (Urgent <2 weeks, Standard, Long-term)

**Alternative (Simpler):** Add "I am a..." dropdown to current form with audience-specific options

---

### 3. Reorganize Services Page by Audience (High Impact)
**Status:** Requires content restructuring  
**Impact:** Reduce friction for visitors parsing irrelevant services  
**Estimated Time:** 3-4 hours

#### Requirements:
- [ ] Replace current technical service list with audience-first tabs or sections:
  - **For Attorneys** — Expert Witness, Litigation Support, Forensic Analysis
  - **For Regulators** — Compliance Support, Technical Guidance, Policy Development
  - **For Utilities** — Vapor Intrusion, Sea Level Rise, Overflow Prediction
  - **For Consultants** — Sub-Consulting, Expert Review, Technical Training
  - **For Property Owners** — Site Assessment, Transaction Support, Liability Defense
- [ ] Each tab shows only services relevant to that audience
- [ ] Include audience-specific CTAs (not generic "Contact Us")

---

### 4. Practical Applications for Additional Research Pages (Medium Impact)
**Status:** Partially complete (Sea Level Rise ✅, Sewer Systems ✅)  
**Impact:** Convert academic research visitors into consulting clients  
**Estimated Time:** 2-3 hours per page

#### Remaining Pages:
- [ ] **Wetlands research page** — Add Practical Applications section
- [ ] **Safe Water research page** — Add Practical Applications section

---

## 🟢 UX AUDIT RECOMMENDATIONS — Tier 3 (Valuable, Lower Priority)

### 5. Case Study Library (10-15 anonymized cases)
**Status:** Requires Dr. Jacobs' project archives + client permission  
**Impact:** Trust signals, social proof, demonstrate real-world outcomes  
**Estimated Time:** 10-15 hours (research + writing + legal review)

#### Structure for Each Case Study:
- Project title (anonymized, e.g., "Northern California Utility Vapor Intrusion Assessment")
- Client type (Attorney, Utility, Consultant, Property Owner)
- Technical challenge
- Dr. Jacobs' role
- Methodology applied
- Outcome (settlement, regulatory approval, cost savings, etc.)
- Lessons learned

#### Recommended Case Studies by Audience:
**For Attorneys (5 cases):**
- [ ] Groundwater contamination source identification (defense or plaintiff side)
- [ ] Vapor intrusion liability defense
- [ ] Chromium VI natural occurrence argument
- [ ] MTBE remediation cost recovery
- [ ] Oil & gas resource valuation dispute

**For Utilities (3 cases):**
- [ ] Tamalpais Valley sea level rise overflow prediction (already documented in research)
- [ ] Regional sewer vapor intrusion testing program (200+ manholes)
- [ ] Capital project prioritization based on monitoring data

**For Consultants (2 cases):**
- [ ] Expert review of conceptual site model (vapor intrusion pathway analysis)
- [ ] Sub-consulting for specialized Chromium VI investigation

**For Property Owners (2 cases):**
- [ ] Pre-purchase Phase II ESA review that avoided $500K liability
- [ ] Property sale vapor intrusion concern resolution

**For Regulators (2-3 cases):**
- [ ] EPA vapor intrusion guidance development contribution
- [ ] State-level sewer assessment protocol adoption
- [ ] Technical training for regulatory staff

---

### 6. Downloadable Resources (PDFs) for Lead Generation
**Status:** Requires content creation + PDF design  
**Impact:** Lead magnets, establish authority, improve SEO  
**Estimated Time:** 8-12 hours total

#### Priority Resources to Create:

**For Attorneys:**
- [ ] **Expert Witness CV (PDF)** — Optimized for legal review
  - Court testimony history by case type
  - Expert qualifications matrix (topic areas)
  - Publication list with citations
  - Licensing & certifications with expiration dates
  - Sample voir dire Q&A excerpts (if permissible)
  
**For Utilities:**
- [ ] **"Sewer Vapor Intrusion Assessment Protocol" (PDF, 4-6 pages)**
  - Step-by-step investigation methodology
  - Equipment requirements (EPA Method TO-15)
  - Sampling locations and frequency
  - Data interpretation guidelines
  - Remediation trigger levels
  
- [ ] **"Sea Level Rise Impact Assessment for Wastewater Systems" (PDF, 4-6 pages)**
  - Vulnerability assessment checklist
  - Monitoring equipment recommendations (Solinst, SmartCover)
  - Bayesian network modeling overview
  - Capital planning considerations
  - SB 1 compliance requirements

**For Consultants:**
- [ ] **"Chromium VI Litigation Support Fact Sheet" (PDF, 2-3 pages)**
  - Natural occurrence vs. anthropogenic sources
  - Geochemical fingerprinting methods
  - Regulatory standards by state
  - Litigation case law summary
  
- [ ] **"Vapor Intrusion Technical Review Checklist" (PDF, 2-3 pages)**
  - Conceptual site model evaluation
  - Sewer system vs. subslab pathway differentiation
  - Building plumbing inspection criteria
  - Regulatory compliance verification

**For Regulators:**
- [ ] **"Groundwater Sampling QA/QC Checklist" (PDF, 2 pages)**
  - Field sampling protocols
  - Chain-of-custody requirements
  - Common QA/QC pitfalls
  - Data validation criteria

---

### 7. Client Testimonials & Social Proof
**Status:** Requires outreach to past clients + permission  
**Impact:** Trust building, conversion rate improvement  
**Estimated Time:** 3-5 hours (outreach + collection + design)

#### Target Testimonials (5-10 quotes):
- [ ] **Attorney testimonial** — Quote about Dr. Jacobs' effectiveness as expert witness
- [ ] **Utility manager testimonial** — Quote about sewer vapor intrusion project outcomes
- [ ] **Consultant testimonial** — Quote about sub-consulting partnership ("didn't compete")
- [ ] **Property owner testimonial** — Quote about transaction support
- [ ] **Regulatory staff testimonial** — Quote about technical training quality

#### Testimonial Format:
- Quote (1-3 sentences)
- Name & Title
- Organization (with permission) or "Anonymous [Role] at [Type of Organization]"
- Project type (without confidential details)

#### Where to Display:
- Homepage (rotating testimonial widget)
- Audience-specific landing pages (/expert-witness/, /utilities/, /for-consultants/)
- Services page
- About page (professional recognition section)

---

### 8. Property Owners Page Enhancement (Medium Priority)
**Status:** Page exists at `/real-estate/` but may need plain-language updates  
**Impact:** Small audience (10% of revenue) but high-stress/high-value inquiries  
**Estimated Time:** 2-3 hours review + updates

#### Recommended Enhancements:
- [ ] Review `/real-estate/` page for technical jargon — translate to plain language
- [ ] Add FAQ section addressing common concerns:
  - "Will contamination kill my deal?"
  - "Am I liable for contamination I didn't cause?"
  - "How long does environmental assessment take?"
  - "Can I develop on a brownfield site?"
- [ ] Add cost range information (if appropriate): "Typical Phase I review: $X-$Y" or "Free initial phone consultation"
- [ ] Emphasize real estate attorney partnerships: "We work with your legal counsel"
- [ ] Add property owner-specific case studies (see Case Study Library section above)

---

## 📊 Analytics & Measurement Setup (Ongoing)

### 9. Google Analytics Implementation
**Status:** Check if already installed; if not, install  
**Impact:** Data-driven decision making for future improvements  
**Estimated Time:** 1-2 hours setup

#### Key Metrics to Track:
- [ ] Bounce rate by page (target: <50% on homepage after audience triage)
- [ ] Page depth (target: >2.5 pages per session)
- [ ] Entry page diversity (target: 30% enter via audience-specific pages)
- [ ] Contact form completion rate (target: 5-8% on audience pages)
- [ ] Time on page for research pages (measure Practical Applications impact)

#### Goal Tracking Setup:
- [ ] Contact form submissions (by audience type if possible)
- [ ] Audience-specific page visits (/expert-witness/, /utilities/, /for-consultants/)
- [ ] Downloadable resource downloads (when PDFs are added)
- [ ] Phone number clicks (510-590-1098)
- [ ] Email link clicks (jjacobs@clearwatergroup.com)

---

## 🎯 Summary: Implementation Priority

### **Do Next (Tier 2 — High Impact)**
1. ⏳ Audience-specific contact forms (4-6 hours dev)
2. ⏳ Reorganize Services page by audience (3-4 hours)
3. ⏳ Add Practical Applications to Wetlands + Safe Water pages (4-6 hours)

### **Do When Resources Available (Tier 3 — Valuable)**
4. 📝 Case study library (10-15 hours — requires Dr. Jacobs' input)
5. 📄 Downloadable resources (8-12 hours — requires content creation)
6. 💬 Client testimonials (3-5 hours — requires outreach)

### **Ongoing Optimization**
7. 📊 Analytics & measurement (1-2 hours setup, ongoing monitoring)

---

**END OF UX AUDIT RECOMMENDATIONS**

*For UX audit details, see: `docs/AUDIENCE_IMPROVED.md`*
*Expected ROI: 40% increase in qualified inquiries, 25% reduction in bounce rate*
