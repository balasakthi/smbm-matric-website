import type { AboutPage } from "./types";
import type { ManagementMessageData } from "@/types/message";
import { ABOUT_PAGE_QUERY, PRINCIPAL_MESSAGE_QUERY } from "@/lib/sanityQuery";
import { Heritage } from "@/components/sections/about/heritage";
import { HeroHeader } from "@/components/layout/heroHeader";
import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { MissionVision } from "@/components/sections/about/missionVision";
import { Overview } from "@/components/sections/about/overview";
import { fetchSectionData } from "@/lib/sanityFetch";
import { Stats } from "@/components/sections/stats";
import { Cta } from "@/components/sections/cta";
import { CardGrid } from "@/components/layout/cardGrid";

async function About() {
  const about = await fetchSectionData<AboutPage>(ABOUT_PAGE_QUERY);

  const principal = await fetchSectionData<ManagementMessageData>(
    PRINCIPAL_MESSAGE_QUERY,
  );

  return (
    <>
      <HeroHeader
        label={about.hero.label}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        backgroundImage={about.hero.backgroundImage}
      />

      <Overview
        title={about.overview.title}
        content={about.overview.content}
        image={about.overview.image}
      />

      <MissionVision
        title={about.missionVision.title}
        description={about.missionVision.description}
        mission={about.missionVision.mission}
        vision={about.missionVision.vision}
        coreValues={about.missionVision.coreValues}
        quote={about.missionVision.quote}
      />

      <Heritage
        title={about.heritage.title}
        label={about.heritage.label}
        description={about.heritage.description}
        aphorism={about.heritage.aphorism}
        leadershipMission={about.heritage.leadershipMission}
        leadership={about.heritage.leadership}
        coreFocus={about.heritage.coreFocus}
        schools={about.heritage.schools}
        socialVision={about.heritage.socialVision}
        motto={about.heritage.motto}
      />

      <LeadershipMessage
        name={principal.name}
        designation={principal.designation}
        highlightQuote={principal.highlightQuote}
        previewMessage={principal.previewMessage}
        photo={principal.photo}
        slug={principal.slug.current}
      />

      <CardGrid
        sectionId="studentLife"
        title={about.studentLife.title}
        intro={about.studentLife?.description}
        items={about.studentLife?.items}
        cardBgColor="bg-secondary/50"
      />

      <Stats />
      <Cta />
    </>
  );
}

export default About;
