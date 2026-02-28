import { CodeBlock } from "@/app/components/CodeBlock";

export default function InstallationPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-white">Installation</h1>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Quick start (AI migration)
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        vinext includes an Agent Skill that handles migration for you. It works
        with Claude Code, OpenCode, Cursor, and other AI coding tools.
      </p>
      <CodeBlock>
        npx skills add cloudflare/vinext
      </CodeBlock>
      <p className="mt-4 text-sm text-[var(--cf-text-secondary)]">
        Then open your Next.js project and tell the AI: &quot;migrate this
        project to vinext&quot;
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Manual installation
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        Install vinext and replace <code>next</code> in your scripts:
      </p>
      <CodeBlock>
        npm install vinext
      </CodeBlock>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        Update <code>package.json</code> scripts:
      </p>
      <CodeBlock>
        {`{
  "scripts": {
    "dev": "vinext dev",
    "build": "vinext build",
    "start": "vinext start"
  }
}`}
      </CodeBlock>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        vinext auto-detects your <code>app/</code> or <code>pages/</code>{" "}
        directory and <code>next.config.js</code>. No vite.config.ts required for
        basic usage.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">
        New vinext project
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        Create a Next.js project, then migrate:
      </p>
      <CodeBlock>
        npm create next-app@latest
      </CodeBlock>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        Then run:
      </p>
      <CodeBlock>
        npx vinext init
      </CodeBlock>

      <h2 className="mt-10 text-xl font-semibold text-white">
        Migrating an existing Next.js project
      </h2>
      <p className="mt-2 text-[var(--cf-text-secondary)]">
        <code>vinext init</code> automates the migration. It will:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--cf-text-secondary)]">
        <li>Run vinext check for compatibility issues</li>
        <li>Install vite and @vitejs/plugin-rsc</li>
        <li>Rename CJS config files to .cjs</li>
        <li>Add &quot;type&quot;: &quot;module&quot; to package.json</li>
        <li>Add dev:vinext and build:vinext scripts</li>
        <li>Generate a minimal vite.config.ts</li>
      </ul>
      <p className="mt-4 text-[var(--cf-text-secondary)]">
        Options: <code>--force</code> to overwrite vite.config.ts,{" "}
        <code>--skip-check</code> to skip compatibility scan.
      </p>

      <h2 className="mt-10 text-xl font-semibold text-white">CLI reference</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-[var(--cf-border)]">
              <th className="py-3 text-left font-semibold text-white">
                Command
              </th>
              <th className="py-3 text-left font-semibold text-white">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="border-b border-[var(--cf-border)]">
              <td className="py-3 font-mono">vinext dev</td>
              <td className="py-3 text-[var(--cf-text-secondary)]">
                Start dev server with HMR
              </td>
            </tr>
            <tr className="border-b border-[var(--cf-border)]">
              <td className="py-3 font-mono">vinext build</td>
              <td className="py-3 text-[var(--cf-text-secondary)]">
                Production build (RSC + SSR + client)
              </td>
            </tr>
            <tr className="border-b border-[var(--cf-border)]">
              <td className="py-3 font-mono">vinext start</td>
              <td className="py-3 text-[var(--cf-text-secondary)]">
                Start local production server
              </td>
            </tr>
            <tr className="border-b border-[var(--cf-border)]">
              <td className="py-3 font-mono">vinext deploy</td>
              <td className="py-3 text-[var(--cf-text-secondary)]">
                Build and deploy to Cloudflare Workers
              </td>
            </tr>
            <tr className="border-b border-[var(--cf-border)]">
              <td className="py-3 font-mono">vinext init</td>
              <td className="py-3 text-[var(--cf-text-secondary)]">
                Migrate Next.js project to vinext
              </td>
            </tr>
            <tr>
              <td className="py-3 font-mono">vinext check</td>
              <td className="py-3 text-[var(--cf-text-secondary)]">
                Scan for compatibility issues
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
