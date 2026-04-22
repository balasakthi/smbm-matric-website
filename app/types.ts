import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "next-sanity";

export interface OrderedItem {
  order?: number;
}

export interface ButtonActions {
  buttonText?: string;
  buttonLink?: string;
}

export interface HeroSection {
  title?: string;
  subtitle?: string;
  label?: string;
  established?: string;
  schoolMotto?: string;
  admissionText?: string;
  admissionOpen?: boolean;
  backgroundImage?: SanityImageSource & {
    alt?: string;
  };
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
  aboutImage?: SanityImageSource & {
    alt?: string;
  };
}

export interface ManagementMessage extends OrderedItem {
  role?: string;
  name?: string;
  designation?: string;
  highlightQuote?: string;
  previewMessage?: PortableTextBlock[];
  fullMessage?: PortableTextBlock[];
  photo?: SanityImageSource & {
    alt?: string;
  };
  slug?: {
    current?: string;
  };
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

export interface StatItem extends OrderedItem {
  value?: number;
  suffix?: string;
  label?: string;
}

export interface StatsBlock {
  stats?: StatItem[];
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
  photo?: SanityImageSource & {
    alt?: string;
  };
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
  resultPoster?: SanityImageSource & {
    alt?: string;
  };
  topStudents?: Student[];
}

export interface InfrastructureItem {
  title?: string;
  description?: string;
  image?: SanityImageSource & {
    alt?: string;
  };
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
  photo?: SanityImageSource & {
    alt?: string;
  };
}

export interface Testimonials {
  title?: string;
  subtitle?: string;
  testimonialsList?: Testimonial[];
}

export interface CTABlock {
  title?: string;
  supportLine?: string;
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
