"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { audienceLinks, megaNav, site, utilityLinks } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const active = megaNav.find((s) => s.id === open) ?? null;

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(null), 160);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobile(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  const primary = megaNav.filter((s) => s.id !== "impact");

  return (
    <header className="sticky top-0 z-50 text-white" onMouseLeave={scheduleClose}>
      {/* Top tier: utility links on all screens; search field on laptop+ */}
      <div className="bg-orion-navy-deep/95">
        <div className="container-orion flex items-center justify-between gap-3 py-2">
          <ul className="flex min-w-0 items-center gap-3 overflow-x-auto text-[12px] text-white/80 sm:gap-5 sm:text-[13px] lg:gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {utilityLinks.map((l) => (
              <li key={l.href} className="shrink-0">
                <UtilityLink link={l} className="transition hover:text-white hover:underline" />
              </li>
            ))}
          </ul>

          <form
            action="/search"
            method="get"
            className="hidden shrink-0 items-center lg:flex"
            role="search"
          >
            <label htmlFor="site-search" className="sr-only">
              Search Orion
            </label>
            <div className="flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 transition focus-within:bg-white/15">
              <SearchIcon />
              <input
                id="site-search"
                name="q"
                type="search"
                placeholder="How can we help?"
                className="w-52 bg-transparent text-[13px] text-white placeholder:text-white/60 outline-none"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Main tier: wordmark + primary links */}
      <div className="glass-bar">
        <div className="container-orion flex items-center justify-between gap-6 py-3.5">
          <Link href="/" className="shrink-0">
            <span className="font-serif text-[1.45rem] leading-none tracking-tight sm:text-[1.6rem] xl:text-[1.75rem]">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Primary">
            {primary.map((section) => (
              <button
                key={section.id}
                type="button"
                onMouseEnter={() => {
                  cancelClose();
                  setOpen(section.id);
                }}
                onClick={() => {
                  cancelClose();
                  setOpen(section.id);
                }}
                aria-expanded={open === section.id}
                aria-controls={`mega-${section.id}`}
                className={`relative whitespace-nowrap rounded px-2.5 py-2 text-[0.9rem] transition xl:px-3 xl:text-[0.95rem] ${
                  open === section.id
                    ? "text-white"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {section.label}
                <span
                  className={`absolute inset-x-2.5 -bottom-[11px] h-[3px] rounded-full bg-orion-orange transition ${
                    open === section.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Mobile/tablet: search icon sits next to the burger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/search"
              className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-white/10"
              aria-label="Search"
            >
              <SearchIcon />
            </Link>
            <button
              type="button"
              onClick={() => setMobile(true)}
              className="grid h-9 w-9 place-items-center rounded border border-white/20 bg-white/10"
              aria-label="Open menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mega panel */}
        <div
          className={`absolute inset-x-0 top-full hidden lg:block ${
            active ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onMouseEnter={cancelClose}
        >
          <div
            className={`glass-panel transition duration-200 ${
              active ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {active ? (
              <div
                id={`mega-${active.id}`}
                className="container-orion grid gap-10 py-10 lg:grid-cols-[1.1fr_1fr_1fr]"
              >
                <div>
                  <p className="eyebrow">{active.label}</p>
                  <h2 className="mt-3 font-serif text-3xl tracking-tight">
                    {active.blurb}
                  </h2>
                  <Link
                    href={active.href}
                    className="btn-orion-outline mt-6"
                    onClick={() => setOpen(null)}
                  >
                    Explore {active.label}
                    <Arrow />
                  </Link>
                </div>
                <ul className="grid content-start gap-2 border-l border-white/10 pl-8 text-[1.05rem]">
                  {active.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(null)}
                        className="group inline-flex items-center gap-2 py-1.5 text-white/85 hover:text-white"
                      >
                        <span className="h-px w-0 bg-orion-orange transition-all group-hover:w-5" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-6 border-t border-white/10 pt-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.12em] text-white/50">
                      Information for
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {audienceLinks.map((a) => (
                        <Link
                          key={a.label}
                          href={a.href}
                          onClick={() => setOpen(null)}
                          className="text-white/80 hover:text-white hover:underline"
                        >
                          {a.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                </ul>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={active.image}
                    alt=""
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobile ? (
        <div className="fixed inset-0 z-[60] bg-orion-navy-deep text-white lg:hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <span className="font-serif text-xl">{site.name}</span>
            <button
              type="button"
              onClick={() => setMobile(false)}
              className="grid h-9 w-9 place-items-center rounded border border-white/20"
              aria-label="Close menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <div className="h-[calc(100svh-57px)] overflow-y-auto px-4 py-4">
            <form action="/search" className="mb-4 flex">
              <input
                name="q"
                type="search"
                placeholder="Search Orion"
                className="w-full rounded-l border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/60 outline-none"
              />
              <button className="grid w-11 place-items-center rounded-r border border-l-0 border-white/20 bg-white/10" aria-label="Search">
                <SearchIcon />
              </button>
            </form>
            {megaNav.map((s) => (
              <details key={s.id} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-lg font-medium">
                  {s.label}
                  <span className="text-white/50 transition group-open:rotate-45">+</span>
                </summary>
                <ul className="pb-3 pl-3 text-white/85">
                  {s.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} onClick={() => setMobile(false)} className="block py-1.5">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <p className="mt-6 text-xs uppercase tracking-[0.12em] text-white/50">
              Information for
            </p>
            <ul className="mt-2 grid grid-cols-2 gap-2 text-white/85">
              {audienceLinks.map((a) => (
                <li key={a.label}>
                  <Link href={a.href} onClick={() => setMobile(false)} className="block py-1">
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-5 text-sm text-white/75">
              {utilityLinks.map((l) => (
                <li key={l.href}>
                  <UtilityLink link={l} className="hover:text-white" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function UtilityLink({
  link,
  className,
}: {
  link: { label: string; href: string };
  className?: string;
}) {
  const external = link.href.startsWith("http");
  return external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
