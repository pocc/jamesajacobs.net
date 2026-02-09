export interface AudienceCard {
    icon: string
    title: string
    subtitle: string
    description: string
    cta: string
    link: string
    bgColor: string
}

export const audienceCards: AudienceCard[] = [
    {
        icon: '⚖️',
        title: 'Attorneys & Legal Teams',
        subtitle: 'Expert Witness Services',
        description:
            '23 court cases | Licensed P.G. in 9 states | Expert testimony in groundwater contamination and vapor intrusion disputes',
        cta: 'Schedule Confidential Case Review',
        link: '/expert-witness',
        bgColor: 'from-slate-700 to-slate-900',
    },
    {
        icon: '🏢',
        title: 'Utilities & Municipalities',
        subtitle: 'Sewer Air Testing & Infrastructure',
        description:
            '23 years as elected sewer commissioner | Sewer air testing | Legacy infrastructure mapping | Rate study support',
        cta: 'Schedule Utility Consultation',
        link: '/utilities',
        bgColor: 'from-blue-700 to-blue-900',
    },
    {
        icon: '🏗️',
        title: 'Property Owners & Developers',
        subtitle: 'Environmental Due Diligence',
        description:
            'Phase I & II ESAs | Fast turnaround for transactions | Lender-approved reports | 40+ years assessment experience',
        cta: 'Get Site Assessment Quote',
        link: '/real-estate',
        bgColor: 'from-green-700 to-green-900',
    },
    {
        icon: '🔬',
        title: 'Regulatory Agencies',
        subtitle: 'Consulting & Training',
        description:
            'Protocol development | Staff training workshops | Vapor intrusion assessment | EPA guidance compliance',
        cta: 'Request Agency Consultation',
        link: '/services',
        bgColor: 'from-purple-700 to-purple-900',
    },
    {
        icon: '🎓',
        title: 'Researchers & Academics',
        subtitle: 'Research Collaboration',
        description:
            '100+ peer-reviewed publications | Open to co-authorship | Guest lectures | International teaching experience',
        cta: 'Discuss Research Collaboration',
        link: '/research',
        bgColor: 'from-amber-700 to-amber-900',
    },
    {
        icon: '🛢️',
        title: 'Oil & Gas Industry',
        subtitle: 'Hydrocarbon Contamination',
        description:
            'Author: Oil Spills & Hydraulic Fracturing books | 100+ oil field Phase I ESAs | Remediation & resource valuation',
        cta: 'Discuss Your Project',
        link: '/oil-gas',
        bgColor: 'from-orange-700 to-orange-900',
    },
]
