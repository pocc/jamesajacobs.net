import { Link } from 'react-router-dom'
import HeroPage from '../../components/HeroPage'
import ScrollReveal from '../../components/ScrollReveal'

const services = [
    {
        title: 'Phase I Environmental Site Assessment',
        desc: 'ASTM E1527-21 compliant reports, lender-approved, fast turnaround',
        timeline: '1-2 weeks',
        cost: '$3,000-$8,000',
    },
    {
        title: 'Phase II Site Investigation',
        desc: 'Soil and groundwater sampling, lab analysis, contamination characterization',
        timeline: '2-4 weeks',
        cost: '$8,000-$25,000',
    },
    {
        title: 'Environmental Due Diligence',
        desc: 'Pre-acquisition risk assessment, liability evaluation, cost estimates',
        timeline: '1-3 weeks',
        cost: '$5,000-$15,000',
    },
]

const credentials = [
    '40+ years of site assessment experience',
    '1,000+ projects completed',
    'Licensed P.G. in 9 states',
    'Lender-approved reports',
]

export default function RealEstate() {
    return (
        <div>
            <HeroPage
                title="Property Owners & Developers"
                subtitle="Phase I & II environmental site assessments — fast turnaround for transactions"
            />

            {/* Key Message */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Don't let environmental unknowns derail your transaction
                            </h2>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                With 40+ years of site assessment experience and 1,000+ completed projects, Dr. Jacobs provides thorough, lender-approved environmental reports on your timeline.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Get Site Assessment Quote
                                </Link>
                                <a
                                    href="tel:510-590-1098"
                                    className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Call 510-590-1098
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Services for Property Owners
                        </h2>
                        <div className="space-y-6">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="bg-white p-6 rounded-lg border-l-4 border-green-600"
                                >
                                    <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm mb-4">{service.desc}</p>
                                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                                        <div>
                                            <span className="font-semibold text-primary">Timeline:</span>{' '}
                                            <span className="text-text-secondary">{service.timeline}</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-primary">Cost:</span>{' '}
                                            <span className="text-text-secondary">{service.cost}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Why Choose */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Why Choose Dr. Jacobs?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {credentials.map((credential) => (
                                <div
                                    key={credential}
                                    className="flex items-start gap-3 bg-surface p-4 rounded-lg"
                                >
                                    <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                                    <span className="text-text-secondary">{credential}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Process */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            The Process
                        </h2>
                        <div className="space-y-4">
                            {[
                                { step: '1', title: 'Initial Contact', desc: 'Share property address and transaction timeline' },
                                { step: '2', title: 'Proposal & Quote', desc: 'Receive scope of work and fixed-price quote within 24 hours' },
                                { step: '3', title: 'Site Visit', desc: 'Field inspection and records review (Phase I) or sampling (Phase II)' },
                                { step: '4', title: 'Report Delivery', desc: 'Lender-approved report delivered on schedule' },
                            ].map((item) => (
                                <div
                                    key={item.step}
                                    className="flex items-start gap-4 bg-white p-6 rounded-lg"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                                        <p className="text-text-secondary text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Need a Site Assessment?
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            Get a quote within 24 hours. Fast turnaround to keep your transaction on schedule.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                            >
                                Request Quote
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
