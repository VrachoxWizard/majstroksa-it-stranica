import { Link } from 'react-router-dom';
import type { IconName } from '../types';
import Icon from './Icon';

type CTAButtonProps = {
  children: string;
  href: string;
  icon?: IconName;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

const variantClass = {
  primary:
    'bg-primary text-white shadow-[0_12px_28px_rgba(20,52,52,0.16)] hover:bg-accent hover:shadow-[0_16px_34px_rgba(20,52,52,0.2)]',
  secondary:
    'border border-sage-200 bg-surface text-primary shadow-[0_8px_18px_rgba(20,52,52,0.045)] hover:border-primary/50 hover:bg-white',
  ghost: 'text-primary hover:bg-sage-100/70',
};

const sizeClass = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-11 px-5 text-[0.95rem]',
  lg: 'min-h-12 px-6 text-base',
};

export default function CTAButton({
  children,
  href,
  icon,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  ariaLabel,
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md font-bold leading-none transition ${variantClass[variant]} ${sizeClass[size]} ${className}`;
  const content = (
    <>
      {icon && <Icon name={icon} className="h-4.5 w-4.5" />}
      <span>{children}</span>
    </>
  );

  if (external || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('https:')) {
    return (
      <a aria-label={ariaLabel} className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link aria-label={ariaLabel} className={classes} to={href}>
      {content}
    </Link>
  );
}
