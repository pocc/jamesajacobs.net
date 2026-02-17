export default function TrustSignalFooter() {
    const trustSignals = [
        'Licensed Professional Geologist (P.G.) in 9 states',
        '40+ years experience',
        '1,000+ projects completed',
        '5 published books',
        'Adjunct Faculty, UC Santa Cruz',
    ]

    return (
        <div className="bg-primary/95 border-t border-accent/20 py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-white/90 text-sm">
                    {trustSignals.map((signal, index) => (
                        <span key={index} className="flex items-center gap-2">
                            {index > 0 && <span className="text-accent hidden md:inline">|</span>}
                            {signal}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
