"use client";
import { createContext, useContext, useState } from "react";

type AddProductType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const AddProductContext = createContext<AddProductType | null>(null);

export function AddProductProvider({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <AddProductContext.Provider 
    value={{ 
        isModalOpen,
        openModal,
        closeModal,
        }}>
      {children}
    </AddProductContext.Provider>
  );
}

export function useAddProduct() {
  const context = useContext(AddProductContext);

  if (!context) {
    throw new Error("useAddProduct must be used inside AddProductProvider");
  }

  return context;
}