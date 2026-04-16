"use client";

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Toolbar from "@/app/components/Toolbar";
import Main from "@/app/components/Main";
import { ViewProvider } from "@/app/context/view-context";
import { FilterProvider } from "@/app/context/filter-context";
import FilterProductModal from "@/app/components/FilterProductModal";
import AddProductModal from "@/app/components/AddProductModal";
import { AddProductProvider } from "@/app/context/add-product-context";
import { ProductProvider } from "@/app/context/product-context";
import NotificationDropDown from "@/app/components/NotificationDropDown";
import { NotificationProvider } from "@/app/context/notification-context";
import ProfileDropDown from "@/app/components/ProfileDropDown";
import { ProfileProvider } from "@/app/context/profile-context";

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