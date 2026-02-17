import { Link } from 'react-router-dom'
import { audienceCards } from '../data/audienceCards'

export default function AudienceCards() {
    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                        Who I Help
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                        40+ years serving diverse clients with specialized environmental expertise.
                        Find your path below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {audienceCards.map((card) => (
                        <Link
                            key={card.title}
                            to={card.link}
                            className="group block"
                        >
                            <div
                                className={`h-full p-6 rounded-xl bg-gradient-to-br ${card.bgColor} text-white
                                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                            >
                                {/* Icon */}
                                <div className="text-5xl mb-4">{card.icon}</div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2">
                                    {card.title}
                                </h3>

                                {/* Subtitle */}
                                <div className="text-sm font-semibold opacity-90 mb-3">
                                    {card.subtitle}
                                </div>

                                {/* Description */}
                                <p className="text-sm opacity-80 mb-4 line-clamp-3">
                                    {card.description}
                                </p>

                                {/* CTA */}
                                <div
                                    className="inline-flex items-center text-sm font-semibold
                                    group-hover:translate-x-2 transition-transform"
                                >
                                    {card.cta}
                                    <svg
                                        className="w-4 h-4 ml-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Additional CTA */}
                <div className="text-center mt-12">
                    <p className="text-text-secondary mb-4">
                        Don't see your industry? I work with insurance companies, consultants, and community groups too.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block px-6 py-3 bg-accent hover:bg-accent-dark
                        text-primary-dark font-semibold rounded-xl transition-colors"
                    >
                        Contact for Custom Consultation
                    </Link>
                </div>
            </div>
        </section>
    )
}
