import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-white">Documentation</h1>
      <p className="mb-8 text-lg text-[var(--cf-text-secondary)]">
        vinext is a Vite plugin that reimplements the Next.js API surface —
        routing, server rendering, React Server Components, server actions, and
        more. Your existing Next.js applications can run on Vite and deploy to
        Cloudflare Workers with minimal changes.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/docs/installation"
          className="block rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)] p-6 transition-all hover:border-[var(--cf-primary)]"
        >
          <h2 className="mb-2 text-xl font-semibold text-white">
            Installation →
          </h2>
          <p className="text-sm text-[var(--cf-text-secondary)]">
            Get started with vinext: migrate an existing project, start from
            scratch, or manual setup.
          </p>
        </Link>
        <Link
          href="/docs/features"
          className="block rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)] p-6 transition-all hover:border-[var(--cf-primary)]"
        >
          <h2 className="mb-2 text-xl font-semibold text-white">Features →</h2>
          <p className="text-sm text-[var(--cf-text-secondary)]">
            API coverage, routing, server features, and design principles.
          </p>
        </Link>
        <Link
          href="/docs/deployment"
          className="block rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)] p-6 transition-all hover:border-[var(--cf-primary)]"
        >
          <h2 className="mb-2 text-xl font-semibold text-white">
            Deployment →
          </h2>
          <p className="text-sm text-[var(--cf-text-secondary)]">
            Deploy to Cloudflare Workers, configure KV cache, and use TPR.
          </p>
        </Link>
      </div>
    </div>
  );
}
