import { Microphone, UsersThree, Wrench, Trophy } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const items = [
  {
    icon: Microphone,
    title: "Keynote Speaker",
    desc: "Industry leaders, researchers and invited guests share insights on space technology, AI, innovation and the role of young Africans in solving global challenges.",
  },
  {
    icon: UsersThree,
    title: "Challenge Kick-off & Team Formation",
    desc: "Participants explore the official NASA Space Apps challenges, identify problems aligned with their interests and form multidisciplinary teams.",
  },
  {
    icon: Wrench,
    title: "Workshops & Mentorship",
    desc: "Teams build their solutions across two days, supported by technical workshops, mentors, researchers and industry professionals.",
  },
  {
    icon: Trophy,
    title: "Showcase, Awards & Global Pathway",
    desc: "Teams pitch before a panel of judges. Outstanding projects receive local prizes, with eligible top projects progressing into NASA's global judging process.",
  },
];

export default function EventStructure() {
  return (
    <section id="schedule" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
          Two Days, Start to Finish
        </p>
        <Reveal>
          <h2 className="mt-2 mb-14 text-3xl font-bold sm:text-4xl">Event Structure</h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-white/10 sm:block" />
          <div className="space-y-10">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="relative flex gap-6 sm:pl-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-deep-blue">
                    <item.icon size={22} weight="duotone" className="text-accent" />
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-white/70">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
