"use client";

import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";
import SmallProductCarousel from "@/components/Products/SmallProductCarousel";
import LargeProductCarousel from "@/components/Products/LargeProductCarousel";

export default function MainProductCarousel() {
  if(useIsLargeScreen()){
    return <LargeProductCarousel/>
  }
  return <SmallProductCarousel/>;
}