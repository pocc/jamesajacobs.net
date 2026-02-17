interface Props {
    children: React.ReactNode
    attribution?: string
}

export default function PullQuote({ children, attribution }: Props) {
    return (
        <blockquote className="relative my-8 border-l-4 border-accent py-2 pl-6 md:pl-8">
            <p className="font-serif text-lg md:text-xl leading-relaxed text-primary/90 italic">
                {children}
            </p>
            {attribution && (
                <footer className="mt-3 text-sm font-medium text-text-secondary">
                    — {attribution}
                </footer>
            )}
        </blockquote>
    )
}
