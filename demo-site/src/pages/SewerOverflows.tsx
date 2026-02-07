import Hero from '../components/Hero'

const downloads = [
    { label: 'BACWA Abstract', href: '#' },
    { label: 'Predicting Emergent Groundwater', href: '#' },
    { label: 'BACWA Updated Presentation', href: '#' },
]

export default function SewerOverflows() {
    return (
        <div>
            <Hero
                title="Sewer Overflow Prediction"
                subtitle="Prediction of Sanitary Sewer Overflow Conditions"
            />

            {/* Main Content */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                        Sanitary Sewer Overflows (SSOs) are caused by a variety of factors
                        and may increase with sea level rise, extreme storms, and
                        groundwater inundation, creating health risks and environmental
                        hazards. Evidence of groundwater inundation and sea level rise is
                        apparent from the Tamalpais Valley (Mill Valley), California
                        extremely high tides (commonly called &ldquo;King Tides&rdquo;).
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        Shallow groundwater, sinking surface elevation, and complex
                        subsurface hydrogeologic conditions in urban coastal environments
                        have created similar conditions in dozens of communities built on
                        fill material on former wetlands along San Francisco Bay.
                    </p>
                </div>
            </section>

            {/* Proposed Research */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Proposed Research
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                        This research pilot project proposes using a network of surveyed
                        piezometers with battery-powered data loggers having remote
                        telemetry system (RTS) connections to provide real-time groundwater
                        elevation, conductivity, and temperature data in preferential
                        pathways, such as utility trench corridors, leaky sewer pipes, and
                        buried stream channels. Data is compared to background areas,
                        stilling wells in creek and bay locations.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-6">
                        RTS sewage elevation and flow instruments are proposed for sewer
                        monitoring in manholes. RTS rain gauge data is used for
                        precipitation measurements. Data is integrated for real-time
                        notifications at specific thresholds to alert decision makers and
                        emergency workers.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        A secondary use of the monitoring network is to identify the
                        specific cause of potential SSOs for rapid mitigation strategy.
                    </p>
                </div>
            </section>

            {/* Downloads */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8 text-center">
                        Downloads
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {downloads.map((download) => (
                            <a
                                key={download.label}
                                href={download.href}
                                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                            >
                                <svg
                                    className="w-5 h-5 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                                {download.label}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
