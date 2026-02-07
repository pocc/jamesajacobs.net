import { Link } from 'react-router-dom'
import HeroPage from '../../components/HeroPage'
import ScrollReveal from '../../components/ScrollReveal'

const services = [
    {
        title: 'Hydrocarbon Contamination Assessment',
        desc: 'LNAPL/DNAPL characterization, petroleum forensics, source identification',
    },
    {
        title: 'Phase I/II ESAs for Oil Fields',
        desc: '100+ oil field assessments completed, familiar with industry-specific challenges',
    },
    {
        title: 'Remediation Planning',
        desc: 'Risk-based corrective action (RBCA), remedy selection, cost-benefit analysis',
    },
    {
        title: 'Resource Valuation',
        desc: 'Oil & gas reserves assessment, water rights evaluation, renewable energy site analysis',
    },
]

const credentials = [
    'Author: "Oil Spills and Gas Leaks" (2014)',
    'Author: "Hydraulic Fracturing and Water Resources" (2016)',
    '100+ oil field Phase I ESAs',
    '40+ years petroleum geology experience',
]

const expertise = [
    'Oil field contamination',
    'Pipeline spills & leaks',
    'Hydraulic fracturing impacts',
    'Produced water management',
    'Groundwater protection',
    'Regulatory compliance (EPA, state)',
]

export default function OilGas() {
    return (
        <div>
            <HeroPage
                title="Oil & Gas Industry"
                subtitle="Hydrocarbon contamination assessment, remediation planning, and resource valuation"
            />

            {/* Key Message */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-orange-700 to-orange-900 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Deep expertise in oil & gas environmental challenges
                            </h2>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                Dr. Jacobs has authored two books on oil spills and hydraulic fracturing, completed 100+ oil field assessments, and brings 40+ years of petroleum geology experience to your project.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Discuss Your Project
                                </Link>
                                <Link
                                    to="/books"
                                    className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    View Published Books
                                </Link>
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
                            Services for Oil & Gas
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="border-l-4 border-orange-600 bg-white p-6 rounded-r-lg"
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

            {/* Credentials */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Oil & Gas Expertise
                        </h2>
                        <div className="space-y-4">
                            {credentials.map((credential) => (
                                <div
                                    key={credential}
                                    className="flex items-start gap-3 bg-surface p-4 rounded-lg"
                                >
                                    <span className="text-orange-600 text-xl flex-shrink-0">✓</span>
                                    <span className="text-text-secondary">{credential}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Specialized Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {expertise.map((item) => (
                                <div
                                    key={item}
                                    className="bg-white p-4 rounded-lg text-text-secondary"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Published Books */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Published Works
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-surface p-6 rounded-lg">
                                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                    Oil Spills and Gas Leaks (2014)
                                </h3>
                                <p className="text-text-secondary text-sm">
                                    Comprehensive examination of environmental response to oil spills and gas leaks, covering assessment methodologies, remediation technologies, and regulatory frameworks.
                                </p>
                            </div>
                            <div className="bg-surface p-6 rounded-lg">
                                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                    Hydraulic Fracturing and Water Resources (2016)
                                </h3>
                                <p className="text-text-secondary text-sm">
                                    Science-based analysis of hydraulic fracturing impacts on water resources, including groundwater protection strategies and best management practices.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                to="/books"
                                className="inline-flex items-center gap-2 text-accent-dark hover:text-primary font-semibold no-underline transition-colors"
                            >
                                View All Books & Publications
                                <span>&rarr;</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Ready to Discuss Your Project?
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            From oil field assessments to hydraulic fracturing concerns, we provide expert environmental consulting for the oil & gas industry.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                            >
                                Contact Dr. Jacobs
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
