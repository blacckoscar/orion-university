import Link from "next/link";
import { intro, stats } from "@/lib/content";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export function IntroSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl lg:text-6xl">
              {intro.title}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-lg leading-8 text-orion-muted">{intro.body}</p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={intro.cta.href} className="btn-orion">
                {intro.cta.label}
              </Link>
              <Link href="/admissions-aid" className="btn-orion-light border border-orion-fog-2">
                Apply now
              </Link>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <figure className="overflow-hidden rounded-2xl bg-black shadow-xl">
              <video
                className="aspect-video w-full object-cover"
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                poster={intro.poster}
                aria-label="Orion campus film"
              >
                <source src={intro.video} type="video/mp4" />
              </video>
              <figcaption className="px-5 py-3 text-sm text-white/70">
                {intro.caption}
              </figcaption>
            </figure>
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="border-t-2 border-orion-orange pt-4">
                  <dt className="text-sm text-orion-muted">{s.label}</dt>
                  <dd className="mt-1 font-serif text-4xl text-orion-navy">
                    <Counter to={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
