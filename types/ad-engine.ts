export interface CTA {
  label: string;
  price?: string;
  href: string;
  subtext?: string;
}

export interface HeroSection {
  brand: string;
  headline: string;
  highlight: string;
  description: string;
  cta: CTA;
  cast: string;
  retiredLabel: string;
  boostLabel: string;
  epitaph: string;
  epitaphStrong: string;
}

export interface PainSection {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  kicker: string;
}

export interface LeakItem {
  title: string;
  description: string;
}

export interface LeaksSection {
  eyebrow: string;
  title: string;
  description: string;
  items: LeakItem[];
}

export interface RevealSection {
  eyebrow: string;
  title: string;
  paragraphs: Array<{ text: string; strong?: string }>;
  playbook: {
    label: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    meta: string;
  };
}

export interface InsideItem {
  label: string;
  title: string;
  description: string;
}

export interface InsideSection {
  eyebrow: string;
  title: string;
  items: InsideItem[];
}

export interface BlueprintItem {
  name: string;
  examples: string;
}

export interface BlueprintsSection {
  eyebrow: string;
  title: string;
  description: string;
  items: BlueprintItem[];
  note: string;
}

export interface FitCard {
  title: string;
  items: string[];
}

export interface FitSection {
  eyebrow: string;
  title: string;
  yes: FitCard;
  no: FitCard;
}

export interface PricingSection {
  eyebrow: string;
  title: string;
  description: string;
  priceLabel: string;
  price: string;
  once: string;
  inclusions: string[];
  cta: CTA;
  paymentNote: string;
}

export interface ProofSection {
  eyebrow: string;
  title: string;
  publisherNote: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  eyebrow: string;
  title: string;
  items: FAQItem[];
}

export interface FinalCTASection {
  eyebrow: string;
  title: string;
  description: string;
  cta: CTA;
}

export interface FooterSection {
  copyright: string;
  trademarks: string;
  disclaimer: string;
}

export interface AdEnginePage {
  metadata: {
    title: string;
    description: string;
  };
  hero: HeroSection;
  pain: PainSection;
  leaks: LeaksSection;
  reveal: RevealSection;
  inside: InsideSection;
  blueprints: BlueprintsSection;
  fit: FitSection;
  pricing: PricingSection;
  proof: ProofSection;
  faq: FAQSection;
  finalCta: FinalCTASection;
  footer: FooterSection;
}
