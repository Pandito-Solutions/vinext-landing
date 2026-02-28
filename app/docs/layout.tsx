import { DocsNav } from "./DocsNav";
import { DocsOnThisPage } from "./DocsOnThisPage";
import { DocsVersion } from "./DocsVersion";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-7xl gap-12 px-6 py-12">
      <aside className="hidden w-56 shrink-0 md:block">
        <DocsVersion />
        <DocsNav />
      </aside>
      <article
        className="min-w-0 flex-1"
        data-docs-article
      >
        {children}
      </article>
      <DocsOnThisPage />
    </div>
  );
}
