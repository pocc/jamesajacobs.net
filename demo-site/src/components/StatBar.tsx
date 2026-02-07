import type { Stat } from '../types'
import ScrollReveal from './ScrollReveal'

interface Props {
    stats: Stat[]
    dark?: boolean
}

export default function StatBar({ stats, dark = false }: Props) {
    const bg = dark ? 'bg-primary-dark' : 'bg-surface-mid'
    const valueColor = dark ? 'text-accent' : 'text-accent-dark'
    const labelColor = dark ? 'text-white/70' : 'text-text-secondary'

    return (
        <div className={`${bg} py-8 md:py-10`}>
            <div className="max-w-6xl mx-auto px-4">
                <ScrollReveal stagger>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className={`font-mono text-3xl md:text-4xl font-bold ${valueColor}`}>
                                    {stat.value}
                                </div>
                                <div className={`mt-1 text-sm font-medium ${labelColor}`}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </div>
    )
}
