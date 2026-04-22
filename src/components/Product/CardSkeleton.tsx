import React from 'react'

export default function CardSkeleton() {
    return (
        <div className="relative rounded-md overflow-hidden w-full h-45 sm:h-70 md:h-85 lg:h-45 xl:h-55 2xl:h-60">

            {/* Shimmer background */}
            <div className="absolute inset-0 bg-gray-300 overflow-hidden">
                <div className="absolute inset-0 shimmer"></div>
            </div>

            {/* Dark overlay (same as your card) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text placeholders */}
            <div className="absolute bottom-3 left-1 p-2 space-y-2 w-full">
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>

        </div>
    )
}
