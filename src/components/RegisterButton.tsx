import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
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
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-accent bg-accent font-bold tracking-tight text-navy transition-all hover:bg-transparent hover:text-accent active:scale-[0.97] ${sizes[size]} ${className}`}
    >
      Register Now
      <ArrowRight weight="bold" className="h-4 w-4" />
    </Link>
  );
}
