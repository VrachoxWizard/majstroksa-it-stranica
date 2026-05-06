import type {
  ContactActionProps,
  ContactMethodProps,
  FaqItemProps,
  LocalProofProps,
  ProcessStepProps,
  RouteSeoProps,
  ServiceProps,
  TrustBadgeProps,
} from '../types';

const images = {
  hero: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=88',
  about: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=86',
  virus: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=86',
  support: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=1200&q=86',
  network: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1200&q=86',
};

export const SITE = {
  name: 'Majstorska IT pomoć',
  shortName: 'Majstorska IT',
  phone: '099 441 4638',
  phoneHref: 'tel:+385994414638',
  whatsappHref: 'https://wa.me/385994414638',
  whatsappText:
    'Pozdrav, trebam IT pomoć. Ne radi mi: ',
  email: 'matevukusic123321@gmail.com',
  emailHref: 'mailto:matevukusic123321@gmail.com',
  address: 'Zagreb, Hrvatska',
  serviceArea: 'Zagreb, Hrvatska',
  hours: 'Po dogovoru',
  primaryCta: 'Pošalji WhatsApp poruku',
  secondaryCta: 'Nazovi',
  contactCta: 'Pošalji što ne radi',
  heroImage: images.hero,
  aboutImage: images.about,
  seo: {
    home: {
      title: 'Majstorska IT pomoć | PC i laptop pomoć Zagreb',
      description:
        'Lokalna PC i laptop pomoć u Zagrebu za spora računala, Windows probleme, printere, Wi-Fi, e-mail, backup i osnovnu IT podršku. Pošaljite WhatsApp upit.',
    },
    about: {
      title: 'O meni | Majstorska IT pomoć',
      description:
        'Majstorska IT pomoć je lokalna pomoć u Zagrebu za svakodnevne probleme s računalom, uz pošten dogovor i objašnjenje bez žargona.',
    },
    services: {
      title: 'IT usluge Zagreb | Majstorska IT pomoć',
      description:
        'Pomoć za sporo računalo, Windows i programe, printer, Wi-Fi, e-mail, backup podataka i podešavanje novog laptopa u Zagrebu.',
    },
    contact: {
      title: 'Kontakt | Majstorska IT pomoć',
      description:
        'Pošaljite kratki opis problema na WhatsApp, nazovite ili pošaljite e-mail. Lokalna IT pomoć u Zagrebu bez kompliciranja.',
    },
  } satisfies Record<string, RouteSeoProps>,
};

export const NAV_LINKS = [
  { label: 'O meni', href: '/about' },
  { label: 'Usluge', href: '/services' },
  { label: 'Kontakt', href: '/contact' },
];

export const HERO_DATA = {
  title: 'PC i laptop pomoć u Zagrebu, bez kompliciranja',
  subtitle:
    'Pomoć za spora računala, Windows probleme, printere, Wi-Fi, e-mail i svakodnevne IT poteškoće. Pošaljite kratko što ne radi i dogovorimo realan sljedeći korak.',
  ctaText: SITE.primaryCta,
  secondaryText: SITE.secondaryCta,
  trustText: 'Lokalna IT pomoć za dom, studente, starije korisnike i male urede u Zagrebu',
};

export const LOCAL_PROOF: LocalProofProps[] = [
  { icon: 'shield', label: 'Prvo procjena', value: 'Pošaljite opis problema prije dogovora.' },
  { icon: 'clock', label: 'Dogovor prije rada', value: 'Cijena i koraci dogovaraju se unaprijed.' },
  { icon: 'message', label: 'Bez žargona', value: 'Objašnjenje normalnim jezikom, bez kompliciranja.' },
];

export const TRUST_BADGES: TrustBadgeProps[] = [
  {
    icon: 'shield',
    label: 'Lokalno',
    value: 'Zagreb i okolica',
    detail: 'Pomoć za dom, studente, starije korisnike, freelancere i male obrte.',
  },
  {
    icon: 'clock',
    label: 'Pošteno',
    value: 'Dogovor prije rada',
    detail: 'Ako se popravak ne isplati, to kažem odmah i bez uljepšavanja.',
  },
  {
    icon: 'award',
    label: 'Jednostavno',
    value: 'Bez nepotrebnog kompliciranja',
    detail: 'Ne morate znati tehničke izraze, dovoljno je opisati što se događa.',
  },
];

export const SERVICES: ServiceProps[] = [
  {
    id: 'slow-computer',
    icon: 'virus',
    title: 'Sporo računalo ili laptop',
    shortTitle: 'Sporo računalo',
    serviceNavLabel: 'Sporo računalo',
    heroSummary: 'Kad se uređaj dugo pali, šteka ili radi presporo za normalan rad.',
    ctaHint: 'Računalo se dugo pali ili stalno blokira?',
    customerProblem: 'Računalo je sporo, ventilator stalno radi ili sve zapinje kod osnovnih zadataka.',
    expectedOutcome: 'Optimizacija sustava i realna preporuka što ima smisla napraviti dalje.',
    description:
      'Provjera i čišćenje nepotrebnih procesa, optimizacija pokretanja i jasan savjet oko mogućih nadogradnji.',
    href: '/services#slow-computer',
    image: images.virus,
    details: ['Sporo pokretanje', 'Štekanje u radu', 'Procjena nadogradnje'],
    priceNote: 'Okvirno, ovisno o problemu',
  },
  {
    id: 'windows-programs',
    icon: 'speed',
    title: 'Windows i programi',
    shortTitle: 'Windows i programi',
    serviceNavLabel: 'Windows',
    heroSummary: 'Problemi s Windowsom, instalacijom programa i podešavanjem za normalan rad.',
    ctaHint: 'Windows javlja greške ili programi ne rade kako treba?',
    customerProblem: 'Greške nakon ažuriranja, problemi s instalacijom ili program koji se stalno ruši.',
    expectedOutcome: 'Stabilniji rad sustava i podešeni programi za svakodnevno korištenje.',
    description:
      'Pomoć s Windows problemima, instalacijom i podešavanjem programa bez nepotrebnih tehničkih izraza.',
    href: '/services#windows-programs',
    image: images.hero,
    details: ['Windows greške', 'Instalacija programa', 'Podešavanje za rad'],
    priceNote: 'Dogovor prije rada',
  },
  {
    id: 'printer-wifi-email',
    icon: 'tools',
    title: 'Printer, Wi-Fi i e-mail',
    shortTitle: 'Printer, Wi-Fi i e-mail',
    serviceNavLabel: 'Printer i Wi-Fi',
    heroSummary: 'Kad printer ne radi, Wi-Fi puca ili e-mail stalno pravi probleme.',
    ctaHint: 'Printer ne ispisuje, Wi-Fi prekida ili mail ne radi?',
    customerProblem: 'Uređaji su spojeni, ali ne rade stabilno ili vas stalno usporavaju u radu.',
    expectedOutcome: 'Podešena osnovna oprema i jasne upute kako izbjeći iste probleme ubuduće.',
    description:
      'Praktična pomoć za kućnu mrežu, printer, e-mail i osnovne probleme koji najčešće smetaju svaki dan.',
    href: '/services#printer-wifi-email',
    image: images.network,
    details: ['Printer podešavanje', 'Wi-Fi problemi', 'E-mail pomoć'],
    priceNote: 'Daljinski ili po dogovoru',
  },
  {
    id: 'backup-security-new-device',
    icon: 'data',
    title: 'Backup, sigurnosna provjera i novi laptop',
    shortTitle: 'Backup i novi uređaj',
    serviceNavLabel: 'Backup i prijenos',
    heroSummary: 'Sigurnosna kopija, prijenos podataka i osnovno podešavanje novog uređaja.',
    ctaHint: 'Kupili ste novi laptop ili želite sačuvati važne podatke?',
    customerProblem: 'Trebate prebaciti podatke, napraviti backup ili provjeriti sumnjive programe i browser.',
    expectedOutcome: 'Uređaj spreman za rad uz osnovnu sigurnosnu provjeru i dogovorene sljedeće korake.',
    description:
      'Pomoć kod sigurnosnih kopija i prijenosa podataka, uz poštenu procjenu što je realno i sigurno napraviti.',
    href: '/services#backup-security-new-device',
    image: images.about,
    details: ['Backup podataka', 'Prijenos na novi uređaj', 'Osnovna sigurnosna provjera'],
    priceNote: 'Cijena ovisi o opsegu posla',
  },
];

export const PROCESS_STEPS: ProcessStepProps[] = [
  {
    step: '01',
    title: 'Pošaljete što ne radi',
    description: 'Napišite koji uređaj koristite, kada je problem počeo i što se događa.',
  },
  {
    step: '02',
    title: 'Dobijete realnu procjenu',
    description: 'Kažem što ima smisla provjeriti, može li se pomoći i koji je okvirni trošak.',
  },
  {
    step: '03',
    title: 'Dogovorimo pomoć',
    description: 'Ako ima smisla, dogovorimo sljedeći korak: WhatsApp, poziv, daljinska pomoć ili pregled.',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Tipična situacija',
    quote: 'Računalo se sporo pali, preglednik otvara čudne stranice ili Windows stalno izbacuje poruke.',
  },
  {
    id: '2',
    name: 'Što možete očekivati',
    quote: 'Prvo kratka procjena, zatim dogovor koraka i cijene. Bez izmišljanja problema i bez pritiska.',
  },
];

export const CONTACT_METHODS: ContactMethodProps[] = [
  {
    icon: 'phone',
    title: 'Telefon',
    value: SITE.phone,
    href: SITE.phoneHref,
    label: 'Za kratak dogovor',
  },
  {
    icon: 'message',
    title: 'WhatsApp',
    value: 'Najbrži način za upit',
    href: SITE.whatsappHref,
    label: 'Javi se na WhatsApp',
  },
  {
    icon: 'mail',
    title: 'E-mail',
    value: SITE.email,
    href: SITE.emailHref,
    label: 'Za detaljniji opis problema',
  },
];

export const CONTACT_ACTIONS: ContactActionProps[] = [
  {
    icon: 'message',
    label: SITE.primaryCta,
    value: 'Najbrže preko WhatsAppa',
    href: SITE.whatsappHref,
    variant: 'primary',
  },
  {
    icon: 'phone',
    label: SITE.secondaryCta,
    value: SITE.phone,
    href: SITE.phoneHref,
    variant: 'secondary',
  },
];

export const FAQ_ITEMS: FaqItemProps[] = [
  {
    question: 'Što trebam poslati u prvoj poruci?',
    answer:
      'Dovoljno je napisati koji uređaj koristite, što se događa, kada je problem počeo i imate li sliku poruke ili greške. Ne morate znati tehničke izraze.',
  },
  {
    question: 'Hoću li znati cijenu prije rada?',
    answer:
      'Da. Prvo se dogovaraju koraci i okvirna cijena. Ako se popravak ne isplati, to se kaže odmah.',
  },
  {
    question: 'Može li se problem riješiti na daljinu?',
    answer:
      'Neki problemi mogu se riješiti na daljinu, ako je to sigurno i praktično. Za opremu, mrežu, printere ili veće probleme dogovara se drugi način pomoći.',
  },
  {
    question: 'Pomažete li starijim osobama?',
    answer:
      'Da. Objašnjenje je jednostavno i bez žargona. Cilj je da osoba razumije što se radi i kako kasnije koristiti uređaj.',
  },
  {
    question: 'Radite li napredne hardverske popravke?',
    answer:
      'Ne obećavam napredne hardverske popravke poput lemljenja, matičnih ploča ili profesionalnog spašavanja podataka. Ako problem traži specijalizirani servis, reći ću vam otvoreno.',
  },
];
