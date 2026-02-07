import type { ResearchArea } from '../types'

export const researchAreas: ResearchArea[] = [
    {
        slug: 'sea-level-rise',
        title: 'Sea Level Rise & Groundwater Flooding',
        description:
            'Documenting local sea level rise and climate change using real-time flood sensors, groundwater data loggers, and storm drain/sewer sensors in coastal California communities.',
        icon: '🌊',
        status: 'active',
        featured: true,
    },
    {
        slug: 'sewer-systems',
        title: 'Sewer Systems & Vapor Intrusion',
        description:
            'Investigating sewer overflow prediction, vapor intrusion pathways through sewer systems, and indoor air quality impacts from VOCs in aging urban sewer infrastructure.',
        icon: '🔬',
        status: 'active',
    },
    {
        slug: 'wetlands',
        title: 'Constructed Wetlands',
        description:
            'Developing the wastewater treatment farm concept — converting waste streams into useful products including treated water, biogas, compost, and habitat.',
        icon: '🌿',
        status: 'ongoing',
    },
    {
        slug: 'safe-water',
        title: 'Safe Water in Rural India',
        description:
            'Fulbright Senior Specialist project focused on safe drinking water quality assessment in the Kadava River sub-basin, Nashik, Maharashtra.',
        icon: '💧',
        status: 'completed',
    },
]

export const geologyAndBeer = {
    slug: 'geology-and-beer',
    title: 'Geology & Beer',
    description:
        'Exploring how geological terroir shapes water chemistry and brewing traditions around the world — from Roman aqueducts to modern craft breweries.',
    icon: '🍺',
}
