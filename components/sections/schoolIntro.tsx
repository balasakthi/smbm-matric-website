import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import {
  CONTAINER_SITE,
  BTN_HOVER_SCALE,
  BTN_ICON_HOVER_SLIDE,
} from "@/lib/ui-constants";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SCHOOL_INTRO_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { urlFor } from "@/sanity/sanity-image";
import { Fade } from "@/components/common/Fade";

interface SchoolIntroData {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  aboutImage: SanityImageSource;
}

async function SchoolIntro() {
  const intro = await fetchSectionData<SchoolIntroData>(SCHOOL_INTRO_QUERY);

  return (
    <section aria-labelledby="school-intro-title" className="py-20 md:py-32">
      <div className={CONTAINER_SITE}>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
          {/* LEFT COLUMN */}
          <Fade direction="left">
            <div className="relative w-full">
              <div className="relative z-10 mb-4 w-full bg-primary p-6 text-right text-white shadow-lg rounded-xl md:absolute md:-top-12 md:max-w-lg md:p-10">
                <p className="text-xs uppercase tracking-widest text-white/80">
                  {intro.subtitle}
                </p>

                <h2
                  id="school-intro-title"
                  className="mt-2 text-2xl font-semibold tracking-tight md:text-[1.8rem]"
                >
                  {intro.title}
                </h2>

                <div className="mt-4 h-0.5 w-12 bg-white/40" />
              </div>

              <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border/50 bg-muted lg:-right-12">
                <Image
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  src={urlFor(intro.aboutImage).url()}
                  alt="Entrance image of S.M.B.M. Matric."
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </Fade>

          {/* RIGHT COLUMN */}
          <Fade direction="right" delay={0.1}>
            <div className="w-full">
              <p className="text-[15px] leading-7 text-muted-foreground md:text-base whitespace-pre-line">
                {intro.description}
              </p>

              <Fade delay={0.2} direction="up">
                <Button
                  asChild
                  className={`${BTN_HOVER_SCALE} mt-6 gap-2`}
                  size="lg"
                >
                  <Link href={intro.buttonLink}>
                    {intro.buttonText}
                    <ArrowRight className={`${BTN_ICON_HOVER_SLIDE} size-4`} />
                  </Link>
                </Button>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export { SchoolIntro };
