import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

// Simple icon components
const EnvelopeIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
)
const AcademicCapIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
)
const GlobeAltIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
)
const DocumentArrowDownIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
)
const MicrophoneIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
)

export default function Speaking() {
    const keynotes = [
        {
            title: 'Sea Level Rise & Groundwater Flooding: A Clear and Present Danger',
            duration: '45-60 minutes',
            audience: 'Coastal planners, utilities, environmental professionals',
            description: 'Emerging threat of groundwater flooding in coastal communities due to sea level rise. Includes case studies from Bay Area, predictive modeling using Bayesian networks, and adaptation strategies.',
            topics: ['Sea level rise impacts', 'Groundwater table elevation', 'Sanitary sewer overflow prediction', 'Climate adaptation planning']
        },
        {
            title: 'Vapor Intrusion: From Science to Policy',
            duration: '45-60 minutes',
            audience: 'Regulators, consultants, environmental health professionals',
            description: 'Evolution of vapor intrusion science and policy over four decades. EPA guidance history, sewer gas pathways, mitigation strategies, and future research directions.',
            topics: ['EPA vapor intrusion guidance evolution', 'Sewer-to-indoor-air pathways', 'Mitigation system effectiveness', 'Emerging research areas']
        },
        {
            title: 'Four Decades in Environmental Geology: Lessons Learned',
            duration: '45-60 minutes',
            audience: 'General environmental science audience, students, early-career professionals',
            description: 'Career retrospective covering major environmental issues from 1985 to present. How the field has evolved, persistent challenges, and advice for the next generation.',
            topics: ['Career development', 'Environmental field evolution', 'Persistent challenges', 'Future of the profession']
        }
    ]

    const technicalPresentations = [
        { title: 'Sewer-to-Indoor-Air Pathways: Emerging Research', duration: '30-45 min', ceu: true },
        { title: 'Constructed Wetlands as Wastewater Treatment Farms', duration: '30-45 min', ceu: true },
        { title: 'Expert Witness Testimony: Best Practices for Technical Professionals', duration: '30-45 min', ceu: false },
        { title: 'Hydraulic Fracturing Environmental Assessment', duration: '30-45 min', ceu: true },
        { title: 'Bayesian Networks for Environmental Prediction', duration: '30-45 min', ceu: true },
        { title: 'Groundwater Contamination Forensics', duration: '30-45 min', ceu: true }
    ]

    const workshops = [
        {
            title: 'Vapor Intrusion Assessment Methodology',
            duration: '4 hours (half-day)',
            format: 'Hands-on workshop with case studies',
            ceu: 'Yes - 4 CEU credits',
            audience: 'Environmental consultants, regulators, site assessors',
            description: 'Comprehensive training on EPA vapor intrusion assessment methodologies. Includes field sampling techniques, data interpretation, and mitigation system design.',
            outline: ['EPA 2015 Guidance overview', 'Sampling design and protocols', 'Data analysis and interpretation', 'Mitigation strategies', 'Case study exercises']
        },
        {
            title: 'Sewer Air Testing for Utilities',
            duration: '8 hours (full-day)',
            format: 'Classroom + field demonstration',
            ceu: 'Yes - 8 CEU credits',
            audience: 'Utility managers, engineers, operators',
            description: 'Practical workshop on sewer air testing for methane and VOCs. Includes hands-on demonstration of field equipment and data analysis techniques.',
            outline: ['Why test sewer air', 'Equipment and methodologies', 'Field sampling demonstration', 'Data analysis workshop', 'Capital planning integration']
        },
        {
            title: 'Groundwater Contamination Forensics',
            duration: '4 hours (half-day)',
            format: 'Interactive workshop with case studies',
            ceu: 'Yes - 4 CEU credits',
            audience: 'Environmental consultants, attorneys, expert witnesses',
            description: 'Forensic techniques for identifying contamination sources, dating releases, and apportioning liability. Multiple case study exercises.',
            outline: ['Source identification techniques', 'Age-dating methodologies', 'Plume migration modeling', 'Cost allocation analysis', 'Expert witness considerations']
        },
        {
            title: 'Professional Geology Exam Prep',
            duration: '6 hours (3/4-day)',
            format: 'Review workshop with practice problems',
            ceu: 'No (exam prep)',
            audience: 'AIPG student section members, geology graduate students',
            description: 'Focused review for the AIPG Professional Geologist exam. Covers key topic areas with practice problems and test-taking strategies.',
            outline: ['Exam structure and format', 'Hydrogeology review', 'Structural geology review', 'Environmental regulations', 'Practice problems and solutions']
        }
    ]

    const internationalExperience = [
        { country: 'India', institution: 'SRTM University, Nanded', role: 'Fulbright Senior Specialist', year: '2018' },
        { country: 'Germany', institution: 'FH Nordhausen University', role: 'Fulbright Senior Specialist', year: '2017' },
        { country: 'Jamaica', institution: 'University of the West Indies', role: 'Guest Lecturer', year: '2015' },
        { country: 'Cabo Verde', institution: 'Ministry of Agriculture', role: 'U.S. State Department Virtual Fellow', year: '2021-2022' },
        { country: 'United States', institution: 'UC Berkeley, UC Santa Cruz, San Francisco State', role: 'Guest Lecturer', year: 'Multiple years' }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-dark to-surface">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-purple-800 to-purple-950 text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <MicrophoneIcon className="w-5 h-5" />
                                <p className="text-white/90 font-medium">For Conference Organizers & Event Planners</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Professional Speaking & Workshops</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Keynote presentations, technical workshops, and guest lectures on environmental geology topics worldwide
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                <div>
                                    <div className="text-4xl font-bold text-accent">5+</div>
                                    <div className="text-white/80 text-sm">Countries Taught</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">4×</div>
                                    <div className="text-white/80 text-sm">Fulbright Specialist</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">1000+</div>
                                    <div className="text-white/80 text-sm">Students Taught</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">40+</div>
                                    <div className="text-white/80 text-sm">Years Experience</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Inquire About Speaking
                                </Link>
                                <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                                    <DocumentArrowDownIcon className="w-5 h-5" />
                                    Download Speaker Kit (Coming Soon)
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Keynote Topics */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg mb-4">
                                <AcademicCapIcon className="w-5 h-5 text-accent" />
                                <span className="text-accent font-semibold">Available Topics</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">Keynote Presentations</h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                45-60 minute keynote talks suitable for general audiences and environmental science conferences
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-8">
                        {keynotes.map((keynote, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gradient-to-r from-surface-light to-white p-8 rounded-xl border-l-4 border-purple-600 shadow-md">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-bold text-primary">{keynote.title}</h3>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm font-semibold">
                                            {keynote.duration}
                                        </span>
                                    </div>
                                    <p className="text-sm text-text-secondary mb-4"><strong>Target Audience:</strong> {keynote.audience}</p>
                                    <p className="text-text-secondary mb-4">{keynote.description}</p>
                                    <div>
                                        <h4 className="font-semibold text-sm text-accent uppercase mb-2">Key Topics:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {keynote.topics.map((topic, i) => (
                                                <span key={i} className="bg-purple-50 text-purple-800 px-3 py-1 rounded-lg text-sm">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Presentations */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Technical Presentations</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            30-45 minute technical talks for specialized audiences and concurrent sessions
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                        {technicalPresentations.map((presentation, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-6 rounded-xl shadow-md">
                                    <h3 className="text-lg font-bold text-primary mb-2">{presentation.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                                        <span>{presentation.duration}</span>
                                        {presentation.ceu && (
                                            <>
                                                <span>•</span>
                                                <span className="text-accent font-semibold">CEU Eligible</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workshops */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Workshops & Training</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Half-day and full-day workshops with hands-on training and CEU credits
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-8">
                        {workshops.map((workshop, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-surface-light p-8 rounded-2xl border-t-4 border-accent">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                                        <h3 className="text-3xl font-bold text-primary">{workshop.title}</h3>
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="bg-accent/10 text-accent px-3 py-1 rounded-lg text-sm font-semibold">
                                                {workshop.duration}
                                            </span>
                                            <span className="text-green-700 text-sm font-semibold">{workshop.ceu}</span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-text-secondary mb-2"><strong>Format:</strong> {workshop.format}</p>
                                    <p className="text-sm text-text-secondary mb-4"><strong>Target Audience:</strong> {workshop.audience}</p>
                                    <p className="text-text-secondary mb-6">{workshop.description}</p>
                                    <div>
                                        <h4 className="font-semibold text-sm text-accent uppercase mb-3">Workshop Outline:</h4>
                                        <ul className="grid sm:grid-cols-2 gap-2">
                                            {workshop.outline.map((item, i) => (
                                                <li key={i} className="text-sm flex items-start gap-2">
                                                    <span className="text-accent">•</span>
                                                    {item}
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

            {/* International Experience */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-lg mb-4">
                                <GlobeAltIcon className="w-5 h-5 text-accent" />
                                <span className="text-accent font-semibold">Global Reach</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">International Teaching Experience</h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                4× Fulbright Senior Specialist with teaching experience across multiple countries
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-4">
                        {internationalExperience.map((experience, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-6 rounded-xl shadow-md flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <GlobeAltIcon className="w-6 h-6 text-purple-700" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{experience.country}</h3>
                                            <p className="text-sm text-text-secondary">{experience.institution}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-accent font-semibold">{experience.role}</div>
                                        <div className="text-sm text-text-secondary">{experience.year}</div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Information */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Booking Information</h2>
                    </ScrollReveal>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <ScrollReveal>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">📅</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Availability</h3>
                                <p className="text-sm text-text-secondary">Generally available year-round. Prefer 8-week lead time for scheduling.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">✈️</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Travel</h3>
                                <p className="text-sm text-text-secondary">Willing to travel nationally and internationally. Virtual presentations also available.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-3xl">💵</span>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Fees</h3>
                                <p className="text-sm text-text-secondary">Negotiable. Discounted rates for nonprofits, universities, and student organizations.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-purple-800 to-purple-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6">Book Dr. Jacobs for Your Event</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Contact us to discuss keynote presentations, technical workshops, or guest lectures for your conference, organization, or university
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Inquire About Speaking
                            </Link>
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
