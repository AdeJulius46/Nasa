import Link from "next/link";
import RegisterButton from "./RegisterButton";
import { EVENT } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy py-20 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-2xl font-black">Ready to build something out of this world?</p>
          <p className="mt-2 text-white/70">{EVENT.website}</p>
        </div>
        <RegisterButton size="lg" />
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap gap-x-6 gap-y-2 border-t border-white/10 px-6 pt-8 text-sm text-white/60">
        {EVENT.social.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            {s.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
