import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'

const products = [
    { icon: '💧', title: 'Treated Water', desc: 'For irrigation, groundwater recharge, or wetland habitat.' },
    { icon: '🔥', title: 'Biogas', desc: 'Methane from anaerobic digestion for energy production.' },
    { icon: '🌱', title: 'Compost', desc: 'From biosolids processing for agricultural use.' },
    { icon: '🐟', title: 'Aquaculture', desc: 'Fish and shellfish in treated water polishing ponds.' },
    { icon: '🌾', title: 'Biomass', desc: 'Harvested wetland plants for bioenergy feedstock.' },
    { icon: '🌍', title: 'Carbon Credits', desc: 'From wetland carbon sequestration programs.' },
    { icon: '📚', title: 'Education', desc: 'Field studies and training programs for students.' },
    { icon: '🦆', title: 'Habitat', desc: 'Wildlife and waterfowl habitat restoration.' },
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
                            <p className="mt-6 text-text-secondary leading-relaxed text-lg">
                                A constructed wetland wastewater treatment farm that converts waste
                                streams into useful products while providing habitat, education, and
                                community benefits. This concept integrates water reuse, renewable
                                energy production, and ecological restoration into a single, sustainable system.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Possible Products</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                            {products.map((p) => (
                                <div key={p.title} className="bg-surface rounded-xl border border-surface-dark/50 p-5 text-center">
                                    <div className="text-3xl mb-3">{p.icon}</div>
                                    <h3 className="font-serif text-base font-semibold text-primary mb-1">{p.title}</h3>
                                    <p className="text-text-secondary text-sm">{p.desc}</p>
                                </div>
                            ))}
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
