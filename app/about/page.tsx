import Image from "next/image";

import { User, Quote, GraduationCap } from "lucide-react";

import { Fade } from "@/components/common/Fade";

import { GridSection } from "@/components/layout/gridSection";
import { HeroHeader } from "@/components/layout/heroHeader";
import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/layout/twoColumn";

import { FeatureCard } from "@/components/layout/featureCard";
import { CTA } from "@/components/sections/cta";
import { StatsItem } from "@/components/sections/StatsItem";

import { fetchSectionData } from "@/lib/sanityFetch";
import { ABOUT_PAGE_QUERY } from "@/lib/sanityQuery";
import { urlFor } from "@/sanity/sanity-image";

import { PortableText } from "next-sanity";

import type { AboutPage } from "./types";

async function About() {
  const about = await fetchSectionData<AboutPage>(ABOUT_PAGE_QUERY);

  console.log(about);

  const stats = about.statsBlock?.stats || [];

  const principal = about.managementMessage?.find(
    (message) => message.role?.toLowerCase() === "principal",
  );

  return (
    <>
      <HeroHeader
        label={about.hero?.label}
        title={about.hero?.title}
        subtitle={about.hero?.subtitle}
        backgroundImage={about.hero?.backgroundImage}
      />

      <SectionWithHeader
        id="school-intro"
        title={about.overview?.title}
        subtitle={about.overview?.subtitle}
      >
        <TwoColumn>
          <TwoColumnMedia aspect="video">
            {about.overview?.image && (
              <Image
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                src={urlFor(about.overview?.image).url()}
                alt={about.overview?.image.alt || "S.M.B.M. School"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </TwoColumnMedia>
          <TwoColumnContent>
            {about.overview?.content && (
              <div className="leading-loose space-y-6">
                <PortableText value={about.overview?.content} />
              </div>
            )}
          </TwoColumnContent>
        </TwoColumn>
      </SectionWithHeader>

      <SectionWithHeader
        id="mission-vision"
        title={about.missionVision?.title}
        subtitle={about.missionVision?.subtitle}
        sectionClassName="bg-secondary"
      >
        <TwoColumn>
          <TwoColumnContent>
            <PortableText value={about.missionVision?.vision || []} />
          </TwoColumnContent>

          <TwoColumnContent>
            <PortableText value={about.missionVision?.mission || []} />
          </TwoColumnContent>
        </TwoColumn>

        <Fade direction="up" delay={0.7}>
          <div className="mt-12 text-center">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Core Values
            </p>
            <p className="mt-2 text-lg font-medium tracking-wide">
              {about.missionVision?.coreValues}
            </p>
          </div>
        </Fade>

        <Fade direction="up" delay={0.9}>
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground italic">
              {about.missionVision?.missionStatement}
            </p>
          </div>
        </Fade>
      </SectionWithHeader>

      <SectionWithHeader
        id="heritage"
        title={about.heritage?.title}
        subtitle={about.heritage?.subtitle}
        label={about.heritage?.label}
        headingAlign="center"
      >
        <TwoColumn>
          <TwoColumnContent>
            {about.heritage?.aphorism && (
              <div className="relative p-8 rounded-2xl bg-secondary/60 border border-border shadow-sm">
                <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary opacity-50" />
                <p className="text-xl font-serif italic text-primary leading-snug">
                  {about.heritage?.aphorism}
                </p>
              </div>
            )}
            <div className="text-muted-foreground leading-relaxed space-y-2">
              {about.heritage?.leadershipMission && (
                <PortableText value={about.heritage?.leadershipMission} />
              )}
            </div>
          </TwoColumnContent>
          <TwoColumnMedia aspect="video">
            {about.heritage?.image && (
              <Image
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                src={urlFor(about.heritage?.image).url()}
                alt={about.heritage?.image.alt || "S.M.B.M. School"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </TwoColumnMedia>
        </TwoColumn>

        <div className="text-muted-foreground leading-relaxed space-y-2">
          {about.heritage?.leadership?.length && (
            <Fade direction="up" delay={0.2}>
              <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {about.heritage?.leadership.map((leader, index) => (
                  <FeatureCard
                    key={`${leader.name}-${index}`}
                    icon={User}
                    title={leader.name || "Unknown"}
                    description={leader.position}
                    layout="horizontal"
                    variant="secondary"
                  />
                ))}{" "}
              </div>
            </Fade>
          )}
        </div>
      </SectionWithHeader>

      {principal && (
        <LeadershipMessage
          name={principal?.name || ""}
          designation={principal?.designation || ""}
          highlightQuote={principal?.highlightQuote}
          previewMessage={principal?.previewMessage}
          photo={principal?.photo || ""}
          slug={principal?.slug?.current}
        />
      )}

      <SectionWithHeader
        id="student-life"
        title={about.studentLife?.title}
        subtitle={about.studentLife?.subtitle}
      >
        <GridSection items={about.studentLife?.items}></GridSection>
      </SectionWithHeader>

      <SectionWithHeader sectionClassName="bg-primary" spacing="none">
        <div className="container mx-auto py-12 text-center text-primary-foreground">
          <div className="my-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 justify-center">
            {stats?.map((stat, index) => (
              <StatsItem
                key={`${stat.label}-${index}`}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label || ""}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </SectionWithHeader>

      <CTA
        title={about.ctaBlock?.title || ""}
        supportLine={about.ctaBlock?.supportLine || ""}
      />
    </>
  );
}

export default About;
