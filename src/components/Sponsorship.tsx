import { Check, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import Reveal from "./Reveal";
import { SPONSOR_EMAIL } from "@/lib/config";

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
      "Opportunity to nominate mentors, subject to event guidelines",
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
      "A representative may participate in an event session",
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
      "A representative may participate in an event session",
    ],
  },
];

export default function Sponsorship() {
  return (
    <section id="sponsors" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
          Partner With Us
        </p>
        <Reveal>
          <h2 className="mt-2 mb-4 text-3xl font-bold sm:text-4xl">Sponsorship Tiers</h2>
        </Reveal>
        <p className="max-w-xl text-white/70">
          Help bring a global innovation platform to Ogbomoso. Choose the
          tier that fits your organization.
        </p>
        <a
          href={`mailto:${SPONSOR_EMAIL}?subject=Sponsoring%20NASA%20Space%20Apps%20Ogbomoso`}
          className="mt-6 mb-12 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-accent bg-accent px-6 py-3 font-bold tracking-tight text-navy transition-all hover:bg-transparent hover:text-accent active:scale-[0.97]"
        >
          Become a Sponsor
          <EnvelopeSimple weight="bold" className="h-4 w-4" />
        </a>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div
                className={`flex h-full flex-col rounded-lg border p-7 ${
                  t.highlight
                    ? "border-accent/50 bg-white/[0.07] lg:-translate-y-3"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <h3 className="text-lg font-bold uppercase tracking-wide text-accent">
                  {t.name}
                </h3>
                <p className="mt-1 text-3xl font-bold">{t.price}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-relaxed text-white/75">
                  {t.benefits.map((b) => (
                    <li key={b} className="flex gap-2">
                      <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
