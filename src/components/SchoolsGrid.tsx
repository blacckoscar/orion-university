import Image from "next/image";
import Link from "next/link";
import { schools } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function SchoolsGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow">Academics</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
                The 7 Schools
              </h2>
              <p className="mt-4 text-lg leading-8 text-orion-muted">
                From business to sustainability, Orion’s schools share one
                campus, one library system, and a culture of working across
                boundaries.
              </p>
            </div>
            <Link href="/academics/schools" className="btn-orion">
              Explore academics
            </Link>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schools.map((s, i) => (
            <Reveal key={s.href} as="li" delay={i * 60} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}>
              <Link
                href={s.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-orion-navy text-white"
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <h3 className="font-serif text-2xl leading-tight">{s.name}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/50 transition group-hover:bg-white group-hover:text-orion-navy">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
