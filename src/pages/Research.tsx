import { Link } from 'react-router-dom'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import BentoGrid from '../components/BentoGrid'
import { researchAreas, geologyAndBeer } from '../data/research'

export default function Research() {
    return (
        <div>
            <HeroPage
                title="Research"
                subtitle="Exploring critical environmental challenges through rigorous science, field-tested methodologies, and decades of hands-on experience."
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                            Research Areas
                        </h2>
                        <p className="text-text-secondary max-w-2xl mb-10">
                            From coastal hazard assessment to vapor intrusion pathways, each research
                            area represents years of field work, peer-reviewed publication, and
                            practical application.
                        </p>
                    </ScrollReveal>
                    <BentoGrid areas={researchAreas} />

                    {/* Geology & Beer standalone */}
                    <ScrollReveal className="mt-6">
                        <Link
                            to="/geology-and-beer"
                            className="group block rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 no-underline"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-3xl">{geologyAndBeer.icon}</div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-lg md:text-xl font-semibold text-primary group-hover:text-accent-dark transition-colors">
                                        {geologyAndBeer.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-text-secondary">{geologyAndBeer.description}</p>
                                </div>
                                <span className="text-accent-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                                    Read essay &rarr;
                                </span>
                            </div>
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
