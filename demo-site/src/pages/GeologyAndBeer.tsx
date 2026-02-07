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
                            If I tell you that as a groundwater geologist, a 6% alcohol by volume
                            beer has 94% water and that water must be studied with great gusto,
                            I am sure you would agree.
                        </PullQuote>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">The Roman Connection</h2>
                        <SectionDivider />
                        <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                            <p>
                                It turns out that because the Romans and the Greeks before them
                                used lined street ditches as sewers to remove human wastes from
                                the urban areas, we now have historic brewery styles as distinctive
                                as pilsners are from stouts. It all relates to groundwater.
                            </p>
                            <p>
                                The Greeks and Romans conceptualized about water resources and
                                wastewater treatment in a centralized model &mdash; the water would
                                be brought to the center city for local distribution, and the wastes
                                would be generated in public toilets, and the pipes and open-channel
                                sewers would lead to the river in a centralized discharge point.
                                By allowing the Tiber River in Rome to become contaminated with
                                human and animal wastes, the river became unusable as a source
                                of potable water. Therefore, clean drinking water had to be brought
                                in from far away. This was accomplished by the great Roman aqueducts
                                and other engineering feats. Importing water to the center of Rome
                                had the effect of centralizing water resources. Had the Romans kept
                                the Tiber River clean, who knows whether we would have decentralized
                                urban water and sewer systems today.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Groundwater &amp; Brewing Water</h2>
                        <SectionDivider />
                        <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                            <p>
                                Later, Europeans in England, Belgium, Germany and other beer drinking
                                countries realized their waterways were too polluted to drink or use
                                the water as brewing water, and most brewers preferred to use cleaner
                                groundwater sources accessed through hand-dug wells. The water was
                                much cleaner and contained local dissolved minerals which reflected
                                geologic processes of deposition of the rocks in which the water
                                flowed. In some cases, clean sandstone aquifers provided sand-filtered
                                water of the highest quality. High sulfate levels in some groundwaters
                                (think Burton-upon-Trent) indicates a source of gypsum, and evaporative
                                depositional processes in the past.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Centralized vs. Decentralized</h2>
                        <SectionDivider />
                        <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                            <p>
                                One last thing about centralized versus decentralized water and
                                wastewater services &mdash; decentralized distribution of water and
                                wastewater services in urban areas would have required individual
                                hand-dug water wells and individual latrines or outhouses. The Greeks
                                and Romans thought about these issues and both agreed on the
                                centralized approach for water and wastewater services in urban
                                settings. The centralized model for water and wastewater is still
                                with us today in the urban centers over 2,000 years later. Rural
                                areas have tended to go with a decentralized model. Future wastewater
                                and water will likely require a combination of water recycling in
                                urban homes or small communities and possibly some limited onsite
                                treatment of wastewater. With sea level rise, we will need to
                                rethink the coastal wastewater plants and the water sources.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">The Brewmaster&apos;s Art</h2>
                        <SectionDivider />
                        <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
                            <p>
                                Coming back to beer &mdash; the historic brewing styles in Europe
                                reflect the decisions of thousands of brew masters working over
                                hundreds of years with the specific groundwater at their brewery.
                                These brewing chemists had to adjust their hops, yeasts, and cereal
                                grains to the dissolved minerals, pH and other characteristics in
                                the brewing water to yield a consistently tasty brew that locals
                                would reliably purchase year after year. Having brewed a few batches,
                                I understand how challenging it is for brewmasters to consistently
                                deliver a terrific beer.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <section className="bg-white py-16 md:py-24">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <PullQuote>
                            Cheers!
                        </PullQuote>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    )
}
