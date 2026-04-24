import { PortableTextBlock } from "next-sanity";

import type {
  BaseHero,
  ButtonActions,
  CTABlock,
  ImageWithAlt,
  ManagementMessage,
  StatsBlock,
} from "../shared-types";

export interface OverviewSection extends ButtonActions {
  title?: string;
  subtitle?: string;
  content?: PortableTextBlock[];
  image?: ImageWithAlt;
}

export interface MissionVisionItem {
  title?: string;
  description?: PortableTextBlock[];
  icon?: string;
}

export interface MissionVisionSection {
  title?: string;
  subtitle?: string;
  mission?: PortableTextBlock[];
  vision?: PortableTextBlock[];
  coreValues?: string;
  missionStatement?: string;
  items?: MissionVisionItem[];
}

export interface LeadershipMember {
  name?: string;
  position?: string;
  bio?: PortableTextBlock[];
  photo?: ImageWithAlt;
  order?: number;
}

export interface CoreFocusItem {
  title?: string;
  content?: PortableTextBlock[];
  icon?: string;
}

export interface SchoolHistoryItem {
  year?: number;
  name?: string;
  type?: string;
  description?: string;
  image?: ImageWithAlt;
}

export interface SocialVisionItem {
  title?: string;
  content?: PortableTextBlock[];
  icon?: string;
}

export interface HeritageSection {
  label?: string;
  title?: string;
  subtitle?: string;
  image?: ImageWithAlt;
  aphorism?: string;
  motto?: string[];
  leadershipMission?: PortableTextBlock[];
  leadership?: LeadershipMember[];
  coreFocus?: CoreFocusItem[];
  schools?: SchoolHistoryItem[];
  socialVision?: SocialVisionItem[];
}

export interface StudentLifeItem {
  title?: string;
  badge?: string;
  description?: string;
  image?: ImageWithAlt;
  order?: number;
}

export interface StudentLifeSection {
  title?: string;
  subtitle?: string;
  items?: StudentLifeItem[];
}

export interface AboutPage {
  hero?: BaseHero;
  overview?: OverviewSection;
  missionVision?: MissionVisionSection;
  heritage?: HeritageSection;
  managementMessage?: ManagementMessage[];
  studentLife?: StudentLifeSection;
  statsBlock?: StatsBlock;
  ctaBlock?: CTABlock;
}
