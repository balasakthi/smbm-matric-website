import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { CTA } from "@/components/sections/cta";
import { ContactInfo } from "@/components/sections/contact/contactInfo";
import { ContactWithMap } from "@/components/sections/contact/contactWithMap";
import { FAQ } from "@/components/sections/contact/faq";
import { HeroHeader } from "@/components/sections/heroHeader";

import { CONTACT_PAGE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";

import type { ContactPage } from "./types";

async function Contact() {
  const contact = await fetchSectionData<ContactPage>(CONTACT_PAGE_QUERY);

  const { hero, contactSection, contactForm, faqSection, ctaBlock } = contact;

  const { officeHours, emails, phones, address } =
    contact.contactSection?.contactInfo || {};

  return (
    <>
      <HeroHeader
        label={hero?.label}
        title={hero?.title || ""}
        subtitle={hero?.subtitle}
        backgroundImage={hero?.backgroundImage}
      />

      {contactSection && (
        <SectionWithHeader
          id="contact-info"
          title={contactSection.title}
          subtitle={contactSection.subtitle}
        >
          <ContactInfo
            title={contactSection?.title || ""}
            subtitle={contactSection?.subtitle || ""}
            officeHours={officeHours}
            emails={emails || []}
            phones={phones || []}
            address={address || []}
            variant="secondary"
          />
        </SectionWithHeader>
      )}

      {contactForm && (
        <SectionWithHeader
          id="contact-form"
          title={contactForm?.title}
          subtitle={contactForm?.subtitle}
          sectionClassName="bg-secondary"
        >
          <ContactWithMap mapUrl={contactForm?.mapUrl} />
        </SectionWithHeader>
      )}

      {faqSection && (
        <SectionWithHeader
          id="faq"
          title={faqSection?.title || ""}
          subtitle={faqSection?.subtitle || ""}
          headingAlign="center"
        >
          <FAQ faq={faqSection?.faq || []} />
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

export default Contact;
