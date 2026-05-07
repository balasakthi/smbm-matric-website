import { PortableTextBlock } from "next-sanity";
import type {
  BaseHero,
  CTABlock,
  ImageWithAlt,
  SectionHeader,
} from "../shared-types";

interface LeadershipMember {
  _id: string;
  name: string;
  designation: string;
  category: "management" | "academicLeadership";
  role:
    | "correspondent"
    | "principal"
    | "vicePrincipal"
    | "president"
    | "vicePresident"
    | "treasurer"
    | "assistantSecretary"
    | "coordinator";
  featured?: boolean;
  highlightQuote?: string;
  previewMessage?: PortableTextBlock[];
  slug?: {
    current: string;
  };
  photo?: ImageWithAlt;
}

interface LeadershipPage {
  hero?: BaseHero;
  introduction?: PortableTextBlock[];
  managementSection?: SectionHeader;
  academicSection?: SectionHeader;
  managementMembers?: LeadershipMember[];
  academicMembers?: LeadershipMember[];
  ctaBlock?: CTABlock;
}

export type { LeadershipPage, LeadershipMember };
