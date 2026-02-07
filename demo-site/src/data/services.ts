import type { Service } from '../types'

export const servicesIntro =
    'In the digital age, connections also relate to old technologies, such as sewers. Sewers connect us in a way not considered decades ago when vapor intrusion models were developed. VOCs in sewer air are free to enter buildings when vapor seals and plumbing fixtures are compromised.'

export const services: Service[] = [
    {
        title: 'Sewer Air Testing Services',
        description:
            'Individual buildings are tested after a site inspection defines plumbing layout and utility conduit locations. Air sampling can include vapor meters, sorbent tube samplers, active samplers and passive samplers to evaluate whether sewer air is entering an occupied space.',
        icon: '🧪',
    },
    {
        title: 'Legacy Sewer & Groundwater Plume Mapping',
        description:
            'Maps of sewer line conditions based on video camera inspection and smoke testing, overlaid with known soil contamination and groundwater plumes. Allows agencies to prioritize multi-million dollar sewer replacement projects.',
        icon: '🗺️',
    },
    {
        title: 'Workshops & Training',
        description:
            'Professional development workshops on vapor intrusion, sewer air assessment, and related environmental topics for regulatory agencies, utilities, and consultants.',
        icon: '🎓',
    },
    {
        title: 'Cost Allocation Studies',
        description:
            'Independent cost allocation services to address cost sharing of sewer air mitigation measures. Helps sewer agencies define responsibilities of potentially responsible parties (PRPs) for contaminants in sewer systems.',
        icon: '📊',
    },
    {
        title: 'Community Support Services',
        description:
            'Support for community groups, government agencies, and individuals dealing with vapor intrusion and indoor air quality issues, including consultation and mitigation recommendations.',
        icon: '🤝',
    },
]
