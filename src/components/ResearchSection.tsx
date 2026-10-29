import Image from "next/image";
import Link from "next/link";
import { research } from "@/lib/content";

export function ResearchSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
            {research.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-orion-muted">
            {research.body}
          </p>
        </div>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-sm md:aspect-[21/9]">
          <Image
            src={research.featuredImage}
            alt="Research at Orion University"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <blockquote className="mx-auto mt-10 max-w-3xl border-l-4 border-orion-orange pl-5 font-serif text-xl leading-relaxed text-orion-ink md:text-2xl">
          {research.quote}
        </blockquote>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {research.stories.map((story) => (
            <Link
              key={story.href}
              href={story.href}
              className="group grid overflow-hidden rounded-sm border border-orion-fog-2 bg-orion-fog sm:grid-cols-[180px_1fr]"
            >
              <div className="relative min-h-40 sm:min-h-full">
                <Image
                  src={story.image}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center p-5">
                <h3 className="font-serif text-2xl leading-snug text-orion-ink">
                  {story.title}
                </h3>
                <span className="mt-3 text-sm font-semibold text-orion-blue underline-offset-2 group-hover:underline">
                  Read more
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
