import RegisterButton from "./RegisterButton";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-deep-blue to-blue"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 py-28 md:py-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
          NASA International Space Apps Challenge
        </div>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
          Bringing Global Innovation to Ogbomoso
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">
          A two-day local hackathon where software, AI, data, hardware, design,
          science and entrepreneurship talent use NASA open data to solve
          real-world challenges — right here in Ogbomoso.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <RegisterButton size="lg" />
          <a
            href="#about"
            className="text-sm font-semibold text-white/80 underline underline-offset-4 hover:text-white"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
