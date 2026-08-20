import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="bg-deep-blue py-24 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="text-3xl font-black sm:text-4xl">Why Ogbomoso, why now</h2>
        </Reveal>
        <Reveal delay={0.08} className="mt-6 space-y-5 text-white/80 leading-relaxed">
          <p>
            As students who have competed in hackathons across Nigerian
            universities and innovation communities, we repeatedly saw
            something missing: students in LAUTECH and Ogbomoso had far fewer
            opportunities to access international innovation platforms
            locally.
          </p>
          <p>
            NASA Space Apps gives us the chance to change that. We are
            bringing a global challenge home so talented students do not have
            to travel to Lagos, Abuja or another institution before they can
            compete, collaborate and be seen globally.
          </p>
          <p className="text-white">
            For us, this is also about giving back to the institution and
            community that helped shape us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
