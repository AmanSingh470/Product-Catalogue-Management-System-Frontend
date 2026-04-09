"use client";
import { useProducts } from "@/app/context/product-context";

export default function Category({ name, productCount }: any) {
  const { selectedCompanies, setSelectedCompanies } = useProducts();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const company = name;
    if (e.target.checked) {
      setSelectedCompanies([...selectedCompanies, company]);
    } else {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <input type="checkbox" defaultChecked={selectedCompanies.includes(name)} onChange={handleCheckboxChange} />
          <div className="ml-2">{name}</div>
        </div>
        <div>({productCount})</div>
      </div>
    </div>
  );
}