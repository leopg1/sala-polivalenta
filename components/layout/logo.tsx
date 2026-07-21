import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  imgClassName = "h-12 w-auto md:h-14",
}: {
  className?: string;
  imgClassName?: string;
  subtitle?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center", className)}
      aria-label="Sala Polivalentă — acasă"
    >
      <Image
        src="/logo.png"
        alt="Complexul Sportiv Național Sala Polivalentă"
        width={1200}
        height={541}
        priority
        className={cn(
          "w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:scale-[1.03]",
          imgClassName
        )}
      />
    </Link>
  );
}
