import Link from "next/link";
import { navUtility, site } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-orion-navy-deep text-white/90">
        <div className="container-orion flex flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-[12px] tracking-wide sm:px-6">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
            {navUtility.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="hover:text-white hover:underline underline-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="glass-bar text-white">
        <div className="container-orion flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link href="/" className="group flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-10 w-10 place-items-center rounded-sm border border-white/30 bg-white/5 font-serif text-xl font-semibold tracking-tight"
            >
              O
            </span>
            <span className="font-serif text-[1.35rem] leading-none tracking-tight sm:text-[1.65rem]">
              {site.name}
            </span>
          </Link>

          <form
            action="/search"
            method="get"
            className="hidden items-center gap-2 md:flex"
            role="search"
          >
            <label htmlFor="site-search" className="sr-only">
              Search Orion
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search"
              className="w-48 rounded border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white placeholder:text-white/60 outline-none focus:border-white/50 lg:w-64"
            />
            <button
              type="submit"
              className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-white/10 hover:bg-white/15"
              aria-label="Submit search"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </form>

          <Link
            href="/search"
            className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-white/10 md:hidden"
            aria-label="Search"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
