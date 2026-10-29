import Image from "next/image";
import Link from "next/link";
import { education } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { ArchCard } from "@/components/NewsGrid";

export function EducationSection() {
  return (
    <section className="bg-orion-navy text-white">
      <div className="section-pad">
        <div className="container-orion">
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                {education.title}
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 text-lg leading-8 text-white/85">{education.body}</p>
            </Reveal>
          </div>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl md:aspect-[21/9]">
            <Image
              src={education.civicImage}
              alt="Students in discussion at Orion"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="overlay-scrim absolute inset-0" />
            <div className="overlay-copy absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <h3 className="font-serif text-3xl tracking-tight sm:text-4xl">
                {education.civicTitle}
              </h3>
              <p className="mt-3 max-w-2xl leading-7 text-white/95">
                {education.civicBody}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {education.civicStories.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <ArchCard story={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Financial aid */}
      <div className="bg-orion-navy-deep">
        <div className="container-orion grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:py-28">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <Reveal>
              <p className="eyebrow">Admissions &amp; Aid</p>
              <h3 className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl lg:text-5xl">
                {education.aidTitle}
              </h3>
              <p className="mt-5 text-lg leading-8 text-white/85">{education.aidBody}</p>
              <p className="mt-6 border-l-4 border-orion-orange pl-5 font-serif text-xl leading-relaxed text-white">
                {education.aidHighlight}
              </p>
              <Link href={education.aidCta.href} className="btn-orion-light mt-8">
                {education.aidCta.label}
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6">
            {education.aidCards.map((card, i) => (
              <Reveal key={card.href} delay={i * 100}>
                <Link
                  href={card.href}
                  className="group block overflow-hidden rounded-2xl bg-white text-orion-ink shadow-lg"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-serif text-2xl leading-snug">{card.title}</h4>
                    <p className="mt-3 leading-7 text-orion-muted">{card.body}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
