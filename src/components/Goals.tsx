const goals = [
  {
    n: "01",
    title: "Bring Global Opportunities Closer",
    desc: "Give students and innovators in Ogbomoso direct access to an internationally recognized innovation platform.",
    dot: "bg-lime-300",
  },
  {
    n: "02",
    title: "Turn Ideas Into Solutions",
    desc: "Enable multidisciplinary teams to use NASA open data and technology to build solutions to real-world challenges.",
    dot: "bg-white",
  },
  {
    n: "03",
    title: "Connect Talent With Industry",
    desc: "Create meaningful interaction between emerging innovators, mentors, researchers, companies and technology communities.",
    dot: "bg-red-500",
  },
  {
    n: "04",
    title: "Build a Lasting Innovation Culture",
    desc: "Establish NASA Space Apps Ogbomoso as a recurring platform that strengthens the innovation ecosystem within LAUTECH and Ogbomoso.",
    dot: "bg-sky-400",
  },
];

export default function Goals() {
  return (
    <section id="goals" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">
          Event Goals
        </p>
        <h2 className="mt-2 mb-12 text-3xl font-black sm:text-4xl">
          What We&apos;re Building Toward
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {goals.map((g) => (
            <div
              key={g.n}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <span className={`mt-1 h-3 w-3 shrink-0 rounded-full ${g.dot}`} />
              <div>
                <p className="text-xs font-bold tracking-widest text-white/50">
                  {g.n}
                </p>
                <h3 className="mt-1 text-lg font-bold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
