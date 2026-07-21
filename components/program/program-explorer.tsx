"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, CalendarX } from "lucide-react";
import { events } from "@/lib/data/program";
import { groupByMonth, dayNum, monthShort, weekday, toneFor } from "@/lib/format";
import { cn } from "@/lib/utils";

const SPORTS = ["Toate", ...Array.from(new Set(events.map((e) => e.sport)))];

export function ProgramExplorer() {
  const [sport, setSport] = useState("Toate");

  const filtered = useMemo(
    () => (sport === "Toate" ? events : events.filter((e) => e.sport === sport)),
    [sport]
  );
  const ordered = useMemo(() => [...filtered].reverse(), [filtered]);
  const groups = useMemo(() => groupByMonth(ordered), [ordered]);

  return (
    <div className="container-x py-14 md:py-20">
      {/* filter chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {SPORTS.map((s) => (
          <button
            key={s}
            onClick={() => setSport(s)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-all",
              sport === s
                ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_30px_-10px_rgba(255,46,67,0.7)]"
                : "border-border bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-foreground"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <p className="mb-8 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{filtered.length}</span> evenimente
        {sport !== "Toate" && (
          <>
            {" "}la categoria <span className="text-foreground">{sport}</span>
          </>
        )}
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={sport}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-col gap-12"
        >
          {groups.length === 0 && (
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
              <CalendarX className="size-8 text-muted-foreground" />
              <p className="text-muted-foreground">Niciun eveniment în această categorie.</p>
            </div>
          )}

          {groups.map((group) => (
            <div key={group.key}>
              <div className="mb-4 flex items-center gap-4">
                <h2 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground/90">
                  {group.key}
                </h2>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">{group.items.length} ev.</span>
              </div>

              <div className="flex flex-col gap-2.5">
                {group.items.map((e, i) => (
                  <div
                    key={`${e.date}-${i}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-border bg-card/40 p-3.5 transition-colors hover:border-white/15 hover:bg-card md:gap-6 md:p-4"
                  >
                    <div className="flex w-14 flex-col items-center rounded-lg border border-border bg-background/60 py-2 md:w-16">
                      <span className="font-display text-xl font-bold leading-none text-foreground md:text-2xl">
                        {dayNum(e.date)}
                      </span>
                      <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-primary">
                        {monthShort(e.date)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className={cn("rounded-full border px-2 py-0.5 text-[0.65rem] font-medium", toneFor(e.sport))}>
                          {e.sport}
                        </span>
                        <span className="text-xs text-muted-foreground">{weekday(e.date)}</span>
                      </div>
                      <h3 className="truncate font-medium text-foreground">{e.title}</h3>
                      {e.org && e.org !== e.title && (
                        <p className="truncate text-sm text-muted-foreground">{e.org}</p>
                      )}
                    </div>
                    {e.time && (
                      <span className="flex items-center gap-1.5 whitespace-nowrap text-sm text-muted-foreground">
                        <Clock className="size-3.5" /> {e.time}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
