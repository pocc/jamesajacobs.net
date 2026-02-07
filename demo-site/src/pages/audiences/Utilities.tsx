import { Link } from 'react-router-dom'
import HeroPage from '../../components/HeroPage'
import ScrollReveal from '../../components/ScrollReveal'

const services = [
    {
        title: 'Sewer Air Testing',
        desc: 'Indoor air quality assessment, VOC monitoring, vapor intrusion pathway analysis',
    },
    {
        title: 'Legacy Infrastructure Mapping',
        desc: 'Sewer system documentation, defect identification, capital project prioritization',
    },
    {
        title: 'Overflow Monitoring',
        desc: 'SmartCover sensors, Solinst Level Loggers, real-time data logging',
    },
    {
        title: 'Rate Study Support',
        desc: 'Technical consulting for infrastructure cost allocation and rate justification',
    },
]

const credentials = [
    '23 years as elected sewer commissioner (TCSD)',
    'President, SASM (Sewer Authority of San Mateo)',
    '$50M+ capital projects oversight',
    'EPA-recognized sewer air testing protocols',
]

export default function Utilities() {
    return (
        <div>
            <HeroPage
                title="Utilities & Municipalities"
                subtitle="Sewer air testing, infrastructure mapping, and overflow monitoring — backed by 23 years as elected sewer commissioner"
            />

            {/* Emergency Banner */}
            <section className="bg-red-700 text-white py-4">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-lg font-semibold">
                        🚨 Sewer Emergency? Call{' '}
                        <a
                            href="tel:510-590-1098"
                            className="underline hover:no-underline text-white"
                        >
                            510-590-1098
                        </a>{' '}
                        (24/7)
                    </p>
                </div>
            </section>

            {/* Key Message */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Expert guidance from a sewer commissioner who understands your challenges
                            </h2>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                Dr. Jacobs served 23 years as publicly elected commissioner overseeing $50M+ in capital projects. He brings firsthand understanding of regulatory compliance, budget constraints, and public accountability.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Schedule Utility Consultation
                                </Link>
                                <a
                                    href="tel:510-590-1098"
                                    className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Emergency Hotline
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
                            Services for Utilities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="border-l-4 border-blue-600 bg-white p-6 rounded-r-lg"
                                >
                                    <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Experience */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Utility Management Experience
                        </h2>
                        <div className="space-y-4">
                            {credentials.map((credential) => (
                                <div
                                    key={credential}
                                    className="flex items-start gap-3 bg-surface p-4 rounded-lg"
                                >
                                    <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                                    <span className="text-text-secondary">{credential}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What to Expect */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            What to Expect
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="font-semibold text-primary mb-2">Sewer Air Testing</h3>
                                <p className="text-text-secondary text-sm mb-2">
                                    <strong>Timeline:</strong> 2-4 weeks (depending on scope)
                                </p>
                                <p className="text-text-secondary text-sm mb-2">
                                    <strong>Cost Range:</strong> $5,000-$15,000
                                </p>
                                <p className="text-text-secondary text-sm">
                                    <strong>Deliverables:</strong> Field data, lab analysis, compliance report with EPA-approved protocols
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg">
                                <h3 className="font-semibold text-primary mb-2">Infrastructure Mapping</h3>
                                <p className="text-text-secondary text-sm mb-2">
                                    <strong>Timeline:</strong> 4-8 weeks
                                </p>
                                <p className="text-text-secondary text-sm mb-2">
                                    <strong>Cost Range:</strong> $10,000-$30,000
                                </p>
                                <p className="text-text-secondary text-sm">
                                    <strong>Deliverables:</strong> GIS-ready maps, defect prioritization, capital planning recommendations
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
                            Ready to Get Started?
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            Whether you need emergency sewer air testing or long-term infrastructure planning, we're here to help.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                            >
                                Request Consultation
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
