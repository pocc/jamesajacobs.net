import type { Education } from '../types'
import ScrollReveal from './ScrollReveal'

interface Props {
    items: Education[]
}

export default function TimelineVertical({ items }: Props) {
    return (
        <ScrollReveal>
            <div className="relative">
                {/* Vertical line — "strata" */}
                <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-surface-dark" />

                <div className="space-y-8">
                    {items.map((item, i) => (
                        <div key={i} className="relative pl-12 md:pl-14">
                            {/* Node */}
                            <div className="absolute left-2.5 md:left-3.5 top-1 w-3 h-3 rounded-full border-2 border-accent bg-white" />

                            {/* Stratum layer */}
                            <div className="bg-white rounded-xl border border-surface-dark/50 p-5 shadow-sm">
                                <h3 className="font-serif text-lg font-semibold text-primary">
                                    {item.degree}, {item.field}
                                </h3>
                                <p className="mt-1 text-text-secondary text-sm">
                                    {item.institution}
                                </p>
                                <p className="text-text-secondary/70 text-xs mt-0.5">
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollReveal>
    )
}
