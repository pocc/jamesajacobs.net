# Features Not Implemented (and Why)

Features from the legacy site that are intentionally **not** being migrated to the React demo, with rationale based on [AUDIENCES.md](AUDIENCES.md).

**Date:** February 7, 2026

---

## ✅ Already Resolved

### "7 Missing Projects"
**Status:** ❌ **FALSE ALARM** — All 19 projects are present in demo

Demo site has all 19 projects from CONTENT.md (verified: `grep -c "title:" demo-site/src/data/projects.ts` returns 19). The DIFFERENCES.md document was outdated.

---

## 🚫 Intentionally Not Implemented

### 1. Homepage Sidebar "Featured Focus Areas"

**Legacy had:** 7 technical topic links (Water Resources, VOCs in Sewer-Plumbing, Resource Evaluations, Basin Analysis, Water Supply Assessments, Stormwater Recovery, Wastewater Recycling)

**Why not:** **Superseded by audience-based routing cards**

**Audience Analysis:**

| Audience Priority | Legacy Approach | Demo Approach | Better For Conversion? |
|-------------------|----------------|---------------|----------------------|
| Attorneys (HIGH) | Generic "Basin Analysis" link | "Need an Expert Witness?" CTA | ✅ Demo |
| Utilities (HIGH) | Generic "VOCs" link | "Sewer Air Testing" featured | ✅ Demo |
| Property Owners (MEDIUM) | Confusing technical jargon | "Site Assessment?" CTA | ✅ Demo |

**Decision:** Audience-based navigation (demo) converts better than topic-based navigation (legacy) for a professional services site.

---

### 2. Extensive Inline Academic Citations

**Legacy had:** Dense [bracketed citations] throughout body text with 20-30 references per page

**What we DID implement:**
- ✅ 3-5 key references per research page
- ✅ Case study citations (Riis et al. 2010, Pennell et al. 2013)
- ✅ Pull quotes for methodology

**What we did NOT implement:**
- ❌ Inline [1], [2], [3] throughout paragraphs
- ❌ Exhaustive 30-citation reference lists
- ❌ Academic journal formatting

**Why limited implementation:**

| Audience | Need Full Citations? | Priority | Decision |
|----------|---------------------|----------|----------|
| Attorneys | Key refs only | HIGH | Optimize for them |
| Utilities | Methodology only | HIGH | Optimize for them |
| Property Owners | None | MEDIUM | Optimize for them |
| Academic Researchers | Yes, extensive | **LOW** | Deprioritize |

**Rationale:** 80% of audiences (and 90% of revenue) don't need journal-style citations. Key references provide credibility without hurting readability.

**Trade-off:** Academic researchers (#7 - LOW priority) sacrifice convenience for better experience for attorneys, utilities, and property owners (HIGH/MEDIUM priority).

---

## 📊 Summary

| Feature | Status | Reason |
|---------|--------|--------|
| 19 Projects | ✅ All present | Already implemented |
| Homepage Sidebar | ❌ Not implemented | Replaced with better audience routing |
| Full Citations | ⚠️ Partial (3-5 key refs) | Optimized for high-priority audiences |

**Philosophy:** Design decisions prioritize **high-revenue audiences** (attorneys, utilities, property owners) over **low-priority audiences** (academic researchers) when their needs conflict.

---

**Related:** [AUDIENCES.md](AUDIENCES.md), [DIFFERENCES.md](DIFFERENCES.md)
