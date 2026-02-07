import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import { sponsors } from '../data/sponsors'

const methodology = [
    'Compile pre-development ecosystem, urban development history, and land subsidence data; obtain historic maps, aerial photographs, utility maps, geologic/soil maps, GIS agency maps, and topographic maps to identify sensor/logger locations.',
    'Locate preferential pathways for groundwater (buried stream channels, leaky sewers, utility trenches) on GIS maps.',
    'Install multiparameter loggers (water elevation, conductivity, temperature, pH) in driven piezometers in utility trenches, preferential pathways, and background fill (control) soil.',
    'Position weather stations and touchless ultrasonic meters in sewer/stormdrain manholes; install tide and stream gauges.',
    'Initiate public outreach and maintain data collection operations.',
    'Train local volunteers to assist with equipment malfunctions and document flooding with notes and photographs.',
    'Manage incoming data.',
    'Provide quarterly progress reports for public meetings and distribution on websites, newsletters, and social media.',
    'Review data, perform statistical analysis, develop Bayesian Network for predicting 2050, 2070, and 2100 SLR projections.',
    'Prepare summary reports for technical publications, government forums, and public meetings.',
]

const references = [
    'Jacobs, J.A. (2020). Groundwater flooding and sea level rise: Infrastructure vulnerability assessment in coastal California communities. Journal of Coastal Research.',
    'Befus, K.M., et al. (2020). Increasing groundwater flood risk in coastal zones. Nature Climate Change.',
    'Hummel, M.A., et al. (2018). Sea level rise impacts on wastewater treatment systems along the U.S. coasts. Earth\'s Future.',
    'Rotzoll, K., and Fletcher, C.H. (2013). Assessment of groundwater inundation as a consequence of sea-level rise. Nature Climate Change.',
    'Habel, S., et al. (2017). Development of a model to map sea-level rise impacts to groundwater. Journal of Hydrology.',
]

export default function SeaLevelRise() {
    return (
        <div>
            <HeroPage
                title="Sea Level Rise & Groundwater Flooding"
                subtitle="Documenting local sea level rise and climate change using real-time flood sensors, groundwater data loggers, and storm drain/sewer sensors in coastal California communities."
                breadcrumbs={[
                    { label: 'Home', to: '/' },
                    { label: 'Research', to: '/research' },
                    { label: 'Sea Level Rise' },
                ]}
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Overview</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
                                <p>
                                    Sea level rise (SLR) vulnerability analysis of critical wastewater
                                    and transit infrastructure requires data collection at a temporal and
                                    geospatial scale small enough for planning and mitigation efforts.
                                    Flooding of wastewater infrastructure will increase with SLR, damaging
                                    pipes, pumps and causing sewer overflows and pipe backflows, creating
                                    human health exposure risks and environmental damage.
                                </p>
                                <p>
                                    Capital Improvement Projects (CIPs) for future wastewater and transit
                                    infrastructure are funded over 30-year cycles, and the next set of
                                    projects requires detailed field measurements to calculate projected
                                    SLR and groundwater flooding. Many general articles erroneously
                                    equate small increases in SLR with the equivalent topographic land
                                    contours.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Study Areas</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-surface rounded-xl p-6 border border-surface-dark/50">
                                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                                    Atchison Village, Richmond, CA
                                </h3>
                                <div className="text-text-secondary text-sm leading-relaxed space-y-3">
                                    <p>
                                        A former WWII housing development, now a non-profit community
                                        with 450 units. Atchison Village is &ldquo;severely economically
                                        disadvantaged,&rdquo; where 27% of the houses regularly have
                                        emergent groundwater in crawl spaces.
                                    </p>
                                    <p>
                                        Surrounded by industrial sites (railyards, chemical plants, and a
                                        refinery) within 1.6 km. Affiliated with Rosie the Riveter WWII
                                        Home Front National Historic Park. &ldquo;Lake Curry&rdquo; forms
                                        at the intersection of two streets during heavy storms, preventing
                                        transit through the area.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-surface rounded-xl p-6 border border-surface-dark/50">
                                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                                    Tamalpais Valley, Marin County
                                </h3>
                                <div className="text-text-secondary text-sm leading-relaxed space-y-3">
                                    <p>
                                        An unincorporated area in southern Marin County that becomes
                                        impassable at the Manzanita Interchange at U.S. Route 101.
                                        Flooding results from a complex combination of high tides, heavy
                                        rains, onshore winds, and subsidence.
                                    </p>
                                    <p>
                                        The adjacent Fireside Apartments provides 50 affordable living
                                        units for low-income seniors, families, and individuals with
                                        special needs, including those transitioning from homelessness,
                                        reflecting the &ldquo;multigenerational and diverse socioeconomic
                                        character of the community.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Research Question</h2>
                            <SectionDivider />
                            <p className="mt-6 text-text-secondary leading-relaxed text-lg italic">
                                How do we quantify, model and communicate the vulnerabilities of SLR
                                and groundwater flooding on urban wastewater and transit infrastructure
                                at a geospatial and temporal scale appropriate for local planning
                                and mitigation?
                            </p>

                            <h3 className="font-serif text-xl font-semibold mt-10 mb-4">Goal</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Collect field data, characterize subsurface preferential pathway flow,
                                and develop a hydrogeologic model for emergent groundwater, sewer,
                                stormdrain, and road flooding to better understand the short-term
                                impacts of SLR. Provide real-time advance warnings to agencies and
                                residents of impending sewer overflows and road flooding and to
                                identify sources of floodwaters.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* 10-Task Methodology */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Methodology</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed max-w-3xl mb-8">
                            Effective measurement and management of SLR, groundwater flooding,
                            and stormwater runoff requires quantification of various flood factors
                            of the urban coastal water balance, such as precipitation,
                            evapotranspiration, sewer flow, stormwater flow, surface flow, tidal
                            elevations, barometric pressure, wind direction, and other factors.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-4xl">
                            {methodology.map((task, i) => (
                                <div key={i} className="flex gap-3 bg-surface rounded-lg border border-surface-dark/50 p-4">
                                    <span className="text-accent-dark font-mono font-bold text-sm flex-shrink-0 mt-0.5">
                                        {i + 1}.
                                    </span>
                                    <p className="text-text-secondary text-sm leading-relaxed">{task}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Field Instrumentation */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Field Instrumentation</h2>
                            <SectionDivider />
                            <p className="mt-6 text-text-secondary leading-relaxed">
                                Since 2022, 20 permanent Solinst Levelogger sensors have been
                                installed across 16 wells in three study areas: Manzanita
                                (7 groundwater wells + 3 surface water locations), Tamalpais
                                Valley (4 groundwater wells + 1 surface water location), and
                                Atchison Village (2 monitoring wells + 3 existing irrigation wells).
                                Sensors record every 15 minutes with Barologgers providing
                                hourly barometric compensation.
                            </p>
                            <p className="mt-4 text-text-secondary leading-relaxed">
                                During Water Year 2023, data collection coincided with 15
                                atmospheric rivers and 27 days exceeding tidal trigger height,
                                providing extensive flood event documentation.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Broader Impacts */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Broader Impacts</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                                <p>
                                    The methodology, approach, and tools developed during this research
                                    will allow wastewater and transit agencies in California and
                                    nationwide to make better choices on 30-year infrastructure plans
                                    where small-scale flood outcomes and SLR cannot be predicted with
                                    certainty.
                                </p>
                                <p>
                                    A public agency project leadership team includes the executive
                                    director of the San Francisco Bay Area clean water agency, the
                                    mayor of the City of Richmond, the Atchison Village board of
                                    directors, the supervisor for southern Marin County, the general
                                    manager of the local sewer district (TCSD), the National Park
                                    Service, and others. Public agency websites and jamesajacobs.net
                                    will share real-time water elevation and flood warnings with
                                    their communities.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Sponsors &amp; Grants</h2>
                        <SectionDivider />
                        <div className="flex flex-wrap gap-3 mt-6">
                            {sponsors.map((s) => (
                                <span
                                    key={s.name}
                                    className={`inline-block rounded-lg border px-4 py-2 text-sm font-medium ${
                                        s.category === 'grant'
                                            ? 'bg-accent/10 border-accent/30 text-accent-dark'
                                            : s.category === 'corporate'
                                              ? 'bg-surface border-surface-dark text-text-secondary'
                                              : 'bg-slate/10 border-slate/30 text-slate'
                                    }`}
                                >
                                    {s.name}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Key References</h2>
                        <SectionDivider />
                        <ol className="mt-6 space-y-3 max-w-3xl list-decimal list-inside">
                            {references.map((ref, i) => (
                                <li key={i} className="text-sm text-text-secondary leading-relaxed">{ref}</li>
                            ))}
                        </ol>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Link to="/research" className="inline-block text-accent-dark hover:text-primary font-semibold transition-colors no-underline">
                        &larr; Back to all research
                    </Link>
                </div>
            </section>
        </div>
    )
}
