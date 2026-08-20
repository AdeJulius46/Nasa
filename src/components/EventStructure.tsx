const items = [
  {
    title: "Keynote Speaker",
    desc: "Industry leaders, researchers and invited guests will share insights on space technology, AI, innovation, entrepreneurship and the role of young Africans in solving global challenges.",
  },
  {
    title: "Challenge Kick-off & Team Formation",
    desc: "Participants explore the official NASA Space Apps challenges, identify problems aligned with their interests and form multidisciplinary teams to begin developing solutions.",
  },
  {
    title: "Workshops & Mentorship",
    desc: "Teams build their solutions across the two days, supported by technical workshops, mentors, researchers and industry professionals who provide practical guidance and expertise.",
  },
  {
    title: "Project Showcase, Awards & Global Pathway",
    desc: "Teams pitch and demonstrate their solutions before a panel of judges. Outstanding projects receive local prizes and recognition, with eligible top projects progressing into the NASA Space Apps global judging process.",
  },
];

export default function EventStructure() {
  return (
    <section id="schedule" className="bg-white py-24 text-navy">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue">
          Two Days, Start to Finish
        </p>
        <h2 className="mt-2 mb-12 text-3xl font-black sm:text-4xl">
          Event Structure
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy/10 bg-navy/[0.03] p-7"
            >
              <span className="text-xs font-bold tracking-widest text-blue">
                STEP {i + 1}
              </span>
              <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-navy/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
