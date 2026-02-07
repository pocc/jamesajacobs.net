import { Link } from 'react-router-dom'
import HeroPage from '../../components/HeroPage'
import ScrollReveal from '../../components/ScrollReveal'

const services = [
    {
        title: 'Protocol Development',
        desc: 'Vapor intrusion assessment protocols, sewer air testing guidance, compliance frameworks',
    },
    {
        title: 'Staff Training',
        desc: 'Workshops on VI assessment, hydrogeology, site characterization, remediation oversight',
    },
    {
        title: 'Technical Review',
        desc: 'Expert review of consultant reports, remediation plans, and monitoring programs',
    },
    {
        title: 'Policy Consultation',
        desc: 'Regulatory policy development, risk communication strategies, public outreach',
    },
]

const credentials = [
    '100+ peer-reviewed publications',
    'EPA guidance compliance expertise',
    '4 Fulbright Senior Specialist appointments',
    'International teaching experience (5+ countries)',
]

const agencies = [
    'State Environmental Protection Agencies',
    'Regional Water Quality Control Boards',
    'County Health Departments',
    'Municipal Regulatory Agencies',
]

export default function Regulators() {
    return (
        <div>
            <HeroPage
                title="Regulatory Agencies"
                subtitle="Protocol development, staff training, and technical consulting for environmental agencies"
            />

            {/* Key Message */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Science-based guidance for regulatory decision-making
                            </h2>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                Dr. Jacobs brings 40+ years of research and field experience to help regulatory agencies develop sound protocols, train staff, and navigate complex environmental challenges.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Request Agency Consultation
                                </Link>
                                <Link
                                    to="/teaching"
                                    className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    View Training Programs
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
                            Services for Agencies
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service) => (
                                <div
                                    key={service.title}
                                    className="border-l-4 border-purple-600 bg-white p-6 rounded-r-lg"
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
                            Regulatory Experience
                        </h2>
                        <div className="space-y-4">
                            {credentials.map((credential) => (
                                <div
                                    key={credential}
                                    className="flex items-start gap-3 bg-surface p-4 rounded-lg"
                                >
                                    <span className="text-purple-600 text-xl flex-shrink-0">✓</span>
                                    <span className="text-text-secondary">{credential}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Agencies Served */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Agency Types Served
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {agencies.map((agency) => (
                                <div
                                    key={agency}
                                    className="bg-white p-4 rounded-lg text-text-secondary"
                                >
                                    {agency}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Example Topics */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Example Training Topics
                        </h2>
                        <ul className="space-y-3">
                            {[
                                'Vapor Intrusion Assessment: EPA Guidance & Field Implementation',
                                'Groundwater Contamination: Source Identification & Plume Migration',
                                'Sewer Air Testing Protocols & Quality Assurance',
                                'Remediation Technology Selection & Oversight',
                                'Hydrogeology Fundamentals for Environmental Professionals',
                                'Risk Communication for Complex Environmental Issues',
                            ].map((topic) => (
                                <li
                                    key={topic}
                                    className="flex items-start gap-3 text-text-secondary"
                                >
                                    <span className="text-purple-600 mt-1 flex-shrink-0">✓</span>
                                    <span>{topic}</span>
                                </li>
                            ))}
                        </ul>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Need Technical Expertise?
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            Contact Dr. Jacobs to discuss protocol development, staff training, or technical review needs.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-8 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                        >
                            Request Consultation
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
