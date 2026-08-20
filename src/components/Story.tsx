export default function Story() {
  return (
    <section className="bg-deep-blue py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_2px_2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-accent">
            The Story
          </p>
          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Why Ogbomoso, Why Now
          </h2>
        </div>
        <div className="hidden bg-white/15 md:block" />
        <div className="space-y-5 text-white/85 leading-relaxed">
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
          <p>
            For us, this is also about giving back to the institution and
            community that helped shape us.
          </p>
        </div>
      </div>
    </section>
  );
}
