import { Fade } from "@/components/common/Fade";

import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  align?: "center" | "start";
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
        "grid gap-10 lg:grid-cols-2 lg:gap-24",
        align === "center" ? "items-center" : "items-start",
        reverse && "direction-rtl",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function TwoColumnMedia({
  children,
  bannerText,
  bannerTitle,
}: {
  children?: React.ReactNode;
  bannerText?: string;
  bannerTitle?: string;
}) {
  return (
    <Fade direction="left">
      <div className="relative w-full">
        {bannerTitle && (
          <div className="relative z-10 mb-4 w-full bg-primary p-6 text-right text-primary-foreground shadow-lg rounded-xl md:absolute md:-top-12 md:max-w-lg md:p-10">
            <p className="text-xs uppercase tracking-widest opacity-80">
              {bannerText}
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-[1.7rem]">
              {bannerTitle}
            </h2>
            <div className="mt-4 h-0.5 w-12 bg-primary-foreground/40" />
          </div>
        )}

        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl border border-border/50 bg-muted lg:-right-12">
          {children}
        </div>
      </div>
    </Fade>
  );
}

export function TwoColumnContent({ children }: { children: React.ReactNode }) {
  return (
    <Fade direction="right" delay={0.1}>
      <div className="w-full space-y-6">{children}</div>
    </Fade>
  );
}
