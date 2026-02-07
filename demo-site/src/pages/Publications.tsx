import { useState } from 'react'
import Hero from '../components/Hero'

interface Publication {
    year: string
    text: string
}

interface SectionData {
    title: string
    publications: Publication[]
}

const sections: SectionData[] = [
    {
        title: 'Chapters in Books',
        publications: [
            {
                year: '2005',
                text: '41 articles in the Water Encyclopedia, 5-Volume Set, Wiley-Interscience',
            },
            {
                year: '2000',
                text: '9 articles in Standard Handbook of Environmental Science, Health, and Technology, McGraw-Hill',
            },
            {
                year: '2001',
                text: '2 chapters in Handbook of Complex Environmental Remediation Problems, McGraw-Hill',
            },
        ],
    },
    {
        title: 'Peer-Reviewed Articles',
        publications: [
            {
                year: '2019',
                text: 'Wagh et al., Influence of hydro-geochemical processes on groundwater quality through geostatistical techniques in Kadava River basin, Western India, Arabian Journal of Geosciences',
            },
            {
                year: '2019',
                text: 'Mukate et al., Development of new integrated water quality index (IWQI) model, Ecological Indicators',
            },
            {
                year: '2018',
                text: 'ITRC, Evaluation of Innovative Methane Detection Technologies',
            },
            {
                year: '2018',
                text: 'Roghani, Jacobs et al., Occurrence of Chlorinated VOCs in a Sanitary Sewer System, Science of the Total Environment',
            },
            {
                year: '2017',
                text: 'Jacobs, Jacobs, and Pennell, One Alternative Exposure Pathway of VOC Vapors, The Professional Geologist',
            },
            {
                year: '2016',
                text: 'Jacobs et al., Environmental Impacts at Iron Mountain Mine, Applied Geology in California',
            },
            {
                year: '2016',
                text: 'Jacobs and Grant Ludwig, Exposure to Valley Fever in California, Applied Geology in California',
            },
            {
                year: '2009',
                text: 'Jacobs and Guertin, Overview of Cleanup Design Options, The Professional Geologist',
            },
        ],
    },
    {
        title: 'Selected Articles and General Publications',
        publications: [
            {
                year: '1997',
                text: "Baker and Jacobs, The Government's New Environmental Role, Sacramento Business Journal",
            },
            {
                year: '2017',
                text: 'Jacobs, Acidic Drainage from Newly Deglaciated Areas, TACSAS Proceedings',
            },
            {
                year: '2015',
                text: 'Jacobs et al., One Alternate Exposure Pathway of VOC Vapors, Hydrovisions',
            },
            {
                year: '2003',
                text: 'Jacobs and Testa, Design Considerations for In-Situ Chemical Oxidation, AEHS',
            },
            {
                year: '1985',
                text: 'Jacobs, Fluvial Responses to Hydrologic Changes on the Red River, Transactions Gulf Coast Assoc.',
            },
            {
                year: '1981',
                text: 'Jacobs, Depositional and Quaternary History of the Red River, M.A. Thesis, UT Austin',
            },
        ],
    },
    {
        title: 'Abstracts and Presentations',
        publications: [
            {
                year: '2018',
                text: 'Jacobs, Diverse Settings for Natural and Anthropogenic Pyrite Oxidation, AEHS',
            },
            {
                year: '2017',
                text: 'Jacobs and Jacobs, What Geologists Know about Sewer Systems, AIPG',
            },
            {
                year: '2015',
                text: "Jacobs et al., Geologists' Role in Evaluating VOCs from Illegal Drug Labs, AIPG",
            },
            {
                year: '2014',
                text: 'Jacobs et al., Geologists and Site Conceptual Models: VOCs and Sewer Gas, AIPG',
            },
            {
                year: '2008',
                text: 'Jacobs, In-Situ Chemical Oxidation including Ozone in the Netherlands, AEHS',
            },
            {
                year: '2003',
                text: 'Jacobs, Chemical Oxidation for Oil Field Remediation, AAPG',
            },
            {
                year: '1997',
                text: 'Jacobs and von Wedel, Enhanced In Situ Biodegradation, AIPG',
            },
            {
                year: '1992',
                text: 'Jacobs, Environmental Assessments of Oil and Gas Fields, AAPG',
            },
            {
                year: '1985',
                text: 'Jacobs, Fluvial Responses on the Red River, Gulf Coast Assoc.',
            },
        ],
    },
]

function CollapsibleSection({ section }: { section: SectionData }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 py-5 bg-white hover:bg-surface transition-colors text-left cursor-pointer"
            >
                <h2 className="font-serif text-xl md:text-2xl font-bold text-primary">
                    {section.title}
                </h2>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-medium">
                        {section.publications.length} {section.publications.length === 1 ? 'entry' : 'entries'}
                    </span>
                    <svg
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="px-6 pb-6 bg-white">
                    <ul className="space-y-3">
                        {section.publications.map((pub, index) => (
                            <li
                                key={index}
                                className="flex gap-4 py-3 border-b border-gray-100 last:border-b-0"
                            >
                                <span className="inline-flex items-center justify-center flex-shrink-0 bg-accent/15 text-accent-dark text-sm font-bold px-2.5 py-1 rounded h-fit">
                                    {pub.year}
                                </span>
                                <span className="text-gray-700 leading-relaxed">
                                    {pub.text}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default function Publications() {
    return (
        <div>
            <Hero
                title="Publications"
                subtitle="Chapters, Articles, and Abstracts"
            />

            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="space-y-4">
                        {sections.map((section, index) => (
                            <CollapsibleSection key={index} section={section} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
