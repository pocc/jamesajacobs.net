import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import { services, servicesIntro, industriesServed } from '../data/services'

export default function Services() {
    return (
        <div>
            <HeroPage
                title="Services"
                subtitle="Expert witness testimony, environmental site assessment, sewer air testing, and consulting for legal teams, agencies, utilities, and communities."
            />

            <section className="bg-surface py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-2xl">
                            <p className="text-text-secondary leading-relaxed text-lg">
                                {servicesIntro}
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">What We Provide</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="bg-surface rounded-xl border-l-4 border-accent p-6 md:p-8 hover:shadow-md transition-shadow"
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

            {/* Industries Served */}
            <section className="bg-surface-mid py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <p className="text-center text-xs uppercase tracking-widest text-text-secondary mb-5 font-medium">
                            Industries Served
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {industriesServed.map((industry) => (
                                <span
                                    key={industry}
                                    className="bg-white border border-surface-dark/50 rounded-full px-4 py-1.5 text-sm font-medium text-text-secondary"
                                >
                                    {industry}
                                </span>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Who This Serves */}
            <section className="bg-surface py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Who This Serves</h2>
                        <SectionDivider />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {[
                                { title: 'Attorneys & Legal Teams', desc: 'Expert witness testimony and forensic geology analysis for environmental litigation.', cta: 'Discuss Your Case', to: '/contact' },
                                { title: 'Regulatory Agencies', desc: 'Environmental oversight, compliance assessment, and vapor intrusion evaluation.', cta: 'Request Consultation', to: '/contact' },
                                { title: 'Sewer & Water Utilities', desc: 'Infrastructure assessment, sewer air testing, and capital project prioritization.', cta: 'Schedule Assessment', to: '/contact' },
                                { title: 'Property Owners & Developers', desc: 'Site characterization, Phase I/II assessments, and remediation planning.', cta: 'Get a Site Assessment', to: '/contact' },
                                { title: 'Communities & Residents', desc: 'Indoor air quality evaluation, vapor intrusion assessment, and mitigation guidance.', cta: 'Get Help', to: '/contact' },
                                { title: 'Insurance Companies', desc: 'Forensic analysis and expert opinions for environmental liability claims.', cta: 'Discuss a Claim', to: '/contact' },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-6 border border-surface-dark/50">
                                    <h3 className="font-serif font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                                    <Link
                                        to={item.to}
                                        className="inline-block mt-3 text-accent-dark hover:text-primary text-sm font-semibold no-underline transition-colors"
                                    >
                                        {item.cta} &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">Request a Consultation</h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            Whether you need expert witness testimony, sewer air testing, or
                            environmental consulting — decades of expertise, one conversation away.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-8 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                        >
                            Contact James
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
