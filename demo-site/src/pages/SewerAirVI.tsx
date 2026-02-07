import Hero from '../components/Hero'

const processSteps = [
    {
        number: 1,
        title: 'Groundwater Infiltration',
        description:
            'VOC-impacted groundwater infiltrates into cracked and leaking sewer trunk lines.',
    },
    {
        number: 2,
        title: 'Volatilization & Migration',
        description:
            'VOCs volatilize into sewer air and migrate through the sewer system.',
    },
    {
        number: 3,
        title: 'Indoor Air Entry',
        description:
            'VOC vapors enter indoor air in houses with inadequate vapor seals (dry P-Traps, breached toilet wax rings, cracked plumbing pipes, loose fittings).',
    },
]

const buildingConditions = [
    {
        label: 'A',
        seals: 'Intact vapor seals',
        location: 'not over VOC plume',
        completed: false,
    },
    {
        label: 'B',
        seals: 'Leaky vapor seals',
        location: 'not over VOC plume',
        completed: true,
    },
    {
        label: 'C',
        seals: 'Intact vapor seals and working SSD',
        location: 'over VOC plume',
        completed: false,
    },
    {
        label: 'D',
        seals: 'Leaking vapor seals and working SSDs',
        location: 'over VOC plume',
        completed: true,
    },
]

const researchObjectives = [
    'Document PCE presence outside groundwater plume area and verify exposure vulnerability of upgradient occupants',
    'Sample indoor air in accessible buildings \u2014 basements, crawl spaces, each floor, near vapor seals',
    'Develop sewer system inspection documentation protocols',
    'Develop building inspection protocols for vapor seal evaluations',
    'Develop simple, low-cost mitigation measures for vapor seal repair',
    'Develop ranking method for sewer replacement and vapor mitigation',
]

const references = [
    'Riis et al., 2010, "Vapor Intrusion through Sewer Systems," Battelle Conference on Remediation of Chlorinated and Recalcitrant Compounds.',
    'Pennell et al., 2013, "Sewer Gas: An Indoor Air Source of PCE to Consider During Vapor Intrusion Investigations," Groundwater Monitoring & Remediation, Vol. 33, No. 3.',
    'Johnson and Ettinger, 1991, "Heuristic Model for Predicting the Intrusion Rate of Contaminant Vapors into Buildings," Environmental Science & Technology, Vol. 25, No. 8.',
    'US EPA, 2002, "OSWER Draft Guidance for Evaluating the Vapor Intrusion to Indoor Air Pathway from Groundwater and Soils."',
    'Jacobs et al., 2015, "One Alternate Exposure Pathway of VOC Vapors into Indoor Air from Legacy Sewer Systems," Hydrovisions, Groundwater Resources Association of California.',
]

export default function SewerAirVI() {
    return (
        <div>
            <Hero
                title="Sewer Air & Vapor Intrusion"
                subtitle="Evaluating Alternate Exposure Pathways of VOC Vapors into Indoor Air from Legacy Sewer-Plumbing Systems"
            />

            {/* Overview */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl">
                        Sewer system pipes are a potential alternate exposure pathway for
                        toxic sewer gases and volatile organic compounds (VOCs) like benzene
                        in gasoline, and tetrachloroethylene (PCE), a common dry cleaning
                        solvent, to migrate into indoor air. The common US EPA (2002) vapor
                        intrusion model needs to be re-evaluated and updated to include this
                        important exposure pathway, especially in buildings located
                        upgradient and outside of mapped groundwater contaminant plumes
                        containing VOCs.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-10">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {processSteps.map((step) => (
                            <div
                                key={step.number}
                                className="relative bg-white rounded-xl border border-surface-dark/50 p-6 shadow-sm"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex-shrink-0">
                                        {step.number}
                                    </span>
                                    <h3 className="font-serif text-lg font-semibold text-primary">
                                        {step.title}
                                    </h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                                {step.number < 3 && (
                                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                                        <svg
                                            className="w-6 h-6 text-accent"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Building Conditions */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-4">
                        Building Conditions
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        Whether the vapor intrusion exposure pathway is completed depends
                        on a building's vapor seal integrity and its location relative to
                        the VOC groundwater plume.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {buildingConditions.map((condition) => (
                            <div
                                key={condition.label}
                                className={`rounded-xl border-2 p-5 ${
                                    condition.completed
                                        ? 'border-red-300 bg-red-50'
                                        : 'border-green-300 bg-green-50'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary text-white font-bold text-sm">
                                        {condition.label}
                                    </span>
                                    <span
                                        className={`text-xs font-bold uppercase tracking-wide ${
                                            condition.completed
                                                ? 'text-red-700'
                                                : 'text-green-700'
                                        }`}
                                    >
                                        {condition.completed
                                            ? 'Pathway COMPLETED'
                                            : 'Pathway NOT completed'}
                                    </span>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {condition.seals}, {condition.location}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Legacy Sewer Systems */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Legacy Sewer Systems
                    </h2>
                    <div className="max-w-4xl space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>
                            Many urban sewer systems in North America are more than 100 years
                            old and well past design life. Legacy sewer mains develop cracks
                            and separations over time. Tree roots damage pipe integrity,
                            creating additional entry points for groundwater.
                        </p>
                        <p>
                            Legacy systems experience significant infiltration of groundwater
                            during the rainy season. Inflow and infiltration (I&I) during
                            significant rain events can contribute 8 to 33 times daily sewer
                            flow, overwhelming system capacity and creating conditions that
                            facilitate VOC transport.
                        </p>
                    </div>
                </div>
            </section>

            {/* Indoor Air Quality */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Indoor Air Quality
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl">
                        Indoor air quality degradation caused by vapor intrusion of VOCs
                        has been a health concern for three decades. Sewers and plumbing
                        systems have not been generally included as potential vapor conduits
                        in standard site conceptual models. This gap in the conventional
                        approach means that buildings connected to contaminated sewer
                        systems may be at risk even when they are located outside of mapped
                        groundwater contaminant plumes.
                    </p>
                </div>
            </section>

            {/* Research Objectives */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8">
                        Research Objectives
                    </h2>
                    <ol className="max-w-4xl space-y-4">
                        {researchObjectives.map((objective, index) => (
                            <li
                                key={index}
                                className="flex gap-4 items-start"
                            >
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex-shrink-0 mt-0.5">
                                    {index + 1}
                                </span>
                                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                    {objective}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Key References */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8">
                        Key References
                    </h2>
                    <ul className="max-w-4xl space-y-4">
                        {references.map((ref, index) => (
                            <li
                                key={index}
                                className="flex gap-4 items-start border-l-4 border-l-accent bg-surface rounded-r-lg px-5 py-4"
                            >
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    {ref}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
