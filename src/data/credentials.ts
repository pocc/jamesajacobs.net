import type { Credential, Education } from '../types'

export const credentials: Credential[] = [
    { abbr: 'Ph.D.', full: 'Doctor of Philosophy in Geology' },
    { abbr: 'P.G.', full: 'Professional Geologist' },
    { abbr: 'C.H.G.', full: 'Certified Hydrogeologist' },
    { abbr: 'C.P.G.', full: 'Certified Professional Geologist' },
    { abbr: 'C.Pet.G.', full: 'Certified Petroleum Geologist' },
    { abbr: 'FGS', full: 'Fellow, Geological Society of London' },
    { abbr: 'ToR QISP', full: 'Trainer of Record, Qualified Industrial Stormwater Practitioner' },
    { abbr: 'ToR QSD/QSP', full: 'Trainer of Record, Qualified SWPPP Developer/Practitioner' },
]

export const education: Education[] = [
    {
        degree: 'Ph.D.',
        field: 'Geology',
        institution: 'University of California, Santa Cruz',
        location: 'Santa Cruz, CA',
    },
    {
        degree: 'M.A.',
        field: 'Geology',
        institution: 'University of Texas',
        location: 'Austin, TX',
    },
    {
        degree: 'B.A.',
        field: 'Geology & English',
        institution: 'Franklin and Marshall College',
        location: 'Lancaster, PA',
    },
]

export const honors = [
    'Four Fulbright Senior Specialist appointments',
    'NOAA California Sea Grant Fellowship',
    'California Ocean Protection Council Fellowship',
    'Fellow, Geological Society of London',
    'Fellow, National Ground Water Association',
    'U.S. State Department Virtual Fellow',
]
