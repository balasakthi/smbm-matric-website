import type { SanityImageSource } from "@sanity/image-url";
import { ABOUT_PAGE_QUERY, PRINCIPAL_MESSAGE_QUERY } from "@/lib/sanityQuery";
import { MissionVision } from "@/components/sections/about/missionVision";
import { PortableTextBlock } from "next-sanity";
import { fetchSectionData } from "@/lib/sanityFetch";
import { HeroHeader } from "@/components/layout/heroHeader";
import { Overview } from "@/components/sections/about/overview";
import { Heritage } from "@/components/sections/about/heritage";
import { LeadershipMessage } from "@/components/layout/leadershipMessage";

interface AboutPage {
  hero: {
    title: string;
    subtitle?: string;
    label?: string;
    backgroundImage?: SanityImageSource & {
      alt?: string;
    };
  };

  overview: {
    title: string;
    content: PortableTextBlock[];
    image: SanityImageSource & {
      alt?: string;
    };
  };

  missionVision: {
    title: string;
    description: string;
    mission: PortableTextBlock[];
    vision: PortableTextBlock[];
    coreValues?: string;
    quote?: string;
  };

  heritage: {
    label?: string;
    title: string;
    description: string;

    aphorism?: string;
    leadershipMission?: PortableTextBlock[];

    leadership?: {
      name?: string;
      position?: string;
    }[];

    coreFocus?: {
      title?: string;
      content?: PortableTextBlock[];
    };

    schools?: {
      year?: number;
      name?: string;
      type?: string;
    }[];

    socialVision?: {
      title?: string;
      content?: PortableTextBlock[];
    };

    motto?: string[];
  };
}

interface ManagementMessageData {
  name: string;
  designation: string;
  highlightQuote?: string;
  previewMessage?: PortableTextBlock[];
  fullMessage: PortableTextBlock[];
  photo: SanityImageSource;
  slug: {
    current: string;
  };
}

async function About() {
  const about = await fetchSectionData<AboutPage>(ABOUT_PAGE_QUERY);
  console.log(about);

  const data = await fetchSectionData<ManagementMessageData>(
    PRINCIPAL_MESSAGE_QUERY,
  );

  console.log(data);

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
        name={data.name}
        designation={data.designation}
        highlightQuote={data.highlightQuote}
        previewMessage={data.previewMessage}
        photo={data.photo}
        slug={data.slug.current}
      />
    </>
  );
}

export default About;
