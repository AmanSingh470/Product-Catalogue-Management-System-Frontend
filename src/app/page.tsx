import { getProducts } from "@/services/product.service";
import { getFilters } from "@/services/filter.service";
import HomeClient from "@/app/HomeClient";

export default async function Page() {
  const products = await getProducts();
  const filters = await getFilters();
  
  return <HomeClient initialProducts={products.data} initialFilters={filters}/>;
}