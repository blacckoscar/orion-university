import Image from "next/image";
import Link from "next/link";
import { research } from "@/lib/content";
import { Reveal } from "@/components/Reveal";
import { VenuesCarousel } from "@/components/VenuesCarousel";

export function ResearchSection() {
  return (
    <section className="bg-white">
      {/* Title */}
      <div className="section-pad pb-0">
        <div className="container-orion max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl lg:text-6xl">
              {research.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-8 text-orion-muted">{research.body}</p>
          </Reveal>
        </div>
      </div>

      {/* Sticky feature + scrolling stories */}
      <div className="container-orion grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={research.featureImage}
                alt="Human-centered artificial intelligence research at Orion"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                quality={90}
                priority={false}
                className="object-cover object-center"
              />
            </div>
            <h3 className="mt-6 font-serif text-3xl leading-tight text-orion-ink">
              {research.featureTitle}
            </h3>
            <p className="mt-3 leading-7 text-orion-muted">{research.featureBody}</p>
          </Reveal>
        </div>

        <div className="space-y-10 lg:col-span-7">
          <Reveal>
            <blockquote className="border-l-4 border-orion-orange pl-6 font-serif text-2xl leading-relaxed text-orion-ink md:text-3xl">
              {research.featureQuote}
            </blockquote>
          </Reveal>

          {/* Portrait video quote */}
          <Reveal>
            <div className="grid items-center gap-8 rounded-2xl bg-orion-fog p-6 sm:grid-cols-[220px_1fr] sm:p-8">
              <div className="relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl bg-black shadow-lg">
                <video
                  className="h-full w-full object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                  preload="metadata"
                  poster={research.portraitPoster}
                  aria-label="Researcher in the lab"
                >
                  <source src={research.portraitVideo} type="video/mp4" />
                </video>
              </div>
              <div>
                <p className="eyebrow">Voices from the lab</p>
                <p className="mt-3 font-serif text-2xl leading-snug text-orion-ink">
                  {research.portraitQuote}
                </p>
                <p className="mt-4 text-sm text-orion-muted">— {research.portraitName}</p>
              </div>
            </div>
          </Reveal>

          {research.stories.map((s, i) => (
            <Reveal key={s.href} delay={i * 60}>
              <Link
                href={s.href}
                className="group grid overflow-hidden rounded-2xl border border-orion-fog-2 bg-white transition hover:shadow-lg sm:grid-cols-[240px_1fr]"
              >
                <div className="relative min-h-48 sm:min-h-full">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="240px"
                    className="object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-6">
                  <p className="eyebrow">{s.category}</p>
                  <h4 className="mt-2 font-serif text-2xl leading-snug text-orion-ink">
                    {s.title}
                  </h4>
                  {s.excerpt ? (
                    <p className="mt-3 leading-7 text-orion-muted">{s.excerpt}</p>
                  ) : null}
                  <span className="mt-4 inline-block text-sm font-semibold text-orion-blue underline-offset-4 group-hover:underline">
                    Read more
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Venues carousel */}
      <div className="bg-orion-fog py-16 lg:py-24">
        <div className="container-orion">
          <Reveal>
            <div className="max-w-3xl">
              <h3 className="font-serif text-3xl tracking-tight text-orion-ink sm:text-4xl">
                {research.infraTitle}
              </h3>
              <p className="mt-4 text-lg leading-8 text-orion-muted">{research.infraBody}</p>
            </div>
          </Reveal>
        </div>
        <div className="mt-10">
          <VenuesCarousel />
        </div>
      </div>
    </section>
  );
}
