import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../data/siteConfig'

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [researchOpen, setResearchOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()
    const isHome = location.pathname === '/'

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
        setResearchOpen(false)
    }, [location.pathname])

    const headerBg = scrolled || !isHome
        ? 'bg-primary shadow-md'
        : 'bg-primary/80 backdrop-blur-sm'

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-3 text-white no-underline hover:text-white">
                    <span className="font-serif text-lg font-bold tracking-tight">
                        James A. Jacobs
                    </span>
                    <span className="hidden sm:inline text-white/50 text-sm font-mono">
                        Ph.D., P.G., C.H.G.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) =>
                        item.children ? (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => setResearchOpen(true)}
                                onMouseLeave={() => setResearchOpen(false)}
                            >
                                <Link
                                    to={item.to}
                                    className={`px-3 py-2 text-sm font-medium transition-colors no-underline rounded-md ${
                                        location.pathname.startsWith('/research')
                                            ? 'text-accent'
                                            : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                    <svg
                                        className="inline-block w-3.5 h-3.5 ml-0.5 -mt-0.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </Link>
                                {researchOpen && (
                                    <div className="absolute top-full left-0 pt-1">
                                        <div className="bg-white rounded-xl shadow-xl border border-surface-dark/30 py-2 min-w-[220px]">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.to}
                                                    to={child.to}
                                                    className={`block px-4 py-2 text-sm no-underline transition-colors ${
                                                        location.pathname === child.to
                                                            ? 'text-accent-dark bg-surface'
                                                            : 'text-text hover:bg-surface hover:text-accent-dark'
                                                    }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.to}
                                to={item.to}
                                className={`px-3 py-2 text-sm font-medium transition-colors no-underline rounded-md ${
                                    location.pathname === item.to
                                        ? 'text-accent'
                                        : 'text-white/80 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-white p-2"
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

            {/* Mobile Menu — Full Screen Overlay */}
            {mobileOpen && (
                <div className="lg:hidden fixed inset-0 top-16 bg-primary z-40 overflow-y-auto">
                    <nav className="flex flex-col p-6 gap-1">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <Link
                                    to={item.to}
                                    className={`block px-4 py-3 text-lg font-medium rounded-lg no-underline transition-colors ${
                                        location.pathname === item.to
                                            ? 'text-accent bg-primary-light'
                                            : 'text-white/80 hover:text-white hover:bg-primary-light'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-light pl-4">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.to}
                                                to={child.to}
                                                className={`block px-3 py-2 text-sm rounded-md no-underline transition-colors ${
                                                    location.pathname === child.to
                                                        ? 'text-accent'
                                                        : 'text-white/60 hover:text-white'
                                                }`}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
