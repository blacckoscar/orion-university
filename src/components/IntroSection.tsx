import Link from "next/link";
import { intro } from "@/lib/content";

export function IntroSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-orion max-w-3xl text-center sm:text-left">
        <h2 className="font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
          {intro.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-orion-muted">{intro.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:justify-start">
          <Link href={intro.cta.href} className="btn-orion">
            {intro.cta.label}
          </Link>
          <Link href="/admissions" className="btn-orion">
            Apply now
          </Link>
        </div>
      </div>
    </section>
  );
}
