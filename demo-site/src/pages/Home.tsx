import { Link } from 'react-router-dom'
import { heroStats } from '../data/siteConfig'
import { researchAreas, geologyAndBeer } from '../data/research'
import { books } from '../data/books'
import { credibilityBadges } from '../data/sponsors'
import StatBar from '../components/StatBar'
import ScrollReveal from '../components/ScrollReveal'
import BookCard from '../components/BookCard'
import BentoGrid from '../components/BentoGrid'

export default function Home() {
    return (
        <div>
            {/* Hero — Full Viewport */}
            <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
                <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10">
                    <ScrollReveal>
                        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
                            Geologist &middot; Environmental Scientist &middot; Expert Witness
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            James A. Jacobs, Ph.D.
                        </h1>
                        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                            Forensic analysis and science-based methods for environmental
                            site characterization, groundwater monitoring, and contamination
                            remediation — with over four decades of field experience.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3.5 rounded-xl transition-colors text-center no-underline"
                            >
                                Request a Consultation
                            </Link>
                            <Link
                                to="/services"
                                className="inline-block border-2 border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-center no-underline"
                            >
                                Explore Services
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stat Bar */}
            <StatBar stats={heroStats} dark />

            {/* Bio Summary */}
            <section className="bg-surface py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
                            <div className="flex-shrink-0">
                                <img
                                    src="/demo/jamesajacobs_profile.webp"
                                    alt="James A. Jacobs, Ph.D."
                                    className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-xl ring-4 ring-accent/20"
                                />
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                    About James Jacobs
                                </h2>
                                <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                                    James Jacobs has over 40 years of experience as a geologist
                                    and environmental scientist with three degrees in geology
                                    including a PhD from UC Santa Cruz. He is licensed as a
                                    professional geologist and certified hydrogeologist. Honors
                                    include four Fulbright Senior Specialist appointments, a NOAA
                                    California Sea Grant Fellowship, and California Ocean Protection
                                    Council Fellowship. He is a Fellow with the Geological Society
                                    of London and the National Ground Water Association.
                                </p>
                                <Link
                                    to="/about"
                                    className="inline-block mt-6 text-accent-dark hover:text-primary font-semibold transition-colors group no-underline"
                                >
                                    Read full biography
                                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Audience Routing */}
            <section className="bg-white py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold">
                                How Can I Help?
                            </h2>
                            <p className="mt-3 text-text-secondary max-w-lg mx-auto">
                                Select the option that best describes your needs.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {[
                                { label: 'Need an Expert Witness?', desc: '23 cases in groundwater contamination, remediation & environmental disputes', to: '/contact' },
                                { label: 'Environmental Site Assessment?', desc: 'Site characterization, Phase I/II, groundwater monitoring & forensics', to: '/services' },
                                { label: 'Research Collaboration?', desc: 'Sea level rise, sewer systems, constructed wetlands & safe water', to: '/research' },
                                { label: 'Professional Training?', desc: 'Workshops on vapor intrusion, sewer air & environmental topics', to: '/teaching' },
                            ].map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className="group flex items-start gap-4 p-5 rounded-xl border border-surface-dark/50 bg-surface hover:border-accent/50 hover:shadow-md transition-all no-underline"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-serif font-semibold text-primary group-hover:text-accent-dark transition-colors">
                                            {item.label}
                                        </h3>
                                        <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                    <span className="text-accent-dark mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                                        &rarr;
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Research Bento Grid */}
            <section className="bg-surface py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold">
                                Research Areas
                            </h2>
                            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
                                Exploring critical environmental challenges through rigorous
                                science and field-tested methodologies.
                            </p>
                        </div>
                    </ScrollReveal>
                    <BentoGrid areas={researchAreas} />
                    {/* Geology & Beer — standalone card */}
                    <ScrollReveal className="mt-5">
                        <Link
                            to="/geology-and-beer"
                            className="group block rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 no-underline"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-3xl">{geologyAndBeer.icon}</div>
                                <div>
                                    <h3 className="font-serif text-lg md:text-xl font-semibold text-primary group-hover:text-accent-dark transition-colors">
                                        {geologyAndBeer.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-text-secondary">{geologyAndBeer.description}</p>
                                </div>
                                <span className="ml-auto text-accent-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                                    Read essay &rarr;
                                </span>
                            </div>
                        </Link>
                    </ScrollReveal>
                </div>
            </section>

            {/* Featured Latest Book */}
            <section className="bg-surface py-20 md:py-32">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10">
                            Latest Book
                        </h2>
                        <BookCard book={books[0]} featured />
                        <div className="mt-10">
                            <Link
                                to="/books"
                                className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-xl transition-colors no-underline"
                            >
                                View All Books &amp; Publications
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Credibility Strip */}
            <section className="bg-white py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <p className="text-center text-xs uppercase tracking-widest text-text-secondary mb-6 font-medium">
                            Affiliated With
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {credibilityBadges.map((badge) => (
                                <div
                                    key={badge}
                                    className="bg-surface border border-surface-dark/50 rounded-lg px-5 py-3 text-sm font-medium text-text-secondary"
                                >
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Let&apos;s Work Together
                        </h2>
                        <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                            Whether you need expert consulting for environmental site
                            assessment, forensic geology analysis, or expert witness
                            testimony — decades of hands-on experience, one conversation away.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-block mt-8 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-10 py-4 rounded-xl transition-colors no-underline text-lg"
                        >
                            Request a Consultation
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
