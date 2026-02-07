import { useState } from 'react'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import StatBar from '../components/StatBar'
import { teachingSections, teachingStats, teachingOverview } from '../data/teaching'

export default function Teaching() {
    const [openSection, setOpenSection] = useState<number | null>(0)

    return (
        <div>
            <HeroPage
                title="Teaching"
                subtitle={teachingOverview}
            />

            <StatBar stats={teachingStats} />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Courses &amp; Workshops</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <div className="mt-8 space-y-4 max-w-3xl">
                        {teachingSections.map((section, i) => (
                            <div key={section.label} className="bg-white rounded-xl border border-surface-dark/50 overflow-hidden">
                                <button
                                    onClick={() => setOpenSection(openSection === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                >
                                    <h3 className="font-serif text-lg font-semibold text-primary">{section.label}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-accent-dark bg-accent/10 px-2 py-1 rounded">
                                            {section.items.length}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-accent-dark transition-transform ${openSection === i ? 'rotate-180' : ''}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                {openSection === i && (
                                    <div className="px-6 pb-5 border-t border-surface-dark/30">
                                        <div className="mt-4 space-y-4">
                                            {section.items.map((item, j) => (
                                                <div key={j} className="flex gap-4">
                                                    <div className="flex-shrink-0 w-1.5 rounded-full bg-accent/50" />
                                                    <div>
                                                        <h4 className="text-sm font-semibold text-text">
                                                            {item.title}
                                                            {item.year && (
                                                                <span className="ml-2 font-mono text-xs text-text-secondary">
                                                                    ({item.year})
                                                                </span>
                                                            )}
                                                        </h4>
                                                        {(item.hours || item.students) && (
                                                            <p className="text-xs font-mono text-accent-dark mt-0.5">
                                                                {item.hours && `${item.hours} hrs`}
                                                                {item.hours && item.students && ' · '}
                                                                {item.students && `${item.students} students`}
                                                            </p>
                                                        )}
                                                        {item.description && (
                                                            <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
