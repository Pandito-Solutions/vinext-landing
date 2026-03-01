'use client';

import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  external?: boolean;
};

export function CTAButton({
  href,
  children,
  primary = true,
  external = false,
}: CTAButtonProps) {
  const className = primary
    ? 'cta-primary-hover rounded-lg bg-[var(--cf-primary)] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02]'
    : 'rounded-lg border border-[var(--cf-border)] px-6 py-3 font-medium text-[var(--cf-text-primary)] transition-all duration-300 hover:scale-[1.02] hover:border-[var(--cf-primary)] hover:text-[var(--cf-primary)]';

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
