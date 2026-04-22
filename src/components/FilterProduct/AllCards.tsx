import Image from "next/image";
import { useState } from "react";

interface Props {
    name: string;
    count: number;
    description: string;
    image: string;
    total_products: number
}
export default function AllCards({ name, description = "abc", image, total_products }: Props) {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [loaded, setLoaded] = useState(false);
    return (
        <div className="flex bg-white h-30 w-full mb-2 p-2 overflow-hidden cursor-pointer relative">
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
                <h3 className="font-bold text-sm">
                    {name} ({total_products})
                </h3>
                <p className="text-xs line-clamp-4">
                    {description}
                </p>
            </div>
        </div>
    )
}
