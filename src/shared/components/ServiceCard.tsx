import { Link } from 'react-router-dom';
import type { ServiceProps } from '../types';
import Icon from './Icon';

type ServiceCardProps = {
  service: ServiceProps;
  index: number;
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="group grid gap-5 py-7 transition sm:grid-cols-[3rem_1fr_auto] sm:items-start">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-sage-100 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon name={service.icon} className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{String(index + 1).padStart(2, '0')} / {service.shortTitle}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-primary">{service.title}</h3>
        <p className="mt-4 text-sm font-semibold leading-6 text-slate-600">{service.customerProblem}</p>
        <p className="mt-3 leading-7 text-slate-700">{service.heroSummary ?? service.expectedOutcome}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
          {service.details.slice(0, 2).map((detail) => (
            <span className="border-l border-sage-200 pl-3 text-xs font-bold uppercase tracking-[0.12em] text-muted" key={detail}>
              {detail}
            </span>
          ))}
        </div>
      </div>
      <Link
        className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-soft sm:pt-10"
        to={service.href}
      >
        Detalji
        <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
