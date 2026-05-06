import { useEffect } from 'react';
import { SITE } from '../config/siteData';
import type { RouteSeoProps } from '../types';

type SeoProps = RouteSeoProps;

export default function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.content = description;
    }
  }, [description, title]);

  return null;
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    image: SITE.heroImage,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Zagreb',
      addressCountry: 'HR',
    },
    areaServed: SITE.serviceArea,
    openingHours: 'Mo-Sa 08:00-20:00',
    url: 'https://trustedlocaltech.hr',
  };

  return <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>;
}
