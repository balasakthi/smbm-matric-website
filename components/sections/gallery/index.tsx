"use client";

import { useState } from "react";

import type { GalleryCategory, Gallery } from "@/app/gallery/types";

import { GalleryTabs } from "@/components/sections/gallery/galleryTabs";
import { GalleryView } from "@/components/sections/gallery/galleryView";

interface Props {
  categories: GalleryCategory[];
}

export default function GallerySection({ categories }: Props) {
  const [selectedGallery, setSelectedGallery] = useState<Gallery | null>(null);

  return (
    <div>
      {!selectedGallery ? (
        <GalleryTabs
          categories={categories}
          onSelectGallery={setSelectedGallery}
        />
      ) : (
        <GalleryView
          gallery={selectedGallery}
          onBack={() => setSelectedGallery(null)}
        />
      )}
    </div>
  );
}
