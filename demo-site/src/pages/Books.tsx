import Hero from '../components/Hero'

const books = [
    {
        title: 'Environmental Considerations Associated with Hydraulic Fracturing Operations: Adjusting to the Shale Revolution in a Green World',
        publisher: 'Wiley',
        authors: 'James A. Jacobs and Stephen M. Testa',
        pages: 576,
        year: 2019,
        date: 'April 23, 2019',
        description:
            'Overview of historical development of hydraulic fracturing and current technology. Explores risk, prevention, and mitigation factors. Includes legal cases, regulatory issues, and cost recovery data. Presents audit checklists for fracking operations documentation.',
    },
    {
        title: 'Oil Spills and Gas Leaks: Environmental Response, Prevention and Cost Recovery',
        publisher: 'McGraw-Hill',
        authors: 'Stephen M. Testa and James A. Jacobs',
        pages: 578,
        year: 2014,
        date: 'Mar 10, 2014',
        description:
            'Highlights the complex nature of assessment, exposure pathway analysis, sensitive receptor evaluation related to oil spills and gas leaks. Discusses engineering techniques, long-term biological/environmental effects, litigation and cost recovery, and legislation.',
    },
    {
        title: 'Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils: Causes, Assessment, Prediction, Prevention, and Remediation',
        publisher: 'Wiley',
        authors: 'James A. Jacobs, Jay H. Lehr and Stephen M. Testa',
        pages: 520,
        year: 2014,
        date: 'Apr 28, 2014',
        description:
            'Explores biogeochemistry of acid mine drainage. Part I: Causes, Part II: Assessment (stream characterization, aquatic sampling), Part III: Prediction and Prevention (acid-base accounting, kinetic testing), Part IV: Remediation (passive and active cleanup).',
    },
    {
        title: 'Chromium(VI) Handbook',
        publisher: 'CRC Press',
        authors: 'Jacques Guertin, James A. Jacobs and Cynthia P. Avakian',
        pages: 800,
        year: 2004,
        date: 'Dec 28, 2004',
        description:
            'Comprehensive resource on hexavalent chromium. Chapters on chromium sources, geology and geochemistry, toxicity, treatment, remediation, legal issues, and recommendations. Brought to public attention by Erin Brockovich film.',
    },
    {
        title: 'MTBE: Effects on Soil and Groundwater Resources',
        publisher: 'CRC Press',
        authors: 'James A. Jacobs, Jacques Guertin, and Christy Herron',
        pages: 264,
        year: 2001,
        date: 'Sep 28, 2001',
        description:
            'Historic document of knowledge regarding MTBE around 2000. Examines MTBE as technical solution to reduce air emissions, health effects from contaminated water, dermal sorption. Addresses mapping, remediation concepts, and environmental risk assessment.',
    },
]

export default function Books() {
    return (
        <div>
            <Hero
                title="Books"
                subtitle="Dr. Jacobs is co-author of several technical books focusing on exposure pathway analysis, contaminant fate and transport, and environmental remediation."
            />

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="space-y-8">
                        {books.map((book, index) => (
                            <div
                                key={index}
                                className={`rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm ${
                                    index % 2 === 0 ? 'bg-white' : 'bg-surface'
                                }`}
                            >
                                <div className="flex flex-wrap items-start gap-3 mb-3">
                                    <h2 className="font-serif text-xl md:text-2xl font-bold text-primary leading-tight">
                                        {book.title}
                                    </h2>
                                    <span className="inline-block bg-accent/15 text-accent-dark text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                                        {book.publisher}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mb-4">
                                    <span>
                                        <span className="font-medium text-gray-700">Authors:</span>{' '}
                                        {book.authors}
                                    </span>
                                    <span>
                                        <span className="font-medium text-gray-700">Pages:</span>{' '}
                                        {book.pages}
                                    </span>
                                    <span>
                                        <span className="font-medium text-gray-700">Published:</span>{' '}
                                        {book.date}
                                    </span>
                                </div>

                                <p className="text-gray-700 leading-relaxed">
                                    {book.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-center text-gray-500 text-sm">
                        All books are available on Amazon.com
                    </p>
                </div>
            </section>
        </div>
    )
}
