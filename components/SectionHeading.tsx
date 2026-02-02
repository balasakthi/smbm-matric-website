import FadeUp from "@/components/motion/FadeUp";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

function SectionHeading({ title, description, className }: Props) {
  return (
    <>
      <FadeUp>
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl leading-tight">
          {title}
        </h2>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className={cn("text-pretty text-muted-foreground", className)}>
          {description}
        </p>
      </FadeUp>
    </>
  );
}

export default SectionHeading;
