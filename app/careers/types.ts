import type {
  BaseHero,
  SectionHeader,
  CTABlock,
  ImageWithAlt,
} from "../shared-types";

interface Highlight {
  title: string;
  description: string;
  icon?: string;
}

interface WhyJoinSMBM extends SectionHeader {
  highlights?: Highlight[];
}

interface ApplicationForm extends SectionHeader {
  formTitle: string;
  image: ImageWithAlt;
}

interface CareersPage {
  hero?: BaseHero;
  whyJoinSMBM?: WhyJoinSMBM;
  applicationForm?: ApplicationForm;
  ctaBlock?: CTABlock;
}

export type { CareersPage };
