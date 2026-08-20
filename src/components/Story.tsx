import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section className="bg-deep-blue py-24 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_1.1fr] md:items-center">
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg">
          <Image
            src="/Image/hero.png"
            alt="Two Space Apps Ogbomoso organizers"
            fill
            sizes="(min-width: 768px) 400px, 90vw"
            className="object-cover"
          />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-3xl font-bold sm:text-4xl">Why Ogbomoso, why now</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 space-y-5 text-white/80 leading-relaxed">
            <p>
              As students who have competed in hackathons across Nigerian
              universities and innovation communities, we repeatedly saw
              something missing: students in LAUTECH and Ogbomoso had far
              fewer opportunities to access international innovation
              platforms locally.
            </p>
            <p>
              NASA Space Apps gives us the chance to change that. We are
              bringing a global challenge home so talented students do not
              have to travel to Lagos, Abuja or another institution before
              they can compete, collaborate and be seen globally.
            </p>
            <p className="text-white">
              For us, this is also about giving back to the institution and
              community that helped shape us.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
