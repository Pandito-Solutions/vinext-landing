const VINEXT_TAGS_API = 'https://api.github.com/repos/cloudflare/vinext/tags';

export async function DocsVersion() {
  let version: string;
  try {
    const res = await fetch(VINEXT_TAGS_API, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch tags');
    const tags: { name: string }[] = await res.json();
    version = tags[0]?.name ?? 'Latest';
  } catch {
    version = 'Latest';
  }

  return (
    <div className="mb-6">
      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--cf-text-secondary)]">
        Latest Version
      </p>
      <p className="font-mono text-sm font-medium text-white">{version}</p>
    </div>
  );
}
