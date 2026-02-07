import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'

const buildingConditions = [
    { label: 'High Risk', sewer: 'Defects', plumbing: 'Defects', risk: 'Complete pathway — both sewer system and building plumbing compromised.', color: 'border-red-400 bg-red-50' },
    { label: 'Moderate Risk', sewer: 'Intact', plumbing: 'Defects', risk: 'Incomplete pathway — building has plumbing issues but sewer line is intact.', color: 'border-amber-400 bg-amber-50' },
    { label: 'Lower Risk', sewer: 'Defects', plumbing: 'Intact', risk: 'Incomplete pathway — contaminated sewer air present but plumbing provides barrier.', color: 'border-yellow-400 bg-yellow-50' },
    { label: 'Minimal Risk', sewer: 'Intact', plumbing: 'Intact', risk: 'No pathway — both systems functioning properly.', color: 'border-green-400 bg-green-50' },
]

const researchObjectives = [
    'Characterize VOC concentrations in sewer air at contaminated sites',
    'Map preferential vapor migration pathways through sewer networks',
    'Evaluate building vulnerability based on plumbing condition',
    'Develop screening tools for regulatory agencies',
    'Assess effectiveness of mitigation measures',
    'Create guidance documents for building inspectors and regulators',
]

const references = [
    'Roghani, M., Jacobs, O.P., Miller, A., Willett, E.J., Jacobs, J.A., 2018, Occurrence of Chlorinated VOCs in a Sanitary Sewer System, Science of the Total Environment, V. 616–617, p. 1149–1162.',
    'Jacobs, J.A., Jacobs, O.P., and Pennell, K.G., 2017, One Alternative Exposure Pathway of VOC Vapors, The Professional Geologist, V. 54, N. 3, p. 28–32.',
]

export default function SewerSystems() {
    return (
        <div>
            <HeroPage
                title="Sewer Systems & Vapor Intrusion"
                subtitle="Investigating sewer overflow prediction, vapor intrusion pathways, and indoor air quality impacts from VOCs in aging urban sewer infrastructure."
                breadcrumbs={[
                    { label: 'Home', to: '/' },
                    { label: 'Research', to: '/research' },
                    { label: 'Sewer Systems' },
                ]}
            />

            {/* Overview */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Overview</h2>
                            <SectionDivider />
                            <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                                Sewers connect us in ways not considered decades ago when vapor intrusion
                                models were developed. VOCs in sewer air are free to enter buildings when
                                vapor seals and plumbing fixtures are compromised. Buildings might contain
                                a musty, moldy or rotten-egg odor which could indicate degraded indoor
                                air quality.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">How Vapor Intrusion Works</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            {[
                                { step: '1', title: 'Contamination Source', desc: 'VOCs enter the sewer from contaminated groundwater or soil gas through cracked or damaged sewer pipes, joints, and manholes.' },
                                { step: '2', title: 'Sewer Transport', desc: 'VOCs travel through the sewer system, potentially migrating far from the original contamination source, transported by sewer air currents.' },
                                { step: '3', title: 'Building Entry', desc: 'VOCs enter buildings through compromised plumbing fixtures, dried-out P-traps, cracked drain pipes, and unsealed utility penetrations.' },
                            ].map((s) => (
                                <div key={s.step} className="bg-surface rounded-xl p-6 border border-surface-dark/50">
                                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-dark font-mono font-bold text-lg mb-4">
                                        {s.step}
                                    </div>
                                    <h3 className="font-serif text-lg font-semibold text-primary mb-2">{s.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Building Conditions */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Building Conditions Assessment</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            {buildingConditions.map((c) => (
                                <div key={c.label} className={`rounded-xl border-2 p-5 ${c.color}`}>
                                    <h3 className="font-semibold text-text mb-1">{c.label}</h3>
                                    <p className="text-xs font-mono text-text-secondary mb-2">
                                        Sewer: {c.sewer} &middot; Plumbing: {c.plumbing}
                                    </p>
                                    <p className="text-sm text-text-secondary">{c.risk}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Sewer Overflow Prediction */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Sewer Overflow Prediction</h2>
                            <SectionDivider />
                            <p className="mt-6 text-text-secondary leading-relaxed">
                                Sanitary Sewer Overflows (SSOs) are discharges of raw sewage from sanitary
                                sewer systems. A sewer overflow prediction monitoring network is proposed
                                for older legacy sewer collection systems to understand how climate change,
                                sea level rise, and aging sewer infrastructure combine to create conditions
                                for more frequent overflows and surcharges.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Research Objectives */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Research Objectives</h2>
                        <SectionDivider />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 max-w-3xl">
                            {researchObjectives.map((obj, i) => (
                                <div key={i} className="flex gap-2 text-text-secondary text-sm">
                                    <span className="text-accent font-mono font-bold flex-shrink-0">{i + 1}.</span>
                                    {obj}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* References */}
            <section className="bg-white py-16 md:py-24">
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

            <section className="bg-surface py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Link to="/research" className="inline-block text-accent-dark hover:text-primary font-semibold transition-colors no-underline">
                        &larr; Back to all research
                    </Link>
                </div>
            </section>
        </div>
    )
}
