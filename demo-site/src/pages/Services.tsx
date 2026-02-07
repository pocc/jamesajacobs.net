import Hero from '../components/Hero'

const services = [
    {
        number: 1,
        title: 'Sewer Air Testing Services',
        description:
            'Individual buildings are tested after a site inspection defines plumbing layout and utility conduit locations. Air sampling includes vapor meters, sorbent tube samplers, active and passive samplers to evaluate whether sewer air is entering an occupied space. If sewer air is entering, concentrations and composition can be identified and mitigation measures implemented.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2" strokeLinecap="round" />
                <rect x="5" y="5" width="14" height="14" rx="2" />
                <path d="M9 9h6m-6 3h4m-4 3h6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: 2,
        title: 'Legacy Sewer and Groundwater Plume Intersection Mapping Studies',
        description:
            'Provides regulatory agencies, sewer agencies and others a map of sewer line conditions based on video camera inspection and smoke testing, overlain with maps of known soil contamination and groundwater plumes. Allows agencies to prioritize multi-million dollar sewer replacement capital improvement projects.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7l6 3 6-3 6 3V4l-6 3-6-3-6 3z" />
                <path d="M3 14l6 3 6-3 6 3v-7l-6 3-6-3-6 3z" />
                <path d="M3 21l6-3 6 3 6-3" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: 3,
        title: 'Workshops and Training',
        description:
            'Developed workshops and training regarding sewer air investigations and sampling methods for sewer districts, consultants or regulatory agencies.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422A12.083 12.083 0 0119 14.5c0 3.038-3.134 5.5-7 5.5s-7-2.462-7-5.5c0-1.39.616-2.67 1.64-3.672L12 14z" />
                <path d="M21 9v7" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: 4,
        title: 'Cost Allocation Studies',
        description:
            'For urban sewer agencies with legacy systems impacted by industrial contaminants. Provides independent cost allocation services to address cost sharing of sewer air mitigation measures and helps define responsibilities of potentially responsible parties (PRPs).',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20m-5-4h10M7 6h10M9 10h6m-3-4v12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="10" />
            </svg>
        ),
    },
    {
        number: 5,
        title: 'Community Support Services',
        description:
            'Sewer air contaminated with volatile industrial compounds can be an issue of environmental justice. Provides public outreach, community communication, building inspections, sewer air sampling design, and mitigation measures for low-income and minority communities near industrial areas.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

export default function Services() {
    return (
        <div>
            <Hero
                title="Sewer Air and Vapor Intrusion Testing Services"
                subtitle="Urban Connections: Legacy Sewer Systems and Groundwater Plumes"
            />

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-gray-700 leading-relaxed text-lg mb-12 max-w-4xl">
                        In the digital age, we are more connected than we ever thought possible.
                        Our connections also relate to old technologies, such as sewers. Sewers
                        connect us in a way that was not considered decades ago when vapor intrusion
                        models were developed, and consequently, VOCs in sewer air are free to enter
                        buildings when vapor seals and plumbing fixtures are compromised. Buildings
                        might contain a musty, moldy or rotten-egg odor which could indicate
                        degraded indoor air quality. Toilets which wobble even a small amount can
                        indicate a compromised vapor seal on a toilet wax ring. Water traps that dry
                        out from lack of use (basement P-traps or unused bathrooms) can allow sewer
                        air into occupied spaces. Leaking plumbing fixtures and loose or cracked
                        fittings can contribute to sewer air entering occupied spaces.
                    </p>

                    <div className="space-y-6">
                        {services.map((service) => (
                            <div
                                key={service.number}
                                className="flex gap-6 rounded-lg border border-gray-200 bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-accent"
                            >
                                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm">
                                        {service.number}
                                    </span>
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
