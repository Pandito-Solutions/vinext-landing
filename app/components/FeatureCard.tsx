type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  link?: string;
};

export function FeatureCard({
  title,
  description,
  icon = '◆',
  link,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="feature-card-icon mb-4 text-2xl text-[var(--cf-primary)] transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-[var(--cf-text-secondary)]">{description}</p>
    </>
  );

  const cardClassName =
    'group feature-card block rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)]/50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--cf-primary)]/50 hover:shadow-[0_0_20px_rgba(252,124,30,0.15)]';

  if (link) {
    return (
      <a
        href={link}
        target={link.startsWith('http') ? '_blank' : undefined}
        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={cardClassName}
      >
        {content}
      </a>
    );
  }

  return <div className={cardClassName}>{content}</div>;
}
