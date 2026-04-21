"use client";
import React, { createContext, useContext, useState } from "react";

export type FilterType = "all" | "division" | "company" | "segment";

type FilterContextType = {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  allProducts: any[];
  divisionProducts: any[];
  segmentProducts: any[];
  companyProducts: any[];
  categoryProducts: any[],
  setDivisionProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setSegmentProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setCompanyProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setAllProducts: React.Dispatch<React.SetStateAction<any[]>>;
  setCategoryProducts: React.Dispatch<React.SetStateAction<any[]>>;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children, initialFilters }: { children: React.ReactNode; initialFilters: any }) {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [allProducts, setAllProducts] = useState<any[]>(initialFilters.all);
    const [divisionProducts, setDivisionProducts] = useState<any[]>(initialFilters.divisions);
    const [segmentProducts, setSegmentProducts] = useState<any[]>(initialFilters.segments);
    const [companyProducts, setCompanyProducts] = useState<any[]>(initialFilters.companies);
    const [categoryProducts, setCategoryProducts] = useState<any[]>(initialFilters.categories);

  return (
    <FilterContext.Provider 
    value={{ 
        activeFilter,
        setActiveFilter,
        isModalOpen,
        openModal,
        closeModal,
        allProducts,
        divisionProducts,
        segmentProducts,
        companyProducts,
        categoryProducts,
        setAllProducts,
        setDivisionProducts,
        setSegmentProducts,
        setCompanyProducts,
        setCategoryProducts
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