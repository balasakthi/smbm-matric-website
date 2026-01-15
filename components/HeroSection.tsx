"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getAdmissionActions } from "@/utils/admissionStatus";

const images = [
  "/images/school-building.webp",
  "/images/school-building-transparent.webp",
  "/images/school-building.webp",
];
const { primary, secondary } = getAdmissionActions();

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] max-h-[800px] min-h-[560px] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt="SMBM School Campus"
          fill
          fetchPriority="high"
          loading="eager"
          priority={index === 0}
          className={cn(
            "object-cover transition-opacity duration-1000",
            index === current ? "opacity-100" : "opacity-0"
          )}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 sm:bg-transparent sm:bg-linear-to-r sm:from-primary/85 sm:from-50% sm:to-primary/30" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center ">
        <div className="container mx-auto px-6 ">
          <div className="max-w-3xl text-white">
            {/* Heading */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              SMBM Matriculation <br className="hidden sm:block" />
              Higher Secondary School
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg sm:text-xl font-medium text-white/90">
              Education with Tradition. Excellence for the Future.
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
              A co-educational Matriculation institution committed to academic
              excellence, strong moral values, and holistic development —
              shaping confident learners prepared for tomorrow.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <Link href={primary.href}>{primary.label}</Link>
              </Button>

              <Button variant="white" size="lg" asChild>
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm text-white/75 max-w-2xl">
              Founded by Dindigul Nadar Uravinmurai · Serving society through
              education since 1964
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
