"use client";
import { useProfile } from "@/app/context/profile-context";
import { useRef, useEffect } from "react";

export default function ProfileDropDown() {
  const {openProfile, setProfileOpen} = useProfile();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openProfile) return;

    const handler = (e: PointerEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      setProfileOpen(false);
    };

    document.addEventListener("pointerdown", handler);

    return () => {
      document.removeEventListener("pointerdown", handler);
    };
  }, [openProfile]);

  return (
    <div ref={ref}>
      {/* Dropdown */}
      {openProfile && (
        <div className="fixed top-15 right-3 mt-2 w-64 bg-white rounded-xl shadow-lg border z-50 overflow-hidden z-9999">
          
          {/* User Info */}
          <div className="px-4 py-3 border-b">
            <p className="font-semibold text-sm">Aman Singh</p>
            <p className="text-xs text-gray-500">aman@email.com</p>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col text-sm">
            <button className="px-4 py-2 text-left hover:bg-gray-100">
              Profile
            </button>
            <button className="px-4 py-2 text-left hover:bg-gray-100">
              Settings
            </button>
            <button className="px-4 py-2 text-left hover:bg-gray-100">
              Dashboard
            </button>
          </div>

          {/* Logout */}
          <div className="border-t">
            <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
              Logout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}