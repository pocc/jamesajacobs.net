import type { TeachingSection } from '../types'

export const teachingSections: TeachingSection[] = [
    {
        label: 'Graduate Classes Taught',
        items: [
            { title: 'Environmental Geology', hours: 45, students: 22 },
            { title: 'Hydrogeology', hours: 45, students: 18 },
            { title: 'Environmental Site Characterization', hours: 30, students: 15 },
            { title: 'Contaminant Transport', hours: 30, students: 12 },
            { title: 'Environmental Remediation', hours: 45, students: 20 },
            { title: 'Groundwater Modeling', hours: 30, students: 10 },
        ],
    },
    {
        label: 'University Short Courses',
        items: [
            { title: 'Environmental Geology Short Course', description: 'Intensive overview of environmental geology principles and field methods at various universities.' },
            { title: 'Hydrogeology Field Methods', description: 'Field-based intensive course covering well installation, aquifer testing, and data interpretation.' },
            { title: 'Applied Geochemistry', description: 'Laboratory and field methods for environmental geochemistry analysis.' },
        ],
    },
    {
        label: 'Professional Workshops',
        items: [
            { title: 'AIPG National Conference Workshop', year: 2018, description: 'Workshop on vapor intrusion and sewer air assessment methodologies.' },
            { title: 'International Workshops — India & Israel', year: 2017, description: 'Fulbright-sponsored workshops on hydrogeology and environmental assessment.' },
            { title: 'Applied Geology in California Symposium', year: 2016, description: 'Symposium on applied geological methods in California environmental practice.' },
            { title: 'Environmental Remediation Training', year: 2014, description: 'Professional development training on current remediation technologies.' },
            { title: 'Hydrogeology Field Methods Workshop', year: 2012, description: 'Hands-on field training for practicing hydrogeologists.' },
            { title: 'Contaminated Site Investigation Course', year: 2010, description: 'Comprehensive course on contaminated site investigation methodologies.' },
            { title: 'Environmental Compliance Workshop', year: 2006, description: 'Workshop on environmental regulatory compliance and reporting requirements.' },
        ],
    },
]

export const teachingStats = [
    { value: '6+', label: 'Graduate Courses' },
    { value: '300+', label: 'Students Taught' },
    { value: '5+', label: 'Countries' },
]

export const teachingOverview =
    'Graduate-level courses and professional workshops in environmental science, hydrogeology, and environmental remediation. Taught in the U.S., India, Israel, Germany, and Jamaica.'
