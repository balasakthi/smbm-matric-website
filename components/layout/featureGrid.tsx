import Fade from "@/components/common/Fade";
import SectionHeading from "./sectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CONTAINER_SITE,
  CARD_HOVER_SLIDE,
  ICON_WRAPPER_CLASS,
} from "@/lib/ui-constants";

interface CardItem {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
}

interface Props {
  title: string;
  intro: string;
  items: CardItem[];
  getIcon: (
    iconName: string,
    iconMap: Record<string, LucideIcon>,
    fallback: LucideIcon,
  ) => LucideIcon;
  iconMap: Record<string, LucideIcon>;
  fallbackIcon: LucideIcon;
  headingId: string;
  maxWidth?: string;
  containerClassName?: string;
  cardClassName?: string;
  titleClassName?: string;
}

function FeatureGrid({
  title,
  intro,
  items,
  getIcon,
  iconMap,
  fallbackIcon,
  headingId,
  maxWidth = "max-w-7xl",
  containerClassName,
  cardClassName,
  titleClassName,
}: Props) {
  return (
    <section
      aria-labelledby={headingId}
      className={cn("py-20 md:py-28", containerClassName)}
    >
      <div className={cn(`${CONTAINER_SITE} ${maxWidth}`)}>
        {/* Heading Block */}
        <SectionHeading
          title={title}
          intro={intro}
          headingId={headingId}
          titleClassName={titleClassName}
        />

        {/* Cards Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => {
            const IconComponent =
              item.icon && getIcon(item.icon, iconMap, fallbackIcon);

            return (
              <Fade
                key={`${item.title}-${index}`}
                direction="up"
                delay={index * 0.12}
              >
                <Card
                  className={cn(
                    `${CARD_HOVER_SLIDE} h-full gap-2`,
                    cardClassName,
                  )}
                >
                  <CardHeader>
                    <CardTitle>
                      <div className={`${ICON_WRAPPER_CLASS} mb-6`}>
                        {IconComponent && (
                          <IconComponent strokeWidth={1.2} className="size-7" />
                        )}
                      </div>
                      <h3 className="text-[17px] font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-xs pt-2 text-muted-foreground font-medium">
                          {item.subtitle}
                        </p>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureGrid;
