interface HeroProps {
    title: string
    subtitle?: string
    compact?: boolean
}

export default function Hero({ title, subtitle, compact }: HeroProps) {
    return (
        <section className={`bg-primary text-white ${compact ? 'py-12' : 'py-16 md:py-20'}`}>
            <div className="max-w-6xl mx-auto px-4">
                <h1 className={`font-serif font-bold ${compact ? 'text-3xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}>
                    {title}
                </h1>
                {subtitle && (
                    <p className={`mt-4 text-white/80 max-w-2xl ${compact ? 'text-base' : 'text-lg md:text-xl'} leading-relaxed`}>
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
