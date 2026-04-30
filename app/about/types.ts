import { PortableTextBlock } from "next-sanity";

import type {
  BaseHero,
  ButtonActions,
  CTABlock,
  ImageWithAlt,
  ManagementMessage,
  StatsBlock,
} from "../shared-types";

interface OverviewSection extends ButtonActions {
  title?: string;
  subtitle?: string;
  content?: PortableTextBlock[];
  image?: ImageWithAlt;
}

interface MissionVisionItem {
  title?: string;
  description?: PortableTextBlock[];
  icon?: string;
}

interface MissionVisionSection {
  title?: string;
  subtitle?: string;
  mission?: PortableTextBlock[];
  vision?: PortableTextBlock[];
  coreValues?: string;
  missionStatement?: string;
  items?: MissionVisionItem[];
}

interface LeadershipMember {
  name?: string;
  position?: string;
}

interface CoreFocusItem {
  title?: string;
  content?: PortableTextBlock[];
}

interface SchoolHistoryItem {
  year?: number;
  name?: string;
  type?: string;
  description?: string;
  image?: ImageWithAlt;
}

interface SocialVisionItem {
  title?: string;
  content?: PortableTextBlock[];
  icon?: string;
}

interface HeritageSection {
  label?: string;
  title?: string;
  subtitle?: string;
  image?: ImageWithAlt;
  aphorism?: string;
  motto?: string[];
  leadershipMission?: PortableTextBlock[];
  leadership?: LeadershipMember[];
  coreFocus?: CoreFocusItem;
  schools?: SchoolHistoryItem[];
  socialVision?: SocialVisionItem;
}

interface StudentLifeItem {
  title?: string;
  badge?: string;
  description?: string;
  image?: ImageWithAlt;
  order?: number;
}

interface StudentLifeSection {
  title?: string;
  subtitle?: string;
  items?: StudentLifeItem[];
}

interface AboutPage {
  hero?: BaseHero;
  overview?: OverviewSection;
  missionVision?: MissionVisionSection;
  heritage?: HeritageSection;
  managementMessage?: ManagementMessage[];
  studentLife?: StudentLifeSection;
  statsBlock?: StatsBlock;
  ctaBlock?: CTABlock;
}

export type { AboutPage };
