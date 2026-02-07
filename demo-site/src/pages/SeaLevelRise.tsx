import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import { sponsors } from '../data/sponsors'

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
                subtitle="Documenting local sea level rise and climate change using real-time sensors in coastal California communities."
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
                            <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                                This project documents local sea level rise and climate change
                                using real-time flood sensors, groundwater data loggers, and
                                storm drain/sewer sensors. The focus is on evaluating flood
                                vulnerabilities in low-elevation coastal communities, with
                                particular attention to wastewater and transit infrastructure.
                            </p>
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
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Low-income community with an aging wastewater collection system.
                                    Approximately 450 residential units served by gravity sewer with
                                    limited pump stations.
                                </p>
                            </div>
                            <div className="bg-surface rounded-xl p-6 border border-surface-dark/50">
                                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                                    Tamalpais Valley, Marin County
                                </h3>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Manzanita Interchange (Highway 101-Route 1 junction) in southern Marin.
                                    Focus on evaluating flood vulnerabilities related to wastewater
                                    and transit infrastructure.
                                </p>
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
                                How much does groundwater flooding contribute to sanitary sewer
                                overflows and property flooding in low-elevation coastal communities?
                            </p>

                            <h3 className="font-serif text-xl font-semibold mt-10 mb-4">Goal</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Quantify the relationship between sea level rise, shallow groundwater,
                                and increased frequency of sewer overflows and surface flooding.
                            </p>

                            <h3 className="font-serif text-xl font-semibold mt-10 mb-4">Methodology</h3>
                            <ul className="space-y-2 text-text-secondary">
                                {[
                                    'Deploy groundwater monitoring wells and data loggers',
                                    'Install sewer flow monitors at critical infrastructure points',
                                    'Collect tidal and precipitation data',
                                    'Correlate high-tide and storm events with groundwater levels',
                                    'Map vulnerable areas using GIS and LiDAR elevation data',
                                ].map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span className="text-accent flex-shrink-0">&#x25CF;</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
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
