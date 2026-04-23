"use client";
import ProductCard from "@/components/Product/ProductCard";
import { useView } from "@/context/view-context";
import { useProducts } from "@/context/product-context";
import { useIsProductsEmpty } from "@/hooks/useIsProductsEmpty";

export default function ProductView() {
    const { view } = useView();
    const { filteredProducts } = useProducts();
    const isProductsEmpty = useIsProductsEmpty();
    return view === "grid" ?
        (
            <div className="flex-1 bg-[#F5F6F8] px-2 lg:px-5 xl:px-8 2xl:px-8 py-3">

                {isProductsEmpty && (
                    
                    <div className="lg:text-center py-5 text-gray-500 text-xl">
                        No products found
                    </div>
                )}

                {!isProductsEmpty && (
                    <div
                        id="product-grid"
                        className="grid gap-4 grid-span-full grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 bg-[#F5F6F8]"
                    >
                        {filteredProducts.map((item) => (
                            <ProductCard key={item.id} {...item} />
                        ))}
                    </div>
                )}

            </div>
        )
        :
        (
            <div className="flex-1 bg-[#F5F6F8] px-2 lg:px-5 xl:px-8 2xl:px-8 py-3 relative">
                {isProductsEmpty && (
                    
                    <div className="lg:text-left py-5 xl:text-center 2xl:text-center-5 text-gray-500 text-xl z-51">
                        No products found
                    </div>
                )}
                {!isProductsEmpty && (<div id="product-list">
                    <div className="grid grid-cols-8 text-sm text-black px-4 py-2 sticky top-30 h-10 z-99 bg-[var(--grey-200)]">
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
                </div>)}

            </div>
        )
}
