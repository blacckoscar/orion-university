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
            <li
              key={s.href}
              className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <Link
                href={s.href}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-orion-navy text-white"
              >
                <Image
                  src={s.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="overlay-scrim absolute inset-0" />
                <div className="overlay-copy absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <h3 className="font-serif text-2xl leading-tight">{s.name}</h3>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-2 border-white text-white transition group-hover:bg-white group-hover:text-orion-navy">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
