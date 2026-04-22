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
  variant?: "white" | "secondary";
  children: React.ReactNode;
  className?: string;
  alignment?: "left" | "center";
}

export function FeatureCard({
  icon: Icon,
  title,
  variant = "white",
  children,
  className,
  alignment = "center",
}: Props) {
  const isWhite = variant === "white";
  const isLeft = alignment === "left";

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
