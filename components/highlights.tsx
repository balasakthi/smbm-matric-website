import Fade from "./motion/Fade";
import { fetchSectionData } from "@/lib/sanityFetch";
import { HIGHLIGHTS_QUERY } from "@/lib/sanityQuery";
import { quickHighlightIconMap, getIcon } from "@/lib/iconMaps";
import { School } from "lucide-react";
import {
  CONTAINER_SITE,
  CARD_HOVER_SLIDE,
  ICON_WRAPPER_CLASS,
} from "@/lib/ui-constants";
import { Card, CardHeader, CardContent, CardTitle } from "./ui/card";

interface HomeQuickHighlight {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

const Highlights = async () => {
  const quickHighlights =
    await fetchSectionData<HomeQuickHighlight[]>(HIGHLIGHTS_QUERY);

  return (
    <section
      aria-labelledby="highlights-heading"
      className="bg-secondary py-20 md:py-24"
    >
      <h2 id="highlights-heading" className="sr-only">
        School highlights
      </h2>

      <div
        className={`${CONTAINER_SITE} grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch`}
      >
        {quickHighlights.map((highlight, index) => {
          const IconComponent = getIcon(
            highlight.icon,
            quickHighlightIconMap,
            School,
          );

          return (
            <Fade
              key={highlight._id}
              delay={index * 0.08}
              duration={0.6}
              className="h-full"
            >
              <Card className={`${CARD_HOVER_SLIDE} h-full gap-2`}>
                <CardHeader>
                  <CardTitle>
                    <div className={`${ICON_WRAPPER_CLASS} mb-6`}>
                      <IconComponent strokeWidth={1.2} className="size-7" />
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-tight">
                      {highlight.title}
                    </h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </Fade>
          );
        })}
      </div>
    </section>
  );
};

export default Highlights;
