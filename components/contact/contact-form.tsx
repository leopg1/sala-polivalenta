"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "Solicitare de pe site");
    const message = String(data.get("message") || "");
    const body = `Nume: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-card/40 p-6 md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nume" name="name" placeholder="Numele tău" required />
        <Field label="Email" name="email" type="email" placeholder="email@exemplu.ro" required />
      </div>
      <Field label="Subiect" name="subject" placeholder="Ex. Închiriere sală / Informații" />
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground/80" htmlFor="message">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Spune-ne despre evenimentul tău sau ce informații cauți…"
          className="resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
        />
      </div>

      <button
        type="submit"
        className={cn(
          "group inline-flex h-12 items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
          sent
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground hover:bg-primary-strong hover:-translate-y-0.5 shadow-[0_10px_40px_-12px_rgba(255,46,67,0.75)]"
        )}
      >
        {sent ? (
          <>
            <CheckCircle2 className="size-4" /> Se deschide clientul de email…
          </>
        ) : (
          <>
            Trimite mesajul
            <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Formularul deschide aplicația ta de email cu mesajul precompletat către{" "}
        {site.contact.email}.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-foreground/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-xl border border-border bg-background/60 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
      />
    </div>
  );
}
