"use client";
import { createContext, useContext, useState } from "react";

export type FilterType = "all" | "divison" | "company" | "segment";

type FilterContextType = {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <FilterContext.Provider 
    value={{ 
        activeFilter,
        setActiveFilter,
        isModalOpen,
        openModal,
        closeModal,
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