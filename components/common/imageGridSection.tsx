import { Fade } from "@/components/common/Fade";

import { ResponsiveGrid } from "./responsiveGrid";
import { ImageCard } from "./imageCard";

import type { SanityImageSource } from "@sanity/image-url";
import { FeatureImage } from "./featureImage";

type GridColumns = {
  sm?: 1 | 2 | 3 | 4;
  md?: 1 | 2 | 3 | 4;
  lg?: 1 | 2 | 3 | 4;
};

interface GridItem {
  title?: string;
  description?: string;
  image?: SanityImageSource & { alt?: string };
  badge?: string;
}

interface ImageGridSectionProps {
  items: GridItem[];
  columns?: GridColumns;
  imagePosition?: "top" | "bottom";
  variant?: "default" | "secondary";
}

export function ImageGridSection({
  items,
  columns = { sm: 1, md: 2, lg: 3 },
  imagePosition = "top",
  variant = "default",
}: ImageGridSectionProps) {
  if (!items.length) return null;

  return (
    <ResponsiveGrid columns={columns} gap="8" className="mt-14">
      {items.map((item, index) => (
        <Fade key={index} direction="up" delay={index * 0.12}>
          <ImageCard
            title={item.title}
            description={item.description}
            badge={item.badge}
            variant={variant}
            imagePosition={imagePosition}
            imageNode={
              item.image ? <FeatureImage image={item.image} /> : undefined
            }
          />
        </Fade>
      ))}
    </ResponsiveGrid>
  );
}
