"use client"

import {useScrollNavbar} from "@/hooks/useScrollNavbar";
import { useNotification } from "@/context/notification-context";
import { useProfile } from "@/context/profile-context";

export default function Navbar() {
    const scrolled = useScrollNavbar();
    const { setOpen } = useNotification();
    const { setProfileOpen } = useProfile();
    return (
        <nav id="navbar"
            className={`flex justify-between fixed w-full top-0 z-50 h-15 transition-all duration-300 ${scrolled?"bg-white":"bg-transparent"}`}>
            <div className="p-3 flex justify-between items-center">
                <div className={`mr-2 ${scrolled?"text-red-500":"text-white"}`}>
                    <svg className="size-6 2xl:size-8 fill-current" viewBox="24 24 132 122" xmlns="http://www.w3.org/2000/svg">

                        <polygon points="90,30 120,45 90,60 60,45" />
                        <polygon points="60,45 90,60 90,90 60,75" />
                        <polygon points="90,60 120,45 120,75 90,90" />

                        <polygon points="60,75 90,90 60,105 30,90" />
                        <polygon points="30,90 60,105 60,135 30,120" />
                        <polygon points="60,105 90,90 90,120 60,135" />

                        <polygon points="120,75 150,90 120,105 90,90" />
                        <polygon points="90,90 120,105 120,135 90,120" />
                        <polygon points="120,105 150,90 150,120 120,135" />

                        <g stroke="#000000" strokeWidth="5" fill="none" strokeLinejoin="round">

                            <polygon points="90,30 120,45 90,60 60,45 90,30" />
                            <polygon points="60,45 60,75 90,90 90,60" />
                            <polygon points="90,60 120,45 120,75 90,90" />

                            <polygon points="60,75 90,90 60,105 30,90 60,75" />
                            <polygon points="30,90 30,120 60,135 60,105" />
                            <polygon points="60,105 90,90 90,120 60,135" />

                            <polygon points="120,75 150,90 120,105 90,90 120,75" />
                            <polygon points="90,90 120,105 120,135 90,120" />
                            <polygon points="120,105 150,90 150,120 120,135" />

                        </g>

                    </svg>
                </div>

                <h1 id="main-heading"
                    className={`text-sm sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold ${scrolled?"text-red-500":"text-white"}`}>
                    Product Catalogue Management System
                </h1>
            </div>
            <div className="hidden p-3 justify-evenly relative w-40">
                <button className={`cursor-pointer ${scrolled?"block":"hidden"}`} onClick={() => setOpen(true)}>
                    <img className="size-6 header-action" src="/assets/images/bell-icon.svg" alt="" />
                </button>
                <button className={`cursor-pointer ${scrolled?"block":"hidden"}`} onClick={() => setProfileOpen(true)}>
                    <img className="size-6 header-action" src="/assets/images/profile-icon.svg" alt="" />
                </button>
            </div>
        </nav>
    )
}
