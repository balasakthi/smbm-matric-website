import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contactForm";
import { Fade } from "@/components/common/Fade";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

function ContactWithMap({
  title,
  subtitle,
  mapUrl,
  formTitle,
}: {
  title: string;
  subtitle?: string;
  mapUrl?: string;
  formTitle?: string;
}) {
  return (
    <SectionWithHeader
      id="contact-with-map"
      title={title}
      subtitle={subtitle}
      sectionClassName="bg-secondary"
    >
      <Fade direction="up" delay={0.3}>
        <Card className="py-0 mt-10 md:mt-16 overflow-hidden border border-border/40 shadow-sm">
          <CardContent className="p-0 flex flex-col-reverse lg:grid lg:grid-cols-2 items-stretch">
            <div className="w-full h-64 lg:h-auto min-h-75">
              {mapUrl && (
                <iframe
                  src={mapUrl}
                  className="w-full h-full border-none"
                  loading="lazy"
                  title="School Location Map"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>

            <div className="p-2 md:p-10 lg:p-12 flex flex-col justify-center">
              <ContactForm formTitle={formTitle || "Send a message"} />
            </div>
          </CardContent>
        </Card>
      </Fade>
    </SectionWithHeader>
  );
}

export { ContactWithMap };
