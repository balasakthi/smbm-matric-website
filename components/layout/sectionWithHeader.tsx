import { Fade } from "@/components/common/Fade";

import { CONTAINER_SITE } from "@/lib/ui-constants";
import { cn } from "@/lib/utils";

type Spacing = "sm" | "md" | "lg" | "none";

interface Props {
  id?: string;
  label?: string;
  title?: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  sectionClassName?: string;
  headerClassName?: string;
  headingAlign?: "left" | "center";
  children: React.ReactNode;
  spacing?: Spacing;
}

const spacingMap: Record<Spacing, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-32",
};

function SectionWithHeader({
  id,
  label,
  title,
  subtitle,
  titleClassName = "text-3xl md:text-4xl font-semibold tracking-tight leading-tight",
  subtitleClassName = "mt-3 text-lg text-muted-foreground leading-relaxed",
  contentClassName = "mt-8 md:mt-14",
  sectionClassName,
  headerClassName,
  headingAlign = "left",
  spacing = "md",
  children,
}: Props) {
  const alignmentClasses =
    headingAlign === "center" ? "mx-auto text-center" : "text-left";

  const hasHeader = label || title || subtitle;

  return (
    <section
      id={id}
      className={cn(spacingMap[spacing], sectionClassName)}
      aria-labelledby={title ? id : undefined}
    >
      <div className={CONTAINER_SITE}>
        {hasHeader && (
          <div className={cn(headerClassName, "max-w-2xl", alignmentClasses)}>
            {label && (
              <Fade direction="up">
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                  {label}
                </p>
              </Fade>
            )}

            {title && (
              <Fade direction="up">
                <h2 id={id} className={cn(titleClassName)}>
                  {title}
                </h2>
              </Fade>
            )}

            {subtitle && (
              <Fade direction="up" delay={0.15}>
                <p className={cn(subtitleClassName)}>{subtitle}</p>
              </Fade>
            )}
          </div>
        )}

        <div className={cn(hasHeader ? contentClassName : "")}>{children}</div>
      </div>
    </section>
  );
}

export { SectionWithHeader };
