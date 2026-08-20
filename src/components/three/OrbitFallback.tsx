import { Rocket } from "@phosphor-icons/react/dist/ssr";

export default function OrbitFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden="true">
        <circle cx="200" cy="200" r="190" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
        <ellipse cx="200" cy="200" rx="170" ry="80" stroke="rgba(255,255,255,0.14)" strokeWidth="1" fill="none" transform="rotate(-18 200 200)" />
        <ellipse cx="200" cy="200" rx="140" ry="140" stroke="rgba(234,254,7,0.25)" strokeWidth="1.5" fill="none" />
        <circle cx="200" cy="200" r="46" fill="#0b1f5c" stroke="#eafe07" strokeWidth="1.5" />
        {[
          [60, 90], [340, 120], [90, 320], [310, 300], [200, 40], [40, 220],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 2 === 0 ? 2.5 : 1.6} fill="rgba(255,255,255,0.6)" />
        ))}
      </svg>
      <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-deep-blue">
        <Rocket size={40} weight="fill" className="text-accent" />
      </div>
    </div>
  );
}
