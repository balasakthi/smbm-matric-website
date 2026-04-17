import type { PortableTextBlock } from "@portabletext/types";

import {
  CONTAINER_SITE,
  CARD_HOVER_SLIDE,
  ICON_WRAPPER_CLASS,
} from "@/lib/ui-constants";

import { Clock2, Phone, Mail, MapPin } from "lucide-react";

import { PortableText } from "@portabletext/react";
import { cn } from "@/lib/utils";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Fade } from "@/components/common/Fade";
import { SectionHeading } from "@/components/layout/sectionHeading";

interface OfficeHour {
  days?: string;
  timing?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  officeHours?: OfficeHour[];
  phones?: string[];
  emails?: string[];
  address?: PortableTextBlock[];
  className?: string;
}

const CONTACT_CARDS = [
  { icon: Clock2, key: "hours", label: "Office Hours" },
  { icon: Phone, key: "phone", label: "Call Us" },
  { icon: Mail, key: "email", label: "Email Us" },
  { icon: MapPin, key: "address", label: "Visit Us" },
] as const;

function ContactInfo({
  title,
  subtitle,
  officeHours,
  phones,
  emails,
  address,
  className,
}: Props) {
  const contactData = {
    hours: officeHours,
    phone: phones,
    email: emails,
    address,
  };

  const renderCardContent = (key: string) => {
    switch (key) {
      case "hours":
        return officeHours?.map((item, i) => (
          <div key={i} className="space-y-0.5">
            <p className="font-semibold">{item.days}</p>
            <p className="text-sm text-muted-foreground">{item.timing}</p>
          </div>
        ));

      case "phone":
        return phones?.map((phone, i) => (
          <a
            key={i}
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="block font-medium hover:text-foreground transition-colors"
          >
            {phone}
          </a>
        ));

      case "email":
        return emails?.map((email, i) => (
          <a
            key={i}
            href={`mailto:${email}`}
            className="block text-sm hover:text-foreground transition-colors"
          >
            {email}
          </a>
        ));

      case "address":
        return (
          address && (
            <div className="text-sm leading-relaxed text-muted-foreground">
              <PortableText value={address} />
            </div>
          )
        );

      default:
        return null;
    }
  };

  const hasContent = (key: string) => {
    const data = contactData[key as keyof typeof contactData];
    return Array.isArray(data) ? data.length > 0 : !!data;
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className={cn("py-20 md:py-24", className)}
    >
      <div className={CONTAINER_SITE}>
        <SectionHeading
          title={title || "Get in Touch"}
          intro={
            subtitle ||
            "Reach us anytime for admissions, enquiries, or support."
          }
          headingId="contact-heading"
        />

        <div className="mt-14 md:mt-16 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map(({ icon: Icon, key, label }, index) =>
            hasContent(key) ? (
              <Fade key={key} direction="up" delay={index * 0.15}>
                <Card className={`${CARD_HOVER_SLIDE} h-full bg-secondary/45`}>
                  <CardHeader className="text-center">
                    <div className={`${ICON_WRAPPER_CLASS} mb-6 mx-auto`}>
                      <Icon strokeWidth={1.2} className="size-7" />
                    </div>
                    <CardTitle className="text-base">{label}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-2 text-center">
                    {renderCardContent(key)}
                  </CardContent>
                </Card>
              </Fade>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

export { ContactInfo };
