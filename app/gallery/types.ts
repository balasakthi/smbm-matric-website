import type {
  BaseHero,
  CTABlock,
  ImageWithAlt,
  SectionHeader,
} from "../shared-types";

interface Gallery {
  _id: string;
  title: string;

  thumbnail?: ImageWithAlt;

  previewImages?: ImageWithAlt[];
  imageCount?: number;
}

interface Category {
  _id: string;
  title: string;
  galleries: Gallery[];
}

interface GalleryPage {
  hero?: BaseHero;
  gallery?: SectionHeader;
  ctaBlock?: CTABlock;
  categories: Category[];
}

export type { GalleryPage, Category, Gallery };
