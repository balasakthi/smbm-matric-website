import { ActionButton } from "@/components/common/actionButton";
import { Fade } from "@/components/common/Fade";

interface Props {
  title: string;
  supportLine: string;
  buttonLink: string;
  buttonText: string;
  formId?: string;
}

async function CTA({
  title,
  supportLine,
  buttonLink,
  buttonText,
  formId,
}: Props) {
  return (
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 max-w-3xl">
          <Fade direction="up">
            <h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
            >
              {title}
            </h2>
          </Fade>

          <Fade direction="up" delay={0.15}>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {supportLine}
            </p>
          </Fade>
        </div>

        {/* Right Button */}
        <Fade direction="up" delay={0.3}>
          <div className="flex justify-center lg:shrink-0 lg:justify-end">
            <ActionButton
              text={buttonText}
              href={buttonLink}
              formId={formId}
              size="lg"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export { CTA };
