"use client"
import {useFilter} from "@/app/context/filter-context";
import FilterProduct from "@/app/components/FilterProduct";

export default function FilterProductModal() {
    const { isModalOpen, closeModal, activeFilter } = useFilter();

    if(!isModalOpen) return null;

    return (
        <div id="small-filter-modal" className="fixed inset-0 z-9999 bg-white flex flex-col">

            <div className="flex justify-between items-center p-4 border-b bg-white sticky top-0 z-10">
                <h2 id="small-filter-modal-title" className="text-lg font-bold uppercase">{activeFilter}</h2>
                <button id="small-filter-modal-close-btn" className="text-2xl font-bold" onClick={closeModal}>&times;</button>
            </div>

            <div id="small-filter-modal-content" className="flex-1 overflow-y-auto p-4 pb-24">
                <FilterProduct/>
            </div>

            <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
                <button id="apply-filters-btn" className="w-full bg-red-500 text-white py-3 rounded-lg font-bold">
                    Show Results
                </button>
            </div>

        </div>
    )
}
``