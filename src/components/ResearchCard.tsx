import { Link } from 'react-router-dom'

interface Props {
    to: string
    icon: string
    title: string
    description: string
    status?: 'active' | 'completed' | 'ongoing'
}

export default function ResearchCard({ to, icon, title, description, status }: Props) {
    return (
        <Link
            to={to}
            className="group block rounded-2xl border border-surface-dark/60 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
            <div className="text-2xl mb-3">{icon}</div>
            <h3 className="font-serif text-lg font-semibold text-primary group-hover:text-accent-dark transition-colors">
                {title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{description}</p>
            {status && (
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-text-secondary">
                    <span
                        className={`inline-block w-2 h-2 rounded-full ${
                            status === 'active'
                                ? 'bg-green-500'
                                : status === 'ongoing'
                                  ? 'bg-amber-500'
                                  : 'bg-slate-500'
                        }`}
                    />
                    {status === 'active' ? 'Active Research' : status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </div>
            )}
            <span className="mt-3 inline-block text-accent-dark text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more &rarr;
            </span>
        </Link>
    )
}
