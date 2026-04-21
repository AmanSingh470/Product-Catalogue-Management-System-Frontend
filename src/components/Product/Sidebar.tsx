"use client"
import SearchProduct from "@/components/FilterProduct/SearchProduct";
import AddProductButton from "@/components/Product/AddProductButton";
import FilterProductButton from "@/components/FilterProduct/FilterProductButton";
import FilterProduct from "@/components/FilterProduct/FilterProduct";
import {useIsProductsEmpty} from "@/hooks/useIsProductsEmpty";

export default function Sidebar() {
    const isProductsEmpty = useIsProductsEmpty();
    return (
        <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block sticky top-30 h-[calc(100vh-7.5rem)] w-100 border-gray-200 bg-[#F5F6F8]">
            <div className="flex justify-center flex-col h-full p-4 pl-0">
                <div className="flex flex-col mb-3">
                    <AddProductButton />
                    <SearchProduct />
                </div>
                <div className="flex justify-evenly mb-4">
                    <FilterProductButton label="All" value="all" />
                    <FilterProductButton label="By Division" value="division" />
                    <FilterProductButton label="By Company" value="company" />
                    <FilterProductButton label="By Segment" value="segment" />
                </div>
                {isProductsEmpty && (

                    <div className="text-center text-gray-500 text-xl">
                        No products found
                    </div>
                )}
                <FilterProduct />

            </div>
        </div>
    )
}
