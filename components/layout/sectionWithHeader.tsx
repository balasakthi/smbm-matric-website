import { CONTAINER_SITE } from "@/lib/ui-constants";
import { Fade } from "@/components/common/Fade";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  label?: string;
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  sectionClassName?: string;
  headerClassName?: string;
  headingAlign?: "left" | "center";
  children: React.ReactNode;
}

function SectionWithHeader({
  id,
  label,
  title,
  description,
  titleClassName = "text-3xl md:text-4xl font-semibold tracking-tight leading-tight",
  descriptionClassName = "mt-3 text-lg text-muted-foreground leading-relaxed",
  contentClassName = "mt-8 md:mt-14",
  sectionClassName,
  headerClassName,
  headingAlign = "left",
  children,
}: Props) {
  const alignmentClasses =
    headingAlign === "center" ? "mx-auto text-center" : "text-left";

  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", sectionClassName)}
      aria-labelledby={id}
    >
      <div className={CONTAINER_SITE}>
        <div className={cn(headerClassName, "max-w-2xl", alignmentClasses)}>
          {label && (
            <Fade direction="up">
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                {label}
              </p>
            </Fade>
          )}

          <Fade direction="up">
            <h2 id={id} className={cn(titleClassName)}>
              {title}
            </h2>
          </Fade>

          {description && (
            <Fade direction="up" delay={0.15}>
              <p className={cn(descriptionClassName)}>{description}</p>
            </Fade>
          )}
        </div>
        <div className={cn(contentClassName)}>{children}</div>
      </div>
    </section>
  );
}

export { SectionWithHeader };
