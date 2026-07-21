import { events, type EventItem } from "@/lib/data/program";

const MONTHS_SHORT = ["IAN", "FEB", "MAR", "APR", "MAI", "IUN", "IUL", "AUG", "SEP", "OCT", "NOI", "DEC"];
const MONTHS_LONG = [
  "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
  "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie",
];
const DAYS = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];

export function parseISO(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m: m - 1, d, date: new Date(Date.UTC(y, m - 1, d)) };
}

export function dayNum(iso: string) {
  return parseISO(iso).d;
}
export function monthShort(iso: string) {
  return MONTHS_SHORT[parseISO(iso).m];
}
export function monthLong(iso: string) {
  return MONTHS_LONG[parseISO(iso).m];
}
export function weekday(iso: string) {
  return DAYS[parseISO(iso).date.getUTCDay()];
}
export function monthKey(iso: string) {
  const { y, m } = parseISO(iso);
  return `${MONTHS_LONG[m]} ${y}`;
}

/** Most recent events (data ends mid-2026). */
export function latestEvents(n: number): EventItem[] {
  return [...events].slice(-n).reverse();
}

/** Group events by "Month Year" preserving order (newest first). */
export function groupByMonth(list: EventItem[]) {
  const groups: { key: string; items: EventItem[] }[] = [];
  const index = new Map<string, number>();
  for (const e of list) {
    const key = monthKey(e.date);
    if (!index.has(key)) {
      index.set(key, groups.length);
      groups.push({ key, items: [] });
    }
    groups[index.get(key)!].items.push(e);
  }
  return groups;
}

export const sportTone: Record<string, string> = {
  Handbal: "bg-primary/15 text-red-300 border-primary/25",
  Volei: "bg-secondary/15 text-blue-300 border-secondary/25",
  Judo: "bg-primary/15 text-red-300 border-primary/25",
  "Tenis de masă": "bg-secondary/15 text-blue-300 border-secondary/25",
  Gimnastică: "bg-primary/15 text-red-300 border-primary/25",
  "Arte marțiale": "bg-primary/15 text-red-300 border-primary/25",
  Lupte: "bg-primary/15 text-red-300 border-primary/25",
  Box: "bg-primary/15 text-red-300 border-primary/25",
  Baschet: "bg-secondary/15 text-blue-300 border-secondary/25",
  Scrimă: "bg-secondary/15 text-blue-300 border-secondary/25",
  Dans: "bg-secondary/15 text-blue-300 border-secondary/25",
  Expoziție: "bg-white/10 text-foreground/80 border-white/15",
  Concert: "bg-white/10 text-foreground/80 border-white/15",
  Conferință: "bg-white/10 text-foreground/80 border-white/15",
  Eveniment: "bg-white/10 text-foreground/80 border-white/15",
  Sport: "bg-secondary/15 text-blue-300 border-secondary/25",
};

export function toneFor(sport: string) {
  return sportTone[sport] ?? sportTone.Sport;
}
