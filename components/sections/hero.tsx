"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { CalendarDays, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { EASE } from "@/lib/motion";

const line: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: EASE },
  }),
};

const fade: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.6 + i * 0.1, ease: EASE },
  }),
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="/images/venue/exterior-1.jpg"
          alt="Complexul Sportiv Național Sala Polivalentă București"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      {/* overlays */}
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      <div className="spotlight absolute inset-0" />

      {/* content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="container-x relative z-10 flex h-full flex-col justify-end pb-16 md:justify-center md:pb-0"
      >
        <div className="max-w-4xl">
          <motion.div
            custom={0}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur"
          >
            <span className="size-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_2px_rgba(255,46,67,0.7)]" />
            Complex Sportiv Național · București
          </motion.div>

          <h1 className="font-display text-[clamp(3rem,11vw,9.5rem)] font-bold leading-[0.9] tracking-[-0.03em]">
            <span className="block overflow-hidden">
              <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
                SALA
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span custom={1} variants={line} initial="hidden" animate="show" className="text-gradient block pb-[0.08em]">
                POLIVALENTĂ
              </motion.span>
            </span>
          </h1>

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75 md:text-xl"
          >
            <span className="font-semibold text-white">5.300 de locuri</span> sub același acoperiș.
            Din 1974, casa marilor competiții și evenimente ale Capitalei.
          </motion.p>

          <motion.div custom={2} variants={fade} initial="hidden" animate="show" className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" size="lg" arrow>
              Rezervă sala
            </ButtonLink>
            <ButtonLink href="/program" size="lg" variant="outline">
              <CalendarDays className="size-4" /> Vezi programul
            </ButtonLink>
          </motion.div>

          <motion.div custom={3} variants={fade} initial="hidden" animate="show" className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> {site.contact.address}
            </span>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>Inaugurată în {site.established}</span>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="size-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
