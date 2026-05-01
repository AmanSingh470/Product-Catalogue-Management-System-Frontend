"use client";
import BackIcon from "@/components/Icons/BackIcon";
import { useRouter } from "next/navigation";
import { useScrollNavbar } from "@/hooks/useScrollNavbar";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className={`${useScrollNavbar()?"bg-white":"bg-transparent"} sticky top-15 z-9999 transition-all duration-300`}>
      <div className="ml-10 mr-10 py-2"
        onClick={() => router.back()}
      >
        <div className="flex w-15 items-center justify-between cursor-pointer">
          <div>
            <BackIcon />
          </div>
          <div>Back</div>
        </div>
      </div>
    </div>

  );
}