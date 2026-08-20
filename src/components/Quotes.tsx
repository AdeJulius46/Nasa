import Reveal from "./Reveal";

const quotes = [
  {
    text: "Earth is a small town with many neighborhoods in a very big universe.",
    author: "Ronald J. Garan Jr., NASA astronaut",
  },
  {
    text: "Space is for everybody. It's not just for a few people in science or math, or for a select group of astronauts. That's our new frontier out there.",
    author: "Christa McAuliffe",
  },
];

export default function Quotes() {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        {quotes.map((q, i) => (
          <Reveal key={q.author} delay={i * 0.08}>
            <blockquote className="h-full rounded-2xl border-l-4 border-accent bg-white/5 p-8">
              <p className="text-xl leading-relaxed">
                <span className="text-accent">&ldquo;</span>
                {q.text}
                <span className="text-accent">&rdquo;</span>
              </p>
              <footer className="mt-4 text-sm font-semibold text-white/60">
                - {q.author}
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
