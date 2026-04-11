"use client"

import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Toolbar from "@/app/components/Toolbar";
import Main from "@/app/components/Main";
import {ViewProvider} from "@/app/context/view-context";
import {FilterProvider} from "@/app/context/filter-context";
import FilterProductModal from "@/app/components/FilterProductModal";
import AddProductModal from "@/app/components/AddProductModal";
import {AddProductProvider} from "@/app/context/add-product-context";
import { ProductProvider } from "./context/product-context";

export default function Home() {
  return (
    <div className="bg-[#F5F6F8] text-black">
    <Navbar />
    <HeroSection/>
    <ViewProvider>
    <AddProductProvider>
    <ProductProvider>
    <FilterProvider>
        <Toolbar/>
        <Main />
        <FilterProductModal/>
        <AddProductModal />
    </FilterProvider>
    </ProductProvider>
    </AddProductProvider>
    </ViewProvider>
    </div>
  );
}
