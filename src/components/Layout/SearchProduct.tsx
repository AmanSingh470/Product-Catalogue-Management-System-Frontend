"use client";
import { useProducts } from "@/context/product-context";
import SearchIcon from "@/components/Icons/SearchIcon";
import CrossIcon from "@/components/Icons/CrossIcon";
import { useRef, useState } from "react";

export default function SearchProduct() {
    const { searchQuery, setSearchQuery } = useProducts();
    const inputRef = useRef<HTMLInputElement>(null);
    const [searching, setSearching] = useState(false);

    return (

        <div className="flex relative">
            <input
                id="search-input"
                className="p-2 rounded-xs bg-white text-black placeholder-gray-500 w-full"
                type="text"
                placeholder="Search Products"
                value={searchQuery}
                onChange={
                    (e) => {
                        setSearchQuery(e.target.value)
                        setSearching(e.target.value.length > 0)
                    }
                }
                ref={inputRef}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => inputRef.current?.focus()}
            >
                {!searching && <SearchIcon />}
                {searching && (
                    <div
                        className="cursor-pointer"
                        onClick={() => {
                            setSearchQuery("");
                            setSearching(false);
                            inputRef.current?.focus();
                        }}
                    >
                        <CrossIcon />
                    </div>
                )}
            </div>
        </div>
    );
}
