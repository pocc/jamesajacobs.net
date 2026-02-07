interface Props {
    children: React.ReactNode
    variant?: 'default' | 'accent' | 'slate'
}

export default function Tag({ children, variant = 'default' }: Props) {
    const styles = {
        default: 'bg-surface-mid text-text border-surface-dark',
        accent: 'bg-accent/10 text-accent-dark border-accent/30',
        slate: 'bg-slate/10 text-slate border-slate/30',
    }

    return (
        <span className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${styles[variant]}`}>
            {children}
        </span>
    )
}
