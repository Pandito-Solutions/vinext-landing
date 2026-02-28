"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--cf-border)] bg-[var(--cf-bg-dark)]/80 backdrop-blur-md transition-shadow duration-300">
      <nav className="mx-auto flex h-16 max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="text-xl font-bold text-white transition-opacity duration-300 hover:opacity-90"
        >
          vinext
        </Link>
        <div className="flex flex-wrap items-center gap-4 sm:gap-8">
          <Link
            href="/docs"
            className="link-underline-hover text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
          >
            Docs
          </Link>
          <a
            href="https://github.com/cloudflare/vinext"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline-hover text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
          >
            GitHub
          </a>
          <Link
            href="/docs/installation"
            className="cta-primary-hover rounded-lg bg-[var(--cf-primary)] px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
