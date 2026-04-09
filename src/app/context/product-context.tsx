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
}

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);

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

    // company filter
    if (selectedCompanies.length > 0) {
      result = result.filter((item) =>
        selectedCompanies.includes(item.company)
      );
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCompanies, products]);

  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        searchQuery,
        setSearchQuery,
        selectedCompanies,
        setSelectedCompanies
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