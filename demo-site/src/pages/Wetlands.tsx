import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import ImageGallery from '../components/ImageGallery'

const products = [
    { icon: '💧', title: 'Treated Water', desc: 'For irrigation, groundwater recharge, or wetland habitat.' },
    { icon: '🔥', title: 'Biogas', desc: 'Methane from anaerobic digestion for energy production.' },
    { icon: '🌱', title: 'Compost', desc: 'From biosolids processing for agricultural use.' },
    { icon: '🐟', title: 'Aquaculture', desc: 'Fish and shellfish in treated water polishing ponds.' },
    { icon: '🌾', title: 'Biomass', desc: 'Brush, shrubs, or fast-growing trees for timber, weaving materials, or bioenergy feedstock.' },
    { icon: '🧬', title: 'Algae Products', desc: 'Fuel and animal feed from algae cultivation.' },
    { icon: '💼', title: 'Education & Jobs', desc: 'Field studies, training programs, local employment, and tourism as an education demonstration project.' },
    { icon: '🦆', title: 'Habitat', desc: 'Wildlife and waterfowl habitat; attracts wildlife and tourists.' },
]

export default function Wetlands() {
    return (
        <div>
            <HeroPage
                title="Constructed Wetlands"
                subtitle="A wastewater treatment farm concept — converting waste streams into useful products while providing habitat, education, and community benefits."
                breadcrumbs={[
                    { label: 'Home', to: '/' },
                    { label: 'Research', to: '/research' },
                    { label: 'Wetlands' },
                ]}
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Vision</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed text-base md:text-lg">
                                <p>
                                    The local wastewater treatment plant which has long been stigmatized
                                    due to the strong stench on a hot summer day must be reconsidered
                                    as a respectable member of society: as a resource recycling facility.
                                    As a commissioner of a local sewerage agency since 2002, I have long
                                    been interested in rethinking raw sewage as an unsightly and smelly
                                    waste product to a more dignified source of raw materials for other
                                    products and ecoservices.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Project Concept</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                                <p>
                                    Constructed wetlands can become resource recovery centers and food,
                                    non-food, clean water farms and biogas generators. The optimum
                                    location for the constructed wetlands water project would be in
                                    a developing nation having unmet challenges with untreated human
                                    waste or polluted stormwater and a need for sustainable local
                                    agriculture and water recycling.
                                </p>
                                <p>
                                    This fascinating technical challenge requires the optimization of
                                    a natural wastewater treatment design based on low-cost and
                                    sustainability criteria to produce food, other non-food products,
                                    and biogas while treating wastewater. The project involves
                                    significant research, a multidisciplinary approach and team input
                                    on risk-feedback loops to guarantee safe and healthy food and
                                    non-food items produced at a wastewater treatment farm.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">8 Possible Products</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {products.map((p) => (
                                <div key={p.title} className="bg-white rounded-xl border border-surface-dark/50 p-5 text-center">
                                    <div className="text-3xl mb-3">{p.icon}</div>
                                    <h3 className="font-serif text-base font-semibold text-primary mb-1">{p.title}</h3>
                                    <p className="text-text-secondary text-sm">{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Constructed Wetlands Gallery */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Constructed Wetlands Examples</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed mb-8">
                            Examples of constructed wetlands and wastewater treatment farm concepts showing
                            treatment processes, ecosystem integration, and resource recovery systems.
                        </p>
                    </ScrollReveal>
                    <ImageGallery
                        images={[
                            {
                                src: '/images/research/wetlands-01-front-slide.jpg',
                                alt: 'Constructed Wetlands Overview',
                                caption: 'Constructed wetlands wastewater treatment farm concept',
                            },
                            {
                                src: '/images/research/wetlands-02.jpg',
                                alt: 'Treatment process flow',
                                caption: 'Multi-stage treatment process and water flow diagram',
                            },
                            {
                                src: '/images/research/wetlands-03.jpg',
                                alt: 'Ecosystem integration',
                                caption: 'Integration of treatment zones with natural ecosystems',
                            },
                            {
                                src: '/images/research/wetlands-04.jpg',
                                alt: 'Resource recovery systems',
                                caption: 'Resource recovery and product generation systems',
                            },
                            {
                                src: '/images/research/wetlands-05.jpg',
                                alt: 'Habitat and biodiversity',
                                caption: 'Wildlife habitat and biodiversity benefits',
                            },
                            {
                                src: '/images/research/wetlands-06.jpg',
                                alt: 'Treatment farm layout',
                                caption: 'Site layout showing treatment zones and product areas',
                            },
                        ]}
                        columns={3}
                    />
                </div>
            </section>

            {/* Background & Precedents */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Background &amp; Precedents</h2>
                            <SectionDivider />
                            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                                <p>
                                    Wastes can be reframed as reusable resources. Water reuse of acid
                                    mine drainage and municipal wastewater has been demonstrated. Fish
                                    biologist Ken Semmens, Ph.D. used treated mine drainage for producing
                                    yellow perch, striped bass and three kinds of trout in West Virginia,
                                    Maryland, and Pennsylvania. Constructed wetlands also provide value
                                    in treating mining wastes and acid mine drainage.
                                </p>
                                <p>
                                    Resource recovery evaluations even at U.S. EPA Superfund sites, such
                                    as the Iron Mountain Mine Site near Mount Shasta, California, are
                                    worthwhile. Iron Mountain is an infamous EPA Superfund Site known for
                                    historic acid mine drainage and massive fish kills. Developing nations
                                    or specific sites with mining wastes provide opportunities to use
                                    constructed wetlands as resource recycling and recovery centers.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <Link to="/research" className="inline-block text-accent-dark hover:text-primary font-semibold transition-colors no-underline">
                        &larr; Back to all research
                    </Link>
                </div>
            </section>
        </div>
    )
}
