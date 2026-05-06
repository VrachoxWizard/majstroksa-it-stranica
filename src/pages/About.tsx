import ContactActions from '../shared/components/ContactActions';
import Icon from '../shared/components/Icon';
import SectionHeader from '../shared/components/SectionHeader';
import Seo from '../shared/components/Seo';
import { PROCESS_STEPS, SITE, TESTIMONIALS } from '../shared/config/siteData';

const principles = [
  ['Bez žargona', 'Objasnimo problem običnim jezikom, tako da znate što se događa s uređajem.'],
  ['Jasan dogovor', 'Prije rada dogovaramo korake, očekivanja i okvir troška.'],
  ['Lokalni fokus', 'Primarno radimo s korisnicima u Zagrebu i okolici, uz daljinsku pomoć kada ima smisla.'],
];

export default function About() {
  return (
    <div className="w-full bg-background-light">
      <Seo {...SITE.seo.about} />
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
        <div className="self-center">
          <p className="section-label">O meni</p>
          <h1 className="display-page mt-4 font-display font-semibold text-primary">
            Normalna IT pomoć, bez panike i bez kompliciranja.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            {SITE.name} je lokalna pomoć za ljude kojima treba jednostavno, jasno i pošteno rješenje za svakodnevne
            probleme s računalom. Fokus je na normalnoj komunikaciji, realnoj procjeni i objašnjenju bez tehničkog
            žargona.
          </p>
          <ContactActions className="mt-8" compact />
        </div>
        <div className="media-frame">
          <img
            alt="Radni prostor za lokalnu IT podršku"
            className="aspect-[4/3] object-[52%_50%]"
            height="900"
            loading="lazy"
            src={SITE.aboutImage}
            width="1200"
          />
        </div>
      </section>

      <section className="border-y quiet-rule bg-surface">
        <div className="mx-auto grid max-w-7xl divide-y quiet-rule px-5 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:px-8">
          {principles.map(([title, text], index) => (
            <div className="py-8 lg:px-8 lg:first:pl-0 lg:last:pr-0" key={title}>
              <div className="flex items-start gap-4">
                <span className="mt-1 text-sm font-bold text-accent">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-primary">{title}</h2>
                  <p className="mt-3 leading-7 text-slate-700">{text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-18">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeader label="Proces" size="compact" title="Kako izgleda suradnja" />
          <div className="grid border-t quiet-rule">
            {PROCESS_STEPS.map((step) => (
              <div className="grid gap-4 border-b quiet-rule py-5 sm:grid-cols-[4rem_1fr]" key={step.step}>
                <p className="text-sm font-bold text-accent">{step.step}</p>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <p className="mb-5 text-sm font-semibold text-muted">
          Napomena: ispod su tipične situacije i što možete očekivati tijekom dogovora.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial) => (
            <figure className="border-l border-accent bg-surface px-6 py-5 shadow-soft" key={testimonial.id}>
              <Icon name="check" className="mb-4 h-5 w-5 text-accent" />
              <blockquote className="text-lg leading-8 text-slate-700">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-5 font-bold text-primary">{testimonial.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
