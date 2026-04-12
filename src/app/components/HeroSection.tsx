"use client"
import { useScrollNavbar } from "../hooks/useScrollNavbar";

export default function HeroSection() {
    const scrolled = useScrollNavbar();
    return (    
        <div className="relative h-screen bg-[url('/assets/images/background.png')] bg-cover lg:mb-10 xl:mb-13 2xl:mb-15 z-49">
            <div id="hero-section" className="w-full h-full flex flex-col z-49 text-white items-center justify-end">
                <div className="z-49 basis-1/2 flex items-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center">Welcome to
                        <br />
                            <span className="text-red-500 font-bold">Product Catalogue </span>
                            Management System
                    </h1>
                </div>
                <div className="basis-1/2 flex items-center">
                    <div className="flex flex-col z-49 justify-center items-center">
                        <h3 className="mb-10 text-sm">Scroll down to explore</h3>
                        <div className="z-49 animate-flow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 220" className="w-6 h-48">

                                <defs>
                                    <linearGradient id="fadeLine" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopOpacity="0" />
                                        <stop offset="50%" stopOpacity="1" />
                                        <stop offset="100%" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                <line x1="12" y1="6" x2="12" y2="170" stroke="red" strokeWidth="3" opacity="0.3" />

                                <line x1="12" y1="6" x2="12" y2="170" stroke="red" strokeWidth="3" className="animate-flow" />

                                <path d="M8 158 L12 170 L16 158" stroke="white" strokeWidth="3" fill="none" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute inset-0 ${scrolled?"bg-black/60":"bg-black/80"}`}></div>
        </div>
    )
}
