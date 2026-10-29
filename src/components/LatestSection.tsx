import Image from "next/image";
import Link from "next/link";
import { latest } from "@/lib/content";

export function LatestSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
            The Latest
          </h2>
          <Link
            href="/news"
            className="text-sm font-semibold text-orion-blue underline-offset-4 hover:underline"
          >
            See all stories →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-black text-white"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="overlay-scrim absolute inset-0" />
              <div className="overlay-copy absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow">{item.category}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  {item.action === "Watch video" ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 4v16l13-8z" />
                    </svg>
                  ) : null}
                  {item.action}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
