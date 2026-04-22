import Image from "next/image";

import { Fade } from "@/components/common/Fade";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { urlFor } from "@/sanity/sanity-image";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";

import type { SanityImageSource } from "@sanity/image-url";

interface FeatureItem {
  title?: string;
  description?: string;
  image?: SanityImageSource & {
    alt?: string;
  };
}

interface Props {
  items?: FeatureItem[];
}

function ContentGrid({ items = [] }: Props) {
  if (!items.length) return null;

  return (
    <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Fade key={index} direction="up" delay={index * 0.12}>
          <Card className={`${CARD_HOVER_SLIDE} pb-0 overflow-hidden group`}>
            <CardHeader>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </CardHeader>

            {item.image && (
              <CardContent className="mt-auto px-0 pb-0">
                <div className="relative mt-4 h-44 w-full overflow-hidden">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.image?.alt || "S.M.B.M. School"}
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
}

export { ContentGrid };
