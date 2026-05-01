
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Main() {
    const images = [
        "/assets/images/5_Gearbox_Assembly.png",
        "/assets/images/Card.jpg",
        "/assets/images/Card2.png",
    ];
    const [mainImage, setMainImage] = useState("/assets/images/5_Gearbox_Assembly.png");

    return (
        <div>

            <div className="grid grid-cols-5 gap-8 h-140 mb-30">
                <div className="bg-red-200 col-span-4 relative">
                    <Image
                        src={mainImage}
                        alt="product"
                        fill
                        className="rounded object-cover"
                    />
                </div>

                <div className="grid grid-rows-3 gap-8 col-span-1">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`relative cursor-pointer border-2 rounded ${mainImage === img ? "border-black" : "border-transparent"
                                }`}
                            onMouseEnter={() => setMainImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`product ${i}`}
                                fill
                                className="rounded object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-14">

                <div className="grid-span-1">
                    <h2 className="text-xl mb-4">Main Advantages</h2>
                    <div className="grid gap-4">
                        <div>
                            <h3 className="text-md text-[var(--grey-800)]">Enhanced experience</h3>
                            <p className="text-[var(--grey-600)] text-sm">Distinctive surface finishing achieved through thee printed pattern.</p>
                        </div>
                        <div>
                            <h3>Sustainability</h3>
                            <p className="text-[var(--grey-600)] text-sm">Less CO2 than painting syste, reducing dramatically carbon footprint.</p>
                        </div>
                        <div>
                            <h3>Sustainability</h3>
                            <p className="text-[var(--grey-600)] text-sm">One single material based system</p>
                        </div>
                        <div>
                            <h3>Cost reduction</h3>
                            <p className="text-[var(--grey-600)] text-sm">Most cost effective than insert moduling</p>
                        </div>
                        <div>
                            <h3>Modularity</h3>
                            <p className="text-[var(--grey-600)] text-sm">Suitable for any plant in the world</p>
                        </div>
                    </div>
                </div>
                <div className="grid-span-1">
                    <h2 className="mb-4 text-xl">Key facts</h2>
                    <ul className="grid gap-4">
                        <li className="text-sm text-[var(--grey-600)]">Avoiding expensive paint shop investment</li>
                        <li className="text-sm text-[var(--grey-600)]">Robust global technology production in Motherson for a decade for Renault Zoe and Nissan Magnite</li>
                    </ul>
                </div>
                <div className="grid-span-1">
                    <h2 className="mb-4 text-xl">Intellectual Property</h2>
                    <div className="grid gap-4">
                        <ul className="text-[var(--grey-600)] text-sm">
                            <li>2 patents</li>
                        </ul>
                    </div>
                </div>
                <div className="grid-span-1">
                    <h2 className="mb-4 text-xl">Applications / Compliance</h2>
                    <div className="grid grid-rows-5">
                        <ul className="text-[var(--grey-600)] text-sm">
                            <li>Small to large decorative parts</li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="mt-25 ml-30 mr-30 mb-25">
                <h2 className="text-xl">Status</h2>
                <div className="w-full py-10">
                    <div className="relative flex justify-between items-start">

                        {/* LINE */}
                        <div className="absolute top-6 left-0 w-full h-[1px] bg-black"></div>

                        {/* STEP */}
                        <div className="flex flex-col items-start text-center w-40">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--grey-500)] z-10">
                                <span className="text-white">1</span>
                            </div>
                            <p className="mt-2 text-sm text-[var(--grey-600)]">
                                Idea / feasibility study
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-40">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--grey-500)] z-10">
                                <span className="text-white">2</span>
                            </div>
                            <p className="mt-2 text-sm text-[var(--grey-600)]">
                                Advance development
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-40">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--grey-500)] z-10">
                                <span className="text-white">3</span>
                            </div>
                            <p className="mt-2 text-sm text-[var(--grey-600)]">
                                Serial development
                            </p>
                        </div>

                        <div className="flex flex-col items-end text-center w-40">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black z-10">
                                <span className="text-white">4</span>
                            </div>
                            <p className="mt-2 text-sm text-[var(--grey-600)]">
                                In production
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl mb-5">See other products</h2>
                <div className="grid grid-cols-4 justify-between gap-5">
                    <div className=" relative h-50">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            fill
                            unoptimized
                            className="object-cover"
                            alt="other products"
                        />
                        <h3>2D logo Tata Nexon & Curvv</h3>
                    </div>
                    <div className=" relative h-50">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            fill
                            unoptimized
                            className="object-cover"
                            alt="other products"
                        />
                        <h3>2D logo Tata Nexon & Curvv</h3>
                    </div>
                    <div className=" relative h-50">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            fill
                            unoptimized
                            className="object-cover"
                            alt="other products"
                        />
                        <h3>2D logo Tata Nexon & Curvv</h3>
                    </div>
                    <div className=" relative h-50">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            fill
                            unoptimized
                            className="object-cover"
                            alt="other products"
                        />
                        <h3>2D logo Tata Nexon & Curvv</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}