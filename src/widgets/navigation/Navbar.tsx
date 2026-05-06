import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { NAV_LINKS, SERVICES, SITE } from '../../shared/config/siteData';
import CTAButton from '../../shared/components/CTAButton';
import { createWhatsAppHref } from '../../shared/lib/contactLinks';
import Icon from '../../shared/components/Icon';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    [
      'relative inline-flex h-10 items-center px-1 text-sm font-semibold transition',
      isActive
        ? 'text-primary after:absolute after:inset-x-1 after:bottom-0 after:h-px after:bg-accent'
        : 'text-slate-600 hover:text-primary after:absolute after:inset-x-1 after:bottom-0 after:h-px after:scale-x-0 after:bg-mist-200 after:transition-transform hover:after:scale-x-100',
    ].join(' ');

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    [
      'group relative flex min-h-12 items-center justify-between gap-4 py-1 font-display text-[2.1rem] font-semibold leading-tight text-white transition sm:text-[2.7rem]',
      isActive
        ? 'pl-5 before:absolute before:left-0 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-accent'
        : 'text-white/90 hover:pl-3 hover:text-white',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 border-b quiet-rule bg-surface/94 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:gap-5 lg:px-8">
        <Link
          aria-label={`${SITE.name} početna stranica`}
          className="group flex min-w-0 max-w-[calc(100vw-6.5rem)] items-center gap-3 text-primary lg:max-w-none"
          onClick={closeMenu}
          to="/"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white shadow-[0_8px_18px_rgba(20,52,52,0.14)] transition group-hover:-translate-y-0.5">
            <Icon name="computer" className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block max-w-[11.5rem] truncate text-base font-bold leading-tight sm:max-w-none sm:text-lg">
              <span className="sm:hidden">{SITE.shortName}</span>
              <span className="hidden sm:inline">{SITE.name}</span>
            </span>
            <span className="hidden text-xs font-semibold leading-tight text-muted lg:block">
              Lokalna IT podrška u Hrvatskoj
            </span>
          </span>
        </Link>

        <nav aria-label="Glavna navigacija" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink className={navClass} key={link.href} to={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            aria-label={`Nazovi ${SITE.phone}`}
            className="hidden items-center gap-2 text-left text-primary transition hover:text-accent xl:flex"
            href={SITE.phoneHref}
          >
            <Icon name="phone" className="h-4 w-4" />
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted">Brzi kontakt</span>
              <span className="text-sm font-bold">{SITE.phone}</span>
            </span>
          </a>
          <a
            aria-label={`Nazovi ${SITE.phone}`}
            className="hidden h-10 w-10 items-center justify-center rounded-md text-primary transition hover:bg-sage-100 hover:text-accent lg:inline-flex xl:hidden"
            href={SITE.phoneHref}
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
          <CTAButton className="h-10" external href={SITE.phoneHref} icon="phone" size="sm">
            {SITE.primaryCta}
          </CTAButton>
          <CTAButton className="h-10" external href={createWhatsAppHref()} icon="message" size="sm" variant="secondary">
            {SITE.secondaryCta}
          </CTAButton>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Zatvori navigaciju' : 'Otvori navigaciju'}
          aria-hidden={isOpen}
          className={`fixed right-5 top-3.5 z-[55] inline-flex h-10 w-10 items-center justify-center text-primary transition lg:hidden ${
            isOpen
              ? 'pointer-events-none opacity-0'
              : 'rounded-md bg-surface/85 backdrop-blur hover:bg-sage-100'
          }`}
          tabIndex={isOpen ? -1 : 0}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <Icon name={isOpen ? 'x' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            aria-modal="true"
            className="fixed bottom-0 left-0 right-0 top-0 z-[60] h-screen overflow-y-auto bg-primary text-white lg:hidden"
            exit={{ opacity: 0, y: -14 }}
            initial={{ opacity: 0, y: -14 }}
            role="dialog"
            style={{ height: '100vh' }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-primary" />
              <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,254,250,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(255,254,250,0.34)_1px,transparent_1px)] [background-size:38px_38px]" />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>

            <nav
              aria-label="Mobilna navigacija"
              className="relative z-10 mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-5 sm:px-10 sm:pb-12"
              id="mobile-navigation"
            >
              <div className="flex items-center justify-between gap-5">
                <Link
                  aria-label={`${SITE.name} početna stranica`}
                  className="flex min-w-0 items-center gap-3 text-white"
                  onClick={closeMenu}
                  to="/"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/14 text-white ring-1 ring-white/20 backdrop-blur">
                    <Icon name="computer" className="h-[18px] w-[18px]" />
                  </span>
                  <span className="truncate text-base font-bold sm:text-lg">{SITE.shortName}</span>
                </Link>

                <button
                  aria-controls="mobile-navigation"
                  aria-label="Zatvori navigaciju"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-white transition hover:bg-white/12 focus-visible:ring-white focus-visible:ring-offset-0"
                  onClick={closeMenu}
                  type="button"
                >
                  <Icon name="x" className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-12 grid gap-4 sm:mt-16">
                {NAV_LINKS.map((link) => (
                  <NavLink className={mobileNavClass} key={link.href} onClick={closeMenu} to={link.href}>
                    <span>{link.label}</span>
                    <Icon
                      name="arrowRight"
                      className="h-5 w-5 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </NavLink>
                ))}
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-white shadow-[0_16px_34px_rgba(20,52,52,0.18)] transition hover:bg-accent-soft"
                  href={SITE.phoneHref}
                  onClick={closeMenu}
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Nazovi odmah
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 text-sm font-bold text-white transition hover:bg-white/16"
                  href={createWhatsAppHref()}
                  onClick={closeMenu}
                >
                  <Icon name="message" className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-9 text-sm sm:mt-16 sm:max-w-xl">
                <div className="grid gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Usluge</p>
                  {SERVICES.slice(0, 4).map((service) => (
                    <Link
                      className="text-white/66 transition hover:text-white"
                      key={service.id}
                      onClick={closeMenu}
                      to={service.href}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>

                <div className="grid content-start gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white">Kontakt</p>
                  <a className="text-white/66 transition hover:text-white" href={SITE.phoneHref} onClick={closeMenu}>
                    {SITE.phone}
                  </a>
                  <a
                    className="text-white/66 transition hover:text-white"
                    href={SITE.whatsappHref}
                    onClick={closeMenu}
                  >
                    WhatsApp
                  </a>
                  <a
                    className="break-words text-white/66 transition hover:text-white"
                    href={SITE.emailHref}
                    onClick={closeMenu}
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="mt-auto grid gap-5 pt-12 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-extrabold">
                  <a className="text-white transition hover:text-clay-100" href={SITE.phoneHref} onClick={closeMenu}>
                    Nazovi
                  </a>
                  <a
                    className="text-white transition hover:text-clay-100"
                    href={SITE.whatsappHref}
                    onClick={closeMenu}
                  >
                    WhatsApp
                  </a>
                </div>
                <Link
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-bold text-white shadow-[0_16px_34px_rgba(20,52,52,0.18)] transition hover:bg-accent-soft sm:min-w-64"
                  onClick={closeMenu}
                  to="/contact"
                >
                  {SITE.contactCta}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
