import Link from "next/link";
import { events } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function EventsSection() {
  return (
    <section className="bg-orion-fog section-pad">
      <div className="container-orion grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">Campus Life</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
            Events at Orion
          </h2>
          <p className="mt-4 text-lg leading-8 text-orion-muted">
            Lectures, matches, performances, and open days — there is always
            something happening on the Hill.
          </p>
          <Link href="/events" className="btn-orion mt-8">
            Full calendar
          </Link>
        </Reveal>

        <ol className="divide-y divide-orion-fog-2 rounded-2xl border border-orion-fog-2 bg-white">
          {events.map((e, i) => (
            <Reveal key={e.href} as="li" delay={i * 70}>
              <Link href={e.href} className="group flex items-center gap-6 p-5 hover:bg-orion-fog">
                <time className="grid w-16 shrink-0 place-items-center rounded-xl bg-orion-navy py-2 text-white">
                  <span className="font-serif text-2xl leading-none">{e.day}</span>
                  <span className="text-[11px] uppercase tracking-widest">{e.month}</span>
                </time>
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl leading-snug text-orion-ink group-hover:underline underline-offset-4">
                    {e.title}
                  </h3>
                  <p className="mt-1 text-sm text-orion-muted">{e.where}</p>
                </div>
                <span className="text-orion-blue">→</span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
