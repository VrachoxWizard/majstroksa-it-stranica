import { Link } from 'react-router-dom';
import { HERO_DATA, LOCAL_PROOF, SERVICES, SITE } from '../../shared/config/siteData';
import ContactActions from '../../shared/components/ContactActions';
import Icon from '../../shared/components/Icon';

export default function HeroSection() {
  return (
    <section className="w-full border-b quiet-rule bg-background-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-24 pt-12 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-bold text-accent">{HERO_DATA.trustText}</p>
          <h1 className="display-hero text-balance font-display font-semibold text-primary">
            {HERO_DATA.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">{HERO_DATA.subtitle}</p>
          <ContactActions className="mt-7" />

          <div className="mt-9 grid border-y quiet-rule sm:grid-cols-3">
            {LOCAL_PROOF.map((item) => (
              <div
                className="border-b quiet-rule py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"
                key={item.label}
              >
                <div className="flex items-center gap-2 text-accent">
                  <Icon name={item.icon} className="h-4 w-4" />
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em]">{item.label}</p>
                </div>
                <p className="mt-2 text-sm font-bold leading-6 text-primary">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:self-stretch">
          <div className="media-frame lg:h-full">
            <img
              alt="Lokalna PC i laptop pomoć u Zagrebu"
              className="aspect-[5/4] object-[45%_50%] lg:h-full"
              fetchPriority="high"
              height="960"
              src={SITE.heroImage}
              width="1200"
            />
          </div>
          <div className="mt-4 border-l border-accent bg-surface p-5 shadow-soft lg:absolute lg:-bottom-6 lg:left-8 lg:mt-0 lg:max-w-md">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-moss-100 text-primary">
                <Icon name="shield" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-primary">Prvo procjena, pa dogovor prije rada.</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Ako se popravak ne isplati ili problem nije za mene, reći ću vam to otvoreno.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 grid gap-3 border border-sage-200 bg-background-light/95 p-4 shadow-soft lg:absolute lg:-right-4 lg:top-10 lg:mt-0 lg:max-w-[15rem]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Najčešći problemi</p>
            {SERVICES.slice(0, 3).map((service) => (
              <Link className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent" key={service.id} to={service.href}>
                <Icon name={service.icon} className="h-4 w-4 shrink-0" />
                {service.shortTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
