"use client";
import TipTapEditor from "@/app/components/TipTapEditor";
import { useEffect, useState } from "react";
import productDivisonData from "@/app/data/products-divison.json";
import productSegmentData from "@/app/data/products-segment.json";
import productCompanyData from "@/app/data/products-company.json";
import productsCategoryData from "@/app/data/products-category.json";
import { toast } from "react-hot-toast";
import { useAddProduct } from "@/app/context/add-product-context";

export default function AddProductForm() {

    const [text, setText] = useState("");
    const [divisonProducts, setDivisonProducts] = useState<any[]>([]);
    const [segmentProducts, setSegmentProducts] = useState<any[]>([]);
    const [companyProducts, setCompanyProducts] = useState<any[]>([]);
    const [categoryProducts, setCategoryProducts] = useState<any[]>([]);

    const { closeModal } = useAddProduct();

    useEffect(() => {
        setDivisonProducts(productDivisonData);
        setSegmentProducts(productSegmentData);
        setCompanyProducts(productCompanyData);
        setCategoryProducts(productsCategoryData);
    }, []);


    const handleProductSubmit = (e: any) => {
        e.preventDefault();

        toast.success("Product added Successfully!", {
            duration: 3000,
            style: {
                border: '1px solid black',
                padding: '10px',
                backgroundColor: 'green',
                color: 'white'
            },
        });
        closeModal();
    };

    return (
        <form id="add-product-form" className="space-y-5" onSubmit={handleProductSubmit}>

            <div>
                <label className="text-sm font-medium text-black">
                    Title<span className="text-red-500">*</span>

                </label>
                <p className="text-xs text-gray-400 mb-1">Brand Vehicle product name</p>

                <div className="relative bg-white">
                    <input type="text"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none hover:border-black text-black"
                        placeholder="Title"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        maxLength={100}
                        required />
                    <span className="absolute right-3 top-2 text-xs text-gray-400">{text.length}/100 characters</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div>
                    <label className="text-sm font-medium text-black">
                        Category<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black" required>
                        <option value=""  hidden >Choose category</option>

                        {categoryProducts.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium text-black">
                        Company<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black" required>
                        <option value=""  hidden >Choose company</option>
                        {companyProducts.map((company) => (
                            <option key={company.id} value={company.id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium text-black">
                        Division<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black" required>
                        <option value="" hidden>Choose division</option>
                        {divisonProducts.map((division) => (
                            <option key={division.id} value={division.id}>
                                {division.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-sm font-medium text-black">
                        Segment<span className="text-red-500">*</span>
                    </label>
                    <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-xs text-black bg-white hover:border-black" required>
                        <option value=""  hidden >Choose segment</option>
                        {segmentProducts.map((segment) => (
                            <option key={segment.id} value={segment.id}>
                                {segment.name}
                            </option>
                        ))}
                    </select>
                </div>

            </div>

            <div>
                <label className="text-sm font-medium text-black">
                    Description
                </label>

                <TipTapEditor />
            </div>

            <div className="p-4 flex justify-evenly">
                <button id="applyAddProductModalBtn" className="mx-1 w-full bg-red-500 text-white py-3 rounded-lg font-bold cursor-pointer" type="submit">
                    Submit
                </button>
                <button id="applyAddProductModalBtn" className="mx-1 w-full bg-gray-500 text-white py-3 rounded-lg font-bold cursor-pointer" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </form>

    )
}
