import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'

const faqs = [
    { q: 'What is the water quality situation in rural India?', a: 'Many rural communities rely on groundwater that may contain elevated levels of fluoride, nitrate, total dissolved solids, and microbial contaminants affecting drinking water safety.' },
    { q: 'Why the Kadava River sub-basin?', a: 'The region has diverse geological formations influencing water chemistry, intensive agriculture, and rapidly growing populations creating unique water quality challenges.' },
    { q: 'What methods are used?', a: 'Water sampling, geochemical analysis, GIS mapping, and statistical modeling of water quality parameters to create a comprehensive water quality assessment.' },
    { q: 'How does this help local communities?', a: 'Identification of safe water sources, contamination mapping, and recommendations for water treatment help communities access clean drinking water.' },
    { q: 'What is the Fulbright connection?', a: 'Through the Fulbright Senior Specialist program, James provides technical expertise and mentoring to Indian students and faculty at SRTM University in Nanded.' },
]

export default function SafeWater() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div>
            <HeroPage
                title="Safe Water in Rural India"
                subtitle="Fulbright Senior Specialist project focused on safe drinking water quality assessment in the Kadava River sub-basin."
                breadcrumbs={[
                    { label: 'Home', to: '/' },
                    { label: 'Research', to: '/research' },
                    { label: 'Safe Water' },
                ]}
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Overview</h2>
                            <SectionDivider />
                            <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                                A Fulbright Senior Specialist project focused on safe drinking
                                water in rural India. The study area is the Kadava River sub-basin
                                in Nashik, Maharashtra, where diverse geological formations influence
                                water chemistry and growing populations create urgent water quality needs.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h2 className="font-serif text-2xl font-bold mb-2">Study Area</h2>
                                <SectionDivider />
                                <p className="mt-4 text-text-secondary leading-relaxed">
                                    The Kadava River sub-basin in Nashik, Maharashtra features diverse
                                    geological formations, intensive agriculture, and rapidly growing
                                    populations creating complex groundwater quality challenges.
                                </p>
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl font-bold mb-2">Host University</h2>
                                <SectionDivider />
                                <p className="mt-4 text-text-secondary leading-relaxed">
                                    SRTM University, Nanded, India — where James sponsors the first
                                    AIPG International Student Chapter (since 2017) and provides
                                    mentoring to geology students and faculty.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <div className="mt-8 max-w-3xl space-y-3">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-xl border border-surface-dark/50 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                                >
                                    <span className="font-medium text-text text-sm">{faq.q}</span>
                                    <svg
                                        className={`w-4 h-4 text-accent-dark flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openFaq === i && (
                                    <div className="px-5 pb-4">
                                        <p className="text-text-secondary text-sm leading-relaxed border-t border-surface-dark/30 pt-3">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Link to="/research" className="inline-block text-accent-dark hover:text-primary font-semibold transition-colors no-underline">
                        &larr; Back to all research
                    </Link>
                </div>
            </section>
        </div>
    )
}
