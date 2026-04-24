import {
  CARD_HOVER_SLIDE,
  ICON_WRAPPER_BASE,
  ICON_ANIMATION,
} from "@/lib/ui-constants";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

interface Props {
  icon: LucideIcon;
  title: string;
  description?: string;
  variant?: "white" | "secondary";
  layout?: "vertical" | "horizontal";
  children?: React.ReactNode;
  className?: string;
  alignment?: "left" | "center";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "white",
  layout = "vertical",
  children,
  className,
  alignment = "center",
}: Props) {
  const isWhite = variant === "white";
  const isLeft = alignment === "left";
  const isHorizontal = layout === "horizontal";

  if (isHorizontal) {
    return (
      <Card
        className={cn(
          "flex flex-row gap-4 p-4 rounded-xl border shadow-sm",
          CARD_HOVER_SLIDE,
          isWhite
            ? "bg-white border-border/50 hover:border-primary/50"
            : "bg-secondary border-border/40 hover:border-border",
          className,
        )}
      >
        <div
          className={cn(
            ICON_WRAPPER_BASE,
            isWhite
              ? "border-primary/20 bg-secondary group-hover:border-primary"
              : "border-white bg-white shadow-sm group-hover:border-primary",
          )}
        >
          <Icon
            strokeWidth={1.2}
            className={cn("size-7 text-primary", ICON_ANIMATION)}
          />
        </div>

        <div className="flex flex-col justify-center w-full">
          <p className="font-medium">{title}</p>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={cn(
        "h-full group border gap-4",
        CARD_HOVER_SLIDE,
        isWhite
          ? "bg-white border-border/50 hover:border-primary/50"
          : "bg-secondary border-border/40 hover:border-border",
        className,
      )}
    >
      <CardHeader className={cn(isLeft ? "text-left" : "text-center")}>
        <div
          className={cn(
            ICON_WRAPPER_BASE,
            isLeft ? "mx-0" : "mx-auto",
            isWhite
              ? "border-primary/20 bg-secondary group-hover:border-primary"
              : "border-white bg-white shadow-sm group-hover:border-primary",
          )}
        >
          <Icon
            strokeWidth={1.2}
            className={cn("size-7 text-primary", ICON_ANIMATION)}
          />
        </div>

        <CardTitle className="text-lg font-semibold text-primary">
          <h3>{title}</h3>
        </CardTitle>
      </CardHeader>

      <CardContent
        className={cn("space-y-2", isLeft ? "text-left" : "text-center")}
      >
        {children}
      </CardContent>
    </Card>
  );
}
