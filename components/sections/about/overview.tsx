import Image from "next/image";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/sanity-image";
import { Fade } from "@/components/common/Fade";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

interface Props {
  title: string;
  content: PortableTextBlock[];
  image: SanityImageSource & { alt?: string };
}

function Overview({ title, content, image }: Props) {
  return (
    <SectionWithHeader
      id="about-overview-heading"
      headerClassName="text-left"
      title={title}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* LEFT → IMAGE */}
        <Fade direction="up" delay={0.15}>
          <div className="text-muted-foreground sm:text-lg leading-relaxed space-y-4">
            <PortableText value={content} />
          </div>
        </Fade>

        {/* RIGHT → CONTENT */}
        <div className="space-y-6">
          <Fade direction="left">
            <div className="relative shadow-md aspect-video w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
              <Image
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                src={urlFor(image).url()}
                alt={image.alt || `${title} - SMBM School`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Fade>
        </div>
      </div>
    </SectionWithHeader>
  );
}

export { Overview };
