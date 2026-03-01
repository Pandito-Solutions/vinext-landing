import { Hero } from './components/Hero';
import { FeatureCard } from './components/FeatureCard';
import { AnimateOnScroll } from './components/AnimateOnScroll';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              What&apos;s in vinext?
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            staggerChildren
          >
            <FeatureCard
              title="AI-assisted migration"
              description='Agent Skill for Cursor, Claude Code, OpenCode, Codex, and others. Say "migrate this project to vinext" and the AI handles compatibility checks, config, and dev server.'
              icon="🤖"
            />
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
          </AnimateOnScroll>
        </div>
      </section>

      <section className="border-y border-[var(--cf-border)] bg-[var(--cf-bg-darker)] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="mb-10 text-center text-2xl font-bold text-white">
              Built for speed
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll
            className="grid gap-8 md:grid-cols-2"
            staggerChildren
          >
            <div className="speed-card rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-dark)]/80 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[var(--cf-primary)]/30 hover:shadow-[0_0_24px_rgba(252,124,30,0.1)]">
              <p className="text-4xl font-bold text-[var(--cf-primary)]">
                4.4× faster
              </p>
              <p className="mt-2 text-[var(--cf-text-secondary)]">
                Production builds vs Next.js 16 (Vite 8 / Rolldown)
              </p>
            </div>
            <div className="speed-card rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-dark)]/80 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-[var(--cf-primary)]/30 hover:shadow-[0_0_24px_rgba(252,124,30,0.1)]">
              <p className="text-4xl font-bold text-[var(--cf-primary)]">
                57% smaller
              </p>
              <p className="mt-2 text-[var(--cf-text-secondary)]">
                Client bundle size (gzipped) vs Next.js 16
              </p>
            </div>
          </AnimateOnScroll>
          <p className="mt-6 text-center text-sm text-[var(--cf-text-secondary)]">
            <a
              href="https://benchmarks.vinext.workers.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
            >
              View full benchmarks →
            </a>
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll animation="fade-in-up">
            <h2 className="mb-10 text-center text-2xl font-bold text-white">
              Live examples
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fade-in-up">
            <div className="overflow-x-auto rounded-xl border border-[var(--cf-border)]/80">
              <table className="examples-table w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="border-b border-[var(--cf-border)] bg-[var(--cf-bg-darker)]/50">
                    <th className="py-4 pl-6 text-left font-semibold text-white">
                      Example
                    </th>
                    <th className="py-4 text-left font-semibold text-white">
                      Description
                    </th>
                    <th className="py-4 pr-6 text-left font-semibold text-white">
                      URL
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="examples-table-row border-b border-[var(--cf-border)]/60 transition-colors duration-200 hover:bg-[var(--cf-bg-darker)]/30">
                    <td className="py-4 pl-6 font-medium text-white">
                      App Router Playground
                    </td>
                    <td className="py-4 text-[var(--cf-text-secondary)]">
                      Vercel&apos;s Next.js App Router Playground on vinext
                    </td>
                    <td className="py-4 pr-6">
                      <a
                        href="https://app-router-playground.vinext.workers.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
                      >
                        app-router-playground.vinext.workers.dev
                      </a>
                    </td>
                  </tr>
                  <tr className="examples-table-row border-b border-[var(--cf-border)]/60 transition-colors duration-200 hover:bg-[var(--cf-bg-darker)]/30">
                    <td className="py-4 pl-6 font-medium text-white">
                      Hacker News
                    </td>
                    <td className="py-4 text-[var(--cf-text-secondary)]">
                      HN clone (App Router, RSC)
                    </td>
                    <td className="py-4 pr-6">
                      <a
                        href="https://hackernews.vinext.workers.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
                      >
                        hackernews.vinext.workers.dev
                      </a>
                    </td>
                  </tr>
                  <tr className="examples-table-row border-b border-[var(--cf-border)]/60 transition-colors duration-200 hover:bg-[var(--cf-bg-darker)]/30">
                    <td className="py-4 pl-6 font-medium text-white">
                      Nextra Docs
                    </td>
                    <td className="py-4 text-[var(--cf-text-secondary)]">
                      Nextra docs site (MDX, App Router)
                    </td>
                    <td className="py-4 pr-6">
                      <a
                        href="https://nextra-docs-template.vinext.workers.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
                      >
                        nextra-docs-template.vinext.workers.dev
                      </a>
                    </td>
                  </tr>
                  <tr className="examples-table-row transition-colors duration-200 hover:bg-[var(--cf-bg-darker)]/30">
                    <td className="py-4 pl-6 font-medium text-white">
                      Benchmarks
                    </td>
                    <td className="py-4 text-[var(--cf-text-secondary)]">
                      Build performance tracking (D1-backed)
                    </td>
                    <td className="py-4 pr-6">
                      <a
                        href="https://benchmarks.vinext.workers.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
                      >
                        benchmarks.vinext.workers.dev
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
