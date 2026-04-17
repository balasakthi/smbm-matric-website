import type { ContactPage } from "./types";

import { CONTACT_PAGE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";

import { CTA } from "@/components/sections/cta";
import { ContactInfo } from "@/components/sections/contact/contactInfo";
import { ContactWithMap } from "@/components/sections/contact/contactWithMap";
import { FAQ } from "@/components/sections/contact/faq";
import { HeroHeader } from "@/components/layout/heroHeader";
import { Spinner } from "@/components/ui/spinner";

async function Contact() {
  const contact = await fetchSectionData<ContactPage>(CONTACT_PAGE_QUERY);

  const { officeHours, emails, phones, address } =
    contact.contactSection?.contactInfo || {};

  if (!contact) {
    return <Spinner className="size-14 h-screen flex mx-auto" />;
  }

  return (
    <>
      <HeroHeader
        label={contact.hero?.label}
        title={contact.hero?.title || ""}
        subtitle={contact.hero?.subtitle}
        backgroundImage={contact.hero?.backgroundImage}
      />

      <ContactInfo
        title={contact.contactSection?.title || ""}
        subtitle={contact.contactSection?.subtitle || ""}
        officeHours={officeHours}
        emails={emails}
        phones={phones}
        address={address}
      />

      <ContactWithMap
        title={contact.formSection?.title || ""}
        subtitle={contact.formSection?.subtitle}
        mapUrl={contact.formSection?.mapUrl}
      />

      <FAQ
        title={contact.faqSection?.title || ""}
        subtitle={contact.faqSection?.subtitle || ""}
        faq={contact.faqSection?.faq || []}
      />

      <CTA />
    </>
  );
}

export default Contact;
