"use client";
import { useProducts } from "@/app/context/product-context";

interface Props {
  name: string;
  productCount: number;
  type: "company" | "segment" | "divison";
}

export default function Category({ name, productCount, type }: Props) {
  const {
    selectedCompanies,
    setSelectedCompanies,
    selectedSegments,
    setSelectedSegments,
    selectedDivisons,
    setSelectedDivisons
  } = useProducts();

  const getState = (): [string[], (value: React.SetStateAction<string[]>) => void] => {
    if (type === "company") return [selectedCompanies, setSelectedCompanies];
    if (type === "segment") return [selectedSegments, setSelectedSegments];
    return [selectedDivisons, setSelectedDivisons];
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
        <label className="flex cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(name)}
            onChange={handleCheckboxChange}
            className="cursor-pointer"
          />
          <span className="ml-2">{name}</span>
        </label>
        <div>({productCount})</div>
      </div>
    </div>
  );
}