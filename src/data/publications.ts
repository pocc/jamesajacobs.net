import type { PublicationGroup } from '../types'

export const publicationGroups: PublicationGroup[] = [
    {
        label: 'Chapters in Books',
        category: 'chapter',
        count: '52+ chapters',
        items: [
            { citation: '41 articles in the Water Encyclopedia, 5-Volume Set, Wiley-Interscience, Hoboken, NJ', year: 2005, category: 'chapter' },
            { citation: '9 articles in Standard Handbook of Environmental Science, Health, and Technology, McGraw-Hill, New York, NY', year: 2000, category: 'chapter' },
            { citation: '2 chapters in Handbook of Complex Environmental Remediation Problems, McGraw-Hill, New York, NY', year: 2001, category: 'chapter' },
        ],
    },
    {
        label: 'Peer-Reviewed Articles',
        category: 'peer-reviewed',
        items: [
            { citation: 'Wagh, V.M., Panaskar, D.B., Jacobs, J.A., et al., Influence of hydro-geochemical processes on groundwater quality through geostatistical techniques in Kadava River basin, Western India, Arabian Journal of Geosciences, V. 12, Issue 1, 25 pp.', year: 2019, category: 'peer-reviewed' },
            { citation: 'Mukate, S.V., Wagh, V., Panaskar, D., Jacobs, J.A., and Sawant, A., Development of new integrated water quality index (IWQI) model to evaluate the drinking suitability of water, Ecological Indicators, V. 101, June, p. 348-354.', year: 2019, category: 'peer-reviewed' },
            { citation: 'Interstate Technology and Regulatory Council (ITRC), Evaluation of Innovative Methane Detection Technologies, ITRC.org.', year: 2018, category: 'peer-reviewed' },
            { citation: 'Roghani, M., Jacobs, O.P., Miller, A., Willett, E.J., Jacobs, J.A., Occurrence of Chlorinated Volatile Organic Compounds (VOCs) in a Sanitary Sewer System: Implications for Assessing Vapor Intrusion Alternative Pathways, Science of the Total Environment, V. 616–617, p. 1149–1162.', year: 2018, category: 'peer-reviewed' },
            { citation: 'Jacobs, J.A., Jacobs, O.P., and Pennell, K.G., One Alternative Exposure Pathway of Volatile Organic Compound (VOC) Vapors from Contaminated Subsurface Environments into Indoor Air, The Professional Geologist, V. 54, N. 3, p. 28–32.', year: 2017, category: 'peer-reviewed' },
            { citation: 'Jacobs, J.A., Testa, S.M., Alpers, C.N., and Nordstrom, D.K., An Overview of Environmental Impacts and Reclamation Efforts at Iron Mountain Mine, Shasta County, California, Applied Geology in California, p. 427-446.', year: 2016, category: 'peer-reviewed' },
            { citation: 'Jacobs, J.A., and Grant Ludwig, L., Exposure to Valley Fever in California — Recent Trends and Prevention for Geologists, Construction Workers, and Related Occupations, Applied Geology in California, p. 511-523.', year: 2016, category: 'peer-reviewed' },
        ],
    },
    {
        label: 'Selected General Publications',
        category: 'general',
        items: [
            { citation: 'Baker, S. and Jacobs, J., The Government\'s New Environmental Role, Sacramento Business Journal, March 17.', year: 1997, category: 'general' },
            { citation: 'Testa, S.M., and Jacobs, J.A., The Remediation of Hazardous Wastes from Oil Well Drilling, Handbook of Complex Environmental Remediation Problems.', year: 2002, category: 'general' },
            { citation: 'Testa, S.M., and Jacobs, J.A., Oil Spills and Leaks, Handbook of Complex Environmental Remediation Problems.', year: 2002, category: 'general' },
            { citation: 'Multiple articles in Standard Encyclopedia of Environmental Science and Technology, McGraw Hill, New York, NY.', year: 2000, category: 'general' },
        ],
    },
]
