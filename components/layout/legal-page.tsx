import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReactNode } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageHero } from "@/components/layout/page-hero";

const mdComponents = {
  h1: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-10 mb-4 font-display text-2xl font-bold text-foreground">{children}</h2>
  ),
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-10 mb-4 font-display text-xl font-bold text-foreground">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-8 mb-3 font-display text-lg font-semibold text-foreground">{children}</h3>
  ),
  h4: ({ children }: { children?: ReactNode }) => (
    <h4 className="mt-6 mb-2 font-display text-base font-semibold text-foreground/90">{children}</h4>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mb-4 leading-relaxed text-muted-foreground [overflow-wrap:anywhere]">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mb-4 ml-5 list-disc space-y-1.5 text-muted-foreground marker:text-primary">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="mb-4 ml-5 list-decimal space-y-1.5 text-muted-foreground marker:text-primary">{children}</ol>
  ),
  li: ({ children }: { children?: ReactNode }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }: { href?: string; children?: ReactNode }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline underline-offset-2 [overflow-wrap:anywhere] hover:text-blue-300">
      {children}
    </a>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-left text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border-b border-border bg-white/[0.03] px-4 py-2.5 font-semibold text-foreground">{children}</th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border-b border-border px-4 py-2.5 text-muted-foreground">{children}</td>
  ),
  hr: () => <hr className="my-8 border-border" />,
};

export async function LegalPage({
  slug,
  eyebrow,
  title,
  intro,
}: {
  slug: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  const file = path.join(process.cwd(), "content", "legal", `${slug}.md`);
  const content = await readFile(file, "utf-8");

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      <section className="py-14 md:py-20">
        <div className="container-x max-w-3xl">
          <Markdown remarkPlugins={[remarkGfm]} components={mdComponents}>
            {content}
          </Markdown>
        </div>
      </section>
    </>
  );
}
