import { Fade } from "@/components/common/Fade";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  align?: "center" | "start" | "stretch";
}

export function TwoColumn({
  children,
  className,
  reverse,
  align = "center",
}: Props) {
  return (
    <div
      className={cn(
        "grid gap-10 lg:grid-cols-2 lg:gap-14",
        align === "center" && "items-center",
        align === "start" && "items-start",
        align === "stretch" && "items-stretch",
        reverse && "direction-rtl",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface TwoColumnMediaProps {
  children?: React.ReactNode;
  bannerText?: string;
  bannerTitle?: string;
  aspect?: "square" | "video" | "4/3" | "auto";
  className?: string;
}

const aspectRatios = {
  square: "aspect-square",
  video: "aspect-video",
  "4/3": "aspect-[4/3]",
};

export function TwoColumnMedia({
  children,
  bannerText,
  bannerTitle,
  aspect = "4/3",
  className,
}: TwoColumnMediaProps) {
  const aspectClass =
    aspect === "auto"
      ? "h-full min-h-[350px] lg:min-h-[500px]"
      : aspectRatios[aspect];

  return (
    <Fade direction="left">
      <div className="relative w-full h-full">
        {bannerTitle && (
          <div className="lg:-left-6 relative z-10 mb-4 w-full bg-primary p-6 text-right text-primary-foreground shadow-lg rounded-xl md:absolute md:-top-16 md:max-w-lg md:p-10">
            <p className="text-xs uppercase tracking-widest opacity-80">
              {bannerText}
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-[1.7rem]">
              {bannerTitle}
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary-foreground/40" />
          </div>
        )}

        <div
          className={cn(
            "relative w-full overflow-hidden rounded-xl border border-border/50 bg-muted",
            aspectClass,
            className,
          )}
        >
          {children}
        </div>
      </div>
    </Fade>
  );
}

interface TwoColumnContentProps {
  children: React.ReactNode;
  className?: string;
}

export function TwoColumnContent({
  children,
  className,
}: TwoColumnContentProps) {
  return (
    <Fade direction="right" delay={0.1}>
      <div className={cn("w-full space-y-6", className)}>{children}</div>
    </Fade>
  );
}
