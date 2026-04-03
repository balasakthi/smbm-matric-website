import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { Fade } from "@/components/common/Fade";
import { Plus } from "lucide-react";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import { urlFor } from "@/sanity/sanity-image";

interface Props {
  title: string;
  description?: string;
  methodologies: string[];
  image?: SanityImageSource & {
    alt?: string;
  };
}

function TeachingMethodology({
  title,
  description,
  methodologies,
  image,
}: Props) {
  const imageUrl = image ? urlFor(image).url() : null;

  return (
    <SectionWithHeader
      id="teaching-methodology"
      title={title}
      description={description}
    >
      <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* LEFT: Content */}
        <Fade direction="up" delay={0.2}>
          <div className="bg-muted/40 backdrop-blur-sm border border-border/50 shadow-sm rounded-2xl p-6 md:p-8">
            <ul className="space-y-6" role="list">
              {methodologies.map((item, index) => (
                <li
                  key={`methodology-${index}`}
                  className="flex items-start gap-4 group"
                >
                  <Plus className="w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform group-hover:scale-125" />

                  <span className="text-muted-foreground text-base leading-relaxed transition-colors group-hover:text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Fade>

        {/* RIGHT: Image */}
        <Fade direction="up" delay={0.4}>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border/50 bg-muted shadow-xl">
            {imageUrl ? (
              <Image
                fill
                priority={false}
                className="object-cover transition-transform duration-1000 hover:scale-105"
                src={imageUrl}
                alt={image?.alt || "Teaching methodology illustration"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No Image Provided
              </div>
            )}
          </div>
        </Fade>
      </div>
    </SectionWithHeader>
  );
}

export { TeachingMethodology };
