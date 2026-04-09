"use client"
import GridButton from "@/app/components/GridButton";
import ListButton from "@/app/components/ListButton";
import { useIsLargeScreen } from "@/app/hooks/useIsLargeScreen";
import SearchProduct from "@/app/components/SearchProduct";
import FilterProductButton from "@/app/components/FilterProductButton";
import { useAddProduct } from "@/app/context/add-product-context";

export default function Toolbar() {
    const { openModal } = useAddProduct();

    return useIsLargeScreen() ?
        (
            <div className="hidden lg:flex xl:flex 2xl:flex sticky h-15 top-15 z-50 bg-[#F5F6F8]">
                <div className="flex items-center ml-8 w-14 justify-between">
                    <div className="flex flex-col">
                        <GridButton />
                    </div>
                    <div className="flex flex-col">
                        <ListButton />
                    </div>
                </div>
            </div>
        )
        :
        (
            <>
                <div className="flex justify-evenly lg:hidden xl:hidden 2xl:hidden flex-col sticky h-35 md:h-32 top-15 z-50 bg-[#F5F6F8] m-2">

                    <SearchProduct />
                    <div className="flex justify-evenly mb-1">
                        <FilterProductButton label="All" value="all" openModalOnClick />
                        <FilterProductButton label="By Divison" value="divison" openModalOnClick />
                        <FilterProductButton label="By Company" value="company" openModalOnClick />
                        <FilterProductButton label="By Segment" value="segment" openModalOnClick />
                    </div>
                </div>

                <div id="small-grid-list"
                    className="lg:hidden xl:hidden 2xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white rounded-full shadow-lg px-4 py-2 flex items-center gap-6">

                    <GridButton />

                    <ListButton />

                    <button className="bg-red-500 rounded-2xl" id="small-add-product-btn" onClick={()=> openModal()}>
                        <svg className="size-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="Edit / Add_Plus">
                                    <path id="Vector" d="M6 12H12M12 12H18M12 12V18M12 12V6" stroke="#ffffff" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </g>
                        </svg>
                    </button>

                </div>
            </>

        )
}

