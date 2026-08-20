import Link from "next/link";
import RegisterButton from "./RegisterButton";

const links = [
  { label: "About", href: "#about" },
  { label: "Goals", href: "#goals" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Team", href: "#team" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="flex items-center gap-2 text-white">
          <span className="text-xs font-bold tracking-widest text-accent">NASA</span>
          <span className="text-sm font-extrabold tracking-wide">SPACE APPS · OGBOMOSO</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <RegisterButton size="sm" />
      </div>
    </header>
  );
}
