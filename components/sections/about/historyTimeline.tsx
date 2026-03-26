"use client";

import { Fade } from "@/components/common/Fade";
import { CONTAINER_SITE } from "@/lib/ui-constants";
import type { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";

interface TimelineItem {
  year: string;
  content: PortableTextBlock[];
}

interface Props {
  title: string;
  subtitle: string;
  timeline: TimelineItem[];
  about?: PortableTextBlock[];
  philosophy?: string;
  spirit?: string[];
}

function HistoryTimeline({
  title,
  subtitle,
  timeline,
  about,
  philosophy,
  spirit,
}: Props) {
  console.log(title, subtitle, timeline, about, philosophy, spirit);
  return (
    <section className="pt-12 pb-20 md:pb-28 bg-background">
      <div className={CONTAINER_SITE}>
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <Fade direction="up">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {title}
            </h2>
          </Fade>
          <Fade direction="up" delay={0.1}>
            <p className="mt-3 text-muted-foreground sm:text-lg">{subtitle}</p>
          </Fade>
        </div>

        {/* MAIN GRID */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* TIMELINE */}
          <div className="lg:col-span-2 relative">
            <div className="border-l border-border/60 pl-6 space-y-10">
              {timeline.map((item, index) => (
                <Fade key={index} direction="up" delay={index * 0.1}>
                  <div className="relative">
                    {/* DOT */}
                    <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-primary" />

                    {/* CONTENT */}
                    <div>
                      <p className="font-semibold text-primary text-lg">
                        {item.year}
                      </p>
                      <div className="mt-2 text-muted-foreground leading-relaxed">
                        <PortableText value={item.content} />
                      </div>
                    </div>
                  </div>
                </Fade>
              ))}
            </div>
          </div>

          {/* ABOUT CARD */}
          {about && (
            <Fade direction="left">
              <div className="rounded-2xl border border-border/50 bg-muted p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-4">About DNU</h3>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <PortableText value={about} />
                </div>
              </div>
            </Fade>
          )}
        </div>

        {/* PHILOSOPHY */}
        {philosophy && (
          <Fade direction="up" delay={0.2}>
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground italic text-lg">
                “{philosophy}”
              </p>
            </div>
          </Fade>
        )}

        {/* SPIRIT */}
        {spirit && spirit.length > 0 && (
          <Fade direction="up" delay={0.3}>
            <div className="mt-10 text-center space-y-2">
              {spirit.map((line, i) => (
                <p key={i} className="text-lg font-medium">
                  {line}
                </p>
              ))}
            </div>
          </Fade>
        )}
      </div>
    </section>
  );
}

export { HistoryTimeline };
