import Image from "next/image";
import Link from "next/link";
import { athletics } from "@/lib/content";
import { ArchCard } from "@/components/NewsGrid";
import { ParallaxImage } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";

export function AthleticsSection() {
  return (
    <section className="bg-white">
      <ParallaxImage
        src={athletics.heroImage}
        alt="Orion student-athlete competing"
        className="h-[70svh] min-h-[480px]"
      >
        <div className="container-orion flex h-full flex-col justify-end pb-14 text-white">
          <div className="overlay-copy max-w-3xl">
            <h2 className="font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              {athletics.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/95">
              {athletics.body}
            </p>
            <Link href={athletics.cta.href} className="btn-orion-light mt-8">
              {athletics.cta.label}
            </Link>
          </div>
        </div>
      </ParallaxImage>

      <div className="section-pad">
        <div className="container-orion">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h3 className="font-serif text-3xl tracking-tight text-orion-ink sm:text-4xl">
                {athletics.subTitle}
              </h3>
              <p className="mt-5 text-lg leading-8 text-orion-muted">
                {athletics.subBody}
              </p>
            </Reveal>
            <div className="grid grid-cols-3 gap-3">
              {athletics.gallery.map((img) => (
                <div
                  key={img}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl"
                >
                  <Image src={img} alt="" fill sizes="30vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {athletics.stories.map((s, i) => (
              <Reveal key={s.href} delay={i * 90}>
                <ArchCard story={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
