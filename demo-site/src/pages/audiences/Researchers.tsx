import { Link } from 'react-router-dom'
import HeroPage from '../../components/HeroPage'
import ScrollReveal from '../../components/ScrollReveal'

const researchAreas = [
    {
        title: 'Sea Level Rise & Coastal Systems',
        desc: 'Tidal flooding impacts on sewer infrastructure, stormwater management, real-time monitoring',
    },
    {
        title: 'Sewer Systems & Vapor Intrusion',
        desc: 'VOC pathways, indoor air quality, building vulnerability assessment',
    },
    {
        title: 'Constructed Wetlands',
        desc: 'Wastewater treatment, nutrient removal, sustainable water management',
    },
    {
        title: 'Safe Water Access',
        desc: 'Water quality, rural water systems, international development',
    },
]

const credentials = [
    '100+ peer-reviewed publications',
    '5 authored books (oil, hydraulic fracturing, safe water)',
    'Ph.D. in Earth Sciences (UC Santa Cruz)',
    '4 Fulbright Senior Specialist appointments',
    'International teaching (India, Denmark, Brazil, Guatemala, others)',
]

const collaboration = [
    'Co-authorship opportunities',
    'Guest lectures & seminars',
    'Research data sharing',
    'Grant proposal collaboration',
    'Student mentorship',
]

export default function Researchers() {
    return (
        <div>
            <HeroPage
                title="Researchers & Academics"
                subtitle="100+ peer-reviewed publications | Open to collaboration | International teaching experience"
            />

            {/* Key Message */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-2xl p-8 md:p-12 text-white">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                Field-tested science addressing real-world environmental challenges
                            </h2>
                            <p className="text-white/80 leading-relaxed text-lg mb-6">
                                Dr. Jacobs combines rigorous academic research with 40+ years of field experience. He's published 100+ peer-reviewed articles and welcomes collaboration opportunities with researchers worldwide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    Discuss Research Collaboration
                                </Link>
                                <Link
                                    to="/books"
                                    className="inline-block border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-colors no-underline text-center"
                                >
                                    View Publications
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Research Areas */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Active Research Areas
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {researchAreas.map((area) => (
                                <div
                                    key={area.title}
                                    className="border-l-4 border-amber-600 bg-white p-6 rounded-r-lg"
                                >
                                    <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                                        {area.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm">{area.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Link
                                to="/research"
                                className="inline-flex items-center gap-2 text-accent-dark hover:text-primary font-semibold no-underline transition-colors"
                            >
                                Explore All Research
                                <span>&rarr;</span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Academic Background */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Academic Background
                        </h2>
                        <div className="space-y-4">
                            {credentials.map((credential) => (
                                <div
                                    key={credential}
                                    className="flex items-start gap-3 bg-surface p-4 rounded-lg"
                                >
                                    <span className="text-amber-600 text-xl flex-shrink-0">✓</span>
                                    <span className="text-text-secondary">{credential}</span>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Collaboration Opportunities */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Collaboration Opportunities
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {collaboration.map((item) => (
                                <div
                                    key={item}
                                    className="bg-white p-4 rounded-lg text-text-secondary text-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Recent Publications */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
                            Recent Focus Areas
                        </h2>
                        <ul className="space-y-3">
                            {[
                                'Climate change impacts on coastal sewer infrastructure',
                                'Real-time monitoring using Solinst Level Loggers and SmartCover sensors',
                                'Vapor intrusion pathways in residential buildings',
                                'Constructed wetlands for wastewater treatment in developing nations',
                                'Hydraulic fracturing and groundwater contamination',
                            ].map((topic) => (
                                <li
                                    key={topic}
                                    className="flex items-start gap-3 text-text-secondary"
                                >
                                    <span className="text-amber-600 mt-1 flex-shrink-0">✓</span>
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
                            Let's Collaborate
                        </h2>
                        <p className="mt-4 text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                            Interested in research collaboration, co-authorship, or guest lectures? Get in touch.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-8 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                        >
                            Contact Dr. Jacobs
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
