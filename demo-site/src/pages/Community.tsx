import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// Simple icon components
const EnvelopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
)
const PhoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
)
const HomeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
)
const ExclamationTriangleIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
)
const HeartIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
)
const DocumentArrowDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
)

export default function Community() {
    const vaporIntrusionSources = [
        { icon: '⛽', name: 'Old Gas Stations', description: 'Underground storage tanks that may have leaked gasoline or diesel' },
        { icon: '👔', name: 'Dry Cleaners', description: 'Chemicals used in dry cleaning (like PCE) can contaminate soil' },
        { icon: '🏭', name: 'Industrial Sites', description: 'Former factories or manufacturing facilities' },
        { icon: '🚰', name: 'Leaky Sewer Pipes', description: 'Gases from sewer systems can enter homes through cracks' }
    ]

    const healthConcerns = [
        { type: 'Short-term', symptoms: ['Headaches', 'Dizziness', 'Nausea', 'Eye irritation'], severity: 'Immediate discomfort' },
        { type: 'Long-term', symptoms: ['Increased cancer risk', 'Liver damage', 'Kidney problems', 'Nervous system effects'], severity: 'From prolonged exposure' }
    ]

    const whatYouCanDo = [
        { step: 1, action: 'Request Indoor Air Testing', description: 'Contact your local health department or EPA regional office to request free or low-cost air testing in your home', icon: '🧪' },
        { step: 2, action: 'Understand Your Results', description: 'Lab results will show chemical levels. Compare them to EPA safe levels. We can help explain what the numbers mean', icon: '📊' },
        { step: 3, action: 'Explore Mitigation Options', description: 'If contamination is found, solutions include better ventilation, vapor barriers, or sub-slab depressurization systems', icon: '🛠️' },
        { step: 4, action: 'Know Your Rights', description: 'You may be eligible for free cleanup if contamination came from a nearby business or industrial site', icon: '⚖️' }
    ]

    const workshops = [
        { title: 'Understanding Vapor Intrusion', duration: '90 minutes', format: 'Free community workshop', description: 'Learn what vapor intrusion is, how it affects your home, and what you can do about it' },
        { title: 'Is My Water Safe?', duration: '60 minutes', format: 'Free community workshop', description: 'Basics of well water testing, understanding water quality reports, and when to be concerned' },
        { title: 'Talking to Landlords About Indoor Air Quality', duration: '45 minutes', format: 'Free community workshop', description: 'Know your rights as a renter and how to request air quality testing' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-light to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <HomeIcon className="w-5 h-5" />
                                <p className="text-white/90 font-medium">For Community Members & Concerned Residents</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Community Environmental Resources</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Plain-language guidance for understanding vapor intrusion, contamination, and indoor air quality issues in your home
                            </p>
                            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
                                <div className="flex items-start gap-4">
                                    <HeartIcon className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Committed to Environmental Justice</h3>
                                        <p className="text-white/90">
                                            Sliding scale fees available based on income. Pro bono consulting for communities facing environmental health threats.
                                            Everyone deserves clean air and safe water.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="tel:510-590-1098"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    Call for Help: 510-590-1098
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Contact via Form
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What is Vapor Intrusion */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">What is Vapor Intrusion?</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            A simple explanation in plain language — no confusing technical terms
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-xl mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-green-900">Here's what happens:</h3>
                                <p className="text-lg text-green-800 leading-relaxed mb-4">
                                    <strong>Vapor intrusion</strong> happens when chemicals in the soil or groundwater underneath or near your home turn into vapors (gases)
                                    and seep up into your home through cracks in the foundation, gaps around pipes, or through dirt-floor basements.
                                </p>
                                <p className="text-lg text-green-800 leading-relaxed">
                                    Think of it like this: Just as steam from a pot of boiling water rises into the air, certain chemicals in contaminated soil
                                    can "evaporate" and rise into the air inside your home.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-surface-light p-8 rounded-xl">
                                <h3 className="text-2xl font-bold mb-4">Common Sources Near Homes</h3>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {vaporIntrusionSources.map((source, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="text-4xl">{source.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">{source.name}</h4>
                                                <p className="text-text-secondary">{source.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Health Concerns */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Health Concerns</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Breathing contaminated air over time can affect your health
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        {healthConcerns.map((concern, index) => (
                            <ScrollReveal key={index}>
                                <div className={`p-8 rounded-xl ${concern.type === 'Short-term' ? 'bg-yellow-50 border-l-4 border-yellow-600' : 'bg-red-50 border-l-4 border-red-600'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <ExclamationTriangleIcon className={`w-8 h-8 ${concern.type === 'Short-term' ? 'text-yellow-600' : 'text-red-600'}`} />
                                        <h3 className="text-2xl font-bold">{concern.type} Effects</h3>
                                    </div>
                                    <p className="text-sm font-semibold text-text-secondary mb-3">{concern.severity}</p>
                                    <ul className="space-y-2">
                                        {concern.symptoms.map((symptom, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <span className={concern.type === 'Short-term' ? 'text-yellow-600' : 'text-red-600'}>•</span>
                                                <span>{symptom}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
                            <p className="text-center text-text-secondary">
                                <strong>Important:</strong> Not everyone exposed to vapor intrusion will get sick. It depends on the chemical type,
                                concentration levels, and how long you're exposed. Testing is the only way to know for sure.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* What You Can Do */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">What You Can Do</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Step-by-step actions you can take to protect your family
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto space-y-8">
                        {whatYouCanDo.map((item, index) => (
                            <ScrollReveal key={index}>
                                <div className="flex items-start gap-6 bg-surface-light p-8 rounded-xl">
                                    <div className="text-5xl flex-shrink-0">{item.icon}</div>
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                {item.step}
                                            </div>
                                            <h3 className="text-2xl font-bold text-primary">{item.action}</h3>
                                        </div>
                                        <p className="text-text-secondary text-lg">{item.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Support Services */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">How I Can Help Your Community</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Plain-language consulting, public meeting support, and educational workshops
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                        <ScrollReveal>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Plain-Language Consulting</h3>
                                <p className="text-text-secondary mb-4">
                                    I explain technical reports and test results in simple terms you can understand. No confusing jargon.
                                </p>
                                <p className="text-sm font-semibold text-green-700">Sliding scale fees based on income</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🏛️</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Public Meeting Presentations</h3>
                                <p className="text-text-secondary mb-4">
                                    I can present at community meetings, explain environmental health issues, and answer residents' questions.
                                </p>
                                <p className="text-sm font-semibold text-green-700">Pro bono for environmental justice communities</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Health Department Coordination</h3>
                                <p className="text-text-secondary mb-4">
                                    I work with local health departments and EPA to ensure your concerns are heard and addressed.
                                </p>
                                <p className="text-sm font-semibold text-green-700">23 years of public service experience</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Free Workshops */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Free Community Workshops</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Educational workshops for community groups, neighborhood associations, and concerned residents
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {workshops.map((workshop, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-6 rounded-xl border-l-4 border-green-600">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                                        <h3 className="text-2xl font-bold">{workshop.title}</h3>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-lg text-sm font-semibold">
                                            {workshop.duration}
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold text-green-700 mb-2">{workshop.format}</p>
                                    <p className="text-text-secondary">{workshop.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                        <ScrollReveal>
                            <div className="bg-green-50 p-6 rounded-xl text-center">
                                <p className="text-green-900 font-semibold mb-3">
                                    Want to schedule a workshop for your community group or neighborhood association?
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Request a Workshop
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Downloadable Resources */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Free Downloadable Guides</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Educational resources you can download, print, and share
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <ScrollReveal>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <DocumentArrowDownIcon className="w-12 h-12 text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-3">Vapor Intrusion: A Homeowner's Guide</h3>
                                <p className="text-text-secondary mb-4">
                                    8-page guide explaining vapor intrusion in simple terms, with pictures and diagrams. Written at 8th grade reading level.
                                </p>
                                <button className="text-accent hover:text-accent-dark font-semibold flex items-center gap-2">
                                    Download PDF (Coming Soon)
                                    <span>→</span>
                                </button>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <DocumentArrowDownIcon className="w-12 h-12 text-accent mb-4" />
                                <h3 className="text-xl font-bold mb-3">Understanding Your Indoor Air Test Results</h3>
                                <p className="text-text-secondary mb-4">
                                    Step-by-step guide to reading lab reports, comparing numbers to safe levels, and knowing when to take action.
                                </p>
                                <button className="text-accent hover:text-accent-dark font-semibold flex items-center gap-2">
                                    Download PDF (Coming Soon)
                                    <span>→</span>
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Important Contacts */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Important Contact Information</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Government agencies that can help with environmental health concerns
                        </p>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto bg-surface-light p-8 rounded-xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-bold mb-2">U.S. Environmental Protection Agency (EPA)</h3>
                                <p className="text-sm text-text-secondary mb-1">Region 9 (CA, NV, AZ, HI)</p>
                                <p className="text-sm">📞 1-866-EPA-WEST (1-866-372-9378)</p>
                                <p className="text-sm">🌐 epa.gov</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">California EPA (CalEPA)</h3>
                                <p className="text-sm text-text-secondary mb-1">State environmental health</p>
                                <p className="text-sm">📞 1-800-69-TOXIC (1-800-698-6942)</p>
                                <p className="text-sm">🌐 calepa.ca.gov</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Local Health Department</h3>
                                <p className="text-sm text-text-secondary mb-1">County environmental health</p>
                                <p className="text-sm">Search: "[Your County] environmental health department"</p>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Regional Water Quality Control Board</h3>
                                <p className="text-sm text-text-secondary mb-1">Groundwater contamination issues</p>
                                <p className="text-sm">🌐 waterboards.ca.gov</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-green-700 to-green-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <HeartIcon className="w-16 h-16 text-accent mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-6">Get Help Today</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            If you're concerned about vapor intrusion, indoor air quality, or contamination in your neighborhood,
                            reach out for plain-language guidance. Sliding scale fees and pro bono work available.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="tel:510-590-1098"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                Call 510-590-1098
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Contact via Form
                            </Link>
                        </div>
                        <p className="mt-8 text-white/70 text-sm">
                            Dr. James Jacobs has served as an elected wastewater commissioner for 23 years, demonstrating a long-term commitment to community environmental health
                        </p>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
