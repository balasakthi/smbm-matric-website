import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: "white" | "secondary";
  layout?: "vertical" | "horizontal";
  alignment?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  subtitle,
  icon,
  variant = "white",
  layout = "vertical",
  alignment = "center",
  children,
  className,
}: FeatureCardProps) {
  const isWhite = variant === "white";
  const isLeft = alignment === "left";
  const isHorizontal = layout === "horizontal";

  const baseStyles = cn(
    "group border h-full",
    CARD_HOVER_SLIDE,
    !isWhite
      ? "bg-secondary border-border/40 hover:border-border"
      : "bg-white border-border/50 hover:border-primary/50",
    className,
  );

  // Horizontal Layout
  if (isHorizontal) {
    return (
      <Card className={cn("flex flex-row p-4 gap-0", baseStyles)}>
        {icon && <div className="shrink-0">{icon}</div>}

        <div className="flex flex-col flex-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-serif font-semibold text-primary">
              {title}
            </CardTitle>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-medium">
                {subtitle}
              </p>
            )}
          </CardHeader>

          <CardContent>{children}</CardContent>
        </div>
      </Card>
    );
  }

  // Vertical Layout
  return (
    <Card className={cn("gap-4", baseStyles)}>
      <CardHeader className={cn(isLeft ? "text-left" : "text-center")}>
        {icon && <div>{icon}</div>}
        <CardTitle className="text-xl font-serif font-semibold text-primary pt-2">
          {title}
        </CardTitle>
        {subtitle && (
          <p className="text-sm text-muted-foreground font-medium">
            {subtitle}
          </p>
        )}
      </CardHeader>
      <CardContent className={cn(isLeft ? "text-left" : "text-center")}>
        {children}
      </CardContent>
    </Card>
  );
}
