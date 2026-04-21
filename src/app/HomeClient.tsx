"use client";

import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Layout/HeroSection";
import Toolbar from "@/components/Product/Toolbar";
import Main from "@/components/Product/Main";
import { ViewProvider } from "@/context/view-context";
import { FilterProvider } from "@/context/filter-context";
import FilterProductModal from "@/components/FilterProduct/FilterProductModal";
import AddProductModal from "@/components/Product/AddProductModal";
import { AddProductProvider } from "@/context/add-product-context";
import { ProductProvider } from "@/context/product-context";
import NotificationDropDown from "@/components/Layout/NotificationDropDown";
import { NotificationProvider } from "@/context/notification-context";
import ProfileDropDown from "@/components/Layout/ProfileDropDown";
import { ProfileProvider } from "@/context/profile-context";

export default function HomeClient({ initialProducts, initialFilters }: any) {
  return (
    <div className="bg-[#F5F6F8] text-black">
      <NotificationProvider>
        <ProfileProvider>
          <Navbar />
          <NotificationDropDown />
          <ProfileDropDown />
        </ProfileProvider>
      </NotificationProvider>

      <HeroSection />

      <ViewProvider>
        <AddProductProvider>
          <ProductProvider initialProducts={initialProducts}>
            <FilterProvider initialFilters={initialFilters}>
              <Toolbar />
              <Main />
              <FilterProductModal />
              <AddProductModal />
            </FilterProvider>
          </ProductProvider>
        </AddProductProvider>
      </ViewProvider>
    </div>
  );
}