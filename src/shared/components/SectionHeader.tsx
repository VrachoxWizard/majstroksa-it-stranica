type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  size?: 'page' | 'section' | 'compact';
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  size = 'section',
  className = '',
}: SectionHeaderProps) {
  const titleClass = {
    page: 'display-page',
    section: 'display-section',
    compact: 'text-2xl sm:text-3xl',
  };

  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} min-w-0 max-w-3xl ${className}`}>
      {label && <p className="section-label">{label}</p>}
      <h2 className={`mt-3 font-semibold leading-[1.08] text-primary ${titleClass[size]}`}>{title}</h2>
      {description && <p className="mt-4 max-w-[34ch] text-base leading-7 text-slate-700 sm:max-w-none sm:text-lg sm:leading-8">{description}</p>}
    </div>
  );
}
