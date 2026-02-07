import { Link } from 'react-router-dom'
import type { ResearchArea } from '../types'
import ScrollReveal from './ScrollReveal'

interface Props {
    areas: ResearchArea[]
    basePath?: string
}

export default function BentoGrid({ areas, basePath = '/research' }: Props) {
    return (
        <ScrollReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {areas.map((area, i) => (
                    <Link
                        key={area.slug}
                        to={`${basePath}/${area.slug}`}
                        className={`group relative overflow-hidden rounded-2xl border border-surface-dark/60 bg-white p-6 md:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${
                            area.featured && i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                        }`}
                    >
                        <div className="text-3xl mb-3">{area.icon}</div>
                        <h3 className="font-serif text-lg md:text-xl font-semibold text-primary group-hover:text-accent-dark transition-colors">
                            {area.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                            {area.description}
                        </p>
                        {area.status && (
                            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-text-secondary">
                                <span
                                    className={`inline-block w-2 h-2 rounded-full ${
                                        area.status === 'active'
                                            ? 'bg-green-500'
                                            : area.status === 'ongoing'
                                              ? 'bg-amber-500'
                                              : 'bg-slate'
                                    }`}
                                />
                                {area.status === 'active'
                                    ? 'Active Research'
                                    : area.status === 'ongoing'
                                      ? 'Ongoing'
                                      : 'Completed'}
                            </div>
                        )}
                        <span className="mt-4 inline-block text-accent-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                            Explore &rarr;
                        </span>
                    </Link>
                ))}
            </div>
        </ScrollReveal>
    )
}
