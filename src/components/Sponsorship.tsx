const tiers = [
  {
    name: "Bronze",
    price: "₦250k",
    highlight: false,
    benefits: [
      "Logo on selected digital and event materials",
      "Social media acknowledgement",
      "Recognition during the event",
      "Inclusion in post-event appreciation",
    ],
  },
  {
    name: "Silver",
    price: "₦500k",
    highlight: false,
    benefits: [
      "All Bronze benefits",
      "Increased brand visibility across event materials",
      "Branding at the event venue",
      "Opportunity to provide branded materials",
      "Access to networking opportunities during the event",
      "Opportunity to nominate mentors or technical experts, subject to event guidelines",
    ],
  },
  {
    name: "Gold",
    price: "₦1M",
    highlight: true,
    benefits: [
      "All Silver benefits",
      "Prominent brand positioning across major event materials",
      "Premium venue branding",
      "Exhibition or product demonstration space where appropriate",
      "Strong digital and media recognition",
      "Opportunity for a representative to participate in an event session",
    ],
  },
  {
    name: "Platinum",
    price: "₦1.5M",
    highlight: false,
    benefits: [
      "All Gold benefits",
      "Top-tier premium venue branding",
      "Priority exhibition or product demonstration space",
      "Maximum digital and media recognition",
      "Opportunity for a representative to participate in an event session",
    ],
  },
];

export default function Sponsorship() {
  return (
    <section id="sponsors" className="bg-white py-24 text-navy">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue">
          Partner With Us
        </p>
        <h2 className="mt-2 mb-4 text-3xl font-black sm:text-4xl">
          Sponsorship Tiers
        </h2>
        <p className="mb-12 max-w-2xl text-navy/70">
          Help bring a global innovation platform to Ogbomoso. Choose the tier
          that fits your organization.
        </p>
        <div className="grid gap-6 lg:grid-cols-4">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col rounded-2xl border p-7 ${
                t.highlight
                  ? "border-blue bg-navy text-white shadow-xl shadow-blue/20 lg:-translate-y-3"
                  : "border-navy/10 bg-navy/[0.03]"
              }`}
            >
              <h3
                className={`text-lg font-bold uppercase tracking-wide ${
                  t.highlight ? "text-accent" : "text-blue"
                }`}
              >
                {t.name}
              </h3>
              <p className="mt-1 text-3xl font-black">{t.price}</p>
              <ul
                className={`mt-6 flex-1 space-y-3 text-sm leading-relaxed ${
                  t.highlight ? "text-white/85" : "text-navy/75"
                }`}
              >
                {t.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className={t.highlight ? "text-accent" : "text-blue"}>
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
