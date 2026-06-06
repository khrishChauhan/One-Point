"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize on desktop/tablet where smooth scrolling is desired
    const instance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    // Animation frame loop
    let rafId: number;
    function raf(time: number) {
      instance.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Store lenis on window for debugging or other component integrations
    (window as unknown as { lenis: Lenis | null }).lenis = instance;

    return () => {
      cancelAnimationFrame(rafId);
      instance.destroy();
      (window as unknown as { lenis: Lenis | null }).lenis = null;
    };
  }, []);

  return <>{children}</>;
}
