import { PortableTextBlock } from "next-sanity";

export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface ImageAsset {
  _id: string;
  url: string;
  metadata: {
    dimensions: ImageDimensions;
  };
}

export interface ImageWithAlt {
  asset?: ImageAsset;
  alt?: string;
}

export interface SectionHeader {
  label?: string;
  title: string;
  subtitle?: string;
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

export interface Testimonial {
  name?: string;
  role?: string;
  organization?: string;
  batch?: string;
  quote?: string;
  photo?: ImageWithAlt;
}

export interface OrderedItem {
  order?: number;
}

export interface ButtonActions {
  buttonText?: string;
  buttonLink?: string;
}

export interface BaseHero {
  title?: string;
  subtitle?: string;
  label?: string;
  backgroundImage?: ImageWithAlt;
}

export interface OverviewSection {
  title: string;
  subtitle?: string;
  content?: PortableTextBlock[];
  image?: ImageWithAlt;
}

export interface ManagementMessage extends OrderedItem {
  role?: string;
  name?: string;
  designation?: string;
  highlightQuote?: string;
  previewMessage?: PortableTextBlock[];
  fullMessage?: PortableTextBlock[];
  photo?: ImageWithAlt;
  slug?: {
    current?: string;
  };
}

export interface ContactInfo {
  officeHours?: {
    days?: string;
    timing?: string;
  }[];
  phones?: string[];
  emails?: string[];
  address?: PortableTextBlock[];
}

export interface StatItem extends OrderedItem {
  value?: number;
  suffix?: string;
  label?: string;
}

export interface StatsBlock {
  stats?: StatItem[];
}

export interface CTABlock {
  title: string;
  supportLine: string;
  buttonLink: string;
  buttonText: string;
}
