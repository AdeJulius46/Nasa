import Reveal from "./Reveal";

const team = [
  { name: "Prof. T.B. Asafa", role: "Professor of Mechanical Engineering" },
  { name: "Olusanya Ayodeji", role: "Lead, Software Engineer" },
  { name: "Adegoke Julius", role: "Co-Lead, Software Engineer" },
  { name: "Saka Adetayo", role: "Co-Lead, Robotic Engineer" },
  { name: "Oladepo Caleb", role: "Co-Lead, Electronic Engineer" },
];

function initials(name: string) {
  return name
    .replace("Prof.", "")
    .trim()
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");
}

export default function Team() {
  return (
    <section id="team" className="bg-deep-blue py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">Meet the Team</h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/5 p-6 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-navy text-xl font-bold text-accent">
                  {initials(m.name)}
                </div>
                <h3 className="mt-4 font-bold text-accent">{m.name}</h3>
                <p className="mt-1 text-sm text-white/70">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
