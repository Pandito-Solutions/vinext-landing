import { Hero } from "./components/Hero";
import { FeatureCard } from "./components/FeatureCard";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            What&apos;s in vinext?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Fast HMR"
              description="Vite dev server with instant feedback. No more waiting for webpack."
              icon="⚡"
            />
            <FeatureCard
              title="React Server Components"
              description="Full RSC support via @vitejs/plugin-rsc. Use 'use client' and 'use server' as you would in Next.js."
              icon="◆"
            />
            <FeatureCard
              title="Server Actions"
              description='"use server" support with FormData, revalidation, and redirect().'
              icon="▶"
            />
            <FeatureCard
              title="Edge Deployment"
              description="Single vinext deploy command. Zero cold starts on Cloudflare Workers."
              icon="☁"
            />
            <FeatureCard
              title="94% API Coverage"
              description="next/link, next/navigation, next/cache, middleware, and more. Your existing Next.js code works."
              icon="✓"
            />
            <FeatureCard
              title="Traffic-aware Pre-Rendering"
              description="TPR pre-renders only pages that get traffic. Experimental."
              icon="📊"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--cf-border)] bg-[var(--cf-bg-darker)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">
            Built for speed
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-dark)] p-8 text-center">
              <p className="text-4xl font-bold text-[var(--cf-primary)]">
                4.4× faster
              </p>
              <p className="mt-2 text-[var(--cf-text-secondary)]">
                Production builds vs Next.js 16 (Vite 8 / Rolldown)
              </p>
            </div>
            <div className="rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-dark)] p-8 text-center">
              <p className="text-4xl font-bold text-[var(--cf-primary)]">
                57% smaller
              </p>
              <p className="mt-2 text-[var(--cf-text-secondary)]">
                Client bundle size (gzipped) vs Next.js 16
              </p>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[var(--cf-text-secondary)]">
            <a
              href="https://benchmarks.vinext.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cf-primary)] hover:underline"
            >
              View full benchmarks →
            </a>
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-white">
            Live examples
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-[var(--cf-border)]">
                  <th className="py-4 text-left font-semibold text-white">
                    Example
                  </th>
                  <th className="py-4 text-left font-semibold text-white">
                    Description
                  </th>
                  <th className="py-4 text-left font-semibold text-white">
                    URL
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-[var(--cf-border)]">
                  <td className="py-4">App Router Playground</td>
                  <td className="py-4 text-[var(--cf-text-secondary)]">
                    Vercel&apos;s Next.js App Router Playground on vinext
                  </td>
                  <td className="py-4">
                    <a
                      href="https://app-router-playground.vinext.workers.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cf-primary)] hover:underline"
                    >
                      app-router-playground.vinext.workers.dev
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-[var(--cf-border)]">
                  <td className="py-4">Hacker News</td>
                  <td className="py-4 text-[var(--cf-text-secondary)]">
                    HN clone (App Router, RSC)
                  </td>
                  <td className="py-4">
                    <a
                      href="https://hackernews.vinext.workers.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cf-primary)] hover:underline"
                    >
                      hackernews.vinext.workers.dev
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-[var(--cf-border)]">
                  <td className="py-4">Nextra Docs</td>
                  <td className="py-4 text-[var(--cf-text-secondary)]">
                    Nextra docs site (MDX, App Router)
                  </td>
                  <td className="py-4">
                    <a
                      href="https://nextra-docs-template.vinext.workers.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cf-primary)] hover:underline"
                    >
                      nextra-docs-template.vinext.workers.dev
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-4">Benchmarks</td>
                  <td className="py-4 text-[var(--cf-text-secondary)]">
                    Build performance tracking (D1-backed)
                  </td>
                  <td className="py-4">
                    <a
                      href="https://benchmarks.vinext.workers.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--cf-primary)] hover:underline"
                    >
                      benchmarks.vinext.workers.dev
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
