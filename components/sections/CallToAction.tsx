import { Button } from "@/components/ui/button";
import { callToActionQuery, actionsQuery, options } from "@/lib/sanityQuery";
import { client } from "@/sanity/client";
import FadeUp from "@/components/motion/FadeUp";
import Link from "next/link";
import SectionHeading from "../SectionHeading";

export default async function CallToAction() {
  const callToAction = await client.fetch(callToActionQuery, {}, options);
  const actions = await client.fetch(actionsQuery, {}, options);

  const primary = actions.admissionOpen
    ? actions.admissionAction
    : actions.exploreAction;

  const secondary = actions.admissionOpen
    ? actions.exploreAction
    : actions.contactAction;

  return (
    <section className="bg-accent text-accent-foreground py-16 sm:py-20">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <SectionHeading
          className="text-foreground"
          title={callToAction.title}
          description={callToAction.description}
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
