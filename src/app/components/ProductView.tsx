"use client"
import ProductCard from "@/app/components/ProductCard";
import { useView } from "@/app/context/view-context";
import { useProducts } from "@/app/context/product-context";

export default function ProductView() {
    const { view } = useView();
    const {filteredProducts} = useProducts();

    return view === "grid" ?
        (
            <div className="flex-1 bg-[#F5F6F8] px-2 lg:px-5 xl:px-8 2xl:px-8 py-3">

                <div id="product-grid"
                    className="grid gap-4 grid-span-full grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 bg-[#F5F6F8]">
                    {filteredProducts.map((item) => (
                        <ProductCard key={item.id} {...item} />
                    ))}
                </div>

            </div>
        )
        :
        (
            <div className="flex-1 bg-[#F5F6F8] px-2 lg:px-5 xl:px-8 2xl:px-8 py-3">

                <div id="product-list">
                    <div className="grid grid-cols-8 text-sm text-black px-4 py-2">
                        <span className="col-span-3">Product name</span>
                        <span className="col-span-2">Segment</span>
                        <span className="col-span-2">Division</span>
                        <span className="col-span-1"></span>
                    </div>

                    <div className="space-y-2">
                        {filteredProducts.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                </div>

            </div>
        )
}
