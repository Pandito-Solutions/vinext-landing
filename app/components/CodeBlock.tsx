export function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="overflow-x-auto rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)] px-6 py-4 text-left text-sm">
      <code className="font-mono text-[var(--cf-text-primary)]">
        {children}
      </code>
    </pre>
  );
}
