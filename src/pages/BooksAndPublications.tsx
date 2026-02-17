import { useState } from 'react'
import HeroPage from '../components/HeroPage'
import ScrollReveal from '../components/ScrollReveal'
import SectionDivider from '../components/SectionDivider'
import BookCard from '../components/BookCard'
import { books } from '../data/books'
import { publicationGroups } from '../data/publications'

export default function BooksAndPublications() {
    const [openSection, setOpenSection] = useState<number | null>(null)

    return (
        <div>
            <HeroPage
                title="Books & Publications"
                subtitle="Author and co-author of definitive texts in environmental geology, groundwater science, and contamination remediation."
            />

            {/* Featured Book */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Latest Book</h2>
                        <SectionDivider />
                        <div className="mt-8">
                            <BookCard book={books[0]} featured />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* All Books */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">All Books</h2>
                        <SectionDivider />
                        <p className="mt-4 text-text-secondary max-w-2xl mb-8">
                            Books and articles reflect a focus on exposure pathway analysis,
                            sensitive receptors, contaminants in the environment, and assessment
                            and remediation of volatile toxins.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal stagger>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {books.slice(1).map((book) => (
                                <BookCard key={book.title} book={book} />
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Publications */}
            <section className="bg-surface py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Publications</h2>
                        <SectionDivider />
                    </ScrollReveal>
                    <div className="mt-8 space-y-3 max-w-3xl">
                        {publicationGroups.map((group, i) => (
                            <div key={group.label} className="bg-white rounded-xl border border-surface-dark/50 overflow-hidden">
                                <button
                                    onClick={() => setOpenSection(openSection === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                >
                                    <div>
                                        <h3 className="font-serif text-lg font-semibold text-primary">
                                            {group.label}
                                        </h3>
                                        {group.count && (
                                            <p className="text-xs text-text-secondary font-mono mt-0.5">{group.count}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-mono text-accent-dark bg-accent/10 px-2 py-1 rounded">
                                            {group.items.length}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-accent-dark transition-transform ${openSection === i ? 'rotate-180' : ''}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                {openSection === i && (
                                    <div className="px-6 pb-5 border-t border-surface-dark/30">
                                        <ul className="mt-4 space-y-3">
                                            {group.items.map((pub, j) => (
                                                <li key={j} className="text-sm text-text-secondary leading-relaxed">
                                                    <span className="font-mono text-accent-dark text-xs mr-2">{pub.year}</span>
                                                    {pub.citation}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
