import { ArrowUpRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Fade } from "@/components/common/Fade";
import { Badge } from "@/components/ui/badge";
import { ActionButton } from "@/components/common/actionButton";

import { urlFor } from "@/sanity/sanity-image";

import type { BaseHero } from "@/app/shared-types";
import { CONTAINER_SITE } from "@/lib/ui-constants";

interface Props extends BaseHero {
  overlayOpacity?: number;
  isHome?: boolean;
  established?: string;
  schoolMotto?: string;
  admissionText?: string;
  admissionOpen?: boolean;
}

function HeroHeader({
  label,
  title,
  subtitle,
  established,
  schoolMotto,
  admissionText,
  admissionOpen,
  backgroundImage,
  overlayOpacity = 0.2,
  isHome = false,
}: Props) {
  const imageUrl = backgroundImage
    ? urlFor(backgroundImage).url()
    : "/school-building.webp";

  if (isHome) {
    return (
      <section aria-labelledby="home-hero-title" className="flex flex-col">
        <div
          className={`${CONTAINER_SITE} grid gap-8 py-20 lg:grid-cols-2 lg:gap-12 lg:py-24 xl:gap-16`}
        >
          <div>
            {established && (
              <Fade animateOnMount>
                <Badge
                  asChild
                  className="rounded-full border-border py-1 px-3 text-xs tracking-wide"
                  variant="secondary"
                >
                  <Link href="/about">
                    {established}
                    <ArrowUpRight className="ml-1 size-3" />
                  </Link>
                </Badge>
              </Fade>
            )}

            {title && (
              <Fade delay={0.1} animateOnMount>
                <h1
                  id="home-hero-title"
                  className="mt-6 max-w-[20ch] font-semibold text-3xl leading-tight tracking-tight md:text-4xl lg:text-[2.5rem] xl:text-[2.9rem]"
                >
                  {title}
                </h1>
              </Fade>
            )}

            {schoolMotto && (
              <Fade delay={0.2} animateOnMount>
                <p className="ml-1 mt-4 font-medium uppercase text-sm tracking-[0.2em] text-muted-foreground">
                  {schoolMotto}
                </p>
              </Fade>
            )}
          </div>

          <div className="flex flex-col gap-8">
            {subtitle && (
              <Fade delay={0.3} animateOnMount>
                <p className="max-w-prose text-foreground/80 sm:text-lg">
                  {subtitle}
                </p>
              </Fade>
            )}

            <Fade delay={0.4} animateOnMount>
              {admissionOpen ? (
                <div className="bg-secondary max-w-sm sm:max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm shadow-md hover:shadow-lg p-5 border border-border/50 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3 text-left">
                    <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
                      <Sparkles className="size-4 text-primary" />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-primary">
                        {admissionText}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        KG to Class XII
                      </span>
                    </div>
                  </div>

                  <ActionButton
                    text="Enquire Now"
                    targetPage="/admissions"
                    formId="admission-enquiry-form"
                    size="lg"
                  />
                </div>
              ) : (
                <ActionButton text="Admissions" href="/admissions" size="lg" />
              )}
            </Fade>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full bg-accent h-[320px] md:h-[400px] lg:h-[550px] xl:h-[600px] overflow-hidden">
          <Fade
            animateOnMount
            scale={1.08}
            duration={1.2}
            direction="none"
            className="absolute inset-0"
          >
            <Image
              fill
              className="object-cover"
              src={imageUrl}
              alt={backgroundImage?.alt || "School campus"}
              sizes="100vw"
              priority
            />
          </Fade>

          <div className="absolute inset-0 bg-black/20" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full" aria-label={title}>
      <div className="relative h-40 md:h-48 lg:h-80 w-full overflow-visible">
        <Image
          src={imageUrl}
          alt={backgroundImage?.alt || `${title} - SMBM School`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <div className="absolute mx-6 md:mx-0 md:left-12 lg:left-20 bottom-0 translate-y-1/2 z-10">
          <div className="bg-primary rounded-xl p-8 md:p-14 lg:px-16 space-y-4">
            {label && (
              <Fade direction="right">
                <p className="text-xs md:text-sm tracking-[0.35em] text-primary-foreground/80 uppercase">
                  {label}
                </p>
              </Fade>
            )}

            <Fade direction="right" delay={0.2}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight capitalize">
                {title || "Untitled Page"}
              </h1>
            </Fade>

            {subtitle && (
              <Fade direction="right" delay={0.3}>
                <p className="text-sm text-primary-foreground/80 max-w-3xl">
                  {subtitle}
                </p>
              </Fade>
            )}
          </div>
        </div>
      </div>

      <div className="h-28" />
    </section>
  );
}

export { HeroHeader };
