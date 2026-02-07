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
    'Working with local sewer agencies, document the presence of PCE outside the groundwater plume area and verify exposure vulnerability of upgradient occupants.',
    'Screen and sample iteratively in sewer manholes and cleanouts for sewer gases and PCE in systems intercepting known groundwater PCE plumes.',
    'Sample indoor air within accessible buildings in basements or crawl spaces, at each floor, and near vapor seals (bathrooms and kitchens).',
    'Inspect and document plumbing fixtures and condition of vapor seals in buildings where PCE detections are observed.',
    'Develop screening tools for regulatory agencies.',
    'Create guidance documents for building inspectors and regulators.',
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
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
                                <p>
                                    Sewer system pipes are a potential alternate exposure pathway for
                                    toxic sewer gases and volatile organic compounds (VOCs) like benzene
                                    in gasoline, and tetrachloroethylene (PCE), a common dry cleaning
                                    solvent, to migrate into indoor air. The US EPA (2002) vapor
                                    intrusion model needs to be re-evaluated and updated to include
                                    this important exposure pathway, especially in buildings located
                                    upgradient and outside of mapped groundwater contaminant plumes
                                    containing VOCs.
                                </p>
                                <p>
                                    There are hundreds of thousands of shallow groundwater plumes
                                    containing VOCs in urban areas in North America. There are also
                                    countless urban sewer systems which leak significantly during
                                    strong rain events. This research focuses on studying the migration
                                    of VOCs into indoor air through legacy sewer-plumbing systems
                                    and ineffective vapor seals.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Legacy Sewer Systems */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Legacy Sewer Systems</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                                <p>
                                    Many urban sewer systems in North America are more than 100 years
                                    old and well past their design life. Legacy sewer mains and
                                    associated laterals frequently subside, fail, and develop cracks or
                                    separations. These are evidenced as breaches in concrete, clay, or
                                    transite pipes or corrosion in cast iron pipes. Tree and plant
                                    roots commonly damage sewer pipe integrity.
                                </p>
                                <p>
                                    Inflow and infiltration (I&amp;I) during significant rain events in
                                    a northern California collection system was shown to contribute
                                    8 to 33 times the amount of daily sewer flow shortly after a
                                    downpour. Within structures, ineffective vapor seals in plumbing
                                    systems &mdash; dry P-traps, breached toilet wax rings, cracked
                                    plumbing drain pipes, loose fittings and gaskets &mdash; are common.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-surface py-16 md:py-24">
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
                                <div key={s.step} className="bg-white rounded-xl p-6 border border-surface-dark/50">
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
            <section className="bg-white py-16 md:py-24">
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

            {/* Case Studies */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Case Studies</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                                <p>
                                    Two recent PCE-specific vapor intrusion studies documented significant
                                    indoor air contributions from plumbing-sewer systems within PCE
                                    groundwater plume areas. In both studies, PCE vapors found in indoor
                                    air were tracked back to sewer-plumbing systems intersecting a
                                    delineated PCE groundwater plume, with concentrations orders of
                                    magnitude higher than levels considered safe for long-term exposure.
                                </p>
                            </div>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl border border-surface-dark/50 p-5">
                                    <h4 className="font-semibold text-primary text-sm mb-2">Skuldelev, Denmark</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        PCE reported in indoor air near a kitchen drain as high as
                                        <span className="font-mono font-semibold text-accent-dark"> 810 &mu;g/m&sup3;</span>.
                                    </p>
                                    <p className="text-xs text-text-secondary mt-2">Riis et al., 2010</p>
                                </div>
                                <div className="bg-white rounded-xl border border-surface-dark/50 p-5">
                                    <h4 className="font-semibold text-primary text-sm mb-2">Boston, Massachusetts</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Isolated bathroom air: 2.1 &mu;g/m&sup3;. With open sewer
                                        connection:
                                        <span className="font-mono font-semibold text-accent-dark"> 62&ndash;190 &mu;g/m&sup3;</span>.
                                    </p>
                                    <p className="text-xs text-text-secondary mt-2">Pennell et al., 2013</p>
                                </div>
                            </div>
                            <div className="mt-4 bg-white rounded-xl border border-surface-dark/50 p-4">
                                <p className="text-xs font-mono text-text-secondary">
                                    Regulatory thresholds: MassDEP PCE = 1.4 &mu;g/m&sup3; &middot;
                                    CA DTSC cancer risk = 0.41 &mu;g/m&sup3; &middot;
                                    SF Bay RWQCB ESL (residential) = 0.41 &mu;g/m&sup3;
                                </p>
                            </div>
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
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                                <p>
                                    Sanitary Sewer Overflows (SSOs) are caused by a variety of factors
                                    and may increase with sea level rise, extreme storms, and groundwater
                                    inundation, creating health risks and environmental hazards. Evidence
                                    of groundwater inundation and sea level rise is apparent from
                                    extremely high tides (commonly called &ldquo;King Tides&rdquo;) in
                                    Tamalpais Valley, Mill Valley, California.
                                </p>
                                <p>
                                    This research pilot project proposes using a network of surveyed
                                    piezometers with battery-powered data loggers having remote telemetry
                                    system (RTS) connections to provide real-time groundwater elevation,
                                    conductivity, and temperature data. The data from the piezometer
                                    network, sewer instruments, stilling wells, and rain gauges would be
                                    integrated for real-time notifications to alert decision makers and
                                    emergency workers at the start of conditions which can create SSOs.
                                </p>
                            </div>
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
                        <div className="space-y-3 mt-6 max-w-3xl">
                            {researchObjectives.map((obj, i) => (
                                <div key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                                    <span className="text-accent-dark font-mono font-bold flex-shrink-0">{i + 1}.</span>
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
