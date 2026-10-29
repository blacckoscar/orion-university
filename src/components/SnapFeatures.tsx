"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { features } from "@/lib/content";

/**
 * Pinned, snap-scrolling feature stories. The section is 100svh tall and
 * scroll-snaps between slides internally; once the last slide is reached the
 * page continues scrolling normally.
 */
export function SnapFeatures() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const slides = Array.from(el.querySelectorAll<HTMLElement>("[data-slide]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number(e.target.getAttribute("data-slide")));
        }
      },
      { root: el, threshold: 0.6 },
    );
    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const go = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const slide = el.querySelector<HTMLElement>(`[data-slide="${i}"]`);
    slide?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative bg-black text-white" aria-label="Featured programmes">
      <div ref={ref} className="snap-container">
        {features.map((f, i) => (
          <div key={f.href} data-slide={i} className="snap-slide relative">
            <Image
              src={f.image}
              alt=""
              fill
              sizes="100vw"
              className={`object-cover transition duration-1000 ${
                active === i ? "scale-100 opacity-100" : "scale-105 opacity-60"
              }`}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            <div className="container-orion relative flex h-full flex-col justify-center px-4 sm:px-6">
              <div
                className={`max-w-xl transition duration-700 ${
                  active === i ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <p className="eyebrow">{f.eyebrow}</p>
                <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl lg:text-6xl">
                  {f.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/85">{f.body}</p>
                <Link href={f.href} className="btn-orion-light mt-8">
                  {f.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pointer-events-none absolute inset-y-0 right-4 hidden items-center sm:flex">
        <ol className="pointer-events-auto flex flex-col gap-3">
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
    </section>
  );
}
