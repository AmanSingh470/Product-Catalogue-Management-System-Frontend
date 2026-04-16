"use client";
import { useProducts } from "@/app/context/product-context";
import { useFilter } from "@/app/context/filter-context";
import { useState } from "react";

interface Props {
  name: string;
  count: any;
  type: "company" | "segment" | "divison";
  productCount?: any;
}

export default function Category({ name, type }: Props) {
  const {
    selectedCompanies,
    setSelectedCompanies,
    selectedSegments,
    setSelectedSegments,
    selectedDivisons,
    setSelectedDivisons
  } = useProducts();

  const { companyCount, segmentCount, divisonCount, categoryCount } = useFilter();
  const [count, setCount] = useState<any>(0);

  const getState = (): [string[], (value: React.SetStateAction<string[]>) => void] => {
    if (type === "company") {
      return [selectedCompanies, setSelectedCompanies];
    }
    if (type === "segment") {
      return [selectedSegments, setSelectedSegments];
    }
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
    if (type === "company") setCount(companyCount);
    if (type === "segment") setCount(segmentCount);
    if (type === "divison") setCount(divisonCount);
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
        <div>{count}</div>
      </div>
    </div>
  );
}