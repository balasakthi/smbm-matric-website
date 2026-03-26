import Image from "next/image";
import Link from "next/link";
import type { SanityImageSource } from "@sanity/image-url";
import { Button } from "@/components/ui/button";
import { CONTAINER_SITE, BTN_HOVER_SCALE } from "@/lib/ui-constants";
import { Fade } from "@/components/common/Fade";
import { Quote, ArrowRight } from "lucide-react";
import { urlFor } from "@/sanity/sanity-image";
import { PortableText } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

interface LeadershipMessageProps {
  name: string;
  designation: string;
  highlightQuote?: string;
  previewMessage?: PortableTextBlock[];
  fullMessage?: PortableTextBlock[];
  photo: SanityImageSource;
  slug?: string;
  variant?: "preview" | "full";
}

function LeadershipMessage({
  name,
  designation,
  highlightQuote,
  previewMessage,
  fullMessage,
  photo,
  slug,
  variant = "preview",
}: LeadershipMessageProps) {
  // =========================
  // FULL PAGE (READING MODE)
  // =========================
  if (variant === "full") {
    return (
      <section className="py-20 md:py-28">
        <div className={`${CONTAINER_SITE} max-w-3xl`}>
          {/* Image */}
          <div className="mx-auto mb-8 w-40 h-40 relative overflow-hidden rounded-full">
            <Image
              src={urlFor(photo).url()}
              alt={name}
              fill
              className="object-cover"
            />
          </div>

          {/* Name */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-muted-foreground">{designation}</p>
          </div>

          {/* Quote */}
          {highlightQuote && (
            <div className="mt-8 text-center">
              <p className="italic text-lg">“{highlightQuote}”</p>
            </div>
          )}

          {/* Full Content */}
          {fullMessage && (
            <div className="mt-10 prose prose-neutral max-w-none">
              <PortableText value={fullMessage} />
            </div>
          )}
        </div>
      </section>
    );
  }

  // =========================
  // PREVIEW (HOME / ABOUT)
  // =========================
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute bottom-0 left-[calc(25%+1rem)] top-0 right-0 bg-secondary" />
      </div>
      <div className="absolute inset-0 bg-secondary lg:hidden" />

      <div className={`${CONTAINER_SITE} relative`}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Fade direction="left">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden shadow-xl hover:scale-[1.02] transition">
              <Image
                fill
                src={urlFor(photo).url()}
                alt={name}
                className="object-cover"
              />
            </div>
          </Fade>

          {/* Content */}
          <Fade direction="right" delay={0.2}>
            <div className="lg:pl-16">
              <Quote className="h-10 w-10 text-primary/60 mb-6" />

              <h2 className="text-3xl font-semibold md:text-4xl">
                Message from the {designation}
              </h2>

              {highlightQuote && (
                <p className="mt-4 italic text-muted-foreground">
                  “{highlightQuote}”
                </p>
              )}

              {/* ✅ FIXED: No <p> wrapper */}
              {previewMessage && (
                <div className="mt-6 text-muted-foreground leading-relaxed line-clamp-4">
                  <PortableText value={previewMessage} />
                </div>
              )}

              {/* Name */}
              <div className="mt-8">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm text-muted-foreground">{designation}</p>
              </div>

              {/* CTA */}
              {slug && (
                <Button
                  asChild
                  size="lg"
                  className={`${BTN_HOVER_SCALE} mt-8 gap-2 group`}
                >
                  <Link href={`/leadership/${slug}`}>
                    Read Full Message
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                  </Link>
                </Button>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export { LeadershipMessage };
