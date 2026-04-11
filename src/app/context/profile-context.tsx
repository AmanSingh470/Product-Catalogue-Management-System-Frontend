"use client";
import { createContext, useContext, useState } from "react";

type ProfileContextType = {
  openProfile: boolean;
  setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: any) {
  const [openProfile, setProfileOpen] = useState(false);

  return (
    <ProfileContext.Provider
      value={{
        openProfile,
        setProfileOpen
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used inside ProfileProvider");
  }

  return context;
}