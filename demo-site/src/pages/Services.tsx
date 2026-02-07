import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import { services, servicesIntro } from '../data/services'

export default function Services() {
    return (
        <div>
            <HeroPage
                title="Services"
                subtitle="Sewer air testing, vapor intrusion assessment, and environmental consulting for regulatory agencies, utilities, and communities."
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <p className="text-text-secondary leading-relaxed text-lg">
                                {servicesIntro}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">What We Provide</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="bg-surface rounded-xl border-l-4 border-accent p-6 hover:shadow-md transition-shadow"
                                >
                                    <div className="text-2xl mb-3">{service.icon}</div>
                                    <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Who This Serves */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Who This Serves</h2>
                        <SectionDivider />
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                            {[
                                { title: 'Regulatory Agencies', desc: 'Environmental oversight and compliance assessment tools.' },
                                { title: 'Sewer Utilities', desc: 'Infrastructure assessment and capital project prioritization.' },
                                { title: 'Communities', desc: 'Indoor air quality evaluation and mitigation recommendations.' },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-5 border border-surface-dark/50 text-center">
                                    <h3 className="font-serif font-semibold text-primary mb-1">{item.title}</h3>
                                    <p className="text-text-secondary text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Request a Consultation</h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed">
                            Whether you need sewer air testing, vapor intrusion assessment, or
                            environmental consulting, we bring decades of expertise to every project.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-8 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3.5 rounded-xl transition-colors no-underline"
                        >
                            Contact James
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
