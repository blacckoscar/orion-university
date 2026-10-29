"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { landscapes } from "@/lib/content";

const AUTOPLAY_MS = 5000;

export function LandscapeCarousel() {
  const [index, setIndex] = useState(0);
  const [hover, setHover] = useState(false);
  const count = landscapes.length;
  const slide = landscapes[index];

  const go = (i: number) => setIndex((i + count) % count);

  useEffect(() => {
    if (hover) return;
    const t = window.setInterval(() => setIndex((cur) => (cur + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [hover, count]);

  return (
    <section
      className="relative bg-orion-fog"
      aria-roledescription="carousel"
      aria-label="Campus views"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/8]">
        {/* Sliding track */}
        <div
          className="flex h-full w-full transition-transform duration-[900ms] ease-[cubic-bezier(.22,.61,.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {landscapes.map((l, i) => (
            <div key={l.image} className="relative h-full w-full shrink-0" aria-hidden={i !== index}>
              <Image
                src={l.image}
                alt={l.alt}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-[var(--gutter)] pb-5 pt-16 text-white sm:pb-7">
          <div className="min-w-0">
            <p key={slide.caption} className="overlay-copy animate-caption text-sm sm:text-lg">
              {slide.caption}
            </p>
            <div className="mt-3 flex gap-1.5">
              {landscapes.map((l, i) => (
                <button
                  key={l.image}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to view ${i + 1}`}
                  aria-current={index === i}
                  className={`h-1 rounded-full transition-all ${
                    index === i ? "w-8 bg-white" : "w-3 bg-white/45 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/55 backdrop-blur transition hover:bg-white hover:text-orion-navy"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/55 backdrop-blur transition hover:bg-white hover:text-orion-navy"
              aria-label="Next image"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
