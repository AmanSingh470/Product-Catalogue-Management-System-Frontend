"use client";
import { useFilter } from "@/app/context/filter-context";
import { useState, useEffect } from "react";
import Category from "@/app/components/Category";
import AllCards from "@/app/components/AllCards";

export default function FilterProduct() {
    
    const { activeFilter } = useFilter();
    
    const { allProducts, setAllProducts } = useFilter();
    const { divisonProducts, setDivisonProducts } = useFilter();
    const { segmentProducts, setSegmentProducts } = useFilter();
    const { companyProducts, setCompanyProducts } = useFilter();

    useEffect(() => {
        switch (activeFilter) {
            case "all":
                setAllProducts(allProducts);
                break;

            case "divison":
                setDivisonProducts(divisonProducts);
                break;

            case "segment":
                setSegmentProducts(segmentProducts);
                break;

            case "company":
                setCompanyProducts(companyProducts);
                break;

            default:
                break;
        }
    }, [activeFilter]);

    switch (activeFilter) {
        case "all":
            return (
                <div id="filter-all"
                    className={`filter-content sidebar-scroll overflow-y-auto flex-1 text-gray-600 ${activeFilter === "all" ? "" : "hidden"}`}>
                    {allProducts.map((item) => (
                        <AllCards key={item.id} {...item} type="all" />
                    ))}
                </div>
            );

        case "divison":

            return (
                (
                    <div id="filter-divison"
                        className={`filter-content sidebar-scroll overflow-y-auto flex-1 text-gray-600 ${activeFilter === "divison" ? "" : "hidden"}`}>
                        <div className="w-full">
                            <div className="flex justify-between mb-2 font-bold text-xs">
                                <div>DIVISONS</div>
                                <div>NO. PRODUCTS</div>
                            </div>
                            {divisonProducts.map((item) => (
                                <Category key={item.id} {...item} type="divison" />
                            ))}
                        </div>
                    </div>
                )
            );

        case "segment":
            return (
                <div id="filter-segment"
                    className={`filter-content sidebar-scroll overflow-y-auto flex-1 text-gray-600 ${activeFilter === "segment" ? "" : "hidden"}`}>
                    <div className="w-full">
                        <div className="flex justify-between mb-2 font-bold text-xs">
                            <div>SEGMENT</div>
                            <div>NO. PRODUCTS</div>
                        </div>
                        {segmentProducts.map((item) => (
                            <Category key={item.id} {...item} type="segment" />
                        ))}
                    </div>
                </div>
            );

        case "company":
            return (
                <div id="filter-company"
                    className={`filter-content sidebar-scroll overflow-y-auto flex-1 text-gray-600 ${activeFilter === "company" ? "" : "hidden"}`}>
                    <div className="w-full">
                        <div className="flex justify-between mb-2 font-bold text-xs">
                            <div>COMPANIES</div>
                            <div>NO. PRODUCTS</div>
                        </div>
                        {companyProducts.map((item) => (
                            <Category key={item.id} {...item} type="company" />
                        ))}
                    </div>
                </div>
            );
    }
}
