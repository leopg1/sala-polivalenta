import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-strong shadow-[0_10px_40px_-12px_rgba(255,46,67,0.75)] hover:shadow-[0_16px_50px_-12px_rgba(255,46,67,0.9)] hover:-translate-y-0.5",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-strong shadow-[0_10px_40px_-12px_rgba(46,107,255,0.7)] hover:-translate-y-0.5",
  outline:
    "border border-border bg-white/[0.02] text-foreground hover:bg-white/[0.06] hover:border-white/25 backdrop-blur",
  ghost: "text-foreground/80 hover:text-foreground hover:bg-white/[0.05]",
} as const;

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

type BaseProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  arrow = false,
  className,
  children,
  href,
  ...rest
}: BaseProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
      {arrow && <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </Link>
  );
}
