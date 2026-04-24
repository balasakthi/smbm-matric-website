import { PortableTextBlock } from "next-sanity";

import type {
  BaseHero,
  ButtonActions,
  CTABlock,
  ImageWithAlt,
  ManagementMessage,
  OrderedItem,
  StatsBlock,
} from "./shared-types";

export interface HeroSection extends BaseHero {
  established?: string;
  schoolMotto?: string;
  admissionText?: string;
  admissionOpen?: boolean;
}

export interface QuickHighlight extends OrderedItem {
  title?: string;
  description?: string;
  icon?: string;
}

export interface SchoolIntroduction extends ButtonActions {
  title?: string;
  subtitle?: string;
  description?: PortableTextBlock[];
  aboutImage?: ImageWithAlt;
}

export interface Reason {
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseSMBM {
  title?: string;
  subtitle?: string;
  reasons?: Reason[];
}

export interface AcademicLevel {
  icon?: string;
  levelName?: string;
  shortDescription?: string;
}

export interface AcademicLevels extends ButtonActions {
  title?: string;
  subtitle?: string;
  levels?: AcademicLevel[];
}

export interface Student {
  studentName?: string;
  photo?: ImageWithAlt;
  className?: string;
  group?: string;
  centum?: number;
  score?: number;
  achievement?: string;
}

export interface AcademicResult {
  title?: string;
  subtitle?: string;
  year?: string;
  isCurrent?: boolean;
  resultPoster?: ImageWithAlt;
  topStudents?: Student[];
}

export interface InfrastructureItem {
  title?: string;
  description?: string;
  image?: ImageWithAlt;
}

export interface InfrastructureHighlights {
  title?: string;
  subtitle?: string;
  highlights?: InfrastructureItem[];
}

export interface Testimonial {
  name?: string;
  role?: string;
  organization?: string;
  batch?: string;
  quote?: string;
  photo?: ImageWithAlt;
}

export interface Testimonials {
  title?: string;
  subtitle?: string;
  testimonialsList?: Testimonial[];
}

export interface HomePage {
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
