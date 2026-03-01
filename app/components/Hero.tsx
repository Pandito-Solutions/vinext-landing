import Link from 'next/link';
import { CodeBlock } from './CodeBlock';
import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{ background: 'var(--cf-gradient-hero)' }}
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1
          className="hero-animate-delay-0 text-4xl font-bold leading-tight tracking-tight text-white animate-fade-in-up md:text-5xl lg:text-6xl"
          style={{ animationFillMode: 'both' }}
        >
          The Next.js API, reimplemented on Vite
        </h1>
        <p
          className="hero-animate-delay-200 mx-auto mt-6 max-w-2xl text-xl text-[var(--cf-text-secondary)] animate-fade-in-up"
          style={{ animationFillMode: 'both' }}
        >
          Build faster. Ship smaller. Deploy anywhere.
        </p>
        <div
          className="hero-animate-delay-300 mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationFillMode: 'both' }}
        >
          <CTAButton href="/docs/installation" primary>
            Get Started
          </CTAButton>
          <CTAButton
            href="https://blog.cloudflare.com/vinext/"
            external
            primary={false}
          >
            Read the story
          </CTAButton>
        </div>
        <div
          className="hero-animate-delay-500 mt-16 animate-fade-in-up"
          style={{ animationFillMode: 'both' }}
        >
          <CodeBlock>
            <span className="text-gray-400">$</span> npx vinext init
          </CodeBlock>
          <p className="mt-4 text-sm text-[var(--cf-text-secondary)]">
            Using Cursor, Claude Code, or OpenCode?{' '}
            <Link
              href="/docs/installation#quick-start-ai-migration"
              className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
            >
              Use the migration skill instead
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
