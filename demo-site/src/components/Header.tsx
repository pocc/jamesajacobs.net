import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const researchLinks = [
    { to: '/sea-level-rise', label: 'Sea Level Rise' },
    { to: '/sewer-overflows', label: 'Sewer Overflows' },
    { to: '/sewer-air-vi', label: 'Sewer Air & VI' },
    { to: '/wetlands', label: 'Wetlands' },
    { to: '/safe-water', label: 'Safe Water' },
    { to: '/geology-and-beer', label: 'Geology & Beer' },
]

const mainLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/books', label: 'Books' },
    { to: '/publications', label: 'Publications' },
    { to: '/workshops-classes', label: 'Workshops' },
    { to: '/contact', label: 'Contact' },
]

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [researchOpen, setResearchOpen] = useState(false)
    const location = useLocation()

    const isActive = (path: string) => location.pathname === path

    const isResearchActive = researchLinks.some(l => isActive(l.to))

    return (
        <header className="bg-primary text-white sticky top-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <span className="font-serif text-xl font-semibold tracking-tight">James A. Jacobs</span>
                        <span className="hidden sm:inline text-accent text-sm font-light">Ph.D., P.G., C.H.G.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {mainLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                                    isActive(link.to)
                                        ? 'bg-white/20 text-white'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Research Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setResearchOpen(true)}
                            onMouseLeave={() => setResearchOpen(false)}
                        >
                            <button
                                className={`px-3 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1 ${
                                    isResearchActive
                                        ? 'bg-white/20 text-white'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                Research
                                <svg className={`w-3.5 h-3.5 transition-transform ${researchOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {researchOpen && (
                                <div className="absolute right-0 top-full mt-0.5 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    {researchLinks.map(link => (
                                        <Link
                                            key={link.to}
                                            to={link.to}
                                            className={`block px-4 py-2 text-sm transition-colors ${
                                                isActive(link.to)
                                                    ? 'bg-primary/10 text-primary font-medium'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden p-2 rounded hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Nav */}
                {mobileOpen && (
                    <nav className="lg:hidden pb-4 border-t border-white/20 pt-2">
                        {mainLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                                    isActive(link.to)
                                        ? 'bg-white/20 text-white'
                                        : 'text-white/80 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/20">
                            <span className="block px-3 py-1 text-xs font-semibold text-accent uppercase tracking-wider">Research</span>
                            {researchLinks.map(link => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-3 py-2 pl-6 rounded text-sm font-medium transition-colors ${
                                        isActive(link.to)
                                            ? 'bg-white/20 text-white'
                                            : 'text-white/80 hover:text-white hover:bg-white/10'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
