import Fade from "@/components/common/Fade";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  intro?: string;
  headingId?: string;
  titleClassName?: string;
}

function SectionHeading({ title, intro, headingId, titleClassName }: Props) {
  return (
    <div className="max-w-2xl">
      <Fade direction="up">
        <h2
          id={headingId}
          className={cn(
            "text-3xl md:text-4xl font-semibold tracking-tight leading-tight",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Fade>

      <Fade direction="up" delay={0.15}>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          {intro}
        </p>
      </Fade>
    </div>
  );
}

export default SectionHeading;
