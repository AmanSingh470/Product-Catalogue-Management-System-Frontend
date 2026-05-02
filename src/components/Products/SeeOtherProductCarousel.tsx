"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const images = [
  "/assets/images/5_Gearbox_Assembly.png",
  "/assets/images/card.jpg",
  "/assets/images/5_Gearbox_Assembly.png",
  "/assets/images/card2.png",
  "/assets/images/5_Gearbox_Assembly.png",
  "/assets/images/card2.png",
  "/assets/images/5_Gearbox_Assembly.png",
  "/assets/images/card2.png",
  "/assets/images/5_Gearbox_Assembly.png",
  "/assets/images/card2.png",
];

export default function SeeOtherProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  return (
    <div className="relative w-full mx-auto">

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

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2 ">
              <div className="relative h-50 md:h-80 lg:h-60">
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}