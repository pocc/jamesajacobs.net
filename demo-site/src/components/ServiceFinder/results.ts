export interface ServiceResult {
    id: string
    title: string
    description: string
    timeline: string
    cost: string
    deliverable: string
    experience: string
    cta: string
    ctaLink: string
    secondaryCta?: string
    secondaryCtaLink?: string
    caseStudy?: {
        title: string
        quote: string
    }
    highlights?: string[]
}

export const results: Record<string, ServiceResult> = {
    // Property transaction results
    phase1_assessment: {
        id: 'phase1_assessment',
        title: 'Phase I Environmental Site Assessment',
        description:
            'Due diligence investigation for property transactions. Identifies recognized environmental conditions (RECs) through records review, site inspection, and regulatory database search.',
        timeline: '2-3 weeks (expedited available)',
        cost: '$3,000-$8,000',
        deliverable: 'ASTM E1527-21 compliant report for lender/buyer',
        experience: '1,000+ site assessments completed across 9 states',
        cta: 'Schedule Consultation',
        ctaLink: '/contact',
        secondaryCta: 'Learn More',
        secondaryCtaLink: '/services',
        caseStudy: {
            title: 'Commercial Property in Oakland, CA',
            quote: 'Completed Phase I in 10 days during holiday season, allowing escrow to close on schedule with no surprises for the buyer.',
        },
        highlights: [
            'ASTM E1527-21 standard compliance',
            'P.G. licensed in 9 states',
            'Fast turnaround for urgent closings',
            'Clear, actionable reports',
        ],
    },

    phase2_investigation: {
        id: 'phase2_investigation',
        title: 'Phase II Environmental Site Investigation',
        description:
            'Subsurface investigation to determine extent and concentration of contamination identified in Phase I. Includes soil and groundwater sampling, laboratory analysis, and risk assessment.',
        timeline: '4-6 weeks',
        cost: '$8,000-$25,000 (site-dependent)',
        deliverable: 'Site characterization report with remediation recommendations',
        experience: 'Hundreds of Phase II investigations with regulatory closure expertise',
        cta: 'Schedule Consultation',
        ctaLink: '/contact',
        caseStudy: {
            title: 'Former Gas Station Site',
            quote: 'Dr. Jacobs completed Phase II investigation, designed remediation, and achieved regulatory closure within 18 months.',
        },
        highlights: [
            'Geoprobe and monitoring well installation',
            'EPA-approved analytical methods',
            'Risk-based corrective action (RBCA) expertise',
            'Regulatory agency coordination',
        ],
    },

    remediation_design: {
        id: 'remediation_design',
        title: 'Remediation Design & Implementation',
        description:
            'Cost-effective remediation strategies including in-situ chemical oxidation, bioremediation, soil vapor extraction, and monitored natural attenuation. Focused on regulatory closure.',
        timeline: 'Varies by site complexity',
        cost: 'Project-specific (consultation required)',
        deliverable: 'Remediation work plan, implementation oversight, closure documentation',
        experience: 'Dozens of sites closed using innovative remediation techniques',
        cta: 'Discuss Your Project',
        ctaLink: '/contact',
        highlights: [
            'In-situ chemical oxidation (ISCO)',
            'Bioremediation expertise',
            'Cost-effective closure strategies',
            'Regulatory compliance focus',
        ],
    },

    // Sewer emergency results
    sewer_emergency_municipal: {
        id: 'sewer_emergency_municipal',
        title: '🚨 Emergency Sewer Air Testing - Municipal Systems',
        description:
            '24-hour emergency response for municipal sewer odor complaints and H2S/VOC monitoring. Real-time data collection with regulatory compliance reporting.',
        timeline: '24-hour response, 48-hour monitoring period',
        cost: 'Contact for emergency quote',
        deliverable: 'H2S and VOC concentration report with EPA-compliant methods',
        experience:
            '23+ years as elected wastewater commissioner and TCSD board president',
        cta: 'Call Now: 510-590-1098',
        ctaLink: 'tel:510-590-1098',
        secondaryCta: 'Request Quote',
        secondaryCtaLink: '/contact',
        caseStudy: {
            title: 'Tamalpais Community Services District',
            quote: 'Dr. Jacobs identified H2S sources in 3 days during emergency response. Complaint count dropped 90% after implementing his mitigation recommendations.',
        },
        highlights: [
            '24/7 emergency availability',
            'Solinst Level Loggers (real-time data)',
            'SmartCover manhole sensors',
            'Understands municipal regulatory pressures',
        ],
    },

    sewer_emergency_industrial: {
        id: 'sewer_emergency_industrial',
        title: 'Emergency Sewer Air Testing - Industrial Facilities',
        description:
            'Fast-response sewer air quality assessment for industrial facilities with OSHA and EPA compliance requirements.',
        timeline: '24-48 hour response',
        cost: 'Site-specific (contact for quote)',
        deliverable: 'Comprehensive air quality report with safety recommendations',
        experience: 'Extensive industrial facility experience including oil & gas, manufacturing',
        cta: 'Call Now: 510-590-1098',
        ctaLink: 'tel:510-590-1098',
        highlights: [
            'OSHA compliance expertise',
            'Worker safety focus',
            'Industrial process understanding',
            'Regulatory coordination',
        ],
    },

    sewer_planning: {
        id: 'sewer_planning',
        title: 'Sewer System Planning & Capital Improvements',
        description:
            'Long-term sewer infrastructure planning, capital improvement prioritization, and rate structure analysis. Ideal for fiscal year budgeting.',
        timeline: '2-4 months',
        cost: '$10,000-$50,000 (depends on system size)',
        deliverable: 'Capital improvement plan, cost estimates, financing recommendations',
        experience: 'Led $3M sewer improvement program as TCSD board president',
        cta: 'Schedule Planning Session',
        ctaLink: '/contact',
        highlights: [
            'Capital improvement prioritization',
            'Rate structure analysis',
            'Financing options evaluation',
            'Public sector experience',
        ],
    },

    sewer_routine: {
        id: 'sewer_routine',
        title: 'Routine Sewer Air Monitoring',
        description:
            'Ongoing sewer air quality monitoring programs for proactive management and regulatory compliance.',
        timeline: 'Ongoing (quarterly or monthly)',
        cost: 'Annual contract rates available',
        deliverable: 'Quarterly monitoring reports with trend analysis',
        experience: 'Developed monitoring protocols for multiple sewer districts',
        cta: 'Request Proposal',
        ctaLink: '/contact',
    },

    // Expert witness results
    expert_witness_early: {
        id: 'expert_witness_early',
        title: 'Expert Witness Services - Early Case Evaluation',
        description:
            'Expert report and case evaluation for environmental litigation. Comprehensive analysis of technical issues, regulatory compliance, and damages.',
        timeline: '2-4 weeks for initial report',
        cost: 'Hourly rate available upon request',
        deliverable: 'Expert report with technical analysis, opinions, and supporting documentation',
        experience: '23 court cases in federal and state courts (plaintiff and defense)',
        cta: 'Schedule Case Consultation',
        ctaLink: '/contact',
        secondaryCta: 'Download CV',
        secondaryCtaLink: '/documents/james-jacobs-cv.pdf',
        highlights: [
            '23 court cases (federal & state)',
            '5 published books (authority)',
            'P.G. license in 9 states',
            '40+ years groundwater expertise',
        ],
    },

    expert_witness_discovery: {
        id: 'expert_witness_discovery',
        title: 'Expert Witness - Deposition Preparation & Testimony',
        description:
            'Deposition preparation, testimony, and discovery support. Thorough preparation ensures clear, defensible expert testimony.',
        timeline: '4-6 weeks notice for deposition',
        cost: 'Hourly rate + travel expenses',
        deliverable: 'Deposition testimony, demonstrative exhibits, case support',
        experience: 'Extensive deposition experience in complex environmental cases',
        cta: 'Discuss Deposition',
        ctaLink: '/contact',
        highlights: [
            'Clear, persuasive testimony',
            'Thorough case preparation',
            'Demonstrative exhibits',
            'Cross-examination experience',
        ],
    },

    expert_witness_trial: {
        id: 'expert_witness_trial',
        title: 'Expert Witness - Trial Testimony',
        description:
            'Court testimony services for environmental litigation. Professional, credible expert testimony with clear explanations for judges and juries.',
        timeline: '6-8 weeks notice preferred',
        cost: 'Daily rate for trial testimony',
        deliverable: 'Trial testimony, expert exhibits, jury-friendly explanations',
        experience: 'Trial testimony in state and federal courts',
        cta: 'Schedule Trial Consultation',
        ctaLink: '/contact',
        highlights: [
            'Federal & state court experience',
            'Jury-friendly explanations',
            'Professional demeanor',
            'Extensive publication record',
        ],
    },

    expert_witness_opposing: {
        id: 'expert_witness_opposing',
        title: 'Opposing Counsel Preparation',
        description:
            'Confidential consultation to identify weaknesses in opposing expert opinions. Helps attorneys prepare effective cross-examination strategies.',
        timeline: '1-2 weeks',
        cost: 'Hourly rate',
        deliverable: 'Written critique of opposing expert report with cross-examination suggestions',
        experience: 'Reviewed hundreds of expert reports as peer reviewer and opposing consultant',
        cta: 'Schedule Confidential Consultation',
        ctaLink: '/contact',
        highlights: [
            'Identifies technical weaknesses',
            'Cross-examination strategy',
            'Regulatory compliance issues',
            'Peer review expertise',
        ],
    },

    // Contamination results
    contamination_petroleum: {
        id: 'contamination_petroleum',
        title: 'Petroleum Hydrocarbon Assessment & Remediation',
        description:
            'Comprehensive services for gasoline, diesel, and oil contamination. From initial assessment through regulatory closure.',
        timeline: 'Varies by site',
        cost: 'Project-specific',
        deliverable: 'Assessment, remediation design, closure documentation',
        experience: 'Hundreds of petroleum sites assessed and closed over 40+ years',
        cta: 'Discuss Your Site',
        ctaLink: '/contact',
        highlights: [
            'UST removal oversight',
            'Free product recovery',
            'LUST Cleanup Fund experience',
            'Regulatory closure focus',
        ],
    },

    contamination_solvents: {
        id: 'contamination_solvents',
        title: 'Chlorinated Solvent Investigation & Remediation',
        description:
            'Specialized services for PCE, TCE, and other chlorinated solvent contamination. Vapor intrusion assessment and mitigation.',
        timeline: 'Project-specific',
        cost: 'Consultation required',
        deliverable: 'Site characterization, vapor intrusion assessment, remediation design',
        experience: 'Extensive vapor intrusion and solvent plume work',
        cta: 'Schedule Consultation',
        ctaLink: '/contact',
        highlights: [
            'Vapor intrusion expertise',
            'Plume delineation',
            'In-situ remediation',
            'Risk assessment',
        ],
    },

    contamination_metals: {
        id: 'contamination_metals',
        title: 'Heavy Metals Assessment (Chromium, Lead, Arsenic)',
        description:
            'Expert assessment and remediation for chromium VI, lead, arsenic, and other heavy metals. Author of Chromium(VI) Handbook.',
        timeline: 'Project-specific',
        cost: 'Consultation required',
        deliverable: 'Site characterization, risk assessment, remediation design',
        experience:
            'Author of Chromium(VI) Handbook (CRC Press) - recognized authority',
        cta: 'Discuss Heavy Metals Project',
        ctaLink: '/contact',
        secondaryCta: 'View Publications',
        secondaryCtaLink: '/books',
        highlights: [
            'Chromium(VI) Handbook author',
            'Geofixation expertise',
            'Naturally occurring metals',
            'Risk-based approaches',
        ],
    },

    contamination_perchlorate: {
        id: 'contamination_perchlorate',
        title: 'Perchlorate & Explosives Contamination',
        description:
            'Specialized assessment and remediation for perchlorate and explosive compounds at former military and industrial sites.',
        timeline: 'Project-specific',
        cost: 'Consultation required',
        deliverable: 'Site investigation, remediation pilot studies, full-scale design',
        experience: 'Pilot studies and remediation design for perchlorate sites',
        cta: 'Discuss Specialized Needs',
        ctaLink: '/contact',
    },

    contamination_general: {
        id: 'contamination_general',
        title: 'Contamination Site Assessment',
        description:
            'Comprehensive environmental site assessment for sites with unknown or multiple contaminants. Includes investigation, risk assessment, and remediation planning.',
        timeline: 'Varies by complexity',
        cost: 'Project-specific',
        deliverable: 'Site characterization report with remediation recommendations',
        experience: '1,000+ projects across all major contaminant types',
        cta: 'Schedule Consultation',
        ctaLink: '/contact',
    },

    // Consulting results
    consulting_forensic: {
        id: 'consulting_forensic',
        title: 'Forensic Geology & Source Identification',
        description:
            'Contaminant source identification, age dating, and forensic analysis for allocation disputes and litigation support.',
        timeline: '4-8 weeks',
        cost: 'Project-specific',
        deliverable: 'Forensic analysis report with source identification and timeline',
        experience: 'Extensive forensic work for cost allocation and litigation',
        cta: 'Discuss Forensic Needs',
        ctaLink: '/contact',
    },

    consulting_regulatory: {
        id: 'consulting_regulatory',
        title: 'Regulatory Compliance Support',
        description:
            'Assistance with EPA, state, and local environmental regulatory compliance. Work plan preparation, agency negotiation, consent order compliance.',
        timeline: 'Ongoing',
        cost: 'Hourly or monthly retainer',
        deliverable: 'Regulatory submittals, agency coordination, compliance documentation',
        experience: 'Decades of regulatory agency interaction at federal, state, and local levels',
        cta: 'Request Regulatory Support',
        ctaLink: '/contact',
    },

    consulting_training: {
        id: 'consulting_training',
        title: 'Training & Workshops',
        description:
            'Custom training on environmental topics including vapor intrusion, sewer air testing, groundwater contamination, and remediation technologies.',
        timeline: 'Flexible scheduling',
        cost: 'Day rate + travel',
        deliverable: 'Customized training materials, hands-on workshops',
        experience:
            '4× Fulbright Scholar, taught at universities in India, Germany, Jamaica',
        cta: 'Request Training Proposal',
        ctaLink: '/contact',
        secondaryCta: 'View Teaching Experience',
        secondaryCtaLink: '/teaching',
    },

    consulting_peer_review: {
        id: 'consulting_peer_review',
        title: 'Peer Review of Technical Reports',
        description:
            'Independent peer review of environmental reports, work plans, and remediation designs. Quality assurance for technical accuracy.',
        timeline: '1-2 weeks',
        cost: 'Fixed fee or hourly',
        deliverable: 'Peer review memorandum with technical comments',
        experience: 'Reviewed hundreds of reports for agencies and private parties',
        cta: 'Request Peer Review',
        ctaLink: '/contact',
    },

    // General consultation
    general_consultation: {
        id: 'general_consultation',
        title: 'Environmental Consultation',
        description:
            'General environmental consulting services. Schedule a consultation to discuss your specific needs and receive expert guidance.',
        timeline: 'Flexible',
        cost: 'Consultation required',
        deliverable: 'Varies by project',
        experience: '40+ years solving complex environmental problems',
        cta: 'Schedule Consultation',
        ctaLink: '/contact',
    },
}
