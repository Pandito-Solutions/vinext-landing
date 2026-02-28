import Link from "next/link";
import { CodeBlock } from "./CodeBlock";
import { CTAButton } from "./CTAButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cf-primary)]/5 to-transparent" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
          The Next.js API, reimplemented on Vite
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-[var(--cf-text-secondary)]">
          Build faster. Ship smaller. Deploy anywhere.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
        <div className="mt-16">
          <CodeBlock>
            <span className="text-gray-400">$</span> npx vinext init
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}
