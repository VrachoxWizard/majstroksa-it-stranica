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
    'Pozdrav, trebam pomoć s računalom. Problem je: ',
  email: 'matevukusic123321@gmail.com',
  emailHref: 'mailto:matevukusic123321@gmail.com',
  address: 'Zagreb, Hrvatska',
  serviceArea: 'Zagreb i okolica',
  hours: 'Po dogovoru',
  primaryCta: 'Pošalji WhatsApp poruku',
  secondaryCta: 'Nazovi odmah',
  contactCta: 'Pošalji što ne radi',
  heroImage: images.hero,
  aboutImage: images.about,
  seo: {
    home: {
      title: 'PC servis i IT pomoć Zagreb | Majstorska IT pomoć',
      description:
        'Lokalna PC i laptop pomoć u Zagrebu za kućne korisnike i male firme. Windows problemi, spora računala, backup, printeri, Wi-Fi, mail i osnovna IT podrška. Javite se preko WhatsAppa.',
    },
    about: {
      title: 'O meni | Majstorska IT pomoć',
      description:
        'Praktična IT pomoć u Zagrebu za ljude koji žele jednostavno riješiti problem s računalom bez tehničkog kompliciranja.',
    },
    services: {
      title: 'PC servis Zagreb i IT pomoć | Majstorska IT pomoć',
      description:
        'Servis računala Zagreb, popravak laptopa Zagreb, Windows pomoć Zagreb, sporo računalo Zagreb, backup podataka Zagreb i IT podrška za male firme Zagreb.',
    },
    contact: {
      title: 'Kontakt | Majstorska IT pomoć',
      description:
        'Pošaljite kratko što ne radi preko WhatsAppa. Lokalna pomoć s računalom Zagreb za kućne korisnike i male firme.',
    },
  } satisfies Record<string, RouteSeoProps>,
};

export const NAV_LINKS = [
  { label: 'O meni', href: '/about' },
  { label: 'Usluge', href: '/services' },
  { label: 'Kontakt', href: '/contact' },
];

export const HERO_DATA = {
  title: 'PC i laptop pomoć u Zagrebu bez nepotrebnog kompliciranja',
  subtitle:
    'Pomažem s usporenim računalima, Windows problemima, čišćenjem, nadogradnjama, backupom, printerima, Wi-Fi problemima i osnovnom IT podrškom za male lokalne poslove.',
  helperText:
    'Pošaljite kratko što ne radi, koji uređaj koristite i kada je problem počeo. Javit ću vam se s prijedlogom sljedećeg koraka.',
  ctaText: SITE.primaryCta,
  secondaryText: SITE.secondaryCta,
  trustText: 'Za kućne korisnike i male firme u Zagrebu',
};

export const LOCAL_PROOF: LocalProofProps[] = [
  { icon: 'shield', label: 'Lokalno', value: 'Zagreb i okolica' },
  { icon: 'clock', label: 'Dogovor', value: 'Dogovor prije rada' },
  { icon: 'message', label: 'Jasno', value: 'Jednostavno objašnjenje' },
  { icon: 'check', label: 'Pošteno', value: 'Bez lažnih obećanja' },
];

export const TRUST_BADGES: TrustBadgeProps[] = [
  {
    icon: 'shield',
    label: 'Lokalno',
    value: 'Zagreb i okolica',
    detail: 'Pomoć za kućne korisnike, studente, starije korisnike, freelancere, obrte i male urede.',
  },
  {
    icon: 'clock',
    label: 'Dogovor',
    value: 'Dogovor prije rada',
    detail: 'Prije rada kažem okvirnu cijenu i sljedeći korak. Nema pritiska ni nepotrebnog kompliciranja.',
  },
  {
    icon: 'award',
    label: 'Iskreno',
    value: 'Bez lažnih obećanja',
    detail: 'Ako se popravak ne isplati ili problem traži drugi tip servisa, reći ću vam otvoreno.',
  },
];

export const SERVICES: ServiceProps[] = [
  {
    id: 'diagnostics',
    icon: 'computer',
    title: 'Dijagnostika računala i laptopa',
    shortTitle: 'Dijagnostika',
    serviceNavLabel: 'Dijagnostika',
    heroSummary: 'Kada ne znate što točno ne radi, prvo se mirno provjeri stanje uređaja.',
    ctaHint: 'Računalo se čudno ponaša, javlja greške ili više ne znate odakle krenuti?',
    customerProblem: 'Uređaj se pali sporo, zamrzava, izbacuje poruke ili radi drugačije nego prije.',
    expectedOutcome: 'Jasna procjena problema, okvir cijene i prijedlog što ima smisla napraviti dalje.',
    description:
      'Pregled računala ili laptopa bez napuhavanja problema. Cilj je razumjeti što se događa prije bilo kakvog rada.',
    href: '/services#diagnostics',
    image: images.hero,
    details: ['Pregled stanja uređaja', 'Objašnjenje problema', 'Prijedlog sljedećeg koraka'],
    priceNote: 'Brzi pregled — od 20 €',
  },
  {
    id: 'speed-maintenance',
    icon: 'speed',
    title: 'Ubrzavanje i održavanje računala',
    shortTitle: 'Ubrzavanje',
    serviceNavLabel: 'Ubrzavanje',
    heroSummary: 'Za sporo računalo Zagreb: čišćenje nepotrebnog, provjera pokretanja i savjet oko nadogradnje.',
    ctaHint: 'Računalo se dugo pali, šteka ili usporava svakodnevni rad?',
    customerProblem: 'Računalo je sporo, ventilator stalno radi ili se osnovni zadaci pretvaraju u čekanje.',
    expectedOutcome: 'Uređeniji sustav i iskren savjet je li bolje čistiti, nadograditi ili ne ulagati više.',
    description:
      'Praktično održavanje, uklanjanje nepotrebnog opterećenja i procjena isplativosti nadogradnje.',
    href: '/services#speed-maintenance',
    image: images.virus,
    details: ['Sporo pokretanje', 'Čišćenje nepotrebnog', 'Savjet oko nadogradnje'],
    priceNote: 'Ubrzavanje i održavanje — od 35 €',
  },
  {
    id: 'windows-setup',
    icon: 'tools',
    title: 'Windows pomoć i podešavanje',
    shortTitle: 'Windows pomoć',
    serviceNavLabel: 'Windows',
    heroSummary: 'Windows pomoć Zagreb za greške, postavke, osnovne programe i pripremu za normalan rad.',
    ctaHint: 'Windows javlja greške, programi ne rade ili novi laptop nije podešen kako treba?',
    customerProblem: 'Nakon ažuriranja nešto ne radi, program se ruši ili su postavke zbunjujuće.',
    expectedOutcome: 'Podešen sustav i jednostavno objašnjenje što je promijenjeno.',
    description:
      'Pomoć s Windows problemima, osnovnim programima, korisničkim postavkama i pripremom laptopa.',
    href: '/services#windows-setup',
    image: images.support,
    details: ['Windows greške', 'Podešavanje programa', 'Priprema laptopa'],
    priceNote: 'Osnovna IT pomoć — od 25 €',
  },
  {
    id: 'backup-transfer',
    icon: 'data',
    title: 'Backup i prijenos podataka',
    shortTitle: 'Backup',
    serviceNavLabel: 'Backup',
    heroSummary: 'Backup podataka Zagreb za dokumente, slike, prijenos na novi uređaj i osnovnu organizaciju datoteka.',
    ctaHint: 'Kupili ste novi laptop ili želite sačuvati važne podatke?',
    customerProblem: 'Treba prebaciti dokumente, slike, mailove ili važne mape, ali niste sigurni što je sigurno napraviti.',
    expectedOutcome: 'Dogovoren prijenos ili backup podataka, uz realnu procjenu što se može sigurno napraviti.',
    description:
      'Pomoć kod sigurnosnih kopija, prijenosa podataka i organizacije datoteka na novom ili postojećem uređaju.',
    href: '/services#backup-transfer',
    image: images.about,
    details: ['Backup podataka', 'Prijenos na novi uređaj', 'Organizacija datoteka'],
    priceNote: 'Backup i prijenos podataka — od 30 €',
  },
  {
    id: 'printer-wifi-mail',
    icon: 'message',
    title: 'Printer, Wi-Fi, mail i uredski problemi',
    shortTitle: 'Printer i Wi‑Fi',
    serviceNavLabel: 'Printer, Wi‑Fi i mail',
    heroSummary: 'Pomoć kad printer ne ispisuje, Wi‑Fi puca, mail ne radi ili uredska oprema usporava posao.',
    ctaHint: 'Printer ne radi, Wi‑Fi prekida ili mail stalno pravi probleme?',
    customerProblem: 'Uređaji su spojeni, ali ne rade stabilno ili vas usporavaju u svakodnevnom poslu.',
    expectedOutcome: 'Podešena osnovna oprema i jednostavne upute što provjeriti ako se problem ponovi.',
    description:
      'Praktična pomoć za kućne korisnike, male urede, trgovine, obrte i lokalne poslove.',
    href: '/services#printer-wifi-mail',
    image: images.network,
    details: ['Printer podešavanje', 'Wi‑Fi problemi', 'Mail i osnovni ured'],
    priceNote: 'Osnovna IT pomoć — od 25 €',
  },
  {
    id: 'small-business-it',
    icon: 'shield',
    title: 'IT pomoć za male firme',
    shortTitle: 'Male firme',
    serviceNavLabel: 'Male firme',
    heroSummary: 'IT podrška za male firme Zagreb kada treba netko tko jasno pogleda problem i pomogne bez velikog IT odjela.',
    ctaHint: 'Računala, printeri, Wi‑Fi ili mail usporavaju rad u malom uredu?',
    customerProblem: 'Malom poslu često treba brz, razumljiv dogovor oko računala, programa, datoteka i osnovne podrške.',
    expectedOutcome: 'Pregled problema, dogovor prije rada i iskren savjet kada se popravak ili nadogradnja ne isplati.',
    description:
      'Osnovna tehnička podrška za male lokalne poslove, urede, trgovine, obrte i freelancere.',
    href: '/services#small-business-it',
    image: images.support,
    details: ['Računala i programi', 'Backup i datoteke', 'Osnovna uredska podrška'],
    priceNote: 'Napredniji zahvati — po dogovoru',
  },
];

export const PRICING_ITEMS = [
  { title: 'Brzi pregled', price: 'od 20 €' },
  { title: 'Osnovna IT pomoć', price: 'od 25 €' },
  { title: 'Ubrzavanje i održavanje', price: 'od 35 €' },
  { title: 'Backup i prijenos podataka', price: 'od 30 €' },
  { title: 'Napredniji zahvati', price: 'po dogovoru' },
];

export const PROCESS_STEPS: ProcessStepProps[] = [
  {
    step: '01',
    title: 'Pošaljite poruku',
    description: 'Napišite što ne radi, koji uređaj koristite i kada je problem počeo.',
  },
  {
    step: '02',
    title: 'Kratko procjenjujemo problem',
    description: 'Pogledamo opis, po potrebi sliku greške i dogovorimo ima li smisla ići dalje.',
  },
  {
    step: '03',
    title: 'Dogovor prije rada',
    description: 'Prije rada kažem okvirnu cijenu i što je realno očekivati.',
  },
  {
    step: '04',
    title: 'Rješenje ili iskren savjet',
    description: 'Ako se problem može riješiti, radimo dogovoreno. Ako se ne isplati, reći ću iskreno.',
  },
];

export const EXPECTATION_CARDS = [
  {
    id: 'message',
    name: 'Što poslati u poruci',
    quote: 'Napišite što ne radi, koji uređaj koristite i kada je problem počeo. Ako imate sliku greške, pošaljite i nju.',
  },
  {
    id: 'agreement',
    name: 'Što možete očekivati',
    quote: 'Prvo kratka procjena, zatim dogovor koraka i okvirne cijene. Bez izmišljanja problema i bez pritiska.',
  },
];

export const CONTACT_METHODS: ContactMethodProps[] = [
  {
    icon: 'message',
    title: 'WhatsApp',
    value: 'Najbrži način za prvi upit',
    href: SITE.whatsappHref,
    label: 'Pošalji kratko što ne radi',
  },
  {
    icon: 'phone',
    title: 'Telefon',
    value: SITE.phone,
    href: SITE.phoneHref,
    label: 'Za poziv nakon prvog dogovora',
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
    question: 'Moram li znati točno u čemu je problem?',
    answer:
      'Ne. Dovoljno je opisati što se događa, koji uređaj koristite i kada je problem počeo. Tehničke izraze ne morate znati.',
  },
  {
    question: 'Radite li s malim firmama?',
    answer:
      'Da. Pomažem malim uredima, obrtima, trgovinama, freelancerima i drugim lokalnim poslovima u Zagrebu s osnovnim IT problemima.',
  },
  {
    question: 'Koliko košta popravak?',
    answer:
      'Ovisi o problemu. Brzi pregled je od 20 €, osnovna IT pomoć od 25 €, ubrzavanje i održavanje od 35 €, a backup i prijenos podataka od 30 €. Konačna cijena se dogovara prije rada.',
  },
  {
    question: 'Mogu li poslati sliku problema?',
    answer:
      'Da. Slika greške, ekrana ili uređaja često pomaže da se brže shvati o čemu se radi.',
  },
  {
    question: 'Radite li hitne dolaske?',
    answer:
      'Moguće je po dogovoru, ovisno o lokaciji, rasporedu i vrsti problema. Najbrže je prvo poslati WhatsApp poruku.',
  },
  {
    question: 'Što ako se problem ne može riješiti?',
    answer:
      'Ako se problem ne može riješiti ili se popravak ne isplati, reći ću vam iskreno i objasniti koje su razumne opcije.',
  },
  {
    question: 'Pomažete li kod kupnje ili nadogradnje računala?',
    answer:
      'Da. Mogu pomoći oko procjene ima li smisla nadogradnja, što kupiti i kako izbjeći nepotreban trošak.',
  },
  {
    question: 'Je li WhatsApp najbolji način za kontakt?',
    answer:
      'Da, za prvi kontakt je najpraktičniji. Možete kratko napisati problem i poslati sliku greške, pa se dalje dogovorimo za poziv ili sljedeći korak.',
  },
];
