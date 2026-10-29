import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/content";

export function NewsGrid() {
  return (
    <section className="bg-orion-fog section-pad">
      <div className="container-orion">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl tracking-tight text-orion-ink sm:text-4xl">
              Orion News
            </h2>
            <p className="mt-2 max-w-xl text-orion-muted">
              Stories to keep you informed and inspired, from a university
              building Africa’s academic future.
            </p>
          </div>
          <Link href="/news" className="btn-orion">
            More News
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="arch-card group shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="arch-media">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="px-4 pb-5 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-orion-orange">
                  {item.category}
                </p>
                <h3 className="mt-2 font-serif text-xl leading-snug text-orion-ink">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
