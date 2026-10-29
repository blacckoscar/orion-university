import Image from "next/image";
import Link from "next/link";
import { athletics } from "@/lib/content";

export function AthleticsSection() {
  return (
    <section className="bg-orion-navy-deep text-white">
      <div className="section-pad pb-0">
        <div className="container-orion text-center">
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            {athletics.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            {athletics.body}
          </p>
          <div className="mt-8">
            <Link href={athletics.cta.href} className="btn-orion-light">
              {athletics.cta.label}
            </Link>
          </div>
        </div>
      </div>
      <div className="relative mt-10 aspect-[16/9] w-full md:aspect-[21/9]">
        <Image
          src={athletics.image}
          alt="Orion athletics"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
