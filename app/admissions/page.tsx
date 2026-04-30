import { PortableText } from "next-sanity";

import { ContactInfo } from "@/components/sections/contact/contactInfo";
import { Documents } from "@/components/sections/admission/documents";
import { EnquiryForm } from "@/components/sections/admission/enquiryForm";
import { HeroHeader } from "@/components/sections/heroHeader";
import { Process } from "@/components/sections/admission/process";

import { ActionButton } from "@/components/common/actionButton";
import { FeatureCard } from "@/components/common/featureCard";
import { FeatureImage } from "@/components/common/featureImage";
import { FeatureList } from "@/components/common/featureList";
import { InfoCard } from "@/components/common/infoCard";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import { SimpleIcon } from "@/components/common/simpleIcon";
import {
  TwoColumn,
  TwoColumnContent,
  TwoColumnMedia,
} from "@/components/common/twoColumn";

import { fetchSectionData } from "@/lib/sanityFetch";
import { ADMISSION_PAGE_QUERY } from "@/lib/sanityQuery";

import type { AdmissionPage } from "./types";

async function Admission() {
  const admission = await fetchSectionData<AdmissionPage>(ADMISSION_PAGE_QUERY);

  const {
    hero,
    overview,
    classSections,
    admissionProcess,
    requiredDocuments,
    admissionGuidelines,
    contactSection,
  } = admission;

  return (
    <>
      <HeroHeader
        label={hero?.label}
        title={hero?.title}
        subtitle={hero?.subtitle}
        backgroundImage={hero?.backgroundImage}
      />

      {overview && (
        <SectionWithHeader
          id="admission-overview"
          title={overview?.title}
          subtitle={overview?.subtitle}
        >
          <TwoColumn>
            <TwoColumnMedia aspect="video">
              {overview?.image && <FeatureImage image={overview?.image} />}
            </TwoColumnMedia>
            <TwoColumnContent>
              <PortableText value={overview?.content || []} />
              <ActionButton
                text="Submit Admission Enquiry"
                formId="admission-enquiry-form"
                size="lg"
              />
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {classSections && (
        <SectionWithHeader
          id="classes-for-admission"
          title={classSections.title}
          subtitle={classSections.subtitle}
          sectionClassName="bg-secondary"
        >
          {classSections?.classes && (
            <FeatureList
              items={classSections?.classes}
              columns={3}
              renderItem={(item) => (
                <FeatureCard
                  title={item.title || ""}
                  subtitle={item.subtitle || ""}
                  alignment="left"
                  icon={
                    <SimpleIcon
                      icon={item.icon || "School"}
                      category="classCategories"
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

      {admissionProcess && (
        <SectionWithHeader
          id="admission-process"
          title={admissionProcess?.title}
          subtitle={admissionProcess?.subtitle}
        >
          <Process steps={admissionProcess?.steps || []} />
        </SectionWithHeader>
      )}

      {requiredDocuments && (
        <SectionWithHeader
          id="required-documents"
          title={requiredDocuments?.title}
          subtitle={requiredDocuments?.subtitle}
          sectionClassName="bg-secondary"
        >
          <Documents documents={admission.requiredDocuments?.documents || []} />
        </SectionWithHeader>
      )}

      {admissionGuidelines && (
        <SectionWithHeader
          id="admission-guidelines"
          title={admissionGuidelines?.title}
          subtitle={admissionGuidelines?.subtitle}
        >
          <TwoColumn>
            <TwoColumnContent>
              <InfoCard
                title="Guidelines"
                highlights={admissionGuidelines?.guidelines}
              />
            </TwoColumnContent>

            <TwoColumnContent>
              <EnquiryForm />
            </TwoColumnContent>
          </TwoColumn>
        </SectionWithHeader>
      )}

      {contactSection && (
        <SectionWithHeader
          id="contact-info"
          title={contactSection.title}
          subtitle={contactSection.subtitle}
          sectionClassName="bg-secondary"
        >
          <ContactInfo
            title={contactSection?.title || ""}
            subtitle={contactSection?.subtitle || ""}
            officeHours={contactSection?.contactInfo?.officeHours}
            emails={contactSection?.contactInfo?.emails || []}
            phones={contactSection?.contactInfo?.phones || []}
            address={contactSection?.contactInfo?.address || []}
          />
        </SectionWithHeader>
      )}
    </>
  );
}

export default Admission;
