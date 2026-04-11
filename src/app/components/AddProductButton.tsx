"use client";
import { useAddProduct } from "@/app/context/add-product-context";

export default function AddProductButton()
{
      const { openModal } = useAddProduct();
    
    return (
        <button onClick={()=>{
            openModal();
        }}
            className="bg-red-600 hover:bg-red-700 rounded-3xl p-2 text-white mb-3 font-bold cursor-pointer"
            id="add-product-btn">
            Add Product
        </button>
    )
}
