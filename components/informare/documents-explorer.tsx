"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search, FileText, FileType, Download, X, FolderOpen } from "lucide-react";
import { docCategories } from "@/lib/data/documents";
import { cn } from "@/lib/utils";

type Flat = {
  title: string;
  url: string;
  year: string;
  type: string;
  mb: number;
  cat: string;
  catName: string;
};

const allDocs: Flat[] = docCategories.flatMap((c) =>
  c.documents.map((d) => ({ ...d, cat: c.slug, catName: c.name }))
);

const years = Array.from(new Set(allDocs.map((d) => d.year)))
  .filter((y) => /^\d{4}$/.test(y))
  .sort()
  .reverse();

function TypeIcon({ type }: { type: string }) {
  if (type === "pdf") return <FileText className="size-4 text-primary" />;
  return <FileType className="size-4 text-secondary" />;
}

export function DocumentsExplorer() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("toate");
  const [year, setYear] = useState("toate");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && docCategories.some((c) => c.slug === hash)) setCat(hash);
  }, []);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return allDocs.filter((d) => {
      if (cat !== "toate" && d.cat !== cat) return false;
      if (year !== "toate" && d.year !== year) return false;
      if (needle && !d.title.toLowerCase().includes(needle) && !d.catName.toLowerCase().includes(needle))
        return false;
      return true;
    });
  }, [q, cat, year]);

  return (
    <div className="container-x py-14 md:py-20">
      {/* search */}
      <div className="relative mb-8">
        <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Caută documente — ex. „concurs”, „buget”, „organigramă”…"
          className="h-14 w-full rounded-2xl border border-border bg-card/50 pl-14 pr-12 text-[0.95rem] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:bg-card"
        />
        {q && (
          <button
            onClick={() => setQ("")}
            className="absolute right-4 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground hover:bg-white/10 hover:text-foreground"
            aria-label="Șterge căutarea"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* category chips */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Chip active={cat === "toate"} onClick={() => setCat("toate")}>
          Toate <span className="opacity-60">{allDocs.length}</span>
        </Chip>
        {docCategories.map((c) => (
          <Chip key={c.slug} active={cat === c.slug} onClick={() => setCat(c.slug)}>
            {c.name} <span className="opacity-60">{c.count}</span>
          </Chip>
        ))}
      </div>

      {/* year chips */}
      <div className="mb-10 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs uppercase tracking-widest text-muted-foreground">An</span>
        <Chip small active={year === "toate"} onClick={() => setYear("toate")}>
          Toți
        </Chip>
        {years.map((y) => (
          <Chip key={y} small active={year === y} onClick={() => setYear(y)}>
            {y}
          </Chip>
        ))}
      </div>

      <p className="mb-6 text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">{results.length}</span> documente găsite
      </p>

      {results.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border py-20 text-center">
          <FolderOpen className="size-8 text-muted-foreground" />
          <p className="text-muted-foreground">Niciun document nu corespunde filtrelor.</p>
        </div>
      ) : (
        <motion.ul
          key={`${cat}-${year}-${q}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid gap-2.5 md:grid-cols-2"
        >
          {results.slice(0, 300).map((d, i) => (
            <li key={`${d.url}-${i}`} className="min-w-0">
              <a
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card/40 p-4 transition-all hover:border-white/15 hover:bg-card"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background/60">
                  <TypeIcon type={d.type} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{d.title}</p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                    <span>{d.catName}</span>
                    {d.year !== "2018-legacy" && <span>· {d.year}</span>}
                    <span className="uppercase">· {d.type}</span>
                    {d.mb > 0 && <span>· {d.mb} MB</span>}
                  </p>
                </div>
                <Download className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </li>
          ))}
        </motion.ul>
      )}
      {results.length > 300 && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Se afișează primele 300 de rezultate. Rafinează căutarea pentru a vedea restul.
        </p>
      )}
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
  small = false,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full border font-medium transition-all",
        small ? "px-3 py-1 text-xs" : "px-3.5 py-2 text-sm",
        active
          ? "border-primary bg-primary/15 text-foreground"
          : "border-border bg-white/[0.02] text-muted-foreground hover:border-white/20 hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
