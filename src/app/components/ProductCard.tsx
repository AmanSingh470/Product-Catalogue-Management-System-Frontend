"use client"
import { useView } from "@/app/context/view-context";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ProductCard({ title, category, type, image }: any) {
    const { view } = useView();

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView && (
                view === "grid" ? (
                    <div className="group relative rounded-md flex flex-col overflow-hidden text-white w-full h-45 sm:h-70 md:h-85 lg:h-45 xl:h-55 2xl:h-60 product-item">
                        
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="rounded object-cover"
                        />

                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-300"></div>

                        <div className="absolute flex flex-col justify-center bottom-3 left-1 p-2 text-xs">
                            <h2>{title}</h2>
                            <p>{category}</p>
                        </div>

                    </div>
                ) : (
                    <div className="grid grid-cols-8 gap-4 items-center bg-white rounded-lg px-4 py-3 shadow-sm hover:bg-gray-50 transition">
                        
                        <div className="flex items-center col-span-3 gap-2">
                            <img src={image} className="w-10 h-10 rounded object-cover" />
                            <span className="text-xs font-medium text-gray-800">
                                {title}
                            </span>
                        </div>

                        <div className="text-xs text-gray-500 col-span-2">
                            {category}
                        </div>

                        <div className="text-sm text-gray-500 col-span-2">
                            {type}
                        </div>

                        <div className="flex justify-end text-gray-400 col-span-1">
                            &#8594;
                        </div>

                    </div>
                )
            )}
        </div>
    );
}