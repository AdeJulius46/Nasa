import { Microphone, UsersThree, Wrench, Trophy } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import EventStack from "./EventStack";

const iconProps = { size: 44, weight: "duotone" as const, className: "text-accent" };

const items = [
  {
    icon: <Microphone {...iconProps} />,
    title: "Keynote Speaker",
    desc: "Industry leaders, researchers and invited guests share insights on space technology, AI, innovation and the role of young Africans in solving global challenges.",
  },
  {
    icon: <UsersThree {...iconProps} />,
    title: "Challenge Kick-off & Team Formation",
    desc: "Participants explore the official NASA Space Apps challenges, identify problems aligned with their interests and form multidisciplinary teams.",
  },
  {
    icon: <Wrench {...iconProps} />,
    title: "Workshops & Mentorship",
    desc: "Teams build their solutions across two days, supported by technical workshops, mentors, researchers and industry professionals.",
  },
  {
    icon: <Trophy {...iconProps} />,
    title: "Showcase, Awards & Global Pathway",
    desc: "Teams pitch before a panel of judges. Outstanding projects receive local prizes, with eligible top projects progressing into NASA's global judging process.",
  },
];

export default function EventStructure() {
  return (
    <section id="schedule" className="bg-navy">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-14">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
          Two Days, Start to Finish
        </p>
        <Reveal>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Event Structure</h2>
        </Reveal>
      </div>
      <EventStack items={items} />
    </section>
  );
}
