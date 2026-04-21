"use client";
import { createContext, useContext, useEffect, useState } from "react";
import productsData from "@/data/products.json";
import { Product } from "@/types/product";

interface ProductContextType {
  filteredProducts: Product[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCompanies: string[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSegments: string[];
  setSelectedSegments: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDivisions: string[];
  setSelectedDivisions: React.Dispatch<React.SetStateAction<string[]>>;
   resetFilters: () => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children, initialProducts }: { children: React.ReactNode; initialProducts: Product[] }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [selectedDivisions, setSelectedDivisions] = useState<string[]>([]);
  
  // MAIN FILTER LOGIC
  useEffect(() => {
    let result = products;

    // search
    if (searchQuery !== "") {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    result = result.filter((item) => {
      const companyMatch =
        selectedCompanies.length === 0 ||
        selectedCompanies.includes(item.company);

      const segmentMatch =
        selectedSegments.length === 0 ||
        selectedSegments.includes(item.segment);

      const divisionMatch =
        selectedDivisions.length === 0 ||
        selectedDivisions.includes(item.division);

      return companyMatch && segmentMatch && divisionMatch;
    });

    setFilteredProducts(result);
  }, [searchQuery, selectedCompanies, selectedSegments, selectedDivisions, products]);

  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        searchQuery,
        setSearchQuery,
        selectedCompanies,
        setSelectedCompanies,
        selectedSegments,
        setSelectedSegments,
        selectedDivisions,
        setSelectedDivisions,
        resetFilters: () => {
          setSearchQuery("");
          setSelectedCompanies([]);
          setSelectedSegments([]);
          setSelectedDivisions([]);
        }
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used inside ProductProvider");
  }
  return context;
};