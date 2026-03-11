import Fade from "./motion/Fade";
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { HERO_QUERY } from "@/lib/sanityQuery";
import {
  CONTAINER_SITE,
  BTN_HOVER_SCALE,
  BTN_ICON_HOVER_SLIDE,
} from "@/lib/ui-constants";
import { fetchSectionData } from "@/lib/sanityFetch";
import { urlFor } from "@/sanity/sanity-image";

interface HeroData {
  title: string;
  subtitle: string;
  established: string;
  schoolMotto: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: SanityImageSource;
}

export default async function Hero() {
  const hero = await fetchSectionData<HeroData>(HERO_QUERY);
  return (
    <section aria-labelledby="home-hero-title" className="flex flex-col">
      <div
        className={`${CONTAINER_SITE} grid gap-8 py-20 lg:grid-cols-2 lg:gap-12 lg:py-32 xl:gap-16`}
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

        <div className="flex flex-col items-start gap-10">
          <Fade delay={0.3} animateOnMount>
            <p className="max-w-prose text-foreground/80 sm:text-lg">
              {hero.subtitle}
            </p>
          </Fade>
          <Fade delay={0.4} animateOnMount>
            <Button
              asChild
              className={`${BTN_HOVER_SCALE} text-base`}
              size="lg"
            >
              <Link href={hero.buttonLink}>
                {hero.buttonText}
                <ArrowUpRight className={`${BTN_ICON_HOVER_SLIDE} size-5`} />
              </Link>
            </Button>
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
