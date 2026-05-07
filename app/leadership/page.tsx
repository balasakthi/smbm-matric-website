import { CTA } from "@/components/sections/cta";
import { HeroHeader } from "@/components/sections/heroHeader";
import { LeadershipGrid } from "@/components/sections/leadership/leadershipGrid";

import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { fetchSectionData } from "@/lib/sanityFetch";
import { LEADERSHIP_PAGE_QUERY } from "@/lib/sanityQuery";

import type { LeadershipPage } from "./types";

async function Leadership() {
  const leadership = await fetchSectionData<LeadershipPage>(
    LEADERSHIP_PAGE_QUERY,
  );

  const {
    hero,
    managementSection,
    managementMembers,
    academicSection,
    academicMembers,
    ctaBlock,
  } = leadership;

  console.log(leadership);

  return (
    <>
      <HeroHeader
        label={hero?.label}
        title={hero?.title}
        subtitle={hero?.subtitle}
        backgroundImage={hero?.backgroundImage}
      />

      {managementSection && (
        <SectionWithHeader
          id="management-section"
          title={managementSection?.title}
          subtitle={managementSection?.subtitle}
          label={managementSection?.label}
          headingAlign="center"
        >
          <LeadershipGrid
            members={managementMembers}
            variant="secondary"
          ></LeadershipGrid>
        </SectionWithHeader>
      )}

      {academicSection && (
        <SectionWithHeader
          id="academic-section"
          title={academicSection?.title}
          subtitle={academicSection?.subtitle}
          label={academicSection?.label}
          headingAlign="center"
          sectionClassName="bg-secondary"
        >
          <LeadershipGrid members={academicMembers}></LeadershipGrid>
        </SectionWithHeader>
      )}

      {ctaBlock && (
        <SectionWithHeader id="cta-block" spacing="sm">
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

export default Leadership;
