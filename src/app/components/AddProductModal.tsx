"use client";
import { useAddProduct } from "@/app/context/add-product-context";
import AddProductForm from "@/app/components/AddProductForm";

export default function AddProductModal() {
    const { isModalOpen, closeModal } = useAddProduct();

    if (!isModalOpen) return null;

    return (
        <div id="large-add-product-modal" className="flex fixed inset-0 z-9999 bg-black/50 items-center justify-center">

            <div
                className="bg-[#F5F6F8] w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh] rounded-xl shadow-xl flex flex-col">

                <div className="flex justify-between items-center p-4 border-b text-black">
                    <h2 id="addProductModalTitle" className="text-lg font-bold">Add Product</h2>
                    <button id="close-large-add-product-modal" className="text-2xl font-bold cursor-pointer" onClick={closeModal}>&times;</button>
                </div>

                <div id="large-add-product-modal-content" className="overflow-y-auto p-4 flex-1">
                    <AddProductForm />
                </div>


            </div>

        </div>
    )
}
