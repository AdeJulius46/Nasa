import Reveal from "./Reveal";

const slices = [
  {
    pct: "30%",
    title: "Prize Pool",
    amount: "₦1.5M",
    desc: "Rewards for outstanding local teams.",
  },
  {
    pct: "24%",
    title: "Participant Experience",
    amount: "₦1.2M",
    desc: "Meals, accommodation and participant welfare.",
  },
  {
    pct: "13%",
    title: "Merchandise",
    amount: "₦675K",
    desc: "Participant kits and event merchandise.",
  },
  {
    pct: "33%",
    title: "Event Delivery",
    amount: "₦1.45M",
    desc: "Media, logistics, internet, branding and contingency.",
  },
];

export default function Budget() {
  return (
    <section className="bg-deep-blue py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="max-w-lg text-3xl font-bold leading-tight sm:text-4xl">
            How ₦5 million creates the experience
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {slices.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="border-t border-white/10 pt-6">
              <p className="text-4xl font-bold text-accent">{s.pct}</p>
              <h3 className="mt-3 text-sm font-bold uppercase tracking-wide text-white">
                {s.title}
              </h3>
              <p className="mt-1 text-lg font-bold text-white/90">{s.amount}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
