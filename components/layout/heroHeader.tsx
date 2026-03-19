import Image from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/sanity/sanity-image";
import Fade from "@/components/common/Fade";

interface HeroHeaderProps {
  label: string;
  title: string;
  backgroundImage: SanityImageSource & { alt?: string };
}

export default function HeroHeader({
  label,
  title,
  backgroundImage,
}: HeroHeaderProps) {
  return (
    <section className="w-full">
      <div className="relative h-40 md:h-48 lg:h-80 w-full overflow-visible">
        {/* Image */}
        <Image
          src={urlFor(backgroundImage).url()}
          alt={backgroundImage.alt || `${title} - SMBM School`}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />

        {/* Blue Panel */}
        <div className="absolute mx-6 md:mx-0 md:left-12 lg:left-20 bottom-0 translate-y-1/2 z-10">
          <div className="bg-primary p-8 md:p-14 max-w-xl md:max-w-2xl">
            <p className="text-sm tracking-[0.35em] text-white/80 uppercase mb-4">
              {label}
            </p>
            <Fade direction="right">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {title}
              </h1>
            </Fade>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-32 md:h-40"></div>
    </section>
  );
}
