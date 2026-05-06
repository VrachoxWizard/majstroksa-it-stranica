import { motion, useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactActions from '../shared/components/ContactActions';
import CTAButton from '../shared/components/CTAButton';
import Icon from '../shared/components/Icon';
import SectionHeader from '../shared/components/SectionHeader';
import Seo from '../shared/components/Seo';
import { PROCESS_STEPS, SERVICES, SITE } from '../shared/config/siteData';

export default function Services() {
  const reduceMotion = useReducedMotion();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash || window.location.hash;

    if (!hash) {
      return;
    }

    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const offset = 92;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 80);

    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="w-full bg-background-light">
      <Seo {...SITE.seo.services} />
      <section className="border-b quiet-rule bg-background-light">
        <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 lg:px-8 lg:py-16">
          <SectionHeader
            description="Ako problem nije na popisu, svejedno ga opišite. Najvažnije je prvo razumjeti situaciju i dogovoriti najpametniji sljedeći korak."
            label="Usluge"
            size="page"
            title="IT podrška za probleme koji ne smiju čekati."
          />
          <ContactActions className="mt-7" />
          <nav aria-label="Brzi odabir usluge" className="mt-9 flex gap-5 overflow-x-auto border-y quiet-rule py-4">
            {SERVICES.map((service) => (
              <a
                className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-primary transition hover:text-accent"
                href={service.href}
                key={service.id}
              >
                <Icon name={service.icon} className="h-4 w-4 text-accent" />
                {service.serviceNavLabel ?? service.shortTitle}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-surface py-4 lg:py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {SERVICES.map((service, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                className={`grid scroll-mt-24 gap-7 border-b quiet-rule py-12 last:border-b-0 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-16 ${
                  reverse ? 'lg:grid-cols-[1.08fr_0.92fr]' : ''
                }`}
                id={service.id}
                initial={false}
                key={service.id}
                transition={{ duration: 0.28 }}
                viewport={{ once: true }}
                whileInView={reduceMotion ? undefined : { y: 0 }}
              >
                <div
                  className={`media-frame ${
                    reverse ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    alt={service.title}
                    className="aspect-[16/10]"
                    height="900"
                    loading="lazy"
                    src={service.image}
                    width="1200"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-sage-100 text-primary">
                      <Icon name={service.icon} className="h-5 w-5" />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{service.shortTitle}</p>
                  </div>
                  <h2 className="font-display text-3xl font-semibold leading-tight text-primary sm:text-4xl">{service.title}</h2>
                  {service.ctaHint && <p className="mt-4 text-lg font-bold leading-8 text-slate-600">{service.ctaHint}</p>}
                  <p className="mt-3 text-lg leading-8 text-slate-700">{service.expectedOutcome}</p>
                  <div className="mt-7 border-l border-sage-200 pl-5">
                    <p className="text-sm font-bold text-primary">{service.customerProblem}</p>
                    <ul className="mt-4 grid gap-2">
                      {service.details.map((detail) => (
                        <li className="flex items-center gap-3 text-sm font-semibold text-slate-700" key={detail}>
                          <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <CTAButton href="/contact" icon="arrowRight" size="sm">
                      Zatraži pomoć
                    </CTAButton>
                    {service.priceNote && (
                      <p className="text-sm font-bold text-muted">{service.priceNote}</p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="bg-primary py-14 text-white lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay-100">Dogovor</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight">Tri koraka do rješenja</h2>
          </div>
          <div className="grid divide-y divide-white/14 border-y border-white/14 md:grid-cols-3 md:divide-x md:divide-y-0">
            {PROCESS_STEPS.map((step) => (
              <div className="py-6 md:px-6 md:first:pl-0 md:last:pr-0" key={step.step}>
                <p className="text-sm font-bold text-clay-100">{step.step}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/76">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
