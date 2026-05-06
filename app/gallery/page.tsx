import { CTA } from "@/components/sections/cta";
import { HeroHeader } from "@/components/sections/heroHeader";
import GallerySection from "@/components/sections/gallery";

import { SectionWithHeader } from "@/components/layout/sectionWithHeader";

import { fetchSectionData } from "@/lib/sanityFetch";
import { GALLERY_PAGE_QUERY } from "@/lib/sanityQuery";

import type { GalleryPage } from "./types";

async function Careers() {
  const gallery = await fetchSectionData<GalleryPage>(GALLERY_PAGE_QUERY);

  const { hero, ctaBlock, categories } = gallery;

  return (
    <>
      <HeroHeader
        label={hero?.label}
        title={hero?.title || ""}
        subtitle={hero?.subtitle}
        backgroundImage={hero?.backgroundImage}
      />

      {categories && (
        <SectionWithHeader
          id="gallery"
          title={gallery.gallery?.title}
          subtitle={gallery.gallery?.subtitle}
          label={gallery.gallery?.label}
          headingAlign="center"
        >
          <GallerySection categories={categories} />
        </SectionWithHeader>
      )}

      {ctaBlock && (
        <SectionWithHeader
          id="cta-block"
          spacing="sm"
          sectionClassName="bg-secondary"
        >
          <CTA
            title={ctaBlock?.title}
            supportLine={ctaBlock?.supportLine}
            buttonLink={ctaBlock?.buttonLink}
            buttonText={ctaBlock?.buttonText}
          />
        </SectionWithHeader>
      )}
    </>
  );
}

export default Careers;
