import Hero from '../components/Hero'

const products = [
    {
        title: 'Timber & Weaving Materials',
        description: 'Brush, shrubs, and fast growing trees for construction and craft materials.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3l-4 8h8l-4-8z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 11l-5 9h10l-5-9z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 20v4" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Ornamental Plants & Flowers',
        description: 'Nursery stock and cut flowers for local and regional markets.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="3" />
                <circle cx="8" cy="11" r="3" />
                <circle cx="16" cy="11" r="3" />
                <path d="M12 11v10" strokeLinecap="round" />
                <path d="M9 18l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Fuel & Animal Feed from Algae',
        description: 'Algae cultivation for biofuel production and livestock feed supplements.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3c-2 4-2 8 0 12s2 8 0 6" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Fruits & Vegetables',
        description: 'Irrigated agriculture using treated effluent water for food production.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2c-3 0-6 3-6 7s3 7 6 7 6-3 6-7-3-7-6-7z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 2c1-1 3 0 3 0" strokeLinecap="round" />
                <path d="M12 16v6" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Reusable Water',
        description: 'Treated water for irrigation, industrial processes, and groundwater recharge.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l-5 9a5.5 5.5 0 1011 0L12 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Fish & Shellfish',
        description: 'Aquaculture operations in constructed wetland ponds and raceways.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 12s3-4 7-4c2 0 3 1 5 1s3-1 5-1c4 0 7 4 7 4s-3 4-7 4c-2 0-3-1-5-1s-3 1-5 1c-4 0-7-4-7-4z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="12" r="1" fill="currentColor" />
            </svg>
        ),
    },
    {
        title: 'Biogas Energy',
        description: 'Methane capture from anaerobic digestion for electricity and heat generation.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'Local Jobs & Habitat',
        description: 'Employment opportunities and wildlife habitat creation in restored ecosystems.',
        icon: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
]

const references = [
    'Jacobs, J.A., 2014, "Wastewater Treatment Farm Concept: Waste Processing Facilities Become Resource Generation Centers," unpublished concept paper.',
    'Kadlec, R.H. and Wallace, S.D., 2009, Treatment Wetlands, 2nd Edition, CRC Press, Boca Raton, FL.',
    'Semmens, K., 2012, "Aquaculture Using Mine-Influenced Water," Reclamation Matters, American Society of Mining and Reclamation.',
    'Hedin, R.S., Nairn, R.W., and Kleinmann, R.L.P., 1994, Passive Treatment of Coal Mine Drainage, Bureau of Mines Information Circular 9389.',
    'US EPA, 2000, Constructed Wetlands Treatment of Municipal Wastewaters, EPA/625/R-99/010.',
    'Vymazal, J., 2010, "Constructed Wetlands for Wastewater Treatment," Water, Vol. 2, pp. 530-549.',
    'Kivaisi, A.K., 2001, "The Potential for Constructed Wetlands for Wastewater Treatment and Reuse in Developing Countries," Ecological Engineering, Vol. 16, pp. 545-560.',
    'Sewerage Agency of Southern Marin (SASM), Annual Reports on Water Recycling and Trickling Filter Operations, Mill Valley, California.',
    'Jacobs, J.A. and Testa, S.M., 2014, "Overview of Acid Mine Drainage," Chapter 1 in Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils, John Wiley & Sons.',
]

export default function Wetlands() {
    return (
        <div>
            <Hero
                title="Constructed Wetlands"
                subtitle="Wastewater Treatment Farm Concept: Waste processing facilities become resource generation centers"
            />

            {/* Vision */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Vision
                    </h2>
                    <div className="max-w-4xl space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>
                            The local wastewater treatment plant which has long been
                            stigmatized due to the strong stench on a hot summer day must be
                            reconsidered as a respectable member of society: as a resource
                            recycling facility.
                        </p>
                        <p>
                            As a commissioner of a local sewerage agency since 2002, I have
                            long been interested in rethinking raw sewage from an unsightly
                            and smelly waste product to a source of raw materials for other
                            products and ecoservices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Project Concept */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Project Concept
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-4xl">
                        Constructed wetlands can become resource recovery centers and food,
                        non-food, clean water farms and biogas generators. The optimum
                        location would be in a developing nation having unmet challenges
                        with untreated human waste or polluted stormwater and a need for
                        sustainable local agriculture and water recycling.
                    </p>
                </div>
            </section>

            {/* Possible Products */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-4">
                        Possible Products
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        Constructed wetlands and wastewater treatment farms can generate a
                        diverse range of products, creating economic value from waste
                        streams.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {products.map((product) => (
                            <div
                                key={product.title}
                                className="bg-surface rounded-xl border border-surface-dark/50 p-5 hover:shadow-md transition-shadow"
                            >
                                <div className="mb-3">
                                    {product.icon}
                                </div>
                                <h3 className="font-serif text-base font-semibold text-primary mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {product.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Background */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Background
                    </h2>
                    <div className="max-w-4xl space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>
                            Water reuse of acid mine drainage and municipal wastewater has
                            been demonstrated in multiple settings. Fish biologist Ken
                            Semmens used treated mine drainage for producing yellow perch,
                            striped bass and trout in the eastern US, demonstrating the
                            viability of aquaculture as a beneficial reuse of treated water.
                        </p>
                        <p>
                            Constructed wetlands provide value in treating mining wastes and
                            acid mine drainage. The Mill Valley, California wastewater
                            facility (Sewerage Agency of Southern Marin) is a trickling
                            filter treatment plant that has increased water recycling,
                            serving as a model for resource recovery at the municipal scale.
                        </p>
                    </div>
                </div>
            </section>

            {/* References */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8">
                        References
                    </h2>
                    <ol className="max-w-4xl space-y-3">
                        {references.map((ref, index) => (
                            <li
                                key={index}
                                className="flex gap-4 items-start border-l-4 border-l-accent bg-surface rounded-r-lg px-5 py-3"
                            >
                                <span className="text-accent-dark font-bold text-sm flex-shrink-0 mt-0.5">
                                    {index + 1}.
                                </span>
                                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                    {ref}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">
                        Contact
                    </h2>
                    <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
                        For more information about constructed wetlands and wastewater
                        treatment farm concepts, please contact:
                    </p>
                    <div className="mt-8 space-y-2">
                        <p className="text-xl font-serif font-semibold">
                            James A. Jacobs
                        </p>
                        <p className="text-white/80">
                            <a
                                href="mailto:jjacobs@clearwatergroup.com"
                                className="underline hover:text-white transition-colors"
                            >
                                jjacobs@clearwatergroup.com
                            </a>
                        </p>
                        <p className="text-white/80">
                            Cell:{' '}
                            <a
                                href="tel:510-590-1098"
                                className="underline hover:text-white transition-colors"
                            >
                                510-590-1098
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
