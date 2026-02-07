import { Button } from "@/components/ui/button";
import { client } from "@/sanity/client";
import { heroQuery, actionsQuery, options } from "@/lib/sanityQuery";
import FadeUp from "@/components/motion/FadeUp";
import HeroBackgroundSlider from "@/components/sections/hero/HeroBackgroundSlider";
import Highlights from "@/components/sections/hero/Highlights";
import Link from "next/link";
import { BackgroundPattern } from "@/components/background-pattern";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CirclePlay } from "lucide-react";

export default async function Hero() {
  const hero = await client.fetch(heroQuery, {}, options);
  const actions = await client.fetch(actionsQuery, {}, options);

  const primary = actions.admissionOpen
    ? actions.admissionAction
    : actions.exploreAction;

  const secondary = actions.admissionOpen
    ? actions.exploreAction
    : actions.contactAction;

  return (
    <>
      <section className="relative h-[90vh] max-h-[700px] min-h-[560px] w-full overflow-hidden ">
        {/* Background */}
        <HeroBackgroundSlider images={hero.slides} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 sm:bg-linear-to-r sm:from-primary/65 sm:to-primary/5" />

        <BackgroundPattern />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center text-white">
              {/* Badge*/}
              <FadeUp>
                <Badge
                  asChild
                  className="rounded-full border-border py-1"
                  variant="secondary"
                >
                  <Link href="/about">
                    Since 1984
                    <ArrowUpRight className="ml-1 size-4" />
                  </Link>
                </Badge>
              </FadeUp>

              {/* Heading */}
              <FadeUp delay={0.1}>
                <h1 className="mt-4 font-semibold text-4xl leading-[1.2]! tracking-[-0.035em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
                  {hero.title}
                </h1>
              </FadeUp>

              {/* Tagline */}
              <FadeUp delay={0.2}>
                <p className="mt-4 text-base sm:text-lg md:text-xl font-medium text-white/90">
                  {hero.subtitle}
                </p>
              </FadeUp>

              {/* Description */}
              <FadeUp delay={0.3}>
                <p className="mt-6 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
                  {hero.description}
                </p>
              </FadeUp>

              {/* CTAs */}
              <FadeUp delay={0.4}>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Button
                    variant="gold"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link href={primary.href}>{primary.label}</Link>
                  </Button>

                  <Button
                    variant="white"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link href={secondary.href}>{secondary.label}</Link>
                  </Button>
                </div>
              </FadeUp>

              {/* Trust line */}
              <FadeUp delay={0.5}>
                <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/75 max-w-3xl mx-auto px-2">
                  {hero.trustLine}
                </p>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
      <Highlights highlights={hero.highlights} />
    </>
  );
}
