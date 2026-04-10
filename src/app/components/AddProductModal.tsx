"use client";
import { useAddProduct } from "@/app/context/add-product-context";

export default function AddProductModal() {
    const { isModalOpen, closeModal } = useAddProduct();
    if (!isModalOpen) return null;

    return (
        <div id="large-add-product-modal" className="flex fixed inset-0 z-9999 bg-black/50 items-center justify-center">

            <div
                className="bg-white w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-full lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh] rounded-xl shadow-xl flex flex-col">

                <div className="flex justify-between items-center p-4 border-b">
                    <h2 id="addProductModalTitle" className="text-lg font-bold">Add Product</h2>
                    <button id="close-large-add-product-modal" className="text-2xl font-bold" onClick={closeModal}>&times;</button>
                </div>

                <div id="large-add-product-modal-content" className="overflow-y-auto p-4 flex-1">
                    <form id="add-product-form" className="space-y-5">

                        <div>
                            <label className="text-sm font-medium">
                                Title
                            </label>
                            <p className="text-xs text-gray-400 mb-1">Brand Vehicle product name</p>

                            <div className="relative">
                                <input type="text"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
                                    placeholder="Title" />
                                <span className="absolute right-3 top-2 text-xs text-gray-400">0/100 characters</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label className="text-sm font-medium text-black">
                                    Category<span className="text-red-500">*</span>
                                </label>
                                <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black">
                                    <option>Choose category</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium ">
                                    Company<span className="text-red-500">*</span>
                                </label>
                                <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black">
                                    <option>Choose company</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-black">
                                    Division<span className="text-red-500">*</span>
                                </label>
                                <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black">
                                    <option>Choose division</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-black">
                                    Segment<span className="text-red-500">*</span>
                                </label>
                                <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black">
                                    <option>Choose segment</option>
                                </select>
                            </div>

                        </div>

                        <div>
                            <label className="text-sm font-medium text-black">
                                Description<span className="text-red-500">*</span>
                            </label>

                            <div
                                className="border border-gray-300 rounded-t-md px-3 py-2 flex gap-3 text-sm  bg-gray-50 text-black">
                                <button type="button" className="font-bold">B</button>
                                <button type="button" className="italic">I</button>
                                <button type="button" className="underline">U</button>
                                <button type="button">S</button>
                                <button type="button">•</button>
                                <button type="button">1.</button>
                                <button type="button">≡</button>
                            </div>

                            <textarea
                                className="w-full border border-t-0 border-gray-300 rounded-b-md px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"></textarea>
                        </div>

                    </form>

                </div>

                <div className="p-4 border-t">
                    <button id="applyAddProductModalBtn" className="w-full bg-red-500 text-white py-3 rounded-lg font-bold">
                        Submit
                    </button>
                </div>

            </div>

        </div>
    )
}
