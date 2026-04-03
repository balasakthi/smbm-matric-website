import type { SanityImageSource } from "@sanity/image-url";
import { ADMISSION_PAGE_QUERY } from "@/lib/sanityQuery";
import { Contact } from "@/components/sections/admission/contact";
import { Documents } from "@/components/sections/admission/documents";
import { FeatureGrid } from "@/components/layout/featureGrid";
import { FileCheck, School } from "lucide-react";
import { Guidelines } from "@/components/sections/admission/guidelines";
import { HeroHeader } from "@/components/layout/heroHeader";
import { Overview } from "@/components/sections/admission/overview";
import { PortableTextBlock } from "next-sanity";
import { Process } from "@/components/sections/admission/process";
import {
  classCategoriesIconMap,
  documentIconMap,
  getIcon,
} from "@/lib/iconMaps";
import { fetchSectionData } from "@/lib/sanityFetch";

interface AdmissionPage {
  heroTitle: string;
  heroSubtitle: string;
  backgroundImage: SanityImageSource;

  overviewTitle: string;
  overviewContent: PortableTextBlock[];

  classesTitle: string;
  classesIntro: string;
  classes: {
    title: string;
    icon?: string;
    subtitle?: string;
    description?: string;
  }[];

  processTitle: string;
  processIntro: string;
  processSteps: {
    title: string;
    description?: string;
  }[];

  documentsTitle?: string;
  documentsIntro?: string;
  documents?: {
    icon?: string;
    label: string;
  }[];

  guidelinesTitle?: string;
  guidelinesIntro?: string;
  guidelines?: string[];

  contactSection?: {
    title?: string;
    subtitle?: string;
    officeHours?: {
      days?: string;
      timing?: string;
    }[];
    phones?: string[];
    emails?: string[];
    address?: string;
  };
}

async function Admission() {
  const admission = await fetchSectionData<AdmissionPage>(ADMISSION_PAGE_QUERY);

  return (
    <>
      <HeroHeader
        label={admission.heroSubtitle}
        title={admission.heroTitle}
        backgroundImage={admission.backgroundImage}
      />
      <Overview
        title={admission.overviewTitle}
        content={admission.overviewContent}
      />

      <FeatureGrid
        containerClassName="bg-secondary"
        title={admission.classesTitle}
        intro={admission.classesIntro}
        items={admission.classes}
        getIcon={getIcon}
        iconMap={classCategoriesIconMap}
        fallbackIcon={School}
        headingId="class-categories-heading"
      />

      <Process
        title={admission.processTitle}
        intro={admission.processIntro}
        steps={admission.processSteps}
      />

      <Documents
        title={admission.documentsTitle || ""}
        intro={admission.documentsIntro}
        documents={admission.documents || []}
        getIcon={getIcon}
        iconMap={documentIconMap}
        fallbackIcon={FileCheck}
      />

      <Guidelines
        title={admission.guidelinesTitle || ""}
        intro={admission.guidelinesIntro}
        guidelines={admission.guidelines || []}
      />

      <Contact
        title={admission.contactSection?.title || ""}
        subtitle={admission.contactSection?.subtitle || ""}
        officeHours={admission.contactSection?.officeHours}
        emails={admission.contactSection?.emails || []}
        phones={admission.contactSection?.phones || []}
        address={admission.contactSection?.address || ""}
      />
    </>
  );
}

export default Admission;
