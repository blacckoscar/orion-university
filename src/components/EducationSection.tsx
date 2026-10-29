import Image from "next/image";
import { education } from "@/lib/content";

export function EducationSection() {
  return (
    <section className="bg-orion-navy text-white">
      <div className="section-pad">
        <div className="container-orion">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
              {education.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              {education.body}
            </p>
          </div>

          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm md:aspect-[21/9]">
            <Image
              src={education.image}
              alt="Students learning at Orion"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="font-serif text-3xl tracking-tight">
                {education.subtitle}
              </h3>
              <p className="mt-4 text-lg leading-8 text-white/85">
                {education.detail}
              </p>
              <p className="mt-6 border-l-4 border-orion-orange pl-4 text-base leading-7 text-white/90">
                {education.aid}
              </p>
            </div>

            <div className="grid gap-4">
              {education.cards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-sm bg-white text-orion-ink shadow-sm"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif text-xl leading-snug">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-orion-muted">
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
