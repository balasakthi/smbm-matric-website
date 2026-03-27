import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Fade } from "@/components/common/Fade";
import { SectionWithHeader } from "./sectionWithHeader";
import { urlFor } from "@/sanity/sanity-image";

interface CardItem {
  title: string;
  description?: string;
  image?: SanityImageSource & {
    alt?: string;
  };
}

interface CardGridProps {
  title: string;
  intro?: string;
  items?: CardItem[];
  sectionId: string;
  bgColor?: string;
  gridCols?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  imageAspectRatio?: string;
}

async function CardGrid({
  title,
  intro,
  items,
  sectionId,
  bgColor,
  gridCols = { sm: 2, md: 2, lg: 3 },
  imageAspectRatio = "h-44",
}: CardGridProps) {
  if (!items?.length) return null;

  const gridClasses = [
    "mt-14 grid gap-8",
    gridCols.sm && `sm:grid-cols-${gridCols.sm}`,
    gridCols.md && `md:grid-cols-${gridCols.md}`,
    gridCols.lg && `lg:grid-cols-${gridCols.lg}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <SectionWithHeader
      title={title}
      id={`${sectionId}-heading`}
      description={intro}
      sectionClassName={bgColor}
    >
      {/* Grid Section */}
      <div className={gridClasses}>
        {items.map((item, index) => (
          <Fade
            key={`${item.title}-${index}`}
            direction="up"
            delay={index * 0.12}
          >
            <Card
              className={`${CARD_HOVER_SLIDE} pb-0 overflow-hidden h-full flex flex-col`}
            >
              <CardHeader className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </CardHeader>

              {item.image && (
                <CardContent className="mt-auto px-0 pb-0">
                  <div
                    className={`relative mt-4 ${imageAspectRatio} w-full overflow-hidden`}
                  >
                    <Image
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      src={urlFor(item.image).url()}
                      alt={item.image?.alt || item.title}
                      width={600}
                      height={400}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/40" />
                  </div>
                </CardContent>
              )}
            </Card>
          </Fade>
        ))}
      </div>
    </SectionWithHeader>
  );
}

export { CardGrid };
