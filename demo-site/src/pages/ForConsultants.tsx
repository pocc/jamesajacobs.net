import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// Simple icon components
const EnvelopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
)
const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
)
const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const AcademicCapIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
)
const DocumentCheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const BeakerIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
)

export default function ForConsultants() {
    const services = [
        {
            title: 'Expert Review & Technical Opinions',
            icon: '📋',
            description: 'Independent third-party review of site data, remediation plans, and technical reports',
            deliverables: [
                'Independent review of site investigation data',
                'Expert opinion letters for client reporting or litigation',
                'Peer review of remediation plans and feasibility studies',
                'QA/QC review of field sampling programs',
                'Technical critique of opposing experts\' reports'
            ],
            turnaround: '5-10 business days for standard reviews'
        },
        {
            title: 'Sub-Consulting Services',
            icon: '🤝',
            description: 'Specialized site investigations and technical support for your client projects',
            deliverables: [
                'Specialized site investigations (vapor intrusion, Chromium VI, MTBE)',
                'Expert witness support (deposition & trial testimony)',
                'Regulatory agency negotiation and compliance support',
                'Technical writing & report preparation',
                'Forensic analysis of contamination sources'
            ],
            turnaround: 'Project-specific; typically 2-4 weeks'
        },
        {
            title: 'Technical Training & Workshops',
            icon: '🎓',
            description: 'In-house training for your staff on specialized environmental topics',
            deliverables: [
                'Vapor intrusion assessment protocols',
                'Chromium VI fate & transport and natural occurrence',
                'MTBE & fuel oxygenate hydrogeology',
                'Hydraulic fracturing environmental impacts',
                'Field methods and sampling techniques',
                'Regulatory compliance workshops'
            ],
            turnaround: 'Scheduled at your convenience'
        }
    ]

    const expertise = [
        {
            area: 'Chromium VI',
            description: 'Geology, geochemistry, natural occurrence vs. anthropogenic sources, litigation support',
            publications: '15+ peer-reviewed papers',
            book: 'Chromium(VI) Handbook (CRC Press, 2004, 800 pp.)',
            highlight: 'Leading expert on natural occurrence arguments for defense cases'
        },
        {
            area: 'Vapor Intrusion',
            description: 'Sewer systems, petroleum hydrocarbons, pathway analysis, mitigation system evaluation',
            publications: '20+ peer-reviewed papers',
            book: 'Contributions to EPA vapor intrusion guidance',
            highlight: 'Unique expertise in sewer gas intrusion pathways'
        },
        {
            area: 'MTBE & Fuel Oxygenates',
            description: 'Investigation, remediation, natural attenuation, cost recovery litigation',
            publications: '25+ peer-reviewed papers',
            book: 'MTBE: Effects on Soil and Groundwater Resources (CRC Press, 2001)',
            highlight: 'Early pioneer in MTBE hydrogeology (late 1990s research)'
        },
        {
            area: 'Hydraulic Fracturing',
            description: 'Environmental impacts, groundwater contamination, risk assessment, regulatory compliance',
            publications: '10+ peer-reviewed papers',
            book: 'Environmental Considerations of Hydraulic Fracturing (Wiley, 2019, 576 pp.)',
            highlight: 'Comprehensive review of environmental risks and mitigation'
        },
        {
            area: 'Acid Mine Drainage',
            description: 'Prediction, prevention, remediation, constructed wetlands treatment',
            publications: '12+ peer-reviewed papers',
            book: 'Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils (Wiley, 2014, 520 pp.)',
            highlight: 'Expert in geochemical modeling and passive treatment systems'
        },
        {
            area: 'Sea Level Rise & Infrastructure',
            description: 'Wastewater infrastructure vulnerability, overflow prediction, adaptation planning',
            publications: '8+ peer-reviewed papers',
            book: 'Bayesian network modeling for overflow prediction (published in peer-reviewed journals)',
            highlight: '10+ years of continuous monitoring data in San Francisco Bay Area'
        }
    ]

    const whyWorkWithUs = [
        {
            title: 'We Support Your Firm',
            description: 'We don\'t compete for your clients. Our role is to provide specialized expertise that supplements your team\'s capabilities.',
            icon: <BeakerIcon className="w-6 h-6" />
        },
        {
            title: 'Deep Technical Expertise',
            description: '40+ years experience, 5 published textbooks, 100+ peer-reviewed publications in niche specialty areas.',
            icon: <AcademicCapIcon className="w-6 h-6" />
        },
        {
            title: 'Fast Turnaround',
            description: 'Expert opinion letters in 5-10 business days. Technical reviews in 2 weeks. We understand your deadlines.',
            icon: <ClockIcon className="w-6 h-6" />
        },
        {
            title: 'Litigation-Ready',
            description: 'Licensed P.G. in 9 states, 23+ court cases, qualified as expert witness in federal and state courts.',
            icon: <DocumentCheckIcon className="w-6 h-6" />
        }
    ]

    const professionalRecognition = [
        '100+ peer-reviewed publications in top-tier journals',
        '5 published textbooks (Wiley, McGraw-Hill, CRC Press)',
        'Adjunct Faculty, Environmental Studies, UC Santa Cruz',
        'Fellow: AIPG, GSA, NGWA, GSL (London)',
        'Licensed Professional Geologist in 9 states',
        'Certified Hydrogeologist (C.H.G.)',
        'Board President: Tamalpais Community Services District (2016-2020)',
        'Board President: Sanitary Agency of Southern Marin (2016-2020)'
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-dark to-surface">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <p className="text-white/90 font-medium">For Environmental Consulting Firms</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Expert Support for Environmental Consultants</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Deep technical expertise in niche areas — we support your firm, we don't compete for your clients
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                <div>
                                    <div className="text-4xl font-bold text-accent">40+</div>
                                    <div className="text-white/80 text-sm">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">100+</div>
                                    <div className="text-white/80 text-sm">Publications</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">5</div>
                                    <div className="text-white/80 text-sm">Published Books</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">24hr</div>
                                    <div className="text-white/80 text-sm">Response Time</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Request Expert Opinion
                                </Link>
                                <a
                                    href="tel:510-590-1098"
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    510-590-1098
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Why Partner With Us</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {whyWorkWithUs.map((item, index) => (
                            <ScrollReveal key={index}>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                                    <p className="text-text-secondary text-sm">{item.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Services for Consulting Firms</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Specialized technical support to supplement your team's capabilities
                        </p>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow h-full flex flex-col">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-5xl">{service.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                                            <p className="text-text-secondary text-sm">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex-grow">
                                        <h4 className="font-semibold text-sm text-accent uppercase mb-3">What We Provide:</h4>
                                        <ul className="space-y-2">
                                            {service.deliverables.map((deliverable, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <span className="text-accent mt-0.5">•</span>
                                                    <span>{deliverable}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-surface">
                                        <div className="flex items-center gap-2 text-sm text-text-secondary">
                                            <ClockIcon className="w-4 h-4 text-accent" />
                                            <span className="font-medium">{service.turnaround}</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas of Deep Expertise */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Areas of Deep Expertise</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Specialized technical knowledge backed by decades of research and published textbooks
                        </p>
                    </ScrollReveal>
                    <div className="max-w-6xl mx-auto space-y-6">
                        {expertise.map((area, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gradient-to-r from-surface-light to-white p-8 rounded-xl border-l-4 border-accent shadow-md">
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">{area.area}</h3>
                                            <p className="text-text-secondary text-sm">{area.description}</p>
                                        </div>
                                        <div>
                                            <div className="mb-3">
                                                <span className="text-xs font-semibold text-accent uppercase">Publications</span>
                                                <p className="text-sm text-text-secondary">{area.publications}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs font-semibold text-accent uppercase">Key Work</span>
                                                <p className="text-sm text-text-secondary">{area.book}</p>
                                            </div>
                                        </div>
                                        <div className="bg-accent/5 p-4 rounded-lg">
                                            <span className="text-xs font-semibold text-accent uppercase">Why This Matters</span>
                                            <p className="text-sm text-primary mt-2">{area.highlight}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal>
                        <div className="mt-12 text-center">
                            <p className="text-text-secondary max-w-3xl mx-auto">
                                <strong className="text-primary">Looking for a specific expertise?</strong> These are just our primary focus areas.
                                With 40+ years of experience, we've worked on a wide range of environmental issues. Contact us to discuss your project needs.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Professional Recognition */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Professional Recognition</h2>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {professionalRecognition.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-accent text-2xl mt-0.5">✓</span>
                                    <span className="text-text-secondary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Turnaround Time Guarantees */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold mb-4 text-center">Typical Turnaround Times</h2>
                            <p className="text-xl text-text-secondary text-center mb-12">
                                We understand your deadlines — fast response without compromising quality
                            </p>
                            <div className="bg-gradient-to-r from-accent/5 to-white rounded-2xl border border-accent/20 p-8">
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <ClockIcon className="w-8 h-8 text-accent" />
                                        </div>
                                        <div className="text-3xl font-bold text-primary mb-2">24 hours</div>
                                        <div className="text-sm text-text-secondary">Initial response to inquiries</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <DocumentCheckIcon className="w-8 h-8 text-accent" />
                                        </div>
                                        <div className="text-3xl font-bold text-primary mb-2">5-10 days</div>
                                        <div className="text-sm text-text-secondary">Expert opinion letters & technical reviews</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <BeakerIcon className="w-8 h-8 text-accent" />
                                        </div>
                                        <div className="text-3xl font-bold text-primary mb-2">2-4 weeks</div>
                                        <div className="text-sm text-text-secondary">Site investigations & sub-consulting projects</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Confidentiality Assurance */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-l-4 border-accent">
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <DocumentCheckIcon className="w-8 h-8 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-primary">Your Client Information Stays Confidential</h3>
                                    <p className="text-text-secondary mb-4">
                                        We understand the importance of protecting your client relationships. When you engage us as a sub-consultant:
                                    </p>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent">•</span>
                                            <span>We work under your direction and supervision</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent">•</span>
                                            <span>Client information remains confidential (NDA available)</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent">•</span>
                                            <span>We don't market directly to your clients</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent">•</span>
                                            <span>Our role is to provide specialized expertise that strengthens your team</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6">Ready to Discuss Your Project?</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Contact us to discuss how we can support your consulting firm with specialized technical expertise
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Request Expert Opinion
                            </Link>
                            <a
                                href="tel:510-590-1098"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                Call 510-590-1098
                            </a>
                            <a
                                href="mailto:jjacobs@clearwatergroup.com"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                jjacobs@clearwatergroup.com
                            </a>
                        </div>
                        <div className="mt-8 text-white/80">
                            <p className="text-sm">Typical response time: 24 hours</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
