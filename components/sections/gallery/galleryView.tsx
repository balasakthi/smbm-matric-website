import "photoswipe/dist/photoswipe.css";

import { ArrowLeft } from "lucide-react";
import { Gallery as PhotoSwipeGallery, Item } from "react-photoswipe-gallery";

import { FeatureImage } from "@/components/common/featureImage";
import { ActionButton } from "@/components/common/actionButton";

import { urlFor } from "@/sanity/sanity-image";
import { getImageDimensions } from "@sanity/asset-utils";

import type { Gallery } from "@/app/gallery/types";
import { Fade } from "@/components/common/Fade";

interface Props {
  gallery: Gallery;
  onBack: () => void;
}

export function GalleryView({ gallery, onBack }: Props) {
  return (
    <div className="mx-auto max-w-7xl py-10 px-6">
      <Fade direction="left">
        {/* Header Section */}
        <div className="mb-12 flex flex-col gap-4">
          <ActionButton
            onClick={onBack}
            text="Back to Gallery"
            variant="ghost"
            className="w-fit"
            iconPosition="left"
            icon={ArrowLeft}
          />
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {gallery.title}
            </h2>
            <p className="text-muted-foreground font-medium">
              {gallery.previewImages?.length || 0} images in this collection
            </p>
          </div>
        </div>
      </Fade>

      {/* Gallery Grid */}
      <PhotoSwipeGallery>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.previewImages?.map((img, index) => {
            const imgUrl = urlFor(img).url();

            const { width, height } = getImageDimensions(img);

            return (
              <Fade key={index} direction="up" delay={index * 0.1}>
                <Item
                  key={index}
                  original={imgUrl}
                  thumbnail={imgUrl}
                  width={width}
                  height={height}
                >
                  {({ ref, open }) => (
                    <div
                      ref={ref}
                      onClick={open}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl bg-secondary/40 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >
                      <div className="aspect-4/3 w-full overflow-hidden">
                        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                          <FeatureImage image={img} />
                        </div>
                      </div>
                      {/* Subtle Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                    </div>
                  )}
                </Item>
              </Fade>
            );
          })}
        </div>
      </PhotoSwipeGallery>
    </div>
  );
}
