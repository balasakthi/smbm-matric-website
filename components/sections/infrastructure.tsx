import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { CARD_HOVER_SLIDE, CONTAINER_SITE } from "@/lib/ui-constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Fade } from "@/components/common/Fade";
import { INFRASTRUCTURE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { urlFor } from "@/sanity/sanity-image";

interface Highlight {
  name: string;
  description: string;
  image: SanityImageSource;
}

interface Infrastructure {
  title: string;
  intro: string;
  highlights: Highlight[];
}

async function Infrastructure() {
  const infrastructure =
    await fetchSectionData<Infrastructure>(INFRASTRUCTURE_QUERY);

  if (!infrastructure) return null;

  return (
    <section
      aria-labelledby="infrastructure-heading"
      className="bg-secondary py-20 md:py-28"
    >
      <div className={`${CONTAINER_SITE}`}>
        {/* Heading */}
        <div className="max-w-2xl">
          <Fade direction="up">
            <h2
              id="infrastructure-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight"
            >
              {infrastructure.title}
            </h2>
          </Fade>

          <Fade direction="up" delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {infrastructure.intro}
            </p>
          </Fade>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {infrastructure.highlights.map((highlight, index) => (
            <Fade
              key={`${highlight.name}-${index}`}
              direction="up"
              delay={index * 0.12}
            >
              <Card className={`${CARD_HOVER_SLIDE} pb-0 overflow-hidden`}>
                <CardHeader>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {highlight.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardHeader>

                <CardContent className="mt-auto px-0 pb-0">
                  <div className="relative mt-4 h-44 w-full overflow-hidden">
                    <Image
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      src={urlFor(highlight.image).url()}
                      alt={`Infrastructure: ${highlight.name}`}
                      width={600}
                      height={400}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/40" />
                  </div>
                </CardContent>
              </Card>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Infrastructure };
