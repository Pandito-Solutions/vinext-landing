import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-white">Features</h1>
      <p className="mb-8 text-lg text-[var(--cf-text-secondary)]">
        ~94% of the Next.js 16 API surface has full or partial support.
      </p>

      <h2 id="ai-coding-tool-integration" className="mt-10 text-xl font-semibold text-white">
        AI coding tool integration
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        vinext is designed to work with AI code development tools. An{" "}
        <a
          href="https://agentskills.io/home"
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
        >
          Agent Skill
        </a>{" "}
        handles migration for Claude Code, OpenCode, Cursor, Codex, and dozens
        of other tools. Install it, open your Next.js project, and say
        &quot;migrate this project to vinext&quot; — the AI handles the rest.{" "}
        <Link
          href="/docs/installation#quick-start-ai-migration"
          className="link-underline-hover text-[var(--cf-primary)] transition-colors hover:text-[var(--cf-primary-light)]"
        >
          See installation
        </Link>
        .
      </p>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        If you run into issues, the vinext team recommends using your AI agent
        to debug: open the project in Claude Code, Cursor, OpenCode, or your
        preferred tool and ask it to figure out why the app isn&apos;t working.
        Agents are very good at tracing through the vinext source and producing
        fixes or clear diagnoses.
      </p>

      <h2 id="module-shims-next" className="mt-10 text-xl font-semibold text-white">
        Module shims (next/*)
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        Every next/* import is shimmed to a Vite-compatible implementation.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-[var(--cf-border)]">
              <th className="py-3 text-left font-semibold text-white">Module</th>
              <th className="py-3 text-left font-semibold text-white">
                Support
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ["next/link", "✓"],
              ["next/navigation", "✓"],
              ["next/server", "✓"],
              ["next/headers", "✓"],
              ["next/cache", "✓"],
              ["next/image", "Partial"],
              ["next/dynamic", "✓"],
              ["next/script", "✓"],
              ["next/og", "✓"],
              ["next/form", "✓"],
            ].map(([mod, sup]) => (
              <tr
                key={mod}
                className="border-b border-[var(--cf-border)]"
              >
                <td className="py-2 font-mono">{mod}</td>
                <td className="py-2 text-[var(--cf-text-secondary)]">{sup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="routing" className="mt-10 text-xl font-semibold text-white">Routing</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--cf-text-secondary)]">
        <li>File-system routing (pages/ and app/)</li>
        <li>Dynamic routes [param], catch-all [...slug]</li>
        <li>Route groups, parallel routes, intercepting routes</li>
        <li>Route handlers (route.ts)</li>
        <li>Middleware (middleware.ts, proxy.ts)</li>
        <li>basePath, trailingSlash</li>
      </ul>

      <h2 id="server-features" className="mt-10 text-xl font-semibold text-white">
        Server features
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--cf-text-secondary)]">
        <li>SSR (Pages Router and App Router)</li>
        <li>React Server Components via @vitejs/plugin-rsc</li>
        <li>Server Actions (&quot;use server&quot;)</li>
        <li>ISR with pluggable CacheHandler</li>
        <li>&quot;use cache&quot; directive with cacheLife() and cacheTag()</li>
        <li>Metadata API, generateMetadata</li>
        <li>Streaming SSR</li>
        <li>generateStaticParams, getStaticProps, getServerSideProps</li>
      </ul>

      <h2 id="design-principles" className="mt-10 text-xl font-semibold text-white">
        Design principles
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--cf-text-secondary)]">
        <li>
          <strong className="text-white">Cloudflare-first:</strong> Workers is
          the current deployment target.
        </li>
        <li>
          <strong className="text-white">Pragmatic compatibility:</strong>{" "}
          Targets 95%+ of real-world apps, not bug-for-bug parity.
        </li>
        <li>
          <strong className="text-white">Latest Next.js only:</strong> Targets
          Next.js 16.x.
        </li>
        <li>
          <strong className="text-white">Incremental adoption:</strong> Drop in
          the plugin, fix what breaks, deploy.
        </li>
      </ul>
    </div>
  );
}
