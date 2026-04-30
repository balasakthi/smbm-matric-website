import type { BaseHero, OverviewSection, ContactInfo } from "../shared-types";

interface ClassesSection {
  title: string;
  subtitle?: string;
  classes?: {
    title: string;
    icon?: string;
    subtitle?: string;
    description?: string;
  }[];
}

interface ProcessSection {
  title: string;
  subtitle?: string;
  steps?: {
    title: string;
    description?: string;
  }[];
}

interface DocumentSection {
  title: string;
  subtitle?: string;
  documents?: {
    icon?: string;
    label: string;
  }[];
}

interface GuidelinesSection {
  title: string;
  subtitle?: string;
  guidelines?: string[];
}

interface ContactSection {
  title: string;
  subtitle?: string;
  contactInfo?: ContactInfo;
}

interface AdmissionPage {
  hero?: BaseHero;
  overview?: OverviewSection;
  classSections?: ClassesSection;
  admissionProcess?: ProcessSection;
  requiredDocuments?: DocumentSection;
  admissionGuidelines?: GuidelinesSection;
  contactSection?: ContactSection;
}

export type { AdmissionPage };
