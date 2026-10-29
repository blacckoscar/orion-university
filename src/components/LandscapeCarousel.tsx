"use client";

import Image from "next/image";
import { useState } from "react";
import { landscapes } from "@/lib/content";

export function LandscapeCarousel() {
  const [index, setIndex] = useState(0);
  const slide = landscapes[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? landscapes.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === landscapes.length - 1 ? 0 : i + 1));

  return (
    <section className="relative bg-orion-fog">
      <div className="relative aspect-[16/9] w-full md:aspect-[21/8]">
        <Image
          key={slide.image}
          src={slide.image}
          alt={slide.alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white backdrop-blur hover:bg-black/70"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="grid h-10 w-10 place-items-center rounded-full bg-black/55 text-white backdrop-blur hover:bg-black/70"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
