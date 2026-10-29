import Link from "next/link";
import { footerColumns, legalLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="text-white">
      <div className="footer-arches">
        <div className="container-orion section-pad">
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-xl text-white/80">
              {site.tagline}. Based in {site.location}, serving students across
              Africa and the world.
            </p>
            <p className="font-serif text-3xl tracking-tight sm:text-4xl">
              {site.name}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white/70">
                  {col.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/90 hover:underline underline-offset-2"
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
        <div className="container-orion flex flex-col gap-3 px-4 py-4 text-xs text-white/75 sm:px-6 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
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
