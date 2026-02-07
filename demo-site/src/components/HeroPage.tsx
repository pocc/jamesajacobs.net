import Breadcrumb from './Breadcrumb'

interface Crumb {
    label: string
    to?: string
}

interface Props {
    title: string
    subtitle?: string
    breadcrumbs?: Crumb[]
}

export default function HeroPage({ title, subtitle, breadcrumbs }: Props) {
    return (
        <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-white py-16 md:py-20">
            <div className="max-w-6xl mx-auto px-4">
                {breadcrumbs && (
                    <div className="mb-4">
                        <Breadcrumb items={breadcrumbs} />
                    </div>
                )}
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    )
}
