import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { Badge } from "@/components/ui/badge";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Fade } from "@/components/common/Fade";
import { SectionWithHeader } from "./sectionWithHeader";
import { Separator } from "@/components/ui/separator";
import { urlFor } from "@/sanity/sanity-image";

interface CardItem {
  title: string;
  description?: string;
  image?: SanityImageSource & {
    alt?: string;
  };
  bgColor?: string;
  badge?: string;
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
  cardBgColor?: string;
}

async function CardGrid({
  title,
  intro,
  items,
  sectionId,
  bgColor,
  gridCols = { sm: 2, md: 2, lg: 3 },
  cardBgColor = "bg-secondary/50",
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
              className={`${CARD_HOVER_SLIDE} ${item.bgColor || cardBgColor} py-0 gap-2 overflow-hidden h-full flex flex-col`}
            >
              <CardHeader className="relative p-0 group">
                {item.image && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      src={urlFor(item.image).url()}
                      alt={item.image?.alt || item.title}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      loading="lazy"
                      fill
                    />
                    {item.badge && (
                      <Badge className="absolute top-3 left-3 rounded-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                        {item.badge}
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/40" />
                  </div>
                )}
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <h3 className="font-semibold text-[1.4rem] tracking-tight line-clamp-1">
                  {item.title}
                </h3>
                <Separator className="mb-3 mt-4" />
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </Fade>
        ))}
      </div>
    </SectionWithHeader>
  );
}

export { CardGrid };
