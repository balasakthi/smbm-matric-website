import Image from "next/image";

import { urlFor } from "@/sanity/sanity-image";

import type { ImageWithAlt } from "@/app/shared-types";

interface Props {
  image: ImageWithAlt;
  priority?: boolean;
  hoverScale?: boolean;
  overlay?: boolean;
  className?: string;
}

const FeatureImage = ({
  image,
  priority = false,
  hoverScale = true,
  overlay = true,
  className = "",
}: Props) => {
  const imageUrl = image ? urlFor(image).url() : "/school-building.webp";
  const imageAlt = image?.alt || "Image of S.M.B.M. School Building";

  return (
    <div className={`relative h-full w-full group ${className}`}>
      <Image
        fill
        className={`object-cover transition-transform duration-1000 ease-out ${
          hoverScale ? "group-hover:scale-110" : ""
        }`}
        src={imageUrl}
        alt={imageAlt}
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
      />

      {overlay && (
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      )}
    </div>
  );
};

export { FeatureImage };
