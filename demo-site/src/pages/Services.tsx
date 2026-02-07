import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import { services, servicesIntro, industriesServed } from '../data/services'

const audiences = [
    { icon: '\u2696\uFE0F', title: 'Attorneys & Legal Teams', desc: 'Expert witness testimony, forensic geology analysis, depositions, and technical reports for environmental litigation.', cta: 'Discuss Your Case', to: '/contact' },
    { icon: '\uD83C\uDFDB\uFE0F', title: 'Regulatory Agencies', desc: 'Vapor intrusion assessment, compliance evaluation, and professional training for EPA, state boards, and health departments.', cta: 'Request Consultation', to: '/contact' },
    { icon: '\uD83D\uDD27', title: 'Sewer & Water Utilities', desc: 'Sewer air testing, legacy infrastructure mapping, overflow monitoring, and capital project prioritization.', cta: 'Schedule Assessment', to: '/contact' },
    { icon: '\uD83C\uDFE2', title: 'Property Owners & Developers', desc: 'Phase I/II environmental site assessments, due diligence, contamination forensics, and remediation planning.', cta: 'Get a Site Assessment', to: '/contact' },
    { icon: '\uD83D\uDC65', title: 'Communities & Residents', desc: 'Indoor air quality evaluation, vapor intrusion assessment, and plain-language mitigation guidance.', cta: 'Get Help', to: '/contact' },
    { icon: '\uD83D\uDEE1\uFE0F', title: 'Insurance Companies', desc: 'Forensic analysis, cause-and-origin determination, and expert opinions for environmental liability claims.', cta: 'Discuss a Claim', to: '/contact' },
]

const trustPoints = [
    { value: '40+', label: 'Years of field experience' },
    { value: '23', label: 'Expert witness cases' },
    { value: '1,000+', label: 'Projects completed' },
    { value: '5', label: 'Published books' },
]

export default function Services() {
    const featuredService = services[0]  // Expert Witness
    const otherServices = services.slice(1)

    return (
        <div>
            <HeroPage
                title="Services"
                subtitle="Expert witness testimony, environmental site assessment, sewer air testing, and consulting for legal teams, agencies, utilities, and communities."
            />

            {/* Featured: Expert Witness */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 text-white">
                            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                                <div className="text-4xl">{featuredService.icon}</div>
                                <div className="flex-1">
                                    <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">Featured Service</p>
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                                        {featuredService.title}
                                    </h2>
                                    <p className="text-white/70 leading-relaxed max-w-2xl">
                                        {featuredService.description}
                                    </p>
                                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to="/contact"
                                            className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                        >
                                            Discuss Your Case
                                        </Link>
                                        <Link
                                            to="/about"
                                            className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center text-sm"
                                        >
                                            View Full Credentials
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Intro */}
            <section className="bg-surface py-16 md:py-20">
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

            {/* All Services */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">All Services</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-8">
                            {otherServices.map((service) => (
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

            {/* Why James Jacobs — Trust Section */}
            <section className="bg-surface-mid py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-10">
                            Why James Jacobs?
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {trustPoints.map((point) => (
                                <div key={point.label}>
                                    <div className="font-mono text-3xl md:text-4xl font-bold text-accent-dark">
                                        {point.value}
                                    </div>
                                    <div className="mt-1 text-sm text-text-secondary font-medium">
                                        {point.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-secondary font-mono">
                            <span>Ph.D. — UC Santa Cruz</span>
                            <span>P.G. — California</span>
                            <span>C.H.G.</span>
                            <span>FGS</span>
                            <span>4x Fulbright</span>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Industries Served */}
            <section className="bg-white py-10 md:py-14 border-b border-surface-dark/30">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
                        <span className="text-xs uppercase tracking-widest text-text-secondary font-medium">
                            Industries Served
                        </span>
                        {industriesServed.map((industry) => (
                            <span
                                key={industry}
                                className="text-sm font-medium text-text-secondary/80"
                            >
                                {industry}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who This Serves */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Who This Serves</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                            {audiences.map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-6 border border-surface-dark/50 flex flex-col">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="font-serif font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                                    <Link
                                        to={item.to}
                                        className="inline-flex items-center gap-1 mt-4 text-accent-dark hover:text-primary text-sm font-semibold no-underline transition-colors"
                                    >
                                        {item.cta}
                                        <span>&rarr;</span>
                                    </Link>
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
