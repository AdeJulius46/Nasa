"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);
// Prevents ScrollTrigger from re-measuring/jumping when a mobile browser's
// address bar collapses or expands mid-scroll.
ScrollTrigger.config({ ignoreMobileResize: true });

type Item = { icon: ReactNode; title: string; desc: string };

export default function EventStack({ items }: { items: Item[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          pinType: "transform",
        });
        gsap.to(card, {
          scale: 0.92,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <div ref={ref} className="relative">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={`stack-card sticky top-0 relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-t border-white/10 px-6 py-16 ${
            i % 2 === 0 ? "bg-navy" : "bg-deep-blue"
          }`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 select-none font-mono text-[110px] font-bold leading-none text-white/[0.05] sm:right-10 sm:top-8 sm:text-[200px]"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="relative mx-auto w-full max-w-2xl">
            {item.icon}
            <h3 className="mt-6 text-3xl font-bold sm:text-4xl">{item.title}</h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/70">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
