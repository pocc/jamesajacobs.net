import { Link } from 'react-router-dom'

interface Crumb {
    label: string
    to?: string
}

interface Props {
    items: Crumb[]
}

export default function Breadcrumb({ items }: Props) {
    return (
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            {items.map((item, i) => (
                <span key={i}>
                    {i > 0 && <span className="mx-2">/</span>}
                    {item.to ? (
                        <Link to={item.to} className="hover:text-white/90 transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-white/90">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    )
}
