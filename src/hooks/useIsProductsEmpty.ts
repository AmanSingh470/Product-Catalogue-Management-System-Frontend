import { useMemo } from "react";
import { useProducts } from "@/context/product-context";

export const useIsProductsEmpty = () => {
  const { products } = useProducts();

  const isEmpty = useMemo(() => {
    if (!products) return true;

    // normal case: []
    if (Array.isArray(products)) {
      if (products.length === 0) return true;
      return false;
    }

    return true;
  }, [products]);

  return isEmpty;
};