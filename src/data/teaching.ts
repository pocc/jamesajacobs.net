import type { TeachingSection } from '../types'

export const teachingSections: TeachingSection[] = [
    {
        label: 'Graduate Classes Taught',
        items: [
            {
                title: 'Risk-Based Subsurface Environmental Management and Sustainable Remediation',
                hours: 42,
                students: 45,
                year: 2012,
                description: 'School of Earth Sciences, SRTM University, Nanded, India. Co-teachers: Chin Man Mok and Stephen Baker.',
            },
            {
                title: 'Analysis and Sustainable Remediation of Environmental Resources',
                hours: 16,
                students: 30,
                year: 2012,
                description: 'Department of Geology, Government Institute of Science, Aurangabad, India. Co-teacher: Stephen Baker.',
            },
            {
                title: 'Risk-Based Subsurface Environmental Management',
                hours: 30,
                students: 18,
                year: 2011,
                description: 'Engineering Department, Technical University of Munich, Germany. Co-teachers: Chin Man Mok and Ravi Arulanantham.',
            },
            {
                title: 'Sustainable Remediation of Soil and Groundwater (X-451)',
                hours: 32,
                students: 8,
                year: 2011,
                description: 'UC Berkeley Extension, Berkeley Campus, California. 7-session graduate class.',
            },
            {
                title: 'Sustainable Remediation of Soil and Groundwater (X-451)',
                hours: 32,
                students: 12,
                year: 2011,
                description: 'UC Berkeley Extension, San Francisco Campus, California. 7-session graduate class.',
            },
            {
                title: 'Environmental Engineering: Sampling, Assessment and Remediation (EM643)',
                hours: 80,
                students: 13,
                year: 2004,
                description: 'University of the West Indies, Mona Campus, Jamaica. Required class for M.Sc. in Contaminant Hydrogeology, Environmental Science and Risk Management.',
            },
        ],
    },
    {
        label: 'University Short Courses',
        items: [
            {
                title: 'Remediation of Contaminated Soils and Groundwater: The California Experience',
                hours: 40,
                students: 28,
                year: 2008,
                description: 'Afeka College of Engineering, Tel Aviv, Israel. Co-teachers: Ravi Arulanantham, Chin Man Mok, and Ami Adini.',
            },
            {
                title: 'Risk-Based Corrective Action, Risk Assessment, and In-Situ Remediation',
                hours: 24,
                students: 35,
                year: 2004,
                description: 'Petroleum Corporation of Jamaica and UWI Geology Department, University of the West Indies, Kingston, Jamaica. Co-teachers: Ravi Arulanantham and Roger Brewer.',
            },
            {
                title: 'Environmental Sampling and Remediation Workshop',
                hours: 8,
                students: 15,
                year: 2003,
                description: 'Geology Department, University of the West Indies, Mona Campus, Kingston, Jamaica.',
            },
        ],
    },
    {
        label: 'Professional Workshops & Training',
        items: [
            {
                title: 'Stormwater Pollution Prevention (QSD/QSP/QISD)',
                description: 'Clearwater Group training as Trainer of Record (ToR) for stormwater pollution prevention plans.',
            },
            {
                title: 'OSHA Safety Training',
                description: '8-hour OSHA Safety Training Refresher, 8-hour OSHA Supervisor Class, and 40-hour OSHA Haz-Mat Class.',
            },
            {
                title: 'Mining Operations Environmental & Safety',
                description: 'Industry-specific training covering environmental and safety aspects for mining operations.',
            },
            {
                title: 'Oil & Gas Operations (Including Hydraulic Fracturing)',
                description: 'Environmental assessment and safety training for oil and gas activities.',
            },
            {
                title: 'Sewer Vapor Intrusion & VOC Assessment',
                description: 'Invited presentations on sewer vapor intrusion, VOC dispersal, sanitary sewer contaminant migration, and indoor air quality.',
            },
            {
                title: 'In-Well Stripping & Two-Phase Extraction',
                description: 'Workshop on in-well stripping and two-phase extraction methods for groundwater remediation.',
            },
            {
                title: 'Climate Change Effects on Infrastructure',
                description: 'Presentations on climate change effects on development and infrastructure, including sea level rise impacts.',
            },
        ],
    },
]

export const teachingStats = [
    { value: '6+', label: 'Graduate Courses' },
    { value: '300+', label: 'Students Taught' },
    { value: '5+', label: 'Countries' },
]

export const teachingOverview =
    'Graduate-level courses and professional workshops in environmental science, hydrogeology, and remediation taught at universities in the U.S., India, Israel, Germany, and Jamaica. Also offers stormwater, OSHA, and industry-specific training through Clearwater Group.'
