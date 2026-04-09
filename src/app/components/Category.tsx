"use client";
import { useProducts } from "@/app/context/product-context";

interface Props {
  name: string;
  productCount: number;
  type: "company" | "segment" | "division";
}

export default function Category({ name, productCount, type }: Props) {
  const {
    selectedCompanies,
    setSelectedCompanies,
    selectedSegments,
    setSelectedSegments,
    selectedDivisions,
    setSelectedDivisions
  } = useProducts();

  const getState = (): [string[], (value: React.SetStateAction<string[]>) => void] => {
    if (type === "company") return [selectedCompanies, setSelectedCompanies];
    if (type === "segment") return [selectedSegments, setSelectedSegments];
    return [selectedDivisions, setSelectedDivisions];
  };

  const [selected, setSelected] = getState();

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelected((prev: string[]) => [...prev, name]);
    } else {
      setSelected((prev: string[]) =>
        prev.filter((item) => item !== name)
      );
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <input
            type="checkbox"
            checked={selected.includes(name)}
            onChange={handleCheckboxChange}
          />
          <div className="ml-2">{name}</div>
        </div>
        <div>({productCount})</div>
      </div>
    </div>
  );
}