import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--cf-border)] bg-[var(--cf-bg-darker)]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">vinext</p>
            <p className="mt-2 text-sm text-[var(--cf-text-secondary)]">
              The Next.js API, reimplemented on Vite. Built by Cloudflare.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/docs"
              className="link-underline-hover text-sm text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
            >
              Documentation
            </Link>
            <a
              href="https://github.com/cloudflare/vinext"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-hover text-sm text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
            >
              GitHub
            </a>
            <a
              href="https://blog.cloudflare.com/vinext/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-hover text-sm text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
            >
              Blog
            </a>
            <a
              href="https://agentskills.io/home"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-hover text-sm text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
            >
              Agent Skills
            </a>
            <a
              href="https://www.cloudflare.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-hover text-sm text-[var(--cf-text-secondary)] transition-colors duration-300 hover:text-[var(--cf-primary)]"
            >
              Cloudflare
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--cf-border)] pt-8">
          <p className="text-sm text-[var(--cf-text-secondary)]">
            Built with vinext by{" "}
            <a
              href="https://pandito.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-hover text-[var(--cf-primary)] transition-colors duration-300 hover:text-[var(--cf-primary-light)]"
            >
              Pandito
            </a> — with love
            for Cloudflare
          </p>
        </div>
      </div>
    </footer>
  );
}
