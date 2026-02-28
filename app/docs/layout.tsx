import { DocsNav } from "./DocsNav";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-6xl gap-12 px-6 py-12">
      <aside className="hidden w-56 shrink-0 md:block">
        <DocsNav />
      </aside>
      <article className="min-w-0 flex-1">{children}</article>
    </div>
  );
}
