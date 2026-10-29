import Image from "next/image";
import Link from "next/link";
import { news, type Story } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function NewsGrid() {
  return (
    <section className="bg-orion-fog section-pad">
      <div className="container-orion">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
                Orion News
              </h2>
              <p className="mt-3 max-w-xl text-lg text-orion-muted">
                Stories to keep you informed and inspired, from a university
                building Africa’s academic future.
              </p>
            </div>
            <Link href="/news" className="btn-orion">
              More News
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item, i) => (
            <Reveal key={item.href} delay={i * 90}>
              <ArchCard story={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArchCard({ story }: { story: Story }) {
  return (
    <Link
      href={story.href}
      className="arch-card group block h-full shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="arch-media">
        <Image
          src={story.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.05]"
        />
      </div>
      <div className="px-5 pb-6 pt-5">
        <p className="eyebrow">{story.category}</p>
        <h3 className="mt-2 font-serif text-xl leading-snug text-orion-ink">
          {story.title}
        </h3>
      </div>
    </Link>
  );
}
