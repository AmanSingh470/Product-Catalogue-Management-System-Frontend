"use client";
import { useProducts } from "@/app/context/product-context";

export default function SearchProduct() {
    const { searchQuery, setSearchQuery } = useProducts();

    return (
        <input
            id="search-input"
            className="p-2 rounded-xs bg-white text-black placeholder-gray-500"
            type="text"
            placeholder="Search Products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
}
