import { Link } from 'react-router-dom'
import { contact } from '../data/siteConfig'

const pageLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/books', label: 'Books & Publications' },
    { to: '/teaching', label: 'Teaching' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
]

const researchLinks = [
    { to: '/research', label: 'Research Overview' },
    { to: '/research/sea-level-rise', label: 'Sea Level Rise' },
    { to: '/research/sewer-systems', label: 'Sewer Systems' },
    { to: '/research/wetlands', label: 'Wetlands' },
    { to: '/research/safe-water', label: 'Safe Water' },
    { to: '/geology-and-beer', label: 'Geology & Beer' },
]

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white/80">
            {/* Trust Signal Bar */}
            <div className="bg-primary text-white/90 border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs md:text-sm text-center">
                        <span className="font-medium">Licensed Professional Geologist (P.G.) in 9 states</span>
                        <span className="hidden md:inline text-white/30">|</span>
                        <span className="font-medium">40+ years experience</span>
                        <span className="hidden md:inline text-white/30">|</span>
                        <span className="font-medium">1,000+ projects completed</span>
                        <span className="hidden md:inline text-white/30">|</span>
                        <span className="font-medium">5 published books</span>
                        <span className="hidden md:inline text-white/30">|</span>
                        <span className="font-medium">Adjunct Faculty, UC Santa Cruz</span>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                    {/* Bio Column */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/demo/jamesajacobs_profile.webp"
                                alt="James A. Jacobs"
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/30"
                            />
                            <div>
                                <h3 className="font-serif text-base text-white font-bold leading-tight">
                                    James A. Jacobs
                                </h3>
                                <p className="text-xs text-white/50 font-mono">Ph.D., P.G., C.H.G.</p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-white/60">
                            Geologist and environmental scientist with 40+ years of experience
                            in forensic analysis, site remediation, and environmental consulting.
                        </p>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="text-accent font-semibold text-xs uppercase tracking-wider mb-4">
                            Pages
                        </h4>
                        <ul className="space-y-2">
                            {pageLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/60 hover:text-white no-underline transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Research */}
                    <div>
                        <h4 className="text-accent font-semibold text-xs uppercase tracking-wider mb-4">
                            Research
                        </h4>
                        <ul className="space-y-2">
                            {researchLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-white/60 hover:text-white no-underline transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-accent font-semibold text-xs uppercase tracking-wider mb-4">
                            Contact
                        </h4>
                        <div className="space-y-2 text-sm text-white/60">
                            <p>{contact.phone}</p>
                            <p>
                                <a
                                    href={`mailto:${contact.email}`}
                                    className="hover:text-white no-underline transition-colors"
                                >
                                    {contact.email}
                                </a>
                            </p>
                            <p className="text-xs leading-relaxed">{contact.address}</p>
                            <p className="text-xs text-white/40">{contact.hours}</p>
                            <Link
                                to="/contact"
                                className="inline-block mt-3 text-accent hover:text-accent-light text-sm font-semibold no-underline transition-colors"
                            >
                                Request Consultation &rarr;
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
                    &copy; {new Date().getFullYear()} James A. Jacobs. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
