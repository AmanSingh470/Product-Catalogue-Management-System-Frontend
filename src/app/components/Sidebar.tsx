"use client"
import SearchProduct from "@/app/components/SearchProduct";
import AddProductButton from "@/app/components/AddProductButton";
import FilterProductButton from "@/app/components/FilterProductButton";
import FilterProduct from "@/app/components/FilterProduct";

export default function Sidebar() {
    return (
        <div className="hidden sm:hidden md:hidden lg:block xl:block 2xl:block sticky top-30 h-[calc(100vh-7.5rem)] w-100 border-gray-200 bg-[#F5F6F8]">
            <div className="flex justify-center flex-col h-full p-4 pl-0">
                <div className="flex flex-col mb-3">
                    <AddProductButton />
                    <SearchProduct />
                </div>
                <div className="flex justify-evenly mb-4">
                    <FilterProductButton label="All" value="all" />
                    <FilterProductButton label="By Divison" value="divison" />
                    <FilterProductButton label="By Company" value="company" />
                    <FilterProductButton label="By Segment" value="segment" />
                </div>

                <FilterProduct />

            </div>
        </div>
    )
}
