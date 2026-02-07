import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'

const crisisStats = [
    { value: '522M', label: 'people in India practice open defecation' },
    { value: '21%', label: 'of communicable diseases linked to unsafe water' },
    { value: '500+', label: 'children under 5 die daily from diarrhea in India' },
    { value: '163M', label: 'people in India lack access to safe water' },
]

const waterParameters = [
    'Calcium (Ca)', 'Magnesium (Mg)', 'Sodium (Na)', 'Potassium (K)',
    'Chloride (Cl)', 'Sulfate (SO₄)', 'Nitrate (NO₃)', 'Fluoride (F)',
    'Total Hardness', 'Total Dissolved Solids', 'Dissolved Oxygen',
    'Oxidation-Reduction Potential', 'pH', 'Temperature',
    'Conductivity', 'E. coli', 'Total Coliform',
]

const faqs = [
    { q: 'What is the water quality situation in rural India?', a: 'India has the second largest population on Earth with more than 1 billion people. Over 163 million people lack access to safe water and 201 million lack access to improved sanitation. The World Bank estimates that 21 percent of communicable diseases in India are linked to unsafe water and lack of proper hygiene practices.' },
    { q: 'Why the Kadava River sub-basin?', a: 'The Kadava River Sub-Basin drains into the Godavari River in Maharashtra, India. Most farmers in the rural area rely on hand-dug water supply wells, some hundreds of years old, lacking even basic well head protection or surface seals. The general geology is characterized by younger and older flood plains, with the late Cretaceous Deccan Plateau basalts — one of the largest volcanic features on Earth — featuring fractured bedrock aquifers.' },
    { q: 'What is the project approach?', a: 'The project teaches graduate geology and environmental science students in the classroom and field to inspect rural water supply wells, with the goal of helping farmers rehabilitate and seal wells worthy of repair and develop groundwater management plans. An India-specific inspection methodology and checklist helps guide field decisions along with laboratory analytical results.' },
    { q: 'How does this help local communities?', a: 'Graduate students are trained as teachers to instruct local farmers on best groundwater protection practices. Field studies feature actual well inspections, well head mitigation design and implementation, mapping of agricultural/industrial and climate-change drivers, and methodologies to improve water quality in historic wells. Some hand-dug wells may be deemed unsuitable for domestic consumption.' },
    { q: 'What is the Fulbright connection?', a: 'Through the Fulbright Senior Specialist program, James provides technical expertise and mentoring to Indian students and faculty at SRTM University in Nanded, India. He is the sponsor of the first AIPG International Student Chapter at SRTM University (since 2017).' },
]

export default function SafeWater() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div>
            <HeroPage
                title="Safe Water in Rural India"
                subtitle="Fulbright Senior Specialist project focused on safe drinking water quality assessment in the Kadava River sub-basin, Maharashtra, India."
                breadcrumbs={[
                    { label: 'Home', to: '/' },
                    { label: 'Research', to: '/research' },
                    { label: 'Safe Water' },
                ]}
            />

            {/* Crisis Stats */}
            <section className="bg-primary text-white py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {crisisStats.map((stat) => (
                            <div key={stat.label}>
                                <div className="font-mono text-2xl md:text-3xl font-bold text-accent">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-sm text-white/70 leading-snug">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Project Description</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
                                <p>
                                    The proposed project is to teach graduate geology and environmental
                                    science students in the classroom and in the field to inspect rural
                                    water supply wells, with the goal of helping farmers rehabilitate
                                    and seal water wells worthy of repair and to develop groundwater
                                    management plans near water supply wells.
                                </p>
                                <p>
                                    The project will explore through a literature research phase the
                                    impacts and drivers of agricultural and industrial land degradation
                                    and climate-change factors related to degraded well water quality.
                                    Workshops will feature the basic components of a groundwater
                                    management plan for a selected sub-basin within Maharashtra.
                                </p>
                            </div>
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
                                <div className="mt-4 space-y-4 text-text-secondary leading-relaxed">
                                    <p>
                                        The Kadava River Sub-Basin drains into the Godavari River in
                                        Maharashtra, India. Most farmers in the rural area rely on
                                        hand-dug water supply wells, some which are hundreds of years
                                        old and lack even basic well head protection or surface seals.
                                    </p>
                                    <p>
                                        The general geology is characterized by younger and older
                                        flood plains, with the late Cretaceous Deccan Plateau basalts
                                        at various geomorphic plateaus. The Deccan basalts represent
                                        one of the largest volcanic features on Earth and feature
                                        fractured bedrock aquifers.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl font-bold mb-2">Host University</h2>
                                <SectionDivider />
                                <p className="mt-4 text-text-secondary leading-relaxed">
                                    SRTM University, Nanded, India — where James sponsors the first
                                    AIPG International Student Chapter (since 2017) and provides
                                    mentoring to geology students and faculty.
                                </p>

                                <h3 className="font-serif text-lg font-semibold mt-8 mb-3">Water Sampling Parameters</h3>
                                <div className="flex flex-wrap gap-2">
                                    {waterParameters.map((param) => (
                                        <span
                                            key={param}
                                            className="inline-block text-xs font-mono bg-surface border border-surface-dark/50 rounded px-2 py-1 text-text-secondary"
                                        >
                                            {param}
                                        </span>
                                    ))}
                                </div>
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
