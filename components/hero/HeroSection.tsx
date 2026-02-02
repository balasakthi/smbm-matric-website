import { Button } from "@/components/ui/button";
import { client } from "@/sanity/client";
import { heroQuery, actionsQuery, options } from "@/lib/sanityQuery";
import FadeUp from "@/components/motion/FadeUp";
import HeroBackgroundSlider from "@/components/hero/HeroBackgroundSlider";
import Highlights from "@/components/hero/Highlights";
import Link from "next/link";

export default async function HeroSection() {
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
      <section className="relative h-[90vh] max-h-[800px] min-h-[560px] w-full overflow-hidden">
        {/* Background */}
        <HeroBackgroundSlider images={hero.slides} />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/80 sm:bg-linear-to-r sm:from-primary/65 sm:to-primary/15" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl text-white">
              {/* Heading */}
              <FadeUp>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  {hero.title}
                </h1>
              </FadeUp>

              {/* Tagline */}
              <FadeUp delay={0.1}>
                <p className="mt-4 text-lg sm:text-xl font-medium text-white/90">
                  {hero.subtitle}
                </p>
              </FadeUp>

              {/* Description */}
              <FadeUp delay={0.2}>
                <p className="mt-6 max-w-2xl text-base text-white/85 leading-relaxed">
                  {hero.description}
                </p>
              </FadeUp>

              {/* CTAs */}
              <FadeUp delay={0.3}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button variant="gold" size="lg" asChild>
                    <Link href={primary.href}>{primary.label}</Link>
                  </Button>

                  <Button variant="white" size="lg" asChild>
                    <Link href={secondary.href}>{secondary.label}</Link>
                  </Button>
                </div>
              </FadeUp>

              {/* Trust line */}
              <FadeUp delay={0.4}>
                <p className="mt-6 text-sm text-white/75 max-w-2xl">
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
