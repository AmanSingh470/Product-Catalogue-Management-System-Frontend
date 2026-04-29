export default function ProductCardSkeleton() {
    return (
        <div className="relative rounded-sm flex flex-col overflow-hidden text-white w-full h-45 sm:h-70 md:h-85 lg:h-45 xl:h-55 2xl:h-60 product-item cursor-pointer bg-gray-300">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 shimmer"></div>
        </div>
    );
}