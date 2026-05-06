import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES } from '../../shared/config/siteData';
import SectionHeader from '../../shared/components/SectionHeader';
import ServiceCard from '../../shared/components/ServiceCard';

export default function ServicesGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        >
          <SectionHeader
            description="Fokus je na problemima koje ljudi stvarno imaju: sporo računalo, Windows greške, printer koji ne radi, Wi-Fi koji puca i pomoć oko podataka."
            label="Usluge"
            size="compact"
            title="Praktična pomoć kada tehnika zapne."
          />
        </motion.div>
      </div>

      <div className="grid border-t quiet-rule">
        {SERVICES.map((service, index) => (
          <motion.div
            className="border-b quiet-rule"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            key={service.id}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            viewport={{ once: true }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          >
            <ServiceCard service={service} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
