"use client";
import { useFilter } from "@/context/filter-context";
import { useEffect } from "react";
import Category from "@/components/FilterProduct/Category";
import AllCards from "@/components/FilterProduct/AllCards";

export default function FilterProduct() {
    
    const { activeFilter } = useFilter();
    
    const { allProducts, setAllProducts } = useFilter();
    const { divisionProducts, setDivisionProducts } = useFilter();
    const { segmentProducts, setSegmentProducts } = useFilter();
    const { companyProducts, setCompanyProducts } = useFilter();

    useEffect(() => {
        switch (activeFilter) {
            case "all":
                setAllProducts(allProducts);
                break;

            case "division":
                setDivisionProducts(divisionProducts);
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

        case "division":

            return (
                (
                    <div id="filter-division"
                        className={`filter-content sidebar-scroll overflow-y-auto flex-1 text-gray-600 ${activeFilter === "division" ? "" : "hidden"}`}>
                        <div className="w-full">
                            <div className="flex justify-between mb-2 font-bold text-xs">
                                <div>DIVISIONS</div>
                                <div>NO. PRODUCTS</div>
                            </div>
                            {divisionProducts.map((item) => (
                                <Category key={item.id} {...item} type="division" />
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
