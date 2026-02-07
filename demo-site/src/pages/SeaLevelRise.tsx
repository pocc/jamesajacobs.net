import Hero from '../components/Hero'

const references = [
    'Jacobs, J.A., 2022, Sea Level Rise and Groundwater Flooding: Atchison Village, Richmond, California, NOAA California Sea Grant.',
    'Jacobs, J.A., 2021, Emergent Groundwater and Sea Level Rise: Tamalpais Valley, Marin County, California, UCSC PhD Dissertation.',
    'Sweet, W.V., et al., 2022, Global and Regional Sea Level Rise Scenarios for the United States: Updated Mean Projections and Extreme Water Level Probabilities Along U.S. Coastlines, NOAA Technical Report NOS 01.',
    'Befus, K.M., et al., 2020, Increasing threat of coastal groundwater hazards from sea-level rise in California, Nature Climate Change, 10, 946-952.',
    'Rotzoll, K. and Fletcher, C.H., 2013, Assessment of groundwater inundation as a consequence of sea-level rise, Nature Climate Change, 3, 477-481.',
]

export default function SeaLevelRise() {
    return (
        <div>
            <Hero
                title="Sea Level Rise & Groundwater Flooding"
                subtitle="How to Measure Sea Level Rise and Groundwater Flooding"
            />

            {/* Introduction */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Introduction
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        Sea level rise (SLR) vulnerability analysis of critical wastewater
                        and transit infrastructure requires data collection at a temporal
                        and geospatial scale small enough for planning and mitigation
                        efforts. Flooding of wastewater infrastructure will increase with
                        SLR, damaging pipes, pumps and causing sewer overflows and pipe
                        backflows, creating human health exposure risks and environmental
                        damage. Regular flooding of roads causes delays and damages transit
                        infrastructure. Capital Improvement Projects (CIPs) for future
                        wastewater and transit infrastructure projects are funded over
                        30-year cycles, and the next set of projects requires detailed
                        field measurements.
                    </p>
                </div>
            </section>

            {/* Study Areas */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8 text-center">
                        Study Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <div className="w-10 h-1 bg-accent rounded mb-4" />
                            <h3 className="font-serif text-xl font-bold text-primary mb-4">
                                Area 1: Atchison Village, Richmond, California
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                A former WWII housing development, now a non-profit community
                                with 450 units. Classified as &ldquo;severely economically
                                disadvantaged&rdquo; where 27% of houses regularly have
                                emergent groundwater in crawl spaces.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Surrounded by industrial sites (railyards, chemical plants,
                                refinery) within 1.6 km. Affiliated with Rosie the Riveter
                                WWII Home Front National Historic Park.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                &ldquo;Lake Curry&rdquo; forms at the intersection of two
                                streets during heavy storms.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                            <div className="w-10 h-1 bg-accent rounded mb-4" />
                            <h3 className="font-serif text-xl font-bold text-primary mb-4">
                                Area 2: Tamalpais Valley, Marin County
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Unincorporated area in southern Marin County, becomes
                                impassable at Manzanita Interchange at U.S. Route 101.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Flooding from complex combination of high tides, heavy
                                rains, onshore winds, and subsidence.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Adjacent Fireside Apartments provides 50 affordable living
                                units for low-income seniors and families.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Question */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Research Question
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        How do we quantify, model and communicate the vulnerabilities of
                        SLR and groundwater flooding on urban wastewater and transit
                        infrastructure at a geospatial and temporal scale appropriate for
                        local planning and mitigation?
                    </p>
                </div>
            </section>

            {/* Goal */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Goal
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        Collect field data, characterize subsurface preferential pathway
                        flow, and develop a hydrogeologic model for emergent groundwater,
                        sewer, stormdrain, and road flooding.
                    </p>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Methodology
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        The research methodology uses real-time ultrasonic touchless
                        sensors, data loggers in driven well points, and comparison of
                        data using hydrogeologic and statistical models. A Bayesian
                        Network is employed for decision making.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        The approach is designed to identify cause and effect
                        relationships, develop flood prediction capabilities, and provide
                        projected SLR flood information to agencies responsible for
                        infrastructure planning and emergency response.
                    </p>
                </div>
            </section>

            {/* Sponsors & Grants */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8 text-center">
                        Sponsors &amp; Grants
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                                Corporate Sponsors
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    Solinst Canada
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    Enviro-Tech
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    SmartCover
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    Precision Enviro-Tech Analytical Laboratory
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                                Grants
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    NOAA California Sea Grant
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    UCSC Earth and Planetary Sciences J. Casey Moore Fund
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-serif text-lg font-semibold text-primary mb-4">
                                Donors
                            </h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    Mehmet Pehlivan
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    Ian Eyeington
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-accent mt-1.5 shrink-0">&bull;</span>
                                    William Aley
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* References */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        References
                    </h2>
                    <ol className="space-y-4 text-gray-700 leading-relaxed list-decimal list-inside">
                        {references.map((ref, index) => (
                            <li key={index} className="pl-2">
                                {ref}
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
        </div>
    )
}
