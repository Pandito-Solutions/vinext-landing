import { CodeBlock } from "@/app/components/CodeBlock";

export default function DeploymentPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-white">Deployment</h1>
      <p className="mb-8 text-lg text-[var(--cf-text-secondary)]">
        vinext deploys to Cloudflare Workers with a single command.
      </p>

      <h2 id="deploy-to-cloudflare-workers" className="mt-10 text-xl font-semibold text-white">
        Deploy to Cloudflare Workers
      </h2>
      <CodeBlock>
        vinext deploy
      </CodeBlock>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        This builds the app, auto-generates wrangler config and worker entry if
        needed, and deploys. Use <code>--env staging</code> for staging.
      </p>

      <h2 id="production-caching-isr" className="mt-10 text-xl font-semibold text-white">
        Production caching (ISR)
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        Use the Cloudflare KV cache handler for Incremental Static Regeneration:
      </p>
      <CodeBlock>
        {`import { KVCacheHandler } from "vinext/cloudflare";
import { setCacheHandler } from "next/cache";

setCacheHandler(new KVCacheHandler(env.MY_KV_NAMESPACE));`}
      </CodeBlock>

      <h2 id="traffic-aware-pre-rendering" className="mt-10 text-xl font-semibold text-white">
        Traffic-aware Pre-Rendering (experimental)
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        TPR pre-renders only pages that get traffic, using Cloudflare zone
        analytics:
      </p>
      <CodeBlock>
        vinext deploy --experimental-tpr
      </CodeBlock>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        Options: <code>--tpr-coverage 95</code>, <code>--tpr-limit 500</code>,{" "}
        <code>--tpr-window 48</code>. Requires a custom domain and API token
        with Zone.Analytics.
      </p>

      <h2 id="custom-vite-config-for-workers" className="mt-10 text-xl font-semibold text-white">
        Custom Vite config for Workers
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        For App Router + Cloudflare Workers, you may need:
      </p>
      <CodeBlock>
        {`import { defineConfig } from "vite";
import vinext from "vinext";
import rsc from "@vitejs/plugin-rsc";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    vinext(),
    rsc({
      entries: {
        rsc: "virtual:vinext-rsc-entry",
        ssr: "virtual:vinext-app-ssr-entry",
        client: "virtual:vinext-app-browser-entry",
      },
    }),
    cloudflare({
      viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
    }),
  ],
});`}
      </CodeBlock>

      <h2 id="cloudflare-agents" className="mt-10 text-xl font-semibold text-white">
        Cloudflare Agents
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        vinext runs entirely in workerd during both dev and deploy, so you can
        use Cloudflare Agents (Durable Objects, AI bindings, and other
        platform-specific APIs) without <code>getPlatformProxy</code>{" "}
        workarounds. See the{" "}
        <a
          href="https://github.com/cloudflare/vinext-agents-example"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--cf-primary)] hover:underline"
        >
          vinext-agents-example
        </a>{" "}
        repo and the live demo at{" "}
        <a
          href="https://next-agents.threepointone.workers.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--cf-primary)] hover:underline"
        >
          next-agents.threepointone.workers.dev
        </a>
        .
      </p>

      <h2 id="live-examples" className="mt-10 text-xl font-semibold text-white">
        Live examples
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--cf-text-secondary)]">
        <li>
          <a
            href="https://app-router-playground.vinext.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cf-primary)] hover:underline"
          >
            App Router Playground
          </a>
        </li>
        <li>
          <a
            href="https://hackernews.vinext.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cf-primary)] hover:underline"
          >
            Hacker News
          </a>
        </li>
        <li>
          <a
            href="https://nextra-docs-template.vinext.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cf-primary)] hover:underline"
          >
            Nextra Docs
          </a>
        </li>
        <li>
          <a
            href="https://benchmarks.vinext.workers.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--cf-primary)] hover:underline"
          >
            Benchmarks
          </a>
        </li>
      </ul>
    </div>
  );
}
