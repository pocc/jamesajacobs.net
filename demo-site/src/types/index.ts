export interface Book {
    title: string
    shortTitle: string
    publisher: string
    authors: string
    pages: number
    year: number
    description: string
    isbn?: string
}

export interface Publication {
    citation: string
    year: number
    category: 'peer-reviewed' | 'chapter' | 'general' | 'abstract'
}

export interface PublicationGroup {
    label: string
    category: Publication['category']
    count?: string
    items: Publication[]
}

export interface ResearchArea {
    slug: string
    title: string
    description: string
    icon: string
    status?: 'active' | 'completed' | 'ongoing'
    featured?: boolean
}

export interface Credential {
    abbr: string
    full: string
}

export interface Education {
    degree: string
    field: string
    institution: string
    location: string
}

export interface Project {
    title: string
    summary: string
    details: string
}

export interface TeachingEntry {
    title: string
    hours?: number
    students?: number
    location?: string
    year?: string | number
    description?: string
}

export interface TeachingSection {
    label: string
    items: TeachingEntry[]
}

export interface Service {
    title: string
    description: string
    icon: string
}

export interface Sponsor {
    name: string
    category: 'corporate' | 'grant' | 'donor'
}

export interface NavItem {
    label: string
    to: string
    children?: NavItem[]
}

export interface Stat {
    value: string
    label: string
}
