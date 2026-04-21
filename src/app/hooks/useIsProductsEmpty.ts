import { useMemo } from "react";
import { useProducts } from "@/app/context/product-context";

export const useIsProductsEmpty = () => {
  const { filteredProducts } = useProducts();

  const isEmpty = useMemo(() => {
    if (!filteredProducts) return true;

    // normal case: []
    if (Array.isArray(filteredProducts)) {
      if (filteredProducts.length === 0) return true;
      return false;
    }

    return true;
  }, [filteredProducts]);

  return isEmpty;
};