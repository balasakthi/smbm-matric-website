import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "next-sanity";

interface SectionHeader {
  title?: string;
  subtitle?: string;
}

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
  hero: SectionHeader & {
    label?: string;
    backgroundImage?: SanityImageSource & {
      alt?: string;
    };
  };
  contactSection?: SectionHeader & {
    contactInfo?: ContactInfo;
  };
  formSection?: SectionHeader & {
    mapUrl?: string;
    formTitle?: string;
  };
  faqSection?: SectionHeader & {
    faq?: FAQItem[];
  };
}

export type { ContactPage };
