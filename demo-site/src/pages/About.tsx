import { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import TimelineVertical from '../components/TimelineVertical'
import Tag from '../components/Tag'
import SectionDivider from '../components/SectionDivider'
import { credentials, education, honors } from '../data/credentials'
import { selectedProjects } from '../data/projects'

export default function About() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null)

    return (
        <div>
            <HeroPage
                title="About James A. Jacobs"
                subtitle="Ph.D., P.G., C.H.G., C.P.G., C.Pet.G., FGS — Principal Geologist and Environmental Scientist"
            />

            {/* Profile and Credentials */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row gap-10 md:gap-14">
                            <div className="flex-shrink-0 text-center md:text-left">
                                <img
                                    src="/demo/jamesajacobs_profile.webp"
                                    alt="James A. Jacobs, Ph.D."
                                    className="w-52 h-52 md:w-60 md:h-60 rounded-2xl object-cover shadow-xl mx-auto md:mx-0"
                                />
                                <p className="mt-4 text-sm font-semibold text-primary">
                                    Principal Geologist
                                </p>
                            </div>
                            <div className="flex-1">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                                    Credentials &amp; Certifications
                                </h2>
                                <SectionDivider />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                    {credentials.map((cred) => (
                                        <div
                                            key={cred.abbr}
                                            className="bg-white rounded-xl border border-surface-dark/50 px-4 py-3"
                                        >
                                            <span className="text-accent-dark font-bold font-mono text-sm">
                                                {cred.abbr}
                                            </span>
                                            <span className="block text-text-secondary text-sm mt-0.5">
                                                {cred.full}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Education Timeline */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                            Education
                        </h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <div className="mt-8 max-w-xl">
                        <TimelineVertical items={education} />
                    </div>
                </div>
            </section>

            {/* Honors */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                            Honors &amp; Fellowships
                        </h2>
                        <SectionDivider />
                        <div className="flex flex-wrap gap-2 mt-6">
                            {honors.map((h) => (
                                <Tag key={h} variant="accent">{h}</Tag>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Professional Summary */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                            Professional Summary
                        </h2>
                        <SectionDivider />
                        <div className="max-w-3xl space-y-6 text-text-secondary leading-relaxed text-base md:text-lg mt-6">
                            <p>
                                James A. Jacobs has more than thirty-five years of experience
                                as a geologist. He is a certified hydrogeologist, professional
                                geologist, licensed well driller and general engineering
                                contractor. His most recent work includes forensic analysis
                                related to subsurface events, including pipe breaks, contaminant
                                spills, oil and gas resource valuation estimates, and groundwater
                                contamination. He has worked on producing and redeveloped oil
                                field properties, EPA Superfund sites, military bases, agricultural
                                and industrial properties. Since 1990, he has been a co-owner of
                                an environmental-engineering consulting and contracting company,
                                where he has performed more than 1,000 projects.
                            </p>
                            <p>
                                Since 2003, James has served as an elected official in local
                                government, bringing scientific rigor to policy decisions
                                related to sustainability, water resources, and environmental
                                protection. He is an active member and sponsor of the American
                                Institute of Professional Geologists (AIPG), contributing to
                                the advancement of professional standards in the geosciences.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Selected Projects */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                            Selected Projects
                        </h2>
                        <SectionDivider />
                        <p className="text-text-secondary mb-8 max-w-2xl mt-4">
                            A sampling of notable projects spanning environmental
                            remediation, coastal science, and water quality management.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="space-y-4">
                            {selectedProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl border border-surface-dark/50 overflow-hidden transition-shadow hover:shadow-md"
                                >
                                    <button
                                        onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                                        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                                    >
                                        <div className="flex-1">
                                            <h3 className="font-serif text-lg font-semibold text-primary">
                                                {project.title}
                                            </h3>
                                            <p className="mt-1 text-text-secondary text-sm leading-relaxed">
                                                {project.summary}
                                            </p>
                                        </div>
                                        <div className="flex-shrink-0 mt-1">
                                            <svg
                                                className={`w-5 h-5 text-accent-dark transition-transform duration-200 ${
                                                    expandedProject === index ? 'rotate-180' : ''
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                    {expandedProject === index && (
                                        <div className="px-6 pb-5 pt-0">
                                            <div className="border-t border-surface-dark pt-4">
                                                <p className="text-text-secondary text-sm leading-relaxed">
                                                    {project.details}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Public Service */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                            Public Service
                        </h2>
                        <SectionDivider />
                        <div className="max-w-3xl space-y-6 text-text-secondary leading-relaxed text-base md:text-lg mt-6">
                            <p>
                                As a publicly elected community services district board
                                member since 2003 (Board President 2005-2006, re-elected 2022),
                                he has evaluated numerous environmental challenges, solved
                                sustainability problems, and worked with others as a team leader
                                and member to develop agency policies. He has been a representative
                                to the Sewerage Agency of Southern Marin (SASM) since 2003, serving
                                as SASM President from 2009-2011, with a $14 million annual budget
                                and $36 million in capital projects. He also directs a community
                                services district (sewage collection, refuse/recycling, and park and
                                recreation services) with an $11 million annual budget and
                                over $19 million in capital projects.
                            </p>
                            <p>
                                He has promoted and supported sustainable environmental
                                practices within the agency, a certified green business
                                which now offers residents recycling of electronic waste,
                                fluorescent bulbs, medicines, batteries, paper and cardboard.
                                In 2009, 1 million fewer lbs of waste were processed by the
                                agency than in 2006. In 2013, the agency won the Marin County
                                Green Business of the Year award due to successful recycling
                                efforts and reduction in wastes shipped to local landfills.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CV Download */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Curriculum Vitae
                        </h2>
                        <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed">
                            Download the complete CV of James A. Jacobs, Ph.D., including
                            full publication list, project history, and professional
                            affiliations.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/demo/jacobs_cv.pdf"
                                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3.5 rounded-xl transition-colors no-underline"
                                download
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download CV (PDF)
                            </a>
                            <Link
                                to="/contact"
                                className="inline-block border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors no-underline"
                            >
                                Contact James
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
