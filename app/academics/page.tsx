import { PortableText } from "next-sanity";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { HeroHeader } from "@/components/sections/heroHeader";
import { CTA } from "@/components/sections/cta";
import { Curriculum } from "@/components/sections/academics/curriculum";

import { FeatureCard } from "@/components/common/featureCard";
import { FeatureImage } from "@/components/common/featureImage";
import { FeatureList } from "@/components/common/featureList";
import { InfoCard } from "@/components/common/infoCard";
import { SimpleIcon } from "@/components/common/simpleIcon";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/common/twoColumn";

import { ACADEMICS_PAGE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";

import type { AcademicsPage } from "./types";

async function Academics() {
  const academics = await fetchSectionData<AcademicsPage>(ACADEMICS_PAGE_QUERY);

  const {
    hero,
    overview,
    learningApproach,
    kindergarten,
    curriculum,
    teachingMethodology,
    ctaBlock,
  } = academics;

  return (
    <>
      {hero && (
        <HeroHeader
          title={hero.title}
          label={hero.label}
          subtitle={hero.subtitle}
          backgroundImage={hero.backgroundImage}
        />
      )}

      {overview && (
        <SectionWithHeader
          id="academics-overview"
          title={overview?.title}
          subtitle={overview?.subtitle}
        >
          <TwoColumn>
            <TwoColumnMedia>
              {overview?.image && <FeatureImage image={overview?.image} />}
            </TwoColumnMedia>
            <TwoColumnContent>
              <div className="prose prose-lg max-w-none leading-relaxed space-y-4">
                <PortableText value={overview?.content || []} />
              </div>
              {overview?.highlights && (
                <InfoCard highlights={overview.highlights} />
              )}
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {learningApproach && (
        <SectionWithHeader
          id="learning-approach"
          title={learningApproach?.title}
          subtitle={learningApproach?.subtitle}
          sectionClassName="bg-secondary"
        >
          {learningApproach?.points && (
            <FeatureList
              items={learningApproach?.points}
              columns={3}
              renderItem={(item) => (
                <FeatureCard
                  title={item.title || ""}
                  alignment="left"
                  icon={
                    <SimpleIcon
                      icon={item.icon || "School"}
                      category="learningApproach"
                    />
                  }
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </FeatureCard>
              )}
            />
          )}
        </SectionWithHeader>
      )}

      {teachingMethodology && (
        <SectionWithHeader
          id="teaching-methodology"
          title={teachingMethodology?.title}
          subtitle={teachingMethodology?.subtitle}
          headingAlign="center"
        >
          <TwoColumn>
            <TwoColumnContent>
              <PortableText value={teachingMethodology?.description || []} />
              {teachingMethodology?.content &&
                teachingMethodology?.content.map((content, index) => (
                  <section
                    className="flex gap-6 items-start border-t pt-6"
                    key={index}
                  >
                    <SimpleIcon
                      className="shrink-0"
                      icon={content.icon || "Sparkles"}
                      category="teachingMethodology"
                    />

                    <div className="w-full">
                      <h3 className="text-xl font-semibold mb-3">
                        {content.title}
                      </h3>

                      <div className="text-muted-foreground leading-relaxed">
                        <PortableText value={content.description} />
                      </div>
                    </div>
                  </section>
                ))}
            </TwoColumnContent>
            <TwoColumnMedia aspect="square">
              {teachingMethodology?.image && (
                <FeatureImage image={teachingMethodology?.image} />
              )}
            </TwoColumnMedia>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {kindergarten && (
        <SectionWithHeader
          id="kindergarten"
          title={kindergarten?.title}
          subtitle={kindergarten?.subtitle}
          sectionClassName="bg-secondary"
        >
          <TwoColumn>
            <TwoColumnMedia>
              {kindergarten?.image && (
                <FeatureImage image={kindergarten?.image} />
              )}
            </TwoColumnMedia>
            <TwoColumnContent>
              <Accordion className="w-full" defaultValue="item-0" type="single">
                {kindergarten?.sections &&
                  kindergarten?.sections.map((section, index) => (
                    <AccordionItem
                      className="group/accordion-item data-[state=open]:border-primary data-[state=open]:border-b-2"
                      key={index}
                      value={`item-${index}`}
                    >
                      <AccordionTrigger className="text-lg group-first/accordion-item:pt-0">
                        <div className="flex items-center gap-4">
                          {section.title}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-[17px] text-muted-foreground leading-relaxed">
                        <PortableText value={section.description} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {curriculum && (
        <SectionWithHeader
          id="curriculum"
          title={curriculum?.title}
          subtitle={curriculum?.subtitle}
          headingAlign="center"
        >
          <Curriculum groups={curriculum?.groups || []} />
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

export default Academics;
