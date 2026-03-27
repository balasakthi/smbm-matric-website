import {
  CONTAINER_SITE,
  ICON_WRAPPER_CLASS,
  CARD_HOVER_SLIDE,
} from "@/lib/ui-constants";
import { ArrowUpRight } from "lucide-react";
import { Fade } from "@/components/common/Fade";
import { SectionHeading } from "@/components/layout/sectionHeading";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  intro: string;
  steps: Step[];
}

interface Step {
  title?: string;
  description?: string;
}

function getStepLabel(index: number) {
  const words = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX"];
  return words[index] || `${index + 1}`;
}

function Process({ title, intro, steps }: Props) {
  if (!steps || steps.length === 0) return null;

  return (
    <section aria-labelledby="process-heading" className="py-24">
      <div className={cn(CONTAINER_SITE)}>
        {/* Section Header */}
        <SectionHeading
          title={title}
          intro={intro}
          headingId="process-heading"
        />

        {/* Steps Grid */}
        <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {steps.map((step, index) => (
            <Fade
              key={`${step.title || "step"}-${index}`}
              direction="up"
              delay={index * 0.12}
            >
              <div
                className={cn(
                  `${CARD_HOVER_SLIDE} flex gap-4 hover:shadow-none`,
                  index % 2 === 1 && "lg:mt-20",
                )}
              >
                {/* Icon */}
                <div className={ICON_WRAPPER_CLASS}>
                  <ArrowUpRight />
                </div>

                {/* Content */}
                <div>
                  {/* Step Label */}
                  <p className="text-xs font-medium tracking-[0.35em] mb-2">
                    STEP {getStepLabel(index)}
                  </p>

                  {/* Title */}
                  {step.title && (
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  )}

                  {/* Description */}
                  {step.description && (
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Process };
