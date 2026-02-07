import { useState } from 'react'
import Hero from '../components/Hero'

const graduateClasses = [
    {
        institution: 'SRTMU',
        location: 'India',
        year: '2012',
        course: 'Risk-Based Subsurface Environmental Management',
        hours: 42,
        students: 45,
        coTeachers: 'Chin Man Mok, Stephen Baker',
    },
    {
        institution: 'GIS',
        location: 'India',
        year: '2012',
        course: 'Analysis and Sustainable Remediation',
        hours: 16,
        students: 30,
        coTeachers: 'Stephen Baker',
    },
    {
        institution: 'TUM',
        location: 'Germany',
        year: '2011',
        course: 'Risk-Based Subsurface Environmental Management',
        hours: 30,
        students: 18,
        coTeachers: 'Chin Man Mok, Ravi Arulanantham',
    },
    {
        institution: 'UC Berkeley Extension',
        location: '',
        year: 'Fall 2011',
        course: 'Sustainable Remediation of Soil and Groundwater',
        hours: 32,
        students: 8,
        coTeachers: '',
    },
    {
        institution: 'UC Berkeley Extension SF',
        location: '',
        year: 'Spring 2011',
        course: 'Sustainable Remediation of Soil and Groundwater',
        hours: 32,
        students: 12,
        coTeachers: '',
    },
    {
        institution: 'UWI Jamaica',
        location: '',
        year: '2004',
        course: 'Environmental Engineering: Sampling, Assessment and Remediation',
        hours: 80,
        students: 13,
        coTeachers: '',
        note: "Required for master's degree",
    },
]

const universityShortCourses = [
    {
        institution: 'Afeka College of Engineering',
        location: 'Tel Aviv, Israel',
        year: '2008',
        course: 'Remediation of Contaminated Soils and Groundwater',
        hours: 40,
        students: 28,
    },
    {
        institution: 'UWI Jamaica',
        location: '',
        year: '2004',
        course: 'Risked-Based Corrective Action',
        hours: 24,
        students: 35,
    },
    {
        institution: 'UWI Jamaica',
        location: '',
        year: '2003',
        course: 'Environmental Sampling and Remediation',
        hours: 8,
        students: 15,
    },
]

const professionalWorkshops = [
    {
        year: '2018',
        title: 'Sewer VI Workshop',
        event: 'CUPA Training Conference, Burlingame, CA',
    },
    {
        year: '2017',
        title: 'Dispersal of VOCs; Sewer Air Sampling',
        event: 'GRA Symposium, Concord, CA',
    },
    {
        year: '2016',
        title: 'Sanitary Sewer Contaminant Migration Study',
        event: 'CUPA Conference, Anaheim, CA',
    },
    {
        year: '2010',
        title: 'In-Well Stripping/Recirculation',
        event: 'San Diego, CA',
    },
    {
        year: '2009',
        title: 'Risked Based Corrective Action',
        event: 'AEHS Conference, San Diego, CA',
    },
    {
        year: '2008',
        title: 'Two-Phase Extraction Methods',
        event: 'Battelle Conference, Monterey, CA',
    },
    {
        year: '2006',
        title: 'Effects of Climate Change',
        event: 'Lorman Educational Services, San Francisco, CA',
    },
]

interface CollapsibleSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
            >
                <h2 className="font-serif text-xl md:text-2xl text-primary font-bold">
                    {title}
                </h2>
                <svg
                    className={`w-6 h-6 text-primary shrink-0 ml-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="px-6 pb-6 bg-white">
                    {children}
                </div>
            )}
        </div>
    )
}

export default function WorkshopsClasses() {
    return (
        <div>
            <Hero
                title="Workshops & Classes"
                subtitle="Technical training in environmental science, stormwater management, and remediation"
            />

            {/* Classes Offered */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4 space-y-6">
                    <CollapsibleSection title="Classes Offered" defaultOpen>
                        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                            Technical classes from stormwater training related to the stormwater
                            pollution prevention plans (QSD/QSP/QISD) are offered by Clearwater
                            Group, taught by a Trainer of Record (ToR). Other classes include the
                            8-hour OSHA Safety Training Refresher, the 8-hour OSHA Supervisor
                            Class, and the 40-hour OSHA Haz-Mat Class. Industry-specific training
                            includes environmental and safety aspects for mining operations, oil
                            and gas activities (including hydraulic fracturing) and wastewater
                            treatment processing.
                        </p>
                    </CollapsibleSection>

                    {/* Graduate Classes Taught */}
                    <CollapsibleSection title="Graduate Classes Taught" defaultOpen>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {graduateClasses.map((cls, index) => (
                                <div
                                    key={index}
                                    className="bg-surface rounded-lg border border-gray-200 p-5"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-serif text-lg font-semibold text-primary">
                                            {cls.institution}
                                            {cls.location && (
                                                <span className="text-gray-500 font-normal text-sm ml-1">
                                                    &mdash; {cls.location}
                                                </span>
                                            )}
                                        </h3>
                                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-3">
                                            {cls.year}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 font-medium mb-2">
                                        {cls.course}
                                    </p>
                                    <div className="text-sm text-gray-500 space-y-1">
                                        <p>{cls.hours} lecture hours &middot; {cls.students} students</p>
                                        {cls.coTeachers && (
                                            <p>Co-teachers: {cls.coTeachers}</p>
                                        )}
                                        {cls.note && (
                                            <p className="italic text-gray-600">{cls.note}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>

                    {/* University Short Courses */}
                    <CollapsibleSection title="University Short Courses">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {universityShortCourses.map((course, index) => (
                                <div
                                    key={index}
                                    className="bg-surface rounded-lg border border-gray-200 p-5"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="font-serif text-lg font-semibold text-primary">
                                            {course.institution}
                                        </h3>
                                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shrink-0 ml-3">
                                            {course.year}
                                        </span>
                                    </div>
                                    {course.location && (
                                        <p className="text-sm text-gray-500 mb-2">{course.location}</p>
                                    )}
                                    <p className="text-gray-700 font-medium mb-2">
                                        {course.course}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {course.hours} hours &middot; {course.students} students
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>

                    {/* Professional Workshops */}
                    <CollapsibleSection title="Professional Workshops">
                        <div className="space-y-4">
                            {professionalWorkshops.map((workshop, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full shrink-0">
                                        {workshop.year}
                                    </span>
                                    <div>
                                        <p className="text-gray-800 font-medium">
                                            {workshop.title}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {workshop.event}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CollapsibleSection>
                </div>
            </section>
        </div>
    )
}
