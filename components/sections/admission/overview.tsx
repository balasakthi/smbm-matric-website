import type { PortableTextBlock } from "@portabletext/types";
import { ActionButton } from "@/components/layout/actionButton";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { PortableText } from "@portabletext/react";
import { Fade } from "@/components/common/Fade";

interface Props {
  title: string;
  content: PortableTextBlock[];
}

function Overview({ title, content }: Props) {
  return (
    <section
      aria-labelledby="admission-overview-heading"
      className="pt-12 pb-20 md:pb-28"
    >
      <div className={`${CONTAINER_SITE}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
          <div className="space-y-6">
            <Fade direction="up">
              <h2
                id="admission-overview-heading"
                className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
              >
                {title}
              </h2>
            </Fade>

            <Fade direction="up" delay={0.15}>
              <div className="sm:text-lg text-muted-foreground leading-relaxed">
                {content?.length > 0 && <PortableText value={[content[0]]} />}
              </div>
            </Fade>
          </div>

          <div className="space-y-6">
            <Fade direction="up" delay={0.2}>
              <div className="space-y-6 sm:text-lg text-muted-foreground leading-relaxed">
                {content?.length > 1 && (
                  <PortableText value={content.slice(1)} />
                )}
              </div>
            </Fade>
            <ActionButton
              text="Enquire Now"
              formId="admission-enquiry-form"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export { Overview };
