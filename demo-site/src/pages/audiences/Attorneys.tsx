import { Link } from 'react-router-dom'
import HeroPage from '../../components/HeroPage'
import ScrollReveal from '../../components/ScrollReveal'

const credentials = [
    'Licensed Professional Geologist (P.G.) in 9 states',
    '23 expert witness cases (plaintiff & defense)',
    '100+ peer-reviewed publications',
    '40+ years field experience',
    'Ph.D. in Earth Sciences (UC Santa Cruz)',
]

const expertise = [
    {
        title: 'Groundwater Contamination',
        desc: 'Source identification, plume migration analysis, fate and transport modeling',
    },
    {
        title: 'Vapor Intrusion',
        desc: 'Sewer gas pathways, indoor air quality, VI assessment protocols',
    },
    {
        title: 'Oil & Gas Contamination',
        desc: 'Hydrocarbon forensics, LNAPL/DNAPL characterization, remediation design',
    },
    {
        title: 'Resource Valuation',
        desc: 'Water rights, oil & gas reserves, renewable energy site assessment',
    },
]

const caseTypes = [
    'Groundwater contamination disputes',
    'Vapor intrusion litigation',
    'Oil field contamination cases',
    'Property damage claims (environmental)',
    'Remediation cost allocation',
    'Expert rebuttal testimony',
]

export default function Attorneys() {
    return (
        <div>
            <HeroPage
                title="Expert Witness Services"
                subtitle="Licensed P.G. in 9 states | 23 court cases | Groundwater contamination, vapor intrusion, and oil & gas expertise"
            />

            {/* Key Message */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Technical expertise you can trust in court
                            </h2>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                With 40+ years of hands-on field experience, peer-reviewed research, and testimony in 23 environmental litigation cases, Dr. Jacobs provides scientifically sound, defensible expert opinions for attorneys nationwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Schedule Confidential Case Review
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Download CV
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Credentials */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Professional Credentials
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {credentials.map((credential) => (
                                <div
                                    key={credential}
                                    className="flex items-start gap-3 bg-white p-4 rounded-lg"
                                >
                                    <span className="text-accent-dark text-xl flex-shrink-0">✓</span>
                                    <span className="text-text-secondary">{credential}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Areas of Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {expertise.map((area) => (
                                <div
                                    key={area.title}
                                    className="border-l-4 border-accent bg-surface p-6 rounded-r-lg"
                                >
                                    <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                        {area.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">{area.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Case Types */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Case Types
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {caseTypes.map((caseType) => (
                                <div
                                    key={caseType}
                                    className="bg-white p-4 rounded-lg text-text-secondary text-sm"
                                >
                                    {caseType}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What to Expect */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            What to Expect
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-surface p-6 rounded-lg">
                                <h3 className="font-semibold text-primary mb-2">Initial Consultation</h3>
                                <p className="text-text-secondary text-sm">
                                    Confidential case review to determine if expertise aligns with your needs. Typically 1-2 hours.
                                </p>
                            </div>
                            <div className="bg-surface p-6 rounded-lg">
                                <h3 className="font-semibold text-primary mb-2">Timeline</h3>
                                <p className="text-text-secondary text-sm">
                                    Case-dependent. Initial opinions typically within 2-4 weeks. Full reports and deposition/trial prep as scheduled.
                                </p>
                            </div>
                            <div className="bg-surface p-6 rounded-lg">
                                <h3 className="font-semibold text-primary mb-2">Deliverables</h3>
                                <p className="text-text-secondary text-sm">
                                    Expert reports, deposition testimony, trial testimony, technical review of opposing expert opinions, case strategy consultation.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Ready to Discuss Your Case?
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            Contact Dr. Jacobs for a confidential consultation about your environmental litigation needs.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                            >
                                Schedule Case Review
                            </Link>
                            <a
                                href="tel:510-590-1098"
                                className="inline-block border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                            >
                                Call 510-590-1098
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
