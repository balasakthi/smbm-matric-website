import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { Fade } from "@/components/common/Fade";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

interface Props {
  title: string;
  content: PortableTextBlock[];
}

function Overview({ title, content }: Props) {
  const midPoint = Math.ceil(content.length / 2);
  const leftContent = content.slice(0, midPoint);
  const rightContent = content.slice(midPoint);

  return (
    <SectionWithHeader id="admission-overview-heading" title={title}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-start">
        {/* Left Column */}
        <Fade direction="up" delay={0.15}>
          <div className="space-y-6 sm:text-lg text-muted-foreground leading-relaxed">
            {leftContent.length > 0 && <PortableText value={leftContent} />}
          </div>
        </Fade>

        {/* Right Column */}
        <Fade direction="up" delay={0.25}>
          {/* Slight delay for nice stagger */}
          <div className="space-y-6 sm:text-lg text-muted-foreground leading-relaxed">
            {rightContent.length > 0 && <PortableText value={rightContent} />}
          </div>
        </Fade>
      </div>
    </SectionWithHeader>
  );
}
export { Overview };
