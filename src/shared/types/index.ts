export interface TrustBadgeProps {
  icon: IconName;
  label: string;
  value: string;
  detail?: string;
}

export interface ServiceProps {
  id: string;
  icon: IconName;
  title: string;
  shortTitle: string;
  serviceNavLabel?: string;
  heroSummary?: string;
  ctaHint?: string;
  description: string;
  customerProblem: string;
  expectedOutcome: string;
  href: string;
  image: string;
  details: string[];
  priceNote?: string;
}

export interface TestimonialProps {
  id: string;
  name: string;
  quote: string;
}

export interface ContactMethodProps {
  icon: IconName;
  title: string;
  value: string;
  href?: string;
  label?: string;
}

export interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

export interface LocalProofProps {
  icon: IconName;
  label: string;
  value: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export interface ContactActionProps {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface RouteSeoProps {
  title: string;
  description: string;
}

export type IconName =
  | 'arrowRight'
  | 'award'
  | 'check'
  | 'clock'
  | 'computer'
  | 'data'
  | 'mail'
  | 'menu'
  | 'message'
  | 'phone'
  | 'shield'
  | 'spark'
  | 'speed'
  | 'tools'
  | 'virus'
  | 'x';
