"use client";

import Image from "next/image";
import { useState } from "react";
import { landscapes } from "@/lib/content";

export function LandscapeCarousel() {
  const [index, setIndex] = useState(0);
  const slide = landscapes[index];

  const prev = () => setIndex((i) => (i === 0 ? landscapes.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === landscapes.length - 1 ? 0 : i + 1));

  return (
    <section className="relative bg-orion-fog" aria-roledescription="carousel" aria-label="Campus views">
      <div className="relative aspect-[16/9] w-full md:aspect-[21/8]">
        {landscapes.map((l, i) => (
          <Image
            key={l.image}
            src={l.image}
            alt={l.alt}
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-4 text-white sm:p-6">
          <p className="text-sm sm:text-base">{slide.caption}</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/55 backdrop-blur hover:bg-black/75"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="grid h-10 w-10 place-items-center rounded-full bg-black/55 backdrop-blur hover:bg-black/75"
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
