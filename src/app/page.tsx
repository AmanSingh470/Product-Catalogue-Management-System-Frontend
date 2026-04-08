"use client"

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Toolbar from "@/app/components/Toolbar";
import Main from "@/app/components/Main";
import {ViewProvider} from "@/app/context/view-context";
import {FilterProvider} from "@/app/context/filter-context";
import FilterProductModal from "@/app/components/FilterProductModal";

export default function Home() {
  return (
    <div className="bg-[#F5F6F8]">
    <Navbar />
    <HeroSection/>
    <ViewProvider>
      <FilterProvider>
      <Toolbar/>
      <Main />
      <FilterProductModal/>
      </FilterProvider>
    </ViewProvider>
    </div>
  );
}
