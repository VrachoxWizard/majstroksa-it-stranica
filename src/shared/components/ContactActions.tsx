import { CONTACT_ACTIONS, SITE } from '../config/siteData';
import { createWhatsAppHref } from '../lib/contactLinks';
import CTAButton from './CTAButton';
import Icon from './Icon';

type ContactActionsProps = {
  className?: string;
  compact?: boolean;
  showHours?: boolean;
};

export default function ContactActions({ className = '', compact = false, showHours = true }: ContactActionsProps) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center ${className}`}>
      {CONTACT_ACTIONS.map((action) => (
        <CTAButton
          ariaLabel={`${action.label}: ${action.value}`}
          external
          href={action.icon === 'message' ? createWhatsAppHref() : action.href}
          icon={action.icon}
          key={action.label}
          size={compact ? 'sm' : 'lg'}
          variant={action.variant}
        >
          {action.label}
        </CTAButton>
      ))}
      {!compact && showHours && (
        <div className="flex min-h-10 items-center gap-2 border-l border-sage-200 pl-3 text-sm font-bold text-muted">
          <Icon name="clock" className="h-4 w-4 text-accent" />
          <span className="whitespace-nowrap">{SITE.hours}</span>
        </div>
      )}
    </div>
  );
}
