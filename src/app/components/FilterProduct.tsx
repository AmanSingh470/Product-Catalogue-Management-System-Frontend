"use client"; 
import { useFilter } from "@/app/context/filter-context";

export default function FilterProduct() {
    const { activeFilter } = useFilter();
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
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <div className="flex">
                                        <input type="checkbox" />
                                        <div className="ml-2">Aerospace</div>
                                    </div>
                                    <div>(1)</div>
                                </div>
                            </div>
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
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <input type="checkbox" />
                                    <div className="ml-2">Aerospace</div>
                                </div>
                                <div>(1)</div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <input type="checkbox" />
                                    <div className="ml-2">Aerospace</div>
                                </div>
                                <div>(1)</div>
                            </div>
                        </div>
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
                        <div className="flex flex-col">
                            <div className="flex justify-between">
                                <div className="flex">
                                    <input type="checkbox" />
                                    <div className="ml-2">Aerospace</div>
                                </div>
                                <div>(1)</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}
