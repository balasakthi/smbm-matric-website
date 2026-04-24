import Image from "next/image";

import { Fade } from "@/components/common/Fade";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { urlFor } from "@/sanity/sanity-image";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";

import type { SanityImageSource } from "@sanity/image-url";

interface GridItem {
  title?: string;
  description?: string;
  image?: SanityImageSource & {
    alt?: string;
  };
  badge?: string;
  bgColor?: string;
}

interface Props {
  items?: GridItem[];
  gridCols?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  cardBgColor?: string;
  imagePosition?: "top" | "bottom";
}

function GridSection({
  items = [],

  gridCols = { sm: 2, md: 2, lg: 3 },
  cardBgColor = "bg-secondary",

  imagePosition = "top",
}: Props) {
  if (!items.length) return null;

  const gridClasses = [
    "mt-14 grid gap-8",
    gridCols.sm && `sm:grid-cols-${gridCols.sm}`,
    gridCols.md && `md:grid-cols-${gridCols.md}`,
    gridCols.lg && `lg:grid-cols-${gridCols.lg}`,
  ]
    .filter(Boolean)
    .join(" ");

  const renderImage = (item: GridItem) => {
    if (!item.image) return null;

    return (
      <div className="relative w-full overflow-hidden">
        <div className="relative aspect-video w-full">
          <Image
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            src={urlFor(item.image).url()}
            alt={item.image?.alt || item.title || "S.M.B.M. School"}
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
      </div>
    );
  };

  const grid = (
    <div className={gridClasses}>
      {items.map((item, index) => (
        <Fade
          key={`${item.title || "item"}-${index}`}
          direction="up"
          delay={index * 0.12}
        >
          <Card
            className={`${CARD_HOVER_SLIDE} ${
              item.bgColor || cardBgColor
            } overflow-hidden h-full flex flex-col py-0 gap-2 group`}
          >
            {imagePosition === "top" && renderImage(item)}

            {(item.title || item.description) && (
              <CardHeader className="px-6 pt-6 pb-2">
                {item.title && (
                  <h3 className="text-xl font-semibold tracking-tight line-clamp-1">
                    {item.title}
                  </h3>
                )}
                {item.description && imagePosition === "bottom" && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.description}
                  </p>
                )}
              </CardHeader>
            )}

            {imagePosition === "top" && (
              <CardContent className="px-6 pb-6">
                {item.description && (
                  <>
                    <Separator className="mb-3" />
                    <p className="text-muted-foreground">{item.description}</p>
                  </>
                )}
              </CardContent>
            )}

            {imagePosition === "bottom" && item.image && (
              <CardContent className="mt-auto px-0 pb-0">
                <div className="relative mt-4 h-44 w-full overflow-hidden">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.image?.alt || item.title || "S.M.B.M. School"}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/40" />
                </div>
              </CardContent>
            )}
          </Card>
        </Fade>
      ))}
    </div>
  );

  return grid;
}

export { GridSection };
