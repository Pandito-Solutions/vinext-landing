"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/features", label: "Features" },
  { href: "/docs/deployment", label: "Deployment" },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-24 space-y-1">
      {links.map(({ href, label }) => {
        const isActive =
          href === "/docs"
            ? pathname === "/docs"
            : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`block rounded-lg px-4 py-2 text-sm ${
              isActive
                ? "bg-[var(--cf-bg-darker)] text-[var(--cf-primary)]"
                : "text-[var(--cf-text-secondary)] hover:bg-[var(--cf-bg-darker)] hover:text-[var(--cf-primary)]"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
