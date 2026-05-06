import { type FormEvent, useMemo, useState } from 'react';
import ContactActions from '../shared/components/ContactActions';
import CTAButton from '../shared/components/CTAButton';
import Icon from '../shared/components/Icon';
import Seo from '../shared/components/Seo';
import { CONTACT_METHODS, SERVICES, SITE } from '../shared/config/siteData';
import { createMailHref, createWhatsAppHref } from '../shared/lib/contactLinks';

type FormValues = {
  name: string;
  contact: string;
  device: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: '',
  contact: '',
  device: '',
  message: '',
};

const messageTips = ['Koji uređaj koristite', 'Što se događa', 'Kada je počelo', 'Pošaljite i sliku poruke ako imate'];

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = 'Unesite ime ili naziv tvrtke.';
  }

  if (!values.contact.trim()) {
    errors.contact = 'Unesite telefon, WhatsApp broj ili e-mail.';
  }

  if (!values.device) {
    errors.device = 'Odaberite vrstu problema.';
  }

  if (values.message.trim().length < 12) {
    errors.message = 'Opišite problem s barem nekoliko riječi.';
  }

  return errors;
}

function getServiceLabel(device: string) {
  return SERVICES.find((service) => service.id === device)?.title ?? 'Nešto drugo / nisam siguran';
}

export default function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const composedMessage = useMemo(() => {
    const service = values.device ? getServiceLabel(values.device) : 'Nije odabrano';

    return [
      `Pozdrav, trebam IT pomoć.`,
      `Ime: ${values.name || '-'}`,
      `Kontakt: ${values.contact || '-'}`,
      `Vrsta problema: ${service}`,
      `Opis: ${values.message || '-'}`,
    ].join('\n');
  }, [values]);

  const whatsappHref = createWhatsAppHref(composedMessage);
  const mailHref = createMailHref('Upit za IT pomoć', composedMessage);

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full bg-background-light">
      <Seo {...SITE.seo.contact} />
      <section className="border-b quiet-rule bg-background-light">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-28 pt-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14 lg:px-8 lg:py-16">
          <div>
            <p className="section-label">Kontakt</p>
            <h1 className="display-page mt-4 max-w-3xl font-display font-semibold text-primary">Kontakt bez kompliciranja.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Pošaljite kratko što ne radi, kada je počelo i koji uređaj koristite. Možete poslati i sliku ekrana ako
              je lakše.
            </p>
            <ContactActions className="mt-7" />

            <div className="mt-9 border-y quiet-rule py-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">U poruku dodajte</p>
              <div className="mt-4 grid gap-3">
                {messageTips.map((tip) => (
                  <div className="flex items-center gap-3 text-sm font-bold text-primary" key={tip}>
                    <Icon name="check" className="h-4 w-4 text-accent" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid divide-y quiet-rule border-y quiet-rule">
              {CONTACT_METHODS.map((method) => (
                <a
                  className="flex items-start gap-4 py-4 transition hover:text-accent"
                  href={method.href}
                  key={method.title}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-sage-100 text-primary">
                    <Icon name={method.icon} className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block font-bold text-primary">{method.title}</span>
                    <span className="mt-1 block font-semibold text-slate-700">{method.value}</span>
                    {method.label && <span className="mt-2 block text-sm font-bold text-accent">{method.label}</span>}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="quiet-panel rounded-md p-5 sm:p-8 lg:sticky lg:top-28 lg:self-start">
            <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
              <div>
                <label className="form-label" htmlFor="name">
                  Ime
                </label>
                <input
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  aria-invalid={Boolean(errors.name)}
                  className={`${errors.name ? 'border-red-300 ring-2 ring-red-100' : ''} form-field`}
                  id="name"
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Vaše ime ili naziv tvrtke"
                  type="text"
                  value={values.name}
                />
                {errors.name && (
                  <p className="form-error" id="name-error">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="contact">
                  Telefon ili e-mail
                </label>
                <input
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                  aria-invalid={Boolean(errors.contact)}
                  className={`${errors.contact ? 'border-red-300 ring-2 ring-red-100' : ''} form-field`}
                  id="contact"
                  onChange={(event) => updateField('contact', event.target.value)}
                  placeholder="+385... ili ime@email.com"
                  type="text"
                  value={values.contact}
                />
                {errors.contact && (
                  <p className="form-error" id="contact-error">
                    {errors.contact}
                  </p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="device">
                  Vrsta problema
                </label>
                <select
                  aria-describedby={errors.device ? 'device-error' : undefined}
                  aria-invalid={Boolean(errors.device)}
                  className={`${errors.device ? 'border-red-300 ring-2 ring-red-100' : ''} form-field`}
                  id="device"
                  onChange={(event) => updateField('device', event.target.value)}
                  value={values.device}
                >
                  <option value="">Odaberite uslugu</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="other">Nešto drugo / nisam siguran</option>
                </select>
                {errors.device && (
                  <p className="form-error" id="device-error">
                    {errors.device}
                  </p>
                )}
              </div>

              <div>
                <label className="form-label" htmlFor="message">
                  Opis problema
                </label>
                <textarea
                  aria-describedby={errors.message ? 'message-error' : 'message-help'}
                  aria-invalid={Boolean(errors.message)}
                  className={`${errors.message ? 'border-red-300 ring-2 ring-red-100' : ''} form-field min-h-36 resize-y`}
                  id="message"
                  onChange={(event) => updateField('message', event.target.value)}
                  placeholder="Primjer: računalo se sporo pali, iskaču čudne poruke..."
                  value={values.message}
                />
                {errors.message ? (
                  <p className="form-error" id="message-error">
                    {errors.message}
                  </p>
                ) : (
                  <p className="mt-2 text-sm font-semibold text-muted" id="message-help">
                    Napišite što se događa, kada je počelo i koji uređaj koristite.
                  </p>
                )}
              </div>

              <button className="btn-primary mt-1 h-13 w-full px-6 text-base" type="submit">
                Pripremi poruku
                <Icon name="arrowRight" className="h-5 w-5" />
              </button>
            </form>

            {submitted && (
              <div className="mt-6 border-l border-accent bg-primary p-5 text-white shadow-soft" role="status">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/12 text-clay-100">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold">Poruka je spremna.</h2>
                    <p className="mt-2 leading-7 text-white/76">
                      Odaberite kanal i otvorit će se pripremljena poruka. Slanje potvrđujete vi u WhatsAppu ili e-mailu.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <CTAButton className="bg-accent" external href={whatsappHref} icon="message" size="sm">
                        Pošalji WhatsApp
                      </CTAButton>
                      <CTAButton className="border-white/18 bg-white/10 text-white hover:bg-white/16" external href={mailHref} icon="mail" size="sm" variant="secondary">
                        Pošalji e-mail
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
