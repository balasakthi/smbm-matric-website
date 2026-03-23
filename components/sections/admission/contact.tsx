import Fade from "@/components/common/Fade";
import SectionHeading from "@/components/layout/sectionHeading";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Clock2, Phone, Mail, MapPin } from "lucide-react";
import {
  CONTAINER_SITE,
  CARD_HOVER_SLIDE,
  ICON_WRAPPER_CLASS,
} from "@/lib/ui-constants";

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
  address?: string;
}

const CONTACT_CARDS = [
  { icon: Clock2, key: "hours", label: "Office Hours" },
  { icon: Phone, key: "phone", label: "Phone" },
  { icon: Mail, key: "email", label: "Email" },
  { icon: MapPin, key: "address", label: "Address" },
] as const;

const Contact = ({
  title,
  subtitle,
  officeHours,
  phones,
  emails,
  address,
}: Props) => {
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
          <div key={i}>
            <p className="font-medium">{item.days}</p>
            <p className="font-medium text-sm">{item.timing}</p>
          </div>
        ));
      case "phone":
        return phones?.map((phone, i) => (
          <a
            key={i}
            href={`tel:${phone}`}
            className="block m-0 hover:text-foreground transition-colors"
          >
            {phone}
          </a>
        ));
      case "email":
        return emails?.map((email, i) => (
          <a
            key={i}
            href={`mailto:${email}`}
            className="block hover:text-foreground transition-colors"
          >
            {email}
          </a>
        ));
      case "address":
        return <p className="leading-relaxed">{address}</p>;
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
      className="bg-secondary py-20 md:py-24"
    >
      <div className={CONTAINER_SITE}>
        <SectionHeading
          title={title}
          intro={subtitle}
          headingId="contact-heading"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_CARDS.map(({ icon: Icon, key, label }, index) =>
            hasContent(key) ? (
              <Fade key={key} direction="up" delay={index * 0.15}>
                <Card className={`${CARD_HOVER_SLIDE} h-full`}>
                  <CardHeader className="text-center">
                    <div className={`${ICON_WRAPPER_CLASS} mb-6 mx-auto`}>
                      <Icon strokeWidth={1.2} className="size-7" />
                    </div>
                    <CardTitle>{label}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground text-center">
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
};

export default Contact;
