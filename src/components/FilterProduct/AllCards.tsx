import Image from "next/image";
import { useState } from "react";
import {useFilter} from "@/context/filter-context";

interface Props {
    name: string;
    count: number;
    description: string;
    image: string;
    total_products: number
}
export default function AllCards({ name, description, image, total_products }: Props) {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [loaded, setLoaded] = useState(false);
    const { setActiveFilter } = useFilter();
    return (
        <div className="flex bg-white h-30 w-full mb-2 p-2 overflow-hidden cursor-pointer relative"
            onClick={()=> setActiveFilter('division')}
        >
            {!loaded && (
                <div className="absolute inset-0 bg-gray-300 overflow-hidden">
                    <div className="absolute inset-0 shimmer"></div>
                </div>
            )}
            <div className="basis-1/3 p-2 relative">
                {!loaded && (
                    <div className="absolute inset-0 bg-gray-400 overflow-hidden">
                        <div className="absolute inset-0 shimmer"></div>
                    </div>
                )}
                <Image
                    src={`${baseURL}/storage/images/divisions/${image}`}
                    alt="cards"
                    className="rounded-md w-full h-full object-cover absolute inset-0 p-2"
                    fill
                    unoptimized
                    onLoad={() => setLoaded(true)}
                />
            </div>
            <div className="basis-2/3">
                <h2 className="text-[11px] uppercase font-medium text-[var(--dark-color)]">
                    {name} ({total_products})
                </h2>
                <p className="text-xs line-clamp-4 text-[var(--grey-500)]">
                    {description}
                </p>
            </div>
        </div>
    )
}
