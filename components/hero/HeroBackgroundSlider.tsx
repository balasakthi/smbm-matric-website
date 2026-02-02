"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Slide {
  asset: {
    url: string;
  };
  alt: string;
}

interface Props {
  images: Slide[];
}

export default function HeroBackgroundSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.asset.url}
          alt={image.alt}
          fill
          loading="eager"
          priority={index === 0}
          className={cn(
            "object-cover transition-opacity duration-1000",
            index === current ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
    </>
  );
}
