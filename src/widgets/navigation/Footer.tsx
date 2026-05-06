import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../../shared/config/siteData';
import { createWhatsAppHref } from '../../shared/lib/contactLinks';

export default function Footer() {
  return (
    <footer className="mt-auto border-t quiet-rule bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid gap-7 md:grid-cols-[1.1fr_auto_auto] md:items-start">
          <div>
            <p className="text-base font-bold text-primary">{SITE.name}</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Lokalna IT podrška za dom i male tvrtke u Zagrebu i okolici, s jasnim dogovorom prije rada.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Navigacija u podnožju">
            {NAV_LINKS.map((link) => (
              <Link className="text-sm font-bold text-slate-600 transition-colors hover:text-primary" key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="grid gap-1 text-sm font-semibold text-slate-600 md:text-right">
            <a className="text-primary transition-colors hover:text-accent" href={SITE.phoneHref}>
              {SITE.phone}
            </a>
            <a className="transition-colors hover:text-primary" href={createWhatsAppHref()}>
              WhatsApp
            </a>
            <a className="transition-colors hover:text-primary" href={SITE.emailHref}>
              {SITE.email}
            </a>
          </div>
        </div>

        <p className="mt-7 border-t quiet-rule pt-5 text-xs font-semibold text-muted">
          © 2026 {SITE.name}. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
}
