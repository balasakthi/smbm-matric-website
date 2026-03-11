import { Button } from "@/components/ui/button";
import { CONTAINER_SITE, BTN_HOVER_SCALE } from "@/lib/ui-constants";
import { CORRESPONDENT_MESSAGE_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import { Quote, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/sanity-image";
import Fade from "@/components/motion/Fade";
import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";

interface ManagementMessageData {
  name: string;
  designation: string;
  highlightQuote?: string;
  message: string;
  photo: SanityImageSource;
}

async function ManagementMessage() {
  const data = await fetchSectionData<ManagementMessageData>(
    CORRESPONDENT_MESSAGE_QUERY,
  );

  const firstParagraph = data?.message?.split("\n\n")[0];

  if (!data) return null;

  return (
    <section
      aria-labelledby="management-message-heading"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Desktop Background */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute bottom-0 left-[calc(25%+1rem)] top-0 right-0 bg-secondary" />
      </div>

      {/* Mobile Background */}
      <div className="absolute inset-0 bg-secondary lg:hidden" />

      <div className={`${CONTAINER_SITE} relative`}>
        <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <Fade direction="left">
            <div className="relative z-10">
              <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden shadow-xl transition-transform duration-500 ease-out hover:scale-[1.02]">
                <Image
                  fill
                  className="object-cover"
                  src={urlFor(data.photo).url()}
                  alt={data.name}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </Fade>

          {/* Text Column */}
          <Fade direction="right" delay={0.2}>
            <div className="relative z-10 lg:pl-16">
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/60 transition-all duration-500 ease-out hover:rotate-6 hover:scale-110" />
              </div>

              <h2
                id="management-message-heading"
                className="text-3xl font-semibold tracking-tight md:text-4xl"
              >
                Message from the Correspondent
              </h2>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {firstParagraph}
              </p>

              <div className="mt-8">
                <p className="text-lg font-semibold">{data.name}</p>
                <p className="text-sm text-muted-foreground">
                  {data.designation}
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className={`${BTN_HOVER_SCALE} mt-8 gap-2 group`}
              >
                <Link href="/message">
                  Read Full Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default ManagementMessage;
