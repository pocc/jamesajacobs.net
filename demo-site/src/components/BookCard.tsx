import type { Book } from '../types'

interface Props {
    book: Book
    featured?: boolean
}

export default function BookCard({ book, featured = false }: Props) {
    if (featured) {
        return (
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* CSS-rendered book cover */}
                <div className="flex-shrink-0 w-48 h-64 rounded-lg shadow-xl bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                        <div className="w-8 h-0.5 bg-accent mb-2" />
                        <h4 className="text-white font-serif text-sm font-bold leading-tight">
                            {book.shortTitle}
                        </h4>
                        <p className="text-white/60 text-xs mt-1">{book.publisher}</p>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
                </div>
                <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">
                        {book.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                        {book.authors} &middot; {book.publisher} &middot; {book.pages} pages &middot; {book.year}
                    </p>
                    <p className="mt-4 text-text leading-relaxed">{book.description}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-xl border border-surface-dark/50 p-6 flex flex-col h-full hover:shadow-md transition-shadow">
            {/* Mini cover */}
            <div className="w-full h-32 rounded-lg bg-gradient-to-br from-primary-light to-primary mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                    <div className="w-6 h-0.5 bg-accent mb-1" />
                    <h4 className="text-white font-serif text-xs font-bold leading-tight">
                        {book.shortTitle}
                    </h4>
                </div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-accent" />
            </div>
            <h3 className="font-serif text-base font-semibold text-primary leading-snug flex-1">
                {book.title}
            </h3>
            <div className="mt-3 space-y-1">
                <p className="text-xs text-text-secondary">{book.publisher} &middot; {book.year}</p>
                <p className="text-xs text-text-secondary font-mono">{book.pages} pp.</p>
            </div>
        </div>
    )
}
