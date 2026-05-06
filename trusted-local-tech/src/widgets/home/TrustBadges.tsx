import { motion, useReducedMotion } from 'framer-motion';
import { TRUST_BADGES } from '../../shared/config/siteData';
import Icon from '../../shared/components/Icon';

const trustIconStyles = ['bg-moss-100', 'bg-mist-100', 'bg-clay-100'];

export default function TrustBadges() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full border-b quiet-rule bg-surface py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid divide-y quiet-rule md:grid-cols-3 md:divide-x md:divide-y-0">
          {TRUST_BADGES.map((badge, index) => (
            <motion.div
              key={badge.label}
              className="py-5 md:px-7 md:first:pl-0 md:last:pr-0"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-primary ${
                    trustIconStyles[index % trustIconStyles.length]
                  }`}
                >
                  <Icon name={badge.icon} className="h-4.5 w-4.5" />
                </span>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">{badge.label}</p>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-tight text-primary">{badge.value}</h2>
              {badge.detail && <p className="mt-3 leading-7 text-slate-700">{badge.detail}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
