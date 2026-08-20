import Link from "next/link";
import { REGISTER_URL } from "@/lib/config";

export default function RegisterButton({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  return (
    <Link
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent font-bold text-navy shadow-[0_0_0_0_rgba(234,254,7,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_30px_2px_rgba(234,254,7,0.45)] ${sizes[size]} ${className}`}
    >
      Register Now
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
