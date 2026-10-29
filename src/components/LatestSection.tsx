import Image from "next/image";
import Link from "next/link";
import { latest } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function LatestSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
              The Latest
            </h2>
            <Link href="/news" className="text-sm font-semibold text-orion-blue underline-offset-4 hover:underline">
              See all stories →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {latest.map((item, i) => (
            <Reveal key={item.href} delay={i * 90}>
              <Link
                href={item.href}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-black text-white"
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
