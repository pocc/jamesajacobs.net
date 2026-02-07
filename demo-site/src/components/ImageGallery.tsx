import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

interface ImageGalleryProps {
    images: {
        src: string
        alt: string
        caption?: string
    }[]
    columns?: number
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)

    const gridClass =
        columns === 2
            ? 'grid-cols-1 sm:grid-cols-2'
            : columns === 4
              ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

    return (
        <>
            <div className={`grid ${gridClass} gap-4`}>
                {images.map((image, index) => (
                    <ScrollReveal key={index}>
                        <button
                            onClick={() => setSelectedImage(index)}
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-surface-dark hover:ring-2 hover:ring-accent transition-all duration-300"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                            {image.caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                                    <p className="text-white text-sm font-medium">
                                        {image.caption}
                                    </p>
                                </div>
                            )}
                        </button>
                    </ScrollReveal>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-accent text-4xl font-light"
                        onClick={() => setSelectedImage(null)}
                    >
                        ×
                    </button>
                    <button
                        className="absolute left-4 text-white hover:text-accent text-4xl"
                        onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage((prev) =>
                                prev === null ? null : (prev - 1 + images.length) % images.length
                            )
                        }}
                        disabled={images.length <= 1}
                    >
                        ‹
                    </button>
                    <button
                        className="absolute right-4 text-white hover:text-accent text-4xl"
                        onClick={(e) => {
                            e.stopPropagation()
                            setSelectedImage((prev) =>
                                prev === null ? null : (prev + 1) % images.length
                            )
                        }}
                        disabled={images.length <= 1}
                    >
                        ›
                    </button>
                    <div className="max-w-6xl max-h-full flex flex-col items-center">
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-[80vh] object-contain"
                        />
                        {images[selectedImage].caption && (
                            <p className="text-white text-center mt-4 max-w-2xl">
                                {images[selectedImage].caption}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
