"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { landscapes } from "@/lib/content";

const AUTOPLAY_MS = 4500;

export function LandscapeCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const count = landscapes.length;

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  const go = (i: number) => {
    const next = (i + count) % count;
    setIndex(next);
    scrollToIndex(next);
  };

  useEffect(() => {
    if (hover) return;
    const t = window.setInterval(() => {
      setIndex((cur) => {
        const next = (cur + 1) % count;
        scrollToIndex(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [hover, count]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!best) return;
        const i = Array.from(el.children).indexOf(best.target as Element);
        if (i >= 0) setIndex(i);
      },
      { root: el, threshold: [0.6] },
    );
    Array.from(el.children).forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  return (
    <section
      className="bg-orion-fog py-16 md:py-24"
      aria-roledescription="carousel"
      aria-label="Campus views"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="container-orion mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Campus</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight text-orion-ink sm:text-5xl">
            Views from the Hill
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-orion-navy/30 text-orion-navy transition hover:bg-orion-navy hover:text-white"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="grid h-11 w-11 place-items-center rounded-full border border-orion-navy/30 text-orion-navy transition hover:bg-orion-navy hover:text-white"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scroller gap-5 px-[var(--gutter)]"
      >
        {landscapes.map((l, i) => (
          <figure
            key={l.image}
            className="relative m-0 aspect-[16/10] w-[min(88vw,760px)] shrink-0 overflow-hidden rounded-2xl bg-black text-white lg:w-[62vw] xl:w-[54vw]"
            aria-hidden={i !== index}
          >
            <Image
              src={l.image}
              alt={l.alt}
              fill
              sizes="(max-width: 1024px) 88vw, 60vw"
              className="object-cover"
            />
            <div className="overlay-scrim absolute inset-0" />
            <figcaption className="overlay-copy absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-serif text-2xl leading-tight sm:text-3xl">{l.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="container-orion mt-6 flex gap-2">
        {landscapes.map((l, i) => (
          <button
            key={l.image}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to view ${i + 1}`}
            aria-current={index === i}
            className={`h-1.5 rounded-full transition-all ${
              index === i ? "w-10 bg-orion-navy" : "w-4 bg-orion-navy/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
