export default function SectionDivider() {
    return (
        <div className="flex items-center gap-3 py-1">
            <div className="h-1 w-8 rounded-full bg-accent" />
            <div className="h-1 w-4 rounded-full bg-accent/50" />
            <div className="h-1 w-2 rounded-full bg-accent/30" />
        </div>
    )
}
