import { useState } from 'react'
import Hero from '../components/Hero'

const faqItems = [
    {
        question: 'How many contact hours?',
        answer: 'Up to 40 hours classroom, one week classroom plus three weeks field work.',
    },
    {
        question: 'How many people affected?',
        answer: 'Met dozens of rural residents using unprotected wells for drinking water.',
    },
    {
        question: 'Future goals?',
        answer: 'Depending on funding, 10 to 40 communities, hundreds to thousands of rural farmers.',
    },
    {
        question: 'Past experience?',
        answer: '42 days in Jan-Feb 2012 as Fulbright Senior Specialist at SRTM University.',
    },
    {
        question: 'Contact hours in past?',
        answer: '42-contact hours in workshop plus additional lectures with Chin Man Mok and Stephen Baker.',
    },
]

export default function SafeWater() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div>
            <Hero
                title="Safe Water in Rural India"
                subtitle="Teaching groundwater protection and well head rehabilitation in Maharashtra, India"
            />

            {/* Overview */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Overview
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        India has the second largest population on Earth with more than 1 billion
                        people. About half practice open defecation. The World Bank estimates 21%
                        of communicable diseases in India are linked to unsafe water. More than
                        500 children under five die each day from diarrhea.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        Over 163 million people lack access to safe water and 201 million lack
                        improved sanitation. The proposed project teaches graduate geology
                        students to inspect rural water supply wells and help farmers
                        rehabilitate wells and develop groundwater management plans.
                    </p>
                </div>
            </section>

            {/* Project Description */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Project Description
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        Historic hand-dug wells are common sources of water in rural Maharashtra
                        where water quality can be compromised. Improvements proposed using
                        simple well head protection measures as part of a groundwater management
                        plan.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        Designed to mitigate negative impacts to groundwater from climate change.
                    </p>
                </div>
            </section>

            {/* The Work */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        The Work
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        The Lecturer provides classroom workshops on basic water well design and
                        well head protection measures for graduate students at SRTM University.
                        Students will be trained as teachers to instruct local farmers. The
                        project explores impacts of agricultural/industrial land degradation and
                        climate-change factors.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-4">
                        Water parameters discussed include:
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Ca', 'Mg', 'Na', 'K', 'Cl', 'SO4', 'NO3', 'F',
                            'Total Hardness', 'Total Dissolved Solids', 'Dissolved Oxygen',
                            'pH', 'Temperature', 'Conductivity', 'E. Coli', 'Total Coliform',
                        ].map((param) => (
                            <span
                                key={param}
                                className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                            >
                                {param}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Study Area */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8 text-center">
                        Study Area
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 max-w-3xl mx-auto">
                        <div className="w-10 h-1 bg-accent rounded mb-4" />
                        <h3 className="font-serif text-xl font-bold text-primary mb-4">
                            Kadava River Sub-Basin, Maharashtra
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Kadava River Sub-Basin drains into the Godavari River in
                            Maharashtra. Farmers rely on hand-dug wells, some hundreds of years
                            old, lacking basic well head protection.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            General geology: younger and older flood plains with late Cretaceous
                            Deccan Plateau basalts. The Deccan basalts represent one of the
                            largest volcanic features on Earth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Host University */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Host University
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
                        <h3 className="font-serif text-xl font-bold text-primary mb-3">
                            SRTM University
                        </h3>
                        <p className="text-gray-500 mb-4">Nanded, Maharashtra, India</p>
                        <p className="text-gray-700 leading-relaxed">
                            Professors Vasant Wagh, D.B. Panaskar, S.K.G. Krishnamacharylulu,
                            V. Kumar and others.
                        </p>
                    </div>
                </div>
            </section>

            {/* Q&A Section */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-8 text-center">
                        Questions &amp; Answers
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-3">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors text-left"
                                >
                                    <span className="font-serif text-lg font-semibold text-primary">
                                        {item.question}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-primary shrink-0 ml-4 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-5 pb-5">
                                        <p className="text-gray-700 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Background */}
            <section className="py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Background
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        James Jacobs has over 30 years experience as a hydrogeologist and well
                        driller. Fulbright Senior Scholar with four awards (2003&ndash;2012).
                        Five technical books. Elected official on wastewater agency board for
                        16+ years. NGWA Fellow and US State Department Virtual Fellow.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="bg-surface py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6">
                        Contact
                    </h2>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 inline-block">
                        <p className="text-gray-800 font-semibold text-lg">
                            James A. Jacobs, P.G., C.H.G.
                        </p>
                        <p className="text-gray-600 mt-1">Hydrogeologist</p>
                        <p className="text-gray-600">Clearwater Group</p>
                        <p className="text-gray-500 mt-3 text-sm">
                            229 Tewksbury Ave., Pt. Richmond, CA 94801
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
