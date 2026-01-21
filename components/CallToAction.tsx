import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeading from "./SectionHeading";
import FadeUp from "@/components/motion/FadeUp";
import { getAdmissionActions } from "@/utils/admissionStatus";

const { primary, secondary, title, description } = getAdmissionActions();

export default function CallToAction() {
  return (
    <section className="bg-accent text-accent-foreground py-16 sm:py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <SectionHeading
          className="text-foreground"
          title={title}
          description={description}
        />
        <FadeUp delay={0.2}>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild>
              <Link href={primary.href}>{primary.label}</Link>
            </Button>

            <Button size="lg" variant="white" asChild>
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
