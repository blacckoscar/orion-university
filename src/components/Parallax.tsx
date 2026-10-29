"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function useParallax(strength = 0.25) {
  const wrap = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = wrap.current;
    const m = media.current;
    if (!w || !m) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      const rect = w.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1
      const offset = -progress * rect.height * strength;
      m.style.setProperty("--py", `${offset.toFixed(1)}px`);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return { wrap, media };
}

type BaseProps = {
  className?: string;
  children?: React.ReactNode;
  scrim?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  className = "",
  children,
  scrim = true,
}: BaseProps & { src: string; alt: string }) {
  const { wrap, media } = useParallax();
  return (
    <div ref={wrap} className={`relative overflow-hidden ${className}`}>
      <div ref={media} className="parallax-media absolute inset-0">
        <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      {scrim ? <div className="hero-scrim absolute inset-0" /> : null}
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export function ParallaxVideo({
  src,
  poster,
  className = "",
  children,
  scrim = true,
}: BaseProps & { src: string; poster?: string }) {
  const { wrap, media } = useParallax(0.2);
  return (
    <div ref={wrap} className={`relative overflow-hidden bg-black ${className}`}>
      <div ref={media} className="parallax-media absolute inset-0">
        <video
          className="h-full w-full object-cover"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
      {scrim ? <div className="hero-scrim absolute inset-0" /> : null}
      <div className="relative h-full">{children}</div>
    </div>
  );
}
