import { SITE } from '../config/siteData';

export function createWhatsAppHref(message = SITE.whatsappText) {
  return `${SITE.whatsappHref}?text=${encodeURIComponent(message)}`;
}

export function createMailHref(subject: string, body: string) {
  return `${SITE.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
