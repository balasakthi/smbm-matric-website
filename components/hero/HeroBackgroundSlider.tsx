"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  "/images/school-building.webp",
  "/images/school-building-transparent.webp",
  "/images/school-building.webp",
];

export default function HeroBackgroundSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="SMBM School Campus"
          fill
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
