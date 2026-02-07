import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const credentials = [
    { abbr: 'Ph.D.', full: 'Doctor of Philosophy in Geology' },
    { abbr: 'P.G.', full: 'Professional Geologist' },
    { abbr: 'C.H.G.', full: 'Certified Hydrogeologist' },
    { abbr: 'C.P.G.', full: 'Certified Professional Geologist' },
    { abbr: 'C.Pet.G.', full: 'Certified Petroleum Geologist' },
    { abbr: 'FGS', full: 'Fellow, Geological Society of London' },
    { abbr: 'ToR QISP', full: 'Trainer of Record, Qualified Industrial Stormwater Practitioner' },
    { abbr: 'ToR QSD/QSP', full: 'Trainer of Record, Qualified SWPPP Developer/Practitioner' },
]

const selectedProjects = [
    {
        title: 'Coastal Erosion and Sea Level Rise Assessment, San Francisco Bay',
        summary: 'Led multi-year assessment of coastal erosion hazards and sea level rise impacts along the San Francisco Bay shoreline, developing adaptation strategies for critical infrastructure.',
        details: 'The project involved detailed geomorphological mapping, tide gauge analysis, and LiDAR-derived elevation modeling to project future inundation zones under multiple IPCC scenarios. Recommendations included nature-based solutions such as living shorelines and managed retreat planning for vulnerable areas. Partnered with NOAA California Sea Grant and local municipalities.',
    },
    {
        title: 'MTBE Groundwater Contamination Forensic Analysis',
        summary: 'Conducted forensic geochemistry analysis to identify sources of MTBE contamination in a multi-party groundwater plume affecting municipal water supply wells.',
        details: 'Used compound-specific isotope analysis (CSIA) and multivariate statistical methods to differentiate MTBE sources from multiple petroleum release sites. Expert witness testimony was provided in subsequent litigation. The investigation supported remedial action decisions and allocation of cleanup costs among responsible parties.',
    },
    {
        title: 'Sanitary Sewer Overflow Monitoring Program, Northern California',
        summary: 'Designed and implemented a real-time sewer overflow detection and monitoring system for a Northern California wastewater utility serving 200,000+ residents.',
        details: 'Deployed SmartCover flow monitoring sensors at 45 critical manholes with telemetry to a cloud-based dashboard for real-time alerts. The program reduced SSO events by over 60% in the first year through early detection and predictive analytics for capacity-related overflows during wet weather events.',
    },
    {
        title: 'Acid Mine Drainage Remediation, Sierra Nevada Foothills',
        summary: 'Managed remediation of acid mine drainage from a historic gold mining site contaminating a perennial creek and downstream wetlands.',
        details: 'Designed a passive treatment system using successive alkalinity producing systems (SAPS) and constructed wetlands to neutralize acidic drainage and remove dissolved metals. Post-construction monitoring demonstrated consistent compliance with water quality objectives for pH, copper, zinc, and iron over a three-year period.',
    },
    {
        title: 'Vapor Intrusion Investigation, Former Dry Cleaner Site',
        summary: 'Investigated vapor intrusion of chlorinated solvents into occupied commercial buildings overlying a PCE groundwater plume from a former dry cleaning facility.',
        details: 'Implemented a phased investigation including sub-slab soil gas sampling, indoor air monitoring, and groundwater characterization. Identified preferential vapor migration pathways through utility corridors and sewer laterals. Recommended and designed a sub-slab depressurization system that reduced indoor air concentrations below screening levels.',
    },
    {
        title: 'Wetland Restoration, South San Francisco Bay Salt Ponds',
        summary: 'Contributed geological and hydrogeological expertise to the restoration of former industrial salt evaporation ponds to tidal wetland habitat.',
        details: 'Provided sediment characterization, groundwater-surface water interaction analysis, and geotechnical evaluation of levee breaching plans. The project restored over 200 acres of tidal marsh habitat, supporting endangered species recovery including the Ridgway\'s rail and salt marsh harvest mouse.',
    },
]

export default function About() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null)

    const toggleProject = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index)
    }

    return (
        <div>
            <Hero
                title="About James A. Jacobs"
                subtitle="Ph.D., P.G., C.H.G., C.P.G., C.Pet.G., FGS -- Principal Geologist and Environmental Scientist"
            />

            {/* Profile and Credentials */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-10 md:gap-14">
                        <div className="flex-shrink-0 text-center md:text-left">
                            <img
                                src="/demo/jamesajacobs_profile.webp"
                                alt="James A. Jacobs, Ph.D. - Professional portrait"
                                className="w-52 h-52 md:w-60 md:h-60 rounded-2xl object-cover shadow-lg mx-auto md:mx-0"
                            />
                            <p className="mt-4 text-sm font-semibold text-primary">
                                Principal Geologist
                            </p>
                        </div>
                        <div className="flex-1">
                            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                                Credentials &amp; Certifications
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {credentials.map((cred) => (
                                    <div
                                        key={cred.abbr}
                                        className="bg-white rounded-lg border border-surface-dark/50 px-4 py-3"
                                    >
                                        <span className="text-accent-dark font-bold text-sm">
                                            {cred.abbr}
                                        </span>
                                        <span className="block text-gray-600 text-sm mt-0.5">
                                            {cred.full}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8">
                        Education
                    </h2>
                    <div className="space-y-6 max-w-2xl">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-2 bg-accent rounded-full" />
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-primary">
                                    Ph.D., Geology
                                </h3>
                                <p className="text-gray-600">
                                    University of California, Santa Cruz
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-2 bg-accent rounded-full" />
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-primary">
                                    M.A., Geology
                                </h3>
                                <p className="text-gray-600">
                                    University of Texas, Austin
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-2 bg-accent rounded-full" />
                            <div>
                                <h3 className="font-serif text-lg font-semibold text-primary">
                                    B.A., Geology &amp; English
                                </h3>
                                <p className="text-gray-600">
                                    Franklin and Marshall College
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Summary */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8">
                        Professional Summary
                    </h2>
                    <div className="max-w-3xl space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                        <p>
                            James A. Jacobs has over 35 years of experience as a geologist
                            and environmental scientist specializing in forensic analysis,
                            site characterization, and remediation of contaminated soil and
                            groundwater. He is a licensed Professional Geologist and
                            Certified Hydrogeologist who has served as an expert witness
                            in numerous environmental litigation cases. Since 1990 he has
                            been a co-owner of an environmental consulting company,
                            managing over 1,000 projects involving petroleum hydrocarbons,
                            chlorinated solvents, heavy metals, and emerging contaminants
                            across the western United States and internationally.
                        </p>
                        <p>
                            Since 2003, James has served as an elected official in local
                            government, bringing scientific rigor to policy decisions
                            related to sustainability, water resources, and environmental
                            protection. He is an active member and sponsor of the American
                            Institute of Professional Geologists (AIPG), contributing to
                            the advancement of professional standards in the geosciences.
                            His commitment to public service and environmental stewardship
                            reflects a career dedicated to bridging the gap between
                            scientific expertise and community needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Selected Projects */}
            <section className="bg-white py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-4">
                        Selected Projects
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl">
                        A sampling of notable projects spanning environmental
                        remediation, coastal science, and water quality management.
                    </p>
                    <div className="space-y-4">
                        {selectedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-surface rounded-xl border border-surface-dark/50 overflow-hidden transition-shadow hover:shadow-md"
                            >
                                <button
                                    onClick={() => toggleProject(index)}
                                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-serif text-lg font-semibold text-primary">
                                            {project.title}
                                        </h3>
                                        <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                                            {project.summary}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0 mt-1">
                                        <svg
                                            className={`w-5 h-5 text-accent-dark transition-transform duration-200 ${
                                                expandedProject === index ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                {expandedProject === index && (
                                    <div className="px-6 pb-5 pt-0">
                                        <div className="border-t border-surface-dark pt-4">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {project.details}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CV Download */}
            <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">
                        Curriculum Vitae
                    </h2>
                    <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
                        Download the complete CV of James A. Jacobs, Ph.D., including
                        full publication list, project history, and professional
                        affiliations.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/demo/jacobs_cv.pdf"
                            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-primary-dark font-semibold px-8 py-3 rounded-lg transition-colors"
                            download
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            Download CV (PDF)
                        </a>
                        <Link
                            to="/contact"
                            className="inline-block border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        >
                            Contact James
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
