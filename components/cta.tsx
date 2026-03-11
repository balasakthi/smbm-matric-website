import { ArrowUpRight } from "lucide-react";
import { BTN_HOVER_SCALE, BTN_ICON_HOVER_SLIDE } from "@/lib/ui-constants";
import { Button } from "@/components/ui/button";
import { CTA_QUERY } from "@/lib/sanityQuery";
import { fetchSectionData } from "@/lib/sanityFetch";
import Fade from "@/components/motion/Fade";
import Link from "next/link";

interface CtaBlock {
  title: string;
  supportLine: string;
  buttonText: string;
  buttonLink: string;
}

async function Cta() {
  const cta = await fetchSectionData<CtaBlock>(CTA_QUERY);

  if (!cta) return null;

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-secondary py-24"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-3xl">
            <Fade direction="up">
              <h2
                id="cta-heading"
                className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight"
              >
                {cta.title}
              </h2>
            </Fade>

            <Fade direction="up" delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {cta.supportLine}
              </p>
            </Fade>
          </div>

          {/* Right Button */}
          <Fade direction="up" delay={0.3}>
            <div className="flex justify-center lg:shrink-0 lg:justify-end">
              <Button asChild size="lg" className={`${BTN_HOVER_SCALE} group`}>
                <Link href={cta.buttonLink}>
                  {cta.buttonText}
                  <ArrowUpRight className={`${BTN_ICON_HOVER_SLIDE} size-5`} />
                </Link>
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Cta;
