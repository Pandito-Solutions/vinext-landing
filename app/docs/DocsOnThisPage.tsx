'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Heading = { id: string; text: string; level: 2 | 3 };

function collectHeadings(): Heading[] {
  const article = document.querySelector('[data-docs-article]');
  if (!article) return [];

  const els = article.querySelectorAll<HTMLHeadingElement>('h2[id], h3[id]');
  const items: Heading[] = [];
  els.forEach((el) => {
    const id = el.id;
    const text = el.textContent?.trim() ?? '';
    if (id && text) {
      items.push({
        id,
        text,
        level: el.tagName === 'H2' ? 2 : 3,
      });
    }
  });
  return items;
}

export function DocsOnThisPage() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    setHeadings([]);
    setActiveId(null);

    const run = () => {
      const items = collectHeadings();
      setHeadings(items);
      if (items.length > 0) setActiveId(items[0].id);
    };

    run();
    const t1 = setTimeout(run, 0);
    const t2 = setTimeout(run, 100);

    const article = document.querySelector('[data-docs-article]');
    if (!article)
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };

    const observer = new MutationObserver(() => {
      const items = collectHeadings();
      setHeadings(items);
      if (items.length > 0) setActiveId((prev) => prev ?? items[0].id);
    });

    observer.observe(article, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (headings.length === 0) return;

    const article = document.querySelector('[data-docs-article]');
    if (!article) return;

    const els = article.querySelectorAll<HTMLHeadingElement>('h2[id], h3[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: '-80px 0px -66% 0px',
        threshold: 0,
      }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden w-48 shrink-0 lg:block" aria-label="On this page">
      <nav className="sticky top-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--cf-text-secondary)]">
          On this page
        </p>
        <ul className="space-y-2">
          {headings.map(({ id, text, level }) => (
            <li
              key={id}
              style={level === 3 ? { paddingLeft: '0.75rem' } : undefined}
            >
              <a
                href={`#${id}`}
                className={`block text-sm transition-colors hover:text-[var(--cf-primary)] ${
                  activeId === id
                    ? 'text-[var(--cf-primary)] font-medium'
                    : 'text-[var(--cf-text-secondary)]'
                }`}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
