const points = [
  "The NASA International Space Apps Challenge is a global hackathon where innovators use NASA and partner space-agency open data to solve real-world challenges on Earth and in space.",
  "Ogbomoso will host a focused two-day local challenge, bringing together software, AI, data, hardware, design, science and entrepreneurship talent.",
  "The goal is simple: give local talent access to a global innovation platform without needing to leave their community to find the opportunity.",
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-accent">
          About NASA Space Apps
        </p>
        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
          A Global Challenge, Built Locally
        </h2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <li
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/85 leading-relaxed"
            >
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
