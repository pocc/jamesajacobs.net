import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import PullQuote from '../components/PullQuote'

export default function GeologyAndBeer() {
    return (
        <div>
            <HeroPage
                title="Geology & Beer!"
                subtitle="Exploring how geological terroir shapes water chemistry and brewing traditions around the world."
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <PullQuote>
                            The water that makes your beer started as rain, filtered through rock
                            and soil, picking up minerals that give it character. Every beer is a
                            geological story.
                        </PullQuote>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">The Roman Connection</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed">
                            Ancient Romans chose brewery locations based on water sources. The
                            mineral content of local springs and aquifers determined which styles
                            of beer could be brewed successfully. This connection between geology
                            and brewing persisted through the centuries, creating distinct regional
                            brewing traditions that survive to this day.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Centralized vs. Decentralized</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed">
                            Geology influenced whether brewing became centralized or distributed
                            across a region. Areas with exceptional water sources — like the
                            Burton-upon-Trent springs in England, with their high sulfate content —
                            attracted large brewing operations. Meanwhile, regions with uniformly
                            good water saw smaller breweries spread across the landscape.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">The Water-Beer Connection</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed">
                            Specific minerals shape beer flavor in profound ways. Calcium promotes
                            clarity and enzyme activity. Sulfate accentuates hop bitterness — the
                            secret behind the famous India Pale Ales of Burton. Chloride enhances
                            malt sweetness. Bicarbonate buffers acidity, favoring the dark roasted
                            malts of Dublin stouts. Every great brewing region owes its character
                            to the rocks beneath it.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">A Legacy Over 2,000 Years</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed">
                            Geological terroir created distinct regional brewing traditions that
                            have endured for millennia. The pilsners of Bohemia owe their crisp
                            character to the soft water filtered through Cretaceous sandstones.
                            The ales of Belgium reflect the varied hydrogeology of the Ardennes
                            and the Flanders plain. Understanding these geological foundations
                            enriches our appreciation of the world&apos;s brewing heritage.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Brewing Heritage</h2>
                        <SectionDivider />
                        <p className="mt-6 text-text-secondary leading-relaxed">
                            Modern craft brewers are reconnecting with local water character,
                            rejecting the industrial approach of stripping water to a blank
                            canvas and rebuilding it chemically. By understanding and embracing
                            their local hydrogeology, today&apos;s brewers create beers with a
                            genuine sense of place — a geological terroir that links each sip
                            to the rocks and aquifers beneath the brewery.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <PullQuote>
                            Next time you raise a glass, consider the journey of the water inside.
                            From cloud to aquifer, through ancient rock formations, to the brewer&apos;s
                            kettle — every beer tells a story written in stone.
                        </PullQuote>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
