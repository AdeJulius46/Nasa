"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";
import RegisterButton from "./RegisterButton";
import SceneErrorBoundary from "./three/SceneErrorBoundary";
import OrbitFallback from "./three/OrbitFallback";

const AstronautScene = dynamic(() => import("./three/AstronautScene"), {
  ssr: false,
  loading: () => <OrbitFallback />,
});

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden bg-navy">
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
            className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[9px] font-medium uppercase tracking-[0.08em] text-accent sm:px-4 sm:text-[11px] sm:tracking-[0.14em]"
          >
            <span className="truncate">NASA International Space Apps Challenge</span>
          </motion.div>
          <motion.h1
            {...rise(0.08)}
            className="max-w-xl text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl"
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
          className=" hidden  relative mx-auto aspect-[3/4] w-full max-w-[260px]  md:block md:max-w-lg"
        >
          <SceneErrorBoundary fallback={<OrbitFallback />}>
            <AstronautScene />
          </SceneErrorBoundary>
        </motion.div>
      </div>
    </section>
  );
}
