"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/lib/content";

const DURATION = 9000;

export function HeroVideo() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (paused) return;
    const t = window.setTimeout(
      () => setIndex((i) => (i + 1) % heroSlides.length),
      DURATION,
    );
    return () => window.clearTimeout(t);
  }, [index, paused]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index && !paused) {
        v.currentTime = 0;
        void v.play().catch(() => undefined);
      } else {
        v.pause();
      }
    });
  }, [index, paused]);

  const slide = heroSlides[index];

  return (
    <section
      className="relative isolate h-[86svh] min-h-[560px] w-full overflow-hidden bg-black text-white"
      aria-roledescription="carousel"
      aria-label="Featured stories"
    >
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className="hero-slide"
          data-active={i === index}
          aria-hidden={i !== index}
        >
          <video
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            poster={s.poster}
            aria-hidden
          >
            <source src={s.src} type="video/mp4" />
          </video>
        </div>
      ))}

      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-orion px-4 pb-10 sm:px-6 sm:pb-14 md:pb-16">
          <div className="max-w-3xl overlay-copy" key={slide.id}>
            <p className="eyebrow text-white/90">{slide.eyebrow}</p>
            <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              <Link
                href={slide.href}
                className="hover:underline underline-offset-4"
              >
                {slide.headline}
              </Link>
            </h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/admissions-aid" className="btn-orion-light">
                Apply now
              </Link>
              <Link href={slide.href} className="btn-orion-outline">
                Read the story
              </Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-6">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Slides"
            >
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Slide ${i + 1}: ${s.headline}`}
                  onClick={() => setIndex(i)}
                  className="hero-progress"
                  data-active={i === index && !paused}
                  data-done={i < index}
                  style={{ ["--hero-duration" as string]: `${DURATION}ms` }}
                >
                  <span />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPaused((p) => !p)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/40 bg-black/30 backdrop-blur hover:bg-black/50"
              aria-label={paused ? "Play" : "Pause"}
            >
              {paused ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 4v16l13-8z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
