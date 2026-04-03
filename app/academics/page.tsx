import { ACADEMICS_PAGE_QUERY } from "@/lib/sanityQuery";
import type { AcademicsPage } from "./types";
import { fetchSectionData } from "@/lib/sanityFetch";
import { HeroHeader } from "@/components/layout/heroHeader";
import { FeatureGrid } from "@/components/layout/featureGrid";
import { getIcon, learningApproachIconMap } from "@/lib/iconMaps";
import { School } from "lucide-react";
import { Curriculum } from "@/components/sections/academics/curriculum";
import { TeachingMethodology } from "@/components/sections/academics/teachingMethodology";
import { Overview } from "@/components/sections/academics/overview";
import { Cta } from "@/components/sections/cta";

async function Academics() {
  const academicPage =
    await fetchSectionData<AcademicsPage>(ACADEMICS_PAGE_QUERY);

  console.log(academicPage);

  return (
    <>
      <HeroHeader
        title={academicPage.hero.title}
        label={academicPage.hero.label}
        subtitle={academicPage.hero.subtitle}
        backgroundImage={academicPage.hero.backgroundImage}
      />

      <Overview
        title={academicPage.overview.title}
        content={academicPage.overview.content}
      />

      <FeatureGrid
        title={academicPage.learningApproach.title}
        intro={academicPage.learningApproach.subtitle}
        items={academicPage.learningApproach.points}
        getIcon={getIcon}
        iconMap={learningApproachIconMap}
        fallbackIcon={School}
        headingId="why-choose-heading"
        containerClassName="bg-secondary"
      />

      <Overview
        title={academicPage.kindergarten.title}
        content={academicPage.kindergarten.content}
      />

      <Curriculum
        title={academicPage.curriculum.title}
        subtitle={academicPage.curriculum.subtitle}
        levels={academicPage.curriculum.levels}
      />

      <TeachingMethodology
        title={academicPage.teachingMethodology.title}
        description={academicPage.teachingMethodology.description}
        methodologies={academicPage.teachingMethodology.methodologies}
        image={academicPage.teachingMethodology.image}
      />

      <Cta />
    </>
  );
}

export default Academics;
