import { PortableTextBlock } from "next-sanity";

import type { BaseHero, CTABlock } from "../shared-types";

interface ContactInfo {
  officeHours?: {
    days?: string;
    timing?: string;
  }[];
  phones?: string[];
  emails?: string[];
  address?: PortableTextBlock[];
}

interface FAQItem {
  question?: string;
  answer?: string;
}

interface ContactPage {
  hero?: BaseHero;
  contactSection?: {
    title?: string;
    subtitle?: string;
    contactInfo?: ContactInfo;
  };
  contactForm?: {
    title?: string;
    subtitle?: string;
    mapUrl?: string;
    formTitle?: string;
  };
  faqSection?: {
    title?: string;
    subtitle?: string;
    faq?: FAQItem[];
  };
  ctaBlock?: CTABlock;
}

export type { ContactPage };
