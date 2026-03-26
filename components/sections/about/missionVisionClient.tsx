"use client";

import type { PortableTextBlock } from "@portabletext/types";
import { Button } from "@/components/ui/button";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fade } from "@/components/common/Fade";
import { PortableText } from "@portabletext/react";
import { SectionWithHeader } from "@/components/layout/sectionWithHeader";
import { Target, Eye } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description: string;
  mission: PortableTextBlock[];
  vision: PortableTextBlock[];
  coreValues?: string;
  quote?: string;
}

function MissionVisionClient({
  title,
  description,
  mission,
  vision,
  coreValues,
  quote,
}: Props) {
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  return (
    <SectionWithHeader
      id="principles-heading"
      title={title}
      description={description}
      sectionClassName="bg-secondary"
    >
      {/* 🔹 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {/* Vision */}
        <Fade direction="up" delay={0.3}>
          <Card className={CARD_HOVER_SLIDE}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Eye className="size-6 text-primary" />
                <span className="text-xl font-semibold">Our Vision</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div
                className={cn(
                  "text-muted-foreground leading-relaxed transition-all duration-300",
                  !showFullVision && "line-clamp-3",
                )}
              >
                <PortableText value={vision} />
              </div>

              <Button
                variant="link"
                className="px-0 mt-2 transition-colors duration-200"
                onClick={() => setShowFullVision((prev) => !prev)}
              >
                {showFullVision ? "Show Less" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        </Fade>
        {/* Mission */}
        <Fade direction="up" delay={0.5}>
          <Card className={CARD_HOVER_SLIDE}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Target className="size-6 text-primary" />
                <span className="text-xl font-semibold">Our Mission</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div
                className={cn(
                  "text-muted-foreground leading-relaxed space-y-4 transition-all duration-300",
                  !showFullMission && "line-clamp-3",
                )}
              >
                <PortableText value={mission} />
              </div>

              <Button
                variant="link"
                className="px-0 mt-2 transition-colors duration-200"
                onClick={() => setShowFullMission((prev) => !prev)}
              >
                {showFullMission ? "Show Less" : "Read More"}
              </Button>
            </CardContent>
          </Card>
        </Fade>
      </div>

      {/* 🔹 Core Values */}
      {coreValues && (
        <Fade direction="up" delay={0.7}>
          <div className="mt-12 text-center">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Core Values
            </p>
            <p className="mt-2 text-lg font-medium tracking-wide">
              {coreValues}
            </p>
          </div>
        </Fade>
      )}

      {/* 🔹 Quote */}
      {quote && (
        <Fade direction="up" delay={0.9}>
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground italic">{quote}</p>
          </div>
        </Fade>
      )}
    </SectionWithHeader>
  );
}

export { MissionVisionClient };
