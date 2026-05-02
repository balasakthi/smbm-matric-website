import { CTA } from "@/components/sections/cta";
import { CareerForm } from "@/components/sections/careerForm";
import { HeroHeader } from "@/components/sections/heroHeader";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/common/twoColumn";

import { FeatureImage } from "@/components/common/featureImage";
import { GridList } from "@/components/common/gridList";
import { IconGridItem } from "@/components/common/iconGridItem";
import { SimpleIcon } from "@/components/common/simpleIcon";

import { fetchSectionData } from "@/lib/sanityFetch";
import { CAREERS_PAGE_QUERY } from "@/lib/sanityQuery";
import type { CareersPage } from "./types";

async function Careers() {
  const careers = await fetchSectionData<CareersPage>(CAREERS_PAGE_QUERY);

  const { hero, whyJoinSMBM, applicationForm, ctaBlock } = careers;

  return (
    <>
      <HeroHeader
        label={hero?.label}
        title={hero?.title || ""}
        subtitle={hero?.subtitle}
        backgroundImage={hero?.backgroundImage}
      />

      {whyJoinSMBM && (
        <SectionWithHeader
          id="whyJoinSMBM"
          label={whyJoinSMBM?.label}
          title={whyJoinSMBM?.title}
          subtitle={whyJoinSMBM?.subtitle}
          headingAlign="center"
        >
          {whyJoinSMBM.highlights && whyJoinSMBM.highlights.length > 0 && (
            <GridList
              items={whyJoinSMBM.highlights}
              columns={3}
              renderItem={(item) => (
                <IconGridItem
                  icon={
                    <SimpleIcon
                      icon={item.icon || "School"}
                      category="whyJoinSMBM"
                    />
                  }
                  title={item.title}
                  description={<span>{item.description}</span>}
                ></IconGridItem>
              )}
            ></GridList>
          )}
        </SectionWithHeader>
      )}

      {applicationForm && (
        <SectionWithHeader
          id="application-form"
          label={applicationForm?.label}
          title={applicationForm?.title}
          subtitle={applicationForm?.subtitle}
          headingAlign="center"
          sectionClassName="bg-secondary"
        >
          <TwoColumn align="stretch" className="bg-white rounded-xl shadow-md">
            <TwoColumnMedia aspect="auto">
              <FeatureImage image={applicationForm?.image} />
            </TwoColumnMedia>
            <TwoColumnContent className="p-12">
              <CareerForm formTitle={applicationForm?.formTitle} />
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {ctaBlock && (
        <SectionWithHeader id="cta-block" spacing="sm">
          <CTA
            title={ctaBlock?.title}
            supportLine={ctaBlock?.supportLine}
            buttonLink={ctaBlock?.buttonLink}
            buttonText={ctaBlock?.buttonText}
            formId="career-form"
          />
        </SectionWithHeader>
      )}
    </>
  );
}

export default Careers;
