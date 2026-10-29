"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { research } from "@/lib/content";

export function VenuesCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        className="scroller px-4 sm:px-[max(1.5rem,calc((100vw-1240px)/2+1.5rem))]"
      >
        {research.venues.map((v) => (
          <Link
            key={v.href}
            href={v.href}
            data-card
            className="group relative block w-[78vw] max-w-[420px] overflow-hidden rounded-2xl bg-black text-white sm:w-[380px]"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={v.image}
                alt=""
                fill
                sizes="420px"
                className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h4 className="font-serif text-2xl leading-tight">{v.title}</h4>
              <p className="mt-2 text-sm leading-6 text-white/80">{v.body}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="container-orion mt-6 flex justify-end gap-2 px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-orion-navy/30 text-orion-navy hover:bg-orion-navy hover:text-white"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="grid h-11 w-11 place-items-center rounded-full border border-orion-navy/30 text-orion-navy hover:bg-orion-navy hover:text-white"
          aria-label="Next"
        >
          ›
        </button>
      </div>
    </div>
  );
}
