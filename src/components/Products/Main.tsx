
"use client";
import { useState } from "react";
import Image from "next/image";
import MainProductCarousel from "@/components/Products/MainProductCarousel";
import SeeOtherProductCarousel from "@/components/Products/SeeOtherProductCarousel";

export default function Main() {
    return (
        <div>
            <div className="mb-20 md:mb-30">
                <MainProductCarousel/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

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

            <div className="md:my-10 md:mx-10 lg:my-25 lg:mx-30">
                <h2 className="text-xl">Status</h2>
                <div className="w-full py-10">
                    <div className="relative flex justify-between items-start">

                        <div className="absolute top-6 left-0 w-full h-[1px] bg-black"></div>

                        <div className="flex flex-col items-start text-center w-40">
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[var(--grey-500)] z-10">
                                <span className="text-white">1</span>
                            </div>
                            <p className="mt-2 text-xs md:text-sm text-[var(--grey-600)] text-left m-1">
                                Idea / feasibility study
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-40">
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[var(--grey-500)] z-10">
                                <span className="text-white">2</span>
                            </div>
                            <p className="mt-2 text-xs md:text-sm text-[var(--grey-600)] m-1">
                                Advance development
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-40">
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[var(--grey-500)] z-10">
                                <span className="text-white">3</span>
                            </div>
                            <p className="mt-2 text-xs md:text-sm text-[var(--grey-600)] m-1">
                                Serial development
                            </p>
                        </div>

                        <div className="flex flex-col items-end text-center w-40">
                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black z-10">
                                <span className="text-white">4</span>
                            </div>
                            <p className="mt-2 text-xs text-[var(--grey-600)] m-1">
                                In production
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl mb-5">See other products</h2>
                <SeeOtherProductCarousel />
            </div>
        </div>
    )
}