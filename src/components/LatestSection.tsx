import Image from "next/image";
import Link from "next/link";
import { latest } from "@/lib/content";

export function LatestSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion">
        <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
          The Latest
        </h2>

        <div className="mt-10 grid gap-8">
          {latest.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group grid overflow-hidden rounded-2xl border border-orion-fog-2 bg-orion-fog lg:grid-cols-[1.4fr_1fr]"
            >
              <div className="relative min-h-64 lg:min-h-[360px]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-orion-orange">
                  {item.category}
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-tight text-orion-ink">
                  {item.title}
                </h3>
                <span className="mt-5 text-sm font-semibold text-orion-blue underline-offset-4 group-hover:underline">
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
