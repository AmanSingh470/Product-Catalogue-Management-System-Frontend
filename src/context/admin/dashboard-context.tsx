"use client";
import { createContext, useContext, useState } from "react";
import type {DashboardData} from "@/types/admin/dashboardData";

type DashboardContext = {
    totalProducts: number;
    setTotalProducts: React.Dispatch<React.SetStateAction<number>>;

    totalCategories: number;
    setTotalCategories: React.Dispatch<React.SetStateAction<number>>;

    totalSegments: number;
    setTotalSegments: React.Dispatch<React.SetStateAction<number>>;

    totalDivisions: number;
    setTotalDivisions: React.Dispatch<React.SetStateAction<number>>;
};

const DashboardContext = createContext<DashboardContext | null>(null);

export function DashboardProvider({ children, initialData }: { children: React.ReactNode , initialData: DashboardData}) {
  const [totalProducts, setTotalProducts] = useState(initialData.data.counts.total_products);
  const [totalCategories, setTotalCategories] = useState(initialData.data.counts.total_categories);
  const [totalSegments, setTotalSegments] = useState(initialData.data.counts.total_segments);
  const [totalDivisions, setTotalDivisions] = useState(initialData.data.counts.total_divisions);

  return (
    <DashboardContext.Provider
      value={{
        totalProducts,
        setTotalProducts,

        totalCategories,
        setTotalCategories,

        totalSegments,
        setTotalSegments,

        totalDivisions,
        setTotalDivisions
      }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);

  if (!context) {
    throw new Error("useDashboardModal() must be used inside DashboardModalProvider");
  }

  return context;
}