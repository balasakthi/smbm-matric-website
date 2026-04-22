"use client";

import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import React from "react";
import { Quote } from "lucide-react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Fade } from "@/components/common/Fade";

import { Testimonial } from "@/app/types";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/sanity-image";

interface Props {
  testimonials: Testimonial[];
}

function TestimonialsCarousel({ testimonials }: Props) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [count, setCount] = React.useState(0);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const update = () => {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    };
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  if (!testimonials?.length) return null;

  return (
    <Fade direction="up" delay={0.25}>
      <div className="mx-auto mt-20 max-w-5xl md:px-12">
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          plugins={[AutoPlay({ delay: 8000 })]}
          className="relative"
        >
          <CarouselContent>
            {testimonials.map((item, index) => (
              <CarouselItem key={index}>
                <div className="group relative mx-4 flex flex-col items-center gap-8 overflow-hidden rounded-[2rem] border-none bg-linear-to-b from-secondary to-primary/5 p-8 md:flex-row md:p-12 lg:gap-16">
                  {/* Visual Element: Large Quote Icon */}
                  <Quote className="absolute right-8 top-8 size-24 text-primary/5 rotate-12 transition-transform group-hover:rotate-0" />

                  {/* Image Section - Stylized */}
                  <div className="relative shrink-0">
                    <div className="relative size-48 overflow-hidden rounded-2xl shadow-2xl md:size-64">
                      {item.photo ? (
                        <Image
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          src={urlFor(item.photo).width(400).height(400).url()}
                          alt={item.photo.alt || "Photo of Alumini"}
                          sizes="300px"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-primary/10 text-4xl font-bold text-primary">
                          {item.name && item.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    {/* Decorative accent behind image */}
                    <div className="absolute -bottom-4 -left-4 -z-10 size-32 rounded-full bg-primary/10 blur-3xl" />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-center md:text-left">
                    <p className="text-xl font-medium leading-relaxed italic text-foreground/90">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    <div className="mt-8">
                      <h4 className="text-lg font-bold text-primary">
                        {item.name}
                      </h4>
                      <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/70">
                        {item.role}{" "}
                        {item.organization && `• ${item.organization}`}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation - Floating outside on desktop */}
          <div className="hidden lg:block">
            <CarouselPrevious className="size-12 -left-16 border-none bg-background shadow-xl hover:bg-primary hover:text-white" />
            <CarouselNext className="size-12 -right-16 border-none bg-background shadow-xl hover:bg-primary hover:text-white" />
          </div>
        </Carousel>

        {/* Premium Pagination Dots */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-1.5 transition-all duration-300 rounded-full",
                current === index + 1
                  ? "w-8 bg-primary"
                  : "w-2 bg-primary/20 hover:bg-primary/40",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}

export { TestimonialsCarousel };
