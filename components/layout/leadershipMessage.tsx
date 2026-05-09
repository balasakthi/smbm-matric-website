import Link from "next/link";
import { PortableText } from "next-sanity";
import { Quote, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Fade } from "@/components/common/Fade";
import { FeatureImage } from "@/components/common/featureImage";

import { CONTAINER_SITE, BTN_HOVER_SCALE } from "@/lib/ui-constants";

import type { LeadershipMember } from "@/app/shared-types";

interface Props extends LeadershipMember {
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
}: Props) {
  // =========================
  // FULL PAGE (PREMIUM READING MODE)
  // =========================
  if (variant === "full") {
    return (
      <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
        {/* Subtle Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

        <div className={`${CONTAINER_SITE} relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* LEFT: STICKY SIDEBAR (Profile Card) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <Fade direction="up">
                <div className="relative group">
                  {/* Image with Decorative Frame */}
                  <div className="group flex flex-col h-full overflow-hidden rounded-xl border p-4 shadow-sm transition-all duration-300">
                    <div className="relative aspect-4/5 overflow-hidden rounded-xl">
                      {photo && (
                        <FeatureImage
                          image={photo}
                          className="h-full w-full object-cover grayscale-20% group-hover:grayscale-0 transition-all duration-500"
                        />
                      )}
                    </div>
                  </div>

                  {/* Floating Identity Tag */}
                  <div className="mt-8 space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight">
                      {name}
                    </h1>
                    <p className="text-lg font-medium text-muted-foreground uppercase tracking-wide">
                      {designation}
                    </p>
                    <div className="h-1 w-12 bg-primary/40 group-hover:bg-primary rounded-full transition-all" />
                  </div>
                </div>
              </Fade>
            </aside>

            {/* RIGHT: THE CONTENT (The Message) */}
            <main className="lg:col-span-8">
              <Fade direction="up" delay={0.2}>
                <div className="relative">
                  {/* Decorative Quote Icon at the start */}
                  <Quote className="hidden lg:inline absolute -top-16 -left-6 size-16 text-slate-200 -z-10 fill-slate-200" />

                  {highlightQuote && (
                    <div className="mb-10 pl-6 border-l-4 border-primary/40">
                      <p className="text-2xl font-serif italic text-slate-700 leading-snug">
                        “{highlightQuote}”
                      </p>
                    </div>
                  )}

                  {/* Body Text with high-end typography */}
                  <div
                    className="prose prose-lg prose-slate max-w-none 
                    prose-p:leading-relaxed prose-p:text-slate-600
                    prose-headings:text-slate-900 prose-strong:text-slate-900 space-y-6"
                  >
                    <PortableText value={fullMessage || []} />
                  </div>

                  {/* Formal Sign-off */}
                  <div className="mt-16 pt-8 border-t">
                    <p className="font-serif text-xl">Warm Regards,</p>
                    <div className="mt-4">
                      <p className="font-bold text-xl">{name}</p>
                      <p className="text-muted-foreground">{designation}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </main>
          </div>
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
            <div className="relative rounded-xl mx-auto aspect-square w-full max-w-md overflow-hidden shadow-xl">
              {photo && (
                <FeatureImage
                  image={photo}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              )}
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
                  <Link href={`/leadership/${slug?.current}`}>
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
