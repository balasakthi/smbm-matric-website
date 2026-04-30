"use client";

import { useState } from "react";

import { PortableText } from "@portabletext/react";
import { Target, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fade } from "@/components/common/Fade";

import { cn } from "@/lib/utils";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";
import type { PortableTextBlock } from "@portabletext/types";

interface Props {
  mission: PortableTextBlock[];
  vision: PortableTextBlock[];
}

function MissionVisionClient({ mission, vision }: Props) {
  const [showFullMission, setShowFullMission] = useState(false);
  const [showFullVision, setShowFullVision] = useState(false);

  return (
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
  );
}

export { MissionVisionClient };
