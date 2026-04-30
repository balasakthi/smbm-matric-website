import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import { CARD_HOVER_SLIDE } from "@/lib/ui-constants";

interface Props {
  title?: string;
  description?: React.ReactNode;
  imageNode?: React.ReactNode;
  badge?: string;
  variant?: "default" | "secondary";
  imagePosition?: "top" | "bottom";
  className?: string;
}

export function ImageCard({
  title,
  description,
  imageNode,
  badge,
  variant = "default",
  imagePosition = "top",
  className,
}: Props) {
  const bgColor = variant === "secondary" ? "bg-secondary" : "bg-card";

  return (
    <Card
      className={cn(
        "group h-full flex flex-col overflow-hidden py-0 gap-1",
        CARD_HOVER_SLIDE,
        bgColor,
        className,
      )}
    >
      {/* --- TOP IMAGE SECTION --- */}
      {imagePosition === "top" && imageNode && (
        <div className="relative w-full aspect-video overflow-hidden">
          {imageNode}
          {badge && (
            <Badge className="absolute top-3 left-3 rounded-none opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10">
              {badge}
            </Badge>
          )}
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/40 pointer-events-none" />
        </div>
      )}

      {/* --- CONTENT SECTION --- */}
      {(title || description) && (
        <div className="flex flex-col flex-1">
          <CardHeader className="px-6 pt-6 pb-2">
            {title && (
              <h3 className="text-xl font-semibold tracking-tight line-clamp-1">
                {title}
              </h3>
            )}
            {/* Description ONLY if image is at bottom (per original logic) */}
            {imagePosition === "bottom" && description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </CardHeader>

          <CardContent className="px-6 pb-6 flex-1 flex flex-col">
            {imagePosition === "top" && description && (
              <>
                <Separator className="mb-3" />
                <div className="text-muted-foreground">{description}</div>
              </>
            )}
          </CardContent>
        </div>
      )}

      {/* --- BOTTOM IMAGE SECTION --- */}
      {imagePosition === "bottom" && imageNode && (
        <div className="mt-auto relative h-44 w-full overflow-hidden">
          {imageNode}
          {/* Overlay Gradient for Bottom Image */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/40 pointer-events-none" />
        </div>
      )}
    </Card>
  );
}
