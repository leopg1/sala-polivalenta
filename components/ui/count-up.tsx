"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "motion/react";
import { EASE } from "@/lib/motion";

export function CountUp({
  to,
  duration = 1.8,
  suffix = "",
  prefix = "",
  separator = ".",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  separator?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (started.current) return;
      started.current = true;
      animate(0, to, { duration, ease: EASE, onUpdate: (v) => setValue(v) });
    };

    // Fallback: if already in view on mount, start after a tick.
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          start();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, [to, duration]);

  const formatted = Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
