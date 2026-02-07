import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { EnvelopeIcon, PhoneIcon, BookOpenIcon, BeakerIcon, MapPinIcon, ScaleIcon } from '@heroicons/react/24/outline'

export default function OilGas() {
    const services = [
        {
            icon: <ScaleIcon className="w-8 h-8 text-accent" />,
            title: 'Forensic Analysis & Expert Witness',
            description: 'Expert testimony for groundwater contamination disputes, remediation cost recovery, and environmental liability cases',
            capabilities: [
                'Contamination source identification',
                'Plume migration analysis',
                'Remediation cost estimation',
                'Expert witness testimony (23 cases)'
            ]
        },
        {
            icon: <BeakerIcon className="w-8 h-8 text-accent" />,
            title: 'Hydraulic Fracturing Assessment',
            description: 'Author of the definitive textbook on hydraulic fracturing environmental issues (Wiley, 2019)',
            capabilities: [
                'Environmental impact evaluation',
                'Groundwater protection compliance',
                'Regulatory review support',
                'Expert witness for fracturing disputes'
            ]
        },
        {
            icon: <MapPinIcon className="w-8 h-8 text-accent" />,
            title: 'Resource Valuation',
            description: 'Oil & gas reserve evaluation, coal resource assessments, and renewable energy site analysis',
            capabilities: [
                'Oil & gas reserve evaluation',
                'Coal resource assessments',
                'Renewable energy site analysis',
                'Basin geology & subsurface characterization'
            ]
        },
        {
            icon: <BookOpenIcon className="w-8 h-8 text-accent" />,
            title: 'Facility Decommissioning',
            description: 'Environmental assessment and oversight for oil & gas facility closure and site remediation',
            capabilities: [
                'Tank removal oversight',
                'Site characterization',
                'Remediation planning',
                'Regulatory closure compliance'
            ]
        }
    ]

    const books = [
        {
            title: 'Hydraulic Fracturing and the Environment: Risk Assessment for Groundwater Contamination',
            publisher: 'Wiley',
            year: '2019',
            pages: '576 pages',
            isbn: '978-1-119-80435-2',
            description: 'Comprehensive analysis of hydraulic fracturing environmental risks, groundwater contamination pathways, and risk mitigation strategies. The definitive technical reference for fracturing environmental assessment.',
            topics: [
                'Groundwater contamination pathways',
                'Well construction and integrity',
                'Flowback and produced water management',
                'Risk assessment methodologies',
                'Regulatory frameworks',
                'Case studies from major shale plays'
            ],
            audience: 'Essential for operators, regulators, attorneys, and expert witnesses dealing with hydraulic fracturing disputes',
            cta: 'Need hydraulic fracturing consulting?',
            ctaLink: '/oil-gas#services'
        },
        {
            title: 'Oil Spills and Gas Leaks: Environmental Response, Prevention, and Cost Recovery',
            publisher: 'McGraw-Hill',
            year: '2014',
            pages: '578 pages',
            isbn: '978-0-07-179269-2',
            description: 'Practical guide to oil spill response, contamination assessment, remediation strategies, and cost recovery. Covers petroleum contamination from upstream to downstream operations.',
            topics: [
                'Spill response and containment',
                'Contamination assessment methodologies',
                'Remediation technology selection',
                'Cost recovery and allocation',
                'Regulatory compliance',
                'Case studies: pipelines, refineries, gas stations'
            ],
            audience: 'Critical resource for oil & gas operators, environmental consultants, insurance companies, and litigation attorneys',
            cta: 'Expert witness for oil spill litigation?',
            ctaLink: '/expert-witness'
        }
    ]

    const caseExamples = [
        {
            type: 'Expert Witness',
            title: 'Groundwater Contamination Dispute — Texas Oil Field',
            description: 'Forensic analysis of contamination source, plume migration modeling, and remediation cost estimation',
            outcome: 'Testified for defense. Case settled favorably based on technical analysis demonstrating alternative source.',
            state: 'TX'
        },
        {
            type: 'Forensic Analysis',
            title: 'Gas Station Leak Investigation — California',
            description: 'Underground storage tank release investigation, plume delineation, and responsible party determination',
            outcome: 'Quantified plume migration, identified historical release date, supported cost recovery action.',
            state: 'CA'
        },
        {
            type: 'Hydraulic Fracturing',
            title: 'Shale Play Environmental Assessment — Pennsylvania',
            description: 'Environmental compliance review for major operator, groundwater protection assessment, regulatory permit support',
            outcome: 'Permits approved. Zero groundwater contamination incidents during drilling phase.',
            state: 'PA'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-dark to-surface">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-800 to-slate-950 text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <p className="text-white/90 font-medium">For Oil & Gas Industry</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Oil & Gas Environmental Services</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Forensic geology, expert witness testimony, and hydraulic fracturing assessment from an internationally recognized authority
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                <div>
                                    <div className="text-4xl font-bold text-accent">40+</div>
                                    <div className="text-white/80 text-sm">Years O&G Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">2</div>
                                    <div className="text-white/80 text-sm">Published Books</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">9</div>
                                    <div className="text-white/80 text-sm">State P.G. Licenses</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">23</div>
                                    <div className="text-white/80 text-sm">Expert Witness Cases</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Discuss Your Project
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

            {/* Featured Books */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg mb-4">
                                <BookOpenIcon className="w-5 h-5 text-accent" />
                                <span className="text-accent font-semibold">Published Authority</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Industry-Leading Books on Oil & Gas Environmental Issues</h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                Dr. Jacobs has authored two comprehensive textbooks on hydraulic fracturing and petroleum contamination,
                                published by Wiley and McGraw-Hill
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="max-w-6xl mx-auto space-y-12">
                        {books.map((book, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gradient-to-r from-surface-light to-white p-8 rounded-2xl shadow-lg border-l-4 border-accent">
                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* Book Info */}
                                        <div className="md:col-span-2">
                                            <h3 className="text-3xl font-bold text-primary mb-3">{book.title}</h3>
                                            <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-secondary">
                                                <span className="font-semibold">{book.publisher} ({book.year})</span>
                                                <span>•</span>
                                                <span>{book.pages}</span>
                                                <span>•</span>
                                                <span>ISBN: {book.isbn}</span>
                                            </div>
                                            <p className="text-text-secondary mb-6">{book.description}</p>
                                            <div className="mb-6">
                                                <h4 className="font-bold text-sm text-accent uppercase mb-3">Key Topics Covered:</h4>
                                                <ul className="grid sm:grid-cols-2 gap-2">
                                                    {book.topics.map((topic, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm">
                                                            <span className="text-accent mt-0.5">•</span>
                                                            <span>{topic}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-accent/5 border border-accent/20 p-4 rounded-lg">
                                                <p className="text-sm text-text-secondary mb-2">
                                                    <strong className="text-primary">Who This Serves:</strong> {book.audience}
                                                </p>
                                                <Link
                                                    to={book.ctaLink}
                                                    className="text-accent hover:text-accent-dark font-semibold text-sm inline-flex items-center gap-2"
                                                >
                                                    {book.cta} <span>→</span>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Book Cover Placeholder */}
                                        <div className="flex items-center justify-center">
                                            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-xl shadow-xl max-w-[200px] aspect-[3/4] flex flex-col items-center justify-center text-center">
                                                <BookOpenIcon className="w-16 h-16 mb-4 opacity-50" />
                                                <div className="text-xs opacity-75 mb-2">{book.publisher}</div>
                                                <div className="font-bold text-sm leading-tight mb-2">{book.title.split(':')[0]}</div>
                                                <div className="text-xs opacity-75">{book.year}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal>
                        <div className="max-w-6xl mx-auto mt-8 text-center">
                            <Link
                                to="/books-publications"
                                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-semibold"
                            >
                                <BookOpenIcon className="w-5 h-5" />
                                View all books and publications
                                <span>→</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Oil & Gas Consulting Services</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            {service.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                                            <p className="text-text-secondary">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-sm text-accent uppercase mb-3">Capabilities:</h4>
                                        <ul className="space-y-2">
                                            {service.capabilities.map((capability, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-accent mt-0.5">✓</span>
                                                    <span className="text-sm">{capability}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Examples */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Oil & Gas Project Examples</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Representative case examples from expert witness, forensic analysis, and environmental assessment work
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-6">
                        {caseExamples.map((example, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-8 rounded-xl border-l-4 border-accent">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-semibold">
                                                {example.type}
                                            </span>
                                            <span className="text-text-secondary text-sm">{example.state}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-3">{example.title}</h3>
                                    <p className="text-text-secondary mb-3">{example.description}</p>
                                    <p className="text-sm">
                                        <strong className="text-accent">Outcome:</strong> {example.outcome}
                                    </p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Licensed in Key O&G States */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg mb-4">
                                <MapPinIcon className="w-5 h-5 text-accent" />
                                <span className="text-accent font-semibold">Nationwide Practice</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Licensed P.G. in Key Oil & Gas States</h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                Professional Geologist licenses in major petroleum-producing states enable expert witness testimony in multiple jurisdictions
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { state: 'Texas', abbr: 'TX', note: 'Major shale plays' },
                                    { state: 'Pennsylvania', abbr: 'PA', note: 'Marcellus Shale' },
                                    { state: 'California', abbr: 'CA', note: 'Offshore & onshore' },
                                    { state: 'Alaska', abbr: 'AK', note: 'North Slope' },
                                    { state: 'Wyoming', abbr: 'WY', note: 'Powder River Basin' },
                                    { state: 'Arkansas', abbr: 'AR', note: 'Fayetteville Shale' }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-surface-light rounded-lg">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-accent font-bold">{item.abbr}</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{item.state}</div>
                                            <div className="text-xs text-text-secondary">{item.note}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-surface text-center">
                                <p className="text-text-secondary">
                                    <strong className="text-primary">Also licensed:</strong> Idaho, Oregon, Washington (9 states total)
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6">Discuss Your Oil & Gas Environmental Project</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Expert witness testimony, forensic analysis, hydraulic fracturing assessment, and environmental compliance for oil & gas operators, attorneys, and landowners
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Contact via Form
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
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
