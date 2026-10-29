import Link from "next/link";
import { campusParallax } from "@/lib/content";
import { ParallaxVideo } from "@/components/Parallax";

export function CampusParallax() {
  return (
    <ParallaxVideo
      src={campusParallax.video}
      poster={campusParallax.poster}
      className="h-[80svh] min-h-[520px]"
    >
      <div className="container-orion flex h-full flex-col items-center justify-center text-center text-white">
        <div className="overlay-copy max-w-3xl">
          <p className="eyebrow">Campus Life</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl lg:text-7xl">
            {campusParallax.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/95">
            {campusParallax.body}
          </p>
          <Link href={campusParallax.cta.href} className="btn-orion-light mt-8">
            {campusParallax.cta.label}
          </Link>
        </div>
      </div>
    </ParallaxVideo>
  );
}
