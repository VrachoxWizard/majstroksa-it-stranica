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
  name: 'The Trusted Local Tech',
  shortName: 'Trusted Local Tech',
  phone: '+385 91 234 5678',
  phoneHref: 'tel:+385912345678',
  whatsappHref: 'https://wa.me/385912345678',
  whatsappText:
    'Pozdrav, trebam IT pomoć. Problem je: ',
  email: 'podrska@trustedlocaltech.hr',
  emailHref: 'mailto:podrska@trustedlocaltech.hr',
  address: 'Zagreb, Hrvatska',
  serviceArea: 'Zagreb i okolica',
  hours: 'Pon - Sub: 08:00 - 20:00',
  primaryCta: 'Nazovi odmah',
  secondaryCta: 'WhatsApp',
  contactCta: 'Opiši problem',
  heroImage: images.hero,
  aboutImage: images.about,
  seo: {
    home: {
      title: 'The Trusted Local Tech | Lokalna IT pomoć Zagreb',
      description:
        'Pouzdana lokalna IT pomoć u Zagrebu za spora računala, viruse, Wi-Fi, pisače i male tvrtke. Nazovite ili pošaljite WhatsApp poruku.',
    },
    about: {
      title: 'O nama | The Trusted Local Tech',
      description:
        'Saznajte kako The Trusted Local Tech pomaže korisnicima u Zagrebu mirnim pristupom, jasnim dogovorom i IT podrškom bez žargona.',
    },
    services: {
      title: 'IT usluge Zagreb | The Trusted Local Tech',
      description:
        'Uklanjanje virusa, ubrzavanje računala, postavljanje opreme, Wi-Fi, pisači i pomoć s datotekama za domove i male tvrtke.',
    },
    contact: {
      title: 'Kontakt | The Trusted Local Tech',
      description:
        'Kontaktirajte lokalnu IT podršku u Zagrebu telefonom, WhatsAppom ili emailom. Opišite problem i dobijte jasan sljedeći korak.',
    },
  } satisfies Record<string, RouteSeoProps>,
};

export const NAV_LINKS = [
  { label: 'O nama', href: '/about' },
  { label: 'Usluge', href: '/services' },
  { label: 'Kontakt', href: '/contact' },
];

export const HERO_DATA = {
  title: 'Pouzdana IT pomoć za dom i male tvrtke',
  subtitle:
    'Kad računalo uspori, Wi-Fi zapne ili se pojave sumnjive poruke, dobit ćete miran razgovor, jasan dogovor i praktičan sljedeći korak.',
  ctaText: SITE.primaryCta,
  secondaryText: SITE.secondaryCta,
  trustText: 'Lokalna podrška u Zagrebu i okolici',
};

export const LOCAL_PROOF: LocalProofProps[] = [
  { icon: 'shield', label: 'Prvo dogovor', value: 'Bez rada dok ne znate korake' },
  { icon: 'clock', label: 'Radno vrijeme', value: SITE.hours },
  { icon: 'message', label: 'Najbrži kontakt', value: 'Telefon ili WhatsApp' },
];

export const TRUST_BADGES: TrustBadgeProps[] = [
  {
    icon: 'shield',
    label: 'Područje',
    value: 'Zagreb i okolica',
    detail: 'Lokalni dolazak po dogovoru, daljinska pomoć kad je praktična.',
  },
  {
    icon: 'clock',
    label: 'Odgovor',
    value: 'Jasan sljedeći korak',
    detail: 'Prvo kratka procjena problema, zatim dogovor o mogućnostima.',
  },
  {
    icon: 'award',
    label: 'Plaćanje',
    value: 'Nakon dogovora',
    detail: 'Bez pritiska, bez nepotrebnog tehničkog žargona.',
  },
];

export const SERVICES: ServiceProps[] = [
  {
    id: 'virus-removal',
    icon: 'virus',
    title: 'Uklanjanje virusa i malwarea',
    shortTitle: 'Virusi i sigurnost',
    serviceNavLabel: 'Virusi',
    heroSummary: 'Sigurnosna provjera, čišćenje preglednika i miran savjet što dalje.',
    ctaHint: 'Sumnjiva poruka ili čudan preglednik?',
    customerProblem: 'Iskaču čudne poruke, preglednik se ponaša neobično ili sumnjate na prijevaru.',
    expectedOutcome: 'Provjera uređaja, čišćenje preglednika i savjeti za sigurnije korištenje.',
    description:
      'Provjera računala, uklanjanje zlonamjernog softvera i savjeti za sigurnije korištenje bez plašenja tehničkim pojmovima.',
    href: '/services#virus-removal',
    image: images.virus,
    details: ['Sigurnosna provjera', 'Čišćenje preglednika', 'Zaštita osobnih podataka'],
    priceNote: 'Procjena prije rada',
  },
  {
    id: 'optimization',
    icon: 'speed',
    title: 'Ubrzavanje sporog računala',
    shortTitle: 'Sporo računalo',
    serviceNavLabel: 'Sporo računalo',
    heroSummary: 'Čišćenje pokretanja, nepotrebnih programa i realna procjena nadogradnje.',
    ctaHint: 'Računalo se dugo pali ili blokira?',
    customerProblem: 'Računalo se dugo pali, blokira ili je svakodnevni rad postao naporan.',
    expectedOutcome: 'Čišći sustav, manje nepotrebnih programa i realna preporuka za nadogradnju.',
    description:
      'Čišćenje nepotrebnih programa, provjera pokretanja sustava i praktična optimizacija za svakodnevni rad.',
    href: '/services#optimization',
    image: images.hero,
    details: ['Brže pokretanje', 'Manje blokiranja', 'Preporuke za nadogradnju'],
    priceNote: 'Bez nepotrebnih nadogradnji',
  },
  {
    id: 'setup-support',
    icon: 'tools',
    title: 'Postavljanje i tehnička pomoć',
    shortTitle: 'Oprema i mreža',
    serviceNavLabel: 'Oprema i mreža',
    heroSummary: 'Pisači, Wi-Fi, email, aplikacije i sigurnosne kopije bez kompliciranja.',
    ctaHint: 'Pisač, Wi-Fi ili email ne rade?',
    customerProblem: 'Pisač, Wi-Fi, email, laptop ili aplikacije ne rade kako trebaju.',
    expectedOutcome: 'Postavljanje opreme i objašnjenje dovoljno jasno da kasnije znate što koristiti.',
    description:
      'Pomoć oko laptopa, pisača, Wi-Fi mreže, sigurnosnih kopija i osnovnog rada na daljinu ili uz dogovor na lokaciji.',
    href: '/services#setup-support',
    image: images.network,
    details: ['Pisači i mreža', 'Email i aplikacije', 'Sigurnosne kopije'],
    priceNote: 'Daljinski ili lokalno',
  },
  {
    id: 'data-guidance',
    icon: 'data',
    title: 'Pomoć kod izgubljenih datoteka',
    shortTitle: 'Datoteke i diskovi',
    serviceNavLabel: 'Datoteke',
    heroSummary: 'Oprezna procjena prije pokušaja oporavka ili daljnjeg korištenja diska.',
    ctaHint: 'Datoteke su nestale ili disk šteka?',
    customerProblem: 'Datoteke su nestale, disk se čudno ponaša ili niste sigurni smijete li dalje koristiti uređaj.',
    expectedOutcome: 'Smirena procjena rizika i jasne opcije prije bilo kakvog pokušaja oporavka.',
    description:
      'Smirena procjena problema s datotekama ili diskom, uz jasne sljedeće korake i oprezno rukovanje podacima.',
    href: '/services#data-guidance',
    image: images.about,
    details: ['Procjena stanja', 'Oprezno rukovanje', 'Jasne opcije oporavka'],
    priceNote: 'Oprez prije eksperimenata',
  },
];

export const PROCESS_STEPS: ProcessStepProps[] = [
  {
    step: '01',
    title: 'Opišite problem',
    description: 'Pošaljite kratak opis, uređaj i najbolji kontakt. Dovoljno je i nekoliko rečenica.',
  },
  {
    step: '02',
    title: 'Dobijete jasan dogovor',
    description: 'Objasnimo što možemo provjeriti, što ima smisla napraviti i koji je okvirni trošak.',
  },
  {
    step: '03',
    title: 'Popravak bez stresa',
    description: 'Rješavamo problem daljinski kad je moguće, a za ostalo se dogovaramo lokalno.',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Primjer korisnika iz Zagreba',
    quote: 'Laptop je opet upotrebljiv, a napokon razumijem što je bio problem.',
  },
  {
    id: '2',
    name: 'Primjer male tvrtke',
    quote: 'Brza i normalna komunikacija. Bez velikih obećanja, samo konkretna pomoć.',
  },
];

export const CONTACT_METHODS: ContactMethodProps[] = [
  {
    icon: 'phone',
    title: 'Telefon',
    value: SITE.phone,
    href: SITE.phoneHref,
    label: 'Nazovi odmah',
  },
  {
    icon: 'message',
    title: 'WhatsApp',
    value: 'Pošalji kratak opis problema',
    href: SITE.whatsappHref,
    label: 'Otvori WhatsApp',
  },
  {
    icon: 'mail',
    title: 'Email',
    value: SITE.email,
    href: SITE.emailHref,
    label: 'Pošalji email',
  },
];

export const CONTACT_ACTIONS: ContactActionProps[] = [
  {
    icon: 'phone',
    label: SITE.primaryCta,
    value: SITE.phone,
    href: SITE.phoneHref,
    variant: 'primary',
  },
  {
    icon: 'message',
    label: SITE.secondaryCta,
    value: 'Brzi opis problema',
    href: SITE.whatsappHref,
    variant: 'secondary',
  },
];

export const FAQ_ITEMS: FaqItemProps[] = [
  {
    question: 'Može li se problem riješiti na daljinu?',
    answer:
      'Ako je sigurno i praktično, prvo pokušavamo daljinski. Za opremu, mrežu ili ozbiljnije probleme dogovara se lokalni dolazak.',
  },
  {
    question: 'Hoću li znati cijenu prije rada?',
    answer:
      'Da. Prvo se dogovaraju koraci i okvir troška. Ako nema smisla popravljati, to jasno kažemo.',
  },
  {
    question: 'Što trebam poslati u prvoj poruci?',
    answer:
      'Dovoljno je napisati uređaj, što se događa, kada je problem počeo i kako vas najlakše kontaktirati.',
  },
];
