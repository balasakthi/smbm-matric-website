import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { Fade } from "@/components/common/Fade";
import { urlFor } from "@/sanity/sanity-image";

interface HeroHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: SanityImageSource & { alt?: string };
  overlayOpacity?: number;
}

function HeroHeader({
  label,
  title,
  subtitle,
  backgroundImage,
  overlayOpacity = 0.2,
}: HeroHeaderProps) {
  const imageUrl = backgroundImage
    ? urlFor(backgroundImage).url()
    : "/school-building.webp";

  return (
    <section className="w-full" aria-label={title}>
      <div className="relative h-40 md:h-48 lg:h-80 w-full overflow-visible">
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={backgroundImage?.alt || `${title} - S.M.B.M. School`}
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

        {/* Content Panel */}
        <div className="absolute mx-6 md:mx-0 md:left-12 lg:left-20 bottom-0 translate-y-1/2 md:translate-y-1/2 z-10">
          <div className="bg-primary p-8 md:p-14 max-w-xl lg:max-w-2xl space-y-4">
            {/* Label */}
            {label && (
              <Fade direction="right" delay={0}>
                <p className="text-sm tracking-[0.35em] text-muted/80 uppercase">
                  {label}
                </p>
              </Fade>
            )}

            {/* Title */}
            <Fade direction="right" delay={0.2}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {title}
              </h1>
            </Fade>

            {/* Subtitle */}
            {subtitle && (
              <Fade direction="right" delay={0.3}>
                <p className="text-sm text-white/80">{subtitle}</p>
              </Fade>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for overlap */}
      <div className="h-28"></div>
    </section>
  );
}

export { HeroHeader };
