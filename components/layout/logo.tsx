import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string; subtitle?: boolean }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Sala Polivalentă — acasă"
    >
      <span className="rounded-xl bg-white px-3 py-2 shadow-[0_4px_18px_-6px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.03]">
        <Image
          src="/logo.png"
          alt="Complexul Sportiv Național Sala Polivalentă"
          width={212}
          height={112}
          priority
          className="h-7 w-auto md:h-8"
        />
      </span>
    </Link>
  );
}
