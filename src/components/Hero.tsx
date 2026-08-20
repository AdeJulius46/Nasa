"use client";

import { motion, useReducedMotion } from "motion/react";
import { Rocket } from "@phosphor-icons/react";
import RegisterButton from "./RegisterButton";

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-24 md:grid-cols-2 md:pt-24 md:pb-28">
        <div className="flex flex-col items-start">
          <motion.div
            {...rise(0)}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent"
          >
            NASA International Space Apps Challenge
          </motion.div>
          <motion.h1
            {...rise(0.08)}
            className="max-w-xl text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl"
          >
            Bringing Global Innovation to Ogbomoso
          </motion.h1>
          <motion.p {...rise(0.16)} className="mt-6 max-w-md text-lg text-white/75">
            A two-day local hackathon where builders use NASA open data to
            solve real-world challenges, right in Ogbomoso.
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-10 flex flex-wrap items-center gap-6">
            <RegisterButton size="lg" />
            <a
              href="#schedule"
              className="rounded-full border border-white/15 px-5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
            >
              See the schedule
            </a>
          </motion.div>
        </div>

        <motion.div
          {...rise(0.2)}
          className="relative mx-auto hidden aspect-square w-full max-w-md items-center justify-center md:flex"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
