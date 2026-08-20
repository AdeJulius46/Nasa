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
    desc: "Media, logistics, internet, branding, contingency and delivery.",
  },
];

export default function Budget() {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">
          Budget Breakdown
        </p>
        <h2 className="mt-2 mb-12 text-3xl font-black sm:text-4xl">
          How ₦5 Million Creates the Experience
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slices.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-blue bg-white/5 text-3xl font-black">
                {s.pct}
              </div>
              <h3 className="mt-5 text-sm font-bold uppercase tracking-wide text-white/70">
                {s.title}
              </h3>
              <p className="mt-1 text-lg font-black text-accent">{s.amount}</p>
              <p className="mt-1 text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
