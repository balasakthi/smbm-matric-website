import { PortableTextBlock } from "next-sanity";
import type {
  BaseHero,
  CTABlock,
  SectionHeader,
  LeadershipMember,
} from "../shared-types";

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
