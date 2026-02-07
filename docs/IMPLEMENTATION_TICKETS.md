# Implementation Tickets - James Jacobs Website

**Generated From:** [AUDIENCE_IMPROVED.md](AUDIENCE_IMPROVED.md)
**Date:** February 7, 2026
**Purpose:** Actionable development tickets for audience-driven UX improvements

---

## 🎫 Ticket Template

Each ticket includes:
- **ID:** Unique identifier
- **Title:** Brief description
- **Priority:** Critical / High / Medium / Low
- **Effort:** Hours estimated
- **Dependencies:** Prerequisite tickets
- **Acceptance Criteria:** Definition of done
- **Files to Modify:** Specific file paths
- **Testing:** How to verify

---

## 🔴 PHASE 1: Quick Wins (Critical Priority)

### Ticket #001: Add "Who I Help" Audience Selector to Homepage

**Priority:** Critical
**Effort:** 3-4 hours
**Dependencies:** None

**Description:**
Add a prominent audience self-selection section to the homepage with 6 cards (Attorneys, Utilities, Regulators, Consultants, Property Owners, Researchers) that route visitors to relevant content.

**Acceptance Criteria:**
- [ ] 6 audience cards displayed in responsive grid (3 cols desktop, 2 cols tablet, 1 col mobile)
- [ ] Each card has icon, headline, subhead, and CTA button
- [ ] Cards link to relevant pages/sections:
  - Attorneys → `/services/expert-witness` (create in Ticket #002)
  - Utilities → `/industries/utilities` (create in Ticket #006)
  - Regulators → Services page #regulatory-consulting section
  - Consultants → Services page #specialized-support section
  - Property Owners → `/industries/real-estate` (create in Ticket #007)
  - Researchers → `/research`
- [ ] Section appears prominently above or below hero section
- [ ] Mobile-responsive with touch-friendly buttons
- [ ] Accessible (keyboard navigation, ARIA labels)

**Files to Modify:**
- `demo-site/src/pages/Home.tsx` - Add new section after hero
- `demo-site/src/components/AudienceSelector.tsx` - New component (create)
- `demo-site/src/styles/globals.css` - Add any custom styles if needed

**Design Specs:**
```
Card Layout (Desktop):
┌──────────────────────────────────────────────────────┐
│  How Can I Help?                                     │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐               │
│  │ ⚖️      │  │ 🚰      │  │ 🏛️      │               │
│  │Attorney│  │Utility │  │Regulator│               │
│  │Expert  │  │Sewer   │  │Technical│               │
│  │Witness │  │Testing │  │Support  │               │
│  │[CTA]→  │  │[CTA]→  │  │[CTA]→  │               │
│  └────────┘  └────────┘  └────────┘               │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐               │
│  │ 🔬      │  │ 🏢      │  │ 🎓      │               │
│  │Consult │  │Property│  │Research│               │
│  │Support │  │Buyer   │  │Collab  │               │
│  │[CTA]→  │  │[CTA]→  │  │[CTA]→  │               │
│  └────────┘  └────────┘  └────────┘               │
└──────────────────────────────────────────────────────┘
```

**Testing:**
- [ ] Test on mobile, tablet, desktop
- [ ] Verify all 6 links work correctly
- [ ] Test keyboard navigation (Tab through cards)
- [ ] Screen reader test (VoiceOver/NVDA)
- [ ] Visual regression test vs. design mockup

**Reference:**
See [AUDIENCE_IMPROVED.md - Section: Cross-Cutting Recommendations #1](AUDIENCE_IMPROVED.md#1-homepage-hero-redesign)

---

### Ticket #002: Create Dedicated Expert Witness Service Page

**Priority:** Critical
**Effort:** 4-5 hours
**Dependencies:** None

**Description:**
Create a new dedicated page at `/services/expert-witness` for attorney and insurance company audiences, featuring case experience, credentials, and engagement process.

**Acceptance Criteria:**
- [ ] New route `/services/expert-witness` accessible via navigation
- [ ] Page includes all sections from design spec:
  - [ ] Hero with headline, 3 key stats (23 cases, 9 states, 40+ years)
  - [ ] Qualifications section (9-state P.G. map, case breakdown, publications)
  - [ ] Case Types & Testimony Areas list
  - [ ] "Why Attorneys Choose" section
  - [ ] Engagement Process (4 steps)
  - [ ] Representative Case Examples (3 anonymized cases)
  - [ ] Contact section with specialized CTA
- [ ] Page is mobile-responsive
- [ ] SEO meta tags optimized for "environmental expert witness" keywords
- [ ] Page loads in <2 seconds

**Files to Modify:**
- `demo-site/src/pages/ExpertWitness.tsx` - New page (create)
- `demo-site/src/App.tsx` - Add new route
- `demo-site/src/data/expertWitness.ts` - New data file for case types, examples (create)
- `demo-site/src/components/Header.tsx` - Add "Expert Witness" to main nav (optional)

**Content Required:**
- [ ] 9-state P.G. licensing list (CA, NV, AZ, OR, WA, ID, UT, NM, TX)
- [ ] Case type breakdown (Federal: 5, State: 12, Arbitration: 6)
- [ ] 3 anonymized case examples (from Dr. Jacobs)
- [ ] Engagement process steps (verify with Dr. Jacobs)
- [ ] Attorney testimonials (if available - 2-3 quotes)

**Design Specs:**
```
Hero Section:
┌─────────────────────────────────────────────────────┐
│ Expert Witness & Litigation Support                 │
│ Licensed P.G. in 9 States | 23 Cases | 40+ Years   │
│                                                     │
│ [Schedule Confidential Consultation →]             │
└─────────────────────────────────────────────────────┘

Qualifications Section:
┌─────────────────────────────────────────────────────┐
│ Qualifications at a Glance                          │
│                                                     │
│ ✓ 9-State P.G. Licensing: [Map Visual]            │
│ ✓ 23 Court Cases:                                  │
│   • Federal: 5 cases                               │
│   • State: 12 cases                                │
│   • Arbitration: 6 cases                           │
│ ✓ 100+ Peer-Reviewed Publications                  │
│ ✓ 40+ Years Technical Experience                   │
└─────────────────────────────────────────────────────┘
```

**Testing:**
- [ ] Test all internal links
- [ ] Verify CTA buttons work (contact form opens with "Expert Witness" pre-selected)
- [ ] Mobile responsiveness check
- [ ] SEO check (title, meta description, h1 tags)
- [ ] Page speed test (<2s load time)

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 1: Attorneys](AUDIENCE_IMPROVED.md#-persona-1-attorneys--legal-teams)

---

### Ticket #003: Enhance Contact Form with Audience Routing

**Priority:** High
**Effort:** 2 hours
**Dependencies:** None

**Description:**
Update the contact form to include an audience-specific inquiry type dropdown that helps route inquiries appropriately and captures audience data for analytics.

**Acceptance Criteria:**
- [ ] Add "How can I help?" dropdown with 9 options:
  - Expert Witness / Litigation Support
  - Sewer Air Testing (Utility/Municipality)
  - Environmental Site Assessment (Property)
  - Oil & Gas Consulting
  - Regulatory Consulting / Agency Training
  - Research Collaboration
  - Community Support / Resident Inquiry
  - Speaking / Workshop Request
  - Other
- [ ] Dropdown is required field (must select an option)
- [ ] Form validation prevents submission without selection
- [ ] Selected inquiry type is included in email submission
- [ ] Update response time note based on inquiry type (urgent for legal cases)

**Files to Modify:**
- `demo-site/src/components/ContactForm.tsx` - Add dropdown field
- `demo-site/src/components/ContactForm.tsx` - Update form validation

**Design Specs:**
```
Contact Form Enhancement:

Name: [____________]
Email: [____________]
Phone: [____________] (optional)

How can I help?* [Dropdown ▼]
  ├─ Expert Witness / Litigation Support
  ├─ Sewer Air Testing (Utility/Municipality)
  ├─ Environmental Site Assessment (Property)
  ├─ Oil & Gas Consulting
  ├─ Regulatory Consulting / Agency Training
  ├─ Research Collaboration
  ├─ Community Support / Resident Inquiry
  ├─ Speaking / Workshop Request
  └─ Other

Subject: [____________]
Message: [____________]

Response Time Note:
• Urgent legal cases: 24-hour response
• General inquiries: 1-2 business days

[Send Message]
```

**Testing:**
- [ ] Test form submission with each dropdown option
- [ ] Verify email includes selected inquiry type
- [ ] Test validation (form should not submit if dropdown is unselected)
- [ ] Mobile test (dropdown should be touch-friendly)
- [ ] Test with screen reader

**Reference:**
See [AUDIENCE_IMPROVED.md - Section: Cross-Cutting Recommendations #5](AUDIENCE_IMPROVED.md#5-contact-form-enhancement)

---

### Ticket #004: Add Trust Signals Footer to All Pages

**Priority:** High
**Effort:** 2 hours
**Dependencies:** None

**Description:**
Add a consistent trust signals banner above the footer on all pages, displaying key credentials and achievements to reinforce credibility throughout the site.

**Acceptance Criteria:**
- [ ] Trust signals banner appears on every page above footer
- [ ] Displays 6 key credentials:
  - Licensed P.G. in 9 States
  - 40+ Years Experience
  - 1,000+ Projects Completed
  - 23 Court Cases as Expert Witness
  - 100+ Peer-Reviewed Publications
  - 5 Books Published
- [ ] Banner includes "Contact for Consultation →" CTA
- [ ] Banner is responsive (stacks vertically on mobile)
- [ ] Consistent styling with site theme

**Files to Modify:**
- `demo-site/src/components/Footer.tsx` - Add trust signals section
- `demo-site/src/components/TrustSignals.tsx` - New component (create, optional)
- `demo-site/src/styles/globals.css` - Add banner styles

**Design Specs:**
```
Trust Signals Banner:
┌──────────────────────────────────────────────────────┐
│ ✓ Licensed P.G. in 9 States                         │
│ ✓ 40+ Years Experience                               │
│ ✓ 1,000+ Projects Completed                         │
│ ✓ 23 Court Cases as Expert Witness                  │
│ ✓ 100+ Peer-Reviewed Publications                   │
│ ✓ 5 Books Published                                  │
│                                                      │
│ [Contact for Consultation →]                         │
└──────────────────────────────────────────────────────┘
```

**Testing:**
- [ ] Verify banner appears on all pages (Home, About, Services, Research, etc.)
- [ ] Test CTA button links to contact page
- [ ] Mobile responsiveness check
- [ ] Ensure consistent styling across pages

**Reference:**
See [AUDIENCE_IMPROVED.md - Section: Cross-Cutting Recommendations #4](AUDIENCE_IMPROVED.md#4-trust-signals---add-to-every-page)

---

### Ticket #005: Add "Industries Served" Tags to Services Page

**Priority:** High
**Effort:** 2-3 hours
**Dependencies:** None

**Description:**
Add industry/audience tags to each service on the Services page to help visitors quickly identify which services are relevant to them.

**Acceptance Criteria:**
- [ ] Each service card displays relevant industry tags as badges
- [ ] Tags include: Legal, Utilities, Real Estate, Oil & Gas, Regulatory, Research, Insurance, etc.
- [ ] Tags are color-coded or styled consistently
- [ ] Clicking a tag filters/highlights relevant services (optional enhancement)
- [ ] Mobile-responsive tag layout

**Files to Modify:**
- `demo-site/src/pages/Services.tsx` - Add tags to service cards
- `demo-site/src/data/services.ts` - Add `industries` array to each service
- `demo-site/src/components/ServiceCard.tsx` - Render industry badges

**Design Specs:**
```
Service Card Enhancement:

┌────────────────────────────────────────┐
│ ⚖️ Expert Witness & Litigation Support │
│                                        │
│ [Legal] [Insurance] [Oil & Gas]       │
│                                        │
│ Forensic analysis and expert          │
│ testimony for environmental cases...   │
│                                        │
│ [Learn More →]                         │
└────────────────────────────────────────┘
```

**Data Update Example:**
```typescript
// demo-site/src/data/services.ts
{
  title: "Expert Witness & Litigation Support",
  industries: ["Legal", "Insurance", "Oil & Gas"],
  // ... rest of service data
}
```

**Testing:**
- [ ] Verify all 7 services have appropriate industry tags
- [ ] Tags display correctly on desktop and mobile
- [ ] Tag colors/styling are consistent with design system
- [ ] (If filtering added) Test filter functionality

**Reference:**
See [AUDIENCE_IMPROVED.md - Section: Cross-Cutting Recommendations #2](AUDIENCE_IMPROVED.md#2-services-page-reorganization)

---

## 🟠 PHASE 2: Audience Landing Pages (High Priority)

### Ticket #006: Create Utilities Industry Landing Page

**Priority:** High
**Effort:** 5-6 hours
**Dependencies:** Ticket #001 (homepage selector needs link target)

**Description:**
Create a dedicated landing page at `/industries/utilities` for sewer and water utility audiences, emphasizing Dr. Jacobs' 23-year wastewater commissioner experience.

**Acceptance Criteria:**
- [ ] New route `/industries/utilities` accessible
- [ ] Page includes all sections:
  - [ ] Hero: "Serving Sewer & Water Utilities Since 1990"
  - [ ] "Understanding Your Challenges" section
  - [ ] Services for Utilities (4 services with timelines/costs)
  - [ ] Utility Experience Highlights (Tamalpais CSD board service)
  - [ ] 2 Case Studies (anonymized)
  - [ ] "Why Utilities Choose Dr. Jacobs" section
  - [ ] Contact section with utility-specific CTA
- [ ] Mobile-responsive
- [ ] SEO optimized for "sewer air testing," "utility consulting" keywords

**Files to Modify:**
- `demo-site/src/pages/industries/Utilities.tsx` - New page (create)
- `demo-site/src/App.tsx` - Add route
- `demo-site/src/data/utilities.ts` - New data file (create)
- `demo-site/src/components/Header.tsx` - Add "Industries" dropdown to nav

**Content Required:**
- [ ] Tamalpais CSD board service details (years, accomplishments)
- [ ] 2 utility case studies (request from Dr. Jacobs)
- [ ] Service pricing ranges (if available)
- [ ] Utility testimonials (if available)

**Testing:**
- [ ] Test all internal links and CTAs
- [ ] Mobile responsiveness
- [ ] SEO check
- [ ] Link from homepage "Utilities" card works

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 3: Sewer & Water Utilities](AUDIENCE_IMPROVED.md#-persona-3-sewer--water-utilities)

---

### Ticket #007: Create Real Estate Industry Landing Page

**Priority:** High
**Effort:** 4-5 hours
**Dependencies:** Ticket #001 (homepage selector needs link target)

**Description:**
Create `/industries/real-estate` page for property owners and developers, focusing on Phase I/II ESA services with plain-language explanations.

**Acceptance Criteria:**
- [ ] New route `/industries/real-estate` accessible
- [ ] Page includes:
  - [ ] Hero: "Environmental Due Diligence for Property Transactions"
  - [ ] "Why You Need an ESA" section
  - [ ] Services for Property Transactions (Phase I, Phase II, Remediation Planning)
  - [ ] "Why Choose Dr. Jacobs" (lender-approved, fast turnaround)
  - [ ] Process section (5 steps)
  - [ ] FAQ section (5-8 questions)
  - [ ] Contact with property-specific CTA
- [ ] Plain-language throughout (avoid jargon)
- [ ] Timeline and cost guidance included

**Files to Modify:**
- `demo-site/src/pages/industries/RealEstate.tsx` - New page (create)
- `demo-site/src/App.tsx` - Add route
- `demo-site/src/data/realEstate.ts` - New data file (create)

**Content Required:**
- [ ] Phase I/II ESA explainers (plain language)
- [ ] Typical timelines (Phase I: 2-3 weeks, Phase II: 4-6 weeks)
- [ ] Cost range guidance (if available)
- [ ] Property transaction case study (1-2 examples)

**Testing:**
- [ ] Readability test (should be understandable to non-technical audience)
- [ ] Link from homepage works
- [ ] All CTAs link to contact form with "Property Owner" pre-selected

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 5: Property Owners & Real Estate Developers](AUDIENCE_IMPROVED.md#-persona-5-property-owners--real-estate-developers)

---

### Ticket #008: Create Oil & Gas Industry Landing Page

**Priority:** Medium
**Effort:** 5-6 hours
**Dependencies:** None

**Description:**
Create `/industries/oil-gas` page highlighting petroleum contamination expertise and books (Oil Spills and Gas Leaks, Hydraulic Fracturing).

**Acceptance Criteria:**
- [ ] New route `/industries/oil-gas` accessible
- [ ] Page includes:
  - [ ] Hero: "Oil & Gas Environmental Services"
  - [ ] Industry Expertise section (40+ years, book authorship)
  - [ ] Services for O&G Operators (5 services)
  - [ ] Oil Field Project Experience
  - [ ] Books & Publications section (display covers, link to Books page)
  - [ ] 2 Case Studies
  - [ ] Contact with O&G-specific CTA
- [ ] Industry-specific terminology (hydrocarbon contamination, well decommissioning, etc.)

**Files to Modify:**
- `demo-site/src/pages/industries/OilGas.tsx` - New page (create)
- `demo-site/src/App.tsx` - Add route
- `demo-site/src/data/oilGas.ts` - New data file (create)

**Content Required:**
- [ ] Oil field project count (100+ Phase I ESAs from projects data)
- [ ] 2 case studies (from existing projects: bioremediation, in-situ oxidation)
- [ ] Book descriptions (can pull from existing Books page)

**Testing:**
- [ ] Verify book covers display correctly
- [ ] Links to Books page work
- [ ] Industry terminology is appropriate for O&G professionals

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 6: Oil & Gas Industry](AUDIENCE_IMPROVED.md#audience-6-oil--gas-industry)

---

### Ticket #009: Enhance Teaching Page with Professional Speaking Section

**Priority:** Medium
**Effort:** 3-4 hours
**Dependencies:** None

**Description:**
Split Teaching page into two sections: (1) Academic Teaching (current content), (2) Professional Speaking & Workshops (new section for conference organizers and agencies).

**Acceptance Criteria:**
- [ ] Teaching page reorganized with clear sections:
  - [ ] Academic Teaching (universities, Fulbright - existing content)
  - [ ] Professional Speaking & Workshops (new section)
- [ ] New section includes:
  - [ ] Available speaking topics (4-5 topics with formats)
  - [ ] Past speaking engagements list
  - [ ] Format options (keynote, technical session, workshops)
  - [ ] CTA: "Inquire About Speaking Availability"
- [ ] Workshop curriculum samples (if available)

**Files to Modify:**
- `demo-site/src/pages/Teaching.tsx` - Reorganize and add section
- `demo-site/src/data/teaching.ts` - Add speaking/workshop data

**Content Required:**
- [ ] Speaking topics list (4-5 topics)
- [ ] Past conference list (AIPG, NGWA, GSA, etc.)
- [ ] Workshop descriptions (if available)
- [ ] Conference organizer testimonials (if available)

**Testing:**
- [ ] Verify both sections are clearly separated
- [ ] CTA links to contact form with "Speaking Request" pre-selected
- [ ] Mobile layout works for both sections

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 9: Conference Organizers](AUDIENCE_IMPROVED.md#audience-9-conference-organizers--event-planners)

---

### Ticket #010: Create Community Support Page Enhancement

**Priority:** Medium
**Effort:** 3-4 hours
**Dependencies:** None

**Description:**
Enhance existing Community Support service or create dedicated page emphasizing public service background and plain-language help for residents.

**Acceptance Criteria:**
- [ ] Page/section emphasizes:
  - [ ] 23 years as elected sewer commissioner
  - [ ] Plain-language explanations
  - [ ] Pro bono / reduced-rate mention
  - [ ] Community education services
- [ ] Includes plain-English explainers:
  - [ ] "What is Vapor Intrusion?"
  - [ ] "What is H2S / Sewer Gas?"
  - [ ] "How to Read an Environmental Report"
- [ ] CTA: "Get Free Initial Consultation"

**Files to Modify:**
- `demo-site/src/pages/CommunitySupport.tsx` - New page or enhance Services section
- `demo-site/src/data/community.ts` - New data file (create)

**Content Required:**
- [ ] Plain-language explainers (3-5 topics)
- [ ] Community service history details
- [ ] Pro bono policy statement (if available)

**Testing:**
- [ ] Readability check (plain language for non-technical audience)
- [ ] CTA links to contact form
- [ ] Mobile-friendly

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 8: Community Groups & Residents](AUDIENCE_IMPROVED.md#audience-8-community-groups--concerned-residents)

---

## 🟡 PHASE 3: Content Depth (Medium Priority)

### Ticket #011: Add Client Testimonials Component

**Priority:** Medium
**Effort:** 3-4 hours
**Dependencies:** Content collection (external)

**Description:**
Create a reusable Testimonials component and add to relevant pages (Services, About, Expert Witness).

**Acceptance Criteria:**
- [ ] Testimonials component created (displays quotes with attribution)
- [ ] Component added to:
  - [ ] Services page
  - [ ] About page
  - [ ] Expert Witness page (when created - Ticket #002)
- [ ] 3-5 testimonials collected from different audience types:
  - [ ] Attorney quote
  - [ ] Utility manager quote
  - [ ] Academic colleague quote
  - [ ] (Optional) Property buyer quote
  - [ ] (Optional) Conference organizer quote
- [ ] Testimonials display with proper formatting (quote, name, title, organization)
- [ ] Mobile-responsive layout

**Files to Modify:**
- `demo-site/src/components/Testimonials.tsx` - New component (create)
- `demo-site/src/data/testimonials.ts` - New data file (create)
- `demo-site/src/pages/Services.tsx` - Add testimonials section
- `demo-site/src/pages/About.tsx` - Add testimonials section
- `demo-site/src/pages/ExpertWitness.tsx` - Add testimonials section

**Content Required (External):**
- [ ] Request testimonials from 5-8 past clients (email campaign)
- [ ] Get permission to use names/organizations
- [ ] Format testimonials (2-3 sentences each)

**Design Specs:**
```
Testimonials Section:

┌──────────────────────────────────────────────────────┐
│ What Clients Say                                     │
│                                                      │
│ "Dr. Jacobs' expert testimony was instrumental in   │
│  achieving a favorable outcome in our groundwater   │
│  contamination case."                               │
│                                                      │
│  — Environmental Litigator, [Law Firm]             │
├──────────────────────────────────────────────────────┤
│ "His practical approach to sewer air testing       │
│  helped us prioritize $8M in capital improvements."│
│                                                      │
│  — Utility Manager, [Municipality]                 │
└──────────────────────────────────────────────────────┘
```

**Testing:**
- [ ] Verify testimonials display on all target pages
- [ ] Mobile layout test
- [ ] Ensure proper attribution formatting

**Reference:**
See [AUDIENCE_IMPROVED.md - Section: Cross-Cutting Recommendations #7](AUDIENCE_IMPROVED.md#7-proof-points---add-throughout-site)

---

### Ticket #012: Create Downloadable Resources (PDFs)

**Priority:** Medium
**Effort:** 6-8 hours (design + PDF generation)
**Dependencies:** Content finalization

**Description:**
Create downloadable one-pagers for key audiences to support lead generation and provide value.

**Acceptance Criteria:**
- [ ] 5 downloadable PDFs created:
  - [ ] "Expert Witness Services Overview" (attorneys)
  - [ ] "Utility Services Overview" (utilities)
  - [ ] "Property Buyer's Guide to Environmental Assessments" (real estate)
  - [ ] "Speaker Information Sheet" (conference organizers)
  - [ ] "Dr. Jacobs CV / Resume" (general)
- [ ] PDFs professionally designed (consistent branding)
- [ ] Download buttons added to relevant pages
- [ ] File names are SEO-friendly (e.g., `jacobs-expert-witness-services.pdf`)
- [ ] PDFs stored in `/public/downloads/` directory

**Files to Modify:**
- `demo-site/public/downloads/` - Add PDF files
- Relevant pages - Add download buttons/links

**Content Required:**
- [ ] Content for each PDF (1-2 pages each)
- [ ] Design template (consistent with site branding)
- [ ] Dr. Jacobs CV/resume content

**Testing:**
- [ ] Test download buttons on all browsers
- [ ] Verify PDFs open correctly
- [ ] Check file sizes (<2MB each)
- [ ] Mobile download test

**Reference:**
See [AUDIENCE_IMPROVED.md - Phase 3: Content Depth](AUDIENCE_IMPROVED.md#phase-3-content-depth-4-6-weeks)

---

### Ticket #013: Add Case Study Examples to Services

**Priority:** Medium
**Effort:** 4-5 hours
**Dependencies:** Content approval from Dr. Jacobs

**Description:**
Add 3-5 anonymized case studies to Services page and audience landing pages to demonstrate quantifiable results.

**Acceptance Criteria:**
- [ ] 3-5 case studies created with format: Challenge → Solution → Result
- [ ] Case studies added to:
  - [ ] Services page (general examples)
  - [ ] Expert Witness page (litigation examples)
  - [ ] Utilities page (utility project examples)
  - [ ] Oil & Gas page (O&G project examples)
- [ ] Case studies include quantifiable outcomes when possible
- [ ] All client information anonymized (no identifiable details)

**Files to Modify:**
- `demo-site/src/data/caseStudies.ts` - New data file (create)
- `demo-site/src/components/CaseStudy.tsx` - New component (create)
- Relevant pages - Add case study sections

**Content Required (from Dr. Jacobs):**
- [ ] 3-5 project descriptions (anonymized)
- [ ] Quantifiable results (e.g., "85% reduction in complaints," "8,000 ppm → 350 ppm")
- [ ] Approval for publication

**Design Specs:**
```
Case Study Format:

┌──────────────────────────────────────────────────────┐
│ Case Study: Sewer Air Testing for Municipal Utility │
│                                                      │
│ Challenge:                                           │
│ • 40+ H2S complaints per year                       │
│ • Unknown source locations                          │
│ • Limited budget for repairs                        │
│                                                      │
│ Solution:                                            │
│ • System-wide screening with portable analyzers    │
│ • Identified 12 hotspot locations                   │
│ • Prioritized repairs using risk-based approach    │
│                                                      │
│ Result:                                              │
│ • 85% reduction in complaints                       │
│ • $500K savings vs. system-wide replacement        │
│ • Board approved 5-year maintenance plan            │
└──────────────────────────────────────────────────────┘
```

**Testing:**
- [ ] Verify case studies display correctly
- [ ] Ensure no identifiable client information
- [ ] Mobile layout test

**Reference:**
See [AUDIENCE_IMPROVED.md - Section: Cross-Cutting Recommendations #7](AUDIENCE_IMPROVED.md#7-proof-points---add-throughout-site)

---

### Ticket #014: Create Full Publications Database Page

**Priority:** Medium
**Effort:** 6-8 hours
**Dependencies:** Publication data collection

**Description:**
Create a comprehensive publications page with searchable/filterable list of all 100+ articles and 5 books.

**Acceptance Criteria:**
- [ ] New route `/publications` created (or enhance existing Books page)
- [ ] Publications organized by:
  - [ ] Recent Publications (2020-present)
  - [ ] Publication Categories (Vapor Intrusion, Groundwater, Remediation, etc.)
  - [ ] Books (5 books with covers)
- [ ] Filters implemented:
  - [ ] By topic
  - [ ] By year
  - [ ] By publication type (journal, conference, book)
- [ ] Each publication includes:
  - [ ] Title, authors, journal, year
  - [ ] DOI link or PDF link (if available)
  - [ ] Citation count (from Google Scholar)
- [ ] Google Scholar profile link
- [ ] "Open to collaboration" CTA

**Files to Modify:**
- `demo-site/src/pages/Publications.tsx` - New page or enhance Books page
- `demo-site/src/data/publications.ts` - Comprehensive publication data
- `demo-site/src/App.tsx` - Add route if new page

**Content Required:**
- [ ] Full publication list (100+ articles) - request from Dr. Jacobs or scrape from Google Scholar
- [ ] Google Scholar profile URL
- [ ] Publication categories defined

**Testing:**
- [ ] Test filters (by topic, year, type)
- [ ] Verify all external links work (DOIs, PDFs)
- [ ] Mobile-responsive table/list
- [ ] Search functionality (if implemented)

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 4: Environmental Consultants](AUDIENCE_IMPROVED.md#-persona-4-environmental-consultants--engineers)

---

### Ticket #015: Add Plain-Language Explainers for Community Audience

**Priority:** Low-Medium
**Effort:** 4-5 hours
**Dependencies:** None

**Description:**
Create 5-8 plain-language explainer articles for community/resident audience to help them understand environmental issues.

**Acceptance Criteria:**
- [ ] 5-8 explainer articles created:
  - [ ] "What is Vapor Intrusion? (and should I worry?)"
  - [ ] "What is H2S / Sewer Gas?"
  - [ ] "How to Read an Environmental Report"
  - [ ] "What to Do If You Smell Sewer Gas"
  - [ ] "Phase I vs. Phase II ESA: What's the Difference?"
  - [ ] (Optional) "Your Rights as a Resident Near Contamination"
- [ ] Articles use plain language (avoid jargon)
- [ ] Articles added to:
  - [ ] Community Support page/section
  - [ ] FAQ page (if created)
  - [ ] Blog/resources section (if created)
- [ ] Articles include "Contact for Help" CTA

**Files to Modify:**
- `demo-site/src/pages/Resources.tsx` - New page for explainers (create)
- `demo-site/src/data/explainers.ts` - Explainer content (create)

**Content Required:**
- [ ] 5-8 explainer articles (500-800 words each)
- [ ] Authored by Dr. Jacobs or ghostwritten for approval

**Testing:**
- [ ] Readability test (Flesch-Kincaid grade level <10)
- [ ] Links work from Community Support page
- [ ] Mobile-friendly article layout

**Reference:**
See [AUDIENCE_IMPROVED.md - Audience 8: Community Groups](AUDIENCE_IMPROVED.md#content-gaps-to-fill-14)

---

## 🔵 PHASE 4: Advanced Features (Low Priority)

### Ticket #016: Implement Analytics Tracking by Audience

**Priority:** Low
**Effort:** 3-4 hours
**Dependencies:** Ticket #003 (contact form with audience dropdown)

**Description:**
Set up analytics to track which audience segments are visiting, converting, and engaging with content.

**Acceptance Criteria:**
- [ ] Analytics platform set up (Cloudflare Web Analytics, Google Analytics 4, or other)
- [ ] Custom events tracked:
  - [ ] Audience card clicks (from homepage)
  - [ ] Contact form submissions by inquiry type
  - [ ] PDF downloads by resource type
  - [ ] CTA clicks by audience
- [ ] Dashboard/reporting configured to view audience segment performance
- [ ] Privacy-compliant (GDPR/CCPA if applicable)

**Files to Modify:**
- `demo-site/src/utils/analytics.ts` - Analytics utility functions (create)
- Relevant components - Add tracking calls

**Testing:**
- [ ] Verify events fire correctly in analytics dashboard
- [ ] Test with ad blockers enabled
- [ ] Privacy policy updated (if needed)

**Reference:**
See [AUDIENCE_IMPROVED.md - Phase 4: Advanced Features](AUDIENCE_IMPROVED.md#phase-4-advanced-features-2-3-months)

---

### Ticket #017: Create Blog/News Section

**Priority:** Low
**Effort:** 8-10 hours
**Dependencies:** None

**Description:**
Add a blog/news section for thought leadership and SEO benefits.

**Acceptance Criteria:**
- [ ] Blog section created at `/blog` route
- [ ] 3-5 initial blog posts published
- [ ] Blog post template created
- [ ] RSS feed generated
- [ ] Blog posts categorized by audience/topic
- [ ] SEO optimized (meta tags, structured data)

**Files to Modify:**
- `demo-site/src/pages/Blog.tsx` - Blog index page (create)
- `demo-site/src/pages/BlogPost.tsx` - Individual post page (create)
- `demo-site/src/data/blogPosts.ts` - Blog post data (create)

**Content Required:**
- [ ] 3-5 initial blog posts (from Dr. Jacobs or ghostwritten)
- [ ] Blog post topics identified

**Testing:**
- [ ] Blog index displays all posts
- [ ] Individual post pages load correctly
- [ ] SEO check for blog posts
- [ ] RSS feed validates

**Reference:**
See [AUDIENCE_IMPROVED.md - Phase 4: Advanced Features](AUDIENCE_IMPROVED.md#phase-4-advanced-features-2-3-months)

---

### Ticket #018: Add Video Content (Explainers)

**Priority:** Low
**Effort:** 15-20 hours (video production + integration)
**Dependencies:** Video production (external)

**Description:**
Create and integrate 2-3 minute explainer videos for key topics to increase engagement.

**Acceptance Criteria:**
- [ ] 2-3 explainer videos produced:
  - [ ] "What is Vapor Intrusion?" (3 min)
  - [ ] "Environmental Site Assessment Process" (4 min)
  - [ ] "Dr. Jacobs Introduction" (2 min)
- [ ] Videos hosted (YouTube, Vimeo, or self-hosted)
- [ ] Videos embedded on relevant pages
- [ ] Video thumbnails/posters designed
- [ ] Captions/transcripts added (accessibility)

**Files to Modify:**
- Relevant pages - Embed video components

**Content Required (External):**
- [ ] Video scripts (approve with Dr. Jacobs)
- [ ] Video production (hire videographer or DIY)
- [ ] Video editing and post-production

**Testing:**
- [ ] Videos play on all browsers and devices
- [ ] Captions display correctly
- [ ] Video load time acceptable (<5s to start)

**Reference:**
See [AUDIENCE_IMPROVED.md - Phase 4: Advanced Features](AUDIENCE_IMPROVED.md#video-content-5-10-hours)

---

## 📊 Ticket Summary by Priority

### Critical (Phase 1) - 5 tickets, ~15-18 hours
1. #001 - Homepage Audience Selector (3-4h)
2. #002 - Expert Witness Page (4-5h)
3. #003 - Contact Form Enhancement (2h)
4. #004 - Trust Signals Footer (2h)
5. #005 - Industries Served Tags (2-3h)

### High (Phase 2) - 5 tickets, ~25-31 hours
6. #006 - Utilities Landing Page (5-6h)
7. #007 - Real Estate Landing Page (4-5h)
8. #008 - Oil & Gas Landing Page (5-6h)
9. #009 - Teaching Page Enhancement (3-4h)
10. #010 - Community Support Page (3-4h)

### Medium (Phase 3) - 5 tickets, ~28-37 hours
11. #011 - Testimonials Component (3-4h)
12. #012 - Downloadable Resources (6-8h)
13. #013 - Case Studies (4-5h)
14. #014 - Publications Database (6-8h)
15. #015 - Plain-Language Explainers (4-5h)

### Low (Phase 4) - 3 tickets, ~26-34 hours
16. #016 - Analytics Tracking (3-4h)
17. #017 - Blog Section (8-10h)
18. #018 - Video Content (15-20h)

**Total Estimated Effort:** 94-120 hours across all phases

---

## 🚀 Next Steps

1. **Review tickets** with Dr. Jacobs for content requirements
2. **Prioritize** based on business goals (likely start with Phase 1)
3. **Assign tickets** to development team or work sequentially
4. **Track progress** in project management tool (GitHub Issues, Jira, etc.)
5. **Test thoroughly** after each phase
6. **Measure impact** using analytics (conversion rates, lead quality)

---

**Document Version:** 1.0
**Created:** February 7, 2026
**Related Documents:**
- [AUDIENCE_IMPROVED.md](AUDIENCE_IMPROVED.md) - UX analysis source
- [WIREFRAMES.md](WIREFRAMES.md) - Visual mockups (to be created)
- [QUICK_START_IMPLEMENTATION.md](QUICK_START_IMPLEMENTATION.md) - Top 5 priorities (to be created)
