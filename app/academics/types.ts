import { PortableTextBlock } from "next-sanity";
import type {
  BaseHero,
  CTABlock,
  ImageWithAlt,
  OverviewSection,
} from "../shared-types";

interface CurriculumCategory {
  title: string;
  icon?: string;
  subjects: string[];
}

interface KGGroup {
  _type: "kgGroup";
  groupName: string;
  icon?: string;
  description: string;
  type: "kg";
  categories: CurriculumCategory[];
}

interface StandardGroup {
  _type: "standardGroup";
  groupName: string;
  icon?: string;
  description: string;
  type: "standard";
  categories: CurriculumCategory[];
}

interface HigherSecondaryStream {
  streamName: string;
  icon?: string;
  languages: string[];
  coreSubjects: string[];
  groupOptions: string[];
}

interface HigherSecondaryGroup {
  _type: "higherSecondaryGroup";
  groupName: string;
  icon?: string;
  description: string;
  type: "higherSecondary";
  streams: HigherSecondaryStream[];
}

type CurriculumGroup = KGGroup | StandardGroup | HigherSecondaryGroup;

interface ContentBlock {
  title: string;
  icon?: string;
  description: PortableTextBlock[];
}

interface AcademicsOverviewSection extends OverviewSection {
  highlights?: string[];
}

interface LearningApproachSection {
  title: string;
  subtitle?: string;
  points?: {
    title: string;
    description: string;
    icon?: string;
  }[];
}

interface CurriculumSection {
  title: string;
  subtitle?: string;
  groups: CurriculumGroup[];
}

interface kindergartenSection {
  title: string;
  subtitle?: string;
  sections?: {
    title: string;
    description: PortableTextBlock[];
  }[];
  image?: ImageWithAlt;
}

interface TeachingMethodologySection {
  title: string;
  subtitle?: string;
  description?: PortableTextBlock[];
  content?: ContentBlock[];
  image?: ImageWithAlt;
}

interface AcademicsPage {
  hero?: BaseHero;
  overview?: AcademicsOverviewSection;
  kindergarten?: kindergartenSection;
  learningApproach?: LearningApproachSection;
  curriculum?: CurriculumSection;
  teachingMethodology?: TeachingMethodologySection;
  ctaBlock?: CTABlock;
}

export type { AcademicsPage };
