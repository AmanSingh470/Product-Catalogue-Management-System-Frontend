interface Props {
    name: string;
    count: number;
    description: string;
}
export default function AllCards({ name, count=5, description="abc" }: Props) {

    return (
        <div className="flex bg-white h-30 w-full mb-2 p-2 overflow-hidden">
            <div className="basis-1/3 p-2">
                <img src="assets/images/card.jpg" alt="" className="rounded-md w-full h-full object-cover" />
            </div>
            <div className="basis-2/3">
                <h3 className="font-bold text-sm">
                    {name} ({count})
                </h3>
                <p className="text-xs line-clamp-4">
                    {description}
                </p>
            </div>
        </div>
    )
}
