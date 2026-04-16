"use client";
import { init } from "next/dist/compiled/webpack/webpack";
import { createContext, useContext, useState } from "react";

export type FilterType = "all" | "divison" | "company" | "segment";

type FilterContextType = {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  allProducts: any[];
  divisonProducts: any[];
  segmentProducts: any[];
  companyProducts: any[];
  setDivisonProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setSegmentProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setCompanyProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setAllProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children, initialFilters }: { children: React.ReactNode; initialFilters: any }) {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [allProducts, setAllProducts] = useState<any[]>(initialFilters.all);
    const [divisonProducts, setDivisonProducts] = useState<any[]>(initialFilters.divisons);
    const [segmentProducts, setSegmentProducts] = useState<any[]>(initialFilters.segments);
    const [companyProducts, setCompanyProducts] = useState<any[]>(initialFilters.companies);

  return (
    <FilterContext.Provider 
    value={{ 
        activeFilter,
        setActiveFilter,
        isModalOpen,
        openModal,
        closeModal,
        allProducts,
        divisonProducts,
        segmentProducts,
        companyProducts,
        setAllProducts,
        setDivisonProducts,
        setSegmentProducts,
        setCompanyProducts
        }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used inside FilterProvider");
  }

  return context;
}