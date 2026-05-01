"use client"

import { useEffect, useState } from "react";

export function useScrollNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = false;

    const handleScroll = () => {
      const current = window.scrollY > 1;

      if (current !== last) {
        last = current;
        setScrolled(current);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
}