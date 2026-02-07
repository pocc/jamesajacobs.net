import type { NavItem, Stat } from '../types'

export const siteTitle = 'James A. Jacobs, Ph.D.'
export const siteTagline = 'Geologist / Environmental Scientist'
export const siteDescription =
    'Forensic analysis and science-based methods for environmental site characterization, groundwater monitoring, and contamination remediation.'

export const heroStats: Stat[] = [
    { value: '40+', label: 'Years Experience' },
    { value: '5', label: 'Books Published' },
    { value: '100+', label: 'Articles Published' },
    { value: '1,000+', label: 'Projects Managed' },
    { value: '23', label: 'Expert Witness Cases' },
]

export const navItems: NavItem[] = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    {
        label: 'For Your Industry',
        to: '/services',
        children: [
            { label: 'Attorneys & Legal Teams', to: '/expert-witness' },
            { label: 'Environmental Consultants', to: '/for-consultants' },
            { label: 'Water & Sewer Utilities', to: '/utilities' },
            { label: 'Property Owners', to: '/real-estate' },
            { label: 'All Services', to: '/services' },
        ],
    },
    {
        label: 'Research',
        to: '/research',
        children: [
            { label: 'Sea Level Rise', to: '/research/sea-level-rise' },
            { label: 'Sewer Systems', to: '/research/sewer-systems' },
            { label: 'Wetlands', to: '/research/wetlands' },
            { label: 'Safe Water', to: '/research/safe-water' },
        ],
    },
    { label: 'Books', to: '/books' },
    { label: 'Teaching', to: '/teaching' },
    { label: 'Geology & Beer', to: '/geology-and-beer' },
    { label: 'Contact', to: '/contact' },
]

export const contact = {
    name: 'James A. Jacobs, P.G., C.H.G.',
    company: 'Clearwater Group',
    address: '229 Tewksbury Avenue, Point Richmond, California 94801',
    phone: '(510) 590-1098',
    email: 'jjacobs@clearwatergroup.com',
    emailUCSC: 'jaajacob@ucsc.edu',
    hours: 'Mon–Fri 9:00 AM – 5:00 PM',
}
