import Link from "next/link";
import RegisterButton from "./RegisterButton";
import { SpaceAppsLogo } from "./SpaceAppsLogo";
import MobileNav from "./MobileNav";

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
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link href="#top" className="flex shrink-0 items-center">
          <SpaceAppsLogo />
        </Link>
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <MobileNav links={links} />
          <RegisterButton size="sm" className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm" />
        </div>
      </div>
    </header>
  );
}
