import Fade from "@/components/common/Fade";
import Image from "next/image";
import Link from "next/link";
import SectionButton from "@/components/layout/sectionButton";
import type { SanityImageSource } from "@sanity/image-url";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import { HERO_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { urlFor } from "@/sanity/sanity-image";

interface HeroData {
  title: string;
  subtitle: string;
  established: string;
  schoolMotto: string;
  admissionText: string;
  admissionOpen: boolean;
  buttonText: string;
  buttonLink: string;
  backgroundImage: SanityImageSource;
}

export default async function Hero() {
  const hero = await fetchSectionData<HeroData>(HERO_QUERY);
  return (
    <section aria-labelledby="home-hero-title" className="flex flex-col">
      <div
        className={`${CONTAINER_SITE} grid gap-8 py-20 lg:grid-cols-2 lg:gap-12 lg:py-24 xl:gap-16`}
      >
        <div>
          <Fade animateOnMount>
            <Badge
              asChild
              className="rounded-full border-border py-1 px-3 text-xs tracking-wide"
              variant="secondary"
            >
              <Link href="/about">
                {hero.established}
                <ArrowUpRight className="ml-1 size-3" />
              </Link>
            </Badge>
          </Fade>

          <Fade delay={0.1} animateOnMount>
            <h1
              id="home-hero-title"
              className="mt-6 max-w-[20ch] font-semibold text-3xl leading-tight tracking-tight md:text-4xl lg:text-[2.5rem] xl:text-[2.9rem]"
            >
              {hero.title}
            </h1>
          </Fade>

          <Fade delay={0.2} animateOnMount>
            <p className="ml-1 mt-4 font-medium uppercase text-sm tracking-[0.2em] text-muted-foreground">
              {hero.schoolMotto}
            </p>
          </Fade>
        </div>

        <div className="flex flex-col gap-8">
          <Fade delay={0.3} animateOnMount>
            <p className="max-w-prose text-foreground/80 sm:text-lg">
              {hero.subtitle}
            </p>
          </Fade>
          <Fade delay={0.4} animateOnMount>
            {hero.admissionOpen ? (
              <div className="bg-secondary/60 max-w-80 md:max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 backdrop-blur-sm shadow-md hover:shadow-lg p-4 border border-border/50 rounded-xl">
                <div className="flex items-center gap-3 text-left">
                  <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
                    <Sparkles className="size-4 text-primary" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary">
                      {hero.admissionText}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      KG to Class XII
                    </span>
                  </div>
                </div>
                <SectionButton href={hero.buttonLink} text={hero.buttonText} />
              </div>
            ) : (
              <SectionButton href={hero.buttonLink} text={hero.buttonText} />
            )}
          </Fade>
        </div>
      </div>
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
            src={urlFor(hero.backgroundImage).url()}
            alt="S.M.B.M. school campus"
            sizes="100vw"
            priority
          />
        </Fade>
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
}
