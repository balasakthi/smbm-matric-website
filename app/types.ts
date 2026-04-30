import { PortableTextBlock } from "next-sanity";

import type {
  AcademicResult,
  BaseHero,
  ButtonActions,
  CTABlock,
  ImageWithAlt,
  ManagementMessage,
  OrderedItem,
  StatsBlock,
  Testimonial,
} from "./shared-types";

interface HeroSection extends BaseHero {
  established?: string;
  schoolMotto?: string;
  admissionText?: string;
  admissionOpen?: boolean;
}

interface QuickHighlight extends OrderedItem {
  title?: string;
  description?: string;
  icon?: string;
}

interface SchoolIntroduction extends ButtonActions {
  title?: string;
  subtitle?: string;
  description?: PortableTextBlock[];
  aboutImage?: ImageWithAlt;
}

interface Reason {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseSMBM {
  title?: string;
  subtitle?: string;
  reasons?: Reason[];
}

interface AcademicLevel {
  icon?: string;
  title?: string;
  description?: string;
}

interface AcademicLevels extends ButtonActions {
  title?: string;
  subtitle?: string;
  levels?: AcademicLevel[];
}

interface InfrastructureItem {
  title?: string;
  description?: string;
  image?: ImageWithAlt;
}

interface InfrastructureHighlights {
  title?: string;
  subtitle?: string;
  highlights?: InfrastructureItem[];
}

interface Testimonials {
  title?: string;
  subtitle?: string;
  testimonialsList?: Testimonial[];
}

interface HomePage {
  hero?: HeroSection;
  quickHighlights?: QuickHighlight[];
  schoolIntroduction?: SchoolIntroduction;
  managementMessage?: ManagementMessage[];
  whyChooseSMBM?: WhyChooseSMBM;
  statsBlock?: StatsBlock;
  academicLevels?: AcademicLevels;
  academicResults?: AcademicResult[];
  infrastructureHighlights?: InfrastructureHighlights;
  testimonials?: Testimonials;
  ctaBlock?: CTABlock;
}

export type { HomePage };
