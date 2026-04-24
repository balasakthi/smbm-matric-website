import type { SanityImageSource } from "@sanity/image-url";
import { PortableTextBlock } from "next-sanity";

export interface ImageWithAlt {
  asset?: SanityImageSource;
  alt?: string;
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
  backgroundImage?: SanityImageSource & {
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

export interface StatItem extends OrderedItem {
  value?: number;
  suffix?: string;
  label?: string;
}

export interface StatsBlock {
  stats?: StatItem[];
}

export interface CTABlock {
  title?: string;
  supportLine?: string;
}
