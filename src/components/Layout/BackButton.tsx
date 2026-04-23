"use client";
import BackIcon from "@/components/Icons/BackIcon";
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
    <div className="flex w-15 items-center justify-between cursor-pointer">
      <div>
        <BackIcon />
      </div>
      <div>
        Back
      </div>
    </div>
    </Link>
  )
}
