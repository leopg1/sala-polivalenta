import Link from "next/link";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-xl",
        className
      )}
    >
      <svg viewBox="0 0 40 40" className="size-full" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff2e43" />
            <stop offset="1" stopColor="#2e6bff" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#lg)" />
        {/* arena roof arcs */}
        <path d="M8 26c2.8-6.5 20.4-6.5 24 0" stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.95" />
        <path d="M12.5 30c1.8-3.6 13.2-3.6 15 0" stroke="white" strokeWidth="2.4" strokeLinecap="round" fill="none" opacity="0.7" />
        <circle cx="20" cy="14.5" r="2.4" fill="white" />
      </svg>
    </span>
  );
}

export function Logo({ className, subtitle = true }: { className?: string; subtitle?: boolean }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-3", className)} aria-label="Sala Polivalentă — acasă">
      <LogoMark className="transition-transform duration-300 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-bold tracking-tight text-foreground">
          SALA POLIVALENTĂ
        </span>
        {subtitle && (
          <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Complex Sportiv Național
          </span>
        )}
      </span>
    </Link>
  );
}
