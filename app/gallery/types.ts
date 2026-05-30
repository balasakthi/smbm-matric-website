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

interface GalleryCategory {
  _id: string;
  title: string;
  galleries: Gallery[];
}

interface GalleryPage {
  hero?: BaseHero;
  gallery?: SectionHeader;
  ctaBlock?: CTABlock;
  categories: GalleryCategory[];
}

export type { GalleryPage, GalleryCategory, Gallery };
