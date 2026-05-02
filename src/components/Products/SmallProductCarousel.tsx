"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/assets/images/5_Gearbox_Assembly.png",
  "/assets/images/Card.jpg",
  "/assets/images/Card2.png",
];

export default function SmallProductCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

    return (
        <div className="relative w-full max-w-4xl mx-auto">

            <button
                onClick={() => emblaApi?.scrollPrev()}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-1 rounded"
            >
                ←
            </button>

            <button
                onClick={() => emblaApi?.scrollNext()}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-1 rounded"
            >
                →
            </button>

            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, index) => (
                        <div key={index} className="min-w-full relative h-64 md:h-80">
                            <Image
                                src={src}
                                alt={`slide-${index}`}
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
