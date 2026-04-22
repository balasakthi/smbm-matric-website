import { LucideIcon, School } from "lucide-react";

import { ActionButton } from "./actionButton";
import { Fade } from "@/components/common/Fade";

import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/iconMaps";
import { ICON_ANIMATION, ICON_WRAPPER_BASE } from "@/lib/ui-constants";

interface GridItem {
  icon?: string;
  levelName?: string;
  shortDescription?: string;
}

interface Props {
  items: GridItem[];
  columns?: 2 | 3;
  button?: {
    text: string;
    href: string;
  };
  iconMap: Record<string, LucideIcon>;
}

function IconGridSection({ items, columns = 2, button, iconMap }: Props) {
  const gridCols = columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <section>
      <div className={`grid gap-12 ${gridCols}`}>
        {items.map((item, index) => {
          const IconComponent = getIcon(item.icon, iconMap, School);

          return (
            <Fade key={index} direction="up" delay={index * 0.1}>
              <article className="group flex gap-6 md:gap-8 items-start">
                <div
                  className={cn(
                    ICON_WRAPPER_BASE,
                    "border-white bg-white shadow-sm group-hover:border-primary shrink-0",
                  )}
                >
                  <IconComponent
                    strokeWidth={1.2}
                    className={cn("size-7 text-primary", ICON_ANIMATION)}
                  />
                </div>

                <div className="flex flex-col justify-center w-full">
                  <h3 className="text-lg font-semibold text-primary">
                    {item.levelName}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground/90">
                    {item.shortDescription}
                  </p>
                </div>
              </article>
            </Fade>
          );
        })}
      </div>
      {/* Optional CTA */}
      {button && (
        <Fade direction="up" delay={0.4}>
          <div className="mt-16 flex justify-center">
            <ActionButton href={button.href} text={button.text} size="lg" />
          </div>
        </Fade>
      )}
    </section>
  );
}

export { IconGridSection };
