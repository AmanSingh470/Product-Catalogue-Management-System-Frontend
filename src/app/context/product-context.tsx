"use client";
import { createContext, useContext, useEffect, useState } from "react";
import productsData from "@/app/data/products.json";
import { Product } from "@/app/types/product";

interface ProductContextType {
  filteredProducts: Product[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCompanies: string[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSegments: string[];
  setSelectedSegments: React.Dispatch<React.SetStateAction<string[]>>;
  selectedDivisons: string[];
  setSelectedDivisons: React.Dispatch<React.SetStateAction<string[]>>;
   resetFilters: () => void;
}

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [selectedDivisons, setSelectedDivisons] = useState<string[]>([]);

  // load data
  useEffect(() => {
    setProducts(productsData as unknown as Product[]);
    setFilteredProducts(productsData as unknown as Product[]);
  }, []);

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

      const divisonMatch =
        selectedDivisons.length === 0 ||
        selectedDivisons.includes(item.divison);

      return companyMatch && segmentMatch && divisonMatch;
    });

    setFilteredProducts(result);
  }, [searchQuery, selectedCompanies, selectedSegments, selectedDivisons, products]);

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
        selectedDivisons,
        setSelectedDivisons,
        resetFilters: () => {
          setSearchQuery("");
          setSelectedCompanies([]);
          setSelectedSegments([]);
          setSelectedDivisons([]);
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