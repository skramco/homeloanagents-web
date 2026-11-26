"use client";

import { useEffect } from "react";

export function HeaderScrollEffect() {
  useEffect(() => {
    const header = document.querySelector(".site-header");
    if (!header) return;

    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}