import { Globe, Lightbulb, UsersThree, Buildings } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";

const goals = [
  {
    icon: Globe,
    title: "Bring Global Opportunities Closer",
    desc: "Give students and innovators in Ogbomoso direct access to an internationally recognized innovation platform.",
  },
  {
    icon: Lightbulb,
    title: "Turn Ideas Into Solutions",
    desc: "Enable multidisciplinary teams to use NASA open data and technology to build solutions to real-world challenges.",
  },
  {
    icon: UsersThree,
    title: "Connect Talent With Industry",
    desc: "Create meaningful interaction between emerging innovators, mentors, researchers, companies and technology communities.",
  },
  {
    icon: Buildings,
    title: "Build a Lasting Innovation Culture",
    desc: "Establish NASA Space Apps Ogbomoso as a recurring platform that strengthens the innovation ecosystem within LAUTECH and Ogbomoso.",
  },
];

export default function Goals() {
  return (
    <section id="goals" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-12 max-w-lg text-3xl font-black leading-tight sm:text-4xl">
            What we&apos;re building toward
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {goals.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
                <g.icon size={28} weight="duotone" className="mt-1 shrink-0 text-accent" />
                <div>
                  <h3 className="text-lg font-bold">{g.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{g.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
