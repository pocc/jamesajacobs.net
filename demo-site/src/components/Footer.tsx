import { Link } from 'react-router-dom'

const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/books', label: 'Books' },
    { to: '/publications', label: 'Publications' },
    { to: '/workshops-classes', label: 'Workshops' },
    { to: '/contact', label: 'Contact' },
]

const researchLinks = [
    { to: '/sea-level-rise', label: 'Sea Level Rise' },
    { to: '/sewer-overflows', label: 'Sewer Overflows' },
    { to: '/sewer-air-vi', label: 'Sewer Air & VI' },
    { to: '/wetlands', label: 'Wetlands' },
    { to: '/safe-water', label: 'Safe Water' },
    { to: '/geology-and-beer', label: 'Geology & Beer' },
]

export default function Footer() {
    return (
        <footer className="bg-primary-dark text-white/80">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-serif text-lg text-white mb-3">James A. Jacobs, Ph.D.</h3>
                        <p className="text-sm leading-relaxed">
                            Geologist and Environmental Scientist with over 35 years of experience in forensic analysis, site remediation, and environmental consulting.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Pages</h4>
                        <ul className="space-y-1.5">
                            {footerLinks.map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">Research</h4>
                        <ul className="space-y-1.5">
                            {researchLinks.map(link => (
                                <li key={link.to}>
                                    <Link to={link.to} className="text-sm hover:text-white transition-colors">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/20 text-center text-sm text-white/60">
                    Copyright &copy; {new Date().getFullYear()} James A. Jacobs &mdash; All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}
