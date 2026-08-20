"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react";

export default function MobileNav({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white"
      >
        {open ? <X size={18} /> : <List size={18} />}
      </button>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-white/10 bg-navy px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border border-white/10 px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-white/80"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
