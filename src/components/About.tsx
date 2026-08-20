import Reveal from "./Reveal";

const points = [
  "Use NASA and partner space-agency open data to solve real-world challenges, on Earth and in space.",
  "A focused two-day local challenge for software, AI, data, hardware, design, science and entrepreneurship talent.",
  "Global platform, local access, no need to leave Ogbomoso to compete on the world stage.",
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            A global hackathon, built for Ogbomoso
          </h2>
          <p className="mt-5 max-w-md text-white/70 leading-relaxed">
            The NASA International Space Apps Challenge is a global hackathon.
            This year, it lands locally, giving LAUTECH and Ogbomoso talent
            direct access without the trip to Lagos or Abuja.
          </p>
        </Reveal>
        <div className="space-y-6">
          {points.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <div className="flex gap-4 border-t border-white/10 pt-6">
                <span className="text-2xl font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-white/80 leading-relaxed">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
