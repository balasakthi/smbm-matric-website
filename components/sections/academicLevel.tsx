import { ACADEMICS_LEVEL_QUERY } from "@/lib/sanityQuery";
import { ArrowUpRight, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fetchSectionData } from "@/lib/sanityFetch";
import {
  CONTAINER_SITE,
  ICON_WRAPPER_CLASS,
  BTN_HOVER_SCALE,
} from "@/lib/ui-constants";
import Link from "next/link";
import { academicsIconMap, getIcon } from "@/lib/iconMaps";
import Fade from "@/components/common/Fade";

interface Level {
  levelName: string;
  shortDescription: string;
  icon: string;
}

interface Academic {
  title: string;
  levels: Level[];
  buttonLink: string;
  buttonText: string;
}

const AcademicLevel = async () => {
  const academics = await fetchSectionData<Academic>(ACADEMICS_LEVEL_QUERY);

  if (!academics) return null;

  return (
    <section
      aria-labelledby="academics-heading"
      className="flex items-center justify-center bg-secondary py-20 md:py-28"
    >
      <div className={`${CONTAINER_SITE}`}>
        {/* Heading */}
        <Fade direction="up">
          <h2
            id="academics-heading"
            className="text-pretty text-3xl md:text-4xl font-semibold tracking-tight"
          >
            {academics.title}
          </h2>
        </Fade>

        {/* Levels Grid */}
        <div className="mt-12 grid gap-8 sm:mt-16 lg:grid-cols-2 lg:gap-x-16">
          {academics.levels.map((academic, index) => {
            const IconComponent = getIcon(
              academic.icon,
              academicsIconMap,
              School,
            );

            return (
              <Fade
                key={`${academic.levelName}-${index}`}
                direction="up"
                delay={index * 0.12}
              >
                <article className="group transition-all duration-300 ease-out hover:-translate-y-1">
                  <div className="flex gap-8">
                    {/* Icon */}
                    <div className={`${ICON_WRAPPER_CLASS} shrink-0`}>
                      <IconComponent strokeWidth={1.2} className="size-7" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {academic.levelName}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {academic.shortDescription}
                      </p>
                    </div>
                  </div>
                </article>
              </Fade>
            );
          })}
        </div>

        {/* CTA Button */}
        <Fade direction="up" delay={0.3}>
          <div className="mt-14 flex w-full justify-center">
            <Button
              asChild
              size="lg"
              className={`${BTN_HOVER_SCALE} mt-6 gap-2`}
            >
              <Link href={academics.buttonLink}>
                {academics.buttonText}
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AcademicLevel;
