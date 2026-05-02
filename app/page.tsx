import { PortableText } from "next-sanity";

import { ActionButton } from "@/components/common/actionButton";
import { FeatureCard } from "@/components/common/featureCard";
import { FeatureImage } from "@/components/common/featureImage";
import { FeatureList } from "@/components/common/featureList";
import { GridList } from "@/components/common/gridList";
import { IconGridItem } from "@/components/common/iconGridItem";
import { ImageGridSection } from "@/components/common/imageGridSection";
import { SimpleIcon } from "@/components/common/simpleIcon";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/common/twoColumn";

import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { Achievements } from "@/components/sections/acheivements";
import { CTA } from "@/components/sections/cta";
import { HeroHeader } from "@/components/sections/heroHeader";
import { StatsItem } from "@/components/sections/StatsItem";
import { TestimonialsCarousel } from "@/components/sections/testimonialsCarousel";

import { fetchSectionData } from "@/lib/sanityFetch";
import { HOME_PAGE_QUERY } from "@/lib/sanityQuery";
import type { HomePage } from "./types";

export default async function Home() {
  const home = await fetchSectionData<HomePage>(HOME_PAGE_QUERY);

  const {
    hero,
    quickHighlights,
    schoolIntroduction,
    whyChooseSMBM,
    academicLevels,
    statsBlock,
    infrastructureHighlights,
    testimonials,
    ctaBlock,
  } = home;

  const academicResult =
    home.academicResults?.find((r) => r.isCurrent) || home.academicResults?.[0];

  const stats = statsBlock?.stats || [];

  const correspondent = home.managementMessage?.find(
    (message) => message.role?.toLowerCase() === "correspondent",
  );

  return (
    <>
      <HeroHeader
        title={hero?.title}
        subtitle={hero?.subtitle}
        established={hero?.established}
        schoolMotto={hero?.schoolMotto}
        admissionText={hero?.admissionText}
        admissionOpen={hero?.admissionOpen}
        backgroundImage={hero?.backgroundImage}
        isHome
      />

      {quickHighlights && (
        <SectionWithHeader sectionClassName="bg-secondary" spacing="sm">
          <FeatureList
            items={quickHighlights}
            columns={4}
            renderItem={(item) => (
              <FeatureCard
                title={item.title || ""}
                alignment="left"
                icon={
                  <SimpleIcon
                    icon={item.icon || "School"}
                    category="quickHighlight"
                  />
                }
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </FeatureCard>
            )}
          />
        </SectionWithHeader>
      )}

      {schoolIntroduction && (
        <SectionWithHeader id="school-intro" spacing="lg">
          <TwoColumn>
            <TwoColumnMedia
              bannerTitle={schoolIntroduction?.title}
              bannerText={schoolIntroduction?.subtitle}
            >
              {schoolIntroduction?.aboutImage && (
                <FeatureImage image={schoolIntroduction?.aboutImage} />
              )}
            </TwoColumnMedia>

            <TwoColumnContent>
              {schoolIntroduction?.description && (
                <div className="leading-loose space-y-6">
                  <PortableText value={schoolIntroduction?.description} />
                  <ActionButton
                    text={schoolIntroduction?.buttonText || "Read More"}
                    href={schoolIntroduction?.buttonLink}
                  />
                </div>
              )}
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {correspondent && (
        <LeadershipMessage
          name={correspondent?.name || ""}
          designation={correspondent?.designation || ""}
          highlightQuote={correspondent?.highlightQuote}
          previewMessage={correspondent?.previewMessage}
          photo={correspondent?.photo || ""}
          slug={correspondent?.slug?.current}
        />
      )}

      {whyChooseSMBM && (
        <SectionWithHeader
          id="why-choose-SMBM"
          title={whyChooseSMBM?.title}
          subtitle={whyChooseSMBM?.subtitle}
        >
          <FeatureList
            items={whyChooseSMBM?.reasons || []}
            columns={3}
            renderItem={(item) => (
              <FeatureCard
                title={item.title || ""}
                alignment="left"
                icon={
                  <SimpleIcon
                    icon={item.icon || "School"}
                    category="whyChoose"
                    isWhite
                  />
                }
                variant="secondary"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </FeatureCard>
            )}
          />
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

      {academicLevels && (
        <SectionWithHeader
          id="academics"
          title={academicLevels?.title}
          subtitle={academicLevels?.subtitle}
          sectionClassName="bg-secondary"
        >
          <GridList
            items={academicLevels?.levels || []}
            columns={3}
            footer={
              <ActionButton
                href={academicLevels?.buttonLink}
                text={academicLevels?.buttonText || "Read More"}
                size="lg"
              />
            }
            renderItem={(item) => (
              <IconGridItem
                icon={
                  <SimpleIcon
                    icon={item.icon || "School"}
                    category="academics"
                    isWhite
                  />
                }
                title={item.title}
                description={<span>{item.description}</span>}
              ></IconGridItem>
            )}
          ></GridList>
        </SectionWithHeader>
      )}

      {academicResult && (
        <SectionWithHeader
          id="academic-result"
          title={academicResult?.title}
          subtitle={academicResult?.subtitle}
          headingAlign="center"
        >
          <Achievements academicResults={academicResult} />
        </SectionWithHeader>
      )}

      {infrastructureHighlights && (
        <SectionWithHeader
          id="infrastructure"
          title={infrastructureHighlights?.title}
          subtitle={infrastructureHighlights?.subtitle}
          sectionClassName="bg-secondary"
        >
          <ImageGridSection
            items={infrastructureHighlights?.highlights || []}
            imagePosition="bottom"
          ></ImageGridSection>
        </SectionWithHeader>
      )}

      {testimonials && (
        <SectionWithHeader
          id="testimonials"
          title={home.testimonials?.title}
          subtitle={home.testimonials?.subtitle}
          headingAlign="center"
        >
          {testimonials?.testimonialsList && (
            <TestimonialsCarousel
              testimonials={testimonials?.testimonialsList}
            />
          )}
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
