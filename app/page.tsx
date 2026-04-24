import { PortableText } from "next-sanity";
import Image from "next/image";

import { ActionButton } from "@/components/layout/actionButton";
import { CTA } from "@/components/sections/cta";
import { FeatureList } from "@/components/layout/featureList";
import { GridSection } from "@/components/layout/gridSection";
import { HeroHeader } from "@/components/layout/heroHeader";
import { IconGridSection } from "@/components/layout/iconGridSection";
import { LeadershipMessage } from "@/components/layout/leadershipMessage";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/layout/twoColumn";

import { Achievements } from "@/components/sections/acheivements";
import { StatsItem } from "@/components/sections/StatsItem";
import { TestimonialsCarousel } from "@/components/sections/testimonialsCarousel";

import { fetchSectionData } from "@/lib/sanityFetch";
import { HOME_PAGE_QUERY } from "@/lib/sanityQuery";
import { urlFor } from "@/sanity/sanity-image";

import {
  academicsIconMap,
  quickHighlightIconMap,
  whyChooseSmbmIconMap,
} from "@/lib/iconMaps";

import type { HomePage } from "./types";

export default async function Home() {
  const home = await fetchSectionData<HomePage>(HOME_PAGE_QUERY);

  const intro = home.schoolIntroduction;

  const correspondent = home.managementMessage?.find(
    (message) => message.role?.toLowerCase() === "correspondent",
  );

  const stats = home.statsBlock?.stats || [];

  const academicResult =
    home.academicResults?.find((r) => r.isCurrent) || home.academicResults?.[0];

  return (
    <>
      <HeroHeader
        title={home.hero?.title}
        subtitle={home.hero?.subtitle}
        established={home.hero?.established}
        schoolMotto={home.hero?.schoolMotto}
        admissionText={home.hero?.admissionText}
        admissionOpen={home.hero?.admissionOpen}
        backgroundImage={home.hero?.backgroundImage}
        isHome
      />

      <SectionWithHeader sectionClassName="bg-secondary" spacing="sm">
        <FeatureList
          items={home.quickHighlights}
          iconMap={quickHighlightIconMap}
          columns={4}
          variant="white"
        />
      </SectionWithHeader>

      <SectionWithHeader id="school-intro" spacing="lg">
        <TwoColumn>
          <TwoColumnMedia
            bannerTitle={intro?.title}
            bannerText={intro?.subtitle}
          >
            {intro?.aboutImage && (
              <Image
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                src={urlFor(intro?.aboutImage).url()}
                alt={intro?.aboutImage.alt || "S.M.B.M. School"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </TwoColumnMedia>

          <TwoColumnContent>
            {intro?.description && (
              <div className="leading-loose space-y-6">
                <PortableText value={intro?.description} />
                <ActionButton
                  text={intro?.buttonText || "Read More"}
                  href={intro?.buttonLink}
                />
              </div>
            )}
          </TwoColumnContent>
        </TwoColumn>
      </SectionWithHeader>

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

      <SectionWithHeader
        id="why-choose-SMBM"
        title={home.whyChooseSMBM?.title}
        subtitle={home.whyChooseSMBM?.subtitle}
      >
        <FeatureList
          items={home.whyChooseSMBM?.reasons}
          iconMap={whyChooseSmbmIconMap}
          columns={3}
          variant="secondary"
        />
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

      <SectionWithHeader
        id="academics"
        title={home.academicLevels?.title}
        subtitle={home.academicLevels?.subtitle}
        sectionClassName="bg-secondary"
      >
        <IconGridSection
          items={home.academicLevels?.levels || []}
          iconMap={academicsIconMap}
          button={{
            text: home.academicLevels?.buttonText || "Read more",
            href: home.academicLevels?.buttonLink || "/",
          }}
        ></IconGridSection>
      </SectionWithHeader>

      <SectionWithHeader
        id="academic-result"
        title={academicResult?.title}
        subtitle={academicResult?.subtitle}
        headingAlign="center"
      >
        <Achievements academicResults={home.academicResults} />
      </SectionWithHeader>

      <SectionWithHeader
        id="infrastructure"
        title={home.infrastructureHighlights?.title}
        subtitle={home.infrastructureHighlights?.subtitle}
        sectionClassName="bg-secondary"
      >
        <GridSection
          items={home.infrastructureHighlights?.highlights}
          imagePosition="bottom"
          cardBgColor="bg-background"
        />
      </SectionWithHeader>

      <SectionWithHeader
        id="testimonials"
        title={home.testimonials?.title}
        subtitle={home.testimonials?.subtitle}
        headingAlign="center"
      >
        {home.testimonials?.testimonialsList && (
          <TestimonialsCarousel
            testimonials={home.testimonials?.testimonialsList}
          />
        )}
      </SectionWithHeader>

      <CTA
        title={home.ctaBlock?.title || ""}
        supportLine={home.ctaBlock?.supportLine || ""}
      />
    </>
  );
}
