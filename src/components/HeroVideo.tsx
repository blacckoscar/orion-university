import Link from "next/link";
import { heroSlides } from "@/lib/content";

export function HeroVideo() {
  const slide = heroSlides[0];

  return (
    <section className="relative isolate min-h-[72vh] w-full overflow-hidden bg-black text-white md:min-h-[78vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80"
        aria-hidden
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 flex min-h-[72vh] flex-col justify-end md:min-h-[78vh]">
        <div className="container-orion px-4 pb-10 sm:px-6 sm:pb-14 md:pb-16">
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {slide.headline}
            </h1>
            <div className="mt-6">
              <Link href={slide.cta.href} className="btn-orion">
                {slide.cta.label}
              </Link>
            </div>
          </div>

          <div
            className="mt-8 flex items-center gap-2"
            aria-label="Featured story"
          >
            <span className="h-0.5 w-8 bg-white" />
            <span className="h-0.5 w-5 bg-white/40" />
            <span className="h-0.5 w-5 bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
