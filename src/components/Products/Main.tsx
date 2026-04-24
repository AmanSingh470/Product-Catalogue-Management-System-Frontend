
import Image from "next/image";
export default function Main() {
    return (
        <div>

            <div className="grid grid-cols-5 gap-8 h-170 mb-30">
                <div className="bg-red-200 col-span-4 relative">
                    <Image
                        src="/assets/images/5_Gearbox_Assembly.png"
                        alt="product Image 1"
                        unoptimized
                        fill
                        className="rounded object-cover"
                    />
                </div>

                <div className="grid grid-rows-3 gap-8 col-span-1">
                    <div className="bg-blue-200 relative">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            alt="product Image 1"
                            unoptimized
                            fill
                            className="rounded object-cover"
                        />
                    </div>
                    <div className="bg-blue-200 relative">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            alt="product Image 1"
                            unoptimized
                            fill
                            className="rounded object-cover"
                        />
                    </div>
                    <div className="bg-blue-200 relative">
                        <Image
                            src="/assets/images/5_Gearbox_Assembly.png"
                            alt="product Image 1"
                            unoptimized
                            fill
                            className="rounded object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-14">

                <div className="grid-span-1 ">
                    <h2 className="text-xl mb-4">Main Advantages</h2>
                    <div className="grid gap-4">
                        <div>
                            <h3 className="text-md text-[var(--grey-800)]">Enhanced experience</h3>
                            <p className="text-[var(--grey-600)] text-sm">Distinctive surface finishing achieved through thee printed pattern.</p>
                        </div>
                        <div>
                            <h3>Sustainability</h3>
                            <p className="text-[var(--grey-600)] text-sm">Less CO2 than painting syste, reducing dramatically carbon footprint.</p>
                        </div>
                        <div>
                            <h3>Sustainability</h3>
                            <p className="text-[var(--grey-600)] text-sm">One single material based system</p>
                        </div>
                        <div>
                            <h3>Cost reduction</h3>
                            <p className="text-[var(--grey-600)] text-sm">Most cost effective than insert moduling</p>
                        </div>
                        <div>
                            <h3>Modularity</h3>
                            <p className="text-[var(--grey-600)] text-sm">Suitable for any plant in the world</p>
                        </div>
                    </div>
                </div>
                <div className="grid-span-1 ">
                    <h2 className="">Key facts</h2>
                        <ul className="list-disc grid gap-4">
                            <li className="text-sm text-[var(--grey-600)]">Avoiding expensive paint shop investment</li>
                            <li className="text-sm text-[var(--grey-600)]">Robust global technology production in Motherson for a decade for Renault Zoe and Nissan Magnite</li>
                        </ul>
                </div>
                <div className="grid-span-1 ">
                    <h2>Intellectual Property</h2>
                    <div className="grid gap-4  ">
                        <div>2 patents</div>
                    </div>
                </div>
                <div className="grid-span-1 ">
                    <h2>Applications / Compliance</h2>
                    <div className="grid grid-rows-5">
                        <div>Small to large decorative parts</div>
                    </div>
                </div>

            </div>


        </div>
    )
}
