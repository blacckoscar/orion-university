import Link from "next/link";
import { footerGroups, legalLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="text-white">
      <div className="footer-arches">
        <span className="arch-mid" aria-hidden />
        <div className="container-orion relative section-pad">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">{site.location}</p>
              <p className="mt-2 text-lg text-white/85">
                {site.tagline}. A university built in Africa, for the future.
              </p>
            </div>
            <Link href="/" className="font-serif text-4xl tracking-tight sm:text-5xl">
              {site.name}
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-2 text-[0.95rem]">
                  {group.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-white/90 hover:text-white hover:underline underline-offset-2"
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-orion-navy-deep">
        <div className="container-orion flex flex-col gap-3 px-4 py-5 text-xs text-white/75 sm:px-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Legal">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white hover:underline underline-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p>© 2026 {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
