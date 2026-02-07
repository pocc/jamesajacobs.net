import Hero from '../components/Hero'

export default function GeologyAndBeer() {
    return (
        <div>
            <Hero
                title="Geology and Beer!"
                subtitle="The surprising connection between groundwater, history, and your favorite brew"
            />

            {/* Opening Pull Quote */}
            <section className="py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <blockquote className="border-l-4 border-accent pl-6 md:pl-8 py-4">
                        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-primary leading-relaxed italic">
                            &ldquo;If I tell you that as a groundwater geologist, a 6%
                            alcohol by volume beer has 94% water and that water must be
                            studied with great gusto, I am sure you would agree.&rdquo;
                        </p>
                    </blockquote>
                </div>
            </section>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-3 pb-8">
                <div className="w-12 h-0.5 bg-accent rounded" />
                <div className="w-2 h-2 bg-accent rounded-full" />
                <div className="w-12 h-0.5 bg-accent rounded" />
            </div>

            {/* Essay Body */}
            <section className="pb-16 md:pb-20">
                <div className="max-w-3xl mx-auto px-4">
                    <article className="space-y-8 text-gray-700 leading-relaxed text-base md:text-lg">
                        {/* Paragraph 1: The Roman Connection */}
                        <div>
                            <h2 className="font-serif text-xl md:text-2xl text-primary font-bold mb-4">
                                The Roman Connection
                            </h2>
                            <p>
                                It turns out that because the Romans and the Greeks before
                                them used lined street ditches as sewers to remove human
                                wastes from urban areas, we now have historic brewery styles
                                as distinctive as pilsners are from stouts. It all relates
                                to groundwater. The Greeks and Romans conceptualized about
                                water resources and wastewater treatment in a centralized
                                model &mdash; water brought to center city for distribution,
                                wastes generated in public toilets, pipes and open-channel
                                sewers leading to the river. By allowing the Tiber River in
                                Rome to become contaminated, it became unusable as potable
                                water. Clean drinking water had to be brought in from far
                                away via the great Roman aqueducts.
                            </p>
                        </div>

                        {/* Paragraph 2: Centralized vs Decentralized */}
                        <div>
                            <h2 className="font-serif text-xl md:text-2xl text-primary font-bold mb-4">
                                Centralized vs. Decentralized
                            </h2>
                            <p>
                                Importing water to the center of Rome had the effect of
                                centralizing water resources. Had the Romans kept the Tiber
                                River clean, who knows whether we would have decentralized
                                urban water and sewer systems today. Later, Europeans in
                                England, Belgium, Germany and other beer drinking countries
                                realized their waterways were too polluted, and most brewers
                                preferred cleaner groundwater sources accessed through
                                hand-dug wells.
                            </p>
                        </div>

                        {/* Highlighted Section */}
                        <div className="bg-surface border border-surface-dark/30 rounded-xl p-6 md:p-8">
                            <h2 className="font-serif text-xl md:text-2xl text-primary font-bold mb-4">
                                The Water-Beer Connection
                            </h2>
                            <p>
                                The water was much cleaner and contained local dissolved
                                minerals which reflected geologic processes of deposition of
                                the rocks in which the water flowed. In some cases, clean
                                sandstone aquifers provided sand-filtered water of the
                                highest quality. High sulfate levels in some groundwaters
                                (think Burton-upon-Trent) indicates a source of gypsum, and
                                evaporative depositional processes in the past.
                            </p>
                        </div>

                        {/* Paragraph 4: Centralized Model Legacy */}
                        <div>
                            <h2 className="font-serif text-xl md:text-2xl text-primary font-bold mb-4">
                                A Legacy Over 2,000 Years Old
                            </h2>
                            <p>
                                One last thing about centralized versus decentralized water
                                and wastewater services &mdash; decentralized distribution
                                would have required individual hand-dug water wells and
                                individual latrines or outhouses. The Greeks and Romans both
                                agreed on the centralized approach for urban settings. The
                                centralized model for water and wastewater is still with us
                                today in urban centers over 2,000 years later. Rural areas
                                have tended to go with decentralized. Future wastewater and
                                water will likely require a combination of water recycling
                                in urban homes and possibly limited onsite treatment. With
                                sea level rise, we will need to rethink coastal wastewater
                                plants and water sources.
                            </p>
                        </div>

                        {/* Decorative Divider */}
                        <div className="flex items-center justify-center gap-3 py-4">
                            <div className="w-8 h-0.5 bg-accent/50 rounded" />
                            <div className="w-1.5 h-1.5 bg-accent/50 rounded-full" />
                            <div className="w-8 h-0.5 bg-accent/50 rounded" />
                        </div>

                        {/* Paragraph 5: Brewing Heritage */}
                        <div>
                            <h2 className="font-serif text-xl md:text-2xl text-primary font-bold mb-4">
                                Brewing Heritage
                            </h2>
                            <p>
                                Coming back to beer &mdash; the historic brewing styles in
                                Europe reflect the decisions of thousands of brew masters
                                working over hundreds of years with the specific groundwater
                                at their brewery. These brewing chemists had to adjust their
                                hops, yeasts, and cereal grains to the dissolved minerals,
                                pH and other characteristics in the brewing water to yield a
                                consistently tasty brew that locals would reliably purchase
                                year after year.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            {/* Closing Quote */}
            <section className="bg-surface py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-12 h-0.5 bg-accent rounded" />
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <div className="w-12 h-0.5 bg-accent rounded" />
                    </div>
                    <blockquote>
                        <p className="font-serif text-xl md:text-2xl text-primary leading-relaxed italic">
                            &ldquo;Having brewed a few batches, I understand how
                            challenging it is for brewmasters to consistently deliver a
                            terrific beer. Cheers!&rdquo;
                        </p>
                    </blockquote>
                </div>
            </section>

            {/* Download Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-4">
                        Read the Full Essay
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Download the complete essay on the fascinating relationship
                        between geology and brewing.
                    </p>
                    <a
                        href="/docs/geology-and-beer-2021.pdf"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                        download
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        2021 Geology and Beer (PDF)
                    </a>
                </div>
            </section>
        </div>
    )
}
