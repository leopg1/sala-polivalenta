"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Flip to false while capturing verification screenshots (smooth scroll makes
// programmatic-scroll captures unreliable). Keep true in production.
const SMOOTH = true;

export function SmoothScroll({ children }: { children: ReactNode }) {
  if (!SMOOTH) return <>{children}</>;
  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, duration: 1.2, smoothWheel: true, wheelMultiplier: 1 }}
    >
      {children}
    </ReactLenis>
  );
}
