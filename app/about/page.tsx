import { PortableText } from "next-sanity";
import { GraduationCap, Quote } from "lucide-react";

import { Fade } from "@/components/common/Fade";

import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { CTA } from "@/components/sections/cta";
import { HeroHeader } from "@/components/sections/heroHeader";
import { MissionVisionClient } from "@/components/sections/about/missionVisionClient";
import { StatsItem } from "@/components/sections/StatsItem";

import { FeatureCard } from "@/components/common/featureCard";
import { FeatureImage } from "@/components/common/featureImage";
import { SimpleIcon } from "@/components/common/simpleIcon";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/common/twoColumn";

import { ABOUT_PAGE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";

import type { AboutPage } from "./types";
import { ImageGridSection } from "@/components/common/imageGridSection";
import { InfoCard } from "@/components/common/infoCard";

async function About() {
  const about = await fetchSectionData<AboutPage>(ABOUT_PAGE_QUERY);

  const { overview, missionVision, heritage, studentLife, ctaBlock } = about;

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

      {overview && (
        <SectionWithHeader
          id="school-intro"
          title={overview?.title}
          subtitle={overview?.subtitle}
        >
          <TwoColumn>
            <TwoColumnMedia aspect="video">
              {overview?.image && <FeatureImage image={overview?.image} />}
            </TwoColumnMedia>
            <TwoColumnContent>
              {overview?.content && (
                <div className="leading-loose space-y-6">
                  <PortableText value={overview?.content} />
                </div>
              )}
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {missionVision && (
        <SectionWithHeader
          id="mission-vision"
          title={missionVision?.title}
          subtitle={missionVision?.subtitle}
          sectionClassName="bg-secondary"
          headingAlign="center"
        >
          <MissionVisionClient
            mission={missionVision?.mission || []}
            vision={missionVision?.vision || []}
          />

          <Fade direction="up" delay={0.7}>
            <div className="mt-12 text-center">
              <p className="text-sm uppercase tracking-wide text-muted-foreground">
                Core Values
              </p>
              <p className="mt-2 text-lg font-medium tracking-wide">
                {missionVision?.coreValues}
              </p>
            </div>
          </Fade>

          <Fade direction="up" delay={0.9}>
            <div className="mt-10 max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground italic">
                {missionVision?.missionStatement}
              </p>
            </div>
          </Fade>
        </SectionWithHeader>
      )}

      {heritage && (
        <SectionWithHeader
          id="heritage"
          title={heritage?.title}
          subtitle={heritage?.subtitle}
          label={heritage?.label}
          headingAlign="center"
        >
          <TwoColumn>
            <TwoColumnContent>
              {heritage?.aphorism && (
                <div className="relative p-8 rounded-2xl bg-secondary/60 border border-border shadow-sm">
                  <Quote className="absolute -top-4 -left-4 h-8 w-8 text-primary opacity-50" />
                  <p className="text-xl font-serif italic text-primary leading-snug">
                    {heritage?.aphorism}
                  </p>
                </div>
              )}
              <div className="text-muted-foreground leading-relaxed space-y-2">
                {heritage?.leadershipMission && (
                  <PortableText value={heritage?.leadershipMission} />
                )}
              </div>
            </TwoColumnContent>
            <TwoColumnMedia aspect="video">
              {heritage?.image && <FeatureImage image={heritage?.image} />}
            </TwoColumnMedia>
          </TwoColumn>

          {heritage?.leadership?.length && (
            <Fade direction="up" delay={0.2}>
              <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {heritage?.leadership.map((leader, index) => (
                  <FeatureCard
                    key={`${leader.name}-${index}`}
                    title={leader.name || "Unknown"}
                    subtitle={leader.position}
                    layout="horizontal"
                    variant="secondary"
                    icon={
                      <SimpleIcon icon={"User"} category="leadership" isWhite />
                    }
                  ></FeatureCard>
                ))}
              </div>
            </Fade>
          )}

          <TwoColumn>
            <TwoColumnContent>
              <div className="space-y-8">
                <Fade direction="up" delay={0.3}>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-primary" />
                    <h3 className="text-xl font-bold">Educational Legacy</h3>
                  </div>
                </Fade>

                {heritage?.schools && (
                  <Fade direction="up" delay={0.35}>
                    <div className="relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-border">
                      {heritage?.schools.map(({ year, name, type }, index) => (
                        <div
                          key={index}
                          className="relative pl-6 pb-10 last:pb-0 group hover:translate-x-1 transition-transform"
                        >
                          {/* Dot */}
                          <div className="absolute left-0 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                          {/* Content */}
                          <div className="space-y-1">
                            <p className="text-sm text-primary font-bold">
                              {year ?? ""}
                            </p>

                            <h4 className="font-medium text-base">
                              {name ?? "Unnamed School"}
                            </h4>

                            <p className="text-xs text-muted-foreground">
                              {type ?? ""}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Fade>
                )}
              </div>
            </TwoColumnContent>

            <TwoColumnContent>
              <div className="space-y-8">
                {/* Core Focus */}
                {heritage?.coreFocus?.content && (
                  <Fade direction="up" delay={0.4}>
                    <div className="space-y-3">
                      {heritage?.coreFocus?.title && (
                        <h3 className="text-xl font-semibold">
                          {heritage?.coreFocus?.title}
                        </h3>
                      )}

                      <div className="text-muted-foreground leading-relaxed space-y-2">
                        <PortableText value={heritage?.coreFocus?.content} />
                      </div>
                    </div>
                  </Fade>
                )}
                {/* Vision */}
                {heritage?.socialVision && (
                  <Fade direction="up" delay={0.45}>
                    <InfoCard
                      title={heritage.socialVision?.title}
                      content={heritage.socialVision?.content}
                    />
                  </Fade>
                )}
              </div>
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

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

      {studentLife && (
        <SectionWithHeader
          id="student-life"
          title={studentLife?.title}
          subtitle={studentLife?.subtitle}
        >
          {studentLife.items && (
            <ImageGridSection
              items={studentLife?.items}
              imagePosition="top"
              variant="secondary"
            />
          )}
        </SectionWithHeader>
      )}

      {stats && (
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
      )}

      {ctaBlock && (
        <SectionWithHeader
          id="cta-block"
          sectionClassName="bg-secondary"
          spacing="sm"
        >
          <CTA
            title={ctaBlock?.title}
            supportLine={ctaBlock?.supportLine}
            buttonLink={ctaBlock?.buttonLink}
            buttonText={ctaBlock?.buttonText}
          />
        </SectionWithHeader>
      )}
    </>
  );
}

export default About;
