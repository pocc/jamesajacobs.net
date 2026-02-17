import { useEffect, useRef, useState } from 'react'

interface Props {
    children: React.ReactNode
    className?: string
    stagger?: boolean
}

export default function ScrollReveal({ children, className = '', stagger = false }: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReduced) {
            // Immediately show content if user prefers reduced motion
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
        )

        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const baseClass = stagger
        ? `stagger-children ${isVisible ? 'is-visible' : ''}`
        : isVisible
          ? 'animate-fade-up'
          : 'opacity-0'

    return (
        <div ref={ref} className={`${baseClass} ${className}`}>
            {children}
        </div>
    )
}
