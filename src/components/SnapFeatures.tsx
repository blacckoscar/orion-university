"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { features } from "@/lib/content";

/**
 * Full-bleed feature stories that scroll with the page (no nested scroll trap).
 */
export function SnapFeatures() {
  const [active, setActive] = useState(0);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLElement[];
    if (!slides.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = Number(visible.target.getAttribute("data-slide"));
        if (!Number.isNaN(i)) setActive(i);
      },
      { threshold: [0.35, 0.55, 0.75] },
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-black text-white" aria-label="Featured programmes">
      <div className="pointer-events-none absolute inset-y-0 right-4 z-20 hidden lg:block">
        <div className="sticky top-1/2 flex -translate-y-1/2 justify-end">
          <ol className="pointer-events-auto flex flex-col gap-3 rounded-full bg-black/40 p-2 backdrop-blur">
            {features.map((f, i) => (
              <li key={f.href}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to ${f.title}`}
                  aria-current={active === i}
                  className={`block h-2.5 w-2.5 rounded-full border border-white transition ${
                    active === i ? "scale-125 bg-white" : "bg-transparent"
                  }`}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>

      {features.map((f, i) => (
        <article
          key={f.href}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          data-slide={i}
          className="relative flex min-h-[78svh] items-center"
        >
          <Image
            src={f.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/25" />
          <div className="container-orion relative z-10 py-20 sm:py-24">
            <div className="max-w-xl overlay-copy">
              <p className="eyebrow">{f.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                {f.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/90">{f.body}</p>
              <Link href={f.href} className="btn-orion-light mt-8">
                {f.cta}
              </Link>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
