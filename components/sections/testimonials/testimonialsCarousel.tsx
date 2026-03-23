"use client";

import AutoPlay from "embla-carousel-autoplay";
import Fade from "@/components/common/Fade";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { Testimonial } from "./index";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/sanity-image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: Props) => {
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

  if (!testimonials?.length) {
    return null;
  }

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 md:py-28">
      <div className={`${CONTAINER_SITE} max-w-7xl`}>
        <Fade direction="up">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-center"
          >
            Alumni Voices
          </h2>
        </Fade>
        <Fade direction="up" delay={0.15}>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-center">
            Real stories from our alumni who carry the values of SMBM forward
          </p>
        </Fade>

        <Fade direction="up" delay={0.25}>
          <div className="mx-auto mt-20 max-w-248 md:mt-16 md:px-12">
            <Carousel
              opts={{ align: "start" }}
              setApi={setApi}
              plugins={[
                AutoPlay({
                  delay: 10000,
                }),
              ]}
            >
              <CarouselContent>
                {testimonials.map((item) => (
                  <CarouselItem key={item._id}>
                    <div className="relative flex gap-8 border bg-muted/70 p-8">
                      <span className="absolute top-4 left-8 text-6xl text-primary/20 font-serif">
                        &#8220;
                      </span>

                      <div className="flex flex-col gap-2">
                        <p className="grow font-medium text-xl leading-relaxed tracking-normal lg:mt-8 sm:font-semibold sm:leading-[1.45]">
                          {item.quote}
                        </p>

                        <div className="mt-6 flex items-center gap-3 lg:mt-0">
                          {item.photo && (
                            <Avatar size="lg" className="lg:hidden">
                              <AvatarImage
                                src={urlFor(item.photo).url()}
                                alt={item.name}
                              ></AvatarImage>
                            </Avatar>
                          )}

                          <div className="flex flex-col">
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p className="text-muted-foreground text-sm">
                              {item.role}
                              {item.organization && ` • ${item.organization}`}
                            </p>
                          </div>
                        </div>
                      </div>

                      {item.photo && (
                        <Image
                          className="hidden aspect-square max-w-60 rounded-lg lg:block"
                          src={urlFor(item.photo).width(300).height(300).url()}
                          alt={item.name}
                          width={300}
                          height={300}
                          sizes="(max-width:768px) 0px, 300px"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="-top-2.5 right-2 ml-auto -translate-x-full -translate-y-full lg:top-1/2 lg:-left-12 lg:m-0 lg:translate-x-0 lg:-translate-y-1/2" />
              <CarouselNext className="-top-2.5 right-0 ml-auto -translate-y-full lg:top-1/2 lg:-right-12 lg:m-0 lg:-translate-y-1/2" />
            </Carousel>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 w-2 rounded-full",
                    current === index + 1 ? "bg-primary" : "bg-primary/20",
                  )}
                />
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
