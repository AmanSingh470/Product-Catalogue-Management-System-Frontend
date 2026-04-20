interface Props {
    name: string;
    count: number;
    description: string;
    image: string;
    total_products: number
}
export default function AllCards({ name, description="abc", image, total_products }: Props) {

    return (
        <div className="flex bg-white h-30 w-full mb-2 p-2 overflow-hidden cursor-pointer">
            <div className="basis-1/3 p-2">
                <img src={`http://127.0.0.1:8000/storage/images/divisions/${image}`} alt="" className="rounded-md w-full h-full object-cover" />
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
