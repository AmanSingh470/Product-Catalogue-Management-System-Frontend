"use client";
import { useFilter } from "@/app/context/filter-context";
import { useProducts } from "@/app/context/product-context";

type TabType = "all" | "divison" | "company" | "segment";

export default function FilterProductButton(
{
  label,
  value,
  openModalOnClick = false,
}: {
  label: string;
  value: TabType;
  openModalOnClick?: boolean
}) {
  const { activeFilter, setActiveFilter, openModal } = useFilter();
  
  const isActive = activeFilter === value;

  const { resetFilters } = useProducts();

  return (
    <button
      onClick={() => {setActiveFilter(value)
        if(value === "all") {
          resetFilters();
        }
        if(openModalOnClick && value !== "all") openModal();
      }}
      className={`m-1 flex-auto rounded-xs p-2 text-sm cursor-pointer transition ${
        isActive
          ? "bg-black text-white"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}