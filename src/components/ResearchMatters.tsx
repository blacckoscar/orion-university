import Link from "next/link";
import { researchMatters } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function ResearchMatters() {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        poster={researchMatters.poster}
        aria-hidden
      >
        <source src={researchMatters.video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />

      <div className="container-orion relative grid min-h-[70svh] items-center px-4 py-24 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">{researchMatters.eyebrow}</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
              {researchMatters.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">{researchMatters.body}</p>
            <Link href={researchMatters.href} className="btn-orion-light mt-8">
              {researchMatters.cta}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
