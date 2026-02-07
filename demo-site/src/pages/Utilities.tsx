import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import { EnvelopeIcon, PhoneIcon, BuildingOffice2Icon, WrenchScrewdriverIcon, ChartBarIcon, MapIcon } from '@heroicons/react/24/outline'

export default function Utilities() {
    const services = [
        {
            title: 'Sewer Air Testing & Monitoring',
            icon: '🧪',
            description: 'Comprehensive methane and VOC monitoring to identify potential vapor intrusion pathways',
            deliverables: [
                'Field sampling using EPA Method TO-15',
                'Concentration maps showing hot spots',
                'Prioritization matrix for capital projects',
                'Regulatory compliance documentation'
            ]
        },
        {
            title: 'Legacy Infrastructure Mapping',
            icon: '🗺️',
            description: 'Historical record research and GIS integration to map aging sewer systems',
            deliverables: [
                'Historical research of construction records',
                'GIS-integrated mapping layers',
                'Preferential pathway identification',
                'Capital project prioritization plan'
            ]
        },
        {
            title: 'Overflow Monitoring & Prediction',
            icon: '📊',
            description: 'Real-time sensor deployment and Bayesian network modeling for overflow prevention',
            deliverables: [
                'Solinst Level Logger deployment',
                'SmartCover manhole sensor networks',
                'Bayesian network prediction models',
                'Climate adaptation strategies (sea level rise, storm intensification)'
            ]
        },
        {
            title: 'Cost Allocation & Rate Justification',
            icon: '💰',
            description: 'Technical and economic analysis to support capital project funding and rate increases',
            deliverables: [
                'Cost allocation methodology',
                'Rate justification analysis',
                'Regulatory compliance documentation',
                'Public presentation support'
            ]
        }
    ]

    const caseStudies = [
        {
            title: 'Tamalpais Valley Overflow Prediction',
            location: 'Marin County, CA',
            challenge: 'Predict future sanitary sewer overflow locations under climate change scenarios (2050 sea level rise)',
            solution: 'Deployed 10+ years of continuous groundwater monitoring using Solinst Level Loggers. Built Bayesian network model to predict overflow risk.',
            results: [
                'Identified 12 high-risk overflow locations for 2050',
                'Prioritized $8M capital improvement plan',
                'Model accuracy: 85% in validation testing',
                'Published in peer-reviewed journal'
            ]
        },
        {
            title: 'Regional Sewer Air Testing Program',
            location: 'Northern California Sewer District',
            challenge: 'Assess potential vapor intrusion from sewer gases into nearby homes and businesses',
            solution: '200+ manholes tested for methane and VOCs using EPA-approved methodologies. Concentration mapping and prioritization analysis.',
            results: [
                '15 hot spots identified requiring mitigation',
                'Cost-effective capital plan ($2.5M vs $6M original estimate)',
                'Zero vapor intrusion incidents post-mitigation',
                'Regulatory compliance achieved ahead of schedule'
            ]
        }
    ]

    const commissionerHighlights = [
        {
            role: 'Tamalpais Community Services District (TCSD)',
            position: 'Elected Wastewater Commissioner',
            tenure: '2003-2026 (23 years)',
            achievements: [
                'Board President (2016-2020)',
                '$50M+ capital projects overseen',
                'Legacy infrastructure mapping initiative',
                'Sea level rise adaptation planning'
            ]
        },
        {
            role: 'Sanitary Agency of Southern Marin (SASM)',
            position: 'Board President',
            tenure: '2016-2020',
            achievements: [
                'Regional wastewater treatment oversight',
                'Multi-district capital planning coordination',
                'Rate structure and cost allocation analysis',
                'Regulatory compliance and reporting'
            ]
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-surface-dark to-surface">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-800 to-blue-950 text-white py-20">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg mb-6">
                                <BuildingOffice2Icon className="w-5 h-5" />
                                <p className="text-white/90 font-medium">For Sewer & Water Utilities</p>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">Sewer & Water Utility Services</h1>
                            <p className="text-2xl text-white/90 mb-8">
                                Expert consulting from someone who understands utility operations firsthand — with 23 years of experience as an elected wastewater commissioner
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                                <div>
                                    <div className="text-4xl font-bold text-accent">23</div>
                                    <div className="text-white/80 text-sm">Years as Commissioner</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">$50M+</div>
                                    <div className="text-white/80 text-sm">Capital Projects</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">200+</div>
                                    <div className="text-white/80 text-sm">Manholes Tested</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-accent">10+</div>
                                    <div className="text-white/80 text-sm">Years Monitoring Data</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="tel:510-590-1098"
                                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                                >
                                    <PhoneIcon className="w-5 h-5" />
                                    Call 510-590-1098
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                                >
                                    <EnvelopeIcon className="w-5 h-5" />
                                    Schedule a Utility Assessment
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Commissioner Experience - Unique Differentiator */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-12">
                            <div className="inline-block bg-accent/10 px-4 py-2 rounded-lg mb-4">
                                <span className="text-accent font-semibold">From the Inside: A Commissioner's Perspective</span>
                            </div>
                            <h2 className="text-4xl font-bold mb-4">I Understand Utility Operations Firsthand</h2>
                            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                                Unlike typical consultants, I've served on the other side of the table as an elected wastewater commissioner for 23 years.
                                I know how utilities work, how boards make decisions, and what regulators require.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-8">
                        {commissionerHighlights.map((highlight, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-600 shadow-md">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary">{highlight.role}</h3>
                                            <p className="text-lg text-text-secondary">{highlight.position}</p>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
                                            {highlight.tenure}
                                        </span>
                                    </div>
                                    <ul className="grid md:grid-cols-2 gap-3">
                                        {highlight.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-accent text-xl mt-0.5">✓</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto mt-8 bg-accent/5 border border-accent/20 p-6 rounded-xl">
                            <p className="text-center text-lg">
                                <strong className="text-primary">What this means for you:</strong> I speak your language. I understand budget constraints, board politics,
                                regulatory compliance, and public accountability. I've been in your shoes for over two decades.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-12 text-center">Specialized Services for Utilities</h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {services.map((service, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="text-5xl">{service.icon}</div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                                            <p className="text-text-secondary">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h4 className="font-semibold text-sm text-accent uppercase mb-3">What You Get:</h4>
                                        <ul className="space-y-2">
                                            {service.deliverables.map((deliverable, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm">
                                                    <span className="text-accent mt-0.5">•</span>
                                                    <span>{deliverable}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Utility Project Portfolio</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Real-world examples of sewer and water utility projects with quantified outcomes
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto space-y-8">
                        {caseStudies.map((study, index) => (
                            <ScrollReveal key={index}>
                                <div className="bg-gradient-to-r from-surface-light to-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
                                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-3xl font-bold text-primary mb-2">{study.title}</h3>
                                            <p className="text-text-secondary flex items-center gap-2">
                                                <MapIcon className="w-4 h-4" />
                                                {study.location}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6 mt-6">
                                        <div>
                                            <h4 className="font-bold text-sm text-accent uppercase mb-2">Challenge</h4>
                                            <p className="text-sm text-text-secondary">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-accent uppercase mb-2">Solution</h4>
                                            <p className="text-sm text-text-secondary">{study.solution}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm text-accent uppercase mb-2">Results</h4>
                                            <ul className="space-y-1">
                                                {study.results.map((result, i) => (
                                                    <li key={i} className="text-sm text-text-secondary flex items-start gap-1">
                                                        <span className="text-accent">✓</span>
                                                        <span>{result}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Equipment & Methodology */}
            <section className="py-16 bg-gradient-to-b from-surface-light to-surface">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Proven Equipment & Methodologies</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            State-of-the-art monitoring equipment and EPA-approved testing protocols
                        </p>
                    </ScrollReveal>
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                        <ScrollReveal>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <WrenchScrewdriverIcon className="w-6 h-6 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Solinst Level Loggers</h3>
                                <p className="text-text-secondary text-sm">
                                    Continuous groundwater level monitoring for overflow prediction and sea level rise impact assessment. 10+ years of field-proven reliability.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <ChartBarIcon className="w-6 h-6 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">SmartCover Manhole Sensors</h3>
                                <p className="text-text-secondary text-sm">
                                    Real-time monitoring networks for sewer overflow prediction and emergency response. Cellular-enabled remote monitoring with alerts.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal>
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                    <BuildingOffice2Icon className="w-6 h-6 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">EPA Method TO-15</h3>
                                <p className="text-text-secondary text-sm">
                                    Industry-standard air sampling methodology for VOCs and methane in sewer systems. Regulatory-compliant sampling and chain-of-custody protocols.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Peer Utility Network */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-4 text-center">Trusted by Utilities Regionwide</h2>
                        <p className="text-xl text-text-secondary text-center mb-12 max-w-3xl mx-auto">
                            Serving sewer and water districts across California, Oregon, and Washington
                        </p>
                    </ScrollReveal>
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto bg-surface-light p-8 rounded-xl">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Professional Associations</h3>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li className="flex items-center gap-2">
                                            <span className="text-accent">•</span>
                                            Bay Area Clean Water Agencies (BACWA)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-accent">•</span>
                                            California Association of Sanitation Agencies (CASA)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-accent">•</span>
                                            National Ground Water Association (NGWA Fellow)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Regional Expertise</h3>
                                    <ul className="space-y-2 text-text-secondary">
                                        <li className="flex items-center gap-2">
                                            <span className="text-accent">•</span>
                                            Bay Area (SF, Marin, East Bay)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-accent">•</span>
                                            Northern California (Sacramento Valley, North Coast)
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-accent">•</span>
                                            Pacific Northwest (Oregon, Washington)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-blue-800 to-blue-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <ScrollReveal>
                        <h2 className="text-4xl font-bold mb-6">Schedule a Utility Assessment</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
                            Get expert consulting from someone who understands utility operations from the inside —
                            with 23 years of wastewater commission experience and proven technical expertise
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="tel:510-590-1098"
                                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                            >
                                <PhoneIcon className="w-5 h-5" />
                                Call 510-590-1098
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                Contact via Form
                            </Link>
                            <a
                                href="mailto:jjacobs@clearwatergroup.com"
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                            >
                                <EnvelopeIcon className="w-5 h-5" />
                                jjacobs@clearwatergroup.com
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
