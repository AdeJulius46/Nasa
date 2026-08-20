export function SpaceAppsLogo({
  className = "",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 80 80" className="h-12 w-12" aria-hidden>
        <circle cx="40" cy="44" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="66" cy="18" r="4" fill="currentColor" />
        <path
          d="M62 10 L72 4 M66 8 L74 6 M68 12 L76 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {showText && (
        <div className="leading-none">
          <div className="text-[10px] font-bold text-space-red tracking-widest">NASA</div>
          <div className="text-lg font-bold font-display tracking-wide">SPACE APPS</div>
          <div className="text-[10px] font-semibold tracking-[0.2em]">CHALLENGE</div>
        </div>
      )}
    </div>
  );
}
