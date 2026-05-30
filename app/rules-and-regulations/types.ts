import { PortableTextBlock } from "next-sanity";

import type { BaseHero, ListItem, SectionHeader } from "../shared-types";

interface Discipline extends SectionHeader {
  rules: ListItem[];
}

interface UniformPolicy extends SectionHeader {
  guidelines: string[];

  uniformCategories: {
    classGroup: string;
    boysUniform: string;
    girlsUniform: string;
  }[];

  specialUniformNote: string;
}

interface PrayerAndPledge extends SectionHeader {
  morningPrayer: PortableTextBlock[];
  eveningPrayer: PortableTextBlock[];
  loyaltyPledge: PortableTextBlock[];
}

interface RulesAndRegulationsPage {
  hero?: BaseHero;
  discipline?: Discipline;
  uniformPolicy?: UniformPolicy;
  prayerAndPledge?: PrayerAndPledge;
}

export type { RulesAndRegulationsPage };
