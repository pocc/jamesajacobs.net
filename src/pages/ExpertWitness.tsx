import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// Simple icon components
const EnvelopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
)
const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
)
const DocumentArrowDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
)
const MapPinIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
)

export default function ExpertWitness() {
    const caseTypes = [
        {
            category: 'Groundwater Contamination',
            description: 'Forensic analysis of contamination sources, plume migration, and remediation cost disputes',
            examples: ['Underground storage tank releases', 'Industrial facility impacts', 'Dry cleaner solvent contamination']
        },
        {
            category: 'Remediation Cost Recovery',
            description: 'Expert testimony on cleanup costs, feasibility analysis, and cost allocation among responsible parties',
            examples: ['Cleanup cost estimation', 'Alternative analysis', 'Cost-benefit assessments']
        },
        {
            category: 'Oil & Gas Valuation',
            description: 'Resource evaluation, hydraulic fracturing disputes, and petroleum contamination analysis',
            examples: ['Reserve valuation', 'Fracking environmental impacts', 'Pipeline and well decommissioning']
        },
        {
            category: 'Vapor Intrusion Liability',
            description: 'Indoor air quality assessments, pathway analysis, and mitigation system evaluation',
            examples: ['Subslab to indoor air pathways', 'Sewer gas intrusion', 'Mitigation system design review']
        }
    ]

    const stateMap = [
        { state: 'Alaska', abbr: 'AK', license: 'P.G.' },
        { state: 'Arkansas', abbr: 'AR', license: 'P.G.' },
        { state: 'California', abbr: 'CA', license: 'P.G., C.H.G.' },
        { state: 'Idaho', abbr: 'ID', license: 'P.G.' },
        { state: 'Oregon', abbr: 'OR', license: 'P.G.' },
        { state: 'Pennsylvania', abbr: 'PA', license: 'P.G.' },
        { state: 'Texas', abbr: 'TX', license: 'P.G.' },
        { state: 'Washington', abbr: 'WA', license: 'P.G.' },
        { state: 'Wyoming', abbr: 'WY', license: 'P.G.' }
    ]

    const litigationProcess = [
        { step: 'Initial Consultation', timeline: '24-48 hours', description: 'Confidential discussion of case details and expert qualifications' },
        { step: 'Site Assessment', timeline: '1-2 weeks', description: 'Field investigation, data review, and forensic analysis' },
        { step: 'Expert Report', timeline: '2-4 weeks', description: 'Comprehensive written opinion with technical analysis and exhibits' },
        { step: 'Deposition Preparation', timeline: 'Ongoing', description: 'Review of opposing experts, preparation for testimony' },
        { step: 'Trial Testimony', timeline: 'As scheduled', description: 'Expert witness testimony in court proceedings' }
    ]

    const credentials = [
        { title: 'Education', items: ['Ph.D. in Geology, UC Santa Cruz', 'M.S. in Geology, UC Santa Cruz', 'B.S. in Geology, San Diego State University'] },
        { title: 'Professional Designations', items: ['Professional Geologist (P.G.) — 9 states', 'Certified Hydrogeologist (C.H.G.)', 'Florida Licensed Geologist (FGS)'] },
        { title: 'Publications', items: ['100+ peer-reviewed articles', '5 published books (McGraw-Hill, Wiley)', 'Contributor to EPA guidance documents'] },
        { title: 'Professional Affiliations', items: ['Fellow, American Institute of Professional Geologists (AIPG)', 'Fellow, Geological Society of America (GSA)', 'Fellow, National Ground Water Association (NGWA)', 'Fellow, Geological Society of London (GSL)'] }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-dark to-surface">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <p className="text-white/90 font-medium">For Attorneys & Insurance Companies</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Expert Witness & Litigation Support</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Four decades of forensic geology and hydrogeology expertise for environmental litigation
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                <div>
                                    <div className="text-4xl font-bold text-accent">23</div>
                                    <div className="text-white/80">Court Cases</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">9</div>
                                    <div className="text-white/80">State Licenses</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">40+</div>
                                    <div className="text-white/80">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">100+</div>
                                    <div className="text-white/80">Publications</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Schedule a Confidential Case Review
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

            {/* Case Type Examples */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Areas of Expert Testimony</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Providing forensic analysis and expert witness services across multiple environmental litigation contexts
                        </p>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {caseTypes.map((caseType, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-8 rounded-xl border-l-4 border-accent">
                                    <h3 className="text-2xl font-bold mb-3 text-primary">{caseType.category}</h3>
                                    <p className="text-text-secondary mb-4">{caseType.description}</p>
                                    <ul className="space-y-2">
                                        {caseType.examples.map((example, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-accent mt-1.5">•</span>
                                                <span className="text-sm">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Geographic Coverage */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg mb-4">
                                <MapPinIcon className="w-5 h-5 text-accent" />
                                <span className="text-accent font-semibold">Nationwide Practice</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Licensed Professional Geologist in 9 States</h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                Dr. Jacobs holds active Professional Geologist (P.G.) licenses across the United States, enabling expert witness testimony in multiple jurisdictions
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {stateMap.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-surface-light rounded-lg">
                                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-accent font-bold">{item.abbr}</span>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{item.state}</div>
                                            <div className="text-sm text-text-secondary">{item.license}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-surface text-center">
                                <p className="text-text-secondary">
                                    <strong className="text-primary">Also licensed:</strong> Certified Hydrogeologist (C.H.G.), Florida Licensed Geologist (FGS)
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Litigation Process */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Litigation Support Process</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Structured engagement process from initial consultation through trial testimony
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto">
                        {litigationProcess.map((phase, index) => (
                            <ScrollReveal key={index}>
                                <div className="relative pl-8 pb-12 last:pb-0">
                                    {/* Timeline line */}
                                    {index < litigationProcess.length - 1 && (
                                        <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-accent/20"></div>
                                    )}
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 top-1.5 w-6 h-6 bg-accent rounded-full border-4 border-white shadow-md"></div>
                                    <div className="bg-surface-light p-6 rounded-xl ml-6">
                                        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                                            <h3 className="text-2xl font-bold text-primary">{phase.step}</h3>
                                            <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-semibold">
                                                {phase.timeline}
                                            </span>
                                        </div>
                                        <p className="text-text-secondary">{phase.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials & Qualifications */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Credentials & Qualifications</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {credentials.map((section, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-8 rounded-xl shadow-md">
                                    <h3 className="text-2xl font-bold mb-4 text-primary">{section.title}</h3>
                                    <ul className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="text-accent text-xl mt-0.5">✓</span>
                                                <span className="text-text-secondary">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Litigation Support Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Litigation Support Services</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: 'Site Assessment & Forensic Analysis', description: 'Comprehensive field investigation and contamination source identification' },
                            { title: 'Expert Reports & Affidavits', description: 'Detailed technical analysis with visual exhibits and clear conclusions' },
                            { title: 'Deposition Preparation & Testimony', description: 'Thorough preparation for deposition with opposing counsel' },
                            { title: 'Trial Exhibits & Demonstrative Evidence', description: 'Clear maps, charts, diagrams, and visual aids for jury comprehension' }
                        ].map((service, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-6 rounded-xl border-t-4 border-accent">
                                    <h3 className="text-lg font-bold mb-3 text-primary">{service.title}</h3>
                                    <p className="text-sm text-text-secondary">{service.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6">Schedule a Confidential Case Review</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Contact Dr. Jacobs to discuss your environmental litigation case and expert witness needs
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
                        <div className="mt-8">
                            <button className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                                <DocumentArrowDownIcon className="w-5 h-5" />
                                Download Expert Witness CV (Coming Soon)
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
