import { PortableText } from "@portabletext/react";

import { Fade } from "@/components/common/Fade";
import { FeatureCard } from "@/components/common/featureCard";
import { SimpleIcon } from "@/components/common/simpleIcon";

import type { PortableTextBlock } from "@portabletext/types";

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
  variant?: "white" | "secondary";
}

const CONTACT_CARDS = [
  { icon: "Clock8", key: "hours", label: "Office Hours" },
  { icon: "Phone", key: "phone", label: "Call Us" },
  { icon: "Mail", key: "email", label: "Email Us" },
  { icon: "MapPin", key: "address", label: "Visit Us" },
] as const;

function ContactInfo({
  officeHours,
  phones,
  emails,
  address,
  variant = "white",
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
    <div className="mt-14 md:mt-16 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {CONTACT_CARDS.map(({ icon: Icon, key, label }, index) =>
        hasContent(key) ? (
          <Fade key={key} direction="up" delay={index * 0.15}>
            <FeatureCard
              icon={
                <SimpleIcon
                  icon={Icon}
                  category="contact"
                  isLeft={false}
                  isWhite={variant !== "white"}
                />
              }
              title={label}
              variant={variant}
            >
              {renderCardContent(key)}
            </FeatureCard>
          </Fade>
        ) : null,
      )}
    </div>
  );
}

export { ContactInfo };
