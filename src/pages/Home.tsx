import React from 'react';
import ContactActions from '../shared/components/ContactActions';
import Icon from '../shared/components/Icon';
import SectionHeader from '../shared/components/SectionHeader';
import Seo from '../shared/components/Seo';
import { FAQ_ITEMS, PROCESS_STEPS, SITE } from '../shared/config/siteData';
import HeroSection from '../widgets/home/HeroSection';
import ServicesGrid from '../widgets/home/ServicesGrid';
import TrustBadges from '../widgets/home/TrustBadges';

export default function Home() {
  return (
    <React.Fragment>
      <Seo {...SITE.seo.home} />
      <HeroSection />
      <TrustBadges />
      <ServicesGrid />
      <section className="bg-primary py-14 text-white lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay-100">Kako ide dogovor</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">Tri mirna koraka prije rada.</h2>
          </div>
          <div className="grid divide-y divide-white/14 border-y border-white/14 md:grid-cols-3 md:divide-x md:divide-y-0">
            {PROCESS_STEPS.map((step) => (
              <div className="py-6 md:px-6 md:first:pl-0 md:last:pr-0" key={step.step}>
                <p className="text-sm font-bold text-clay-100">{step.step}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/76">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface py-14 lg:py-18">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <SectionHeader
            description="Najlakše je početi kratkim pozivom ili WhatsApp porukom. Ako je problem hitan, telefon je najbrži put."
            label="Pitanja prije poziva"
            size="compact"
            title="Jasan dogovor je dio usluge."
          />
          <div className="grid border-t quiet-rule">
            {FAQ_ITEMS.map((item) => (
              <div className="border-b quiet-rule py-5" key={item.question}>
                <h3 className="flex items-start gap-3 text-lg font-bold text-primary">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
              </div>
            ))}
            <div className="bg-background-light p-5 shadow-soft">
              <p className="text-sm font-bold text-primary">{SITE.serviceArea} · {SITE.hours}</p>
              <ContactActions className="mt-4" compact />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
