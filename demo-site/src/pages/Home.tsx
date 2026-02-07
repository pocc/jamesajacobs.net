import { Link } from 'react-router-dom'

const researchAreas = [
    { to: '/sea-level-rise', label: 'Sea Level Rise', description: 'Coastal hazard assessment and climate adaptation strategies for vulnerable communities.' },
    { to: '/sewer-overflows', label: 'Sewer Overflows', description: 'Monitoring, analysis, and mitigation of sanitary and combined sewer overflow events.' },
    { to: '/sewer-air-vi', label: 'Sewer Air & VI', description: 'Vapor intrusion pathways through sewer systems and indoor air quality impacts.' },
    { to: '/wetlands', label: 'Wetlands', description: 'Wetland delineation, restoration, and ecological function assessment.' },
    { to: '/safe-water', label: 'Safe Water', description: 'Drinking water quality, contamination forensics, and treatment solutions.' },
    { to: '/geology-and-beer', label: 'Geology & Beer', description: 'Exploring the geological terroir behind water sources used in brewing.' },
]

const books = [
    {
        title: 'Handbook of Environmental Site Characterization and Ground-Water Monitoring',
        year: '2005',
    },
    {
        title: 'MTBE: Effects on Soil and Groundwater Resources',
        year: '2001',
    },
    {
        title: 'Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils',
        year: '2014',
    },
    {
        title: 'Principles and Practice of Contaminated Site Investigation and Remediation Planning',
        year: '2024',
    },
    {
        title: 'Geochemical Modeling of Groundwater, Vadose, and Geothermal Systems',
        year: '2012',
    },
]

const sponsors = [
    'NOAA California Sea Grant',
    'UCSC Earth and Planetary Sciences J. Casey Moore Fund',
    'Solinst Canada',
    'Enviro-Tech',
    'SmartCover',
    'Precision Enviro-Tech Analytical Laboratory',
]

export default function Home() {
    return (
        <div>
            {/* Hero Section - Custom for Home */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-24 md:py-32 lg:py-40">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        James A. Jacobs, Ph.D.
                    </h1>
                    <p className="mt-4 text-accent text-lg md:text-xl font-medium tracking-wide">
                        Geologist / Environmental Scientist
                    </p>
                    <p className="mt-6 text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Forensic analysis and science-based methods for environmental
                        site characterization, groundwater monitoring, and contamination
                        remediation.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/services"
                            className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            View Services
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-block border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bio Summary Section */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
                        <div className="flex-shrink-0">
                            <img
                                src="/demo/jamesajacobs_profile.webp"
                                alt="James A. Jacobs, Ph.D. - Professional portrait"
                                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg ring-4 ring-accent/30"
                            />
                        </div>
                        <div>
                            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-4">
                                About James Jacobs
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                James Jacobs has over 40 years of experience as a geologist
                                and environmental scientist with three degrees in geology
                                including a PhD from UC Santa Cruz. He is licensed as a
                                professional geologist and certified hydrogeologist. Honors
                                include four Fulbright Senior Specialist appointments, a NOAA
                                California Sea Grant Fellowship and California Ocean Protection
                                Council Fellowship. He is a Fellow with the Geological Society
                                of London and the National Ground Water Association.
                            </p>
                            <Link
                                to="/about"
                                className="inline-block mt-6 text-accent-dark hover:text-primary font-semibold transition-colors group"
                            >
                                Read full biography
                                <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">
                            Research Areas
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                            Exploring critical environmental challenges through rigorous
                            science and field-tested methodologies.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {researchAreas.map((area) => (
                            <Link
                                key={area.to}
                                to={area.to}
                                className="group block bg-surface rounded-xl shadow-sm hover:shadow-md border border-surface-dark/50 p-6 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-accent-dark transition-colors">
                                    {area.label}
                                </h3>
                                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                                    {area.description}
                                </p>
                                <span className="mt-4 inline-block text-accent-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn more &rarr;
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Books Section */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">
                            Books &amp; Publications
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                            Author and co-author of definitive texts in environmental
                            geology and groundwater science.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {books.map((book) => (
                            <div
                                key={book.title}
                                className="bg-white rounded-xl shadow-sm border border-surface-dark/50 p-6 flex flex-col"
                            >
                                <div className="w-10 h-1 bg-accent rounded mb-4" />
                                <h3 className="font-serif text-base font-semibold text-primary leading-snug flex-1">
                                    {book.title}
                                </h3>
                                <p className="mt-3 text-sm text-gray-500">
                                    Published {book.year}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/books"
                            className="inline-block bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            View All Books
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sponsors / Grants Section */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold">
                            Sponsors &amp; Grants
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                            Research supported and funded by leading organizations in
                            environmental science and geology.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {sponsors.map((sponsor) => (
                            <div
                                key={sponsor}
                                className="bg-surface border border-surface-dark/50 rounded-lg px-6 py-4 text-sm font-medium text-gray-700 text-center"
                            >
                                {sponsor}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA Section */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">
                        Let&apos;s Work Together
                    </h2>
                    <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
                        Whether you need expert consulting for environmental site
                        assessment, forensic geology analysis, or expert witness
                        testimony, James Jacobs brings decades of hands-on experience
                        to every project.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact James
                        </Link>
                        <Link
                            to="/services"
                            className="inline-block border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
