"use client";
import { useFilter } from "@/app/context/filter-context";
import { useState, useEffect } from "react";
import productAllData from "@/app/data/products-all.json";
import productDivisonData from "@/app/data/products-divison.json";
import productSegmentData from "@/app/data/products-segment.json";
import productCompanyData from "@/app/data/products-company.json";
import Category from "@/app/components/Category";

export default function FilterProduct() {
    const [allProducts, setAllProducts] = useState<any[]>([]);
    const [divisonProducts, setDivisonProducts] = useState<any[]>([]);
    const [segmentProducts, setSegmentProducts] = useState<any[]>([]);
    const [companyProducts, setCompanyProducts] = useState<any[]>([]);

    const { activeFilter } = useFilter();
    useEffect(() => {
        switch (activeFilter) {
            case "all":
                setAllProducts(productAllData);
                break;

            case "divison":
                setDivisonProducts(productDivisonData);
                break;

            case "segment":
                setSegmentProducts(productSegmentData);
                break;

            case "company":
                setCompanyProducts(productCompanyData);
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
                    <div className="flex bg-white h-30 w-full mb-2 p-2 ">
                        <div className="basis-1/3 p-2">
                            <img src="assets/images/card.jpg" alt="" className="rounded-md w-full h-full object-cover" />
                        </div>
                        <div className="basis-2/3">
                            <h3 className="font-bold text-sm">
                                Modules & Polymer Products (120)
                            </h3>
                            <p className="text-xs">
                                aman ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorum aliquam laboriosam cupiditate reiciendis. Dicta
                                omnis quam ipsum. Eius, hic ipsam?r
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white h-30 w-full mb-2 p-2 ">
                        <div className="basis-1/3 p-2">
                            <img src="assets/images/card.jpg" alt="" className="rounded-md w-full h-full object-cover" />
                        </div>
                        <div className="basis-2/3">
                            <h3 className="font-bold text-sm">
                                Modules & Polymer Products (120)
                            </h3>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorum aliquam laboriosam cupiditate reiciendis. Dicta
                                omnis quam ipsum. Eius, hic ipsam?r
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white h-30 w-full mb-2 p-2 ">
                        <div className="basis-1/3 p-2">
                            <img src="assets/images/card.jpg" alt="" className="rounded-md w-full h-full object-cover" />
                        </div>
                        <div className="basis-2/3">
                            <h3 className="font-bold text-sm">
                                Modules & Polymer Products (120)
                            </h3>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorum aliquam laboriosam cupiditate reiciendis. Dicta
                                omnis quam ipsum. Eius, hic ipsam?r
                            </p>
                        </div>
                    </div>
                    <div className="flex bg-white h-30 w-full mb-2 p-2 ">
                        <div className="basis-1/3 p-2">
                            <img src="assets/images/card.jpg" alt="" className="rounded-md w-full h-full object-cover" />
                        </div>
                        <div className="basis-2/3">
                            <h3 className="font-bold text-sm">
                                Modules & Polymer Products (120)
                            </h3>
                            <p className="text-xs">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Dolorum aliquam laboriosam cupiditate reiciendis. Dicta
                                omnis quam ipsum. Eius, hic ipsam?r
                            </p>
                        </div>
                    </div>
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
                                <Category key={item.id} {...item} />
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
                            <Category key={item.id} {...item} />
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
                            <Category key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            );
    }
}
