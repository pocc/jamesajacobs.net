import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// Simple icon components
const EnvelopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
)
const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
)
const HomeModernIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
)
const ClockIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const CurrencyDollarIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)
const DocumentCheckIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
)

export default function RealEstate() {
    const services = [
        {
            name: 'Phase I Environmental Site Assessment (ESA)',
            whatItIs: 'A Phase I is a records review and site visit to identify potential contamination before you buy a property',
            whenYouNeedIt: ['Before buying commercial or industrial property', 'Lender requirement for financing', 'Seller due diligence before listing'],
            timeline: '5-10 business days',
            costRange: '$3,000-$8,000',
            whatYouGet: ['Written report (30-50 pages)', 'Site history research', 'Contamination risk assessment', 'Recommendations for next steps']
        },
        {
            name: 'Phase II Environmental Site Assessment',
            whatItIs: 'A Phase II includes soil and groundwater testing to confirm whether contamination exists',
            whenYouNeedIt: ['When Phase I identifies potential concerns', 'Lender requirement if Phase I shows risks', 'To quantify cleanup costs before purchase'],
            timeline: '2-4 weeks',
            costRange: '$8,000-$25,000+',
            whatYouGet: ['Soil and groundwater laboratory analysis', 'Contamination extent mapping', 'Risk assessment report', 'Cleanup cost estimates (if needed)']
        },
        {
            name: 'Remediation Planning',
            whatItIs: 'A plan for cleaning up contaminated property to meet regulatory standards or transaction requirements',
            whenYouNeedIt: ['When Phase II confirms contamination', 'Before redevelopment of brownfield sites', 'To negotiate purchase price reductions'],
            timeline: '3-6 weeks',
            costRange: '$10,000-$50,000+',
            whatYouGet: ['Cleanup strategy analysis', 'Cost-benefit comparison of options', 'Regulatory coordination', 'Implementation timeline']
        }
    ]

    const propertyTypes = [
        { icon: '🏢', name: 'Commercial Properties', examples: 'Offices, retail centers, shopping malls' },
        { icon: '🏭', name: 'Industrial Sites', examples: 'Warehouses, manufacturing facilities, distribution centers' },
        { icon: '⛽', name: 'Gas Stations & Auto Repair', examples: 'Service stations, auto body shops, car washes' },
        { icon: '👔', name: 'Dry Cleaners', examples: 'Dry cleaning facilities (active or former)' },
        { icon: '🏘️', name: 'Residential Development', examples: 'Apartment sites, housing developments' },
        { icon: '🌱', name: 'Brownfield Redevelopment', examples: 'Former industrial sites being converted to new uses' }
    ]

    const caseExamples = [
        {
            title: 'Gas Station Purchase — Oakland, CA',
            situation: 'Buyer wanted to purchase an active gas station for conversion to retail use',
            outcome: 'Phase I identified underground tank leak. Phase II confirmed contamination. Buyer negotiated $200K price reduction to cover cleanup costs.',
            benefit: 'Saved $200K'
        },
        {
            title: 'Office Building Sale — San Francisco, CA',
            situation: 'Seller needed Phase I for buyer\'s lender requirement',
            outcome: 'Clean Phase I report. No environmental concerns identified. Deal closed in 45 days.',
            benefit: 'Fast closing'
        },
        {
            title: 'Brownfield Redevelopment — Richmond, CA',
            situation: 'Developer wanted to convert former industrial site to housing',
            outcome: 'Phase II assessment, remediation plan developed, state cleanup oversight. Site ready for housing development.',
            benefit: 'Site cleanup approved'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-700 to-teal-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <HomeModernIcon className="w-5 h-5" />
                                <p className="text-white/90 font-medium">For Property Owners & Real Estate Developers</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Environmental Services for Property Transactions</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Protect your investment with professional environmental site assessments before buying, selling, or developing property
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
                                <h3 className="text-xl font-bold mb-2">Why Environmental Assessment Matters:</h3>
                                <ul className="space-y-2 text-white/90">
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Avoid unexpected cleanup costs (can be $100K-$1M+)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Meet lender requirements for financing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Negotiate purchase price based on contamination</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-accent text-xl">✓</span>
                                        <span>Protect yourself from environmental liability</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Get a Quote
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

            {/* Services - Plain Language */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Environmental Assessment Services</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Clear explanations in plain language — no confusing technical jargon
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-12">
                        {services.map((service, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-8 rounded-2xl border-t-4 border-teal-600">
                                    <h3 className="text-3xl font-bold text-primary mb-4">{service.name}</h3>
                                    <div className="grid md:grid-cols-2 gap-8 mb-6">
                                        <div>
                                            <h4 className="font-bold text-accent uppercase text-sm mb-2">What It Is:</h4>
                                            <p className="text-text-secondary">{service.whatItIs}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-accent uppercase text-sm mb-2">When You Need It:</h4>
                                            <ul className="space-y-1">
                                                {service.whenYouNeedIt.map((item, i) => (
                                                    <li key={i} className="text-text-secondary text-sm flex items-start gap-2">
                                                        <span className="text-teal-600">•</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                                            <ClockIcon className="w-8 h-8 text-teal-600 flex-shrink-0" />
                                            <div>
                                                <div className="text-xs text-text-secondary uppercase">Timeline</div>
                                                <div className="font-bold">{service.timeline}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                                            <CurrencyDollarIcon className="w-8 h-8 text-teal-600 flex-shrink-0" />
                                            <div>
                                                <div className="text-xs text-text-secondary uppercase">Typical Cost</div>
                                                <div className="font-bold">{service.costRange}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 bg-white p-4 rounded-lg">
                                            <DocumentCheckIcon className="w-8 h-8 text-teal-600 flex-shrink-0" />
                                            <div>
                                                <div className="text-xs text-text-secondary uppercase">Deliverable</div>
                                                <div className="font-bold">Written Report</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-accent uppercase text-sm mb-3">What You Get:</h4>
                                        <ul className="grid sm:grid-cols-2 gap-2">
                                            {service.whatYouGet.map((item, i) => (
                                                <li key={i} className="text-sm flex items-start gap-2">
                                                    <span className="text-teal-600">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto mt-8 bg-teal-50 border border-teal-200 p-6 rounded-xl text-center">
                            <p className="text-teal-900">
                                <strong>Note:</strong> Costs vary depending on property size, history, and complexity. Contact us for a specific quote for your property.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Property Types We Serve */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Property Types We Serve</h2>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                        {propertyTypes.map((type, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                                    <div className="text-5xl mb-4">{type.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{type.name}</h3>
                                    <p className="text-sm text-text-secondary">{type.examples}</p>
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
                        <h2 className="text-4xl font-bold mb-4 text-center">Real-World Examples</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            How property owners and developers have benefited from environmental assessments
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {caseExamples.map((example, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-8 rounded-xl border-l-4 border-teal-600">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                                        <h3 className="text-2xl font-bold text-primary">{example.title}</h3>
                                        <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-lg text-sm font-semibold">
                                            {example.benefit}
                                        </span>
                                    </div>
                                    <p className="text-text-secondary mb-3"><strong>Situation:</strong> {example.situation}</p>
                                    <p className="text-text-secondary"><strong>Outcome:</strong> {example.outcome}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-teal-700 to-teal-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6">Get a Property Assessment Quote</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Contact us for a custom quote based on your property address, transaction timeline, and assessment needs
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Request a Quote
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
