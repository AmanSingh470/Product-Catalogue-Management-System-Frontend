"use client";
import { useState, useRef, useEffect } from "react";

export default function NotificationDropDown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* 🔔 Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg hover:bg-gray-100 transition"
      >
        🔔
      </button>

      {/* 📦 Modal */}
      {open && (
        <div className="
          absolute right-0 mt-2 
          w-[90vw] max-w-sm 
          bg-white rounded-xl shadow-xl border
          z-50
        ">
          
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <h2 className="font-semibold">Notifications</h2>
            <div className="flex gap-2 text-sm">
              <button className="px-2 py-1 rounded bg-gray-100">All</button>
              <button className="px-2 py-1">Unread</button>
            </div>
          </div>

          {/* List */}
          <div className="max-h-80 overflow-y-auto">
            
            {/* Item */}
            <div className="flex gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="flex-1 text-sm">
                <p>
                  <span className="font-semibold">Pixelwave</span>{" "}
                  commented on <span className="font-semibold">Classic Car</span>
                </p>
                <p className="text-gray-500 text-xs">1h ago</p>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            </div>

            {/* Item */}
            <div className="flex gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-orange-300"></div>
              <div className="flex-1 text-sm">
                <p>
                  <span className="font-semibold">3D object</span> is generated
                </p>
                <p className="text-gray-500 text-xs">1h ago</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}