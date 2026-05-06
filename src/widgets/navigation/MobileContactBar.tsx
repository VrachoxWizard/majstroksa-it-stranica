import { SITE } from '../../shared/config/siteData';
import { createWhatsAppHref } from '../../shared/lib/contactLinks';
import Icon from '../../shared/components/Icon';

export default function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t quiet-rule bg-surface/94 px-4 pb-[calc(0.55rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_22px_rgba(20,52,52,0.08)] backdrop-blur lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          aria-label={`Nazovi ${SITE.phone}`}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-bold text-white transition hover:bg-accent"
          href={SITE.phoneHref}
        >
          <Icon name="phone" className="h-4 w-4" />
          Nazovi
        </a>
        <a
          aria-label="Otvori WhatsApp poruku"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-sage-200 bg-background-light px-4 text-sm font-bold text-primary transition hover:border-primary/40 hover:bg-surface"
          href={createWhatsAppHref()}
        >
          <Icon name="message" className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
