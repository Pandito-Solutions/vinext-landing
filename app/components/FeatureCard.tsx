type FeatureCardProps = {
  title: string;
  description: string;
  icon?: string;
  link?: string;
};

export function FeatureCard({
  title,
  description,
  icon = "◆",
  link,
}: FeatureCardProps) {
  const content = (
    <>
      <div className="mb-4 text-2xl text-[var(--cf-primary)]">{icon}</div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-[var(--cf-text-secondary)]">{description}</p>
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        target={link.startsWith("http") ? "_blank" : undefined}
        rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)]/50 p-6 transition-all hover:border-[var(--cf-primary)]/50 hover:bg-[var(--cf-bg-darker)]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="block rounded-xl border border-[var(--cf-border)] bg-[var(--cf-bg-darker)]/50 p-6">
      {content}
    </div>
  );
}
