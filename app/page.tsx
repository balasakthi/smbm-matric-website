import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { AcademicLevel } from "@/components/sections/academicLevel";
import { Achievements } from "@/components/sections/acheivements";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Highlights } from "@/components/sections/highlights";
import { Infrastructure } from "@/components/sections/infrastructure";
import { SchoolIntro } from "@/components/sections/schoolIntro";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyChooseSmbm } from "@/components/sections/whyChooseSmbm";
import { fetchSectionData } from "@/lib/sanityFetch";
import { PortableTextBlock } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";
import { CORRESPONDENT_MESSAGE_QUERY } from "@/lib/sanityQuery";

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

export default async function Home() {
  const correspondent = await fetchSectionData<ManagementMessageData>(
    CORRESPONDENT_MESSAGE_QUERY,
  );

  return (
    <>
      <Hero />
      <Highlights />
      <SchoolIntro />
      <LeadershipMessage
        name={correspondent.name}
        designation={correspondent.designation}
        highlightQuote={correspondent.highlightQuote}
        previewMessage={correspondent.previewMessage}
        photo={correspondent.photo}
        slug={correspondent.slug.current}
      />
      <WhyChooseSmbm />
      <Stats />
      <AcademicLevel />
      <Achievements />
      <Infrastructure />
      <Testimonials />
      <Cta />
    </>
  );
}
