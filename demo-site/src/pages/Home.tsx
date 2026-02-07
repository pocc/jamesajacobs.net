import { Link } from 'react-router-dom'
import { heroStats } from '../data/siteConfig'
import { researchAreas } from '../data/research'
import { books } from '../data/books'
import { credibilityBadges } from '../data/sponsors'
import StatBar from '../components/StatBar'
import ScrollReveal from '../components/ScrollReveal'
import BookCard from '../components/BookCard'
import BentoGrid from '../components/BentoGrid'

const audienceRoutes = [
    {
        icon: '\u2696\uFE0F',
        label: 'Expert Witness & Litigation',
        desc: '23 court cases — groundwater contamination, remediation disputes, oil & gas valuation',
        cta: 'Discuss Your Case',
        to: '/contact',
    },
    {
        icon: '\uD83D\uDD2C',
        label: 'Environmental Site Assessment',
        desc: 'Phase I/II, site characterization, groundwater monitoring, contamination forensics',
        cta: 'Request Assessment',
        to: '/services',
    },
    {
        icon: '\uD83E\uDDEA',
        label: 'Sewer Air & Vapor Intrusion',
        desc: 'Indoor air testing, legacy sewer mapping, capital project prioritization for utilities',
        cta: 'Schedule Testing',
        to: '/services',
    },
    {
        icon: '\uD83C\uDFDB\uFE0F',
        label: 'Regulatory & Compliance',
        desc: 'Vapor intrusion assessment, cost allocation studies, stormwater compliance training',
        cta: 'Request Consultation',
        to: '/contact',
    },
    {
        icon: '\uD83C\uDF93',
        label: 'Research & Collaboration',
        desc: 'Sea level rise, constructed wetlands, safe water — peer-reviewed, field-tested science',
        cta: 'Explore Research',
        to: '/research',
    },
    {
        icon: '\uD83D\uDCDA',
        label: 'Workshops & Training',
        desc: 'Professional development in 5+ countries — vapor intrusion, hydrogeology, remediation',
        cta: 'View Programs',
        to: '/teaching',
    },
]

export default function Home() {
    return (
        <div>
            {/* Hero — Full Viewport */}
            <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
                <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative z-10">
                    <ScrollReveal>
                        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-4">
                            Expert Witness &middot; Environmental Consulting &middot; Forensic Geology
                        </p>
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            James A. Jacobs, Ph.D.
                        </h1>
                        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-xl leading-relaxed">
                            Expert witness testimony, environmental site assessment,
                            and sewer air testing — backed by 40+ years of field
                            experience and 1,000+ completed projects.
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
                                View Services
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Stat Bar */}
            <StatBar stats={heroStats} dark />

            {/* Credibility Strip — trust signals early */}
            <section className="bg-white py-8 md:py-10 border-b border-surface-dark/30">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
                        <span className="text-xs uppercase tracking-widest text-text-secondary font-medium">
                            Affiliated With
                        </span>
                        {credibilityBadges.map((badge) => (
                            <span
                                key={badge}
                                className="text-sm font-medium text-text-secondary/80"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience Routing — the star of the page */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold">
                                How Can I Help?
                            </h2>
                            <p className="mt-3 text-text-secondary max-w-lg mx-auto">
                                Over four decades of experience serving attorneys, agencies,
                                utilities, and researchers. Find your path below.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {audienceRoutes.map((item) => (
                                <Link
                                    key={item.label}
                                    to={item.to}
                                    className="group flex flex-col p-6 rounded-xl border border-surface-dark/50 bg-white hover:border-accent/50 hover:shadow-lg transition-all no-underline"
                                >
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="font-serif font-semibold text-primary group-hover:text-accent-dark transition-colors leading-snug">
                                        {item.label}
                                    </h3>
                                    <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                                        {item.desc}
                                    </p>
                                    <span className="mt-4 text-accent-dark text-sm font-semibold inline-flex items-center gap-1">
                                        {item.cta}
                                        <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Bio Summary */}
            <section className="bg-white py-20 md:py-28">
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
                            <div className="max-w-xl">
                                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                                    About James Jacobs
                                </h2>
                                <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                                    Principal Geologist at Clearwater Group with three
                                    geology degrees including a PhD from UC Santa Cruz.
                                    Licensed Professional Geologist (P.G.) and Certified
                                    Hydrogeologist (C.H.G.). Four Fulbright Senior Specialist
                                    appointments. Fellow of the Geological Society of London
                                    and National Ground Water Association. 23 years as an
                                    elected wastewater commissioner overseeing $50M+ in
                                    capital projects.
                                </p>
                                <Link
                                    to="/about"
                                    className="inline-block mt-6 text-accent-dark hover:text-primary font-semibold transition-colors group no-underline"
                                >
                                    Full biography &amp; credentials
                                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                                        &rarr;
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Research Bento Grid */}
            <section className="bg-surface py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold">
                                Research Areas
                            </h2>
                            <p className="mt-3 text-text-secondary max-w-xl mx-auto">
                                Peer-reviewed, field-tested science addressing critical
                                environmental challenges.
                            </p>
                        </div>
                    </ScrollReveal>
                    <BentoGrid areas={researchAreas} />
                </div>
            </section>

            {/* Featured Latest Book */}
            <section className="bg-white py-20 md:py-28">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-10">
                            Latest Book
                        </h2>
                        <BookCard book={books[0]} featured />
                        <div className="mt-10">
                            <Link
                                to="/books"
                                className="inline-block text-accent-dark hover:text-primary font-semibold transition-colors no-underline group"
                            >
                                View all 5 books &amp; publications
                                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                            Ready to Get Started?
                        </h2>
                        <p className="mt-4 text-white/70 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                            Whether you need expert witness testimony, site assessment,
                            or environmental consulting — 40+ years of hands-on
                            experience is one conversation away.
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-white/50 font-mono">
                            <span>Ph.D.</span>
                            <span>P.G.</span>
                            <span>C.H.G.</span>
                            <span>FGS</span>
                            <span>FNGWA</span>
                            <span>Fulbright</span>
                        </div>
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
