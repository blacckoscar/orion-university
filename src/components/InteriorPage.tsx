import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type InteriorPageProps = {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export function InteriorPage({ title, eyebrow, children }: InteriorPageProps) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-orion-navy text-white">
          <div className="container-orion py-14 sm:py-20">
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orion-orange">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">
              {title}
            </h1>
          </div>
        </section>
        <section className="section-pad">
          <div className="container-orion max-w-3xl prose-orion space-y-5 text-lg leading-8 text-orion-muted">
            {children}
            <p className="pt-4">
              <Link href="/" className="font-semibold text-orion-blue underline">
                ← Back to home
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
